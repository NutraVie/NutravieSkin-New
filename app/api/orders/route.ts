import { appendFile, mkdir } from 'node:fs/promises';
import { NextResponse } from 'next/server';
import { getProduct } from '@/lib/products';
import { site } from '@/lib/site';
import { normalizePhone } from '@/lib/validate';

export const runtime = 'nodejs';

type Body = {
  items?: { slug?: unknown; qty?: unknown }[];
  customer?: Record<string, unknown>;
  payment?: unknown;
  locale?: unknown;
  website?: unknown;
};

const clean = (v: unknown, max: number) => String(v ?? '').replace(/\s+/g, ' ').trim().slice(0, max);

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid' }, { status: 400 });
  }

  // حقل مخفي: إلا عمّرو شي روبو كنتجاهلو الطلب بلا ما نبينو ليه
  if (clean(body.website, 50)) return NextResponse.json({ id: 'NV-0', total: 0 });

  const items = (Array.isArray(body.items) ? body.items : [])
    .map((i) => ({ product: getProduct(String(i.slug)), qty: Math.floor(Number(i.qty)) }))
    .filter((i) => i.product && i.qty >= 1 && i.qty <= 20) as { product: NonNullable<ReturnType<typeof getProduct>>; qty: number }[];

  const c = body.customer ?? {};
  const customer = {
    name: clean(c.name, 80),
    phone: normalizePhone(clean(c.phone, 30)),
    city: clean(c.city, 60),
    address: clean(c.address, 200),
    note: clean(c.note, 300),
  };

  if (!items.length || customer.name.length < 3 || !customer.phone || customer.city.length < 2 || customer.address.length < 5) {
    return NextResponse.json({ error: 'invalid' }, { status: 400 });
  }
  if (body.payment !== 'cod') return NextResponse.json({ error: 'payment' }, { status: 400 });

  // الأثمنة كتتحسب هنا فالسيرفر، ماشي من المتصفح
  const subtotal = items.reduce((t, i) => t + i.product.price * i.qty, 0);
  const total = subtotal + site.shipping;
  const now = new Date();
  const id = `NV-${now.toISOString().slice(2, 10).replace(/-/g, '')}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;

  const order = {
    id,
    date: now.toISOString(),
    locale: body.locale === 'fr' ? 'fr' : 'ar',
    payment: 'cod',
    customer,
    items: items.map((i) => ({ sku: i.product.sku, name: i.product.name.fr, qty: i.qty, unit: i.product.price })),
    subtotal,
    shipping: site.shipping,
    total,
  };

  const message = [
    `طلب جديد ${id}`,
    ...items.map((i) => `${i.qty} × ${i.product.name.ar} (${i.product.price} درهم)`),
    `التوصيل: ${site.shipping} درهم`,
    `المجموع: ${total} درهم (الدفع عند الاستلام)`,
    `الاسم: ${customer.name}`,
    `الهاتف: ${customer.phone}`,
    `المدينة: ${customer.city}`,
    `العنوان: ${customer.address}`,
    customer.note ? `ملاحظة: ${customer.note}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  const delivered = await deliver(order, message);
  if (!delivered) {
    console.error('Order not delivered: no working channel configured', id);
    return NextResponse.json({ error: 'unavailable' }, { status: 503 });
  }
  return NextResponse.json({ id, total, message });
}

async function deliver(order: unknown, message: string): Promise<boolean> {
  const jobs: Promise<boolean>[] = [];
  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, ORDERS_WEBHOOK_URL, CALLMEBOT_APIKEY } = process.env;
  const whatsapp = site.whatsapp;

  if (whatsapp && CALLMEBOT_APIKEY) {
    const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent('+' + whatsapp)}&text=${encodeURIComponent(message)}&apikey=${encodeURIComponent(CALLMEBOT_APIKEY)}`;
    jobs.push(fetch(url).then((r) => r.ok).catch(() => false));
  }
  if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
    jobs.push(post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, { chat_id: TELEGRAM_CHAT_ID, text: message }));
  }
  if (ORDERS_WEBHOOK_URL) jobs.push(post(ORDERS_WEBHOOK_URL, order));

  if (process.env.NODE_ENV !== 'production') {
    await mkdir('.data', { recursive: true });
    await appendFile('.data/orders.jsonl', JSON.stringify(order) + '\n');
  }
  const results = await Promise.all(jobs);
  if (results.some(Boolean)) return true;
  // بلا قناة أوتوماتيكية: الكليان هو اللي كيصيفط الرسالة الجاهزة فالواتساب
  if (whatsapp) return true;
  return process.env.NODE_ENV !== 'production';
}

async function post(url: string, payload: unknown) {
  try {
    const res = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) });
    return res.ok;
  } catch {
    return false;
  }
}

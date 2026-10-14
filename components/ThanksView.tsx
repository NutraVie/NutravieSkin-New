'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { dict } from '@/lib/dict';
import { price, site, type Locale } from '@/lib/site';

type Order = { id: string; total: number; message?: string };

export function ThanksView({ locale }: { locale: Locale }) {
  const t = dict[locale].thanks;
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('nutravie-last-order');
      if (!raw) return;
      const o = JSON.parse(raw) as Order;
      setOrder(o);
      // كنحلو الواتساب مرة وحدة لكل طلب؛ البوطون كيبقى إلا رجع الكليان
      const key = `nutravie-wa-${o.id}`;
      if (site.whatsapp && o.message && !sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, '1');
        const timer = setTimeout(() => {
          window.location.href = waLink(o);
        }, 1500);
        return () => clearTimeout(timer);
      }
    } catch {}
  }, []);

  return (
    <div className="thanks">
      <h1>{t.title}</h1>
      <p>{site.whatsapp && order?.message ? t.waStep : t.text}</p>
      {order ? (
        <dl className="totals thanks-box">
          <div><dt>{t.order}</dt><dd dir="ltr">{order.id}</dd></div>
          <div className="totals-total"><dt>{t.total}</dt><dd>{price(order.total, locale)}</dd></div>
        </dl>
      ) : null}
      <div className="thanks-actions">
        {site.whatsapp && order ? (
          <a className="btn btn-solid" href={waLink(order)} rel="noopener">{t.whatsapp}</a>
        ) : null}
        <Link className="btn btn-line" href={`/${locale}`}>{t.home}</Link>
      </div>
    </div>
  );
}

function waLink(o: Order) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(o.message ?? o.id)}`;
}

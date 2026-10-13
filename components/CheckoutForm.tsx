'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useCart } from '@/lib/cart';
import { dict } from '@/lib/dict';
import { getProduct } from '@/lib/products';
import { price, type Locale } from '@/lib/site';
import { normalizePhone } from '@/lib/validate';
import { Totals } from './CartView';

type Errors = Partial<Record<'name' | 'phone' | 'city' | 'address' | 'send', string>>;

export function CheckoutForm({ locale }: { locale: Locale }) {
  const t = dict[locale];
  const c = t.checkout;
  const router = useRouter();
  const { lines, ready, clear } = useCart();
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);

  if (!ready) return <div className="cart-skeleton" aria-hidden="true" />;

  if (lines.length === 0 && !sending) {
    return (
      <div className="empty">
        <p>{t.cart.empty}</p>
        <Link href={`/${locale}#produits`} className="btn btn-solid">{t.cart.emptyCta}</Link>
      </div>
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? '').trim();
    const customer = { name: get('name'), phone: get('phone'), city: get('city'), address: get('address'), note: get('note') };
    const errs: Errors = {};
    if (customer.name.length < 3) errs.name = c.errName;
    if (!normalizePhone(customer.phone)) errs.phone = c.errPhone;
    if (customer.city.length < 2) errs.city = c.errCity;
    if (customer.address.length < 5) errs.address = c.errAddress;
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      (e.currentTarget.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    setSending(true);
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ items: lines, customer, payment: 'cod', locale, website: get('website') }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const data = (await res.json()) as { id: string; total: number };
      try {
        sessionStorage.setItem('nutravie-last-order', JSON.stringify(data));
      } catch {}
      router.push(`/${locale}/commande/merci`);
      clear();
    } catch {
      setSending(false);
      setErrors({ send: c.errSend });
    }
  }

  const field = (name: 'name' | 'phone' | 'city' | 'address', label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}, hint?: string) => (
    <div className="field">
      <label htmlFor={`f-${name}`}>{label}</label>
      <input id={`f-${name}`} name={name} required onChange={() => errors[name] && setErrors((e) => ({ ...e, [name]: undefined }))} aria-invalid={errors[name] ? true : undefined} aria-describedby={errors[name] ? `e-${name}` : hint ? `h-${name}` : undefined} {...props} />
      {errors[name] ? <p className="field-error" id={`e-${name}`}>{errors[name]}</p> : hint ? <p className="field-hint" id={`h-${name}`}>{hint}</p> : null}
    </div>
  );

  return (
    <form className="checkout-layout" onSubmit={onSubmit} noValidate>
      <div className="checkout-main">
        <fieldset>
          <legend>{c.info}</legend>
          {field('name', c.name, { autoComplete: 'name' })}
          {field('phone', c.phone, { type: 'tel', inputMode: 'tel', autoComplete: 'tel', dir: 'ltr' }, c.phoneHint)}
          {field('city', c.city, { autoComplete: 'address-level2' })}
          {field('address', c.address, { autoComplete: 'street-address' })}
          <div className="field">
            <label htmlFor="f-note">{c.note}</label>
            <textarea id="f-note" name="note" rows={2} maxLength={300} />
          </div>
          <div className="hp" aria-hidden="true">
            <label htmlFor="f-website">Website</label>
            <input id="f-website" name="website" tabIndex={-1} autoComplete="off" />
          </div>
        </fieldset>
        <fieldset>
          <legend>{c.payment}</legend>
          <label className="pay pay-on">
            <input type="radio" name="payment" value="cod" defaultChecked />
            <span>
              <strong>{c.cod}</strong>
              <small>{c.codHint}</small>
            </span>
          </label>
          <label className="pay pay-off">
            <input type="radio" name="payment" value="card" disabled />
            <span>
              <strong>{c.card}</strong>
              <small>{c.cardSoon}</small>
            </span>
          </label>
        </fieldset>
      </div>
      <aside className="summary">
        <h2>{c.summary}</h2>
        <ul className="summary-lines">
          {lines.map((l) => {
            const p = getProduct(l.slug);
            if (!p) return null;
            return (
              <li key={l.slug}>
                <span>{p.name[locale]} × {l.qty}</span>
                <span>{price(p.price * l.qty, locale)}</span>
              </li>
            );
          })}
        </ul>
        <Totals locale={locale} />
        {errors.send ? <p className="field-error" role="alert">{errors.send}</p> : null}
        <button type="submit" className="btn btn-solid btn-block" disabled={sending}>
          {sending ? c.sending : c.submit}
        </button>
      </aside>
    </form>
  );
}

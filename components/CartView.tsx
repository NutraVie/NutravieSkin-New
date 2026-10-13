'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart';
import { dict } from '@/lib/dict';
import { getProduct } from '@/lib/products';
import { price, type Locale } from '@/lib/site';
import { Photo } from './Photo';
import { QtyStepper } from './AddToCart';

export function Totals({ locale }: { locale: Locale }) {
  const t = dict[locale];
  const { subtotal, shipping, total } = useCart();
  return (
    <dl className="totals">
      <div><dt>{t.cart.subtotal}</dt><dd>{price(subtotal, locale)}</dd></div>
      <div><dt>{t.cart.shipping}</dt><dd>{price(shipping, locale)}</dd></div>
      <div className="totals-total"><dt>{t.cart.total}</dt><dd>{price(total, locale)}</dd></div>
    </dl>
  );
}

export function CartView({ locale }: { locale: Locale }) {
  const t = dict[locale];
  const { lines, ready, setQty, remove } = useCart();

  if (!ready) return <div className="cart-skeleton" aria-hidden="true" />;

  if (lines.length === 0) {
    return (
      <div className="empty">
        <p>{t.cart.empty}</p>
        <Link href={`/${locale}#produits`} className="btn btn-solid">{t.cart.emptyCta}</Link>
      </div>
    );
  }

  return (
    <div className="cart-layout">
      <ul className="cart-lines">
        {lines.map((l) => {
          const p = getProduct(l.slug);
          if (!p) return null;
          return (
            <li key={l.slug}>
              <Link href={`/${locale}/produits/${p.slug}`} className="line-photo" tabIndex={-1} aria-hidden="true">
                <Photo src={p.image} alt="" sizes="96px" />
              </Link>
              <div className="line-info">
                <Link href={`/${locale}/produits/${p.slug}`} className="line-name">{p.name[locale]}</Link>
                <span className="line-unit">{price(p.price, locale)}</span>
                <div className="line-actions">
                  <QtyStepper value={l.qty} onChange={(n) => setQty(l.slug, n)} label={t.product.qty} />
                  <button type="button" className="link-btn" onClick={() => remove(l.slug)}>{t.cart.remove}</button>
                </div>
              </div>
              <strong className="line-total">{price(p.price * l.qty, locale)}</strong>
            </li>
          );
        })}
      </ul>
      <aside className="summary">
        <Totals locale={locale} />
        <Link href={`/${locale}/commande`} className="btn btn-solid btn-block">{t.cart.checkout}</Link>
        <Link href={`/${locale}#produits`} className="summary-back">{t.cart.continue}</Link>
      </aside>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/lib/cart';
import type { Locale } from '@/lib/site';

export function CartLink({ locale, label }: { locale: Locale; label: string }) {
  const { count, ready } = useCart();
  return (
    <Link href={`/${locale}/panier`} className="cart-link" aria-label={`${label} (${count})`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 8h14l-1.2 11a2 2 0 0 1-2 1.8H8.200a2 2 0 0 1-2-1.800L5 8Z" />
        <path d="M9 8V6.500a3 3 0 0 1 6 0V8" />
      </svg>
      <span>{label}</span>
      {ready && count > 0 ? <span className="cart-count">{count}</span> : null}
    </Link>
  );
}

export function LocaleSwitch({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname() ?? `/${locale}`;
  const other = locale === 'ar' ? 'fr' : 'ar';
  const target = pathname.replace(/^\/(ar|fr)/, `/${other}`);
  return (
    <Link href={target} className="locale-switch" hrefLang={other} lang={other}>
      {label}
    </Link>
  );
}

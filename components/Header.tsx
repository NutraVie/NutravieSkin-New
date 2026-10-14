import Link from 'next/link';
import { dict } from '@/lib/dict';
import type { Locale } from '@/lib/site';
import { Logo } from './Logo';
import { CartLink, LocaleSwitch } from './HeaderClient';

export function Header({ locale }: { locale: Locale }) {
  const t = dict[locale];
  const links = [
    { href: `/${locale}#produits`, label: t.nav.products },
    { href: `/${locale}/produits/routine-complete`, label: t.nav.routine },
    { href: `/${locale}#routine`, label: t.skin.nav },
    { href: `/${locale}/livraison`, label: t.nav.delivery },
    { href: `/${locale}/blog`, label: t.nav.blog },
    { href: `/${locale}/faq`, label: t.nav.faq },
  ];
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="wrap topbar-in">
          {t.bar.map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
      </div>
      <div className="wrap header-in">
        <Link href={`/${locale}`} className="logo-link" aria-label="NutraVie">
          <Logo />
        </Link>
        <nav className="main-nav" aria-label={t.nav.home}>
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="header-tools">
          <LocaleSwitch locale={locale} label={t.other} />
          <CartLink locale={locale} label={t.nav.cart} />
        </div>
      </div>
    </header>
  );
}

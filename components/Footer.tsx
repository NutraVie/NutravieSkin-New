import Link from 'next/link';
import { dict } from '@/lib/dict';
import { products } from '@/lib/products';
import { site, type Locale } from '@/lib/site';
import { Logo } from './Logo';

export function Footer({ locale }: { locale: Locale }) {
  const t = dict[locale];
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Logo size={44} />
          <p className="footer-tag">{t.tagline}</p>
        </div>
        <div>
          <h2>{t.footer.shop}</h2>
          <ul>
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/${locale}/produits/${p.slug}`}>{p.name[locale]}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>{t.footer.help}</h2>
          <ul>
            <li><Link href={`/${locale}/livraison`}>{t.delivery.title}</Link></li>
            <li><Link href={`/${locale}/faq`}>{t.faq.title}</Link></li>
            <li><Link href={`/${locale}/blog`}>{t.nav.blog}</Link></li>
            <li><Link href={`/${locale}/a-propos`}>{t.nav.about}</Link></li>
          </ul>
        </div>
        {site.whatsapp || site.email ? (
          <div>
            <h2>{t.footer.contact}</h2>
            <ul>
              {site.whatsapp ? <li><a href={`https://wa.me/${site.whatsapp}`} rel="noopener">WhatsApp</a></li> : null}
              {site.email ? <li><a href={`mailto:${site.email}`}>{site.email}</a></li> : null}
            </ul>
          </div>
        ) : null}
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} NutraVie. {t.footer.rights}</span>
      </div>
    </footer>
  );
}

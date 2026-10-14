import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AddToCart } from '@/components/AddToCart';
import { Faq, faqLd } from '@/components/Faq';
import { JsonLd } from '@/components/JsonLd';
import { Photo } from '@/components/Photo';
import { ProductCard } from '@/components/ProductCard';
import { Routines } from '@/components/Routines';
import { dict } from '@/lib/dict';
import { getProduct, packProduct, products } from '@/lib/products';
import { abs, pageMeta } from '@/lib/seo';
import { locales, price, site, type Locale } from '@/lib/site';

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => products.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = (await params) as { locale: Locale; slug: string };
  const p = getProduct(slug);
  if (!p) return {};
  return pageMeta({ locale, path: `/produits/${slug}`, title: p.seoTitle[locale], description: p.seoDescription[locale], image: `${p.image}.jpg` });
}

export default async function ProductPage({ params }: Props) {
  const { locale, slug } = (await params) as { locale: Locale; slug: string };
  const p = getProduct(slug);
  if (!p) notFound();
  const t = dict[locale];
  const tp = t.product;
  const url = `/${locale}/produits/${p.slug}`;
  const included = (p.includes ?? []).map((s) => getProduct(s)!).filter(Boolean);
  const related = p.kind === 'pack' ? included : [packProduct, ...products.filter((x) => x.kind === 'single' && x.slug !== p.slug)];

  return (
    <div className="wrap page">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: p.name[locale],
          description: p.seoDescription[locale],
          image: [abs(`${p.image}.jpg`)],
          sku: p.sku,
          brand: { '@type': 'Brand', name: site.name },
          offers: {
            '@type': 'Offer',
            url: abs(url),
            price: p.price,
            priceCurrency: site.currency,
            availability: 'https://schema.org/InStock',
            itemCondition: 'https://schema.org/NewCondition',
            shippingDetails: {
              '@type': 'OfferShippingDetails',
              shippingRate: { '@type': 'MonetaryAmount', value: site.shipping, currency: site.currency },
              shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'MA' },
              deliveryTime: {
                '@type': 'ShippingDeliveryTime',
                transitTime: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 2, unitCode: 'DAY' },
              },
            },
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.nav.home, item: abs(`/${locale}`) },
            { '@type': 'ListItem', position: 2, name: p.name[locale], item: abs(url) },
          ],
        }}
      />
      <JsonLd data={faqLd(p.faq[locale])} />

      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href={`/${locale}`}>{t.nav.home}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{p.name[locale]}</span>
      </nav>

      <div className="pdp">
        <div className={`pdp-photo${p.kind === 'pack' ? ' pdp-photo-wide' : ''}`}>
          <Photo src={p.image} alt={`${p.name[locale]} NutraVie`} sizes="(max-width: 860px) 92vw, 520px" priority />
        </div>
        <div className="pdp-info">
          <h1>{p.name[locale]}</h1>
          <p className="pdp-short">{p.short[locale]}</p>
          <ul className="tags">
            {p.tags[locale].map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <p className="pdp-price">
            <strong>{price(p.price, locale)}</strong>
            {p.compareAt ? (
              <>
                <s>{price(p.compareAt, locale)}</s>
                <span className="save">{tp.save} {price(p.compareAt - p.price, locale)}</span>
              </>
            ) : null}
          </p>
          {p.kind === 'single' ? <p className="pdp-size">{tp.size}: <span dir="ltr">{p.size}</span></p> : null}
          <AddToCart slug={p.slug} locale={locale} labels={{ add: tp.add, added: tp.added, buyNow: tp.buyNow, qty: tp.qty }} />
          <ul className="assure">
            <li>{tp.delivery}</li>
            <li>{tp.cod}</li>
          </ul>
          {p.kind === 'single' && packProduct.compareAt ? (
            <Link href={`/${locale}/produits/${packProduct.slug}`} className="pack-hint">
              <span>{tp.packHint}</span>
              <strong>{price(packProduct.price, locale)}</strong>
            </Link>
          ) : null}
        </div>
      </div>

      <div className="pdp-details">
        <section>
          {p.description[locale].map((para) => (
            <p key={para}>{para}</p>
          ))}
        </section>
        {included.length ? (
          <section>
            <h2>{tp.includes}</h2>
            <ul className="plain-list">
              {included.map((i) => (
                <li key={i.slug}>
                  <Link href={`/${locale}/produits/${i.slug}`}>{i.name[locale]}</Link> <span dir="ltr">({i.size})</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        <section>
          <h2>{tp.ingredients}</h2>
          <ul className="ingredients">
            {p.ingredients[locale].map((i) => (
              <li key={i.n}>
                <strong>{i.n}</strong>
                <span>{i.d}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>{tp.howTo}</h2>
          <ol className="howto">
            {p.howTo[locale].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </section>
        <section>
          <h2>{tp.notes}</h2>
          <ul className="plain-list">
            {p.notes[locale].map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </section>
        {p.kind === 'pack' ? (
          <section className="routine-box">
            <h2>{t.routine.title}</h2>
            <Routines locale={locale} heading="h3" />
          </section>
        ) : null}
        <section>
          <h2>{tp.faq}</h2>
          <Faq items={p.faq[locale]} />
        </section>
      </div>

      <section className="related">
        <h2>{tp.related}</h2>
        <div className="grid">
          {related.map((r) => (
            <ProductCard key={r.slug} product={r} locale={locale} />
          ))}
        </div>
      </section>
    </div>
  );
}

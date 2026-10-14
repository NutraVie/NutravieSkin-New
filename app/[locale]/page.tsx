import type { Metadata } from 'next';
import Link from 'next/link';
import { Faq, faqLd } from '@/components/Faq';
import { JsonLd } from '@/components/JsonLd';
import { Photo } from '@/components/Photo';
import { ProductCard } from '@/components/ProductCard';
import { Routines } from '@/components/Routines';
import { dict } from '@/lib/dict';
import { posts } from '@/lib/posts';
import { packProduct, products } from '@/lib/products';
import { abs, pageMeta } from '@/lib/seo';
import { price, site, type Locale } from '@/lib/site';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = dict[locale].home;
  return { ...pageMeta({ locale, path: '', title: t.title, description: t.description }), title: { absolute: t.title } };
}

export default async function Home({ params }: Props) {
  const locale = (await params).locale as Locale;
  const t = dict[locale];
  const h = t.home;
  const faqItems = t.faq.items.slice(0, 4);

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: site.name,
          url: site.url,
          logo: abs('/images/logo-512.png'),
          description: t.tagline,
          areaServed: 'MA',
        }}
      />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: site.url, inLanguage: ['ar', 'fr'] }} />
      <JsonLd data={faqLd(faqItems)} />

      <section className="hero">
        <div className="wrap hero-in">
          <div className="hero-text">
            <h1>{h.h1}</h1>
            <p className="hero-lead">{h.lead}</p>
            <p className="hero-price">
              <strong>{price(packProduct.price, locale)}</strong>
              {packProduct.compareAt ? (
                <span>
                  {t.product.insteadOf} <s>{price(packProduct.compareAt, locale)}</s>
                </span>
              ) : null}
            </p>
            <div className="hero-cta">
              <Link href={`/${locale}/produits/${packProduct.slug}`} className="btn btn-solid">{h.ctaPack}</Link>
              <a href="#produits" className="btn btn-line">{h.ctaAll}</a>
            </div>
          </div>
          <div className="hero-arch">
            <Photo src={packProduct.image} alt={packProduct.name[locale]} sizes="(max-width: 860px) 92vw, 560px" priority />
          </div>
        </div>
      </section>

      <section className="steps" id="routine">
        <div className="wrap">
          <h2>{t.routine.title}</h2>
          <p className="section-lead">{t.routine.lead}</p>
          <Routines locale={locale} heading="h3" />
        </div>
      </section>

      <section className="block" id="produits">
        <div className="wrap">
          <h2>{h.productsTitle}</h2>
          <div className="grid">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="block promises">
        <div className="wrap">
          <h2>{h.promiseTitle}</h2>
          <ul className="promise-list">
            {h.promises.map((p) => (
              <li key={p.t}>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="block story">
        <div className="wrap story-in">
          <div>
            <h2>{h.storyTitle}</h2>
            <p>{h.story}</p>
            <Link href={`/${locale}/a-propos`} className="text-link">{h.storyLink}</Link>
          </div>
          <div>
            <h2>{h.blogTitle}</h2>
            <ul className="post-links">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/${locale}/blog/${p.slug}`}>{p.title[locale]}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap narrow">
          <h2>{h.faqTitle}</h2>
          <Faq items={faqItems} />
          <Link href={`/${locale}/faq`} className="text-link">{h.faqLink}</Link>
        </div>
      </section>
    </>
  );
}

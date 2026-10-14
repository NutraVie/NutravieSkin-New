import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Faq, faqLd } from '@/components/Faq';
import { JsonLd } from '@/components/JsonLd';
import { ProductCard } from '@/components/ProductCard';
import { dict } from '@/lib/dict';
import { getPost } from '@/lib/posts';
import { getProduct, products } from '@/lib/products';
import { abs, pageMeta } from '@/lib/seo';
import { locales, type Locale } from '@/lib/site';
import { getSkin, skinTypes } from '@/lib/skin';

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => skinTypes.map((s) => ({ locale, slug: s.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = (await params) as { locale: Locale; slug: string };
  const s = getSkin(slug);
  if (!s) return {};
  return pageMeta({ locale, path: `/peau/${slug}`, title: s.title[locale], description: s.description[locale] });
}

export default async function SkinPage({ params }: Props) {
  const { locale, slug } = (await params) as { locale: Locale; slug: string };
  const s = getSkin(slug);
  if (!s) notFound();
  const t = dict[locale];
  const r = t.routine.types[s.routine];
  const url = `/${locale}/peau/${s.slug}`;

  return (
    <div className="wrap page">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.nav.home, item: abs(`/${locale}`) },
            { '@type': 'ListItem', position: 2, name: s.name[locale], item: abs(url) },
          ],
        }}
      />
      <JsonLd data={faqLd(s.faq[locale])} />

      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href={`/${locale}`}>{t.nav.home}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{s.name[locale]}</span>
      </nav>

      <h1>{s.title[locale]}</h1>
      <p className="skin-intro">{s.intro[locale]}</p>

      <section className="skin-section">
        <h2>{t.skin.problems}</h2>
        <ul className="problem-list">
          {s.problems[locale].map((p) => (
            <li key={p.t}>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="skin-section">
        <h2>{t.skin.solutions}</h2>
        <table className="solution-table">
          <thead>
            <tr>
              <th scope="col">{t.skin.ingredient}</th>
              <th scope="col">{t.skin.role}</th>
              <th scope="col">{t.skin.where}</th>
            </tr>
          </thead>
          <tbody>
            {s.solutions[locale].map((x) => {
              const p = getProduct(x.product)!;
              return (
                <tr key={x.ing}>
                  <th scope="row">{x.ing}</th>
                  <td>{x.does}</td>
                  <td>
                    <Link href={`/${locale}/produits/${p.slug}`}>{p.name[locale]}</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <section className="skin-section">
        <h2>{t.skin.routine}</h2>
        <div className="skin-routine">
          <dl>
            <div>
              <dt>{t.routine.am}</dt>
              <dd>{r.am}</dd>
            </div>
            <div>
              <dt>{t.routine.pm}</dt>
              <dd>{r.pm}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="skin-section">
        <h2>{t.skin.products}</h2>
        <div className="grid">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} locale={locale} />
          ))}
        </div>
      </section>

      <section className="skin-section narrow">
        <h2>{t.skin.caution}</h2>
        <ul className="plain-list">
          {s.caution[locale].map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      <section className="skin-section narrow">
        <h2>{t.skin.faq}</h2>
        <Faq items={s.faq[locale]} />
      </section>

      <section className="skin-section narrow">
        <h2>{t.skin.posts}</h2>
        <ul className="post-links">
          {s.posts.map((slugP) => {
            const post = getPost(slugP);
            return post ? (
              <li key={slugP}>
                <Link href={`/${locale}/blog/${post.slug}`}>{post.title[locale]}</Link>
              </li>
            ) : null;
          })}
        </ul>
      </section>
    </div>
  );
}

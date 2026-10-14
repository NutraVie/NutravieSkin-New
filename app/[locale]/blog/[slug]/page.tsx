import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import { ProductCard } from '@/components/ProductCard';
import { dict } from '@/lib/dict';
import { getPost, posts } from '@/lib/posts';
import { getProduct } from '@/lib/products';
import { getSkin } from '@/lib/skin';
import { abs, pageMeta } from '@/lib/seo';
import { locales, site, type Locale } from '@/lib/site';

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => posts.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = (await params) as { locale: Locale; slug: string };
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({ locale, path: `/blog/${slug}`, title: post.title[locale], description: post.description[locale] });
}

export default async function PostPage({ params }: Props) {
  const { locale, slug } = (await params) as { locale: Locale; slug: string };
  const post = getPost(slug);
  if (!post) notFound();
  const t = dict[locale];
  const product = getProduct(post.product);
  const skin = post.skin ? getSkin(post.skin) : undefined;
  return (
    <div className="wrap page narrow">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title[locale],
          description: post.description[locale],
          datePublished: post.date,
          inLanguage: locale,
          mainEntityOfPage: abs(`/${locale}/blog/${post.slug}`),
          author: { '@type': 'Organization', name: site.name },
          publisher: { '@type': 'Organization', name: site.name },
        }}
      />
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href={`/${locale}`}>{t.nav.home}</Link>
        <span aria-hidden="true">/</span>
        <Link href={`/${locale}/blog`}>{t.nav.blog}</Link>
      </nav>
      <article className="prose">
        <h1>{post.title[locale]}</h1>
        {post.sections[locale].map((s) => (
          <section key={s.h}>
            <h2>{s.h}</h2>
            {s.p.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </section>
        ))}
      </article>
      {skin ? (
        <p>
          <Link href={`/${locale}/peau/${skin.slug}`} className="text-link">{t.skin.see}: {skin.name[locale]}</Link>
        </p>
      ) : null}
      {product ? (
        <div className="post-product">
          <ProductCard product={product} locale={locale} />
        </div>
      ) : null}
    </div>
  );
}

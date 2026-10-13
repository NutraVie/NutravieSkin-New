import type { Metadata } from 'next';
import Link from 'next/link';
import { dict } from '@/lib/dict';
import { posts } from '@/lib/posts';
import { pageMeta } from '@/lib/seo';
import type { Locale } from '@/lib/site';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = dict[locale].blog;
  return pageMeta({ locale, path: '/blog', title: t.title, description: t.description });
}

export default async function BlogPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const t = dict[locale].blog;
  return (
    <div className="wrap page narrow">
      <h1>{t.title}</h1>
      <ul className="post-list">
        {posts.map((p) => (
          <li key={p.slug}>
            <h2>
              <Link href={`/${locale}/blog/${p.slug}`}>{p.title[locale]}</Link>
            </h2>
            <p>{p.description[locale]}</p>
            <Link href={`/${locale}/blog/${p.slug}`} className="text-link" aria-hidden="true" tabIndex={-1}>{t.read}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

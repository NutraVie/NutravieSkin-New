import type { Metadata } from 'next';
import Link from 'next/link';
import { dict } from '@/lib/dict';
import { pageMeta } from '@/lib/seo';
import type { Locale } from '@/lib/site';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = dict[locale].about;
  return pageMeta({ locale, path: '/a-propos', title: t.title, description: t.description });
}

export default async function AboutPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const t = dict[locale];
  return (
    <div className="wrap page narrow prose">
      <h1>{t.about.title}</h1>
      {t.about.paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
      <p>
        <Link href={`/${locale}#produits`} className="btn btn-solid">{t.home.ctaAll}</Link>
      </p>
    </div>
  );
}

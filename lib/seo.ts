import type { Metadata } from 'next';
import { site, type Locale } from './site';

export function pageMeta(opts: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
}): Metadata {
  const { locale, path, title, description, image, noindex } = opts;
  const url = `/${locale}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { ar: `/ar${path}`, fr: `/fr${path}`, 'x-default': `/ar${path}` },
    },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: locale === 'ar' ? 'ar_MA' : 'fr_MA',
      type: 'website',
      images: [{ url: image ?? '/images/routine-complete.jpg' }],
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export const abs = (path: string) => `${site.url}${path}`;

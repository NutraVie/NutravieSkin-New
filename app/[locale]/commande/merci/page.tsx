import type { Metadata } from 'next';
import { ThanksView } from '@/components/ThanksView';
import { dict } from '@/lib/dict';
import { pageMeta } from '@/lib/seo';
import type { Locale } from '@/lib/site';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  return pageMeta({ locale, path: '/commande/merci', title: dict[locale].thanks.title, description: dict[locale].thanks.title, noindex: true });
}

export default async function ThanksPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  return (
    <div className="wrap page narrow">
      <ThanksView locale={locale} />
    </div>
  );
}

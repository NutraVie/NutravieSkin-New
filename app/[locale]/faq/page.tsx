import type { Metadata } from 'next';
import { Faq, faqLd } from '@/components/Faq';
import { JsonLd } from '@/components/JsonLd';
import { dict } from '@/lib/dict';
import { pageMeta } from '@/lib/seo';
import type { Locale } from '@/lib/site';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = dict[locale].faq;
  return pageMeta({ locale, path: '/faq', title: t.title, description: t.description });
}

export default async function FaqPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const t = dict[locale].faq;
  return (
    <div className="wrap page narrow">
      <JsonLd data={faqLd(t.items)} />
      <h1>{t.title}</h1>
      <Faq items={t.items} />
    </div>
  );
}

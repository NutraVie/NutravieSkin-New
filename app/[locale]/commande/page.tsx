import type { Metadata } from 'next';
import { CheckoutForm } from '@/components/CheckoutForm';
import { dict } from '@/lib/dict';
import { pageMeta } from '@/lib/seo';
import type { Locale } from '@/lib/site';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  return pageMeta({ locale, path: '/commande', title: dict[locale].checkout.title, description: dict[locale].checkout.title, noindex: true });
}

export default async function CheckoutPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  return (
    <div className="wrap page">
      <h1>{dict[locale].checkout.title}</h1>
      <CheckoutForm locale={locale} />
    </div>
  );
}

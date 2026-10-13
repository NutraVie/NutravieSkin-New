import type { Metadata } from 'next';
import { CartView } from '@/components/CartView';
import { dict } from '@/lib/dict';
import { pageMeta } from '@/lib/seo';
import type { Locale } from '@/lib/site';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  return pageMeta({ locale, path: '/panier', title: dict[locale].cart.title, description: dict[locale].cart.title, noindex: true });
}

export default async function CartPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  return (
    <div className="wrap page">
      <h1>{dict[locale].cart.title}</h1>
      <CartView locale={locale} />
    </div>
  );
}

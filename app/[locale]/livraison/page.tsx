import type { Metadata } from 'next';
import { dict } from '@/lib/dict';
import { pageMeta } from '@/lib/seo';
import type { Locale } from '@/lib/site';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = dict[locale].delivery;
  return pageMeta({ locale, path: '/livraison', title: t.title, description: t.description });
}

export default async function DeliveryPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const t = dict[locale].delivery;
  return (
    <div className="wrap page narrow prose">
      <h1>{t.title}</h1>
      {t.blocks.map((b) => (
        <section key={b.t}>
          <h2>{b.t}</h2>
          <p>{b.d}</p>
        </section>
      ))}
    </div>
  );
}

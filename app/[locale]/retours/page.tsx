import type { Metadata } from 'next';
import { dict } from '@/lib/dict';
import { pageMeta } from '@/lib/seo';
import { site, type Locale } from '@/lib/site';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = dict[locale].returns;
  return pageMeta({ locale, path: '/retours', title: t.title, description: t.description });
}

export default async function ReturnsPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const t = dict[locale];
  return (
    <div className="wrap page narrow prose">
      <h1>{t.returns.title}</h1>
      {t.returns.blocks.map((b) => (
        <section key={b.t}>
          <h2>{b.t}</h2>
          <p>{b.d}</p>
        </section>
      ))}
      {site.whatsapp ? (
        <p>
          <a className="btn btn-solid" href={`https://wa.me/${site.whatsapp}`} rel="noopener">WhatsApp</a>
        </p>
      ) : null}
    </div>
  );
}

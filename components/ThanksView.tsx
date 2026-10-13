'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { dict } from '@/lib/dict';
import { price, site, type Locale } from '@/lib/site';

export function ThanksView({ locale }: { locale: Locale }) {
  const t = dict[locale].thanks;
  const [order, setOrder] = useState<{ id: string; total: number } | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('nutravie-last-order');
      if (raw) setOrder(JSON.parse(raw));
    } catch {}
  }, []);

  return (
    <div className="thanks">
      <h1>{t.title}</h1>
      <p>{t.text}</p>
      {order ? (
        <dl className="totals thanks-box">
          <div><dt>{t.order}</dt><dd dir="ltr">{order.id}</dd></div>
          <div className="totals-total"><dt>{t.total}</dt><dd>{price(order.total, locale)}</dd></div>
        </dl>
      ) : null}
      <div className="thanks-actions">
        {site.whatsapp ? (
          <a className="btn btn-solid" href={`https://wa.me/${site.whatsapp}${order ? `?text=${encodeURIComponent(order.id)}` : ''}`} rel="noopener">{t.whatsapp}</a>
        ) : null}
        <Link className="btn btn-line" href={`/${locale}`}>{t.home}</Link>
      </div>
    </div>
  );
}

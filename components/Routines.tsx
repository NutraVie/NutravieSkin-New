import Link from 'next/link';
import { dict } from '@/lib/dict';
import { skinTypes } from '@/lib/skin';
import type { Locale } from '@/lib/site';

export function Routines({ locale, heading = 'h2' }: { locale: Locale; heading?: 'h2' | 'h3' }) {
  const r = dict[locale].routine;
  const H = heading;
  return (
    <ul className="routine-list">
      {r.types.map((t, i) => (
        <li key={t.t}>
          <H>
            <Link href={`/${locale}/peau/${skinTypes[i].slug}`}>{t.t}</Link>
          </H>
          <dl>
            <div>
              <dt>{r.am}</dt>
              <dd>{t.am}</dd>
            </div>
            <div>
              <dt>{r.pm}</dt>
              <dd>{t.pm}</dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>
  );
}

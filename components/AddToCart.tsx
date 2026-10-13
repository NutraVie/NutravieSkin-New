'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useCart } from '@/lib/cart';
import type { Locale } from '@/lib/site';

export function QuickAdd({ slug, label, done }: { slug: string; label: string; done: string }) {
  const { add } = useCart();
  const [ok, setOk] = useState(false);
  return (
    <button
      type="button"
      className="btn btn-line"
      onClick={() => {
        add(slug, 1);
        setOk(true);
        setTimeout(() => setOk(false), 1600);
      }}
    >
      <span aria-live="polite">{ok ? done : label}</span>
    </button>
  );
}

export function QtyStepper({ value, onChange, label }: { value: number; onChange: (n: number) => void; label: string }) {
  return (
    <div className="qty" role="group" aria-label={label}>
      <button type="button" onClick={() => onChange(value - 1)} aria-label="-" disabled={value <= 1}>−</button>
      <output>{value}</output>
      <button type="button" onClick={() => onChange(value + 1)} aria-label="+" disabled={value >= 20}>+</button>
    </div>
  );
}

export function AddToCart({ slug, locale, labels }: { slug: string; locale: Locale; labels: { add: string; added: string; buyNow: string; qty: string } }) {
  const { add } = useCart();
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const [ok, setOk] = useState(false);
  return (
    <div className="buy">
      <QtyStepper value={qty} onChange={setQty} label={labels.qty} />
      <button
        type="button"
        className="btn btn-line"
        onClick={() => {
          add(slug, qty);
          setOk(true);
          setTimeout(() => setOk(false), 1600);
        }}
      >
        <span aria-live="polite">{ok ? labels.added : labels.add}</span>
      </button>
      <button
        type="button"
        className="btn btn-solid buy-now"
        onClick={() => {
          add(slug, qty);
          router.push(`/${locale}/commande`);
        }}
      >
        {labels.buyNow}
      </button>
    </div>
  );
}

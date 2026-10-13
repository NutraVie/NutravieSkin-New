import Link from 'next/link';
import { dict } from '@/lib/dict';
import type { Product } from '@/lib/products';
import { price, type Locale } from '@/lib/site';
import { Photo } from './Photo';
import { QuickAdd } from './AddToCart';

export function ProductCard({ product, locale }: { product: Product; locale: Locale }) {
  const t = dict[locale];
  const url = `/${locale}/produits/${product.slug}`;
  return (
    <article className={`card${product.kind === 'pack' ? ' card-pack' : ''}`}>
      <Link href={url} className="card-photo" tabIndex={-1} aria-hidden="true">
        <Photo src={product.image} alt="" sizes="(max-width: 700px) 50vw, 300px" />
      </Link>
      <div className="card-body">
        <h3>
          <Link href={url}>{product.name[locale]}</Link>
        </h3>
        <p className="card-size">{product.kind === 'pack' ? t.product.products3 : product.size}</p>
        <p className="card-price">
          <strong>{price(product.price, locale)}</strong>
          {product.compareAt ? <s>{price(product.compareAt, locale)}</s> : null}
        </p>
        <QuickAdd slug={product.slug} label={t.product.add} done={t.product.added} />
      </div>
    </article>
  );
}

import type { MetadataRoute } from 'next';
import { posts } from '@/lib/posts';
import { products } from '@/lib/products';
import { locales, site } from '@/lib/site';
import { skinTypes } from '@/lib/skin';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: '', priority: 1 },
    ...products.map((p) => ({ path: `/produits/${p.slug}`, priority: 0.9 })),
    ...skinTypes.map((s) => ({ path: `/peau/${s.slug}`, priority: 0.8 })),
    { path: '/blog', priority: 0.6 },
    ...posts.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.6 })),
    { path: '/livraison', priority: 0.5 },
    { path: '/faq', priority: 0.5 },
    { path: '/retours', priority: 0.4 },
    { path: '/a-propos', priority: 0.4 },
  ];
  return paths.flatMap(({ path, priority }) =>
    locales.map((l) => ({
      url: `${site.url}/${l}${path}`,
      priority,
      alternates: { languages: { ar: `${site.url}/ar${path}`, fr: `${site.url}/fr${path}` } },
    })),
  );
}

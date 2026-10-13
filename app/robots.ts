import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/ar/panier', '/fr/panier', '/ar/commande', '/fr/commande'] }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}

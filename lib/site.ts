export const locales = ['ar', 'fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ar';

export const site = {
  name: 'NutraVie',
  url: 'https://www.nutravie.ma',
  shipping: 35,
  currency: 'MAD',
  deliveryDelay: '24-48',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '212708502263',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '',
};

export function isLocale(v: string): v is Locale {
  return (locales as readonly string[]).includes(v);
}

export function price(n: number, locale: Locale) {
  return locale === 'ar' ? `${n} درهم` : `${n} DH`;
}

export function href(locale: Locale, path = '') {
  return `/${locale}${path}`;
}

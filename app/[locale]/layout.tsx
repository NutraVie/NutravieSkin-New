import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import '@fontsource-variable/readex-pro';
import '@fontsource-variable/fraunces';
import '../globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { CartProvider } from '@/lib/cart';
import { dict } from '@/lib/dict';
import { isLocale, locales, site } from '@/lib/site';

const GA = process.env.NEXT_PUBLIC_GA_ID;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined },
};

export const viewport: Viewport = { themeColor: '#3c4f25' };

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale} dir={dict[locale].dir}>
      <body>
        <CartProvider>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
        </CartProvider>
        {GA ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA}');`}</Script>
          </>
        ) : null}
      </body>
    </html>
  );
}

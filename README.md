# NutraVie

متجر NutraVie: Next.js، عربية وفرنسية، سلة، تأكيد الطلب والدفع عند الاستلام.

## التشغيل

    npm install
    npm run dev      # http://localhost:3000

## فين نبدل

- المنتجات والأثمنة والنصوص: `lib/products.ts` (ثمن الباك: `PACK_PRICE`)
- نصوص الصفحات: `lib/dict.ts`
- المقالات: `lib/posts.ts`
- ثمن التوصيل والدومين: `lib/site.ts`
- الصور: `public/images`

## استقبال الطلبات

نسخ `.env.example` إلى `.env.local` وعمّر واحد على الأقل:

- `TELEGRAM_BOT_TOKEN` + `TELEGRAM_CHAT_ID`: كل طلب كيوصلك فتيليغرام
- `ORDERS_WEBHOOK_URL`: كيصيفط الطلب JSON (Google Sheets عبر Apps Script، Make، Zapier)

فالتجربة المحلية بلا إعدادات، الطلبات كتسجل ف `.data/orders.jsonl`.
فالإنتاج بلا إعدادات، الطلب كيترفض (503) باش ما يضيعش بلا ما تعرف.

## النشر

1. حط الكود ف GitHub ثم استوردو ف Vercel.
2. زيد المتغيرات ديال `.env.example` ف Vercel.
3. ربط `www.nutravie.ma` من إعدادات الدومين.
4. زيد السيت ف Google Search Console وصيفط `https://www.nutravie.ma/sitemap.xml`.

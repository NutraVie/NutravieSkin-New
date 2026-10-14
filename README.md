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

نسخ `.env.example` إلى `.env.local`:

- `NEXT_PUBLIC_WHATSAPP` (الرقم بصيغة دولية بلا +): من بعد تأكيد الطلب، الواتساب كيتحل عند الكليان برسالة فيها الطلب كامل، وكيضغط إرسال.
- `CALLMEBOT_APIKEY` (اختياري): السيرفر كيصيفط ليك الطلب فالواتساب أوتوماتيكيا عبر CallMeBot، بلا ما يحتاج الكليان يضغط.
- `TELEGRAM_BOT_TOKEN` + `TELEGRAM_CHAT_ID` أو `ORDERS_WEBHOOK_URL` (اختياري): نسخة ثانية من كل طلب.

فالتجربة المحلية بلا إعدادات، الطلبات كتسجل ف `.data/orders.jsonl`.
فالإنتاج بلا حتى إعداد، الطلب كيترفض (503) باش ما يضيعش بلا ما تعرف.

## النشر على Netlify

1. حط الكود ف GitHub (ريبو خاص ولا عام).
2. ف Netlify: Add new project، Import from GitHub، اختار الريبو. الإعدادات كيتقراو من `netlify.toml`.
3. ف Environment variables زيد `CALLMEBOT_APIKEY` (و `ORDERS_WEBHOOK_URL` إلا خدمتي ب Google Sheets).
4. ف Domain management زيد `www.nutravie.ma` وخليه هو الأساسي، وحط سجلات DNS اللي كيعطيك Netlify عند اللي شريتي عندو الدومين.
5. زيد السيت ف Google Search Console وصيفط `https://www.nutravie.ma/sitemap.xml`.

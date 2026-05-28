# ANGKA PRO Next

Next.js frontend untuk ANGKA PRO.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Vercel deploy target

## Data source

Aplikasi membaca data dari endpoint Supabase Edge Function yang sudah dipakai frontend lama:

```text
https://ldeofmwxttdjcvylhabu.supabase.co/functions/v1/get-markets
```

Scraper dan mesin prediksi tetap berjalan dari repo backend `backup-`.

## Deploy ke Vercel

1. Import repository ini ke Vercel.
2. Framework preset: Next.js.
3. Build command: `next build`.
4. Output directory: default.
5. Deploy.

Versi awal sengaja tidak memakai service worker/PWA agar update production lebih mudah terlihat dan tidak tertahan cache.

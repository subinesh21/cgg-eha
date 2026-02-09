This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on GitHub Pages

This project is set up to deploy to **GitHub Pages** at `https://subinesh21.github.io/cgg-eha/`.

1. **Enable GitHub Pages (Actions)**  
   In the repo **Settings → Pages**, set **Source** to **GitHub Actions**.

2. **Push to trigger deploy**  
   Push to `main` (or `master`). The workflow `.github/workflows/deploy-pages.yml` will build with `NEXT_PUBLIC_BASE_PATH=/cgg-eha` and deploy the static export.

3. **Local build (same as CI)**  
   ```bash
   NEXT_PUBLIC_BASE_PATH=/cgg-eha npm run build
   ```
   Output is in the `out/` folder. Images and assets use the `/cgg-eha/` prefix so they load correctly on GitHub Pages.

## Deploy on Vercel

You can also deploy to [Vercel](https://vercel.com); for Vercel, do not set `NEXT_PUBLIC_BASE_PATH` so the app is served at the root.

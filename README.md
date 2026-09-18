# Hans Gamarra — Portfolio

Personal portfolio for **Hans Gamarra** (Senior Full Stack Engineer). Built with Next.js (App Router), TypeScript, and Tailwind CSS, optimized for static deployment on Vercel.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Résumé PDF

The download link points to:

`public/resume/Hans Gamarra - Resume.pdf`

Replace that file with your latest résumé (keep the same filename) or update `resumePath` in `src/lib/site.ts`.

## Deploy on Vercel

1. Import this repository in [Vercel](https://vercel.com/new).
2. Framework preset: **Next.js** (default).
3. Build command: `npm run build` · Output: default.
4. Deploy.

No special environment variables are required for the static marketing site.

## Custom domain (hansgamarra.com)

1. In the Vercel project, open **Settings → Domains** and add `hansgamarra.com` (and `www` if desired).
2. At your DNS provider, remove old Netlify records and add the records Vercel shows (typically `A` / `CNAME` to Vercel).
3. Wait for DNS propagation; Vercel will issue HTTPS automatically.

## Project structure

- `src/app/page.tsx` — single-page portfolio sections
- `src/app/work/[slug]/page.tsx` — optional case study pages
- `src/lib/site.ts` — copy, projects, experience, and links

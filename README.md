# Meridian

A specialty coffee brand landing site — **coming soon** edition. Collects waitlist emails into Supabase, tells the brand story, and sets the editorial tone for the full launch.

**Live:** https://meridian-73d4.vercel.app

## Stack

- **Astro 5** + `@astrojs/vercel` (server output)
- **Tailwind v4** via `@tailwindcss/vite`
- **Supabase** — `meridian_waitlist` (email capture) + `meridian_content` (future articles, pre-wired for Harbor Writer)
- **Vercel** — continuous deploy on every push to `main`
- Fonts: Fraunces (display) + Inter (body) from Google Fonts

## What was built

### Pages
- `/` — Hero, marquee strip, brand story, three pillars (dark band), waitlist CTA form, closing quote
- `/about` — Full brand narrative, origins map, sourcing principles, "how we work" 4-step, founders' letter
- `/thanks` — Post-submit confirmation page (dark theme) with next-steps callouts

### Features
- Email capture wired to `meridian_waitlist` via Supabase JS (anon insert RLS policy). Duplicate emails redirect cleanly to `/thanks`.
- Programmatic SEO — canonical URLs, OG/Twitter cards, Organization + WebSite + AboutPage + BreadcrumbList JSON-LD, sitemap (`/sitemap-index.xml`), `/robots.txt`
- Editorial aesthetic — cream / charcoal / ember palette, subtle grain, pulse + reveal-up animations, italic serif display, tight tracking

## Dev

```bash
npm install --legacy-peer-deps
npm run dev
```

Required env:

```
PUBLIC_SUPABASE_URL
PUBLIC_SUPABASE_ANON_KEY
PUBLIC_SITE_URL
RESEND_API_KEY   # (reserved for future transactional emails)
```

## TODO / next steps

- Connect a custom domain in Vercel → `PUBLIC_SITE_URL` env + redeploy
- Verify a sending domain at resend.com/domains and switch the from-address on future confirmation emails
- Add a real OG image asset (currently dynamically generated SVG at `/og-default.png`)
- When the shop is ready, replace the `/#waitlist` CTAs with product routes and add a `products` table

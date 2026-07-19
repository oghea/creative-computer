# Creative Computer

Marketing website for Creative Computer — a computer shop (parts, custom builds,
service & upgrades, accessories) in Jakarta. Bilingual (Indonesian default +
English), with a PC Build Simulator that rates a build for four use cases and
sends it to WhatsApp for a quote (no prices shown on the site).

Built with **Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · next-intl**.

## Run

```bash
npm install
npm run dev      # http://localhost:3000  → redirects to /id
npm run build    # production build (static)
npm run start    # serve the production build
```

## Pages

- `/[locale]` — Home (hero, services, why-us, sample builds, testimonials, CTA)
- `/[locale]/services` — the four service pillars in detail
- `/[locale]/simulator` — the PC Build Simulator
- `/[locale]/contact` — address, hours, map, WhatsApp

`locale` is `id` (default) or `en`.

## Customizing

| What | Where |
| --- | --- |
| **WhatsApp number**, phone, email, address, hours, socials | `lib/config.ts` |
| **All copy** (both languages) | `messages/id.json`, `messages/en.json` |
| **Simulator parts & ratings** | `data/components.ts` |
| **Brand colors / fonts** | `app/globals.css` (`@theme`), `app/fonts.ts` |
| **Logo assets** | `public/brand/` (`logo.png`, `logo-trim.png`, `icon.png`) |

> The WhatsApp number in `lib/config.ts` (`6281234567890`) is a **placeholder** —
> replace it with the real number (international format, digits only).

### Simulator scoring

Each part in `data/components.ts` has a 0–100 score per use case
(`gaming`, `work`, `content`, `everyday`). The build rating is a weighted average
over the categories you pick, with per-category weights defined in `CATEGORIES`
(e.g. the GPU weighs heavily for gaming). No prices are involved anywhere.

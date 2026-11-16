# Suresh B profile site

Personal profile page built with Next.js 16 (App Router), Tailwind CSS 4 and shadcn/ui components, with CSS animation and Lenis smooth scrolling.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. On Windows you can also double-click `start.bat`.

## Live site

https://sureshbjra.github.io/profile/

Every push to `main` rebuilds and publishes the site through the workflow in
`.github/workflows/deploy.yml`. `npm run build` writes a static copy of the site
to `out/`; preview it with `npx serve out`.

## Search (SEO)

- `src/lib/seo.ts` holds the page title, description, search keywords, the
  live address and the structured data (schema.org Person and ProfilePage)
  that tells Google this is your profile.
- `src/app/opengraph-image.jpg` is the preview shown when the link is shared
  on LinkedIn, WhatsApp or X.
- `src/app/sitemap.ts` produces `/profile/sitemap.xml`. Submit it once in
  Google Search Console.

## Where things are

- `src/lib/profile.ts` holds all the text: intro, roles, projects, skills and links. Edit this file to change content.
- `src/components/route-chart.tsx` is the animated route chart in the hero.
- `src/components/ui/` holds the shadcn/ui components (button, badge, card).
- `src/app/globals.css` holds the colour and font tokens.
- Icons: `src/app/favicon.ico` (16, 32 and 48px; the 16px frame is a simplified drawing), `src/app/apple-icon.png` for iPhone home screens, `public/icons/` for the web manifest (`src/app/manifest.ts`). `public/icons/icon.svg` is the source artwork.

To add more shadcn/ui components: `npx shadcn@latest add <name>`.

## Motion and performance

Every animation is CSS (keyframes and transitions in `src/app/globals.css`), so
the first screen is in the HTML and starts moving as soon as it paints, without
waiting for JavaScript. Most components are server components; the only
client-side JavaScript is Lenis smooth scrolling, one shared scroll observer and
the card spotlight.

- `reveal-observer.tsx`: one IntersectionObserver for the whole page. It marks
  `[data-reveal]` elements as shown (the CSS animates them) and counts the
  numbers up.
- `fade-in.tsx` and `reveal-heading.tsx`: the entrance used everywhere, and the
  word-by-word heading reveal.
- `in-view.tsx`: pauses looping animations while they are off screen.
- `route-chart.tsx` and `ride-visual.tsx`: the hero route and the Fiji Go ride,
  drawn and driven with CSS.
- `experience.tsx`: the timeline line and the top progress bar are CSS
  scroll-driven animations; in browsers without support they simply show full.
- `smooth-scroll.tsx`: inertia scrolling with Lenis.

Hero text animates from 1% opacity rather than 0, so Chrome counts it as
painted on the first frame. Fonts are self-hosted with `next/font/local`, Latin
only, and preloaded. Everything respects the reduced-motion setting, and with
JavaScript off all content is shown.

# Suresh B profile site

Personal profile page built with Next.js 16 (App Router), Tailwind CSS 4, shadcn/ui components and Motion.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. On Windows you can also double-click `start.bat`.

## Where things are

- `src/lib/profile.ts` holds all the text: intro, roles, projects, skills and links. Edit this file to change content.
- `src/components/route-chart.tsx` is the animated route chart in the hero.
- `src/components/ui/` holds the shadcn/ui components (button, badge, card).
- `src/app/globals.css` holds the colour and font tokens.

To add more shadcn/ui components: `npx shadcn@latest add <name>`.

## Motion

Built to stay smooth: only opacity and transform are animated, backgrounds are still, and nothing uses blur filters.

- `smooth-scroll.tsx`: inertia scrolling with Lenis, so scroll-linked motion glides.
- `fade-in.tsx`: the one entrance used everywhere (fade and rise, once).
- `ride-visual.tsx`: the live ride animation in the Fiji Go card.
- `reveal-heading.tsx`: section titles rise out of a mask.
- `route-chart.tsx`: the route draws itself once, then one vehicle keeps running it.
- `marquee.tsx`: the skills band, a pure CSS animation.
- `spotlight-card.tsx`: glass card with a light under the pointer.
- `experience.tsx`: the timeline line fills as you scroll, beside a sticky heading.
- `count-up.tsx`: counting numbers.

Everything respects the operating system's reduced-motion setting.

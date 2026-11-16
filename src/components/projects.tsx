import {
  CalendarClock,
  CarFront,
  CarTaxiFront,
  ChefHat,
  GraduationCap,
  MapPinned,
  Martini,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/fade-in";
import { RevealHeading } from "@/components/reveal-heading";
import { RideVisual } from "@/components/ride-visual";
import { SpotlightCard } from "@/components/spotlight-card";
import { projects, type Project } from "@/lib/profile";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  "fiji-go": CarTaxiFront,
  "fiji-track": MapPinned,
  barm8: Martini,
  "vlc-pickles": ChefHat,
  "hospital-booking": CalendarClock,
  "pola-cabs": CarFront,
  eduquest: GraduationCap,
};

function Points({ points }: { points: string[] }) {
  return (
    <ul className="mt-5 grid gap-y-2.5 text-[0.95rem] text-muted-foreground">
      {points.map((point) => (
        <li key={point} className="flex gap-3">
          <span
            aria-hidden
            className="mt-[0.62em] size-1.5 shrink-0 rounded-full bg-accent"
          />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

function Stack({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return (
    <ul aria-label="Built with" className="mt-auto flex flex-wrap gap-2 pt-7">
      {items.map((s) => (
        <li key={s}>
          <Badge variant="outline">{s}</Badge>
        </li>
      ))}
    </ul>
  );
}

function Header({ p, large }: { p: Project; large?: boolean }) {
  const Icon = icons[p.id];
  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-12 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-accent/25 to-sky/10 text-accent">
          <Icon className="size-6" aria-hidden />
        </span>
        {p.period && (
          <span className="text-sm text-muted-foreground">{p.period}</span>
        )}
      </div>
      <h3
        className={cn(
          "mt-6 font-display font-semibold tracking-tight",
          large ? "text-4xl md:text-5xl" : "text-3xl"
        )}
      >
        {p.name}
      </h3>
      <p className="mt-1 text-accent">{p.kind}</p>
      <p className="mt-4 text-foreground/85">{p.summary}</p>
    </>
  );
}

export function Projects() {
  const [feature, ...rest] = projects;

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <RevealHeading text="Work" />
        <FadeIn delay={0.1}>
          <p className="mt-5 text-lg text-muted-foreground">
            {projects.length} products, from ride-hailing and fleet tracking to
            bookings and online ordering.
          </p>
        </FadeIn>
      </div>

      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {/* Feature: full width, text beside a live ride */}
        <li className="flex md:col-span-2">
          <FadeIn className="flex w-full">
            <SpotlightCard className="grid w-full gap-8 p-6 md:p-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
              <div className="flex flex-col">
                <Header p={feature} large />
                <Points points={feature.points} />
                <Stack items={feature.stack} />
              </div>
              <RideVisual />
            </SpotlightCard>
          </FadeIn>
        </li>

        {rest.map((p, i) => (
          <li key={p.id} className="flex">
            <FadeIn delay={(i % 2) * 0.08} className="flex w-full">
              <SpotlightCard className="flex w-full flex-col p-6 md:p-7">
                <Header p={p} />
                <Points points={p.points.slice(0, 4)} />
                <Stack items={p.stack} />
              </SpotlightCard>
            </FadeIn>
          </li>
        ))}
      </ul>
    </section>
  );
}

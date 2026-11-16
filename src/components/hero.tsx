import type { CSSProperties } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { RouteChart } from "@/components/route-chart";
import { profile, stops } from "@/lib/profile";

const headline =
  "I design and build real-time platforms for ride-hailing, fleet tracking and hospitality.";

const stopYears: Record<string, string> = {
  chennai: "2016",
  bengaluru: "2017",
  pune: "2021",
  australia: "2023",
  suva: "2026",
};

const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

/**
 * Server-rendered and animated with CSS only, so the first screen is in the
 * HTML and starts moving as soon as it paints.
 */
export function Hero() {
  const words = headline.split(" ");

  return (
    <section className="relative overflow-hidden">
      {/* Still background: grid plus two glows. Nothing here animates. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(45,212,191,0.2),transparent_70%)]" />
        <div className="absolute inset-x-0 top-24 h-[34rem] bg-[radial-gradient(40%_50%_at_75%_30%,rgba(96,165,250,0.14),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pt-32 pb-20 text-center sm:px-6 md:pt-44 md:pb-28">
        <p className="glass anim-rise mx-auto inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs text-foreground/85 sm:text-sm">
          <span aria-hidden className="relative flex size-2 shrink-0">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          {profile.name}, tech lead at BarM8 in {profile.location}
        </p>

        <h1
          className="mx-auto mt-7 max-w-5xl font-display text-[clamp(2.25rem,7vw,5.25rem)] leading-[1.02] font-semibold tracking-[-0.035em] text-balance"
          aria-label={headline}
        >
          {words.map((word, i) => (
            <span key={i} aria-hidden className="inline-block pb-[0.14em] align-bottom">
              <span className="text-glow anim-word" style={delay(i * 0.035)}>
                {word}
                {i < words.length - 1 ? " " : ""}
              </span>
            </span>
          ))}
        </h1>

        <p
          className="anim-rise mx-auto mt-7 max-w-2xl text-lg text-muted-foreground md:text-xl"
          style={delay(0.2)}
        >
          {profile.intro}
        </p>

        <div
          className="anim-rise mt-9 flex flex-wrap justify-center gap-3"
          style={delay(0.3)}
        >
          <Button asChild variant="accent" size="lg">
            <a href="#work">
              See the work
              <ArrowDown aria-hidden />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              Connect on LinkedIn
              <ArrowUpRight aria-hidden />
            </a>
          </Button>
        </div>

        {/* The route panel */}
        <div
          className="anim-rise relative mx-auto mt-16 max-w-5xl md:mt-20"
          style={{ ...delay(0.55), "--rise": "48px" } as CSSProperties}
        >
          <div className="glass relative grid gap-6 rounded-3xl p-4 text-left sm:p-5 md:grid-cols-[1fr_15rem] md:p-8">
            <RouteChart />
            <div className="flex flex-col justify-center border-t border-white/10 pt-5 md:border-t-0 md:border-l md:pt-0 md:pl-8">
              <p className="text-sm text-muted-foreground">
                Ten years of work, plotted
              </p>
              <ol className="mt-4 space-y-3">
                {stops.map((s, i) => {
                  const last = i === stops.length - 1;
                  return (
                    <li
                      key={s.id}
                      className="anim-rise flex items-baseline gap-3"
                      style={{ ...delay(1 + i * 0.25), "--rise": "0px" } as CSSProperties}
                    >
                      <span className="w-10 text-sm text-muted-foreground tabular-nums">
                        {stopYears[s.id]}
                      </span>
                      <span
                        className={
                          last
                            ? "font-display text-lg font-semibold text-signal"
                            : "font-display text-lg font-medium"
                        }
                      >
                        {s.place}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

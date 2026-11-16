"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EASE } from "@/components/fade-in";
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

export function Hero() {
  const reduce = useReducedMotion();
  const words = headline.split(" ");
  const rise = (delay: number) => ({
    initial: reduce ? false : ({ opacity: 0, y: 20 } as const),
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: EASE },
  });

  return (
    <section className="relative overflow-hidden">
      {/* Still background: grid plus two glows. Nothing here animates, so scrolling stays smooth. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(45,212,191,0.2),transparent_70%)]" />
        <div className="absolute inset-x-0 top-24 h-[34rem] bg-[radial-gradient(40%_50%_at_75%_30%,rgba(96,165,250,0.14),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-36 pb-20 text-center md:pt-44 md:pb-28">
        <motion.p
          {...rise(0)}
          className="glass mx-auto inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm text-foreground/85"
        >
          <span aria-hidden className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          Tech lead at BarM8, based in {profile.location}
        </motion.p>

        <h1
          className="mx-auto mt-7 max-w-5xl font-display text-[clamp(2.5rem,7vw,5.25rem)] leading-[1.02] font-semibold tracking-[-0.035em] text-balance"
          aria-label={headline}
        >
          {words.map((word, i) => (
            <span
              key={i}
              aria-hidden
              className="inline-block overflow-hidden pb-[0.14em] align-bottom"
            >
              <motion.span
                className="text-glow inline-block"
                initial={reduce ? false : { y: "105%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.15 + i * 0.045, duration: 1, ease: EASE }}
              >
                {word}
                {i < words.length - 1 ? " " : ""}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          {...rise(0.75)}
          className="mx-auto mt-7 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          {...rise(0.9)}
          className="mt-9 flex flex-wrap justify-center gap-3"
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
        </motion.div>

        {/* The route panel */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 48, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 1, ease: EASE }}
          className="relative mx-auto mt-16 max-w-5xl md:mt-20"
        >
          <div className="glass relative grid gap-6 rounded-3xl p-5 text-left md:grid-cols-[1fr_15rem] md:p-8">
            <RouteChart />
            <div className="flex flex-col justify-center border-t border-white/10 pt-5 md:border-t-0 md:border-l md:pt-0 md:pl-8">
              <p className="text-sm text-muted-foreground">
                Ten years of work, plotted
              </p>
              <ol className="mt-4 space-y-3">
                {stops.map((s, i) => {
                  const last = i === stops.length - 1;
                  return (
                    <motion.li
                      key={s.id}
                      className="flex items-baseline gap-3"
                      initial={reduce ? false : { opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 + i * 0.3, duration: 0.6, ease: EASE }}
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
                    </motion.li>
                  );
                })}
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

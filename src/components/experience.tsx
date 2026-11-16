import { GraduationCap } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { RevealHeading } from "@/components/reveal-heading";
import { education, roles } from "@/lib/profile";

export function Experience() {
  return (
    <section id="route" className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(50%_60%_at_20%_0%,rgba(96,165,250,0.12),transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-6 md:py-28 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
        {/* Stays in view while the timeline scrolls past */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <RevealHeading text="The route so far" />
          <FadeIn delay={0.1}>
            <p className="mt-5 text-lg text-muted-foreground">
              Six roles across four companies, newest first.
            </p>
            <p className="glass mt-8 inline-flex items-center gap-3 rounded-full py-2 pr-5 pl-2 text-sm text-foreground/85">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                <GraduationCap className="size-4" aria-hidden />
              </span>
              Studied at {education}
            </p>
          </FadeIn>
        </div>

        {/* The line fills with the scroll (CSS scroll-driven animation) */}
        <ol className="route-line relative lg:pt-3">
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-[7px] w-px bg-white/12 lg:top-5"
          />
          <span
            aria-hidden
            className="route-fill absolute top-2 bottom-2 left-[6px] w-[3px] rounded-full bg-gradient-to-b from-accent via-sky to-violet lg:top-5"
          />

          {roles.map((r) => (
            <li
              key={r.period}
              data-reveal=""
              className="relative pb-12 pl-10 last:pb-0"
            >
              <span
                aria-hidden
                className="route-dot absolute top-1.5 left-0 size-[15px] rounded-full border-2"
              />
              <div className="max-w-2xl">
                <p className="text-sm text-muted-foreground">{r.period}</p>
                <h3 className="mt-1.5 font-display text-2xl leading-snug font-semibold md:text-3xl">
                  {r.title}
                </h3>
                <p className="mt-1 text-accent">
                  {r.company}, {r.place}
                </p>
                <p className="mt-3 text-foreground/80">{r.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

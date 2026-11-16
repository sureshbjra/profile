"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { GraduationCap } from "lucide-react";

import { EASE, FadeIn } from "@/components/fade-in";
import { RevealHeading } from "@/components/reveal-heading";
import { education, roles } from "@/lib/profile";

export function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const drawn = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  return (
    <section id="route" className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(50%_60%_at_20%_0%,rgba(96,165,250,0.12),transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
        {/* Stays in view while the timeline scrolls past */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <RevealHeading text="The route so far" />
          <FadeIn delay={0.1}>
            <p className="mt-5 text-lg text-muted-foreground">
              Six roles across four companies, newest first.
            </p>
            <p className="glass mt-8 inline-flex items-center gap-3 rounded-full py-2 pr-5 pl-2 text-sm text-foreground/85">
              <span className="grid size-8 place-items-center rounded-full bg-accent/15 text-accent">
                <GraduationCap className="size-4" aria-hidden />
              </span>
              Studied at {education}
            </p>
          </FadeIn>
        </div>

        <ol ref={ref} className="relative lg:pt-3">
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-[7px] w-px bg-white/12 lg:top-5"
          />
          <motion.span
            aria-hidden
            className="absolute top-2 bottom-2 left-[6px] w-[3px] origin-top rounded-full bg-gradient-to-b from-accent via-sky to-violet lg:top-5"
            style={{ scaleY: drawn }}
          />

          {roles.map((r) => (
            <motion.li
              key={r.period}
              className="relative pb-12 pl-10 last:pb-0"
              initial="hidden"
              whileInView="shown"
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            >
              {/* Dot lights up as the line reaches it. Colours are explicit rgba so Motion can tween them. */}
              <motion.span
                aria-hidden
                className="absolute top-1.5 left-0 size-[15px] rounded-full border-2"
                initial={{
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  backgroundColor: "rgba(7, 8, 10, 1)",
                  boxShadow: "0 0 0 0px rgba(45, 212, 191, 0)",
                }}
                whileInView={{
                  borderColor: "rgba(45, 212, 191, 1)",
                  backgroundColor: "rgba(45, 212, 191, 1)",
                  boxShadow: "0 0 0 6px rgba(45, 212, 191, 0.16)",
                }}
                viewport={{ margin: "0px 0px -38% 0px" }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="max-w-2xl"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  shown: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <p className="text-sm text-muted-foreground">{r.period}</p>
                <h3 className="mt-1.5 font-display text-2xl leading-snug font-semibold md:text-3xl">
                  {r.title}
                </h3>
                <p className="mt-1 text-accent">
                  {r.company}, {r.place}
                </p>
                <p className="mt-3 text-foreground/80">{r.summary}</p>
              </motion.div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

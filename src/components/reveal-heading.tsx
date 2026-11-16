"use client";

import { motion } from "motion/react";

import { EASE } from "@/components/fade-in";
import { cn } from "@/lib/utils";

/** Heading whose words rise out of a mask the first time it scrolls into view. */
export function RevealHeading({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <motion.h2
      aria-label={text}
      className={cn(
        "font-display text-4xl leading-[1.05] font-semibold tracking-tight md:text-6xl",
        className
      )}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ staggerChildren: 0.05 }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block overflow-hidden pb-[0.14em] align-bottom"
        >
          <motion.span
            className="text-glow inline-block"
            variants={{
              hidden: { y: "105%" },
              shown: { y: 0, transition: { duration: 0.9, ease: EASE } },
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}

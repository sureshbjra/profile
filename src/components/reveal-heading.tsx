import type { CSSProperties } from "react";

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
    <h2
      data-reveal=""
      data-reveal-words=""
      aria-label={text}
      className={cn(
        "font-display text-4xl leading-[1.05] font-semibold tracking-tight md:text-6xl",
        className
      )}
    >
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden
          className="word inline-block overflow-hidden pb-[0.14em] align-bottom"
        >
          <span className="text-glow" style={{ "--i": i } as CSSProperties}>
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </h2>
  );
}

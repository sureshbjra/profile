import type { CSSProperties, ReactNode } from "react";

/** One calm entrance, used everywhere: fade and rise, once, when scrolled into view. */
export function FadeIn({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <div
      data-reveal=""
      className={className}
      style={{ "--d": `${delay}s`, "--rise": `${y}px` } as CSSProperties}
    >
      {children}
    </div>
  );
}

"use client";

import type { ComponentProps, PointerEvent } from "react";

import { cn } from "@/lib/utils";

/** Glass card with a soft light under the pointer. Writes CSS variables directly, so React never re-renders. */
export function SpotlightCard({ className, ...props }: ComponentProps<"div">) {
  function onMove(e: PointerEvent<HTMLDivElement>) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <div
      onPointerMove={onMove}
      className={cn(
        "glass spotlight rounded-2xl transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-white/20",
        className
      )}
      {...props}
    />
  );
}

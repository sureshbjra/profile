import type { CSSProperties } from "react";
import { CarTaxiFront } from "lucide-react";

import { InView } from "@/components/in-view";

const ROUTE =
  "M 80 300 L 80 252 Q 80 240 92 240 L 188 240 Q 200 240 200 228 L 200 162 Q 200 150 212 150 L 298 150 Q 310 150 310 138 L 310 104";
const TRIP = "7s";

const roadsH = [70, 150, 240, 320];
const roadsV = [80, 200, 310];

const vars = (v: Record<string, string>) => v as CSSProperties;

/**
 * Illustration of a Fiji Go ride in progress: a car runs from pickup to
 * drop-off while the trip card fills. Pure CSS animation; it starts when the
 * card is first scrolled into view and pauses while it is off screen.
 */
export function RideVisual() {
  return (
    <InView
      startActive={false}
      role="img"
      aria-label="Illustration of a Fiji Go ride: a car travels from the pickup point to the drop-off while the trip progress fills"
      className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 bg-[#0a0c0f] sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[26rem]"
    >
      <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
        <defs>
          <linearGradient id="ride-line" x1="0" x2="1" y1="1" y2="0">
            <stop offset="0" stopColor="var(--accent)" />
            <stop offset="1" stopColor="var(--sky)" />
          </linearGradient>
          <radialGradient id="ride-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="rgba(45,212,191,0.55)" />
            <stop offset="1" stopColor="rgba(45,212,191,0)" />
          </radialGradient>
        </defs>

        {/* Sea along one edge */}
        <path d="M 400 170 C 352 200, 340 290, 362 400 L 400 400 Z" fill="rgba(96,165,250,0.07)" />
        <path d="M 400 170 C 352 200, 340 290, 362 400" fill="none" stroke="rgba(96,165,250,0.18)" strokeWidth={1} />

        {/* Streets */}
        <g stroke="#ffffff" strokeLinecap="round">
          {roadsH.map((y) => (
            <line key={`h${y}`} x1={-10} x2={410} y1={y} y2={y} strokeOpacity={0.05} strokeWidth={12} />
          ))}
          {roadsV.map((x) => (
            <line key={`v${x}`} x1={x} x2={x} y1={-10} y2={410} strokeOpacity={0.05} strokeWidth={12} />
          ))}
          <line x1={240} y1={410} x2={340} y2={-10} strokeOpacity={0.035} strokeWidth={9} />
          <line x1={-10} y1={180} x2={170} y2={-10} strokeOpacity={0.035} strokeWidth={9} />
        </g>

        {/* Route: drawn once, then stays */}
        <path d={ROUTE} fill="none" stroke="url(#ride-line)" strokeOpacity={0.18} strokeWidth={12} strokeLinecap="round" strokeLinejoin="round" />
        <path
          d={ROUTE}
          pathLength={1}
          className="anim-draw"
          style={vars({ "--dur": "1.6s" })}
          fill="none"
          stroke="url(#ride-line)"
          strokeWidth={3.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Pickup */}
        <circle
          cx={80}
          cy={300}
          r={9}
          className="anim-ping motion-reduce:hidden"
          style={vars({ "--dur": "2s", "--ping-scale": "2.6" })}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={2}
        />
        <circle cx={80} cy={300} r={7} fill="var(--accent)" stroke="#0a0c0f" strokeWidth={3} />

        {/* Drop-off */}
        <g transform="translate(310 94)">
          <path d="M 0 -22 C -9 -22 -14 -15 -14 -9 C -14 0 0 10 0 10 C 0 10 14 0 14 -9 C 14 -15 9 -22 0 -22 Z" fill="var(--signal)" />
          <circle cy={-10} r={4.5} fill="#0a0c0f" />
        </g>

        {/* Car */}
        <g
          className="anim-drive"
          style={vars({ offsetPath: `path("${ROUTE}")`, offsetRotate: "auto", "--dur": TRIP })}
        >
          <circle r={22} fill="url(#ride-glow)" />
          <rect x={-9} y={-5.5} width={18} height={11} rx={3.5} fill="#ffffff" />
          <rect x={2} y={-4} width={4.5} height={8} rx={1.5} fill="#0a0c0f" fillOpacity={0.55} />
        </g>

        {/* Labels */}
        <text x={96} y={304} fill="#ffffff" fillOpacity={0.55} fontSize={10}>Pickup</text>
        <text x={294} y={98} textAnchor="end" fill="#ffffff" fillOpacity={0.55} fontSize={10}>Drop-off</text>
      </svg>

      {/* Status chip */}
      <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-[#0d0f12]/90 px-3 py-1.5 text-xs text-foreground/85">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
          <span className="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
        Ride in progress
      </div>

      {/* Trip card */}
      <div className="absolute right-3 bottom-3 left-3 flex items-center gap-3 rounded-xl border border-white/10 bg-[#0d0f12]/92 p-3 sm:right-4 sm:bottom-4 sm:left-auto sm:w-64">
        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-accent/30 to-sky/15 text-accent">
          <CarTaxiFront className="size-[18px]" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-2 text-xs">
            <span className="truncate font-medium text-foreground">Driver on the way</span>
            <span className="text-muted-foreground">Live</span>
          </div>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="anim-trip-bar h-full rounded-full bg-gradient-to-r from-accent to-sky motion-reduce:w-3/5"
              style={vars({ "--dur": TRIP })}
            />
          </div>
        </div>
      </div>
    </InView>
  );
}

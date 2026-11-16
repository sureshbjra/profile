"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

import { stops } from "@/lib/profile";

const W = 600;
const H = 400;
const LON = [60, 190] as const;
const LAT = [28, -38] as const;

const x = (lon: number) => ((lon - LON[0]) / (LON[1] - LON[0])) * W;
const y = (lat: number) => ((LAT[0] - lat) / (LAT[0] - LAT[1])) * H;

const pts = stops.map((s) => ({ ...s, x: x(s.lon), y: y(s.lat) }));
const [chennai, bengaluru, pune, australia, suva] = pts;

const route = [
  `M ${chennai.x} ${chennai.y}`,
  `L ${bengaluru.x} ${bengaluru.y}`,
  `L ${pune.x} ${pune.y}`,
  `C ${pune.x + 70} ${pune.y - 40}, ${australia.x - 60} ${australia.y - 150}, ${australia.x} ${australia.y}`,
  `S ${suva.x - 50} ${suva.y + 70}, ${suva.x} ${suva.y}`,
].join(" ");

// Rough share of the route length at which each stop is reached.
const reached = [0, 0.03, 0.1, 0.72, 1];
const DRAW = 2.6;
const START = 1.1;

const meridians = [80, 100, 120, 140, 160, 180];
const parallels = [20, 10, 0, -10, -20, -30];

const labelOffset = {
  above: { dx: 0, dy: -14, anchor: "middle" },
  below: { dx: 0, dy: 24, anchor: "middle" },
  left: { dx: -12, dy: 5, anchor: "end" },
  right: { dx: 12, dy: 5, anchor: "start" },
} as const;

export function RouteChart() {
  const reduce = useReducedMotion();
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { margin: "100px" });

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full"
      role="img"
      aria-label="Chart of the places Suresh has worked, drawn as a route from Chennai through Bengaluru, Pune and Australia to Suva in Fiji"
    >
      <defs>
        <linearGradient id="route-line" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="var(--accent)" />
          <stop offset="0.6" stopColor="var(--sky)" />
          <stop offset="1" stopColor="var(--violet)" />
        </linearGradient>
      </defs>

      <g fill="#ffffff" stroke="#ffffff">
        {meridians.map((lon) => (
          <g key={lon}>
            <line x1={x(lon)} x2={x(lon)} y1={0} y2={H} strokeOpacity={0.07} />
            <text x={x(lon) + 5} y={H - 8} stroke="none" fillOpacity={0.35} fontSize={10}>
              {lon}°E
            </text>
          </g>
        ))}
        {parallels.map((lat) => (
          <g key={lat}>
            <line
              x1={0}
              x2={W}
              y1={y(lat)}
              y2={y(lat)}
              strokeOpacity={lat === 0 ? 0.2 : 0.07}
              strokeDasharray={lat === 0 ? "2 6" : undefined}
            />
            <text
              x={W - 6}
              y={y(lat) - 5}
              textAnchor="end"
              stroke="none"
              fillOpacity={0.35}
              fontSize={10}
            >
              {lat === 0 ? "Equator" : `${Math.abs(lat)}°${lat > 0 ? "N" : "S"}`}
            </text>
          </g>
        ))}
      </g>

      {/* Planned route */}
      <path
        d={route}
        fill="none"
        stroke="#ffffff"
        strokeOpacity={0.18}
        strokeWidth={1.5}
        strokeDasharray="1 7"
        strokeLinecap="round"
      />

      {/* Soft halo, drawn wide and faint instead of using a blur filter */}
      <motion.path
        d={route}
        fill="none"
        stroke="url(#route-line)"
        strokeOpacity={0.16}
        strokeWidth={12}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: DRAW, delay: START, ease: "easeInOut" }}
      />
      <motion.path
        d={route}
        fill="none"
        stroke="url(#route-line)"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: DRAW, delay: START, ease: "easeInOut" }}
      />

      {pts.map((p, i) => {
        const o = labelOffset[p.label];
        const delay = START + reached[i] * DRAW;
        const last = i === pts.length - 1;
        return (
          <motion.g
            key={p.id}
            initial={reduce ? false : { opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: `${p.x}px ${p.y}px` }}
          >
            {last && !reduce && (
              <motion.circle
                cx={p.x}
                cy={p.y}
                r={8}
                fill="none"
                stroke="var(--signal)"
                strokeWidth={2}
                style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                animate={{ scale: [1, 3.4], opacity: [0.8, 0] }}
                transition={{
                  delay: delay + 0.4,
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            )}
            <circle
              cx={p.x}
              cy={p.y}
              r={last ? 7 : 5}
              fill={last ? "var(--signal)" : "var(--background)"}
              stroke={last ? "var(--background)" : "#ffffff"}
              strokeOpacity={last ? 1 : 0.8}
              strokeWidth={2}
            />
            <text
              x={p.x + o.dx}
              y={p.y + o.dy}
              textAnchor={o.anchor}
              fill="#ffffff"
              fillOpacity={last ? 1 : 0.85}
              fontSize={last ? 15 : 13}
              fontWeight={last ? 600 : 500}
            >
              {p.place}
            </text>
          </motion.g>
        );
      })}

      {/* One vehicle keeps running the route, only while the chart is on screen */}
      {!reduce && inView && (
        <motion.circle
          r={4.5}
          fill="#ffffff"
          style={{ offsetPath: `path("${route}")`, offsetRotate: "0deg" }}
          initial={{ offsetDistance: "0%", opacity: 0 }}
          animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 6,
            delay: START + DRAW + 0.6,
            repeat: Infinity,
            repeatDelay: 1.2,
            ease: "easeInOut",
            opacity: {
              duration: 6,
              delay: START + DRAW + 0.6,
              repeat: Infinity,
              repeatDelay: 1.2,
              times: [0, 0.08, 0.92, 1],
            },
          }}
        />
      )}
    </svg>
  );
}

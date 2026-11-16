import type { CSSProperties } from "react";

import { InView } from "@/components/in-view";
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
const START = 0.9;

const meridians = [80, 100, 120, 140, 160, 180];
const parallels = [20, 10, 0, -10, -20, -30];

const labelOffset = {
  above: { dx: 0, dy: -14, anchor: "middle" },
  below: { dx: 0, dy: 24, anchor: "middle" },
  left: { dx: -12, dy: 5, anchor: "end" },
  right: { dx: 12, dy: 5, anchor: "start" },
} as const;

const vars = (v: Record<string, string>) => v as CSSProperties;

/** CSS-animated: the route draws once, stops pop in as it reaches them, then one vehicle keeps running it. */
export function RouteChart() {
  return (
    <InView>
      <svg
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
        {[{ w: 12, o: 0.16 }, { w: 3, o: 1 }].map(({ w, o }) => (
          <path
            key={w}
            d={route}
            pathLength={1}
            className="anim-draw"
            style={vars({ "--d": `${START}s`, "--dur": `${DRAW}s` })}
            fill="none"
            stroke="url(#route-line)"
            strokeOpacity={o}
            strokeWidth={w}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}

        {pts.map((p, i) => {
          const o = labelOffset[p.label];
          const d = `${START + reached[i] * DRAW}s`;
          const last = i === pts.length - 1;
          return (
            <g key={p.id} className="anim-pop" style={vars({ "--d": d })}>
              {last && (
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={8}
                  className="anim-ping motion-reduce:hidden"
                  style={vars({ "--d": `${START + DRAW + 0.4}s`, "--dur": "2.4s", "--ping-scale": "3.4" })}
                  fill="none"
                  stroke="var(--signal)"
                  strokeWidth={2}
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
            </g>
          );
        })}

        {/* One vehicle keeps running the route */}
        <circle
          r={4.5}
          fill="#ffffff"
          className="anim-drive motion-reduce:hidden"
          style={vars({
            offsetPath: `path("${route}")`,
            offsetRotate: "0deg",
            "--d": `${START + DRAW + 0.6}s`,
            "--dur": "7.2s",
          })}
        />
      </svg>
    </InView>
  );
}

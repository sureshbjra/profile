import type { MetadataRoute } from "next";

// On GitHub Pages the site lives under /profile (set by the deploy workflow).
const base = process.env.PAGES_BASE_PATH ?? "";

export const dynamic = "force-static";

/** Lets phones add the site to the home screen with the right icon and colours. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Suresh B, technical team lead",
    short_name: "Suresh B",
    description:
      "Technical team lead, full-stack and AI engineer building real-time platforms for ride-hailing, fleet tracking and hospitality.",
    start_url: `${base}/`,
    scope: `${base}/`,
    display: "standalone",
    background_color: "#07080a",
    theme_color: "#07080a",
    icons: [
      { src: `${base}/icons/icon-192.png`, sizes: "192x192", type: "image/png" },
      { src: `${base}/icons/icon-512.png`, sizes: "512x512", type: "image/png" },
    ],
  };
}

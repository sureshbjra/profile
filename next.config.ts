import type { NextConfig } from "next";

// On GitHub Pages the site lives under /profile, so the deploy workflow sets
// PAGES_BASE_PATH. Locally it is empty and the site runs at the root as usual.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Build plain HTML, CSS and JS into ./out so any static host can serve it.
  output: "export",
  basePath,
  trailingSlash: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

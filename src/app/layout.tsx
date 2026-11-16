import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "lenis/dist/lenis.css";
import "./globals.css";

import { RevealObserver } from "@/components/reveal-observer";
import { profile } from "@/lib/profile";
import { keywords, seoDescription, seoTitle, siteUrl } from "@/lib/seo";
import { SmoothScroll } from "@/components/smooth-scroll";

// Self-hosted, Latin only, preloaded, with a size-matched fallback so text
// does not jump when the web font arrives.
const display = localFont({
  src: "../../node_modules/@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2",
  weight: "200 800",
  variable: "--font-bricolage",
  display: "swap",
});

const sans = localFont({
  src: "../../node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2",
  weight: "400 700",
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  // Only the domain: Next.js adds the /profile base path to image URLs itself.
  metadataBase: new URL(new URL(siteUrl).origin),
  title: seoTitle,
  description: seoDescription,
  keywords,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName: profile.name,
    title: seoTitle,
    description: seoDescription,
    locale: "en_US",
    firstName: "Suresh",
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#07080a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Marks that JavaScript runs, so scroll reveals may start hidden. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="min-h-dvh">
        <SmoothScroll />
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}

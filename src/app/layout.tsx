import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/instrument-sans";
import "lenis/dist/lenis.css";
import "./globals.css";

import { SmoothScroll } from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: "Suresh B | Technical team lead, full-stack and AI engineer",
  description:
    "Suresh B leads engineering at BarM8 and builds ride-hailing, GPS fleet tracking and booking platforms with Next.js, TypeScript, Node.js and AWS.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-dvh">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

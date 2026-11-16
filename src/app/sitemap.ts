import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

/** Lists the page for search engines. Submit it in Google Search Console. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

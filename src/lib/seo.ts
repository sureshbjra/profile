import { education, profile, projects, stack } from "@/lib/profile";

/** The public address of the live site. Change this if the site moves to its own domain. */
export const siteUrl = "https://sureshbjra.github.io/profile/";

export const seoTitle = "Suresh B | Technical Team Lead & Full-Stack AI Engineer";

export const seoDescription =
  "Suresh B is a tech lead and full-stack developer in Suva, Fiji, building ride-hailing, fleet tracking and booking platforms with Next.js, Node.js, AWS and AI.";

/**
 * Search phrases people might use to find this profile. Google ignores the
 * keywords tag itself, but the same phrases are used in the title,
 * description, page text and structured data, which is what search engines read.
 */
export const keywords = [
  "Suresh B",
  "Suresh B developer",
  "Suresh B software engineer",
  "Suresh B Fiji",
  "Suresh B BarM8",
  "technical team lead",
  "tech lead",
  "full-stack developer",
  "full stack developer Fiji",
  "software developer Suva Fiji",
  "software engineer Bengaluru",
  "Next.js developer",
  "React developer",
  "Node.js developer",
  "TypeScript developer",
  "MERN stack developer",
  "AI engineer",
  "AI agents developer",
  "LLM integration",
  "ride-hailing app developer",
  "taxi booking app development",
  "GPS fleet tracking software",
  "real-time web applications",
  "PostgreSQL PostGIS developer",
  "AWS developer",
  "BarM8",
  "Fiji Go",
  "Fiji Track",
  "VLC Pickles",
];

/** Structured data (schema.org) so search engines understand this is a person's profile page. */
export function profileJsonLd() {
  const person = {
    "@type": "Person",
    "@id": `${siteUrl}#person`,
    name: profile.name,
    url: siteUrl,
    image: `${siteUrl}icons/icon-512.png`,
    jobTitle: "Technical Team Lead",
    description: seoDescription,
    worksFor: { "@type": "Organization", name: "BarM8" },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education.replace(", Chennai", ""),
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Suva",
      addressCountry: "FJ",
    },
    knowsAbout: [...new Set(stack.flatMap((g) => g.items))],
    sameAs: [profile.links.linkedin, profile.links.github],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": siteUrl,
        url: siteUrl,
        name: seoTitle,
        description: seoDescription,
        inLanguage: "en",
        mainEntity: { "@id": `${siteUrl}#person` },
      },
      person,
      ...projects.map((p) => ({
        "@type": "CreativeWork",
        name: p.name,
        description: `${p.kind}. ${p.summary}`,
        creator: { "@id": `${siteUrl}#person` },
        ...(p.stack ? { keywords: p.stack.join(", ") } : {}),
      })),
    ],
  };
}

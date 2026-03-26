import type { MetadataRoute } from "next";
import { getExampleLandingPageSlugs } from "@/lib/examples";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://www.christophermeyer.dev",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.christophermeyer.dev/examples",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...getExampleLandingPageSlugs().map((slug) => ({
      url: `https://www.christophermeyer.dev/examples/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

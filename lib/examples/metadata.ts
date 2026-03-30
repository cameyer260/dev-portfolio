import type { Metadata } from "next";
import type { ExampleLandingPage } from "@/lib/examples/types";

const siteUrl = "https://www.christophermeyer.dev";
const exampleDetailRobots: NonNullable<Metadata["robots"]> = {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
  },
};

export function createExamplesIndexMetadata(): Metadata {
  const title = "Local Business Website Examples | Christopher Meyer";
  const description =
    "Browse industry-specific local-business website examples for restaurants, plumbers, contractors, law firms, gyms, and more. Built for Christopher Meyer's freelance portfolio with shared infrastructure and distinct per-industry layouts.";

  return {
    title,
    description,
    alternates: {
      canonical: "/examples",
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/examples`,
      type: "website",
      images: ["/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export function createExamplePageMetadata(page: ExampleLandingPage): Metadata {
  const title = page.seo?.title ?? `${page.industry} Website Example | ${page.businessName}`;
  const description = page.seo?.description ?? page.hero.description;
  const path = `/examples/${page.slug}`;

  return {
    title,
    description,
    robots: exampleDetailRobots,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      type: "website",
      images: ["/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

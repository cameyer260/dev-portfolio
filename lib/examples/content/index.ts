import type { ExampleLandingPage, ExampleThemeFamily } from "@/lib/examples/types";
import { accountantExamplePage } from "@/lib/examples/content/accountant";
import { autoRepairExamplePage } from "@/lib/examples/content/auto-repair";
import { contractorExamplePage } from "@/lib/examples/content/contractor";
import { dentistExamplePage } from "@/lib/examples/content/dentist";
import { gymExamplePage } from "@/lib/examples/content/gym";
import { landscapingExamplePage } from "@/lib/examples/content/landscaping";
import { lawFirmExamplePage } from "@/lib/examples/content/law-firm";
import { plumberExamplePage } from "@/lib/examples/content/plumber";
import { realEstateExamplePage } from "@/lib/examples/content/real-estate";
import { restaurantExamplePage } from "@/lib/examples/content/restaurant";
import { salonExamplePage } from "@/lib/examples/content/salon";

export const exampleLandingPages = [
  restaurantExamplePage,
  plumberExamplePage,
  contractorExamplePage,
  autoRepairExamplePage,
  dentistExamplePage,
  lawFirmExamplePage,
  gymExamplePage,
  salonExamplePage,
  landscapingExamplePage,
  realEstateExamplePage,
  accountantExamplePage,
] as const satisfies readonly ExampleLandingPage[];

const examplePageMap = new Map(exampleLandingPages.map((page) => [page.slug, page]));

export const exampleFamilyDescriptions: Record<ExampleThemeFamily, string> = {
  "warm-editorial":
    "A warmer, more premium direction for restaurants, salons, and real estate businesses that need atmosphere and trust.",
  "bold-trust":
    "A more direct, trust-first direction for service businesses that need calls, estimate requests, and fast credibility.",
  "premium-professional":
    "A polished, high-trust direction for law firms and dental practices where credibility matters immediately.",
  "energetic-performance":
    "A higher-energy direction for gyms and landscaping businesses that sell momentum, visible results, and stronger upgrades.",
};

export function getExampleLandingPages(): ExampleLandingPage[] {
  return [...exampleLandingPages];
}

export function getExampleLandingPage(slug: string): ExampleLandingPage | undefined {
  return examplePageMap.get(slug);
}

export function getExampleLandingPageSlugs(): string[] {
  return exampleLandingPages.map((page) => page.slug);
}

export function getExampleLandingPagesByFamily(
  family: ExampleThemeFamily,
): ExampleLandingPage[] {
  return exampleLandingPages.filter((page) => page.themeFamily === family);
}

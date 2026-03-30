import { defaultSectionVariants } from "@/lib/examples/themes/families";
import type {
  ExampleAction,
  ExampleContactSection,
  ExampleFeatureItem,
  ExampleHeroSection,
  ExampleImage,
  ExampleLandingPage,
  ExampleSectionVariants,
  ExampleServiceAreaSection,
  ExampleServicesSection,
  ExampleWhyChooseUsSection,
  ExampleCtaSection,
} from "@/lib/examples/types";

type ActionInput = {
  label: string;
  href?: string;
  tone?: ExampleAction["tone"];
};

type HeroInput = Omit<ExampleHeroSection, "image" | "primaryCta" | "secondaryCta"> & {
  imageLabel: string;
  imageAlt?: string;
  primaryCta: ActionInput;
  secondaryCta?: ActionInput;
};

type FeatureInput = Omit<ExampleFeatureItem, "image"> & {
  imageLabel?: string;
  imageAlt?: string;
};

type ServicesInput = Omit<ExampleServicesSection, "items"> & {
  items: FeatureInput[];
};

type WhyChooseUsInput = Omit<ExampleWhyChooseUsSection, "image" | "items"> & {
  imageLabel?: string;
  imageAlt?: string;
  items: FeatureInput[];
};

type ServiceAreaInput = Omit<ExampleServiceAreaSection, "mapImage"> & {
  mapLabel?: string;
  mapAlt?: string;
};

type CtaInput = Omit<ExampleCtaSection, "primaryCta" | "secondaryCta"> & {
  primaryCta: ActionInput;
  secondaryCta?: ActionInput;
};

type ContactInput = Omit<ExampleContactSection, "phone" | "primaryCta"> & {
  primaryCta?: ActionInput;
};

type BuildExampleLandingPageInput = Omit<
  ExampleLandingPage,
  "sectionVariants" | "hero" | "services" | "whyChooseUs" | "serviceArea" | "cta" | "contact"
> & {
  sectionVariants?: Partial<ExampleSectionVariants>;
  hero: HeroInput;
  services: ServicesInput;
  whyChooseUs: WhyChooseUsInput;
  serviceArea: ServiceAreaInput;
  cta: CtaInput;
  contact: ContactInput;
};

type ImageSlot = "hero" | "service" | "service-area" | "proof";

export const metroEastAreas = [
  "Edwardsville",
  "Glen Carbon",
  "Maryville",
  "Troy",
  "Collinsville",
  "O'Fallon",
];

export function createLeadFormFields(
  label: string,
  options: string[],
): ExampleHeroSection["formFields"] {
  return [
    {
      name: "name",
      label: "Name",
      placeholder: "Your name",
    },
    {
      name: "phone",
      label: "Phone",
      type: "tel",
      placeholder: "Best number",
    },
    {
      name: "service",
      label,
      type: "select",
      options,
    },
    {
      name: "timing",
      label: "Timing",
      placeholder: "Today, this week, or flexible",
    },
  ];
}

export function createContactFields(
  label: string,
  options: string[],
): ExampleContactSection["fields"] {
  return [
    {
      name: "name",
      label: "Name",
      placeholder: "Your name",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "you@example.com",
    },
    {
      name: "phone",
      label: "Phone",
      type: "tel",
      placeholder: "(618) 555-0182",
    },
    {
      name: "service",
      label,
      type: "select",
      options,
    },
    {
      name: "details",
      label: "Details",
      type: "textarea",
      placeholder: "Tell us a little about what you need.",
    },
  ];
}

export function buildExampleLandingPage(
  input: BuildExampleLandingPageInput,
): ExampleLandingPage {
  return {
    businessName: input.businessName,
    slug: input.slug,
    industry: input.industry,
    phone: input.phone,
    ctaText: input.ctaText,
    themeFamily: input.themeFamily,
    sectionVariants: {
      ...defaultSectionVariants[input.themeFamily],
      ...input.sectionVariants,
    },
    hero: {
      ...input.hero,
      image: createExampleImage(
        input.slug,
        "hero",
        input.hero.imageAlt ?? `${input.industry} hero preview for ${input.businessName}`,
      ),
      primaryCta: createAction(input.hero.primaryCta),
      secondaryCta: input.hero.secondaryCta ? createAction(input.hero.secondaryCta) : undefined,
    },
    services: {
      ...input.services,
      items: input.services.items.map((item, index) =>
        item.imageLabel
          ? {
              ...item,
              image: createExampleImage(
                input.slug,
                "service",
                item.imageAlt ?? `${item.title} preview for ${input.businessName}`,
                index,
              ),
            }
          : item,
      ),
    },
    whyChooseUs: {
      ...input.whyChooseUs,
      items: input.whyChooseUs.items,
      image: input.whyChooseUs.imageLabel
        ? createExampleImage(
            input.slug,
            "proof",
            input.whyChooseUs.imageAlt ??
              `${input.industry} trust and proof preview for ${input.businessName}`,
          )
        : undefined,
    },
    testimonials: input.testimonials,
    process: input.process,
    serviceArea: {
      ...input.serviceArea,
      mapImage: input.serviceArea.mapLabel
        ? createExampleImage(
            input.slug,
            "service-area",
            input.serviceArea.mapAlt ?? `${input.businessName} service area map preview`,
          )
        : undefined,
    },
    cta: {
      ...input.cta,
      primaryCta: createAction(input.cta.primaryCta),
      secondaryCta: input.cta.secondaryCta ? createAction(input.cta.secondaryCta) : undefined,
    },
    contact: {
      ...input.contact,
      phone: input.phone,
      primaryCta: input.contact.primaryCta ? createAction(input.contact.primaryCta) : undefined,
    },
    seo: input.seo ?? {
      title: `${input.industry} Website Example | ${input.businessName}`,
      description: input.hero.description,
    },
  };
}

function createAction(input: ActionInput): ExampleAction {
  return {
    label: input.label,
    href: input.href ?? "#contact",
    tone: input.tone,
  };
}

function createExampleImage(
  slug: string,
  slot: ImageSlot,
  alt: string,
  index?: number,
): ExampleImage {
  return {
    src: createExampleAssetPath(slug, slot, index),
    alt,
  };
}

function createExampleAssetPath(slug: string, slot: ImageSlot, index = 0): string {
  if (slot === "hero") {
    return `/examples/${slug}/hero.jpg`;
  }

  if (slot === "proof") {
    return `/examples/${slug}/proof.jpg`;
  }

  if (slot === "service-area") {
    return "/examples/shared/service-area.png";
  }

  return `/examples/${slug}/service-${index + 1}.jpg`;
}

import {
  buildExampleLandingPage,
  createContactFields,
  metroEastAreas,
} from "@/lib/examples/content/shared";

export const landscapingExamplePage = buildExampleLandingPage({
  businessName: "Everline Outdoor Works",
  slug: "landscaping",
  industry: "Landscaping",
  phone: "(618) 555-0121",
  ctaText: "Get Free Quote",
  themeFamily: "energetic-performance",
  hero: {
    eyebrow: "Outdoor transformation demo",
    title: "Bold landscape upgrades with proof that homeowners can picture instantly.",
    highlight: "from curb appeal to outdoor living",
    description:
      "This landscaping example uses the energetic performance family to highlight visible transformation, stronger imagery, and a decisive quote-focused CTA.",
    imageLabel: "Landscaping crew and premium backyard project",
    badges: ["Design-build", "Seasonal maintenance", "Outdoor living"],
    primaryCta: {
      label: "Get Free Quote",
      href: "#contact",
      tone: "accent",
    },
    secondaryCta: {
      label: "See Services",
      href: "#services",
      tone: "secondary",
    },
  },
  services: {
    eyebrow: "Project focus",
    title: "The service cards emphasize visible upgrades and premium outdoor results.",
    description:
      "Landscaping sits well in the energetic family because contrast, imagery, and transformation carry so much of the selling work.",
    items: [
      {
        title: "Landscape Design",
        description:
          "Front-yard refreshes, planting plans, and layout work presented as a clear visual upgrade.",
        icon: "leaf",
        imageLabel: "Landscape design and outdoor planning",
      },
      {
        title: "Outdoor Living",
        description:
          "Patios, lighting, and gathering spaces positioned around premium transformation and long-term value.",
        icon: "home",
        imageLabel: "Patio and outdoor living installation",
      },
      {
        title: "Property Maintenance",
        description:
          "Ongoing maintenance framed as consistent curb appeal and dependable local care.",
        icon: "check",
        imageLabel: "Landscaping maintenance and curb appeal",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "Transformation proof",
    title: "The page should make homeowners imagine the finished result before they request the quote.",
    description:
      "This variation keeps the high-energy structure but grounds it in craftsmanship, before-and-after thinking, and premium outdoor visuals.",
    imageLabel: "Premium backyard transformation",
    items: [
      {
        title: "Visual proof first",
        description:
          "The image-forward cards and contrast-heavy sections help landscaping feel outcome-driven instead of generic.",
        icon: "leaf",
      },
      {
        title: "Quote-ready structure",
        description:
          "The CTA language is direct and built around project inquiries, not vague brochure-site browsing.",
        icon: "check",
      },
      {
        title: "Local service-area strength",
        description:
          "The page keeps Edwardsville, Glen Carbon, and nearby neighborhoods visible because proximity matters for service scheduling.",
        icon: "map",
      },
    ],
  },
  testimonials: {
    eyebrow: "Project reactions",
    title: "Testimonials should feel specific enough that a homeowner can imagine their own yard next.",
    description:
      "The proof section supports a more visual, transformation-driven sales story than most contractor or home-service pages.",
    items: [
      {
        quote:
          "The site made the company feel premium but still approachable. We could immediately picture them handling our patio project.",
        name: "Jenna K.",
        role: "Homeowner",
        location: "Edwardsville",
        rating: 5,
      },
      {
        quote:
          "It sold the quality of the work without feeling cluttered. The quote form was easy and the project categories were clear.",
        name: "Tyler M.",
        role: "Homeowner",
        location: "Glen Carbon",
        rating: 5,
      },
      {
        quote:
          "The before-and-after style presentation made the whole business feel more real and more premium.",
        name: "Andrea P.",
        role: "Property owner",
        location: "Maryville",
        rating: 5,
      },
    ],
  },
  process: {
    eyebrow: "Quote flow",
    title: "The process should move from vision to visible result without losing momentum.",
    description:
      "Landscaping pages convert best when they connect aspiration, local trust, and a simple quote request.",
    steps: [
      {
        title: "Share the project",
        description: "The contact form gives enough room for landscaping goals, timing, and property details.",
      },
      {
        title: "Review the scope",
        description: "Use the layout to explain design ideas, project phases, and premium upgrade options clearly.",
      },
      {
        title: "Transform the property",
        description: "The proof sections keep reinforcing craftsmanship and visible outcome all the way to the close.",
      },
    ],
  },
  serviceArea: {
    eyebrow: "Service radius",
    title: "Local coverage matters because landscaping buyers want a nearby team they can picture on-site.",
    description:
      "A clean map-split section keeps nearby communities visible while still matching the family’s stronger visual rhythm.",
    areas: [...metroEastAreas, "Bethalto", "Highland"],
    mapLabel: "Landscaping projects across Edwardsville and nearby communities",
  },
  cta: {
    eyebrow: "Outcome-driven demo",
    title: "Need a landscaping page that sells visible transformation instead of a bland service list?",
    description:
      "This example pushes stronger imagery, sharper contrast, and a more decisive quote flow while staying reusable for future client work.",
    primaryCta: {
      label: "Start A Landscaping Demo",
      href: "#contact",
      tone: "accent",
    },
    secondaryCta: {
      label: "Review Services",
      href: "#services",
      tone: "secondary",
    },
  },
  contact: {
    eyebrow: "Request the quote",
    title: "Tailor the final section for design-build work, outdoor living upgrades, or recurring maintenance.",
    description:
      "The contact area is designed to feel like the decisive final push toward a real project conversation.",
    address: "1415 South State Route 157, Edwardsville, IL 62025",
    email: "projects@everlineoutdoor.example",
    fields: createContactFields("Project type", [
      "Landscape design",
      "Patio or outdoor living",
      "Property maintenance",
      "Lighting or upgrades",
    ]),
    primaryCta: {
      label: "Get Free Quote",
      href: "#contact",
    },
  },
  seo: {
    title: "Landscaping Website Example | Everline Outdoor Works Demo",
    description:
      "Landscaping website example showing an energetic performance landing page for project quotes, outdoor transformations, and local service-area visibility in Edwardsville and Glen Carbon.",
  },
});

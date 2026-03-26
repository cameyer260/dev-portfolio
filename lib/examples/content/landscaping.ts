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
    eyebrow: "Outdoor transformations",
    title: "Bold landscape upgrades with proof that homeowners can picture instantly.",
    highlight: "from curb appeal to outdoor living",
    description:
      "Everline Outdoor Works helps homeowners picture the finished project and take the next step toward a quote.",
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
    title: "Services built around visible improvements homeowners actually want.",
    description:
      "The page leans on strong imagery and clear scope so the work feels tangible.",
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
          "Patios, lighting, and gathering spaces built around comfort, function, and long-term value.",
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
    title: "A landscaping site should help homeowners picture the finished yard.",
    description:
      "Good landscaping work is visual, so the page leads with the result and keeps the quote path easy.",
    imageLabel: "Premium backyard transformation",
    items: [
      {
        title: "Visual proof first",
        description:
          "Strong visuals and project-focused sections help the work feel real instead of generic.",
        icon: "leaf",
      },
      {
        title: "Quote-ready structure",
        description:
          "The CTA language stays direct and built around real project inquiries.",
        icon: "check",
      },
      {
        title: "Local service-area strength",
        description:
          "The page keeps nearby neighborhoods visible because proximity matters for scheduling and site visits.",
        icon: "map",
      },
    ],
  },
  testimonials: {
    eyebrow: "Project reactions",
    title: "Testimonials should feel specific enough that a homeowner can imagine their own yard next.",
    description:
      "A few grounded testimonials do more than broad marketing claims.",
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
    title: "Move from idea to quote without slowing the momentum.",
    description:
      "The page should help homeowners explain the job, understand the scope, and feel ready to move forward.",
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
        description: "The proof sections keep reinforcing craftsmanship and visible results all the way to the close.",
      },
    ],
  },
  serviceArea: {
    eyebrow: "Service radius",
    title: "Nearby coverage matters when homeowners are hiring for on-site work.",
    description:
      "The page keeps service towns visible without making the layout feel busy.",
    areas: [...metroEastAreas, "Bethalto", "Highland"],
    mapLabel: "Landscaping projects across Edwardsville and nearby communities",
  },
  cta: {
    eyebrow: "Request a quote",
    title: "Show the result, then make the quote request easy.",
    description:
      "Better imagery and a clearer quote path help the right projects come in.",
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
  contact: {
    eyebrow: "Request the quote",
    title: "Use the final section for design-build work, outdoor living projects, or recurring maintenance.",
    description:
      "Keep the quote form easy to use so homeowners can reach out while the project is still top of mind.",
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

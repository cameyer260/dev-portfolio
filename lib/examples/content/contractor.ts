import {
  buildExampleLandingPage,
  createContactFields,
  createLeadFormFields,
  metroEastAreas,
} from "@/lib/examples/content/shared";

export const contractorExamplePage = buildExampleLandingPage({
  businessName: "Summit Ridge Exteriors",
  slug: "contractor",
  industry: "Contractor",
  phone: "(618) 555-0158",
  ctaText: "Get Estimate",
  themeFamily: "bold-trust",
  hero: {
    eyebrow: "Roofing and exterior contractor",
    title: "Project-ready estimates backed by local proof and clear next steps.",
    highlight: "for roofs, siding, and full exterior upgrades",
    description:
      "This contractor demo keeps the trust-first structure but shifts the emphasis toward project proof, finished work, and estimate requests.",
    imageLabel: "Contractor crew and finished exterior project",
    primaryCta: {
      label: "Request Estimate",
      href: "#contact",
      tone: "accent",
    },
    secondaryCta: {
      label: "See Project Services",
      href: "#services",
      tone: "secondary",
    },
    formTitle: "Tell us about your project",
    formFields: createLeadFormFields("Project type", [
      "Roof replacement",
      "Siding",
      "Storm repair",
      "Exterior renovation",
    ]),
  },
  services: {
    eyebrow: "Exterior services",
    title: "The service cards stay direct because homeowners compare contractors quickly.",
    description:
      "Contractor pages need practical scope, strong trust language, and a path toward the estimate request without extra friction.",
    items: [
      {
        title: "Roof Replacement",
        description:
          "Full roof projects positioned around inspection clarity, financing conversations, and durable local credibility.",
        icon: "hammer",
      },
      {
        title: "Siding & Trim",
        description:
          "Exterior refresh work framed with finished-result language and stronger visual proof opportunities.",
        icon: "home",
      },
      {
        title: "Storm Repair",
        description:
          "Urgent but trust-heavy copy for homeowners dealing with damage, insurance questions, or fast timelines.",
        icon: "shield",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "Why this version works",
    title: "A contractor page has to feel dependable, capable, and estimate-ready within seconds.",
    description:
      "The page leans into practical proof and project confidence rather than decorative design choices.",
    imageLabel: "Contractor project walkthrough",
    items: [
      {
        title: "Estimate-first conversion path",
        description:
          "The hero, process, and contact section all reinforce the exact action homeowners want: a clear next step toward a quote.",
        icon: "check",
      },
      {
        title: "Before-and-after friendly layout",
        description:
          "The service and proof sections are easy to customize later with project galleries and finished work.",
        icon: "badge",
      },
      {
        title: "Local area trust language",
        description:
          "Service-zone coverage and local references help the contractor feel established instead of anonymous.",
        icon: "map",
      },
    ],
  },
  testimonials: {
    eyebrow: "Project reviews",
    title: "The testimonial treatment stays compact, direct, and credibility-heavy.",
    description:
      "For contractors, homeowners are looking for confidence, communication, and visible finished-work proof.",
    items: [
      {
        quote:
          "We needed a roof estimate fast after storm damage, and the site made it easy to submit exactly what we needed.",
        name: "Lori T.",
        role: "Homeowner",
        location: "Troy",
        rating: 5,
      },
      {
        quote:
          "The service breakdown and project tone felt much more trustworthy than the average contractor site.",
        name: "Ben K.",
        role: "Homeowner",
        location: "Edwardsville",
        rating: 5,
      },
      {
        quote:
          "It looked like a company with process, not just a phone number and a few stock photos.",
        name: "Rachel P.",
        role: "Property owner",
        location: "Glen Carbon",
        rating: 5,
      },
    ],
  },
  process: {
    eyebrow: "Estimate workflow",
    title: "The process section helps larger-ticket projects feel organized and lower-risk.",
    description:
      "That matters for contractor pages because trust comes from competence as much as from visuals.",
    steps: [
      {
        title: "Schedule the walkthrough",
        description: "The lead form captures the project type and creates an easy handoff into the estimate process.",
      },
      {
        title: "Review the scope",
        description: "Use the site to explain materials, timing, budget range, and next-step expectations clearly.",
      },
      {
        title: "Start with confidence",
        description: "Testimonials and proof sections keep supporting the decision after the quote request is sent.",
      },
    ],
  },
  serviceArea: {
    eyebrow: "Project coverage",
    title: "The service-area block reinforces local credibility for estimate-ready homeowners.",
    description:
      "This format works well for contractors because it stays highly scannable and keeps nearby communities visible.",
    areas: [...metroEastAreas, "Bethalto", "Highland"],
    mapLabel: "Exterior contractor service area across the Metro East",
  },
  cta: {
    eyebrow: "Ready for a stronger pitch page?",
    title: "Use this contractor demo to sell trust, finished work, and a clear estimate path.",
    description:
      "The shared system keeps the page reusable while still feeling tailored to roofing, exterior, and renovation businesses.",
    primaryCta: {
      label: "Request A Contractor Demo",
      href: "#contact",
      tone: "primary",
    },
  },
  contact: {
    eyebrow: "Project inquiry",
    title: "Tailor the form for estimates, inspections, or storm-related exterior work.",
    description:
      "This section is intentionally practical because most contractor leads want to get to the estimate conversation quickly.",
    address: "740 University Drive, Edwardsville, IL 62025",
    email: "projects@summitridge.example",
    fields: createContactFields("Project type", [
      "Roofing",
      "Siding and trim",
      "Storm repair",
      "General renovation",
    ]),
    primaryCta: {
      label: "Request Estimate",
      href: "#contact",
    },
  },
  seo: {
    title: "Contractor Website Example | Summit Ridge Exteriors Demo",
    description:
      "Contractor website example showing a trust-first landing page for roofing, siding, and project estimates in Edwardsville, Glen Carbon, and surrounding Metro East towns.",
  },
});

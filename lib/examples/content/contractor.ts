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
      "Roofing, siding, and exterior work presented with the kind of clarity that helps homeowners request an estimate.",
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
    title: "Roofing and exterior services with clear scope and strong proof.",
    description:
      "Homeowners compare contractors quickly, so the page keeps the work easy to understand.",
    items: [
      {
        title: "Roof Replacement",
        description:
          "Full roof replacements with clear inspection, material, and estimate details.",
        icon: "hammer",
      },
      {
        title: "Siding & Trim",
        description:
          "Siding, trim, and exterior updates that show the finished result homeowners are paying for.",
        icon: "home",
      },
      {
        title: "Storm Repair",
        description:
          "Storm damage repair with a straightforward path for urgent questions and insurance-related work.",
        icon: "shield",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "Why this version works",
    title: "A contractor site should feel capable and dependable within seconds.",
    description:
      "People want to see real project confidence, clear process, and an obvious way to ask for an estimate.",
    imageLabel: "Contractor project walkthrough",
    items: [
      {
        title: "Estimate-first layout",
        description:
          "The hero, process, and contact section all reinforce the exact action homeowners want: a clear next step toward a quote.",
        icon: "check",
      },
      {
        title: "Before-and-after friendly layout",
        description:
          "The proof sections leave room for finished work, project photos, and before-and-after results.",
        icon: "badge",
      },
      {
        title: "Local area trust language",
        description:
          "Service-area details and local references help the company feel established instead of anonymous.",
        icon: "map",
      },
    ],
  },
  testimonials: {
    eyebrow: "Project reviews",
    title: "The testimonial treatment stays compact, direct, and credibility-heavy.",
    description:
      "For contractors, homeowners are looking for confidence, communication, and proof the work will be done right.",
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
      "That matters because trust comes from competence as much as from visuals.",
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
        description: "Testimonials and project proof keep supporting the decision after the quote request is sent.",
      },
    ],
  },
  serviceArea: {
    eyebrow: "Project coverage",
    title: "Keep the nearby towns visible for homeowners ready to book a walkthrough.",
    description:
      "The service area list stays easy to scan while reinforcing that the company works in the communities it names.",
    areas: [...metroEastAreas, "Bethalto", "Highland"],
    mapLabel: "Exterior contractor service area across the Metro East",
  },
  cta: {
    eyebrow: "Request an estimate",
    title: "Give homeowners a clearer path from first visit to estimate.",
    description:
      "Clear services, stronger proof, and a direct estimate path help the right homeowners reach out.",
    primaryCta: {
      label: "Request Estimate",
      href: "#contact",
      tone: "primary",
    },
  },
  contact: {
    eyebrow: "Project inquiry",
    title: "Use the form for estimates, inspections, or storm-related work.",
    description:
      "The final section should make it easy to start the conversation, whether the job is planned or urgent.",
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

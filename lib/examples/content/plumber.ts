import {
  buildExampleLandingPage,
  createContactFields,
  createLeadFormFields,
  metroEastAreas,
} from "@/lib/examples/content/shared";

export const plumberExamplePage = buildExampleLandingPage({
  businessName: "Riverbend Plumbing & Drain",
  slug: "plumber",
  industry: "Plumber",
  phone: "(618) 555-0139",
  ctaText: "Call Now",
  themeFamily: "bold-trust",
  hero: {
    eyebrow: "24/7 emergency plumbing",
    title: "Fast dispatch for leaks, backups, and water heater failures.",
    highlight: "across Edwardsville and Glen Carbon",
    description:
      "When something goes wrong, homeowners need a local plumber who answers quickly and makes the next step obvious.",
    imageLabel: "Plumbing tools and emergency service van",
    primaryCta: {
      label: "Request Fast Dispatch",
      href: "#contact",
      tone: "accent",
    },
    secondaryCta: {
      label: "View Service List",
      href: "#services",
      tone: "secondary",
    },
    formTitle: "Need a plumber today?",
    formFields: createLeadFormFields("Service needed", [
      "Emergency repair",
      "Drain cleaning",
      "Water heater service",
      "Estimate request",
    ]),
  },
  services: {
    eyebrow: "Core plumbing work",
    title: "The work homeowners look for first, without extra clutter.",
    description:
      "When a pipe bursts or a drain backs up, people want clear service details and a fast way to reach you.",
    items: [
      {
        title: "Emergency Repairs",
        description:
          "Burst pipes, active leaks, and other urgent repairs handled with quick response and clear communication.",
        icon: "wrench",
      },
      {
        title: "Drain Cleaning",
        description:
          "Kitchen, bathroom, and main-line clogs explained in plain language.",
        icon: "check",
      },
      {
        title: "Water Heaters",
        description:
          "Repairs and replacements backed by practical recommendations and reliable scheduling.",
        icon: "clock",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "Trust-first proof",
    title: "A strong plumbing page makes the next step feel simple.",
    description:
      "Urgent service traffic moves fast, so trust and contact details need to show up early.",
    imageLabel: "Plumber at work in utility room",
    items: [
      {
        title: "Licensed local response",
        description:
          "Clear proof points help homeowners feel comfortable calling right away.",
        icon: "shield",
      },
      {
        title: "Phone-first mobile UX",
        description:
          "The phone number, mobile call bar, and form are easy to find when someone is dealing with an urgent issue.",
        icon: "phone",
      },
      {
        title: "Service-area clarity",
        description:
          "Nearby towns are listed plainly so people know you actually serve their area.",
        icon: "map",
      },
    ],
  },
  testimonials: {
    eyebrow: "Recent reviews",
    title: "Short, direct reviews work best here.",
    description:
      "Homeowners looking for a plumber want proof that the company shows up, communicates well, and does solid work.",
    items: [
      {
        quote:
          "Called at 7 a.m. for a leaking water heater and had someone out that morning. The site made it obvious who to call first.",
        name: "Hannah W.",
        role: "Homeowner",
        location: "Edwardsville",
        rating: 5,
      },
      {
        quote:
          "We needed a main-line backup handled fast. Everything about the page felt straightforward and trustworthy.",
        name: "Chris P.",
        role: "Homeowner",
        location: "Glen Carbon",
        rating: 5,
      },
      {
        quote:
          "Good service pages, clear phone CTA, and no fluff. Exactly what I want when I need a plumber quickly.",
        name: "Derek S.",
        role: "Property manager",
        location: "Maryville",
        rating: 5,
      },
    ],
  },
  process: {
    eyebrow: "Dispatch process",
    title: "A simple dispatch process helps people act fast.",
    description:
      "The page should answer the first question immediately: how do I get someone out here?",
    steps: [
      {
        title: "Call or submit the issue",
        description: "The CTA and hero form both capture urgent service requests quickly.",
      },
      {
        title: "Get scheduled fast",
        description: "Dispatch timing and service type are collected up front so the next step feels immediate.",
      },
      {
        title: "Repair with confidence",
        description: "Clear communication and solid proof help the customer feel comfortable choosing the business.",
      },
    ],
  },
  serviceArea: {
    eyebrow: "Coverage area",
    title: "Make it clear where you can get to quickly.",
    description:
      "People want to know the company is nearby and can actually take the call.",
    areas: [...metroEastAreas, "Bethalto", "Alton"],
    mapLabel: "Plumbing coverage across Edwardsville and surrounding towns",
  },
  cta: {
    eyebrow: "Need service now?",
    title: "When people need help fast, the site should make calling easy.",
    description:
      "The right layout helps stressed homeowners reach out without hunting for the next step.",
    primaryCta: {
      label: "Request Service",
      href: "#contact",
      tone: "primary",
    },
  },
  contact: {
    eyebrow: "Request service",
    title: "Reach out for emergency repairs, estimates, or routine plumbing work.",
    description:
      "Keep the contact section fast and practical so people can get help without digging around.",
    address: "510 Plum Street, Edwardsville, IL 62025",
    email: "dispatch@riverbendplumbing.example",
    fields: createContactFields("Service needed", [
      "Emergency plumbing",
      "Drain cleaning",
      "Water heater service",
      "General estimate",
    ]),
    primaryCta: {
      label: "Request Service",
      href: "#contact",
    },
  },
  seo: {
    title: "Plumber Website Example | Riverbend Plumbing & Drain Demo",
    description:
      "Plumbing website example showing a trust-first local landing page for emergency calls, drain cleaning, and estimates in Edwardsville, Glen Carbon, and nearby communities.",
  },
});

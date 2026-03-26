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
      "This bold trust-first demo is designed to turn urgent local searches into calls and estimate requests within the first screen.",
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
    title: "Structured to answer the exact jobs homeowners search for when something goes wrong.",
    description:
      "The service section stays compact and high-clarity because trust businesses win by reducing uncertainty fast.",
    items: [
      {
        title: "Emergency Repairs",
        description:
          "Burst pipes, active leaks, and urgent issues positioned with direct response language and phone-first conversion.",
        icon: "wrench",
      },
      {
        title: "Drain Cleaning",
        description:
          "Kitchen, bath, and main-line blockages explained with straightforward scope and trust-focused copy.",
        icon: "check",
      },
      {
        title: "Water Heaters",
        description:
          "Repair and replacement services framed around speed, reliability, and honest recommendations.",
        icon: "clock",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "Trust-first proof",
    title: "The strongest plumbing pages make the next action obvious and the business feel credible immediately.",
    description:
      "The layout pushes trust signals early because plumbing traffic is often urgent and comparison-driven.",
    imageLabel: "Plumber at work in utility room",
    items: [
      {
        title: "Licensed local response",
        description:
          "Proof language, badges, and operational copy give the page weight before the user ever scrolls far.",
        icon: "shield",
      },
      {
        title: "Phone-first mobile UX",
        description:
          "The sticky call bar and above-the-fold form support emergency behavior instead of forcing slow browsing.",
        icon: "phone",
      },
      {
        title: "Service-area clarity",
        description:
          "Edwardsville, Glen Carbon, and nearby communities are surfaced clearly to match local search intent.",
        icon: "map",
      },
    ],
  },
  testimonials: {
    eyebrow: "Recent reviews",
    title: "Short, direct trust proof is stronger here than delicate editorial treatment.",
    description:
      "The testimonial format is intentionally compact and review-like so it supports urgency and credibility.",
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
    title: "A plumbing landing page should make the response timeline feel simple and predictable.",
    description:
      "The process band reinforces that the customer can act now and understand what happens next.",
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
        description: "Trust language carries through the whole page so the customer feels safe choosing the business.",
      },
    ],
  },
  serviceArea: {
    eyebrow: "Coverage area",
    title: "Local service-area language is part of the conversion path, not an afterthought.",
    description:
      "Plumbing customers want to know the company is nearby and available. This section keeps that information operational and easy to scan.",
    areas: [...metroEastAreas, "Bethalto", "Alton"],
    mapLabel: "Plumbing coverage across Edwardsville and surrounding towns",
  },
  cta: {
    eyebrow: "Need service now?",
    title: "Build the kind of plumbing page that turns stress into a clear next step.",
    description:
      "This demo is intentionally direct, phone-heavy, and local-search ready so it works like a real lead machine for a plumbing company.",
    primaryCta: {
      label: "Start A Plumbing Demo",
      href: "#contact",
      tone: "primary",
    },
  },
  contact: {
    eyebrow: "Request service",
    title: "Use the same system for emergency calls, estimates, and routine plumbing work.",
    description:
      "The contact section stays practical and fast so homeowners can act without digging through extra pages.",
    address: "510 Plum Street, Edwardsville, IL 62025",
    email: "dispatch@riverbendplumbing.example",
    fields: createContactFields("Service needed", [
      "Emergency plumbing",
      "Drain cleaning",
      "Water heater service",
      "General estimate",
    ]),
    primaryCta: {
      label: "Request Dispatch",
      href: "#contact",
    },
  },
  seo: {
    title: "Plumber Website Example | Riverbend Plumbing & Drain Demo",
    description:
      "Plumbing website example showing a trust-first local landing page for emergency calls, drain cleaning, and estimates in Edwardsville, Glen Carbon, and nearby communities.",
  },
});

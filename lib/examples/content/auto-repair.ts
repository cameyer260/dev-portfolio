import {
  buildExampleLandingPage,
  createContactFields,
  createLeadFormFields,
  metroEastAreas,
} from "@/lib/examples/content/shared";

export const autoRepairExamplePage = buildExampleLandingPage({
  businessName: "Route 157 Auto Care",
  slug: "auto-repair",
  industry: "Auto Repair",
  phone: "(618) 555-0174",
  ctaText: "Schedule Service",
  themeFamily: "bold-trust",
  hero: {
    eyebrow: "Honest local auto repair",
    title: "Clear diagnostics, fair recommendations, and a service page built for trust.",
    highlight: "not pressure",
    description:
      "This auto repair demo uses the bold trust-first family while shifting the tone toward transparency, certifications, and reducing fear of being overcharged.",
    imageLabel: "Auto repair bay and technician",
    primaryCta: {
      label: "Request Service",
      href: "#contact",
      tone: "accent",
    },
    secondaryCta: {
      label: "View Shop Services",
      href: "#services",
      tone: "secondary",
    },
    formTitle: "What does your vehicle need?",
    formFields: createLeadFormFields("Service needed", [
      "Diagnostics",
      "Brake service",
      "Maintenance",
      "Second opinion",
    ]),
  },
  services: {
    eyebrow: "Shop services",
    title: "The structure is built to make drivers feel informed instead of intimidated.",
    description:
      "Auto repair pages convert better when they explain scope clearly and frame the business as transparent, local, and dependable.",
    items: [
      {
        title: "Diagnostics",
        description:
          "Check-engine lights, drivability issues, and troubleshooting services explained in plain language.",
        icon: "car",
      },
      {
        title: "Brake & Safety Work",
        description:
          "High-trust repair categories supported by clear proof and honest service positioning.",
        icon: "shield",
      },
      {
        title: "Routine Maintenance",
        description:
          "Oil changes, inspections, and scheduled service framed as long-term reliability rather than upsell opportunities.",
        icon: "clock",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "Shop credibility",
    title: "Drivers need the page to feel straightforward, competent, and low-pressure.",
    description:
      "The design stays bold enough to feel professional while softening the urgency compared to plumbing or emergency field service.",
    imageLabel: "Trusted mechanic inspection",
    items: [
      {
        title: "Transparent recommendations",
        description:
          "The page copy is written to reduce the common fear that the customer will be sold work they do not need.",
        icon: "check",
      },
      {
        title: "Certification-friendly proof",
        description:
          "Trust rows can be adapted later for ASE badges, warranties, and inspection details without changing the layout.",
        icon: "badge",
      },
      {
        title: "Mobile scheduling clarity",
        description:
          "The contact path stays fast and obvious on phones, where many service requests begin.",
        icon: "phone",
      },
    ],
  },
  testimonials: {
    eyebrow: "Driver reviews",
    title: "The review layout works because it feels honest and easy to scan.",
    description:
      "Auto repair trust comes from competence and transparency, so the page uses concise proof with clear identity details.",
    items: [
      {
        quote:
          "I booked because the page felt direct and honest. They diagnosed the issue quickly and explained it without pressure.",
        name: "Stephanie M.",
        role: "Driver",
        location: "Edwardsville",
        rating: 5,
      },
      {
        quote:
          "The service list actually made sense. I knew what to expect before I ever called the shop.",
        name: "Caleb D.",
        role: "Driver",
        location: "Glen Carbon",
        rating: 5,
      },
      {
        quote:
          "The whole site felt more credible than most auto repair pages I see. That made the decision easy.",
        name: "Mia R.",
        role: "Parent and commuter",
        location: "Maryville",
        rating: 5,
      },
    ],
  },
  process: {
    eyebrow: "Service flow",
    title: "A simple process helps drivers feel confident about what happens after they reach out.",
    description:
      "This section is especially useful for reducing uncertainty around diagnostics and repair approvals.",
    steps: [
      {
        title: "Request the appointment",
        description: "The hero form and contact section make it easy to explain the issue or ask for a second opinion.",
      },
      {
        title: "Inspect and explain",
        description: "The page positions the shop as clear and consultative, not vague or upsell-heavy.",
      },
      {
        title: "Approve the work",
        description: "Testimonials and trust language reinforce that the customer is choosing a reliable local shop.",
      },
    ],
  },
  serviceArea: {
    eyebrow: "Drivers served",
    title: "Local coverage matters because convenience is part of the trust equation.",
    description:
      "Drivers want a nearby shop. This service-area treatment keeps the coverage list visible without cluttering the page.",
    areas: [...metroEastAreas, "Bethalto", "Wood River"],
    mapLabel: "Auto repair service area around Edwardsville and Glen Carbon",
  },
  cta: {
    eyebrow: "Honest shop positioning",
    title: "Need an auto repair page that feels more credible than the usual coupon-heavy template?",
    description:
      "This example shows how the shared system can present a shop as trustworthy, clear, and easy to book from a phone.",
    primaryCta: {
      label: "Start An Auto Repair Demo",
      href: "#contact",
      tone: "primary",
    },
  },
  contact: {
    eyebrow: "Book the service",
    title: "Use the same structure for diagnostics, routine maintenance, and trust-building second opinions.",
    description:
      "The form is easy to adapt for shops that want appointment requests, quote intake, or first-time customer questions.",
    address: "615 Troy Road, Edwardsville, IL 62025",
    email: "service@route157autocare.example",
    fields: createContactFields("Service needed", [
      "Diagnostics",
      "Brake or safety work",
      "Routine maintenance",
      "Second opinion",
    ]),
    primaryCta: {
      label: "Schedule Service",
      href: "#contact",
    },
  },
  seo: {
    title: "Auto Repair Website Example | Route 157 Auto Care Demo",
    description:
      "Auto repair website example showing a trust-first landing page for diagnostics, maintenance, and scheduling in Edwardsville, Glen Carbon, and nearby Metro East communities.",
  },
});

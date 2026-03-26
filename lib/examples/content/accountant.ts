import {
  buildExampleLandingPage,
  createContactFields,
  createLeadFormFields,
  metroEastAreas,
} from "@/lib/examples/content/shared";

export const accountantExamplePage = buildExampleLandingPage({
  businessName: "Ledger & Oak Accounting",
  slug: "accountant",
  industry: "Accountant",
  phone: "(618) 555-0117",
  ctaText: "Book Consultation",
  themeFamily: "bold-trust",
  hero: {
    eyebrow: "Tax and advisory firm demo",
    title: "Reliable local accounting with a more confident first impression.",
    highlight: "for taxes, payroll, and business support",
    description:
      "This example uses the bold trust-first family with lower urgency, shifting the tone toward steady professionalism and consultation-driven leads.",
    imageLabel: "Accounting desk and advisory workspace",
    primaryCta: {
      label: "Book Consultation",
      href: "#contact",
      tone: "accent",
    },
    secondaryCta: {
      label: "Review Services",
      href: "#services",
      tone: "secondary",
    },
    formTitle: "What can we help with?",
    formFields: createLeadFormFields("Service needed", [
      "Personal taxes",
      "Business taxes",
      "Payroll support",
      "Bookkeeping",
    ]),
  },
  services: {
    eyebrow: "Core services",
    title: "The structure stays direct and trustworthy without feeling like a field-service page.",
    description:
      "For accountants, the same family works well when the copy emphasizes reliability, credentials, and calm advisory support.",
    items: [
      {
        title: "Tax Preparation",
        description:
          "Personal and business returns positioned with clarity, organization, and local trust rather than seasonal panic.",
        icon: "calculator",
      },
      {
        title: "Bookkeeping",
        description:
          "Monthly reporting and clean books framed as dependable support for growing local businesses.",
        icon: "briefcase",
      },
      {
        title: "Payroll Support",
        description:
          "Operational help for employers who need consistency, timeliness, and a simpler internal workflow.",
        icon: "check",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "Firm positioning",
    title: "The page should feel steady, credible, and easy to trust with sensitive information.",
    description:
      "The layout avoids startup polish and instead leans into operational clarity, local credibility, and consultation language.",
    imageLabel: "Professional advisor meeting",
    items: [
      {
        title: "Calm trust language",
        description:
          "The tone is intentionally direct and competent so it fits an accounting firm better than urgent service-business copy.",
        icon: "shield",
      },
      {
        title: "Service clarity for business owners",
        description:
          "The cards help prospects understand exactly what the firm handles before they book a call.",
        icon: "briefcase",
      },
      {
        title: "Local business relevance",
        description:
          "References to Edwardsville, Glen Carbon, and nearby employers make the example feel grounded in a real market.",
        icon: "map",
      },
    ],
  },
  testimonials: {
    eyebrow: "Client confidence",
    title: "Short review blocks reinforce reliability, responsiveness, and follow-through.",
    description:
      "This format stays consistent with the family while softening the urgency to fit a professional services firm.",
    items: [
      {
        quote:
          "The site felt organized and credible right away. It made booking a tax consultation much easier than I expected.",
        name: "Laura G.",
        role: "Small business owner",
        location: "Edwardsville",
        rating: 5,
      },
      {
        quote:
          "The services were clear, and the page never felt intimidating. That matters when you are handing over financial work.",
        name: "Ben R.",
        role: "Homeowner",
        location: "Glen Carbon",
        rating: 5,
      },
      {
        quote:
          "It positioned the firm like a reliable local advisor instead of a faceless tax website.",
        name: "Maya T.",
        role: "Retail business owner",
        location: "Collinsville",
        rating: 5,
      },
    ],
  },
  process: {
    eyebrow: "Consultation process",
    title: "The page should make the handoff into an accounting conversation feel simple and low-friction.",
    description:
      "A straightforward process section helps reduce hesitation and clarifies what happens after a form submission.",
    steps: [
      {
        title: "Choose the service",
        description: "Prospects identify whether they need taxes, payroll, bookkeeping, or advisory support.",
      },
      {
        title: "Book the consultation",
        description: "The contact path stays clear so the site captures higher-intent local leads efficiently.",
      },
      {
        title: "Start organized",
        description: "The page positions the firm as a practical, reliable partner from the first interaction.",
      },
    ],
  },
  serviceArea: {
    eyebrow: "Local client base",
    title: "Service-area coverage reinforces that the firm understands the nearby business community.",
    description:
      "The service area section is useful for accountants when it supports local trust instead of feeling like generic filler.",
    areas: [...metroEastAreas, "Alton", "Highland"],
    mapLabel: "Accounting clients served across Edwardsville and nearby towns",
  },
  cta: {
    eyebrow: "Professional services demo",
    title: "Need an accounting site that looks established, local, and easy to trust?",
    description:
      "This example shows how the shared system can support a calmer professional-services tone without losing the conversion structure.",
    primaryCta: {
      label: "Start An Accounting Demo",
      href: "#contact",
      tone: "primary",
    },
  },
  contact: {
    eyebrow: "Book the consultation",
    title: "Adapt this section for tax prep, payroll support, bookkeeping, or year-round advisory work.",
    description:
      "The same contact pattern works well for both individual tax clients and local businesses comparing firms.",
    address: "205 South Kansas Street, Edwardsville, IL 62025",
    email: "hello@ledgerandoak.example",
    fields: createContactFields("Service needed", [
      "Personal taxes",
      "Business taxes",
      "Bookkeeping",
      "Payroll or advisory",
    ]),
    primaryCta: {
      label: "Book Consultation",
      href: "#contact",
    },
  },
  seo: {
    title: "Accounting Website Example | Ledger & Oak Accounting Demo",
    description:
      "Accounting website example showing a trust-first local landing page for tax prep, bookkeeping, and business consultations in Edwardsville, Glen Carbon, and nearby communities.",
  },
});

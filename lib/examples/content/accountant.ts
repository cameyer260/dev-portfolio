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
    eyebrow: "Tax and advisory services",
    title: "Reliable local accounting with a more confident first impression.",
    highlight: "for taxes, payroll, and business support",
    description:
      "Local businesses and families need an accountant who feels organized, steady, and easy to reach.",
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
    title: "Accounting services presented with clarity and confidence.",
    description:
      "The page stays straightforward so people can quickly understand what the firm handles.",
    items: [
      {
        title: "Tax Preparation",
        description:
          "Personal and business returns handled with clarity, organization, and steady support.",
        icon: "calculator",
      },
      {
        title: "Bookkeeping",
        description:
          "Monthly reporting and clean books for local businesses that want reliable day-to-day support.",
        icon: "briefcase",
      },
      {
        title: "Payroll Support",
        description:
          "Payroll help for employers who need consistency, timeliness, and fewer internal headaches.",
        icon: "check",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "Firm positioning",
    title: "An accounting site should feel steady and credible.",
    description:
      "People are trusting you with sensitive work, so the tone needs to feel calm, clear, and professional.",
    imageLabel: "Professional advisor meeting",
    items: [
      {
        title: "Calm trust language",
        description:
          "The tone stays direct and competent so it fits an accounting firm better than urgent service-business copy.",
        icon: "shield",
      },
      {
        title: "Service clarity for business owners",
        description:
          "The cards help people understand exactly what the firm handles before they book a call.",
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
    title: "Reviews should reinforce reliability, responsiveness, and follow-through.",
    description:
      "For accounting, a few grounded reviews can do more than a page full of generic praise.",
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
    title: "The page should make the handoff into an accounting conversation feel simple.",
    description:
      "A straightforward process section reduces hesitation and clarifies what happens after the form is sent.",
    steps: [
      {
        title: "Choose the service",
        description: "Prospects identify whether they need taxes, payroll, bookkeeping, or advisory support.",
      },
      {
        title: "Book the consultation",
        description: "The contact path stays clear so people can reach out without feeling like they are starting a sales process.",
      },
      {
        title: "Start organized",
        description: "The page positions the firm as a practical, reliable partner from the first interaction.",
      },
    ],
  },
  serviceArea: {
    eyebrow: "Local client base",
    title: "Local coverage reinforces that the firm understands the nearby business community.",
    description:
      "Nearby towns and business corridors help the page feel grounded in a real local market.",
    areas: [...metroEastAreas, "Alton", "Highland"],
    mapLabel: "Accounting clients served across Edwardsville and nearby towns",
  },
  cta: {
    eyebrow: "Start with a consultation",
    title: "Present the firm like the steady partner clients want.",
    description:
      "Clear service descriptions and a simple consultation path help the right clients reach out.",
    primaryCta: {
      label: "Book Consultation",
      href: "#contact",
      tone: "primary",
    },
  },
  contact: {
    eyebrow: "Book the consultation",
    title: "Use the form for taxes, bookkeeping, payroll, or year-round support.",
    description:
      "It works for both individuals and local businesses comparing firms.",
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

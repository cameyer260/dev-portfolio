import {
  buildExampleLandingPage,
  createContactFields,
  metroEastAreas,
} from "@/lib/examples/content/shared";

export const lawFirmExamplePage = buildExampleLandingPage({
  businessName: "Hawthorne Trial Counsel",
  slug: "law-firm",
  industry: "Law Firm",
  phone: "(618) 555-0163",
  ctaText: "Request Consultation",
  themeFamily: "premium-professional",
  hero: {
    eyebrow: "Trusted legal counsel",
    title: "Serious counsel for complex moments.",
    highlight: "clear strategy, local trust, and restrained authority",
    description:
      "When the matter is important, people want counsel that feels measured, prepared, and trustworthy.",
    imageLabel: "Law office interior and legal materials",
    primaryCta: {
      label: "Request Consultation",
      href: "#contact",
    },
    secondaryCta: {
      label: "Review Practice Areas",
      href: "#services",
      tone: "secondary",
    },
  },
  services: {
    eyebrow: "Practice areas",
    title: "Practice areas presented with clarity and restraint.",
    description:
      "The page gives each service room to feel established without turning the site into a sales pitch.",
    items: [
      {
        title: "Personal Injury",
        description:
          "Case evaluation, negotiation, and litigation support presented with calm authority.",
        icon: "gavel",
        imageLabel: "Law consultation and case review",
      },
      {
        title: "Business Disputes",
        description:
          "Counsel for partnership issues, contract matters, and other business disputes that require careful handling.",
        icon: "briefcase",
        imageLabel: "Professional legal strategy meeting",
      },
      {
        title: "Estate Planning",
        description:
          "Wills, trusts, and long-term planning handled with the same clear, steady tone.",
        icon: "shield",
        imageLabel: "Estate planning consultation",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "Authority markers",
    title: "A law firm site builds confidence by staying measured.",
    description:
      "People looking for legal help are already weighing risk. The site should feel serious, clear, and easy to contact.",
    imageLabel: "Attorney portrait and city context",
    stat: {
      value: "18+",
      label: "Years of courtroom and advisory experience",
      detail: "Experience can be presented clearly without turning the page into a list of loud claims.",
    },
    items: [
      {
        title: "Consultation-first experience",
        description:
          "The CTA language and layout frame the first step as a serious conversation, not a pushy sales funnel.",
      },
      {
        title: "Formal visual hierarchy",
        description:
          "Serif headlines, restrained spacing, and clean surfaces fit legal services better than loud badges and gimmicks.",
      },
      {
        title: "High-trust local positioning",
        description:
          "Edwardsville and Metro East references support proximity and familiarity without reducing the premium tone.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Client confidence",
    title: "The right reviews feel measured and credible.",
    description:
      "For legal services, a few strong testimonials carry more weight than a long list of generic praise.",
    items: [
      {
        quote:
          "The site felt measured and trustworthy. It made reaching out feel like the beginning of a serious consultation, not a rushed intake form.",
        name: "Daniel C.",
        role: "Business client",
        location: "Edwardsville",
      },
      {
        quote:
          "It communicated competence without overselling. That mattered to me given how important the decision was.",
        name: "Marissa L.",
        role: "Estate planning client",
        location: "Glen Carbon",
      },
    ],
  },
  process: {
    eyebrow: "Consultation method",
    title: "The process should feel clear without sounding mechanical.",
    description:
      "People want to know what happens after they reach out, especially when the stakes are high.",
    steps: [
      {
        title: "Initial conversation",
        description: "The page directs prospects toward a focused consultation rather than a vague contact request.",
      },
      {
        title: "Case or matter review",
        description: "The layout creates room for trust, credentials, and a composed explanation of next steps.",
      },
      {
        title: "Strategic guidance",
        description: "The final CTA and contact section reinforce authority while keeping the next step clear.",
      },
    ],
  },
  serviceArea: {
    eyebrow: "Offices and clients served",
    title: "Built to feel established in the Metro East while still flexible enough for a broader legal footprint.",
    description:
      "Premium service-area presentation works especially well for law firms because it reads as local presence rather than a generic coverage list.",
    areas: [...metroEastAreas, "Madison County", "St. Clair County"],
    mapLabel: "Legal service area across Edwardsville and surrounding counties",
  },
  cta: {
    eyebrow: "Request a consultation",
    title: "Set the tone for a serious first conversation.",
    description:
      "A cleaner presentation helps the first consultation feel more serious from the start.",
    primaryCta: {
      label: "Request Consultation",
      href: "#contact",
    },
    secondaryCta: {
      label: "View Practice Areas",
      href: "#services",
      tone: "secondary",
    },
  },
  contact: {
    eyebrow: "Start the conversation",
    title: "Use the form for consultations, case reviews, or questions about your matter.",
    description:
      "The contact section should feel straightforward and respectful, not pushy.",
    address: "105 North Main Street, Edwardsville, IL 62025",
    email: "counsel@hawthornetrial.example",
    fields: createContactFields("Matter type", [
      "Personal injury",
      "Business dispute",
      "Estate planning",
      "General consultation",
    ]),
    primaryCta: {
      label: "Request Consultation",
      href: "#contact",
    },
  },
  seo: {
    title: "Law Firm Website Example | Hawthorne Trial Counsel Demo",
    description:
      "Law firm website example showing a premium professional landing page for consultations, authority, and local trust in Edwardsville and the surrounding Metro East.",
  },
});

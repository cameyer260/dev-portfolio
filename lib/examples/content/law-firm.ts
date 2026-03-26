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
    eyebrow: "Premium legal services demo",
    title: "Serious counsel for complex moments.",
    highlight: "clear strategy, local trust, and restrained authority",
    description:
      "This law firm example stays closest to the premium professional source direction, emphasizing authority, consultation flow, and high-stakes trust.",
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
    title: "The service layout stays composed so the firm feels established, not over-marketed.",
    description:
      "This family gives legal pages more restraint, better hierarchy, and a consultation-led path than generic lead-gen templates.",
    items: [
      {
        title: "Personal Injury",
        description:
          "Case evaluation, negotiation, and litigation support positioned with calm authority and stronger trust cues.",
        icon: "gavel",
        imageLabel: "Law consultation and case review",
      },
      {
        title: "Business Disputes",
        description:
          "Premium service presentation for partnership issues, contract matters, and strategic legal guidance.",
        icon: "briefcase",
        imageLabel: "Professional legal strategy meeting",
      },
      {
        title: "Estate Planning",
        description:
          "Structured advisory language for wills, trusts, and long-term family planning conversations.",
        icon: "shield",
        imageLabel: "Estate planning consultation",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "Authority markers",
    title: "The site feels more credible because it does less visual shouting and more strategic framing.",
    description:
      "For a law firm, premium restraint creates trust. The structure still converts, but it does so with a more formal tone.",
    imageLabel: "Attorney portrait and city context",
    stat: {
      value: "18+",
      label: "Years of courtroom and advisory experience",
      detail: "Results and authority can be presented quietly while still carrying real weight.",
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
          "Serif headlines, restrained spacing, and premium surfaces fit legal services better than loud badges and gimmicks.",
      },
      {
        title: "High-trust local positioning",
        description:
          "Edwardsville and Metro East language supports proximity and familiarity without reducing the premium tone.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Client confidence",
    title: "The testimonial treatment stays elegant because authority matters more than volume.",
    description:
      "This layout works well for higher-stakes legal work where credibility, discretion, and clarity are central.",
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
    title: "The process section supports clarity without making the page feel procedural or cold.",
    description:
      "For legal services, the method should feel intelligent, deliberate, and confidence-building.",
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
        description: "The final CTA and contact section reinforce authority while keeping the conversion path clear.",
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
    eyebrow: "Formal consultation flow",
    title: "Need a law firm page that feels credible, restrained, and built for higher-trust inquiries?",
    description:
      "This example shows how a reusable system can still produce a distinctly premium legal presentation.",
    primaryCta: {
      label: "Build A Law Firm Demo",
      href: "#contact",
    },
    secondaryCta: {
      label: "Review Practice Area Layout",
      href: "#services",
      tone: "secondary",
    },
  },
  contact: {
    eyebrow: "Start the conversation",
    title: "Tailor the premium contact flow for consultations, case reviews, or practice-area specific intake.",
    description:
      "The underline form treatment keeps the section calm and bespoke while still making the action obvious.",
    address: "105 North Main Street, Edwardsville, IL 62025",
    email: "counsel@hawthornetrial.example",
    fields: createContactFields("Matter type", [
      "Personal injury",
      "Business dispute",
      "Estate planning",
      "General consultation",
    ]),
    primaryCta: {
      label: "Submit Inquiry",
      href: "#contact",
    },
  },
  seo: {
    title: "Law Firm Website Example | Hawthorne Trial Counsel Demo",
    description:
      "Law firm website example showing a premium professional landing page for consultations, authority, and local trust in Edwardsville and the surrounding Metro East.",
  },
});

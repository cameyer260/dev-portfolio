import {
  buildExampleLandingPage,
  createContactFields,
  metroEastAreas,
} from "@/lib/examples/content/shared";

export const realEstateExamplePage = buildExampleLandingPage({
  businessName: "Monarch Home Group",
  slug: "real-estate",
  industry: "Real Estate",
  phone: "(618) 555-0106",
  ctaText: "Schedule Tour",
  themeFamily: "warm-editorial",
  hero: {
    eyebrow: "Metro East real estate demo",
    title: "Local market guidance with a more premium first impression.",
    highlight: "from listing consult to closing table",
    description:
      "This example shows how a real estate site can feel refined and trustworthy while still guiding buyers and sellers toward a consultation.",
    imageLabel: "Real estate living room and front entry",
    primaryCta: {
      label: "Request Consultation",
      href: "#contact",
      tone: "secondary",
    },
    secondaryCta: {
      label: "Explore Services",
      href: "#services",
      tone: "ghost",
    },
  },
  services: {
    eyebrow: "How the page sells expertise",
    title: "A real estate landing page should project calm authority, local knowledge, and next-step clarity.",
    description:
      "The shared system keeps the conversion structure intact while the visual family shifts the tone closer to premium advisory service.",
    items: [
      {
        title: "Buyer Representation",
        description:
          "Discovery calls, neighborhood guidance, tours, and offer strategy packaged with strong local confidence.",
        icon: "home",
      },
      {
        title: "Listing Strategy",
        description:
          "Staging, pricing, launch plans, and marketing support positioned as a premium seller consultation.",
        icon: "star",
      },
      {
        title: "Relocation Support",
        description:
          "A clean path for out-of-town buyers comparing Edwardsville, Glen Carbon, and nearby communities.",
        icon: "map",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "Why this tone works",
    title: "The page feels composed and premium because the service is high-trust and high-value.",
    description:
      "Real estate sits comfortably in the warm editorial family when the layout emphasizes consultation flow, market proof, and local credibility.",
    imageLabel: "Elegant home exterior and neighborhood feel",
    stat: {
      value: "21",
      label: "Average days to accepted offer",
      detail: "Trust metrics can be framed elegantly instead of dropping into flashy dashboard-style stats.",
    },
    items: [
      {
        title: "Consultation-first structure",
        description:
          "The call to action is positioned like an advisory service, which fits real estate better than aggressive lead-gen copy.",
        icon: "briefcase",
      },
      {
        title: "Neighborhood credibility",
        description:
          "Service-area content becomes local proof when it highlights the communities buyers actually compare.",
        icon: "map",
      },
      {
        title: "Premium testimonial treatment",
        description:
          "The editorial quote style keeps the page calm and credible instead of noisy or sales-heavy.",
        icon: "quote",
      },
    ],
  },
  testimonials: {
    eyebrow: "Client perspective",
    title: "The proof reads like trusted referrals instead of generic review snippets.",
    description:
      "For real estate, the tone needs to feel steady and personal because the stakes are higher than a typical brochure page.",
    items: [
      {
        quote:
          "We were moving from St. Louis and the site made Monarch feel like the team that actually understood Edwardsville neighborhoods.",
        name: "Nathan & Elise M.",
        role: "Buyers",
        location: "Edwardsville",
      },
      {
        quote:
          "The consultation flow felt polished and personal. It never felt like we were dropped into a generic MLS funnel.",
        name: "Jordan H.",
        role: "Seller",
        location: "Glen Carbon",
      },
      {
        quote:
          "It gave us the confidence to reach out. The page felt premium, local, and clearly experienced.",
        name: "Caroline B.",
        role: "Relocating buyer",
        location: "Maryville",
      },
    ],
  },
  process: {
    eyebrow: "Consultation journey",
    title: "From first inquiry to signed contract, the next step always stays clear.",
    description:
      "The process section works especially well for real estate because buyers and sellers want confidence in the timeline.",
    steps: [
      {
        title: "Book the consultation",
        description: "The hero and CTA sections both direct traffic into a low-friction conversation.",
      },
      {
        title: "Build the strategy",
        description: "Tailor the plan around buying goals, pricing, staging, neighborhood comparisons, or listing timing.",
      },
      {
        title: "Move with confidence",
        description: "The page supports the trust and clarity needed to convert a browser into a serious client.",
      },
    ],
  },
  serviceArea: {
    eyebrow: "Communities served",
    title: "Built for the markets local buyers and sellers compare every day.",
    description:
      "A real estate demo should use local geography as trust-building context, not filler. Edwardsville and Glen Carbon belong in the structure.",
    areas: [...metroEastAreas, "St. Louis relocations"],
  },
  cta: {
    eyebrow: "Premium local demo",
    title: "Need a real estate site that feels more consultative than templated?",
    description:
      "This example shows how a shared system can still create a tailored, premium real estate presentation for buyer and seller leads.",
    primaryCta: {
      label: "Request A Real Estate Demo",
      href: "#contact",
    },
    secondaryCta: {
      label: "See Area Coverage",
      href: "#service-area",
      tone: "ghost",
    },
  },
  contact: {
    eyebrow: "Start the project",
    title: "Tailor the demo for buyer leads, seller listings, or a full local brokerage refresh.",
    description:
      "The contact section can handle consult requests, listing strategy questions, and relocation inquiries without breaking the shared system.",
    address: "221 East Vandalia Street, Edwardsville, IL 62025",
    email: "hello@monarchhomegroup.example",
    fields: createContactFields("Inquiry type", [
      "Buyer consultation",
      "Seller consultation",
      "Relocation support",
      "Website project",
    ]),
    primaryCta: {
      label: "Request Consultation",
      href: "#contact",
    },
  },
  seo: {
    title: "Real Estate Website Example | Monarch Home Group Demo",
    description:
      "Real estate website example showing a warm editorial landing page for buyer and seller consultations in Edwardsville, Glen Carbon, and nearby Metro East communities.",
  },
});

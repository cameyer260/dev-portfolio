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
    eyebrow: "Metro East real estate",
    title: "Local market guidance with a more premium first impression.",
    highlight: "from listing consult to closing table",
    description:
      "Monarch Home Group helps buyers and sellers move with clear guidance and real local knowledge.",
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
    title: "Buyer and seller services presented with calm authority.",
    description:
      "The page keeps the next step clear while giving people enough context to trust the process.",
    items: [
      {
        title: "Buyer Representation",
        description:
          "Neighborhood guidance, home tours, offer strategy, and support from first showing to closing.",
        icon: "home",
      },
      {
        title: "Listing Strategy",
        description:
          "Pricing, prep, launch planning, and marketing support for sellers who want a clear plan.",
        icon: "star",
      },
      {
        title: "Relocation Support",
        description:
          "A welcoming path for buyers comparing Edwardsville, Glen Carbon, and nearby communities.",
        icon: "map",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "Why this tone works",
    title: "A real estate site should feel steady, local, and easy to trust.",
    description:
      "People are making big decisions, so the page leads with clarity, experience, and a simple way to start the conversation.",
    imageLabel: "Elegant home exterior and neighborhood feel",
    stat: {
      value: "21",
      label: "Average days to accepted offer",
      detail: "A few grounded numbers can reassure buyers and sellers without turning the page into a sales dashboard.",
    },
    items: [
      {
        title: "Consultation-first structure",
        description:
          "The first step feels like a conversation, which fits real estate better than a pushy lead form.",
        icon: "briefcase",
      },
      {
        title: "Neighborhood credibility",
        description:
          "The nearby communities people already compare are easy to spot throughout the page.",
        icon: "map",
      },
      {
        title: "Premium testimonial treatment",
        description:
          "Reviews are presented in a way that feels calm and credible instead of loud or sales-heavy.",
        icon: "quote",
      },
    ],
  },
  testimonials: {
    eyebrow: "Client perspective",
    title: "The strongest reviews feel like personal referrals.",
    description:
      "For real estate, trust comes from calm communication and local knowledge, not flashy language.",
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
    title: "From first conversation to closing, the next step stays clear.",
    description:
      "Buyers and sellers both want to know how the relationship starts and what to expect after they reach out.",
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
        description: "Clear communication and steady follow-through help turn interest into a serious client relationship.",
      },
    ],
  },
  serviceArea: {
    eyebrow: "Communities served",
    title: "Focused on the communities buyers and sellers compare every day.",
    description:
      "Local market familiarity matters, so the page keeps those communities visible without overdoing it.",
    areas: [...metroEastAreas, "St. Louis relocations"],
  },
  cta: {
    eyebrow: "Buying and selling",
    title: "Make the first impression feel as strong as the service.",
    description:
      "A cleaner presentation helps buyers and sellers trust the first call sooner.",
    primaryCta: {
      label: "Request Consultation",
      href: "#contact",
    },
    secondaryCta: {
      label: "See Areas We Serve",
      href: "#service-area",
      tone: "ghost",
    },
  },
  contact: {
    eyebrow: "Start the conversation",
    title: "Reach out about buying, selling, or moving into the area.",
    description:
      "Use the form for listing conversations, buyer questions, or relocation help.",
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

import {
  buildExampleLandingPage,
  createContactFields,
  metroEastAreas,
} from "@/lib/examples/content/shared";

export const dentistExamplePage = buildExampleLandingPage({
  businessName: "North Bluff Dental Studio",
  slug: "dentist",
  industry: "Dentist",
  phone: "(618) 555-0191",
  ctaText: "Book Appointment",
  themeFamily: "premium-professional",
  hero: {
    eyebrow: "Modern dental clinic demo",
    title: "Confident care in a calm, polished setting.",
    highlight: "designed to build trust before the first visit",
    description:
      "This premium professional example softens the tone slightly for dentistry, balancing authority with comfort, cleanliness, and appointment clarity.",
    imageLabel: "Dental clinic and treatment room",
    primaryCta: {
      label: "Book Appointment",
      href: "#contact",
    },
    secondaryCta: {
      label: "View Treatments",
      href: "#services",
      tone: "secondary",
    },
  },
  services: {
    eyebrow: "Treatment focus",
    title: "A dental page should feel precise, calm, and easy to trust on the first visit.",
    description:
      "The structured-column treatment keeps the page polished and professional while allowing each service to read clearly.",
    items: [
      {
        title: "Preventive Care",
        description:
          "Routine cleanings, exams, and long-term care positioning for families and returning patients.",
        icon: "stethoscope",
        imageLabel: "Preventive dental care",
      },
      {
        title: "Cosmetic Dentistry",
        description:
          "Whitening, veneers, and smile planning framed with comfort and confidence rather than flashy marketing.",
        icon: "sparkles",
        imageLabel: "Cosmetic dental consultation",
      },
      {
        title: "Restorative Work",
        description:
          "Crowns, implants, and restorative treatment presented with reassuring, high-trust language.",
        icon: "shield",
        imageLabel: "Restorative dental treatment",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "Practice credibility",
    title: "The page creates a premium first impression while still making the appointment CTA easy to find.",
    description:
      "Dental prospects are weighing expertise and comfort at the same time, so the tone stays polished but approachable.",
    imageLabel: "Dentist portrait and bright clinical calm",
    stat: {
      value: "1,200+",
      label: "Patient visits each year",
      detail: "Operational trust and care quality can be communicated without cluttering the page with badges.",
    },
    items: [
      {
        title: "Clean, calm visual tone",
        description:
          "The premium family is softened here to feel brighter and more reassuring than the law firm variation.",
      },
      {
        title: "Appointment-first hierarchy",
        description:
          "Primary actions remain obvious above the fold and in the final contact section for mobile users.",
      },
      {
        title: "Comfort and confidence",
        description:
          "The copy supports patients who want professionalism without feeling like they are entering a sterile corporate site.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Patient perspective",
    title: "Trust should feel personal and polished, not like a wall of generic review stars.",
    description:
      "The quote treatment suits dentistry because it lets comfort and professionalism come through at the same time.",
    items: [
      {
        quote:
          "The site felt calm and clear, which honestly made booking much easier. It gave me confidence before my first appointment.",
        name: "Rachel W.",
        role: "New patient",
        location: "Edwardsville",
      },
      {
        quote:
          "Everything about the page felt organized and caring. It struck the right balance between expertise and comfort.",
        name: "Tanner P.",
        role: "Parent and patient",
        location: "Glen Carbon",
      },
    ],
  },
  process: {
    eyebrow: "New patient flow",
    title: "A measured process keeps the page calm while still making the next step obvious.",
    description:
      "This section helps dentistry pages feel organized and reassuring, especially for first-time patients.",
    steps: [
      {
        title: "Choose the visit type",
        description: "The service and contact sections guide patients toward cleanings, cosmetic work, or restorative care.",
      },
      {
        title: "Book the appointment",
        description: "The CTA treatment keeps the booking action visible without overpowering the premium tone.",
      },
      {
        title: "Arrive informed",
        description: "The page builds confidence before the visit by emphasizing clarity, comfort, and professionalism.",
      },
    ],
  },
  serviceArea: {
    eyebrow: "Communities served",
    title: "Local service-area language supports trust for families looking for a nearby long-term dentist.",
    description:
      "This section can be tailored into office locations, neighborhoods, or surrounding communities without changing the layout.",
    areas: [...metroEastAreas, "Bethalto", "Alton"],
    mapLabel: "Dental patients served around Edwardsville and nearby communities",
  },
  cta: {
    eyebrow: "Premium patient experience",
    title: "Need a dental page that feels cleaner, calmer, and more trustworthy than the average practice site?",
    description:
      "This example shows how the reusable system can support appointments and local trust without drifting into generic healthcare design.",
    primaryCta: {
      label: "Build A Dental Demo",
      href: "#contact",
    },
    secondaryCta: {
      label: "See Treatment Layout",
      href: "#services",
      tone: "secondary",
    },
  },
  contact: {
    eyebrow: "Book the visit",
    title: "Use the contact section for new patients, cosmetic consultations, or restorative treatment inquiries.",
    description:
      "The quieter form treatment supports a more premium patient experience while still keeping conversion friction low.",
    address: "326 South State Route 157, Edwardsville, IL 62025",
    email: "appointments@northbluffdental.example",
    fields: createContactFields("Visit type", [
      "New patient exam",
      "Cleaning",
      "Cosmetic consultation",
      "Restorative treatment",
    ]),
    primaryCta: {
      label: "Book Appointment",
      href: "#contact",
    },
  },
  seo: {
    title: "Dentist Website Example | North Bluff Dental Studio Demo",
    description:
      "Dentist website example showing a premium professional landing page for appointments, comfort-focused trust, and local visibility in Edwardsville and Glen Carbon.",
  },
});

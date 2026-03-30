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
    eyebrow: "Modern dental clinic",
    title: "Confident care in a calm, polished setting.",
    highlight: "designed to build trust before the first visit",
    description:
      "Patients want a practice that feels calm, clean, and easy to trust before they ever walk in.",
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
      "The page keeps treatments easy to scan while maintaining a calm, professional tone.",
    items: [
      {
        title: "Preventive Care",
        description:
          "Routine cleanings, exams, and long-term care for families and returning patients.",
        icon: "stethoscope",
        imageLabel: "Preventive dental care",
      },
      {
        title: "Cosmetic Dentistry",
        description:
          "Whitening, veneers, and smile planning framed with comfort and confidence rather than flashy claims.",
        icon: "sparkles",
        imageLabel: "Cosmetic dental consultation",
      },
      {
        title: "Restorative Work",
        description:
          "Crowns, implants, and restorative treatment explained in reassuring, high-trust language.",
        icon: "shield",
        imageLabel: "Restorative dental treatment",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "Practice credibility",
    title: "A dental site should feel professional, calm, and easy to book from a phone.",
    description:
      "Dental patients are weighing expertise and comfort at the same time, so the tone stays polished but approachable.",
    imageLabel: "Dentist portrait and bright clinical calm",
    stat: {
      value: "1,200+",
      label: "Patient visits each year",
      detail: "A few grounded trust markers help new patients feel comfortable booking.",
    },
    items: [
      {
        title: "Clean, calm visual tone",
        description:
          "Bright surfaces and clean spacing help the practice feel reassuring without looking cold.",
      },
      {
        title: "Appointment-first hierarchy",
        description:
          "Primary actions remain easy to find above the fold and again at the bottom of the page.",
      },
      {
        title: "Comfort and confidence",
        description:
          "The copy supports patients who want professionalism without feeling like they are walking into a sterile corporate office.",
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
    eyebrow: "Patient appointments",
    title: "A calmer first impression helps patients book sooner.",
    description:
      "A cleaner presentation can make a practice feel more modern, approachable, and easy to trust.",
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
  contact: {
    eyebrow: "Book the visit",
    title: "Use the form for new patients, cosmetic consults, or restorative care questions.",
    description:
      "The section stays calm and straightforward so booking never feels like work.",
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

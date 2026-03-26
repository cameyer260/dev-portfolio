import {
  buildExampleLandingPage,
  createContactFields,
  metroEastAreas,
} from "@/lib/examples/content/shared";

export const salonExamplePage = buildExampleLandingPage({
  businessName: "Willow & Steel Salon",
  slug: "salon",
  industry: "Salon",
  phone: "(618) 555-0128",
  ctaText: "Book Now",
  themeFamily: "warm-editorial",
  hero: {
    eyebrow: "Style-led salon demo",
    title: "Polished color, lived-in cuts, and a booking flow that feels high-touch.",
    highlight: "without losing the local studio warmth",
    description:
      "This salon example uses the warm editorial family to make appointment booking feel refined, visual, and highly conversion-focused on mobile.",
    imageLabel: "Salon chair and styling station",
    primaryCta: {
      label: "Book Appointment",
      href: "#contact",
      tone: "secondary",
    },
    secondaryCta: {
      label: "See Signature Services",
      href: "#services",
      tone: "ghost",
    },
  },
  services: {
    eyebrow: "Signature services",
    title: "A cleaner service presentation for salons that sell style, trust, and repeat bookings.",
    description:
      "The page structure keeps the booking CTA obvious while giving enough visual room for gallery-forward, premium salon positioning.",
    items: [
      {
        title: "Custom Color",
        description:
          "Dimensional blonding, brunettes, and lived-in color work positioned with premium language and photo-first trust.",
        icon: "sparkles",
      },
      {
        title: "Cuts & Styling",
        description:
          "Signature cuts, blowouts, and event-ready styling with room for stylist specialties and pricing tiers.",
        icon: "scissors",
      },
      {
        title: "Bridal Prep",
        description:
          "Bridal trials, wedding-day styling, and team bookings supported by a higher-intent inquiry flow.",
        icon: "star",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "What this layout proves",
    title: "A salon site should feel like the brand experience, not a generic services list.",
    description:
      "This page balances gallery energy with direct appointment conversion so the site sells both the look and the professionalism.",
    imageLabel: "Editorial salon portrait",
    stat: {
      value: "82%",
      label: "Appointments booked on mobile",
      detail: "The example keeps booking visible early because most salon discovery traffic happens on phones.",
    },
    items: [
      {
        title: "Gallery-forward trust",
        description:
          "Warm surfaces and image-led rhythm make style work feel premium without drifting into fashion-magazine abstraction.",
        icon: "quote",
      },
      {
        title: "Stylist-specific positioning",
        description:
          "Sections can be tailored later for team bios, specialty services, and higher-ticket packages.",
        icon: "badge",
      },
      {
        title: "Appointment-focused mobile UX",
        description:
          "The booking CTA stays clear above the fold and in the sticky mobile action so the page remains conversion-first.",
        icon: "phone",
      },
    ],
  },
  testimonials: {
    eyebrow: "Client proof",
    title: "The trust section stays polished instead of looking like a noisy review widget.",
    description:
      "For salons, believable testimonials should reinforce confidence, consistency, and the in-studio experience.",
    items: [
      {
        quote:
          "I booked because the site felt as polished as the studio. The photos and service descriptions made it easy to choose the right appointment.",
        name: "Kelsey D.",
        role: "Color client",
        location: "Edwardsville",
      },
      {
        quote:
          "The bridal inquiry felt organized from the start. It made the whole process feel elevated and easy.",
        name: "Morgan P.",
        role: "Bridal client",
        location: "Glen Carbon",
      },
      {
        quote:
          "Most salon sites feel cluttered. This one feels calm, premium, and easy to trust.",
        name: "Arianna L.",
        role: "Repeat client",
        location: "Troy",
      },
    ],
  },
  process: {
    eyebrow: "Booking flow",
    title: "A streamlined path from inspiration to appointment request.",
    description:
      "The example demonstrates how a stylist-led business can keep the site emotional and visual without sacrificing clarity.",
    steps: [
      {
        title: "Choose your service",
        description: "Signature services are framed clearly so clients can self-select without confusion.",
      },
      {
        title: "Share your goals",
        description: "The contact form creates room for hair history, event timing, or inspiration notes.",
      },
      {
        title: "Confirm the appointment",
        description: "The CTA structure keeps the next step obvious whether the goal is a routine visit or higher-ticket booking.",
      },
    ],
  },
  serviceArea: {
    eyebrow: "Local reach",
    title: "Styled for the local search terms that actually drive appointments.",
    description:
      "The service area block helps salons target nearby clients searching in Edwardsville, Glen Carbon, Maryville, and surrounding communities.",
    areas: metroEastAreas,
  },
  cta: {
    eyebrow: "Appointment-ready demo",
    title: "Want a salon site that sells your work before a client ever sits in the chair?",
    description:
      "This example shows how a modern salon page can feel brand-forward while still prioritizing bookings and inquiries.",
    primaryCta: {
      label: "Build A Salon Demo",
      href: "#contact",
    },
    secondaryCta: {
      label: "See Booking Layout",
      href: "#contact",
      tone: "ghost",
    },
  },
  contact: {
    eyebrow: "Start the refresh",
    title: "Position your salon for better bookings, stronger visuals, and clearer mobile conversion.",
    description:
      "Use this form for appointments, bridal requests, or a project conversation about tailoring the demo into a real salon site.",
    address: "18 South Buchanan Street, Edwardsville, IL 62025",
    email: "studio@willowandsteel.example",
    fields: createContactFields("Appointment type", [
      "Cut and style",
      "Color service",
      "Bridal inquiry",
      "Website redesign",
    ]),
    primaryCta: {
      label: "Request Appointment",
      href: "#contact",
    },
  },
  seo: {
    title: "Salon Website Example | Willow & Steel Salon Demo",
    description:
      "Salon website example showing a warm editorial booking page for appointments, bridal inquiries, and local visibility in Edwardsville and Glen Carbon.",
  },
});

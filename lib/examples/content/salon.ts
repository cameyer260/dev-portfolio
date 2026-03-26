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
    eyebrow: "Edwardsville salon",
    title: "Polished color, lived-in cuts, and a booking flow that feels high-touch.",
    highlight: "without losing the local studio warmth",
    description:
      "Willow & Steel is built around polished color, strong cuts, and a booking experience that feels personal from the start.",
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
    title: "Color, cuts, and bridal services presented with clarity.",
    description:
      "The page keeps booking easy while giving the work room to speak for itself.",
    items: [
      {
        title: "Custom Color",
        description:
          "Dimensional blonding, brunettes, and lived-in color with photo-led proof and clear service options.",
        icon: "sparkles",
      },
      {
        title: "Cuts & Styling",
        description:
          "Signature cuts, blowouts, and styling appointments with room for specialty services and add-ons.",
        icon: "scissors",
      },
      {
        title: "Bridal Prep",
        description:
          "Trials, wedding-day styling, and group bookings with a straightforward inquiry flow.",
        icon: "star",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "Why clients book",
    title: "A salon site should feel like the studio, not a generic service list.",
    description:
      "Clients are judging style and professionalism at the same time, so the page stays visual, calm, and easy to book.",
    imageLabel: "Editorial salon portrait",
    stat: {
      value: "82%",
      label: "Appointments booked on mobile",
      detail: "Keeping the booking path visible early matters because most first visits start on a phone.",
    },
    items: [
      {
        title: "Gallery-forward trust",
        description:
          "Strong photography and warm details help the work feel premium without overdoing it.",
        icon: "quote",
      },
      {
        title: "Stylist-specific positioning",
        description:
          "The layout leaves room for specialties, stylist bios, pricing notes, and service add-ons.",
        icon: "badge",
      },
      {
        title: "Appointment-focused mobile UX",
        description:
          "The booking path stays easy to spot on mobile, where most clients first check availability.",
        icon: "phone",
      },
    ],
  },
  testimonials: {
    eyebrow: "Client proof",
    title: "The trust section should feel polished without looking overproduced.",
    description:
      "For salons, the best reviews speak to consistency, comfort, and the final result.",
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
    title: "A simple path from inspiration to appointment.",
    description:
      "Clients should be able to browse, understand the service, and reach out without second-guessing the next step.",
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
        description: "The next step stays obvious whether someone is booking a routine visit or a bigger appointment.",
      },
    ],
  },
  serviceArea: {
    eyebrow: "Local reach",
    title: "Built to show up for the nearby clients most likely to book.",
    description:
      "Local salon traffic usually comes from a short radius, so the page keeps nearby communities easy to spot.",
    areas: metroEastAreas,
  },
  cta: {
    eyebrow: "Appointments",
    title: "Make it easier for the right clients to book with confidence.",
    description:
      "A cleaner layout, stronger photography, and an easier booking path help the right clients reach out.",
    primaryCta: {
      label: "Book Appointment",
      href: "#contact",
    },
    secondaryCta: {
      label: "See Services",
      href: "#services",
      tone: "ghost",
    },
  },
  contact: {
    eyebrow: "Start the refresh",
    title: "Use the form for appointments, bridal requests, or questions before booking.",
    description:
      "The same setup works for everyday visits, color consults, and wedding weekends.",
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

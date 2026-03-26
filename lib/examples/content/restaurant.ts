import {
  buildExampleLandingPage,
  createContactFields,
  metroEastAreas,
} from "@/lib/examples/content/shared";

export const restaurantExamplePage = buildExampleLandingPage({
  businessName: "Ash & Olive Kitchen",
  slug: "restaurant",
  industry: "Restaurant",
  phone: "(618) 555-0142",
  ctaText: "Book Now",
  themeFamily: "warm-editorial",
  hero: {
    eyebrow: "Downtown Edwardsville dining",
    title: "Seasonal plates and a room that invites you to stay awhile.",
    highlight: "for date nights, birthdays, and long Saturday dinners",
    description:
      "Ash & Olive Kitchen is a local restaurant concept built to show how an elevated dining site can turn first-time visitors into reservations, private events, and repeat regulars.",
    imageLabel: "Restaurant interior and plated dinner",
    primaryCta: {
      label: "Book A Table",
      href: "#contact",
      tone: "secondary",
    },
    secondaryCta: {
      label: "View Private Dining",
      href: "#services",
      tone: "ghost",
    },
  },
  services: {
    eyebrow: "What guests can book",
    title: "Dining experiences built to feel local, warm, and worth returning for.",
    description:
      "The structure stays conversion-focused while still giving hospitality businesses room for atmosphere, featured menus, and event bookings.",
    items: [
      {
        title: "Dinner Service",
        description:
          "A seasonal dinner program with chef-driven specials, local ingredients, and a polished dine-in experience.",
        icon: "utensils",
      },
      {
        title: "Private Events",
        description:
          "Rehearsal dinners, team celebrations, and small receptions with custom menus and simple inquiry flow.",
        icon: "sparkles",
      },
      {
        title: "Weekend Brunch",
        description:
          "High-traffic brunch service positioned for easy reservations, featured dishes, and local search visibility.",
        icon: "star",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "Why locals choose us",
    title: "The site sells the room, the menu, and the confidence to make a reservation.",
    description:
      "For a restaurant, the page has to carry visual appetite, trust, and a clear path to reserve without feeling like a template.",
    imageLabel: "Editorial restaurant dining scene",
    stat: {
      value: "4.9",
      label: "Average guest rating",
      detail: "Pulled forward as a premium proof moment instead of burying it in footer clutter.",
    },
    items: [
      {
        title: "Image-led first impression",
        description:
          "Warm, editorial visual treatment gives the restaurant an atmosphere before a guest ever visits in person.",
        icon: "quote",
      },
      {
        title: "Private dining inquiries",
        description:
          "The structure supports event leads alongside table reservations without diluting the main CTA.",
        icon: "check",
      },
      {
        title: "Local SEO language",
        description:
          "Service-area style copy can still work for hospitality by targeting Edwardsville, Glen Carbon, and neighboring traffic patterns.",
        icon: "map",
      },
    ],
  },
  testimonials: {
    eyebrow: "Guest notes",
    title: "A restaurant site should make the experience feel real before the first visit.",
    description:
      "These testimonials are written as realistic proof blocks to demonstrate the tone and trust level the demo pages should carry.",
    items: [
      {
        quote:
          "We booked dinner after seeing the photos and were relieved the food actually matched the promise. The whole night felt thoughtful.",
        name: "Emily R.",
        role: "Weekend guest",
        location: "Glen Carbon",
      },
      {
        quote:
          "The private dining inquiry was simple, and the follow-up felt personal instead of automated. That alone sold us on the event.",
        name: "Mason T.",
        role: "Event host",
        location: "Edwardsville",
      },
      {
        quote:
          "You can tell what kind of place it is from the site. It feels local, polished, and not overdone.",
        name: "Priya S.",
        role: "Regular guest",
        location: "Maryville",
      },
    ],
  },
  process: {
    eyebrow: "Reservation flow",
    title: "A cleaner guest journey from discovery to booking.",
    description:
      "The demo shows how a local restaurant site can reduce friction for both everyday diners and higher-value event inquiries.",
    steps: [
      {
        title: "Find the menu and mood",
        description: "Guests land on clear visuals, service details, and the exact experience they can expect.",
      },
      {
        title: "Choose the occasion",
        description: "Date night, brunch, or private dining each get simple paths without overwhelming the first screen.",
      },
      {
        title: "Book or inquire",
        description: "The call to action stays visible so the page converts traffic instead of just showing photos.",
      },
    ],
  },
  serviceArea: {
    eyebrow: "Draw from nearby communities",
    title: "Built to pull diners from across the Metro East, not just one block radius.",
    description:
      "Local intent copy is still useful for restaurants when it mirrors where guests actually drive from for dinner, brunch, and events.",
    areas: metroEastAreas,
  },
  cta: {
    eyebrow: "Private dining and reservations",
    title: "Need a restaurant site that feels more like a destination than a menu PDF?",
    description:
      "This example pairs hospitality visuals with a clear conversion path so a local restaurant can win reservations and event leads.",
    primaryCta: {
      label: "Start A Restaurant Demo",
      href: "#contact",
    },
    secondaryCta: {
      label: "Review Service Sections",
      href: "#services",
      tone: "ghost",
    },
  },
  contact: {
    eyebrow: "Plan a dining site refresh",
    title: "Showcase your menu, your atmosphere, and your next booking opportunity.",
    description:
      "Use the contact area for reservations, private dining requests, or consultation-style inquiries for a redesign project.",
    address: "112 North Main Street, Edwardsville, IL 62025",
    email: "hello@ashandolive.example",
    fields: createContactFields("Inquiry type", [
      "Table reservation",
      "Private dining",
      "Catering",
      "Website redesign",
    ]),
    primaryCta: {
      label: "Send Reservation Request",
      href: "#contact",
    },
  },
  seo: {
    title: "Restaurant Website Example | Ash & Olive Kitchen Demo",
    description:
      "Restaurant website example showing a warm editorial landing page for reservations, private dining, and local visibility in Edwardsville and Glen Carbon.",
  },
});

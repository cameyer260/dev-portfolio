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
    title: "Seasonal plates in a room worth lingering in.",
    highlight: "for date nights, birthdays, and long Saturday dinners",
    description:
      "Ash & Olive Kitchen pairs seasonal cooking with thoughtful service and a room people want to come back to.",
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
    title: "Dinner, brunch, and private events with a polished local feel.",
    description:
      "The page gives each offer room to breathe while keeping reservations and event inquiries easy to find.",
    items: [
      {
        title: "Dinner Service",
        description:
          "Seasonal menus, chef specials, and a dine-in experience that feels worth planning around.",
        icon: "utensils",
      },
      {
        title: "Private Events",
        description:
          "Rehearsal dinners, celebrations, and small receptions with a simple path to ask about dates and menus.",
        icon: "sparkles",
      },
      {
        title: "Weekend Brunch",
        description:
          "A busy weekend service with featured dishes, easy booking, and clear details for first-time guests.",
        icon: "star",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "Why locals choose us",
    title: "A restaurant site should sell the atmosphere as much as the menu.",
    description:
      "Guests want to know what the place feels like, what kind of night to expect, and how easy it is to book.",
    imageLabel: "Editorial restaurant dining scene",
    stat: {
      value: "4.9",
      label: "Average guest rating",
      detail: "Strong reviews help new guests feel comfortable booking before they have ever been in the room.",
    },
    items: [
      {
        title: "Image-led first impression",
        description:
          "Warm photography and clean spacing give the restaurant a feel before a guest ever walks through the door.",
        icon: "quote",
      },
      {
        title: "Private dining inquiries",
        description:
          "Private dining and events get their own path without pulling attention away from everyday reservations.",
        icon: "check",
      },
      {
        title: "Local neighborhood focus",
        description:
          "Clear local references help nearby diners find the restaurant and know it is worth the drive.",
        icon: "map",
      },
    ],
  },
  testimonials: {
    eyebrow: "Guest notes",
    title: "The site should make dinner feel worth booking before the first visit.",
    description:
      "A few believable reviews do more for a restaurant than a crowded page full of widgets.",
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
    title: "A smoother path from first look to reservation.",
    description:
      "Whether someone wants a Saturday table or a private event, the next step stays easy to find.",
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
        description: "Guests can reserve a table or ask about an event without hunting for the next step.",
      },
    ],
  },
  serviceArea: {
    eyebrow: "Draw from nearby communities",
    title: "Built for diners coming from across the Metro East.",
    description:
      "Good restaurant traffic often comes from beyond the immediate block, especially for dinner, brunch, and group events.",
    areas: metroEastAreas,
  },
  cta: {
    eyebrow: "Reservations and private events",
    title: "Ready for a restaurant site that makes booking feel easy?",
    description:
      "A stronger first impression and a clearer reservation path can help the right guests act sooner.",
    primaryCta: {
      label: "Book a Table",
      href: "#contact",
    },
    secondaryCta: {
      label: "Private Dining Details",
      href: "#services",
      tone: "ghost",
    },
  },
  contact: {
    eyebrow: "Reservations and event inquiries",
    title: "Reach out for a table, a private dinner, or a catered event.",
    description:
      "The contact section works for everyday reservations, larger group inquiries, and special occasions.",
    address: "112 North Main Street, Edwardsville, IL 62025",
    email: "hello@ashandolive.example",
    fields: createContactFields("Inquiry type", [
      "Table reservation",
      "Private dining",
      "Catering",
      "Website redesign",
    ]),
    primaryCta: {
      label: "Send Inquiry",
      href: "#contact",
    },
  },
  seo: {
    title: "Restaurant Website Example | Ash & Olive Kitchen Demo",
    description:
      "Restaurant website example showing a warm editorial landing page for reservations, private dining, and local visibility in Edwardsville and Glen Carbon.",
  },
});

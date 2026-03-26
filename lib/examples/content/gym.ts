import {
  buildExampleLandingPage,
  createContactFields,
  metroEastAreas,
} from "@/lib/examples/content/shared";

export const gymExamplePage = buildExampleLandingPage({
  businessName: "Forge Fitness Club",
  slug: "gym",
  industry: "Gym",
  phone: "(618) 555-0185",
  ctaText: "Start Trial",
  themeFamily: "energetic-performance",
  hero: {
    eyebrow: "Performance-driven gym demo",
    title: "Train harder, stay consistent, and see real progress.",
    highlight: "with coaching that keeps momentum high",
    description:
      "This energetic performance example pushes stronger typography, bigger contrast, and a more motivating CTA structure for gyms and fitness brands.",
    imageLabel: "Gym floor and strength training",
    badges: ["Strength floor", "Coach-led classes", "7-day trial"],
    primaryCta: {
      label: "Start Free Trial",
      href: "#contact",
      tone: "accent",
    },
    secondaryCta: {
      label: "View Programs",
      href: "#services",
      tone: "secondary",
    },
  },
  services: {
    eyebrow: "Programs",
    title: "The service cards should feel like outcomes, not bland feature blocks.",
    description:
      "For gyms, the shared system becomes more visual and momentum-driven while keeping the CTA visible and mobile-friendly.",
    items: [
      {
        title: "Strength Coaching",
        description:
          "Progressive strength programs built around coaching, accountability, and measurable results.",
        icon: "dumbbell",
        imageLabel: "Strength coaching and barbell training",
      },
      {
        title: "Small Group Classes",
        description:
          "High-energy class schedules with community-driven positioning and a clear trial CTA.",
        icon: "star",
        imageLabel: "Small group fitness class",
      },
      {
        title: "Nutrition Support",
        description:
          "Habit-building and goal support presented as part of the transformation story, not an afterthought.",
        icon: "check",
        imageLabel: "Nutrition coaching and athlete plan",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "Why this format works",
    title: "The page keeps the energy high without turning chaotic or generic.",
    description:
      "The energetic family uses contrast, stronger section transitions, and proof-oriented language to sell transformation and community.",
    imageLabel: "Athlete training with dramatic contrast",
    items: [
      {
        title: "High-energy CTA structure",
        description:
          "The hero and sticky mobile action both support trials and first visits without burying the ask.",
        icon: "dumbbell",
      },
      {
        title: "Outcome-driven sections",
        description:
          "Programs, testimonials, and process all reinforce momentum and visible progress instead of abstract branding.",
        icon: "check",
      },
      {
        title: "Community and aspiration",
        description:
          "The tone balances performance intensity with the feeling that a motivated beginner still belongs here.",
        icon: "star",
      },
    ],
  },
  testimonials: {
    eyebrow: "Results and proof",
    title: "The testimonial block should feel energetic, specific, and motivating.",
    description:
      "This family is designed to support stronger transformation language and more visible momentum toward the CTA.",
    items: [
      {
        quote:
          "The page made the gym feel serious but welcoming. I booked a trial because it looked like a place built for real progress.",
        name: "Alex J.",
        role: "Member",
        location: "Edwardsville",
        rating: 5,
      },
      {
        quote:
          "I liked that the programs and coaching were clear right away. It felt much more credible than most local gym sites.",
        name: "Tia B.",
        role: "Class member",
        location: "Glen Carbon",
        rating: 5,
      },
      {
        quote:
          "The site had the right energy. It made it easy to imagine training there before I even stepped inside.",
        name: "Marcus R.",
        role: "Strength client",
        location: "Troy",
        rating: 5,
      },
    ],
  },
  process: {
    eyebrow: "Getting started",
    title: "The process should build momentum toward the first session.",
    description:
      "This section works well for gyms because it translates motivation into a clear, low-friction next step.",
    steps: [
      {
        title: "Choose your goal",
        description: "Strength, classes, or accountability support are framed as outcomes the visitor can act on immediately.",
      },
      {
        title: "Book the trial",
        description: "The CTA stays strong and visible so interest turns into a booked visit instead of a bounce.",
      },
      {
        title: "Start training",
        description: "The page closes by reinforcing transformation, structure, and community.",
      },
    ],
  },
  serviceArea: {
    eyebrow: "Who we pull from",
    title: "Local visibility matters even for gyms because proximity is part of the buying decision.",
    description:
      "The service area block helps fitness businesses show where members typically come from without slowing down the page.",
    areas: metroEastAreas,
    mapLabel: "Gym members coming from Edwardsville and nearby towns",
  },
  cta: {
    eyebrow: "Momentum-driven demo",
    title: "Want a gym site that feels bold, motivating, and easier to convert from mobile?",
    description:
      "This example shows how the shared system can support fitness brands without collapsing into generic startup styling.",
    primaryCta: {
      label: "Start A Gym Demo",
      href: "#contact",
      tone: "accent",
    },
    secondaryCta: {
      label: "Review Program Cards",
      href: "#services",
      tone: "secondary",
    },
  },
  contact: {
    eyebrow: "Book the trial",
    title: "Use the final section for trial requests, coaching consults, or membership questions.",
    description:
      "The energetic split contact area is designed to feel like the final push toward action without adding extra friction.",
    address: "908 Plum Street, Edwardsville, IL 62025",
    email: "train@forgefitness.example",
    fields: createContactFields("Goal", [
      "Free trial",
      "Strength coaching",
      "Group classes",
      "Nutrition support",
    ]),
    primaryCta: {
      label: "Start Trial",
      href: "#contact",
    },
  },
  seo: {
    title: "Gym Website Example | Forge Fitness Club Demo",
    description:
      "Gym website example showing an energetic performance landing page for free trials, coaching programs, and local member acquisition in Edwardsville and Glen Carbon.",
  },
});

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
    eyebrow: "Strength and coaching",
    title: "Train harder, stay consistent, and see real progress.",
    highlight: "with coaching that keeps momentum high",
    description:
      "Forge Fitness is built for people who want serious training, strong coaching, and a place that keeps them showing up.",
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
    title: "Programs that speak to goals, not just amenities.",
    description:
      "The page keeps the energy up while making it easy to see how someone gets started.",
    items: [
      {
        title: "Strength Coaching",
        description:
          "Strength training built around coaching, accountability, and steady progress.",
        icon: "dumbbell",
        imageLabel: "Strength coaching and barbell training",
      },
      {
        title: "Small Group Classes",
        description:
          "High-energy class schedules with a clear path into a first visit or free trial.",
        icon: "star",
        imageLabel: "Small group fitness class",
      },
      {
        title: "Nutrition Support",
        description:
          "Habit-building and nutrition support that help members stay consistent outside the gym.",
        icon: "check",
        imageLabel: "Nutrition coaching and athlete plan",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "Why members stay",
    title: "A gym site should feel motivating without becoming chaotic.",
    description:
      "The energy matters, but so does making the next step easy to act on.",
    imageLabel: "Athlete training with dramatic contrast",
    items: [
      {
        title: "High-energy CTA structure",
        description:
          "The hero and mobile CTA both support trials and first visits without burying the ask.",
        icon: "dumbbell",
      },
      {
        title: "Outcome-driven sections",
        description:
          "Programs, testimonials, and process all reinforce momentum and visible progress instead of vague branding.",
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
    title: "Reviews should feel specific, upbeat, and believable.",
    description:
      "People join when they can picture themselves in the room and trust the coaching.",
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
    title: "Make it easy to go from interest to first session.",
    description:
      "People should be able to pick a goal, book a visit, and know what happens next.",
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
        description: "The page closes by reinforcing structure, coaching, and the kind of momentum people want to keep.",
      },
    ],
  },
  serviceArea: {
    eyebrow: "Who we pull from",
    title: "Most members come from a short drive away.",
    description:
      "Keeping nearby towns visible helps the gym feel convenient as well as motivating.",
    areas: metroEastAreas,
    mapLabel: "Gym members coming from Edwardsville and nearby towns",
  },
  cta: {
    eyebrow: "Start your first week",
    title: "Make the next step feel as strong as the brand.",
    description:
      "Clear programs and a strong trial path help people stop browsing and come in.",
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
  contact: {
    eyebrow: "Book the trial",
    title: "Use the final section for trial requests, coaching consults, or membership questions.",
    description:
      "Keep the last step simple so the first visit feels easy to book.",
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

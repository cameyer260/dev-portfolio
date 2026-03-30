export type ExampleThemeFamily =
  | "warm-editorial"
  | "bold-trust"
  | "premium-professional"
  | "energetic-performance";

export type ExampleIconName =
  | "phone"
  | "map"
  | "quote"
  | "shield"
  | "badge"
  | "star"
  | "clock"
  | "check"
  | "hammer"
  | "wrench"
  | "utensils"
  | "gavel"
  | "sparkles"
  | "leaf"
  | "dumbbell"
  | "scissors"
  | "home"
  | "car"
  | "calculator"
  | "stethoscope"
  | "briefcase";

export type ExampleHeroVariant =
  | "editorial-image"
  | "trust-split"
  | "premium-image"
  | "energetic-impact";

export type ExampleServicesVariant =
  | "editorial-feature"
  | "compact-grid"
  | "structured-columns"
  | "image-cards";

export type ExampleTestimonialsVariant =
  | "editorial-quote"
  | "review-grid"
  | "premium-quotes"
  | "results-grid";

export type ExampleCtaVariant =
  | "editorial-soft"
  | "bold-band"
  | "premium-minimal"
  | "energetic-split";

export type ExampleContactVariant =
  | "editorial-card"
  | "trust-card"
  | "premium-form"
  | "energetic-split";

export type ExampleWhyChooseUsVariant =
  | "editorial-feature"
  | "trust-list"
  | "premium-proof"
  | "contrast-proof";

export type ExampleProcessVariant =
  | "steps-grid"
  | "numbered-band"
  | "premium-steps"
  | "momentum-steps";

export type ExampleServiceAreaVariant =
  | "chip-list"
  | "coverage-list"
  | "office-grid"
  | "map-split";

export type ExampleAction = {
  label: string;
  href: string;
  tone?: "primary" | "secondary" | "ghost" | "accent";
};

export type ExampleImage = {
  src: string;
  alt: string;
};

export type ExampleFormField = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  placeholder?: string;
  options?: string[];
};

export type ExampleStat = {
  value: string;
  label: string;
  detail?: string;
};

export type ExampleFeatureItem = {
  title: string;
  description: string;
  icon?: ExampleIconName;
  href?: string;
  image?: ExampleImage;
};

export type ExampleTestimonial = {
  quote: string;
  name: string;
  role?: string;
  location?: string;
  rating?: number;
  image?: ExampleImage;
};

export type ExampleHeroSection = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description: string;
  image?: ExampleImage;
  badges?: string[];
  stats?: ExampleStat[];
  primaryCta: ExampleAction;
  secondaryCta?: ExampleAction;
  formTitle?: string;
  formFields?: ExampleFormField[];
};

export type ExampleServicesSection = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: ExampleFeatureItem[];
};

export type ExampleWhyChooseUsSection = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: ExampleImage;
  stat?: ExampleStat;
  items: ExampleFeatureItem[];
};

export type ExampleTestimonialsSection = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: ExampleTestimonial[];
};

export type ExampleProcessSection = {
  eyebrow?: string;
  title: string;
  description?: string;
  steps: ExampleFeatureItem[];
};

export type ExampleServiceAreaSection = {
  eyebrow?: string;
  title: string;
  description?: string;
  areas: string[];
  mapImage?: ExampleImage;
};

export type ExampleCtaSection = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta: ExampleAction;
  secondaryCta?: ExampleAction;
};

export type ExampleContactSection = {
  eyebrow?: string;
  title: string;
  description?: string;
  phone: string;
  address?: string;
  email?: string;
  primaryCta?: ExampleAction;
  fields: ExampleFormField[];
};

export type ExampleSectionVariants = {
  heroVariant: ExampleHeroVariant;
  servicesVariant: ExampleServicesVariant;
  whyChooseUsVariant?: ExampleWhyChooseUsVariant;
  testimonialsVariant: ExampleTestimonialsVariant;
  processVariant?: ExampleProcessVariant;
  serviceAreaVariant?: ExampleServiceAreaVariant;
  ctaVariant: ExampleCtaVariant;
  contactVariant: ExampleContactVariant;
};

export type ExampleTheme = {
  family: ExampleThemeFamily;
  label: string;
  typography: {
    display: string;
    body: string;
    label: string;
  };
  colors: {
    background: string;
    surface: string;
    surfaceAlt: string;
    surfaceStrong: string;
    text: string;
    muted: string;
    border: string;
    primary: string;
    primaryContrast: string;
    accent: string;
    accentContrast: string;
    accentSoft: string;
    heroOverlayFrom: string;
    heroOverlayTo: string;
  };
  radius: {
    panel: string;
    input: string;
    pill: string;
  };
  shadow: {
    soft: string;
    strong: string;
  };
};

export type ExampleLandingPage = {
  businessName: string;
  slug: string;
  industry: string;
  phone: string;
  ctaText: string;
  themeFamily: ExampleThemeFamily;
  sectionVariants: ExampleSectionVariants;
  hero: ExampleHeroSection;
  services: ExampleServicesSection;
  whyChooseUs: ExampleWhyChooseUsSection;
  testimonials: ExampleTestimonialsSection;
  process?: ExampleProcessSection;
  serviceArea: ExampleServiceAreaSection;
  cta: ExampleCtaSection;
  contact: ExampleContactSection;
  seo?: {
    title: string;
    description: string;
  };
};

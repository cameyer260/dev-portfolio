import type { ComponentType, CSSProperties, ReactNode } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Calculator,
  Check,
  Clock3,
  Dumbbell,
  Gavel,
  Hammer,
  Home,
  MapPin,
  Phone,
  Quote,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  UtensilsCrossed,
  Wrench,
  Car,
  Leaf,
  BadgeCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { ExampleAction, ExampleIconName, ExampleTheme } from "@/lib/examples";

const iconMap = {
  phone: Phone,
  map: MapPin,
  quote: Quote,
  shield: ShieldCheck,
  badge: BadgeCheck,
  star: Star,
  clock: Clock3,
  check: Check,
  hammer: Hammer,
  wrench: Wrench,
  utensils: UtensilsCrossed,
  gavel: Gavel,
  sparkles: Sparkles,
  leaf: Leaf,
  dumbbell: Dumbbell,
  scissors: Scissors,
  home: Home,
  car: Car,
  calculator: Calculator,
  stethoscope: Stethoscope,
  briefcase: BriefcaseBusiness,
} satisfies Record<ExampleIconName, ComponentType<{ className?: string }>>;

export function ExampleIcon({
  icon,
  className,
}: {
  icon?: ExampleIconName;
  className?: string;
}) {
  if (!icon) {
    return <Check className={className} />;
  }

  const Icon = iconMap[icon];
  return <Icon className={className} />;
}

export function TemplateSection({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("px-5 py-18 md:px-8 md:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionEyebrow({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  if (!children) {
    return null;
  }

  return (
    <p
      className={cn(
        "mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[var(--example-muted)]",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  title,
  description,
  align = "left",
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "mb-12 space-y-4",
        align === "center" && "mx-auto max-w-3xl text-center",
      )}
    >
      <h2 className="max-w-4xl [font-family:var(--example-font-display)] text-4xl leading-tight font-semibold tracking-tight text-[var(--example-text)] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-[var(--example-muted)] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function TemplateButton({
  action,
  className,
}: {
  action: ExampleAction;
  className?: string;
}) {
  const tone = action.tone ?? "primary";

  const toneClasses = {
    primary:
      "border border-transparent bg-[var(--example-primary)] text-[var(--example-primary-contrast)] hover:opacity-92",
    secondary:
      "border border-[var(--example-border)] bg-transparent text-[var(--example-text)] hover:bg-[var(--example-surface-alt)]",
    ghost:
      "border border-transparent bg-transparent text-[var(--example-text)] hover:bg-[var(--example-surface-alt)]",
    accent:
      "border border-transparent bg-[var(--example-accent)] text-[var(--example-accent-contrast)] hover:opacity-92",
  } as const;

  return (
    <a
      href={action.href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--example-radius-pill)] px-6 py-3 text-sm font-semibold tracking-[0.06em] transition-all",
        toneClasses[tone],
        className,
      )}
    >
      <span>{action.label}</span>
      {action.tone === "ghost" ? null : <ArrowRight className="h-4 w-4" />}
    </a>
  );
}

export function SurfaceCard({
  className,
  children,
  emphasis = "default",
}: {
  className?: string;
  children: ReactNode;
  emphasis?: "default" | "strong" | "accent";
}) {
  const emphasisClasses = {
    default:
      "border border-[var(--example-border)] bg-[var(--example-surface)] text-[var(--example-text)]",
    strong:
      "border border-transparent bg-[var(--example-surface-strong)] text-[var(--example-text)]",
    accent:
      "border border-transparent bg-[var(--example-accent-soft)] text-[var(--example-text)]",
  } as const;

  return (
    <div
      className={cn(
        "rounded-[var(--example-radius-panel)] p-6 md:p-8",
        emphasisClasses[emphasis],
        className,
      )}
      style={{ boxShadow: "var(--example-shadow-soft)" }}
    >
      {children}
    </div>
  );
}

export function ExampleImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  // Example pages need to support arbitrary local or remote marketing imagery.
  // Using a plain img keeps Phase 1 flexible until route/content-level image handling is finalized.
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={cn("h-full w-full object-cover", className)} />;
}

export function ThemeStyleVariables({
  theme,
  children,
}: {
  theme: ExampleTheme;
  children: ReactNode;
}) {
  const style = {
    "--example-background": theme.colors.background,
    "--example-surface": theme.colors.surface,
    "--example-surface-alt": theme.colors.surfaceAlt,
    "--example-surface-strong": theme.colors.surfaceStrong,
    "--example-text": theme.colors.text,
    "--example-muted": theme.colors.muted,
    "--example-border": theme.colors.border,
    "--example-primary": theme.colors.primary,
    "--example-primary-contrast": theme.colors.primaryContrast,
    "--example-accent": theme.colors.accent,
    "--example-accent-contrast": theme.colors.accentContrast,
    "--example-accent-soft": theme.colors.accentSoft,
    "--example-hero-overlay-from": theme.colors.heroOverlayFrom,
    "--example-hero-overlay-to": theme.colors.heroOverlayTo,
    "--example-radius-panel": theme.radius.panel,
    "--example-radius-input": theme.radius.input,
    "--example-radius-pill": theme.radius.pill,
    "--example-shadow-soft": theme.shadow.soft,
    "--example-shadow-strong": theme.shadow.strong,
    "--example-font-display": theme.typography.display,
    "--example-font-body": theme.typography.body,
    "--example-font-label": theme.typography.label,
  } as CSSProperties;

  return (
    <div
      style={style}
      className="bg-[var(--example-background)] text-[var(--example-text)] [font-family:var(--example-font-body)]"
    >
      {children}
    </div>
  );
}

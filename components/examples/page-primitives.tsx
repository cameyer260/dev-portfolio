import type { ReactNode } from "react";
import {
  ExampleIcon,
  ExampleImage,
  SectionEyebrow,
  SurfaceCard,
  TemplateButton,
} from "@/components/templates/template-shared";
import type {
  ExampleAction,
  ExampleContactSection,
  ExampleFeatureItem,
  ExampleHeroSection,
  ExampleImage as ExampleImageType,
  ExampleServicesSection,
  ExampleTestimonial,
  ExampleWhyChooseUsSection,
} from "@/lib/examples";
import { cn } from "@/lib/utils";

export function ExampleSection({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = "left",
  tone = "default",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
}) {
  return (
    <section id={id} className={cn("px-5 py-18 md:px-8 md:py-24", className)}>
      <div className="mx-auto max-w-6xl">
        {title ? (
          <div
            className={cn(
              "mb-12",
              align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
            )}
          >
            <SectionEyebrow
              className={cn(
                align === "center" && "text-center",
                tone === "inverse" && "text-white/64",
              )}
            >
              {eyebrow}
            </SectionEyebrow>
            <h2
              className={cn(
                "text-4xl leading-tight [font-family:var(--example-font-display)] font-semibold tracking-tight md:text-5xl",
                tone === "inverse" ? "text-white" : "text-[var(--example-text)]",
              )}
            >
              {title}
            </h2>
            {description ? (
              <p
                className={cn(
                  "mt-4 text-base leading-8 md:text-lg",
                  tone === "inverse" ? "text-white/76" : "text-[var(--example-muted)]",
                )}
              >
                {description}
              </p>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function ExampleHeroActions({
  hero,
  className,
  tone = "default",
}: {
  hero: ExampleHeroSection;
  className?: string;
  tone?: "default" | "inverse";
}) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <TemplateButton
        action={{ ...hero.primaryCta, tone: hero.primaryCta.tone ?? "primary" }}
        className={heroActionClassName(hero.primaryCta.tone ?? "primary", tone)}
      />
      {hero.secondaryCta ? (
        <TemplateButton
          action={{ ...hero.secondaryCta, tone: hero.secondaryCta.tone ?? "secondary" }}
          className={heroActionClassName(hero.secondaryCta.tone ?? "secondary", tone)}
        />
      ) : null}
    </div>
  );
}

export function ExampleStats({ stats, inverse = false }: { stats?: ExampleHeroSection["stats"]; inverse?: boolean }) {
  if (!stats?.length) {
    return null;
  }

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={`${stat.value}-${stat.label}`}
          className={cn(
            "rounded-[var(--example-radius-panel)] border px-5 py-4",
            inverse
              ? "border-white/14 bg-white/8 text-white"
              : "border-[var(--example-border)] bg-[var(--example-surface)] text-[var(--example-text)]",
          )}
        >
          <p className="text-3xl [font-family:var(--example-font-display)] font-semibold">{stat.value}</p>
          <p
            className={cn(
              "mt-1 text-[11px] font-bold uppercase tracking-[0.2em]",
              inverse ? "text-white/70" : "text-[var(--example-muted)]",
            )}
          >
            {stat.label}
          </p>
          {stat.detail ? (
            <p className={cn("mt-2 text-sm leading-6", inverse ? "text-white/74" : "text-[var(--example-muted)]")}>
              {stat.detail}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function PhotoPanel({
  image,
  className,
  aspect = "aspect-[4/3]",
  overlay,
  imageClassName,
}: {
  image?: ExampleImageType;
  className?: string;
  aspect?: string;
  overlay?: ReactNode;
  imageClassName?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-[var(--example-radius-panel)] bg-[var(--example-surface-strong)]", className)}>
      <div className={aspect}>
        {image ? (
          <ExampleImage src={image.src} alt={image.alt} imageClassName={imageClassName} />
        ) : null}
      </div>
      {overlay ? <div className="absolute inset-0">{overlay}</div> : null}
    </div>
  );
}

export function ServicesMosaic({
  services,
  layout = "grid",
}: {
  services: ExampleServicesSection;
  layout?: "grid" | "stacked" | "feature-left";
}) {
  const items = services.items;
  const [featured, ...rest] = items;

  if (layout === "feature-left" && featured) {
    return (
      <div className="grid gap-6 md:grid-cols-12">
        <SurfaceCard className="md:col-span-7">
          <ExampleIcon icon={featured.icon} className="mb-5 h-8 w-8 text-[var(--example-accent)]" />
          <h3 className="text-3xl [font-family:var(--example-font-display)] font-semibold text-[var(--example-text)]">
            {featured.title}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-8 text-[var(--example-muted)]">
            {featured.description}
          </p>
        </SurfaceCard>
        <div className="grid gap-6 md:col-span-5">
          {rest.map((item, index) => (
            <SurfaceCard key={item.title} emphasis={index === 0 ? "accent" : "strong"}>
              <ExampleIcon icon={item.icon} className="mb-4 h-7 w-7 text-[var(--example-primary)]" />
              <h3 className="text-2xl [font-family:var(--example-font-display)] font-semibold text-[var(--example-text)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--example-muted)]">{item.description}</p>
            </SurfaceCard>
          ))}
        </div>
      </div>
    );
  }

  if (layout === "stacked") {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={cn(
              "rounded-[var(--example-radius-panel)] border p-6 md:p-8",
              index % 2 === 0
                ? "border-[var(--example-border)] bg-[var(--example-surface)]"
                : "border-transparent bg-[var(--example-surface-strong)]",
            )}
          >
            <ExampleIcon icon={item.icon} className="mb-4 h-7 w-7 text-[var(--example-accent)]" />
            <h3 className="text-2xl [font-family:var(--example-font-display)] font-semibold text-[var(--example-text)]">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--example-muted)]">{item.description}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((item, index) => (
        <SurfaceCard key={item.title} emphasis={index === 1 ? "accent" : "default"} className="h-full">
          <ExampleIcon icon={item.icon} className="mb-5 h-8 w-8 text-[var(--example-accent)]" />
          <h3 className="text-2xl [font-family:var(--example-font-display)] font-semibold text-[var(--example-text)]">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-[var(--example-muted)]">{item.description}</p>
        </SurfaceCard>
      ))}
    </div>
  );
}

export function TrustPoints({
  section,
  tone = "light",
}: {
  section: ExampleWhyChooseUsSection;
  tone?: "light" | "dark";
}) {
  return (
    <div className="space-y-5">
      {section.items.map((item, index) => (
        <div
          key={item.title}
          className={cn(
            "flex gap-4 rounded-[var(--example-radius-panel)] px-5 py-5",
            tone === "dark"
              ? "bg-white/6 text-white"
              : index % 2 === 0
                ? "bg-[var(--example-surface)]"
                : "bg-[var(--example-surface-strong)]",
          )}
        >
          <div
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
              tone === "dark" ? "bg-[var(--example-accent)] text-[var(--example-accent-contrast)]" : "bg-[var(--example-accent-soft)] text-[var(--example-text)]",
            )}
          >
            <ExampleIcon icon={item.icon} className="h-5 w-5" />
          </div>
          <div>
            <h3 className={cn("text-lg font-semibold", tone === "dark" ? "text-white" : "text-[var(--example-text)]")}>
              {item.title}
            </h3>
            <p className={cn("mt-2 text-sm leading-7", tone === "dark" ? "text-white/72" : "text-[var(--example-muted)]")}>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ReviewCards({
  items,
  tone = "light",
  className,
}: {
  items: ExampleTestimonial[];
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-5",
        items.length === 1
          ? "max-w-xl"
          : items.length === 2
            ? "md:grid-cols-2"
            : "md:grid-cols-3",
        className,
      )}
    >
      {items.map((item, index) => (
        <div
          key={`${item.name}-${index}`}
          className={cn(
            "rounded-[var(--example-radius-panel)] border p-6",
            tone === "dark"
              ? "border-white/10 bg-white/6 text-white"
              : index === 1
                ? "border-transparent bg-[var(--example-surface-strong)]"
                : "border-[var(--example-border)] bg-[var(--example-surface)] text-[var(--example-text)]",
          )}
        >
          <p className={cn("text-base leading-8", tone === "dark" ? "text-white/78" : "text-[var(--example-text)]")}>
            “{item.quote}”
          </p>
          <div className={cn("mt-6 border-t pt-4", tone === "dark" ? "border-white/10" : "border-[var(--example-border)]")}>
            <p className={cn("text-sm font-semibold", tone === "dark" ? "text-white" : "text-[var(--example-text)]")}>
              {item.name}
            </p>
            <p className={cn("text-[11px] font-bold uppercase tracking-[0.18em]", tone === "dark" ? "text-white/60" : "text-[var(--example-muted)]")}>
              {[item.role, item.location].filter(Boolean).join(" • ")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function AreaChips({ areas, className }: { areas: string[]; className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {areas.map((area) => (
        <span
          key={area}
          className="rounded-[var(--example-radius-pill)] border border-[var(--example-border)] bg-[var(--example-surface)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--example-text)]"
        >
          {area}
        </span>
      ))}
    </div>
  );
}

export function ExampleFormFields({
  fields,
  mode = "surface",
}: {
  fields: ExampleContactSection["fields"];
  mode?: "surface" | "underline" | "contrast";
}) {
  return (
    <div className={cn("grid gap-4", mode === "underline" && "md:grid-cols-2")}>
      {fields.map((field) => (
        <label
          key={field.name}
          className={cn(
            "block",
            mode === "underline" && (field.type === "textarea" || field.type === "select") && "md:col-span-2",
          )}
        >
          <span
            className={cn(
              "mb-2 block text-[11px] font-bold uppercase tracking-[0.18em]",
              mode === "contrast" ? "text-white/68" : "text-[var(--example-muted)]",
            )}
          >
            {field.label}
          </span>
          {field.type === "textarea" ? (
            <textarea
              rows={4}
              placeholder={field.placeholder}
              className={inputClasses(mode)}
            />
          ) : field.type === "select" ? (
            <select className={inputClasses(mode)}>
              {field.options?.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              type={field.type ?? "text"}
              placeholder={field.placeholder}
              className={inputClasses(mode)}
            />
          )}
        </label>
      ))}
    </div>
  );
}

function inputClasses(mode: "surface" | "underline" | "contrast") {
  if (mode === "underline") {
    return "w-full border-b border-[var(--example-border)] bg-transparent px-0 py-3 text-sm outline-none";
  }

  if (mode === "contrast") {
    return "w-full rounded-[var(--example-radius-input)] border border-white/16 bg-white/8 px-4 py-3 text-sm text-white outline-none placeholder:text-white/42";
  }

  return "w-full rounded-[var(--example-radius-input)] border border-[var(--example-border)] bg-[var(--example-background)] px-4 py-3 text-sm outline-none";
}

export function ContactBlock({
  section,
  formMode = "surface",
  cardClassName,
  buttonTone = "primary",
  tone = "default",
}: {
  section: ExampleContactSection;
  formMode?: "surface" | "underline" | "contrast";
  cardClassName?: string;
  buttonTone?: "primary" | "secondary" | "ghost" | "accent";
  tone?: "default" | "inverse";
}) {
  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
      <div>
        <SectionEyebrow className={tone === "inverse" ? "text-white/64" : undefined}>
          {section.eyebrow}
        </SectionEyebrow>
        <h2
          className={cn(
            "text-4xl [font-family:var(--example-font-display)] font-semibold md:text-5xl",
            tone === "inverse" ? "text-white" : "text-[var(--example-text)]",
          )}
        >
          {section.title}
        </h2>
        {section.description ? (
          <p
            className={cn(
              "mt-5 max-w-lg text-base leading-8",
              tone === "inverse" ? "text-white/78" : "text-[var(--example-muted)]",
            )}
          >
            {section.description}
          </p>
        ) : null}
        <a
          href={`tel:${section.phone.replace(/[^\d+]/g, "")}`}
          className={cn(
            "mt-8 inline-flex text-3xl [font-family:var(--example-font-display)] font-semibold",
            tone === "inverse" ? "text-white" : "text-[var(--example-primary)]",
          )}
        >
          {section.phone}
        </a>
        {section.address ? (
          <p
            className={cn(
              "mt-4 text-sm leading-7",
              tone === "inverse" ? "text-white/72" : "text-[var(--example-muted)]",
            )}
          >
            {section.address}
          </p>
        ) : null}
        {section.email ? (
          <p
            className={cn(
              "mt-2 text-sm leading-7",
              tone === "inverse" ? "text-white/72" : "text-[var(--example-muted)]",
            )}
          >
            {section.email}
          </p>
        ) : null}
      </div>
      <div
        className={cn(
          "rounded-[var(--example-radius-panel)] p-6 md:p-8",
          cardClassName ??
            (tone === "inverse"
              ? "border border-white/16 bg-white/8 text-white"
              : "border border-[var(--example-border)] bg-[var(--example-surface)]"),
        )}
      >
        <ExampleFormFields fields={section.fields} mode={formMode} />
        <TemplateButton
          action={{
            label: section.primaryCta?.label ?? "Send Request",
            href: section.primaryCta?.href ?? "#contact",
            tone: buttonTone,
          }}
          className="mt-6 w-full justify-center"
        />
      </div>
    </div>
  );
}

export function StatBadge({
  value,
  label,
  detail,
  className,
}: {
  value: string;
  label: string;
  detail?: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-[var(--example-radius-panel)] bg-[var(--example-primary)] p-6 text-[var(--example-primary-contrast)]", className)}>
      <p className="text-4xl [font-family:var(--example-font-display)] font-semibold">{value}</p>
      <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/64">{label}</p>
      {detail ? <p className="mt-3 text-sm leading-6 text-white/78">{detail}</p> : null}
    </div>
  );
}

export function HighlightQuote({
  item,
  className,
}: {
  item?: ExampleTestimonial;
  className?: string;
}) {
  if (!item) {
    return null;
  }

  return (
    <div className={cn("rounded-[var(--example-radius-panel)] border border-[var(--example-border)] bg-[var(--example-surface)] p-8 md:p-10", className)}>
      <p className="text-3xl leading-snug [font-family:var(--example-font-display)] text-[var(--example-text)] md:text-4xl">
        “{item.quote}”
      </p>
      <div className="mt-8">
        <p className="text-sm font-semibold text-[var(--example-text)]">{item.name}</p>
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--example-muted)]">
          {[item.role, item.location].filter(Boolean).join(" • ")}
        </p>
      </div>
    </div>
  );
}

export function FeatureRows({ items }: { items: ExampleFeatureItem[] }) {
  return (
    <div className="divide-y divide-[var(--example-border)] rounded-[var(--example-radius-panel)] border border-[var(--example-border)] bg-[var(--example-surface)]">
      {items.map((item) => (
        <div key={item.title} className="grid gap-4 px-6 py-6 md:grid-cols-[auto_minmax(0,1fr)] md:items-start md:px-8">
          <div className="rounded-full bg-[var(--example-accent-soft)] p-3 text-[var(--example-text)]">
            <ExampleIcon icon={item.icon} className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl [font-family:var(--example-font-display)] font-semibold text-[var(--example-text)]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-[var(--example-muted)]">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function heroActionClassName(
  actionTone: NonNullable<ExampleAction["tone"]>,
  tone: "default" | "inverse",
) {
  if (tone !== "inverse") {
    return undefined;
  }

  if (actionTone === "secondary" || actionTone === "ghost") {
    return "border-white/16 bg-white/8 text-white hover:bg-white/14";
  }

  if (actionTone === "primary") {
    return "bg-white text-[var(--example-primary)] hover:bg-white/92";
  }

  return undefined;
}

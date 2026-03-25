import {
  SectionEyebrow,
  TemplateButton,
  TemplateSection,
} from "@/components/templates/template-shared";
import type { ExampleCtaSection, ExampleCtaVariant } from "@/lib/examples";

export function CTA({
  section,
  variant,
}: {
  section: ExampleCtaSection;
  variant: ExampleCtaVariant;
}) {
  if (variant === "bold-band") {
    return (
      <TemplateSection className="bg-[var(--example-accent)] text-[var(--example-accent-contrast)] text-center">
        <div className="mx-auto max-w-3xl">
          <SectionEyebrow className="text-white/70">{section.eyebrow}</SectionEyebrow>
          <h2 className="mb-5 [font-family:var(--example-font-display)] text-4xl font-black uppercase md:text-5xl">
            {section.title}
          </h2>
          {section.description ? (
            <p className="mx-auto max-w-2xl text-lg leading-8 text-white/82">{section.description}</p>
          ) : null}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <TemplateButton
              action={{ ...section.primaryCta, tone: section.primaryCta.tone ?? "primary" }}
              className="bg-[var(--example-primary)] text-[var(--example-primary-contrast)]"
            />
          </div>
        </div>
      </TemplateSection>
    );
  }

  if (variant === "premium-minimal") {
    return (
      <TemplateSection className="bg-[var(--example-background)]">
        <div className="mx-auto max-w-4xl text-center">
          <SectionEyebrow>{section.eyebrow}</SectionEyebrow>
          <h2 className="mb-5 [font-family:var(--example-font-display)] text-4xl font-semibold text-[var(--example-text)] md:text-5xl">
            {section.title}
          </h2>
          {section.description ? (
            <p className="mx-auto max-w-2xl text-lg leading-8 text-[var(--example-muted)]">{section.description}</p>
          ) : null}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <TemplateButton action={{ ...section.primaryCta, tone: section.primaryCta.tone ?? "primary" }} />
            {section.secondaryCta ? (
              <TemplateButton
                action={{ ...section.secondaryCta, tone: section.secondaryCta.tone ?? "secondary" }}
              />
            ) : null}
          </div>
        </div>
      </TemplateSection>
    );
  }

  if (variant === "energetic-split") {
    return (
      <TemplateSection className="bg-[var(--example-primary)] text-[var(--example-primary-contrast)]">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div>
            <SectionEyebrow className="text-white/58">{section.eyebrow}</SectionEyebrow>
            <h2 className="mb-4 [font-family:var(--example-font-display)] text-4xl font-black uppercase md:text-5xl">
              {section.title}
            </h2>
            {section.description ? (
              <p className="max-w-2xl text-base leading-8 text-white/74">{section.description}</p>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <TemplateButton action={{ ...section.primaryCta, tone: section.primaryCta.tone ?? "accent" }} />
            {section.secondaryCta ? (
              <TemplateButton
                action={{ ...section.secondaryCta, tone: section.secondaryCta.tone ?? "secondary" }}
                className="border-white/20 text-white hover:bg-white/10"
              />
            ) : null}
          </div>
        </div>
      </TemplateSection>
    );
  }

  return (
    <TemplateSection className="bg-[var(--example-surface)]">
      <div className="mx-auto max-w-4xl text-center">
        <SectionEyebrow>{section.eyebrow}</SectionEyebrow>
        <h2 className="mb-5 [font-family:var(--example-font-display)] text-4xl font-semibold text-[var(--example-text)] md:text-5xl">
          {section.title}
        </h2>
        {section.description ? (
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[var(--example-muted)]">{section.description}</p>
        ) : null}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <TemplateButton action={{ ...section.primaryCta, tone: section.primaryCta.tone ?? "primary" }} />
          {section.secondaryCta ? (
            <TemplateButton
              action={{ ...section.secondaryCta, tone: section.secondaryCta.tone ?? "ghost" }}
            />
          ) : null}
        </div>
      </div>
    </TemplateSection>
  );
}

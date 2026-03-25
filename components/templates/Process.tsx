import {
  SectionEyebrow,
  SectionHeading,
  TemplateSection,
} from "@/components/templates/template-shared";
import type {
  ExampleProcessSection,
  ExampleProcessVariant,
  ExampleThemeFamily,
} from "@/lib/examples";

export function Process({
  process,
  family,
  variant,
}: {
  process?: ExampleProcessSection;
  family: ExampleThemeFamily;
  variant?: ExampleProcessVariant;
}) {
  if (!process) {
    return null;
  }

  const resolvedVariant =
    variant ??
    ({
      "warm-editorial": "steps-grid",
      "bold-trust": "numbered-band",
      "premium-professional": "premium-steps",
      "energetic-performance": "momentum-steps",
    } satisfies Record<ExampleThemeFamily, ExampleProcessVariant>)[family];

  if (resolvedVariant === "numbered-band") {
    return (
      <TemplateSection className="bg-[var(--example-surface)] text-center">
        <SectionEyebrow>{process.eyebrow}</SectionEyebrow>
        <SectionHeading title={process.title} description={process.description} align="center" />
        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="absolute top-8 left-0 hidden h-px w-full bg-[var(--example-border)] md:block" />
          {process.steps.map((step, index) => (
            <div key={step.title} className="relative z-10 bg-[var(--example-surface)] px-4">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center bg-[var(--example-primary)] [font-family:var(--example-font-display)] text-2xl font-black text-[var(--example-primary-contrast)]">
                {index + 1}
              </div>
              <h3 className="mb-2 [font-family:var(--example-font-display)] text-2xl font-bold uppercase text-[var(--example-text)]">
                {step.title}
              </h3>
              <p className="text-sm leading-7 text-[var(--example-muted)]">{step.description}</p>
            </div>
          ))}
        </div>
      </TemplateSection>
    );
  }

  if (resolvedVariant === "premium-steps") {
    return (
      <TemplateSection className="bg-[var(--example-primary)] text-[var(--example-primary-contrast)]">
        <SectionEyebrow className="text-white/54">{process.eyebrow}</SectionEyebrow>
        <SectionHeading title={process.title} description={process.description} />
        <div className="grid gap-10 md:grid-cols-3">
          {process.steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center border border-white/15 [font-family:var(--example-font-display)] text-2xl text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-4 [font-family:var(--example-font-display)] text-2xl font-semibold">
                {step.title}
              </h3>
              <p className="text-sm leading-7 text-white/68">{step.description}</p>
            </div>
          ))}
        </div>
      </TemplateSection>
    );
  }

  if (resolvedVariant === "momentum-steps") {
    return (
      <TemplateSection>
        <SectionEyebrow className="text-center">{process.eyebrow}</SectionEyebrow>
        <SectionHeading title={process.title} description={process.description} align="center" />
        <div className="grid gap-6 md:grid-cols-3">
          {process.steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-[var(--example-radius-panel)] border border-[var(--example-border)] bg-[var(--example-surface)] p-8"
              style={{ boxShadow: "var(--example-shadow-soft)" }}
            >
              <p className="mb-4 [font-family:var(--example-font-display)] text-4xl font-black text-[var(--example-accent)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-3 [font-family:var(--example-font-display)] text-2xl font-bold uppercase text-[var(--example-text)]">
                {step.title}
              </h3>
              <p className="text-sm leading-7 text-[var(--example-muted)]">{step.description}</p>
            </div>
          ))}
        </div>
      </TemplateSection>
    );
  }

  return (
    <TemplateSection className="bg-[var(--example-surface)]">
      <SectionEyebrow className="text-center">{process.eyebrow}</SectionEyebrow>
      <SectionHeading title={process.title} description={process.description} align="center" />
      <div className="grid gap-6 md:grid-cols-3">
        {process.steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-[var(--example-radius-panel)] border border-[var(--example-border)] bg-[var(--example-background)] p-8"
          >
            <p className="mb-4 [font-family:var(--example-font-display)] text-4xl font-semibold text-[var(--example-primary)]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mb-3 [font-family:var(--example-font-display)] text-2xl font-semibold text-[var(--example-text)]">
              {step.title}
            </h3>
            <p className="text-sm leading-7 text-[var(--example-muted)]">{step.description}</p>
          </div>
        ))}
      </div>
    </TemplateSection>
  );
}

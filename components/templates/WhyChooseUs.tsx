import {
  ExampleIcon,
  ExampleImage,
  SectionEyebrow,
  SurfaceCard,
  TemplateSection,
} from "@/components/templates/template-shared";
import type {
  ExampleThemeFamily,
  ExampleWhyChooseUsSection,
  ExampleWhyChooseUsVariant,
} from "@/lib/examples";

export function WhyChooseUs({
  section,
  family,
  variant,
}: {
  section: ExampleWhyChooseUsSection;
  family: ExampleThemeFamily;
  variant?: ExampleWhyChooseUsVariant;
}) {
  const resolvedVariant =
    variant ??
    ({
      "warm-editorial": "editorial-feature",
      "bold-trust": "trust-list",
      "premium-professional": "premium-proof",
      "energetic-performance": "contrast-proof",
    } satisfies Record<ExampleThemeFamily, ExampleWhyChooseUsVariant>)[family];

  if (resolvedVariant === "trust-list") {
    return (
      <TemplateSection className="bg-[var(--example-primary)] text-[var(--example-primary-contrast)]">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {section.image ? (
            <div className="overflow-hidden rounded-[var(--example-radius-panel)]">
              <ExampleImage src={section.image.src} alt={section.image.alt} className="grayscale" />
            </div>
          ) : null}
          <div>
            <SectionEyebrow className="text-white/60">{section.eyebrow}</SectionEyebrow>
            <h2 className="mb-6 [font-family:var(--example-font-display)] text-4xl leading-tight font-black uppercase md:text-5xl">
              {section.title}
            </h2>
            {section.description ? (
              <p className="mb-8 text-base leading-7 text-white/74">{section.description}</p>
            ) : null}
            <div className="space-y-6">
              {section.items.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="rounded-md bg-[var(--example-accent)] p-3 text-[var(--example-accent-contrast)]">
                    <ExampleIcon icon={item.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-2 [font-family:var(--example-font-display)] text-xl font-bold uppercase">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-white/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </TemplateSection>
    );
  }

  if (resolvedVariant === "premium-proof") {
    return (
      <TemplateSection>
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div className="relative">
            {section.image ? (
              <div className="overflow-hidden rounded-[var(--example-radius-panel)] bg-[var(--example-surface-strong)]">
                <div className="aspect-[4/5]">
                  <ExampleImage src={section.image.src} alt={section.image.alt} />
                </div>
              </div>
            ) : null}
            {section.stat ? (
              <div
                className="mt-6 max-w-xs rounded-[var(--example-radius-panel)] bg-[var(--example-primary)] p-8 text-[var(--example-primary-contrast)] md:absolute md:right-[-2rem] md:bottom-[-2rem] md:mt-0"
                style={{ boxShadow: "var(--example-shadow-strong)" }}
              >
                <p className="[font-family:var(--example-font-display)] text-5xl font-semibold">
                  {section.stat.value}
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.24em] text-white/62">
                  {section.stat.label}
                </p>
                {section.stat.detail ? (
                  <p className="mt-4 text-sm leading-6 text-white/74">{section.stat.detail}</p>
                ) : null}
              </div>
            ) : null}
          </div>
          <div>
            <SectionEyebrow>{section.eyebrow}</SectionEyebrow>
            <h2 className="mb-6 [font-family:var(--example-font-display)] text-4xl leading-tight font-semibold text-[var(--example-text)] md:text-5xl">
              {section.title}
            </h2>
            {section.description ? (
              <p className="mb-8 max-w-xl text-base leading-7 text-[var(--example-muted)]">
                {section.description}
              </p>
            ) : null}
            <div className="space-y-8">
              {section.items.map((item, index) => (
                <div key={item.title} className="flex gap-5">
                  <span className="min-w-10 [font-family:var(--example-font-display)] text-3xl text-[var(--example-muted)] opacity-35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="mb-2 [font-family:var(--example-font-display)] text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-[var(--example-muted)]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </TemplateSection>
    );
  }

  if (resolvedVariant === "contrast-proof") {
    return (
      <TemplateSection className="bg-[var(--example-primary)] text-[var(--example-primary-contrast)]">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <SectionEyebrow className="text-white/60">{section.eyebrow}</SectionEyebrow>
            <h2 className="mb-8 [font-family:var(--example-font-display)] text-5xl leading-[0.92] font-black uppercase md:text-6xl">
              {section.title}
            </h2>
            {section.description ? (
              <p className="mb-10 max-w-xl text-base leading-7 text-white/72">{section.description}</p>
            ) : null}
            <div className="space-y-8">
              {section.items.map((item) => (
                <div key={item.title} className="flex gap-5">
                  <ExampleIcon icon={item.icon} className="mt-1 h-7 w-7 text-[var(--example-accent-soft)]" />
                  <div>
                    <h3 className="mb-2 [font-family:var(--example-font-display)] text-2xl font-bold uppercase">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-white/68">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {section.image ? (
            <div className="relative rounded-[var(--example-radius-panel)] border border-white/10 bg-white/6 p-3 backdrop-blur-sm">
              <ExampleImage src={section.image.src} alt={section.image.alt} className="grayscale" />
            </div>
          ) : null}
        </div>
      </TemplateSection>
    );
  }

  return (
    <TemplateSection className="bg-[var(--example-surface)]">
      <div className="grid gap-14 md:grid-cols-2 md:items-center">
        {section.image ? (
          <div className="relative">
            <div className="overflow-hidden rounded-[var(--example-radius-panel)] bg-[var(--example-surface-strong)]">
              <div className="aspect-[4/5]">
                <ExampleImage src={section.image.src} alt={section.image.alt} />
              </div>
            </div>
            {section.stat ? (
              <SurfaceCard
                emphasis="strong"
                className="mt-6 max-w-xs md:absolute md:right-[-2rem] md:bottom-[-2rem] md:mt-0"
              >
                <p className="[font-family:var(--example-font-display)] text-4xl font-semibold text-[var(--example-primary)]">
                  {section.stat.value}
                </p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--example-muted)]">
                  {section.stat.label}
                </p>
                {section.stat.detail ? (
                  <p className="mt-4 text-sm leading-7 text-[var(--example-muted)]">{section.stat.detail}</p>
                ) : null}
              </SurfaceCard>
            ) : null}
          </div>
        ) : null}
        <div>
          <SectionEyebrow>{section.eyebrow}</SectionEyebrow>
          <h2 className="mb-6 [font-family:var(--example-font-display)] text-4xl leading-tight font-semibold text-[var(--example-text)] md:text-5xl">
            {section.title}
          </h2>
          {section.description ? (
            <p className="mb-8 max-w-xl text-base leading-7 text-[var(--example-muted)]">{section.description}</p>
          ) : null}
          <div className="space-y-6">
            {section.items.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="rounded-full bg-[var(--example-surface-strong)] p-3">
                  <ExampleIcon icon={item.icon} className="h-5 w-5 text-[var(--example-primary)]" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-[var(--example-text)]">{item.title}</h3>
                  <p className="text-sm leading-7 text-[var(--example-muted)]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TemplateSection>
  );
}

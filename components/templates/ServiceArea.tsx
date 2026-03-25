import {
  ExampleImage,
  SectionEyebrow,
  SectionHeading,
  SurfaceCard,
  TemplateSection,
} from "@/components/templates/template-shared";
import type {
  ExampleServiceAreaSection,
  ExampleServiceAreaVariant,
  ExampleThemeFamily,
} from "@/lib/examples";

export function ServiceArea({
  serviceArea,
  family,
  variant,
}: {
  serviceArea: ExampleServiceAreaSection;
  family: ExampleThemeFamily;
  variant?: ExampleServiceAreaVariant;
}) {
  const resolvedVariant =
    variant ??
    ({
      "warm-editorial": "chip-list",
      "bold-trust": "coverage-list",
      "premium-professional": "office-grid",
      "energetic-performance": "map-split",
    } satisfies Record<ExampleThemeFamily, ExampleServiceAreaVariant>)[family];

  if (resolvedVariant === "coverage-list") {
    return (
      <TemplateSection className="bg-[var(--example-background)]">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-center">
          <div>
            <SectionEyebrow>{serviceArea.eyebrow}</SectionEyebrow>
            <SectionHeading title={serviceArea.title} description={serviceArea.description} />
            <div className="space-y-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--example-text)]">
              {serviceArea.areas.map((area) => (
                <div key={area} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[var(--example-accent)]" />
                  {area}
                </div>
              ))}
            </div>
          </div>
          {serviceArea.mapImage ? (
            <div className="overflow-hidden rounded-[var(--example-radius-panel)] bg-[var(--example-surface)] grayscale">
              <div className="aspect-[16/10]">
                <ExampleImage src={serviceArea.mapImage.src} alt={serviceArea.mapImage.alt} className="opacity-70" />
              </div>
            </div>
          ) : null}
        </div>
      </TemplateSection>
    );
  }

  if (resolvedVariant === "office-grid") {
    return (
      <TemplateSection>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <SectionEyebrow>{serviceArea.eyebrow}</SectionEyebrow>
            <SectionHeading title={serviceArea.title} description={serviceArea.description} />
            <div className="grid grid-cols-2 gap-6">
              {serviceArea.areas.map((area) => (
                <div key={area}>
                  <h3 className="[font-family:var(--example-font-display)] text-lg font-semibold text-[var(--example-text)]">
                    {area}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          {serviceArea.mapImage ? (
            <div className="overflow-hidden rounded-[var(--example-radius-panel)] bg-[var(--example-surface)]">
              <div className="aspect-[5/4]">
                <ExampleImage src={serviceArea.mapImage.src} alt={serviceArea.mapImage.alt} className="grayscale" />
              </div>
            </div>
          ) : null}
        </div>
      </TemplateSection>
    );
  }

  if (resolvedVariant === "map-split") {
    return (
      <TemplateSection className="bg-[var(--example-surface)]">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <SectionEyebrow>{serviceArea.eyebrow}</SectionEyebrow>
            <SectionHeading title={serviceArea.title} description={serviceArea.description} />
            <div className="grid grid-cols-2 gap-4">
              {serviceArea.areas.map((area) => (
                <SurfaceCard key={area} emphasis="default" className="p-4">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--example-text)]">
                    {area}
                  </p>
                </SurfaceCard>
              ))}
            </div>
          </div>
          {serviceArea.mapImage ? (
            <div className="overflow-hidden rounded-[var(--example-radius-panel)] bg-[var(--example-surface-strong)]">
              <div className="aspect-square">
                <ExampleImage src={serviceArea.mapImage.src} alt={serviceArea.mapImage.alt} />
              </div>
            </div>
          ) : null}
        </div>
      </TemplateSection>
    );
  }

  return (
    <TemplateSection className="bg-[var(--example-surface)]">
      <div className="flex flex-col gap-8 border-b border-[var(--example-border)] pb-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <SectionEyebrow>{serviceArea.eyebrow}</SectionEyebrow>
          <SectionHeading title={serviceArea.title} description={serviceArea.description} />
        </div>
        <div className="flex flex-wrap gap-3">
          {serviceArea.areas.map((area) => (
            <span
              key={area}
              className="rounded-[var(--example-radius-pill)] bg-[var(--example-surface-strong)] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--example-primary)]"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </TemplateSection>
  );
}

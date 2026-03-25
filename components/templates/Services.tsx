import {
  ExampleIcon,
  ExampleImage,
  SectionEyebrow,
  SectionHeading,
  SurfaceCard,
  TemplateSection,
} from "@/components/templates/template-shared";
import type { ExampleServicesSection, ExampleServicesVariant } from "@/lib/examples";

export function Services({
  services,
  variant,
}: {
  services: ExampleServicesSection;
  variant: ExampleServicesVariant;
}) {
  if (variant === "compact-grid") {
    return (
      <TemplateSection id="services">
        <SectionEyebrow>{services.eyebrow}</SectionEyebrow>
        <SectionHeading title={services.title} description={services.description} />
        <div className="grid gap-5 md:grid-cols-3">
          {services.items.map((item) => (
            <SurfaceCard key={item.title} className="h-full">
              <ExampleIcon icon={item.icon} className="mb-5 h-8 w-8 text-[var(--example-accent)]" />
              <h3 className="mb-3 [font-family:var(--example-font-display)] text-2xl font-bold text-[var(--example-text)]">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-[var(--example-muted)]">{item.description}</p>
            </SurfaceCard>
          ))}
        </div>
      </TemplateSection>
    );
  }

  if (variant === "structured-columns") {
    return (
      <TemplateSection id="services" className="bg-[var(--example-surface)]">
        <div className="mb-14 grid gap-6 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] md:items-end">
          <div>
            <SectionEyebrow>{services.eyebrow}</SectionEyebrow>
            <SectionHeading title={services.title} />
          </div>
          {services.description ? (
            <p className="max-w-2xl text-base leading-7 text-[var(--example-muted)] md:justify-self-end">
              {services.description}
            </p>
          ) : null}
        </div>
        <div className="grid gap-0 border-y border-[var(--example-border)] md:grid-cols-3">
          {services.items.map((item, index) => (
            <article
              key={item.title}
              className="border-b border-[var(--example-border)] py-8 md:border-b-0 md:px-8 md:py-10"
              style={{
                borderRight:
                  index < services.items.length - 1 ? "1px solid var(--example-border)" : undefined,
              }}
            >
              {item.image ? (
                <div className="mb-6 aspect-[4/3] overflow-hidden rounded-[calc(var(--example-radius-panel)-0.5rem)] bg-[var(--example-surface-strong)]">
                  <ExampleImage src={item.image.src} alt={item.image.alt} />
                </div>
              ) : null}
              <ExampleIcon icon={item.icon} className="mb-5 h-8 w-8 text-[var(--example-primary)]" />
              <h3 className="mb-3 [font-family:var(--example-font-display)] text-2xl font-semibold text-[var(--example-text)]">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-[var(--example-muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </TemplateSection>
    );
  }

  if (variant === "image-cards") {
    return (
      <TemplateSection id="services">
        <SectionEyebrow>{services.eyebrow}</SectionEyebrow>
        <SectionHeading title={services.title} description={services.description} />
        <div className="grid gap-6 md:grid-cols-3">
          {services.items.map((item, index) => (
            <article
              key={item.title}
              className={index === 1 ? "md:translate-y-8" : undefined}
            >
              <div className="group relative overflow-hidden rounded-[var(--example-radius-panel)] bg-[var(--example-surface-strong)]">
                <div className="aspect-[4/5]">
                  {item.image ? (
                    <ExampleImage
                      src={item.image.src}
                      alt={item.image.alt}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-[var(--example-surface-strong)]" />
                  )}
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.84))]" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="mb-2 [font-family:var(--example-font-display)] text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/74">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </TemplateSection>
    );
  }

  const [featured, ...secondary] = services.items;

  return (
    <TemplateSection id="services" className="bg-[var(--example-surface)]">
      <SectionEyebrow className="text-center">{services.eyebrow}</SectionEyebrow>
      <SectionHeading title={services.title} description={services.description} align="center" />
      <div className="grid gap-6 md:grid-cols-12">
        {featured ? (
          <SurfaceCard className="md:col-span-7 md:min-h-[24rem]" emphasis="default">
            <ExampleIcon icon={featured.icon} className="mb-6 h-8 w-8 text-[var(--example-primary)]" />
            <h3 className="mb-4 [font-family:var(--example-font-display)] text-3xl font-semibold text-[var(--example-text)]">
              {featured.title}
            </h3>
            <p className="max-w-xl text-base leading-8 text-[var(--example-muted)]">
              {featured.description}
            </p>
          </SurfaceCard>
        ) : null}
        <div className="grid gap-6 md:col-span-5">
          {secondary.map((item, index) => (
            <SurfaceCard
              key={item.title}
              emphasis={index === 0 ? "accent" : "strong"}
              className="h-full"
            >
              <ExampleIcon icon={item.icon} className="mb-5 h-7 w-7 text-[var(--example-primary)]" />
              <h3 className="mb-3 [font-family:var(--example-font-display)] text-2xl font-semibold text-[var(--example-text)]">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-[var(--example-muted)]">{item.description}</p>
            </SurfaceCard>
          ))}
        </div>
      </div>
    </TemplateSection>
  );
}

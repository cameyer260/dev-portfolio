import {
  ExampleIcon,
  ExampleImage,
  SectionEyebrow,
  SectionHeading,
  SurfaceCard,
  TemplateSection,
} from "@/components/templates/template-shared";
import type { ExampleTestimonialsSection, ExampleTestimonialsVariant } from "@/lib/examples";

export function Testimonials({
  testimonials,
  variant,
}: {
  testimonials: ExampleTestimonialsSection;
  variant: ExampleTestimonialsVariant;
}) {
  if (variant === "review-grid") {
    return (
      <TemplateSection>
        <SectionEyebrow>{testimonials.eyebrow}</SectionEyebrow>
        <SectionHeading title={testimonials.title ?? "Trusted by Local Clients"} description={testimonials.description} />
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.items.map((item) => (
            <SurfaceCard key={item.name} className="border-l-4 border-l-[var(--example-accent)]">
              <div className="mb-4 flex gap-1 text-[var(--example-accent)]">
                {Array.from({ length: item.rating ?? 5 }).map((_, index) => (
                  <ExampleIcon key={index} icon="star" className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mb-6 text-base leading-8 text-[var(--example-text)]">“{item.quote}”</p>
              <div>
                <p className="font-semibold text-[var(--example-text)]">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--example-muted)]">
                  {[item.role, item.location].filter(Boolean).join(" • ")}
                </p>
              </div>
            </SurfaceCard>
          ))}
        </div>
      </TemplateSection>
    );
  }

  if (variant === "premium-quotes") {
    return (
      <TemplateSection className="bg-[var(--example-surface)]">
        <SectionEyebrow className="text-center">{testimonials.eyebrow}</SectionEyebrow>
        <SectionHeading
          title={testimonials.title ?? "Unwavering Trust"}
          description={testimonials.description}
          align="center"
        />
        <div className="grid gap-10 md:grid-cols-2">
          {testimonials.items.map((item) => (
            <article key={item.name} className="relative">
              <ExampleIcon icon="quote" className="absolute top-0 left-0 h-10 w-10 text-[color-mix(in_srgb,var(--example-muted)_28%,transparent)]" />
              <div className="pl-6">
                <p className="[font-family:var(--example-font-display)] text-2xl leading-10 text-[var(--example-muted)] italic">
                  “{item.quote}”
                </p>
                <div className="mt-8 flex items-center gap-4">
                  {item.image ? (
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-[var(--example-surface-strong)]">
                      <ExampleImage src={item.image.src} alt={item.image.alt} />
                    </div>
                  ) : null}
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--example-text)]">
                      {item.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.12em] text-[var(--example-muted)]">
                      {[item.role, item.location].filter(Boolean).join(" • ")}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </TemplateSection>
    );
  }

  if (variant === "results-grid") {
    return (
      <TemplateSection className="bg-[var(--example-surface)]">
        <SectionEyebrow className="text-center">{testimonials.eyebrow}</SectionEyebrow>
        <SectionHeading
          title={testimonials.title ?? "Proof in Every Project"}
          description={testimonials.description}
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.items.map((item) => (
            <SurfaceCard key={item.name} className="h-full">
              <div className="mb-5 flex gap-1 text-[var(--example-accent)]">
                {Array.from({ length: item.rating ?? 5 }).map((_, index) => (
                  <ExampleIcon key={index} icon="star" className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mb-6 text-base leading-8 text-[var(--example-text)]">“{item.quote}”</p>
              <div className="border-t border-[var(--example-border)] pt-5">
                <p className="[font-family:var(--example-font-display)] text-lg font-semibold text-[var(--example-text)]">
                  {item.name}
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--example-muted)]">
                  {[item.role, item.location].filter(Boolean).join(" • ")}
                </p>
              </div>
            </SurfaceCard>
          ))}
        </div>
      </TemplateSection>
    );
  }

  const [featured, ...rest] = testimonials.items;

  return (
    <TemplateSection>
      <div className="mx-auto max-w-3xl text-center">
        <ExampleIcon icon="quote" className="mx-auto mb-6 h-10 w-10 text-[var(--example-accent)]" />
        <p className="[font-family:var(--example-font-display)] text-3xl leading-snug text-[var(--example-text)] md:text-4xl">
          “{featured?.quote ?? "This team made the process simple from the first call to the final result."}”
        </p>
        {featured ? (
          <div className="mt-8 flex items-center justify-center gap-4">
            {featured.image ? (
              <div className="h-12 w-12 overflow-hidden rounded-full bg-[var(--example-surface-strong)]">
                <ExampleImage src={featured.image.src} alt={featured.image.alt} />
              </div>
            ) : null}
            <div className="text-left">
              <p className="font-semibold text-[var(--example-text)]">{featured.name}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--example-muted)]">
                {[featured.role, featured.location].filter(Boolean).join(" • ")}
              </p>
            </div>
          </div>
        ) : null}
      </div>
      {rest.length ? (
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {rest.map((item) => (
            <SurfaceCard key={item.name} emphasis="strong">
              <p className="text-base leading-8 text-[var(--example-text)]">“{item.quote}”</p>
              <p className="mt-5 text-sm font-semibold text-[var(--example-text)]">{item.name}</p>
            </SurfaceCard>
          ))}
        </div>
      ) : null}
    </TemplateSection>
  );
}

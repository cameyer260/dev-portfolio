import {
  SectionEyebrow,
  SurfaceCard,
  TemplateButton,
  TemplateSection,
} from "@/components/templates/template-shared";
import type { ExampleContactSection as ExampleContactSectionData, ExampleContactVariant } from "@/lib/examples";

function ExampleForm({ fields }: Pick<ExampleContactSectionData, "fields">) {
  return (
    <form className="space-y-5">
      {fields.map((field) => {
        if (field.type === "textarea") {
          return (
            <label key={field.name} className="block space-y-2">
              <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--example-muted)]">
                {field.label}
              </span>
              <textarea
                rows={4}
                placeholder={field.placeholder}
                className="w-full rounded-[var(--example-radius-input)] border border-[var(--example-border)] bg-[var(--example-background)] px-4 py-3 text-sm outline-none"
              />
            </label>
          );
        }

        if (field.type === "select") {
          return (
            <label key={field.name} className="block space-y-2">
              <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--example-muted)]">
                {field.label}
              </span>
              <select className="w-full rounded-[var(--example-radius-input)] border border-[var(--example-border)] bg-[var(--example-background)] px-4 py-3 text-sm outline-none">
                {field.options?.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          );
        }

        return (
          <label key={field.name} className="block space-y-2">
            <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--example-muted)]">
              {field.label}
            </span>
            <input
              type={field.type ?? "text"}
              placeholder={field.placeholder}
              className="w-full rounded-[var(--example-radius-input)] border border-[var(--example-border)] bg-[var(--example-background)] px-4 py-3 text-sm outline-none"
            />
          </label>
        );
      })}
    </form>
  );
}

export function ContactSection({
  section,
  variant,
}: {
  section: ExampleContactSectionData;
  variant: ExampleContactVariant;
}) {
  if (variant === "trust-card") {
    return (
      <TemplateSection id="contact" className="bg-[var(--example-background)]">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <SectionEyebrow>{section.eyebrow}</SectionEyebrow>
            <h2 className="mb-5 [font-family:var(--example-font-display)] text-4xl font-black uppercase text-[var(--example-text)] md:text-5xl">
              {section.title}
            </h2>
            {section.description ? (
              <p className="mb-8 max-w-lg text-base leading-7 text-[var(--example-muted)]">{section.description}</p>
            ) : null}
            <p className="[font-family:var(--example-font-display)] text-3xl font-semibold text-[var(--example-primary)]">
              {section.phone}
            </p>
            {section.address ? (
              <p className="mt-4 text-sm leading-7 text-[var(--example-muted)]">{section.address}</p>
            ) : null}
          </div>
          <SurfaceCard className="bg-white">
            <h3 className="mb-5 [font-family:var(--example-font-display)] text-2xl font-bold">
              {section.primaryCta?.label ?? "Request Service"}
            </h3>
            <ExampleForm fields={section.fields} />
            <TemplateButton
              action={{
                label: section.primaryCta?.label ?? "Submit Request",
                href: section.primaryCta?.href ?? "#",
                tone: "accent",
              }}
              className="mt-6 w-full justify-center font-black uppercase"
            />
          </SurfaceCard>
        </div>
      </TemplateSection>
    );
  }

  if (variant === "premium-form") {
    return (
      <TemplateSection id="contact" className="bg-[var(--example-surface)]">
        <div className="grid gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <SectionEyebrow>{section.eyebrow}</SectionEyebrow>
            <h2 className="mb-5 [font-family:var(--example-font-display)] text-4xl font-semibold text-[var(--example-text)] md:text-5xl">
              {section.title}
            </h2>
            {section.description ? (
              <p className="mb-8 max-w-md text-base leading-7 text-[var(--example-muted)]">{section.description}</p>
            ) : null}
            <a
              href={`tel:${section.phone.replace(/[^\d+]/g, "")}`}
              className="inline-flex rounded-[var(--example-radius-pill)] bg-[var(--example-primary)] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[var(--example-primary-contrast)]"
            >
              {section.phone}
            </a>
          </div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-7 md:grid-cols-2">
            {section.fields.map((field) => (
              <label
                key={field.name}
                className={field.type === "textarea" || field.type === "select" ? "md:col-span-2" : ""}
              >
                <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--example-muted)]">
                  {field.label}
                </span>
                {field.type === "textarea" ? (
                  <textarea
                    rows={4}
                    placeholder={field.placeholder}
                    className="w-full border-b border-[var(--example-border)] bg-transparent px-0 py-3 text-sm outline-none"
                  />
                ) : field.type === "select" ? (
                  <select className="w-full border-b border-[var(--example-border)] bg-transparent px-0 py-3 text-sm outline-none">
                    {field.options?.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type ?? "text"}
                    placeholder={field.placeholder}
                    className="w-full border-b border-[var(--example-border)] bg-transparent px-0 py-3 text-sm outline-none"
                  />
                )}
              </label>
            ))}
            <div className="md:col-span-2">
              <TemplateButton
                action={{
                  label: section.primaryCta?.label ?? "Submit Inquiry",
                  href: section.primaryCta?.href ?? "#",
                  tone: "primary",
                }}
                className="w-full justify-center"
              />
            </div>
          </div>
        </div>
      </TemplateSection>
    );
  }

  if (variant === "energetic-split") {
    return (
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="grid h-full grid-cols-1 md:grid-cols-2">
            <div className="bg-[var(--example-surface)]" />
            <div className="bg-[var(--example-accent)]" />
          </div>
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-0 md:grid-cols-2">
          <div className="px-5 py-18 md:px-10 md:py-24">
            <SectionEyebrow>{section.eyebrow}</SectionEyebrow>
            <h2 className="mb-5 [font-family:var(--example-font-display)] text-4xl font-black uppercase text-[var(--example-text)] md:text-5xl">
              {section.title}
            </h2>
            {section.description ? (
              <p className="mb-8 max-w-lg text-base leading-7 text-[var(--example-muted)]">{section.description}</p>
            ) : null}
            {section.address ? (
              <p className="text-sm leading-7 text-[var(--example-muted)]">{section.address}</p>
            ) : null}
          </div>
          <div className="px-5 py-18 text-[var(--example-accent-contrast)] md:px-10 md:py-24">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-white/70">Direct line</p>
            <a
              href={`tel:${section.phone.replace(/[^\d+]/g, "")}`}
              className="[font-family:var(--example-font-display)] text-4xl font-black uppercase text-white md:text-5xl"
            >
              {section.phone}
            </a>
            <div className="mt-8 space-y-5">
              <ExampleForm fields={section.fields} />
              <TemplateButton
                action={{
                  label: section.primaryCta?.label ?? "Send Request",
                  href: section.primaryCta?.href ?? "#",
                  tone: "primary",
                }}
                className="w-full justify-center bg-[var(--example-primary)] text-[var(--example-primary-contrast)]"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <TemplateSection id="contact">
      <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <SectionEyebrow>{section.eyebrow}</SectionEyebrow>
          <h2 className="mb-5 [font-family:var(--example-font-display)] text-4xl font-semibold text-[var(--example-text)] md:text-5xl">
            {section.title}
          </h2>
          {section.description ? (
            <p className="mb-8 max-w-lg text-base leading-7 text-[var(--example-muted)]">{section.description}</p>
          ) : null}
          <p className="[font-family:var(--example-font-display)] text-3xl font-semibold text-[var(--example-primary)]">
            {section.phone}
          </p>
          {section.address ? (
            <p className="mt-4 text-sm leading-7 text-[var(--example-muted)]">{section.address}</p>
          ) : null}
        </div>
        <SurfaceCard emphasis="default">
          <ExampleForm fields={section.fields} />
          <TemplateButton
            action={{
              label: section.primaryCta?.label ?? "Send Message",
              href: section.primaryCta?.href ?? "#",
              tone: "primary",
            }}
            className="mt-6 w-full justify-center"
          />
        </SurfaceCard>
      </div>
    </TemplateSection>
  );
}

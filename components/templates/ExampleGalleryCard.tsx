import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  ExampleImage,
  ThemeStyleVariables,
} from "@/components/templates/template-shared";
import { exampleThemes, type ExampleLandingPage } from "@/lib/examples";

export function ExampleGalleryCard({ page }: { page: ExampleLandingPage }) {
  const theme = exampleThemes[page.themeFamily];

  return (
    <ThemeStyleVariables theme={theme}>
      <article
        className="flex h-full flex-col overflow-hidden rounded-[var(--example-radius-panel)] border border-[var(--example-border)] bg-[var(--example-background)]"
        style={{ boxShadow: "var(--example-shadow-soft)" }}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--example-surface)]">
          {page.hero.image ? (
            <ExampleImage src={page.hero.image.src} alt={page.hero.image.alt} className="scale-[1.01]" />
          ) : null}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(12, 12, 12, 0.08) 0%, color-mix(in srgb, var(--example-primary) 78%, black) 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 p-5 text-[var(--example-primary-contrast)] md:p-6">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-[var(--example-radius-pill)] bg-black/28 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur-sm">
                {theme.label}
              </span>
              <span className="rounded-[var(--example-radius-pill)] bg-black/28 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur-sm">
                {page.industry}
              </span>
            </div>
            <h3 className="mt-4 max-w-[16ch] text-[2rem] leading-[0.98] [font-family:var(--example-font-display)] font-semibold tracking-tight md:text-4xl">
              {page.businessName}
            </h3>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col space-y-4 p-5 md:p-6">
          <p className="text-sm leading-7 text-[var(--example-muted)]">
            {page.hero.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {page.services.items.slice(0, 3).map((service) => (
              <span
                key={service.title}
                className="rounded-[var(--example-radius-pill)] bg-[var(--example-surface)] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--example-text)]"
              >
                {service.title}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-4 border-t border-[var(--example-border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--example-muted)]">
                Primary action
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--example-text)]">{page.ctaText}</p>
            </div>
            <Link
              href={`/examples/${page.slug}`}
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-[var(--example-radius-pill)] bg-[var(--example-primary)] px-5 py-3 text-sm font-semibold tracking-[0.06em] text-[var(--example-primary-contrast)] transition-opacity hover:opacity-92"
            >
              See Example
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
    </ThemeStyleVariables>
  );
}

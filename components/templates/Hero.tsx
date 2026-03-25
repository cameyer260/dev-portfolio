import { ExampleImage, SurfaceCard, TemplateButton } from "@/components/templates/template-shared";
import type { ExampleHeroSection, ExampleHeroVariant } from "@/lib/examples";
import { cn } from "@/lib/utils";

type HeroProps = {
  hero: ExampleHeroSection;
  variant: ExampleHeroVariant;
};

export function Hero({ hero, variant }: HeroProps) {
  if (variant === "trust-split") {
    return (
      <section className="relative overflow-hidden bg-[var(--example-primary)] px-5 py-16 text-[var(--example-primary-contrast)] md:px-8 md:py-24">
        {hero.image ? (
          <>
            <div className="absolute inset-0 opacity-20">
              <ExampleImage src={hero.image.src} alt={hero.image.alt} />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--example-hero-overlay-from),var(--example-hero-overlay-to))]" />
          </>
        ) : null}
        <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,1fr)_380px] md:items-center">
          <div className="max-w-2xl">
            {hero.eyebrow ? (
              <span className="mb-5 inline-flex rounded-full bg-[var(--example-accent)] px-4 py-1 text-xs font-black uppercase tracking-[0.22em] text-[var(--example-accent-contrast)]">
                {hero.eyebrow}
              </span>
            ) : null}
            <h1 className="max-w-4xl [font-family:var(--example-font-display)] text-5xl leading-[0.92] font-black tracking-tight md:text-7xl">
              {hero.title}
              {hero.highlight ? (
                <span className="block text-[var(--example-accent-soft)]">{hero.highlight}</span>
              ) : null}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/76">{hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <TemplateButton
                action={{ ...hero.primaryCta, tone: hero.primaryCta.tone ?? "accent" }}
                className="font-black uppercase"
              />
              {hero.secondaryCta ? (
                <TemplateButton
                  action={{ ...hero.secondaryCta, tone: hero.secondaryCta.tone ?? "secondary" }}
                  className="border-white/20 text-white hover:bg-white/10"
                />
              ) : null}
            </div>
          </div>
          <SurfaceCard className="bg-white text-[var(--example-text)]" emphasis="default">
            <h2 className="mb-5 [font-family:var(--example-font-display)] text-2xl font-bold">
              {hero.formTitle ?? hero.primaryCta.label}
            </h2>
            <div className="space-y-4">
              {hero.formFields?.map((field) =>
                field.type === "select" ? (
                  <label key={field.name} className="block space-y-2">
                    <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-[var(--example-muted)]">
                      {field.label}
                    </span>
                    <select className="w-full rounded-[var(--example-radius-input)] border border-[var(--example-border)] bg-[var(--example-background)] px-4 py-3 text-sm font-medium">
                      {field.options?.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </label>
                ) : (
                  <label key={field.name} className="block space-y-2">
                    <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-[var(--example-muted)]">
                      {field.label}
                    </span>
                    <input
                      type={field.type ?? "text"}
                      placeholder={field.placeholder}
                      className="w-full rounded-[var(--example-radius-input)] border border-[var(--example-border)] bg-[var(--example-background)] px-4 py-3 text-sm"
                    />
                  </label>
                ),
              )}
              <TemplateButton
                action={{ ...hero.primaryCta, tone: "accent" }}
                className="mt-2 w-full justify-center font-black uppercase"
              />
            </div>
          </SurfaceCard>
        </div>
      </section>
    );
  }

  if (variant === "premium-image") {
    return (
      <section className="relative overflow-hidden px-5 py-18 md:px-8 md:py-24">
        {hero.image ? (
          <div className="absolute inset-0">
            <ExampleImage src={hero.image.src} alt={hero.image.alt} className="brightness-[0.85]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--example-hero-overlay-from),var(--example-hero-overlay-to))]" />
          </div>
        ) : null}
        <div className="relative mx-auto max-w-6xl py-14 md:py-22">
          <div className="max-w-3xl">
            {hero.eyebrow ? (
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[var(--example-muted)]">
                {hero.eyebrow}
              </p>
            ) : null}
            <h1 className="max-w-4xl [font-family:var(--example-font-display)] text-5xl leading-[1.03] font-semibold tracking-tight text-[var(--example-text)] md:text-7xl">
              {hero.title}
              {hero.highlight ? (
                <span className="italic font-normal"> {hero.highlight}</span>
              ) : null}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--example-muted)]">
              {hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <TemplateButton action={{ ...hero.primaryCta, tone: hero.primaryCta.tone ?? "primary" }} />
              {hero.secondaryCta ? (
                <TemplateButton
                  action={{ ...hero.secondaryCta, tone: hero.secondaryCta.tone ?? "secondary" }}
                />
              ) : null}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "energetic-impact") {
    return (
      <section className="relative overflow-hidden bg-[var(--example-primary)] px-5 py-18 text-white md:px-8 md:py-24">
        {hero.image ? (
          <>
            <div className="absolute inset-0 opacity-55">
              <ExampleImage src={hero.image.src} alt={hero.image.alt} />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--example-hero-overlay-from),var(--example-hero-overlay-to))]" />
          </>
        ) : null}
        <div className="relative mx-auto max-w-6xl py-14 md:py-24">
          <div className="max-w-3xl">
            {hero.eyebrow ? (
              <span className="mb-5 inline-flex bg-[var(--example-accent)] px-4 py-1 text-xs font-black uppercase tracking-[0.26em] text-[var(--example-accent-contrast)]">
                {hero.eyebrow}
              </span>
            ) : null}
            <h1 className="max-w-4xl [font-family:var(--example-font-display)] text-5xl leading-[0.9] font-black uppercase tracking-tight md:text-8xl">
              {hero.title}
              {hero.highlight ? (
                <span className="text-[var(--example-accent-soft)]"> {hero.highlight}</span>
              ) : null}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <TemplateButton action={{ ...hero.primaryCta, tone: hero.primaryCta.tone ?? "accent" }} />
              {hero.secondaryCta ? (
                <TemplateButton
                  action={{ ...hero.secondaryCta, tone: hero.secondaryCta.tone ?? "secondary" }}
                  className="border-white/20 text-white hover:bg-white/10"
                />
              ) : null}
            </div>
            {hero.badges?.length ? (
              <div className="mt-10 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                {hero.badges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden px-5 py-18 md:px-8 md:py-24">
      {hero.image ? (
        <>
          <div className="absolute inset-0">
            <ExampleImage src={hero.image.src} alt={hero.image.alt} />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--example-hero-overlay-to),var(--example-hero-overlay-from))]" />
        </>
      ) : null}
      <div className="relative mx-auto flex min-h-[36rem] max-w-6xl items-end py-12 md:py-20">
        <div className="max-w-3xl">
          {hero.eyebrow ? (
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-white/72">{hero.eyebrow}</p>
          ) : null}
          <h1 className="max-w-4xl [font-family:var(--example-font-display)] text-5xl leading-[0.95] font-semibold tracking-tight text-white md:text-7xl">
            {hero.title}
            {hero.highlight ? <span className="italic font-normal"> {hero.highlight}</span> : null}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">{hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <TemplateButton
              action={{ ...hero.primaryCta, tone: hero.primaryCta.tone ?? "secondary" }}
              className="border-white/20 bg-white text-[var(--example-text)] hover:bg-white/90"
            />
            {hero.secondaryCta ? (
              <TemplateButton
                action={{ ...hero.secondaryCta, tone: hero.secondaryCta.tone ?? "ghost" }}
                className="text-white hover:bg-white/10"
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

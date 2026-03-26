import type { ReactElement } from "react";
import { MobileCallBar } from "@/components/templates/MobileCallBar";
import {
  ExampleImage,
  SectionEyebrow,
  SurfaceCard,
  TemplateButton,
  ThemeStyleVariables,
} from "@/components/templates/template-shared";
import type { ExampleFeatureItem, ExampleLandingPage } from "@/lib/examples";
import { exampleThemes } from "@/lib/examples";
import { cn } from "@/lib/utils";
import {
  AreaChips,
  ContactBlock,
  ExampleFormFields,
  ExampleHeroActions,
  ExampleSection,
  ExampleStats,
  FeatureRows,
  HighlightQuote,
  PhotoPanel,
  ReviewCards,
  ServicesMosaic,
  StatBadge,
  TrustPoints,
} from "@/components/examples/page-primitives";

type ExamplePageProps = {
  page: ExampleLandingPage;
};

export function ExamplePageRenderer({ page }: ExamplePageProps) {
  const theme = exampleThemes[page.themeFamily];
  const Component = pageRenderers[page.slug] ?? GenericExamplePage;

  return (
    <ThemeStyleVariables theme={theme}>
      <main className="min-h-screen pb-20 md:pb-0">
        <Component page={page} />
        <MobileCallBar phone={page.phone} label={page.ctaText} />
      </main>
    </ThemeStyleVariables>
  );
}

const pageRenderers: Record<string, (props: ExamplePageProps) => ReactElement> = {
  restaurant: RestaurantExamplePage,
  salon: SalonExamplePage,
  "real-estate": RealEstateExamplePage,
  plumber: PlumberExamplePage,
  contractor: ContractorExamplePage,
  "auto-repair": AutoRepairExamplePage,
  accountant: AccountantExamplePage,
  "law-firm": LawFirmExamplePage,
  dentist: DentistExamplePage,
  gym: GymExamplePage,
  landscaping: LandscapingExamplePage,
};

function RestaurantExamplePage({ page }: ExamplePageProps) {
  const [featuredReview, ...moreReviews] = page.testimonials.items;

  return (
    <>
      <section className="px-5 pt-8 pb-12 md:px-8 md:pt-10 md:pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-stretch">
          <div className="flex flex-col justify-end rounded-[var(--example-radius-panel)] bg-[var(--example-primary)] p-8 text-[var(--example-primary-contrast)] md:p-12">
            <SectionEyebrow className="text-white/64">{page.hero.eyebrow}</SectionEyebrow>
            <h1 className="text-5xl leading-[0.96] [font-family:var(--example-font-display)] font-semibold tracking-tight md:text-7xl">
              {page.hero.title}
              {page.hero.highlight ? <span className="block italic font-normal">{page.hero.highlight}</span> : null}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/76">{page.hero.description}</p>
            <ExampleHeroActions hero={page.hero} className="mt-8" tone="inverse" />
            <div className="mt-8 grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center">
              {page.whyChooseUs.stat ? (
                <div className="rounded-[var(--example-radius-panel)] border border-white/12 bg-white/8 px-5 py-4">
                  <p className="text-3xl [font-family:var(--example-font-display)] font-semibold">
                    {page.whyChooseUs.stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white/64">
                    {page.whyChooseUs.stat.label}
                  </p>
                </div>
              ) : null}
              <div className="flex flex-wrap gap-2">
                {page.services.items.map((item) => (
                  <span
                    key={item.title}
                    className="rounded-[var(--example-radius-pill)] border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80"
                  >
                    {item.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-4 md:grid-rows-[minmax(0,1fr)_auto]">
            <PhotoPanel image={page.hero.image} aspect="aspect-[4/5] md:aspect-auto md:h-full" />
            <PhotoPanel
              image={page.whyChooseUs.image}
              aspect="aspect-[5/4]"
              className="md:ml-12"
              imageClassName="object-[50%_38%]"
            />
          </div>
        </div>
      </section>

      <ExampleSection
        id="services"
        eyebrow={page.services.eyebrow}
        title={page.services.title}
        description={page.services.description}
        className="bg-[var(--example-surface)]"
      >
        <ServicesMosaic services={page.services} layout="feature-left" />
      </ExampleSection>

      <ExampleSection
        eyebrow={page.whyChooseUs.eyebrow}
        title={page.whyChooseUs.title}
        description={page.whyChooseUs.description}
      >
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] md:items-start">
          {page.whyChooseUs.stat ? (
            <StatBadge
              value={page.whyChooseUs.stat.value}
              label={page.whyChooseUs.stat.label}
              detail={page.whyChooseUs.stat.detail}
            />
          ) : null}
          <TrustPoints section={page.whyChooseUs} />
        </div>
      </ExampleSection>

      <ExampleSection
        eyebrow={page.testimonials.eyebrow}
        title={page.testimonials.title}
        description={page.testimonials.description}
      >
        <HighlightQuote item={featuredReview} />
        {moreReviews.length ? <div className="mt-6"><ReviewCards items={moreReviews} /></div> : null}
      </ExampleSection>

      <ProcessSection process={page.process?.steps} title={page.process?.title} eyebrow={page.process?.eyebrow} description={page.process?.description} />

      <ExampleSection
        id="service-area"
        eyebrow={page.serviceArea.eyebrow}
        title={page.serviceArea.title}
        description={page.serviceArea.description}
        className="bg-[var(--example-surface)]"
      >
        <AreaChips areas={page.serviceArea.areas} />
      </ExampleSection>

      <ClosingBand page={page} tone="soft" />

      <ExampleSection id="contact" className="bg-[var(--example-background)]">
        <ContactBlock section={page.contact} />
      </ExampleSection>
    </>
  );
}

function SalonExamplePage({ page }: ExamplePageProps) {
  return (
    <>
      <section className="px-5 pt-8 pb-12 md:px-8 md:pt-10 md:pb-18">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="rounded-[var(--example-radius-panel)] bg-[var(--example-surface)] p-8 md:p-12">
            <SectionEyebrow>{page.hero.eyebrow}</SectionEyebrow>
            <h1 className="text-5xl leading-[0.95] [font-family:var(--example-font-display)] font-semibold tracking-tight text-[var(--example-text)] md:text-7xl">
              {page.hero.title}
              {page.hero.highlight ? <span className="block italic font-normal">{page.hero.highlight}</span> : null}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--example-muted)]">{page.hero.description}</p>
            <ExampleHeroActions hero={page.hero} className="mt-8" />
          </div>
          <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
            <PhotoPanel image={page.hero.image} aspect="aspect-[3/4]" />
            <PhotoPanel image={page.whyChooseUs.image} aspect="aspect-[3/4]" className="md:translate-y-10" />
          </div>
        </div>
      </section>

      <ExampleSection
        id="services"
        eyebrow={page.services.eyebrow}
        title={page.services.title}
        description={page.services.description}
      >
        <ServicesMosaic services={page.services} layout="stacked" />
      </ExampleSection>

      <ExampleSection
        eyebrow={page.whyChooseUs.eyebrow}
        title={page.whyChooseUs.title}
        description={page.whyChooseUs.description}
        className="bg-[var(--example-surface)]"
      >
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-start">
          {page.whyChooseUs.stat ? (
            <StatBadge
              value={page.whyChooseUs.stat.value}
              label={page.whyChooseUs.stat.label}
              detail={page.whyChooseUs.stat.detail}
            />
          ) : (
            <SurfaceCard emphasis="accent">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--example-muted)]">Studio feel</p>
              <p className="mt-3 text-2xl [font-family:var(--example-font-display)] font-semibold text-[var(--example-text)]">
                Gallery-led, appointment-first, and built to feel personal.
              </p>
            </SurfaceCard>
          )}
          <TrustPoints section={page.whyChooseUs} />
        </div>
      </ExampleSection>

      <ExampleSection eyebrow={page.testimonials.eyebrow} title={page.testimonials.title} description={page.testimonials.description}>
        <ReviewCards items={page.testimonials.items} />
      </ExampleSection>

      <ProcessSection process={page.process?.steps} title={page.process?.title} eyebrow={page.process?.eyebrow} description={page.process?.description} tone="soft" />

      <ExampleSection id="service-area" eyebrow={page.serviceArea.eyebrow} title={page.serviceArea.title} description={page.serviceArea.description}>
        <AreaChips areas={page.serviceArea.areas} />
      </ExampleSection>

      <ClosingBand page={page} tone="soft" />

      <ExampleSection id="contact" className="bg-[var(--example-surface)]">
        <ContactBlock section={page.contact} />
      </ExampleSection>
    </>
  );
}

function RealEstateExamplePage({ page }: ExamplePageProps) {
  const [featuredReview, ...otherReviews] = page.testimonials.items;

  return (
    <>
      <section className="relative overflow-hidden px-5 py-12 md:px-8 md:py-18">
        <div className="absolute inset-0">
          {page.hero.image ? <ExampleImage src={page.hero.image.src} alt={page.hero.image.alt} className="brightness-[0.82]" /> : null}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--example-hero-overlay-from),var(--example-hero-overlay-to))]" />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl rounded-[var(--example-radius-panel)] bg-[color-mix(in_srgb,var(--example-background)_84%,transparent)] p-8 backdrop-blur-sm md:p-12">
            <SectionEyebrow>{page.hero.eyebrow}</SectionEyebrow>
            <h1 className="text-5xl leading-[0.96] [font-family:var(--example-font-display)] font-semibold tracking-tight text-[var(--example-text)] md:text-7xl">
              {page.hero.title}
              {page.hero.highlight ? <span className="block italic font-normal">{page.hero.highlight}</span> : null}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--example-muted)]">{page.hero.description}</p>
            <ExampleHeroActions hero={page.hero} className="mt-8" />
          </div>
        </div>
      </section>

      <ExampleSection id="services" eyebrow={page.services.eyebrow} title={page.services.title} description={page.services.description}>
        <ServicesMosaic services={page.services} layout="feature-left" />
      </ExampleSection>

      <ExampleSection eyebrow={page.whyChooseUs.eyebrow} title={page.whyChooseUs.title} description={page.whyChooseUs.description} className="bg-[var(--example-surface)]">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <FeatureRows items={page.whyChooseUs.items} />
          <div className="relative">
            <PhotoPanel image={page.whyChooseUs.image} aspect="aspect-[4/5]" />
            {page.whyChooseUs.stat ? (
              <StatBadge
                value={page.whyChooseUs.stat.value}
                label={page.whyChooseUs.stat.label}
                detail={page.whyChooseUs.stat.detail}
                className="mt-5 md:absolute md:left-[-1.5rem] md:bottom-[-1.5rem] md:mt-0"
              />
            ) : null}
          </div>
        </div>
      </ExampleSection>

      <ExampleSection eyebrow={page.testimonials.eyebrow} title={page.testimonials.title} description={page.testimonials.description}>
        <HighlightQuote item={featuredReview} />
        {otherReviews.length ? <div className="mt-6"><ReviewCards items={otherReviews} /></div> : null}
      </ExampleSection>

      <ProcessSection process={page.process?.steps} title={page.process?.title} eyebrow={page.process?.eyebrow} description={page.process?.description} />

      <ExampleSection id="service-area" eyebrow={page.serviceArea.eyebrow} title={page.serviceArea.title} description={page.serviceArea.description} className="bg-[var(--example-surface)]">
        <AreaChips areas={page.serviceArea.areas} />
      </ExampleSection>

      <ClosingBand page={page} tone="minimal" />

      <ExampleSection id="contact">
        <ContactBlock section={page.contact} formMode="underline" cardClassName="bg-transparent" />
      </ExampleSection>
    </>
  );
}

function PlumberExamplePage({ page }: ExamplePageProps) {
  const heroStats = [
    {
      value: "24/7",
      label: "Urgent calls",
      detail: "The first screen makes emergency intent obvious.",
    },
    {
      value: "Phone-first",
      label: "Mobile CTA",
      detail: "Call, submit, and service-area trust stay visible fast.",
    },
    {
      value: "Metro East",
      label: "Nearby coverage",
      detail: "Local service language shows up before the user has to hunt for it.",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--example-primary)] px-5 py-14 text-[var(--example-primary-contrast)] md:px-8 md:py-22">
        <div className="absolute inset-0 opacity-24">
          {page.hero.image ? <ExampleImage src={page.hero.image.src} alt={page.hero.image.alt} /> : null}
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--example-hero-overlay-from),var(--example-hero-overlay-to))]" />
        <div className="relative mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(0,1.05fr)_24rem] md:items-start">
          <div>
            <span className="inline-flex rounded-[var(--example-radius-pill)] bg-[var(--example-accent)] px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-[var(--example-accent-contrast)]">
              {page.hero.eyebrow}
            </span>
            <h1 className="mt-6 text-5xl leading-[0.92] [font-family:var(--example-font-display)] font-black uppercase tracking-tight md:text-7xl">
              {page.hero.title}
              {page.hero.highlight ? <span className="block text-[var(--example-accent-soft)]">{page.hero.highlight}</span> : null}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">{page.hero.description}</p>
            <ExampleHeroActions hero={page.hero} className="mt-8" tone="inverse" />
            <div className="mt-8 max-w-4xl">
              <ExampleStats stats={heroStats} inverse={true} />
            </div>
          </div>
          <div className="rounded-[var(--example-radius-panel)] bg-white p-6 text-[var(--example-text)] shadow-[var(--example-shadow-strong)]">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[var(--example-accent)]">
              Same-day lead capture
            </p>
            <h2 className="text-2xl [font-family:var(--example-font-display)] font-bold">
              {page.hero.formTitle ?? page.hero.primaryCta.label}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--example-muted)]">
              Keep the request short, route the call fast, and make the next step feel immediate.
            </p>
            {page.hero.formFields ? <div className="mt-5"><ExampleFormFields fields={page.hero.formFields} /></div> : null}
            <TemplateButton
              action={{ ...page.hero.primaryCta, tone: "accent" }}
              className="mt-6 w-full justify-center font-black uppercase"
            />
            <div className="mt-5 space-y-2 border-t border-[var(--example-border)] pt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--example-muted)]">
              <p>Emergency repairs, drain cleaning, and water heaters</p>
              <p>Edwardsville, Glen Carbon, Maryville, and nearby towns</p>
            </div>
          </div>
        </div>
      </section>

      <ExampleSection id="services" eyebrow={page.services.eyebrow} title={page.services.title} description={page.services.description}>
        <ServicesMosaic services={page.services} layout="feature-left" />
      </ExampleSection>

      <ExampleSection
        eyebrow={page.whyChooseUs.eyebrow}
        title={page.whyChooseUs.title}
        description={page.whyChooseUs.description}
        className="bg-[var(--example-primary)] text-white"
        tone="inverse"
      >
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center">
          <PhotoPanel image={page.whyChooseUs.image} aspect="aspect-[4/5]" className="border border-white/10" />
          <TrustPoints section={page.whyChooseUs} tone="dark" />
        </div>
      </ExampleSection>

      <ExampleSection eyebrow={page.testimonials.eyebrow} title={page.testimonials.title} description={page.testimonials.description}>
        <ReviewCards items={page.testimonials.items} />
      </ExampleSection>

      <ProcessSection process={page.process?.steps} title={page.process?.title} eyebrow={page.process?.eyebrow} description={page.process?.description} tone="accent" />

      <ExampleSection id="service-area" eyebrow={page.serviceArea.eyebrow} title={page.serviceArea.title} description={page.serviceArea.description}>
        <AreaChips areas={page.serviceArea.areas} />
      </ExampleSection>

      <ClosingBand page={page} tone="accent" />

      <ExampleSection id="contact">
        <ContactBlock section={page.contact} buttonTone="accent" />
      </ExampleSection>
    </>
  );
}

function ContractorExamplePage({ page }: ExamplePageProps) {
  return (
    <>
      <section className="px-5 pt-8 pb-12 md:px-8 md:pt-10 md:pb-18">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <PhotoPanel
            image={page.hero.image}
            aspect="aspect-[4/3] md:aspect-auto md:h-full"
            overlay={
              <div className="flex h-full items-end bg-[linear-gradient(180deg,transparent,var(--example-hero-overlay-from))] p-6 text-white md:p-8">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.22em] text-white/66">{page.hero.eyebrow}</p>
                  <h1 className="mt-3 text-5xl leading-[0.92] [font-family:var(--example-font-display)] font-black uppercase md:text-6xl">
                    {page.hero.title}
                  </h1>
                </div>
              </div>
            }
          />
          <div className="rounded-[var(--example-radius-panel)] bg-[var(--example-primary)] p-8 text-[var(--example-primary-contrast)] md:p-10">
            {page.hero.highlight ? (
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--example-accent-soft)]">
                {page.hero.highlight}
              </p>
            ) : null}
            <p className="text-lg leading-8 text-white/76">{page.hero.description}</p>
            <ExampleHeroActions hero={page.hero} className="mt-8" tone="inverse" />
            <div className="mt-8 rounded-[var(--example-radius-panel)] bg-white/8 p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/62">Project scope</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {page.services.items.map((item) => (
                  <div key={item.title} className="rounded-[var(--example-radius-pill)] border border-white/10 px-4 py-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExampleSection id="services" eyebrow={page.services.eyebrow} title={page.services.title} description={page.services.description} className="bg-[var(--example-surface)]">
        <ServicesMosaic services={page.services} layout="feature-left" />
      </ExampleSection>

      <ExampleSection eyebrow={page.whyChooseUs.eyebrow} title={page.whyChooseUs.title} description={page.whyChooseUs.description}>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <TrustPoints section={page.whyChooseUs} />
          <PhotoPanel image={page.whyChooseUs.image} aspect="aspect-[4/5]" />
        </div>
      </ExampleSection>

      <ExampleSection eyebrow={page.testimonials.eyebrow} title={page.testimonials.title} description={page.testimonials.description}>
        <ReviewCards items={page.testimonials.items} />
      </ExampleSection>

      <ProcessSection process={page.process?.steps} title={page.process?.title} eyebrow={page.process?.eyebrow} description={page.process?.description} tone="dark" />

      <ExampleSection id="service-area" eyebrow={page.serviceArea.eyebrow} title={page.serviceArea.title} description={page.serviceArea.description}>
        <AreaChips areas={page.serviceArea.areas} />
      </ExampleSection>

      <ClosingBand page={page} tone="accent" />

      <ExampleSection id="contact" className="bg-[var(--example-surface)]">
        <ContactBlock section={page.contact} buttonTone="accent" />
      </ExampleSection>
    </>
  );
}

function AutoRepairExamplePage({ page }: ExamplePageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--example-primary)] px-5 py-14 text-[var(--example-primary-contrast)] md:px-8 md:py-20">
        <div className="absolute inset-0 opacity-28">
          {page.hero.image ? <ExampleImage src={page.hero.image.src} alt={page.hero.image.alt} /> : null}
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--example-hero-overlay-from),var(--example-hero-overlay-to))]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-[var(--example-radius-pill)] bg-[var(--example-accent)] px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-[var(--example-accent-contrast)]">
              {page.hero.eyebrow}
            </span>
            <h1 className="mt-6 text-5xl leading-[0.92] [font-family:var(--example-font-display)] font-black uppercase md:text-7xl">
              {page.hero.title}
              {page.hero.highlight ? <span className="block text-[var(--example-accent-soft)]">{page.hero.highlight}</span> : null}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{page.hero.description}</p>
            <ExampleHeroActions hero={page.hero} className="mt-8" tone="inverse" />
          </div>
        </div>
      </section>

      <ExampleSection id="services" eyebrow={page.services.eyebrow} title={page.services.title} description={page.services.description}>
        <ServicesMosaic services={page.services} layout="stacked" />
      </ExampleSection>

      <ExampleSection eyebrow={page.whyChooseUs.eyebrow} title={page.whyChooseUs.title} description={page.whyChooseUs.description} className="bg-[var(--example-surface)]">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center">
          <PhotoPanel image={page.whyChooseUs.image} aspect="aspect-[4/5]" />
          <TrustPoints section={page.whyChooseUs} />
        </div>
      </ExampleSection>

      <ExampleSection eyebrow={page.testimonials.eyebrow} title={page.testimonials.title} description={page.testimonials.description}>
        <ReviewCards items={page.testimonials.items} />
      </ExampleSection>

      <ProcessSection process={page.process?.steps} title={page.process?.title} eyebrow={page.process?.eyebrow} description={page.process?.description} tone="accent" />

      <ExampleSection id="service-area" eyebrow={page.serviceArea.eyebrow} title={page.serviceArea.title} description={page.serviceArea.description}>
        <AreaChips areas={page.serviceArea.areas} />
      </ExampleSection>

      <ClosingBand page={page} tone="accent" />

      <ExampleSection id="contact">
        <ContactBlock section={page.contact} buttonTone="accent" />
      </ExampleSection>
    </>
  );
}

function AccountantExamplePage({ page }: ExamplePageProps) {
  return (
    <>
      <section className="px-5 pt-8 pb-12 md:px-8 md:pt-10 md:pb-18">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(0,1fr)_24rem] md:items-center">
          <div>
            <SectionEyebrow>{page.hero.eyebrow}</SectionEyebrow>
            <h1 className="text-5xl leading-[0.94] [font-family:var(--example-font-display)] font-black uppercase tracking-tight text-[var(--example-text)] md:text-7xl">
              {page.hero.title}
              {page.hero.highlight ? <span className="block text-[var(--example-accent)]">{page.hero.highlight}</span> : null}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--example-muted)]">{page.hero.description}</p>
            <ExampleHeroActions hero={page.hero} className="mt-8" />
          </div>
          <PhotoPanel image={page.hero.image} aspect="aspect-[4/5]" />
        </div>
      </section>

      <ExampleSection id="services" eyebrow={page.services.eyebrow} title={page.services.title} description={page.services.description} className="bg-[var(--example-surface)]">
        <ServicesMosaic services={page.services} />
      </ExampleSection>

      <ExampleSection eyebrow={page.whyChooseUs.eyebrow} title={page.whyChooseUs.title} description={page.whyChooseUs.description}>
        <div className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="space-y-6">
            {page.whyChooseUs.stat ? (
              <StatBadge
                value={page.whyChooseUs.stat.value}
                label={page.whyChooseUs.stat.label}
                detail={page.whyChooseUs.stat.detail}
              />
            ) : null}
            <PhotoPanel image={page.whyChooseUs.image} aspect="aspect-[16/11]" />
          </div>
          <TrustPoints section={page.whyChooseUs} />
        </div>
      </ExampleSection>

      <ExampleSection eyebrow={page.testimonials.eyebrow} title={page.testimonials.title} description={page.testimonials.description}>
        <ReviewCards items={page.testimonials.items} />
      </ExampleSection>

      <ProcessSection process={page.process?.steps} title={page.process?.title} eyebrow={page.process?.eyebrow} description={page.process?.description} />

      <ExampleSection id="service-area" eyebrow={page.serviceArea.eyebrow} title={page.serviceArea.title} description={page.serviceArea.description} className="bg-[var(--example-surface)]">
        <AreaChips areas={page.serviceArea.areas} />
      </ExampleSection>

      <ClosingBand page={page} tone="accent" />

      <ExampleSection id="contact">
        <ContactBlock section={page.contact} />
      </ExampleSection>
    </>
  );
}

function LawFirmExamplePage({ page }: ExamplePageProps) {
  const [featuredReview, ...otherReviews] = page.testimonials.items;

  return (
    <>
      <section className="px-5 pt-8 pb-12 md:px-8 md:pt-10 md:pb-18">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-center">
          <div>
            <SectionEyebrow>{page.hero.eyebrow}</SectionEyebrow>
            <h1 className="text-5xl leading-[1.02] [font-family:var(--example-font-display)] font-semibold tracking-tight text-[var(--example-text)] md:text-7xl">
              {page.hero.title}
              {page.hero.highlight ? <span className="block italic font-normal">{page.hero.highlight}</span> : null}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--example-muted)]">{page.hero.description}</p>
            <ExampleHeroActions hero={page.hero} className="mt-8" />
            {page.whyChooseUs.stat ? (
              <div className="mt-8 max-w-sm rounded-[var(--example-radius-panel)] border border-[var(--example-border)] bg-[var(--example-surface)] px-6 py-5">
                <p className="text-3xl [font-family:var(--example-font-display)] font-semibold text-[var(--example-text)]">
                  {page.whyChooseUs.stat.value}
                </p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--example-muted)]">
                  {page.whyChooseUs.stat.label}
                </p>
              </div>
            ) : null}
          </div>
          <PhotoPanel image={page.hero.image} aspect="aspect-[4/5]" />
        </div>
      </section>

      <ExampleSection id="services" eyebrow={page.services.eyebrow} title={page.services.title} description={page.services.description} className="bg-[var(--example-surface)]">
        <ServicesMosaic services={page.services} layout="feature-left" />
      </ExampleSection>

      <ExampleSection eyebrow={page.whyChooseUs.eyebrow} title={page.whyChooseUs.title} description={page.whyChooseUs.description}>
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center">
          <PhotoPanel image={page.whyChooseUs.image} aspect="aspect-[16/11]" imageClassName="object-[50%_36%]" />
          <FeatureRows items={page.whyChooseUs.items} />
        </div>
      </ExampleSection>

      <ExampleSection eyebrow={page.testimonials.eyebrow} title={page.testimonials.title} description={page.testimonials.description}>
        <HighlightQuote item={featuredReview} />
        {otherReviews.length ? <div className="mt-6 max-w-xl"><ReviewCards items={otherReviews} /></div> : null}
      </ExampleSection>

      <ProcessSection process={page.process?.steps} title={page.process?.title} eyebrow={page.process?.eyebrow} description={page.process?.description} />

      <ExampleSection id="service-area" eyebrow={page.serviceArea.eyebrow} title={page.serviceArea.title} description={page.serviceArea.description} className="bg-[var(--example-surface)]">
        <AreaChips areas={page.serviceArea.areas} />
      </ExampleSection>

      <ClosingBand page={page} tone="minimal" />

      <ExampleSection id="contact">
        <ContactBlock section={page.contact} formMode="underline" cardClassName="bg-transparent" />
      </ExampleSection>
    </>
  );
}

function DentistExamplePage({ page }: ExamplePageProps) {
  return (
    <>
      <section className="px-5 pt-8 pb-12 md:px-8 md:pt-10 md:pb-18">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-center">
          <div className="rounded-[var(--example-radius-panel)] bg-[var(--example-surface)] p-8 md:p-12">
            <SectionEyebrow>{page.hero.eyebrow}</SectionEyebrow>
            <h1 className="text-5xl leading-[1] [font-family:var(--example-font-display)] font-semibold tracking-tight text-[var(--example-text)] md:text-7xl">
              {page.hero.title}
              {page.hero.highlight ? <span className="block italic font-normal">{page.hero.highlight}</span> : null}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--example-muted)]">{page.hero.description}</p>
            <ExampleHeroActions hero={page.hero} className="mt-8" />
          </div>
          <PhotoPanel image={page.hero.image} aspect="aspect-[4/5]" />
        </div>
      </section>

      <ExampleSection id="services" eyebrow={page.services.eyebrow} title={page.services.title} description={page.services.description}>
        <ServicesMosaic services={page.services} />
      </ExampleSection>

      <ExampleSection eyebrow={page.whyChooseUs.eyebrow} title={page.whyChooseUs.title} description={page.whyChooseUs.description} className="bg-[var(--example-surface)]">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-center">
          <TrustPoints section={page.whyChooseUs} />
          <div className="relative">
            <PhotoPanel image={page.whyChooseUs.image} aspect="aspect-[4/5]" />
            {page.whyChooseUs.stat ? (
              <StatBadge
                value={page.whyChooseUs.stat.value}
                label={page.whyChooseUs.stat.label}
                detail={page.whyChooseUs.stat.detail}
                className="mt-5 md:absolute md:left-[-1.5rem] md:bottom-[-1.5rem] md:mt-0"
              />
            ) : null}
          </div>
        </div>
      </ExampleSection>

      <ExampleSection eyebrow={page.testimonials.eyebrow} title={page.testimonials.title} description={page.testimonials.description}>
        <ReviewCards items={page.testimonials.items} />
      </ExampleSection>

      <ProcessSection process={page.process?.steps} title={page.process?.title} eyebrow={page.process?.eyebrow} description={page.process?.description} />

      <ExampleSection id="service-area" eyebrow={page.serviceArea.eyebrow} title={page.serviceArea.title} description={page.serviceArea.description}>
        <AreaChips areas={page.serviceArea.areas} />
      </ExampleSection>

      <ClosingBand page={page} tone="minimal" />

      <ExampleSection id="contact" className="bg-[var(--example-surface)]">
        <ContactBlock section={page.contact} formMode="underline" cardClassName="bg-transparent" />
      </ExampleSection>
    </>
  );
}

function GymExamplePage({ page }: ExamplePageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--example-primary)] px-5 py-14 text-[var(--example-primary-contrast)] md:px-8 md:py-22">
        <div className="absolute inset-0 opacity-36">
          {page.hero.image ? <ExampleImage src={page.hero.image.src} alt={page.hero.image.alt} /> : null}
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--example-hero-overlay-from),var(--example-hero-overlay-to))]" />
        <div className="relative mx-auto max-w-6xl">
          <span className="inline-flex bg-[var(--example-accent)] px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-[var(--example-accent-contrast)]">
            {page.hero.eyebrow}
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl leading-[0.9] [font-family:var(--example-font-display)] font-black uppercase tracking-tight md:text-8xl">
            {page.hero.title}
            {page.hero.highlight ? <span className="text-[var(--example-accent-soft)]"> {page.hero.highlight}</span> : null}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">{page.hero.description}</p>
          <ExampleHeroActions hero={page.hero} className="mt-8" tone="inverse" />
          {page.hero.badges?.length ? (
            <div className="mt-8 flex flex-wrap gap-2">
              {page.hero.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-[var(--example-radius-pill)] border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/84"
                >
                  {badge}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <ExampleSection id="services" eyebrow={page.services.eyebrow} title={page.services.title} description={page.services.description}>
        <ServicesMosaic services={page.services} />
      </ExampleSection>

      <ExampleSection
        eyebrow={page.whyChooseUs.eyebrow}
        title={page.whyChooseUs.title}
        description={page.whyChooseUs.description}
        className="bg-[var(--example-primary)] text-white"
        tone="inverse"
      >
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center">
          <TrustPoints section={page.whyChooseUs} tone="dark" />
          <PhotoPanel image={page.whyChooseUs.image} aspect="aspect-[4/5]" className="border border-white/10" />
        </div>
      </ExampleSection>

      <ExampleSection eyebrow={page.testimonials.eyebrow} title={page.testimonials.title} description={page.testimonials.description} className="bg-[var(--example-surface)]">
        <ReviewCards items={page.testimonials.items} />
      </ExampleSection>

      <ProcessSection process={page.process?.steps} title={page.process?.title} eyebrow={page.process?.eyebrow} description={page.process?.description} tone="dark" />

      <ExampleSection id="service-area" eyebrow={page.serviceArea.eyebrow} title={page.serviceArea.title} description={page.serviceArea.description}>
        <AreaChips areas={page.serviceArea.areas} />
      </ExampleSection>

      <ClosingBand page={page} tone="dark" />

      <section id="contact" className="bg-[var(--example-accent)] px-5 py-18 text-[var(--example-accent-contrast)] md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <ContactBlock
            section={page.contact}
            formMode="contrast"
            cardClassName="bg-white/6 text-white"
            buttonTone="primary"
            tone="inverse"
          />
        </div>
      </section>
    </>
  );
}

function LandscapingExamplePage({ page }: ExamplePageProps) {
  return (
    <>
      <section className="px-5 pt-8 pb-12 md:px-8 md:pt-10 md:pb-18">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <PhotoPanel image={page.hero.image} aspect="aspect-[16/11] md:aspect-auto md:h-full" />
          <div className="rounded-[var(--example-radius-panel)] bg-[var(--example-primary)] p-8 text-[var(--example-primary-contrast)] md:p-10">
            <SectionEyebrow className="text-white/64">{page.hero.eyebrow}</SectionEyebrow>
            <h1 className="text-5xl leading-[0.92] [font-family:var(--example-font-display)] font-black uppercase md:text-7xl">
              {page.hero.title}
              {page.hero.highlight ? <span className="block text-[var(--example-accent-soft)]">{page.hero.highlight}</span> : null}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/74">{page.hero.description}</p>
            <ExampleHeroActions hero={page.hero} className="mt-8" tone="inverse" />
            {page.hero.badges?.length ? (
              <div className="mt-8 flex flex-wrap gap-2">
                {page.hero.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-[var(--example-radius-pill)] border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/82"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <ExampleSection id="services" eyebrow={page.services.eyebrow} title={page.services.title} description={page.services.description}>
        <ServicesMosaic services={page.services} layout="stacked" />
      </ExampleSection>

      <ExampleSection eyebrow={page.whyChooseUs.eyebrow} title={page.whyChooseUs.title} description={page.whyChooseUs.description} className="bg-[var(--example-surface)]">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center">
          <PhotoPanel image={page.whyChooseUs.image} aspect="aspect-[16/11]" imageClassName="object-[50%_42%]" />
          <TrustPoints section={page.whyChooseUs} />
        </div>
      </ExampleSection>

      <ExampleSection eyebrow={page.testimonials.eyebrow} title={page.testimonials.title} description={page.testimonials.description}>
        <ReviewCards items={page.testimonials.items} />
      </ExampleSection>

      <ProcessSection process={page.process?.steps} title={page.process?.title} eyebrow={page.process?.eyebrow} description={page.process?.description} tone="dark" />

      <ExampleSection id="service-area" eyebrow={page.serviceArea.eyebrow} title={page.serviceArea.title} description={page.serviceArea.description}>
        <AreaChips areas={page.serviceArea.areas} />
      </ExampleSection>

      <ClosingBand page={page} tone="dark" />

      <section id="contact" className="bg-[var(--example-surface)] px-5 py-18 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <ContactBlock section={page.contact} />
        </div>
      </section>
    </>
  );
}

function GenericExamplePage({ page }: ExamplePageProps) {
  return (
    <>
      <section className="px-5 pt-8 pb-12 md:px-8 md:pt-10 md:pb-18">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center">
          <div>
            <SectionEyebrow>{page.hero.eyebrow}</SectionEyebrow>
            <h1 className="text-5xl leading-[0.95] [font-family:var(--example-font-display)] font-semibold tracking-tight text-[var(--example-text)] md:text-7xl">
              {page.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--example-muted)]">{page.hero.description}</p>
            <ExampleHeroActions hero={page.hero} className="mt-8" />
          </div>
          <PhotoPanel image={page.hero.image} aspect="aspect-[4/5]" />
        </div>
      </section>
      <ExampleSection id="services" eyebrow={page.services.eyebrow} title={page.services.title} description={page.services.description}>
        <ServicesMosaic services={page.services} />
      </ExampleSection>
      <ExampleSection eyebrow={page.whyChooseUs.eyebrow} title={page.whyChooseUs.title} description={page.whyChooseUs.description} className="bg-[var(--example-surface)]">
        <TrustPoints section={page.whyChooseUs} />
      </ExampleSection>
      <ExampleSection eyebrow={page.testimonials.eyebrow} title={page.testimonials.title} description={page.testimonials.description}>
        <ReviewCards items={page.testimonials.items} />
      </ExampleSection>
      <ProcessSection process={page.process?.steps} title={page.process?.title} eyebrow={page.process?.eyebrow} description={page.process?.description} />
      <ExampleSection id="service-area" eyebrow={page.serviceArea.eyebrow} title={page.serviceArea.title} description={page.serviceArea.description}>
        <AreaChips areas={page.serviceArea.areas} />
      </ExampleSection>
      <ClosingBand page={page} />
      <ExampleSection id="contact">
        <ContactBlock section={page.contact} />
      </ExampleSection>
    </>
  );
}

function ProcessSection({
  process,
  eyebrow,
  title,
  description,
  tone = "light",
}: {
  process?: ExampleFeatureItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
  tone?: "light" | "soft" | "accent" | "dark";
}) {
  if (!process?.length || !title) {
    return null;
  }

  const classes = {
    light: "bg-[var(--example-background)] text-[var(--example-text)]",
    soft: "bg-[var(--example-surface)] text-[var(--example-text)]",
    accent: "bg-[var(--example-accent)] text-[var(--example-accent-contrast)]",
    dark: "bg-[var(--example-primary)] text-[var(--example-primary-contrast)]",
  } as const;

  return (
    <ExampleSection
      eyebrow={eyebrow}
      title={title}
      description={description}
      className={classes[tone]}
      tone={tone === "accent" || tone === "dark" ? "inverse" : "default"}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {process.map((step, index) => (
          <div
            key={step.title}
            className={cn(
              "rounded-[var(--example-radius-panel)] p-6 md:p-8",
              tone === "accent" || tone === "dark"
                ? "border border-white/10 bg-white/6"
                : "border border-[var(--example-border)] bg-[var(--example-surface)]",
            )}
          >
            <p className={cn("text-sm font-bold uppercase tracking-[0.2em]", tone === "accent" || tone === "dark" ? "text-white/64" : "text-[var(--example-muted)]")}>
              Step {index + 1}
            </p>
            <h3 className={cn("mt-4 text-2xl [font-family:var(--example-font-display)] font-semibold", tone === "accent" || tone === "dark" ? "text-white" : "text-[var(--example-text)]")}>
              {step.title}
            </h3>
            <p className={cn("mt-3 text-sm leading-7", tone === "accent" || tone === "dark" ? "text-white/74" : "text-[var(--example-muted)]")}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </ExampleSection>
  );
}

function ClosingBand({
  page,
  tone = "soft",
}: {
  page: ExampleLandingPage;
  tone?: "soft" | "accent" | "minimal" | "dark";
}) {
  const classes = {
    soft: "bg-[var(--example-surface)] text-[var(--example-text)]",
    accent: "bg-[var(--example-accent)] text-[var(--example-accent-contrast)]",
    minimal: "bg-[var(--example-background)] text-[var(--example-text)]",
    dark: "bg-[var(--example-primary)] text-[var(--example-primary-contrast)]",
  } as const;

  return (
    <section className={cn("px-5 py-18 md:px-8 md:py-24", classes[tone])}>
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div className="max-w-3xl">
          <SectionEyebrow className={tone === "accent" || tone === "dark" ? "text-white/66" : undefined}>
            {page.cta.eyebrow}
          </SectionEyebrow>
          <h2 className={cn("text-4xl [font-family:var(--example-font-display)] font-semibold md:text-5xl", tone === "accent" || tone === "dark" ? "text-white" : "text-[var(--example-text)]")}>
            {page.cta.title}
          </h2>
          {page.cta.description ? (
            <p className={cn("mt-5 text-lg leading-8", tone === "accent" || tone === "dark" ? "text-white/78" : "text-[var(--example-muted)]")}>
              {page.cta.description}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <TemplateButton
            action={{
              ...page.cta.primaryCta,
              tone:
                tone === "accent" || tone === "dark"
                  ? page.cta.primaryCta.tone ?? "primary"
                  : page.cta.primaryCta.tone ?? "primary",
            }}
            className={
              tone === "dark"
                ? "bg-white text-[var(--example-primary)] hover:bg-white/92"
                : tone === "accent"
                  ? "bg-[var(--example-primary)] text-[var(--example-primary-contrast)]"
                  : undefined
            }
          />
          {page.cta.secondaryCta ? (
            <TemplateButton
              action={{
                ...page.cta.secondaryCta,
                tone: page.cta.secondaryCta.tone ?? (tone === "accent" || tone === "dark" ? "secondary" : "secondary"),
              }}
              className={tone === "accent" || tone === "dark" ? "border-white/16 text-white hover:bg-white/10" : undefined}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}

import { CTA } from "@/components/templates/CTA";
import { ContactSection } from "@/components/templates/ContactSection";
import { Hero } from "@/components/templates/Hero";
import { MobileCallBar } from "@/components/templates/MobileCallBar";
import { Process } from "@/components/templates/Process";
import { ServiceArea } from "@/components/templates/ServiceArea";
import { Services } from "@/components/templates/Services";
import { Testimonials } from "@/components/templates/Testimonials";
import { ThemeStyleVariables } from "@/components/templates/template-shared";
import { WhyChooseUs } from "@/components/templates/WhyChooseUs";
import { exampleThemes, type ExampleLandingPage } from "@/lib/examples";

export function ExamplePageTemplate({ page }: { page: ExampleLandingPage }) {
  const theme = exampleThemes[page.themeFamily];

  return (
    <ThemeStyleVariables theme={theme}>
      <div className="min-h-screen pb-20 md:pb-0">
        <Hero hero={page.hero} variant={page.sectionVariants.heroVariant} />
        <Services services={page.services} variant={page.sectionVariants.servicesVariant} />
        <WhyChooseUs
          section={page.whyChooseUs}
          family={page.themeFamily}
          variant={page.sectionVariants.whyChooseUsVariant}
        />
        <Testimonials
          testimonials={page.testimonials}
          variant={page.sectionVariants.testimonialsVariant}
        />
        <Process
          process={page.process}
          family={page.themeFamily}
          variant={page.sectionVariants.processVariant}
        />
        <ServiceArea
          serviceArea={page.serviceArea}
          family={page.themeFamily}
          variant={page.sectionVariants.serviceAreaVariant}
        />
        <CTA section={page.cta} variant={page.sectionVariants.ctaVariant} />
        <ContactSection section={page.contact} variant={page.sectionVariants.contactVariant} />
        <MobileCallBar phone={page.phone} label={page.ctaText} />
      </div>
    </ThemeStyleVariables>
  );
}

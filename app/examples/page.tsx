import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ExampleGalleryCard } from "@/components/templates/ExampleGalleryCard";
import {
  exampleFamilyDescriptions,
  exampleThemes,
  getExampleLandingPagesByFamily,
} from "@/lib/examples";
import { createExamplesIndexMetadata } from "@/lib/examples/metadata";

export const metadata = createExamplesIndexMetadata();

const familyOrder = [
  "warm-editorial",
  "bold-trust",
  "premium-professional",
  "energetic-performance",
] as const;

export default function ExamplesIndexPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-[#1d1d1b]">
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#d8d0c5] bg-[#fffaf5] px-4 py-2.5 text-sm font-semibold text-[#3e3a35] shadow-sm transition-colors hover:border-[#c6bbb0] hover:text-[#1d1d1b]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>

          <div className="mt-8 grid gap-10 md:grid-cols-[minmax(0,1fr)_320px] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#6b6259]">
                Example local-business landing pages
              </p>
              <h1 className="mt-4 max-w-4xl text-5xl leading-[0.95] font-semibold tracking-tight text-[#1d1d1b] md:text-7xl">
                See what your business website could look like before we build it.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f5a54]">
                Browse the example closest to your industry to get a quick feel for the kind of
                site I could build for your business, with a clearer call to action, stronger trust
                sections, and a cleaner path for visitors to contact you.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#d8d0c5] bg-[#fffaf5] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#6b6259]">
                What these examples show
              </p>
              <div className="mt-4 space-y-4 text-sm leading-7 text-[#3e3a35]">
                <p>Clear calls to action that make it easy for customers to call, book, or request a quote.</p>
                <p>Clean, modern layouts that build trust quickly on both desktop and mobile.</p>
                <p>Local-business messaging built to feel relevant for Edwardsville, Glen Carbon, and the broader St. Louis area.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-6xl space-y-16">
          {familyOrder.map((family) => {
            const pages = getExampleLandingPagesByFamily(family);

            return (
              <section key={family} className="space-y-8">
                <div className="flex flex-col gap-4 border-b border-[#ddd4c8] pb-6 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#6b6259]">
                      {exampleThemes[family].label}
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d1d1b] md:text-4xl">
                      {exampleFamilyDescriptions[family]}
                    </h2>
                  </div>
                  <p className="text-sm font-medium text-[#5f5a54]">
                    {pages.length} demo{pages.length === 1 ? "" : "s"}
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {pages.map((page) => (
                    <ExampleGalleryCard key={page.slug} page={page} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}

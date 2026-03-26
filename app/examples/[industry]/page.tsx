import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExamplePageRenderer } from "@/components/examples/page-renderer";
import {
  getExampleLandingPage,
  getExampleLandingPageSlugs,
} from "@/lib/examples";
import { createExamplePageMetadata } from "@/lib/examples/metadata";

type ExampleIndustryPageProps = {
  params: Promise<{
    industry: string;
  }>;
};

export async function generateMetadata({
  params,
}: ExampleIndustryPageProps): Promise<Metadata> {
  const { industry } = await params;
  const page = getExampleLandingPage(industry);

  if (!page) {
    return {};
  }

  return createExamplePageMetadata(page);
}

export function generateStaticParams() {
  return getExampleLandingPageSlugs().map((industry) => ({ industry }));
}

export default async function ExampleIndustryPage({
  params,
}: ExampleIndustryPageProps) {
  const { industry } = await params;
  const page = getExampleLandingPage(industry);

  if (!page) {
    notFound();
  }

  return <ExamplePageRenderer page={page} />;
}

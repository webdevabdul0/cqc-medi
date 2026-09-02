import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RESOURCE_CARDS } from "@/components/resources/data";
import { ResourceGateHero } from "@/components/resources/ResourceGateHero";

export function generateStaticParams() {
  return RESOURCE_CARDS.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = RESOURCE_CARDS.find((r) => r.slug === slug);
  return { title: resource ? `${resource.title} | CQC MediSolutions` : "Resource" };
}

export default async function ResourceGatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = RESOURCE_CARDS.find((r) => r.slug === slug);
  if (!resource) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <ResourceGateHero resource={resource} />
      </main>
      <Footer />
    </>
  );
}

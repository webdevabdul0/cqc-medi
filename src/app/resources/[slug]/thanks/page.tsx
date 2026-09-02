import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RESOURCE_CARDS } from "@/components/resources/data";
import { ThanksHero } from "@/components/resources/ThanksHero";

export function generateStaticParams() {
  return RESOURCE_CARDS.map((resource) => ({ slug: resource.slug }));
}

export const metadata: Metadata = {
  title: "Thanks for downloading! | CQC MediSolutions",
};

export default async function ResourceThanksPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = RESOURCE_CARDS.find((r) => r.slug === slug);
  if (!resource) notFound();

  // TODO: replace with the real hosted file URL for this resource once the
  // PDFs/checklists are uploaded (e.g. from a CMS field on `resource`).
  const fileUrl = "#";

  return (
    <>
      <Header />
      <main className="flex-1">
        <ThanksHero fileUrl={fileUrl} />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HonestBit } from "@/components/resources/HonestBit";
import { ResourceLibrary } from "@/components/resources/ResourceLibrary";
import { ResourcesHero } from "@/components/resources/ResourcesHero";
import { StartHereCards } from "@/components/resources/StartHereCards";
import { WhatHappensSection } from "@/components/resources/WhatHappensSection";

export const metadata: Metadata = {
  title: "Free Resources | CQC MediSolutions",
  description:
    "Guides, templates and free resources that every provider needs, written by our CQC compliance consultants from the applications we actually work on.",
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ResourcesHero />
        <StartHereCards />
        {/* <ResourceLibrary /> */}
        <HonestBit />
        <WhatHappensSection />
        <CTA heading="Not sure which activities you need? That's the call to book." />
      </main>
      <Footer />
    </>
  );
}

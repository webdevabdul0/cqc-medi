import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ActivitiesSection } from "@/components/sectors/ActivitiesSection";
import { ChecklistSection } from "@/components/sectors/ChecklistSection";
import { FAQSection } from "@/components/sectors/FAQSection";
import { NotNeedRegistration } from "@/components/sectors/NotNeedRegistration";
import { RuleSection } from "@/components/sectors/RuleSection";
import { SectorDeepDives } from "@/components/sectors/SectorDeepDives";
import { SectorsHero } from "@/components/sectors/SectorsHero";

export const metadata: Metadata = {
  title: "Sectors | CQC MediSolutions",
  description:
    "If your service needs CQC registration, we can register it. Every regulated activity, what it covers, and what CQC will check before they'll register your application.",
};

export default function SectorsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <SectorsHero />
        <RuleSection />
        <ActivitiesSection />
        <ChecklistSection />
        <SectorDeepDives />
        <NotNeedRegistration />
        <FAQSection />
        <CTA heading="Not sure which activities you need? That's the call to book." />
      </main>
      <Footer />
    </>
  );
}

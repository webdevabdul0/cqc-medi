import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SurveyHero } from "@/components/survey/SurveyHero";
import { SurveyWidget } from "@/components/survey/SurveyWidget";

export const metadata: Metadata = {
  title: "Free eligibility check | CQC MediSolutions",
  description:
    "Twelve questions on your activities, your registered manager and your evidence. Find out if CQC would accept your application.",
};

export default function SurveyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <SurveyHero />
        <SurveyWidget />
      </main>
      <Footer />
    </>
  );
}

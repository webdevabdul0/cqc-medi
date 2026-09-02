import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MediComplyPromo } from "@/components/prices/MediComplyPromo";
import { PaymentNotes } from "@/components/prices/PaymentNotes";
import { PricesHero } from "@/components/prices/PricesHero";
import { PricingTabsSection } from "@/components/prices/PricingTabsSection";

export const metadata: Metadata = {
  title: "Prices | CQC MediSolutions",
  description:
    "Every stage of CQC, priced up front. No hourly billing, no surprise invoices — pick the stage you're at and buy the support you need for it.",
};

export default function PricesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PricesHero />
        <PricingTabsSection />
        <MediComplyPromo />
        <PaymentNotes />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

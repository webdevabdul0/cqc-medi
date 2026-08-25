import { AlreadyRegistered } from "@/components/AlreadyRegistered";
import { Comparison } from "@/components/Comparison";
import { ConsultantReview } from "@/components/ConsultantReview";
import { CTA } from "@/components/CTA";
import { DifferentModel } from "@/components/DifferentModel";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowWeWork } from "@/components/HowWeWork";
import { HowWeWorkWithPeople } from "@/components/HowWeWorkWithPeople";
import { WhatMakesDifferent } from "@/components/WhatMakesDifferent";
import { WhyWeExist } from "@/components/WhyWeExist";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyWeExist />
        <DifferentModel />
        <ConsultantReview />
        <Comparison />
        <HowWeWork />
        <AlreadyRegistered />
        <FeatureGrid />
        <WhatMakesDifferent />
        <HowWeWorkWithPeople />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

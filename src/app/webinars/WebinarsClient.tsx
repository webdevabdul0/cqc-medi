"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WebinarsHero } from "@/components/webinars/WebinarsHero";
import { WebinarNextUp } from "@/components/webinars/WebinarNextUp";
import { WebinarUpcoming } from "@/components/webinars/WebinarUpcoming";
import { WebinarHowItWorks } from "@/components/webinars/WebinarHowItWorks";
import { WebinarReplays } from "@/components/webinars/WebinarReplays";
import { WebinarBand } from "@/components/webinars/WebinarBand";
import { FlosslyModal } from "@/components/FlosslyModal";
import { FLOSSLY_WEBINAR_SRC } from "@/components/webinars/data";

export function WebinarsClient() {
  const [modalOpen, setModalOpen] = useState(false);

  const openRegister = () => setModalOpen(true);

  return (
    <>
      <Header />
      <main className="flex-1">
        <WebinarsHero />
        <WebinarNextUp onRegister={openRegister} />
        <WebinarUpcoming onRegister={openRegister} />
        <WebinarHowItWorks />
        <WebinarReplays onRegister={openRegister} />
        <WebinarBand />
      </main>
      <Footer />
      {modalOpen && (
        <FlosslyModal src={FLOSSLY_WEBINAR_SRC} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

"use client";

import { useState } from "react";
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
      <WebinarsHero />
      <WebinarNextUp onRegister={openRegister} />
      <WebinarUpcoming onRegister={openRegister} />
      <WebinarHowItWorks />
      <WebinarReplays onRegister={openRegister} />
      <WebinarBand />
      {modalOpen && (
        <FlosslyModal src={FLOSSLY_WEBINAR_SRC} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

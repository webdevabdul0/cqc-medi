"use client";

import Image from "next/image";
import { useState } from "react";
import { OutlineButton, PrimaryButton } from "../Buttons";
import { FlosslyModal } from "../FlosslyModal";
import { ScrollReveal } from "../ScrollReveal";

const REGISTRATION_FORM = "https://app.flossly.ai/lead-form/882b3b64c4ddc41b02586ebd2fa525ff383a9d3eb87a547d7b895607bf2900ef";

export function MediComplyPromo() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section className="overflow-x-hidden bg-gradient-to-r from-brand-purple to-brand-purple-2 py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-10 lg:px-[100px]">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
            <Image src="/images/dot-icon.svg" alt="" width={9} height={9} />
            Registration + software
          </span>
          <h2 className="mt-8 max-w-[620px] text-3xl font-bold leading-[1.3] text-white sm:text-4xl lg:text-[42px]">
            Register with us and MediComply picks up where we leave off.
          </h2>
          <p className="mt-8 max-w-[620px] text-base leading-[1.3] text-white/90">
            Everything we build during your application — your policies, your
            statement of purpose, your evidence — loads straight into
            MediComply. You start day one of trading with your compliance
            already set up rather than a folder of documents nobody opens
            again.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryButton onClick={() => setFormOpen(true)}>Buy registration — £1,599</PrimaryButton>
            <OutlineButton href="https://calendly.com/smarthealthcompliance/medi-comply-demo-1" external>
              See MediComply first
            </OutlineButton>
          </div>
        </ScrollReveal>
        <ScrollReveal
          y={0}
          delay={0.15}
          className="relative w-full max-w-none self-start lg:w-[145%]"
        >
          <div className="relative aspect-[4096/2560] w-full overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/medicomply-screenshot.png"
              alt="MediComply compliance dashboard"
              fill
              sizes="(min-width: 1024px) 720px, 100vw"
              className="object-contain"
            />
          </div>
        </ScrollReveal>
      </div>
      {formOpen && <FlosslyModal src={REGISTRATION_FORM} onClose={() => setFormOpen(false)} />}
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import { PrimaryButton } from "./Buttons";
import { FlosslyModal } from "./FlosslyModal";
import { ScrollReveal } from "./ScrollReveal";

const REGISTRATION_FORM = "https://app.flossly.ai/lead-form/882b3b64c4ddc41b02586ebd2fa525ff383a9d3eb87a547d7b895607bf2900ef";

export function DifferentModel() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section className="bg-gradient-to-r from-brand-purple to-brand-purple-2">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-stretch gap-16 px-6 lg:grid-cols-2 lg:gap-10 lg:px-[100px]">
        <ScrollReveal
          y={0}
          className="relative order-2 h-[380px] w-full max-w-[520px] justify-self-center overflow-hidden lg:order-1 lg:h-auto lg:max-w-none"
        >
          <Image
            src="/images/document-photo-v2.png"
            alt="CQC MediSolutions consultant reviewing an application"
            fill
            sizes="(min-width: 1024px) 611px, 100vw"
            className="object-cover"
          />
        </ScrollReveal>
        <ScrollReveal className="order-1 max-w-[620px] py-20 lg:order-2 lg:py-28">
          <h2 className="text-3xl font-bold leading-[1.2] text-white sm:text-4xl">
            The documents were never the difficult part. The judgement was.
          </h2>
          <p className="mt-8 text-base leading-[1.3] text-white/90">
            We built a different model. Your application runs inside the MediComply
            portal as a simple task list. Your templates are already there, written
            for your sector. You upload what we ask for, and an experienced
            consultant reviews every piece of it, tells you what&apos;s wrong and
            why, and improves it with you. Then we complete the CQC forms, submit
            them, and prepare you properly for the registered manager interview. You
            always know what&apos;s outstanding, who&apos;s holding it, and what
            happens next. That is the whole difference.
          </p>
          <div className="mt-10">
            <PrimaryButton onClick={() => setFormOpen(true)}>Apply for CQC Registration</PrimaryButton>
          </div>
        </ScrollReveal>
      </div>
      {formOpen && <FlosslyModal src={REGISTRATION_FORM} onClose={() => setFormOpen(false)} />}
    </section>
  );
}

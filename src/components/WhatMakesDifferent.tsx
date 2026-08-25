import Image from "next/image";
import { ScrollReveal, ScrollRevealStagger } from "./ScrollReveal";

const POINTS = [
  {
    icon: "/images/people-icon-1.svg",
    title: "We simplify the process",
    body: "Everything runs through one dashboard. A task list instead of a document dump, your progress visible at any moment, and no wondering what happens next or who is holding things up. Registration and ongoing compliance in the same place, so nothing has to be rebuilt once you're approved.",
    offset: false,
  },
  {
    icon: "/images/people-icon-2.svg",
    title: "We are healthcare people",
    body: "Our team are healthcare professionals and CQC compliance consultants with real experience of working inside health and care services. That matters when you're asked why a policy exists rather than just whether you have one. We have sat on both sides of this.",
    offset: true,
  },
  {
    icon: "/images/people-icon-3.svg",
    title: "We have done this hundreds of times",
    body: "We have supported hundreds of providers through registration and ongoing compliance, across domiciliary care, supported living, aesthetics, IV clinics, hair transplant, scanning and more. Whatever your application throws up, it is unlikely to be the first time we have seen it.",
    offset: false,
  },
  {
    icon: "/images/people-icon-4.svg",
    title: "You get a consultant, not a portal login",
    body: "The software is how the work is organised. The judgement comes from a person who reads what you have written and tells you honestly whether it will stand up.",
    offset: true,
  },
];

export function WhatMakesDifferent() {
  return (
    <section className="bg-brand-lilac py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollReveal className="overflow-hidden rounded-[32px] bg-white p-6 shadow-sm sm:p-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-green bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
                <Image src="/images/dot-icon.svg" alt="" width={9} height={9} />
                The point of all of it
              </span>
              <h3 className="mt-6 text-3xl font-bold leading-[1.2] text-brand-purple sm:text-4xl">
                You should never have to prepare for an assessment.
              </h3>
              <p className="mt-6 text-base leading-[1.3] text-black/70">
                If the audits are done, the risk assessments are current and the
                training is tracked, an inspection is a conversation about work you
                have already been doing. The scramble in the fortnight before an
                assessment is a symptom of compliance living in folders instead of
                in a system.
              </p>
            </div>
            <div className="relative h-[280px] w-full overflow-hidden rounded-[24px] sm:h-[340px]">
              <Image
                src="/images/quotebox-photo.png"
                alt="Consultant preparing a provider for an assessment"
                fill
                sizes="(min-width: 1024px) 580px, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white bg-[#fff8f0] p-4 sm:right-auto sm:max-w-[400px]">
                <p className="text-sm font-medium leading-snug text-black">
                  We want you inspection ready on an ordinary Tuesday, not just
                  when you know they&apos;re coming.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-20 max-w-[620px]">
          <h2 className="text-3xl font-bold leading-[1.2] text-brand-purple sm:text-4xl">
            What makes our service different
          </h2>
          <p className="mt-4 text-base leading-[1.3] text-black/70">
            Three things, and none of them are the documents.
          </p>
        </ScrollReveal>

        <ScrollRevealStagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((point) => (
            <div
              key={point.title}
              className={`rounded-2xl bg-white p-6 shadow-[0_20px_40px_-15px_rgba(83,1,114,0.15)] ${
                point.offset ? "lg:mt-10" : ""
              }`}
            >
              <div className="flex size-[60px] items-center justify-center rounded-full bg-brand-lilac">
                <div className="relative size-7">
                  <Image src={point.icon} alt="" fill sizes="28px" className="object-contain" />
                </div>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-black">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.3] text-black/70">
                {point.body}
              </p>
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}

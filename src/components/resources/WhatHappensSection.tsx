import { ScrollReveal, ScrollRevealStagger } from "../ScrollReveal";
import { BOOKING_STEPS } from "./data";

export function WhatHappensSection() {
  return (
    <section className="bg-gradient-to-r from-brand-purple to-brand-purple-2 py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollReveal className="mx-auto max-w-[620px] text-center">
          <h2 className="text-3xl font-bold leading-[1.2] text-white sm:text-4xl">
            What actually happens if you book
          </h2>
          <p className="mt-4 text-base leading-[1.3] text-white/80">
            No slide deck, no pressure, and no forty minute pitch. Here&apos;s
            the whole thing.
          </p>
        </ScrollReveal>

        <ScrollRevealStagger className="mt-16 grid grid-cols-1 gap-8 rounded-[40px] bg-white p-6 sm:p-10 lg:grid-cols-3">
          {BOOKING_STEPS.map((step, i) => (
            <div
              key={step.label}
              className={`p-2 ${
                i > 0 ? "lg:border-l lg:border-black/10 lg:pl-8" : ""
              }`}
            >
              <span className="text-xs font-bold uppercase tracking-wide text-brand-purple">
                {step.label}
              </span>
              <h3 className="mt-3 text-[30px] font-bold leading-[1.3] text-[#740799]">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-[1.3] text-black/70">
                {step.body}
              </p>
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}

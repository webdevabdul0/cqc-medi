import Image from "next/image";
import { OutlineButton, PrimaryButton } from "../Buttons";
import { ScrollReveal, ScrollRevealStagger } from "../ScrollReveal";
import { HERO_PILLS } from "./data";

export function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-r from-brand-purple to-brand-purple-2 pb-20 pt-16 lg:pb-28 lg:pt-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollReveal className="mx-auto max-w-[930px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
            <span className="size-2 rounded-full bg-brand-orange" />
            MediComply portal
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.2] text-white sm:text-5xl lg:text-[60px]">
            Your compliance, built for your sector, not somebody
            else&apos;s.
          </h1>
          <p className="mx-auto mt-6 max-w-[730px] text-base leading-[1.3] text-white/85">
            MediComply is your all-in-one CQC compliance portal, supporting
            you from application to assessment. Cloud-based, tailored to
            your service, and set up by a compliance consultant not handed
            over as an empty system.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton href="#call">Book a demo</PrimaryButton>
            <OutlineButton href="#call">See what it costs</OutlineButton>
          </div>
        </ScrollReveal>
      </div>

      <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-10">
        <ScrollReveal
          y={0}
          delay={0.15}
          className="relative mx-auto mt-16 h-[260px] w-full sm:h-[380px] lg:h-[480px]"
        >
          <div className="absolute left-0 top-[12%] z-0 hidden h-[80%] w-[46%] overflow-hidden rounded-[14px] bg-brand-lilac shadow-xl sm:block">
            <Image
              src="/images/mc-hero-left.png"
              alt="MediComply compliance dashboard"
              fill
              sizes="656px"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute right-0 top-[12%] z-0 hidden h-[80%] w-[46%] overflow-hidden rounded-[14px] bg-brand-lilac shadow-xl sm:block">
            <Image
              src="/images/mc-hero-right.png"
              alt="MediComply calendar and notes"
              fill
              sizes="656px"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute left-1/2 top-0 z-10 h-full w-[75%] -translate-x-1/2 overflow-hidden rounded-[14px] bg-brand-lilac shadow-2xl sm:w-[57%]">
            <Image
              src="/images/medicomply-screenshot.png"
              alt="MediComply main dashboard"
              fill
              sizes="820px"
              className="object-cover object-top"
            />
          </div>
        </ScrollReveal>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollRevealStagger className="mt-16 grid grid-cols-1 divide-y divide-white/60 rounded-[20px] border border-white/60 lg:mt-24 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
          {HERO_PILLS.map((pill) => (
            <div key={pill.title} className="p-6">
              <span className="text-xs font-bold uppercase tracking-wide text-white/60">
                {pill.label}
              </span>
              <h3 className="mt-2 text-lg font-bold text-white">
                {pill.title}
              </h3>
              <p className="mt-1 text-sm leading-[1.3] text-white/70">
                {pill.body}
              </p>
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}

import Image from "next/image";
import { ScrollReveal, ScrollRevealStagger } from "./ScrollReveal";

const STEPS = [
  {
    step: "STEP 01",
    icon: "/images/step-icon-1.svg",
    title: "Your task list appears",
    body: "Built around your service and your regulated activities, in order, in plain English. Everything on it is something you actually have to do.",
  },
  {
    step: "STEP 02",
    icon: "/images/step-icon-2.svg",
    title: "Download your templates",
    body: "Already loaded and written for your sector. You edit a document that fits your service instead of adapting a generic one and hoping.",
  },
  {
    step: "STEP 03",
    icon: "/images/step-icon-3.svg",
    bg: "/images/step-icon-3-bg.svg",
    title: "Upload what we've asked for",
    body: "Completed templates, ID, DBS, insurance, qualifications, financial evidence. One place, not a chain of email attachments.",
  },
  {
    step: "STEP 04",
    icon: "/images/step-icon-4.svg",
    title: "We review and feed back",
    body: "A consultant reads every item, tells you what's wrong and why it matters, then improves it with you rather than sending it back with a red mark.",
  },
  {
    step: "STEP 05",
    icon: "/images/step-icon-5.svg",
    title: "We complete and submit",
    body: "We finish the CQC forms, check them against your evidence, and submit. You are not left staring at a government form trying to decode a question.",
  },
  {
    step: "STEP 06",
    icon: "/images/step-icon-6.svg",
    title: "We prepare you for interview",
    body: "An A to Z programme with mock interviews and honest feedback, because strong applications still fail at this stage.",
  },
];

export function HowWeWork() {
  return (
    <section className="bg-gradient-to-r from-brand-purple to-brand-purple-2 py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <div className="relative mt-16 lg:mx-[120px]">
          <div className="absolute left-1/2 top-[-2px] z-20 -translate-x-1/2">
            <Image
              src="/images/how-we-work-notch.svg"
              alt=""
              width={163}
              height={50}
              className="h-auto w-[150px]"
            />
          </div>
          <div className="relative rounded-[40px] bg-white px-8 pb-16 pt-12 sm:px-16 sm:pb-20 sm:pt-14 lg:px-24">
            <ScrollReveal className="mx-auto max-w-[620px] pb-10 text-center">
              <h2 className="text-3xl font-bold leading-[1.2] text-brand-purple sm:text-4xl">
                How we work
              </h2>
              <p className="mt-4 text-base leading-[1.3] text-black/70">
                Both approaches end with a set of documents. Only one of them ends
                with somebody who has checked them.
              </p>
            </ScrollReveal>
            <ScrollRevealStagger
              className="relative grid grid-cols-1 gap-x-16 gap-y-0 sm:grid-cols-2"
              childSelector="[data-step-card]"
            >
              <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-black/10 sm:block" />
              {STEPS.map((step, i) => (
              <div
                key={step.step}
                data-step-card
                className={`relative py-8 ${
                  i < STEPS.length - 2 ? "border-b border-black/10" : ""
                } ${i % 2 === 0 ? "sm:pr-10" : "sm:pl-10"}`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative flex size-[60px] shrink-0 items-center justify-center">
                    {step.bg && (
                      <Image src={step.bg} alt="" fill className="rounded-full" />
                    )}
                    <Image
                      src={step.icon}
                      alt=""
                      width={step.bg ? 28 : 60}
                      height={step.bg ? 28 : 60}
                      className="relative"
                    />
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#50bd96] to-[#f58729] p-[1.5px]">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-orange">
                      <span className="size-[7px] rounded-full bg-brand-orange" />
                      {step.step}
                    </span>
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-brand-purple">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[320px] text-base leading-[1.3] text-black/70">
                  {step.body}
                </p>
              </div>
            ))}
            </ScrollRevealStagger>
          </div>
        </div>
      </div>
    </section>
  );
}

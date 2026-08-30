import Image from "next/image";
import { ScrollReveal, ScrollRevealStagger } from "../ScrollReveal";
import { SCOPE_CHECKLIST } from "./data";

export function ChecklistSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <Image
        src="/images/checklist-bg-photo.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(83,1,114,0.24)] to-[rgba(83,1,114,0.53)]" />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollReveal className="mx-auto max-w-[620px] text-center">
          <h2 className="text-3xl font-bold leading-[1.2] text-white sm:text-4xl">
            The regulated activities
          </h2>
          <p className="mt-4 text-base leading-[1.3] text-white/85">
            Eight things CQC will check are in place before they&apos;ll
            register your application, regardless of which regulated
            activity you carry on.
          </p>
        </ScrollReveal>

        <ScrollRevealStagger className="mt-16 flex flex-wrap justify-center gap-6">
          {SCOPE_CHECKLIST.map((item) => (
            <div
              key={item.number}
              className="w-full rounded-[20px] bg-white p-8 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <span className="inline-flex items-center justify-center rounded-lg bg-brand-lilac px-2.5 py-1 text-sm font-bold text-brand-purple">
                {item.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-black">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.3] text-black/70">
                {item.body}
              </p>
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}

import Image from "next/image";
import { ScrollReveal } from "../ScrollReveal";

export function RuleSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollReveal className="overflow-hidden rounded-[40px] border border-[#d8d8d8] bg-brand-lilac p-8 shadow-[0px_8px_10px_0px_rgba(0,0,0,0.14)] sm:p-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold leading-[1.2] text-brand-purple sm:text-3xl">
                The rule in one paragraph
              </h2>
              <p className="mt-6 text-base leading-[1.3] text-black/80">
                If you carry on any activity listed in Schedule 1 of the
                Health and Social Care Act 2008 (Regulated Activities)
                Regulations 2014 in England, you must register with CQC
                unless a specific exception or exemption applies. Each
                regulated activity is registered separately, and there is no
                hierarchy between them, so you apply for all the ones that
                describe what you actually do. Carrying on a regulated
                activity without being registered is a criminal offence.
                That&apos;s why we spend the first conversation on scope, not
                paperwork.
              </p>
              <a
                href="https://www.cqc.org.uk/guidance-providers/scope-registration"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-brand-green px-[30px] py-4 text-base font-bold text-[#fbfbfb] transition-opacity hover:opacity-90"
              >
                Read CQC&apos;s scope of registration guidance →
              </a>
            </div>
            <div className="relative h-[280px] w-full overflow-hidden rounded-[20px] sm:h-[374px]">
              <Image
                src="/images/sectors-rule-photo.png"
                alt="Consultant checking CQC scope of registration"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

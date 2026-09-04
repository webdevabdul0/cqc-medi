import Image from "next/image";
import { OutlineButton, PrimaryButton } from "../Buttons";
import { ScrollReveal } from "../ScrollReveal";

export function HonestBit() {
  return (
    <section className="bg-brand-lilac py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-10">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-green bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
              <Image src="/images/dot-icon.svg" alt="" width={9} height={9} />
              The honest bit
            </span>
            <h2 className="mt-8 max-w-[620px] text-3xl font-bold leading-[1.3] text-brand-purple sm:text-4xl lg:text-[42px]">
              A guide can tell you what to do. It can&apos;t tell you whether
              you&apos;ve done it right.
            </h2>
            <p className="mt-8 max-w-[620px] text-base leading-[1.3] text-black/80">
              Everything on this page is genuinely free and genuinely useful.
              But reading a guide still leaves you deciding on your own
              whether your policies, your evidence and your answers are good
              enough. That judgement is the thing people actually get wrong,
              and it&apos;s the reason we exist.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <PrimaryButton href="https://calendly.com/smarthealthcompliance/medi-comply-demo-1" external>Book a free demo</PrimaryButton>
              <OutlineButton href="/services" dark>
                See services and prices
              </OutlineButton>
            </div>
          </ScrollReveal>
          <ScrollReveal
            delay={0.15}
            className="relative h-[360px] w-full overflow-hidden rounded-[20px] sm:h-[420px] lg:h-[502px]"
          >
            <Image
              src="/images/resources-honestbit-photo.png"
              alt="Consultant reviewing a provider's evidence"
              fill
              sizes="(min-width: 1024px) 620px, 100vw"
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

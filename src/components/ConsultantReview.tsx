import Image from "next/image";
import { PrimaryButton } from "./Buttons";
import { ScrollReveal } from "./ScrollReveal";

export function ConsultantReview() {
  return (
    <section className="bg-brand-lilac py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-10">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-green bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
              <Image src="/images/dot-icon.svg" alt="" width={9} height={9} />
              What that means in practice
            </span>
            <h2 className="mt-8 max-w-[620px] text-3xl font-bold leading-[1.3] text-brand-purple sm:text-4xl lg:text-[42px]">
              Nothing reaches CQC without a consultant having read it first.
            </h2>
            <p className="mt-8 max-w-[620px] text-base leading-[1.3] text-black/80">
              Every policy, every form, every piece of evidence is checked by
              someone who has been through this process many times before, against
              the standard CQC will actually apply. Not a checklist. A person who
              knows what a weak answer looks like.
            </p>
            <div className="mt-10">
              <PrimaryButton href="#apply">Apply for CQC Registration</PrimaryButton>
            </div>
          </ScrollReveal>
          <ScrollReveal
            delay={0.15}
            className="relative h-[360px] w-full overflow-hidden rounded-[20px] sm:h-[420px] lg:h-[502px]"
          >
            <Image
              src="/images/cqc-consultant-photo.png"
              alt="Consultant reviewing a compliance document with a provider"
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

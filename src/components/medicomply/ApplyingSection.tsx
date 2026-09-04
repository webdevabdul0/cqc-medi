import { PrimaryButton } from "../Buttons";
import { ScrollReveal } from "../ScrollReveal";

export function ApplyingSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollReveal className="grid grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-green px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
              <span className="size-2 rounded-full bg-brand-orange" />
              Where you are
            </span>
            <h2 className="mt-6 max-w-[500px] text-3xl font-bold leading-[1.2] text-brand-purple sm:text-4xl lg:text-[42px]">
              If you are applying to CQC
            </h2>
          </div>
          <p className="text-base leading-[1.3] text-black">
            The portal is the same product either way. What changes is
            which part of it matters first, and what we set up before you
            log in. For providers who have started, or are about to start,
            a CQC application.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mx-auto mt-12 max-w-[700px] text-center">
          <p className="text-base font-semibold leading-[1.3] text-brand-purple">
            An interview answer with a screen behind it is a different
            answer.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryButton href="/services">
              Registration with interview preparation
            </PrimaryButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

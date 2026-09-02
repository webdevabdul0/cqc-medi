import { PrimaryButton } from "../Buttons";
import { ScrollReveal } from "../ScrollReveal";

export function SurveyHero() {
  return (
    <section className="bg-gradient-to-r from-brand-purple to-brand-purple-2 pb-20 pt-36 lg:pb-28 lg:pt-56">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-10">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-green px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
              <span className="size-2 rounded-full bg-brand-orange" />
              Free eligibility check
            </span>
            <h1 className="mt-6 max-w-[610px] text-4xl font-bold leading-[1.2] text-white sm:text-5xl lg:text-[60px]">
              Find out if CQC would accept your application.
            </h1>
            <p className="mt-6 max-w-[607px] text-base leading-[1.3] text-white/85">
              Twelve questions on your activities, your registered manager
              and your evidence. You get a written verdict at the end, plus
              the exact gaps standing between you and a submission.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <PrimaryButton href="#survey">Start the check</PrimaryButton>
              <span className="text-sm leading-[1.3] text-white/70">
                Free · your findings in writing
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal
            y={0}
            delay={0.15}
            className="overflow-hidden rounded-[32px] bg-gradient-to-r from-brand-orange to-[#EF5658] p-8 sm:p-10"
          >
            <span className="text-sm font-bold uppercase tracking-wide text-white">
              Changed 9 February 2026
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-[1.2] text-white sm:text-4xl">
              CQC now rejects incomplete applications on arrival.
            </h2>
            <p className="mt-6 text-base leading-[1.3] text-white/90">
              There is no longer a clarification stage. If a required
              document is missing or inconsistent, the application is
              returned without assessment and you rejoin the queue from the
              start.
            </p>
            <p className="mt-4 text-base leading-[1.3] text-white/90">
              Applies to new provider registrations in England
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

import { ScrollReveal } from "../ScrollReveal";

export function WhereYouAreStats() {
  return (
    <section className="bg-white pt-20 lg:pt-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollReveal className="grid grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-green px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
              <span className="size-2 rounded-full bg-brand-orange" />
              HR and Training
            </span>
            <h2 className="mt-6 max-w-[580px] text-3xl font-bold leading-[1.2] text-brand-purple sm:text-4xl lg:text-[42px]">
              Your team, your records, your training
            </h2>
          </div>
          <p className="text-base leading-[1.3] text-black">
            Staff files are where assessments come unstuck more often than
            clinical practice does. Everything CQC expects to see for each
            person sits in one place, per site, with no cap on how many
            people you add.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

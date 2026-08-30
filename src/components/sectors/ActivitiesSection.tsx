import { Accordion } from "../Accordion";
import { ScrollReveal } from "../ScrollReveal";
import { REGULATED_ACTIVITIES } from "./data";

export function ActivitiesSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1000px] px-6 lg:px-0">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl font-bold leading-[1.2] text-brand-purple sm:text-4xl">
            The regulated activities
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-base leading-[1.3] text-black/70">
            Open the ones that sound like your service. Most providers
            register for more than one, and the combinations are where
            applications usually go wrong.
          </p>
        </ScrollReveal>
        <div className="mt-12 rounded-[24px] bg-brand-lilac p-3 sm:p-4">
          <Accordion items={REGULATED_ACTIVITIES} defaultOpenIndex={0} />
        </div>
      </div>
    </section>
  );
}

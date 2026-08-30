import { Accordion } from "../Accordion";
import { ScrollReveal } from "../ScrollReveal";
import { FAQ_ITEMS } from "./data";

export function FAQSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1000px] px-6 lg:px-0">
        <ScrollReveal className="text-center">
          <h2 className="mx-auto max-w-[380px] text-3xl font-bold leading-[1.2] text-brand-purple sm:text-4xl">
            CQC registration questions we&apos;re asked every week
          </h2>
          <p className="mt-4 text-base leading-[1.3] text-black/70">
            Short answers. If yours isn&apos;t here, ask us on the call.
          </p>
        </ScrollReveal>
        <div className="mt-12 rounded-[24px] bg-brand-lilac p-3 sm:p-4">
          <Accordion items={FAQ_ITEMS} />
        </div>
      </div>
    </section>
  );
}

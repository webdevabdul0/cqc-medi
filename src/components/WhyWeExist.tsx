import { ScrollReveal } from "./ScrollReveal";

export function WhyWeExist() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <ScrollReveal className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <h2 className="text-3xl font-bold leading-[1.2] text-brand-purple sm:text-4xl">
          Why we exist
        </h2>
        <p className="mt-8 max-w-[1283px] text-base leading-[1.4] text-black/80 sm:text-lg">
          Most people applying to CQC are not compliance professionals. They are
          nurses opening their first agency, clinicians going independent, families
          setting up a supported living service because they couldn&apos;t find one
          good enough for someone they love. They are extremely good at the thing
          they want to do, and completely new to the thing standing between them and
          doing it. What the market offered them was a document library. Two hundred
          templates, no order, no explanation of which ones applied, and no one to
          ask. So they filled them in as best they could, submitted, and waited
          months to find out they&apos;d got it wrong.
        </p>
      </ScrollReveal>
    </section>
  );
}

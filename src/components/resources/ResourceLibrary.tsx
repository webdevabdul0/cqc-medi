import { ScrollReveal, ScrollRevealStagger } from "../ScrollReveal";
import { RESOURCE_CARDS } from "./data";
import { ResourceCard } from "./ResourceCard";

export function ResourceLibrary() {
  return (
    <section className="bg-white pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollReveal className="mx-auto max-w-[620px] text-center">
          <h2 className="text-3xl font-bold leading-[1.2] text-brand-purple sm:text-4xl">
            The rest of the library
          </h2>
          <p className="mt-4 text-base leading-[1.3] text-black/70">
            Grouped by where you are in the process, because a guide written
            for someone who hasn&apos;t applied yet is no use to someone with
            an assessment next month.
          </p>
        </ScrollReveal>

        <ScrollRevealStagger className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCE_CARDS.map((card) => (
            <ResourceCard key={card.title} card={card} />
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}

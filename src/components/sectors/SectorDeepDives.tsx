import { ScrollReveal } from "../ScrollReveal";
import { SECTOR_CATEGORIES } from "./data";
import { SectorCategoryCarousel } from "./SectorCategoryCarousel";

export function SectorDeepDives() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollReveal className="max-w-[620px]">
          <h2 className="text-3xl font-bold leading-[1.2] text-brand-purple sm:text-4xl">
            The regulated activities
          </h2>
          <p className="mt-4 text-base leading-[1.3] text-black/70">
            These are the services we see week in, week out. If yours isn&apos;t
            listed, it doesn&apos;t mean we can&apos;t help. It means we
            haven&apos;t put your sector on a page yet.
          </p>
        </ScrollReveal>

        <div className="mt-16 space-y-16">
          {SECTOR_CATEGORIES.map((category) => (
            <SectorCategoryCarousel key={category.category} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { SECTOR_CATEGORIES } from "./data";
import { SectorCategoryCarousel } from "./SectorCategoryCarousel";

export function SectorDeepDives() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <div className="space-y-16">
          {SECTOR_CATEGORIES.map((category) => (
            <SectorCategoryCarousel key={category.category} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

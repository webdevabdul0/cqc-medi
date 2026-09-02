import { ScrollReveal, ScrollRevealStagger } from "../ScrollReveal";
import { FEATURE_TRIO } from "./data";

export function FeatureTrio() {
  return (
    <section className="bg-brand-lilac py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollReveal className="mx-auto max-w-[620px] text-center">
          <h2 className="text-4xl font-bold leading-[1.2] text-brand-purple sm:text-5xl lg:text-[50px]">
            The regulated activities
          </h2>
          <p className="mx-auto mt-6 max-w-[620px] text-base leading-[1.3] text-black">
            Open the ones that sound like your service. Most providers
            register for more than one, and the combinations are where
            applications usually go wrong.
          </p>
        </ScrollReveal>
        <ScrollRevealStagger className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {FEATURE_TRIO.map((column) => (
            <div key={column[0].title} className="flex flex-col gap-8">
              {column.map((card) => (
                <div
                  key={card.title}
                  className="flex h-full min-h-[280px] flex-col rounded-[20px] border border-[#cecece] bg-white p-8"
                >
                  <p className="text-2xl font-bold leading-[1.2] text-brand-purple lg:text-[28px]">
                    {card.stat}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-black">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.3] text-black">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}

import { ScrollRevealStagger } from "../ScrollReveal";
import { STATS } from "./data";

export function StatsRow() {
  return (
    <section className="bg-white pt-20 lg:pt-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollRevealStagger className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-brand-purple sm:text-5xl lg:text-[60px]">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-[1.3] text-black/70">
                {stat.label}
              </p>
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}

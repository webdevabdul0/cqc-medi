import { ScrollReveal, ScrollRevealStagger } from "../ScrollReveal";
import { STATS } from "./data";

export function StatsRow() {
  return (
    <section className="bg-white pt-20 lg:pt-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollReveal className="mx-auto max-w-[848px] text-center">
          <h2 className="text-4xl font-bold leading-[1.2] text-brand-purple sm:text-5xl lg:text-[60px]">
            One system, not six things that nearly talk to each other
          </h2>
          <p className="mx-auto mt-6 max-w-[620px] text-base leading-[1.3] text-black/70">
            Most registered services are not short of compliance tools. They
            are short of one place to look. The training is with a
            provider, the rota is in an app, the audits are on paper, the
            incidents are in a book, the policies are on a drive, and the
            person who knows how it all connects is on annual leave.
          </p>
        </ScrollReveal>

        <ScrollRevealStagger className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
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

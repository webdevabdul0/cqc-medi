import { ScrollReveal, ScrollRevealStagger } from "../ScrollReveal";
import { FREQUENCY_GRID } from "./data";

export function FrequencyGrid() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollReveal className="grid grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-green px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
              <span className="size-2 rounded-full bg-brand-orange" />
              The activity calendar
            </span>
            <h2 className="mt-6 max-w-[580px] text-3xl font-bold leading-[1.2] text-brand-purple sm:text-4xl lg:text-[42px]">
              Never miss a mandatory task
            </h2>
          </div>
          <p className="text-base leading-[1.3] text-black">
            This is the part of MediComply that does the remembering for
            you, so nothing depends on one person holding the whole
            compliance year in their head. Every obligation your service
            has, scheduled at the frequency it has to happen.
          </p>
        </ScrollReveal>

        <ScrollRevealStagger className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {FREQUENCY_GRID.map((item, i) => (
            <div
              key={item.label}
              className={`border border-[#d8d8d8] p-6 first:rounded-t-2xl last:rounded-b-2xl sm:first:rounded-tr-none sm:last:rounded-bl-none lg:first:rounded-l-2xl lg:first:rounded-tr-none lg:last:rounded-r-2xl lg:last:rounded-bl-none ${
                i % 2 === 1 ? "bg-brand-lilac" : "bg-white"
              }`}
            >
              <span className="text-xs font-bold uppercase tracking-wide text-brand-purple">
                {item.label}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-brand-purple">
                {item.category}
              </h3>
              <p className="mt-3 text-sm leading-[1.3] text-black">
                {item.body}
              </p>
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}

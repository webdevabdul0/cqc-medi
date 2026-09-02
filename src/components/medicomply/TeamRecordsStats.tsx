import Image from "next/image";
import { ScrollRevealStagger } from "../ScrollReveal";
import { WHERE_YOU_ARE_STATS } from "./data";

export function TeamRecordsStats() {
  return (
    <section className="bg-white pb-20 pt-10 lg:pb-28 lg:pt-14">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollRevealStagger className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-0">
          {WHERE_YOU_ARE_STATS.map((stat, i) => (
            <div
              key={stat.title}
              className={`rounded-[20px] border border-[#cecece] bg-white p-8 lg:rounded-none ${
                i === 0 ? "lg:rounded-l-[20px]" : ""
              } ${i === WHERE_YOU_ARE_STATS.length - 1 ? "lg:rounded-r-[20px]" : ""} ${
                i > 0 ? "lg:border-l-0" : ""
              }`}
            >
              <div className="flex size-[60px] items-center justify-center rounded-lg bg-brand-lilac">
                <Image src={stat.icon} alt="" width={36} height={36} />
              </div>
              <p className="mt-4 text-sm font-bold text-brand-purple">
                {stat.title}
              </p>
              <h3 className="mt-1 text-2xl font-bold leading-[1.3] text-brand-purple">
                {stat.label}
              </h3>
              <p className="mt-4 text-base leading-[1.3] text-black">
                {stat.body}
              </p>
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}

import Image from "next/image";
import { ScrollReveal } from "../ScrollReveal";
import { REPLACES } from "./data";

export function WhatItReplaces() {
  return (
    <section className="bg-white pb-20 pt-16 lg:pb-28 lg:pt-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollReveal className="grid grid-cols-1 overflow-hidden rounded-[24px] bg-brand-lilac lg:grid-cols-2">
          <div className="p-6 sm:p-10">
            <h2 className="text-2xl font-bold leading-[1.2] text-black sm:text-[32px]">
              What MediComply replaces
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {REPLACES.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 rounded-lg bg-white p-2.5 shadow-sm"
                >
                  <Image
                    src="/images/mc-replace-icon.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="shrink-0"
                  />
                  <span className="whitespace-nowrap text-base font-medium leading-[1.3] text-black">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="min-h-[260px] bg-gradient-to-br from-brand-purple-2 to-brand-purple lg:min-h-0" />
        </ScrollReveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import { ScrollReveal } from "../ScrollReveal";
import { REPLACES } from "./data";

export function WhatItReplaces() {
  return (
    <section className="bg-white pb-20 pt-16 lg:pb-28 lg:pt-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollReveal className="grid grid-cols-1 overflow-hidden rounded-[40px] bg-[#f8f3fc] lg:grid-cols-2">
          {/* Left — inherits container bg */}
          <div className="p-8 sm:p-10">
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

          {/* Right — own radial gradient + own border radius */}
          <div
            className="m-3 flex min-h-[280px] flex-col justify-center rounded-[32px] p-8 sm:p-10 lg:min-h-0"
            style={{ background: "radial-gradient(ellipse at center, #8109A9 0%, #6A058E 50%, #530172 100%)" }}
          >
            <h3 className="text-3xl font-bold leading-[1.2] text-white sm:text-4xl lg:text-[50px]">
              One login, one audit trail, one place an inspector is taken to.
            </h3>
            <p className="mt-6 text-base leading-[1.3] text-white/80">
              Compliance tracking, documents, training, audits, HR and reporting
              in a single cloud based system, so your evidence is centralised
              rather than spread across a drive, three inboxes and a filing
              cabinet.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import { ScrollReveal, ScrollRevealStagger } from "../ScrollReveal";
import { GENERIC_VS_MEDICOMPLY } from "./data";

const RIGHT_ITEM_STYLES = [
  { icon: "/images/mc-compare-gear.svg", swatch: "#aeead5" },
  { icon: "/images/mc-compare-eye.svg", swatch: "#ffc5c6" },
  { icon: "/images/mc-compare-calendar.svg", swatch: "#bfe6e8" },
  { icon: "/images/mc-compare-check.svg", swatch: "#f8dac1" },
  { icon: "/images/mc-compare-person.svg", swatch: "#f1eabe" },
  { icon: "/images/mc-compare-clipboard.svg", swatch: "#ead7fc" },
];

export function ComparisonSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollReveal className="mx-auto max-w-[848px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
            <span className="size-2 rounded-full bg-brand-orange" />
            What makes us different
          </span>
          <h2 className="mt-6 text-4xl font-bold leading-[1.2] text-brand-purple sm:text-5xl lg:text-[60px]">
            Your portal is built for your service, before you log in
          </h2>
          <p className="mx-auto mt-6 max-w-[620px] text-base leading-[1.3] text-black/70">
            All in one is only useful if the one system is the right one.
            Compliance is not the same job in every service, and neither is
            the evidence you have to produce for it. Most software ignores
            that, hands every provider the same platform, and leaves you to
            work out which two thirds of it does not apply to you.
            Multi-disciplinary services get the worst of it, because
            nothing on the market expects one provider to run three
            different things under one registration. We do.
          </p>
        </ScrollReveal>

        <div className="relative mx-auto mt-16 grid max-w-[1280px] grid-cols-1 gap-6 rounded-[40px] bg-brand-lilac lg:grid-cols-2 lg:gap-0">
          <div className="px-6 py-6 sm:px-[70px] sm:py-[50px]">
            <h3 className="text-2xl font-bold leading-[1.3] text-black sm:text-[32px]">
              Generic compliance software
            </h3>
            <ScrollRevealStagger className="mt-8 flex flex-col items-start gap-2.5">
              {GENERIC_VS_MEDICOMPLY.map((row) => (
                <div
                  key={row.generic}
                  className="flex items-center gap-2.5 rounded-lg bg-white p-2.5"
                >
                  <Image
                    src="/images/mc-compare-left-icon.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="shrink-0"
                  />
                  <span className="whitespace-nowrap text-base font-medium leading-[1.3] text-black">
                    {row.generic}
                  </span>
                </div>
              ))}
            </ScrollRevealStagger>
          </div>

          <div
            className="relative rounded-[40px] px-6 py-6 sm:px-[70px] sm:py-[50px]"
            style={{
              background:
                "radial-gradient(120% 120% at 65% 15%, #8109a9 0%, #6a058e 50%, #530172 100%)",
            }}
          >
            <h3
              className="inline-block bg-clip-text text-2xl font-bold leading-[1.3] text-transparent sm:text-[32px]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #50BD96 -0.01%, #00B2B9 26.99%, #F3D41F 49.99%, #F58729 74%, #EF5658 100%)",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              MediComply
            </h3>
            <ScrollRevealStagger className="mt-8 flex flex-col items-start gap-2.5">
              {GENERIC_VS_MEDICOMPLY.map((row, i) => {
                const style = RIGHT_ITEM_STYLES[i % RIGHT_ITEM_STYLES.length];
                return (
                  <div
                    key={row.medicomply}
                    className="flex items-center gap-2.5 rounded-lg bg-white p-2.5"
                  >
                    <span
                      className="flex size-8 shrink-0 items-center justify-center rounded"
                      style={{ backgroundColor: style.swatch }}
                    >
                      <Image src={style.icon} alt="" width={24} height={24} />
                    </span>
                    <span className="whitespace-nowrap text-base leading-[1.3] text-brand-purple-2">
                      {row.medicomply}
                    </span>
                  </div>
                );
              })}
            </ScrollRevealStagger>
          </div>

          <div
            className="absolute left-1/2 top-1/2 hidden size-[100px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[20px] border-[6px] border-white shadow-xl lg:flex"
            style={{
              backgroundImage:
                "linear-gradient(134deg, #530172 0%, #8109a9 88%)",
            }}
          >
            <Image
              src="/images/mc-compare-logo.svg"
              alt="MediComply"
              width={58}
              height={29}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

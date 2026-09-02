import Image from "next/image";
import { ScrollReveal, ScrollRevealStagger } from "../ScrollReveal";
import { ALREADY_REGISTERED_PATHS } from "./data";

export function AlreadyRegisteredPaths() {
  return (
    <section className="bg-gradient-to-br from-brand-purple-2 to-brand-purple py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollReveal className="mx-auto max-w-[848px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
            <span className="size-2 rounded-full bg-brand-orange" />
            Where you are · already registered
          </span>
          <h2 className="mt-6 text-3xl font-bold leading-[1.2] text-white sm:text-4xl">
            Already registered and want an easier system
          </h2>
          <p className="mt-4 text-base leading-[1.3] text-white/85">
            They are compliant, they are not new, and they are tired of the
            way they are having to prove it. There are two versions of that,
            and we handle both.
          </p>
        </ScrollReveal>

        <div className="mt-12 flex flex-col gap-8">
          {ALREADY_REGISTERED_PATHS.map((path) => (
            <ScrollReveal
              key={path.label}
              className="rounded-[40px] border border-white p-8 sm:p-10"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-4 py-2 text-sm font-bold uppercase tracking-wide text-white">
                <span className="size-2 rounded-full bg-white" />
                {path.label}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                {path.title}
              </h3>
              <p className="mt-4 max-w-[831px] text-base leading-[1.3] text-white/85">
                {path.body}
              </p>

              <ScrollRevealStagger className="mt-8 grid grid-cols-1 gap-3 lg:grid-cols-2">
                {path.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-2.5 rounded-lg bg-white p-2.5"
                  >
                    <Image
                      src="/images/mc-check-icon.svg"
                      alt=""
                      width={32}
                      height={32}
                      className="shrink-0"
                    />
                    <span className="text-base leading-[1.3] text-black">
                      {point}
                    </span>
                  </div>
                ))}
              </ScrollRevealStagger>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

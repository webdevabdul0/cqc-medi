import Image from "next/image";
import { ScrollReveal } from "../ScrollReveal";

export function OpenLibrarySection() {
  return (
    <section className="overflow-x-hidden bg-gradient-to-r from-[#F04E3E] via-brand-orange to-[#F9C623] py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-10 lg:px-[100px]">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
            <span className="size-2 rounded-full bg-brand-orange" />
            What that means in practice
          </span>
          <h2 className="mt-8 max-w-[620px] text-3xl font-bold leading-[1.3] text-white sm:text-4xl lg:text-[42px]">
            Open your library and every document in it was written for
            the service you actually run.
          </h2>
          <p className="mt-8 max-w-[560px] text-base leading-[1.3] text-white/90">
            Audits, checklists, policies, logs, risk assessments, guides,
            signage and CQC interview resources, filed by type, ready to
            use. Not a search box over a thousand generic files, and not
            a starter pack you have to rewrite before it means anything.
          </p>
          <p className="mt-4 max-w-[560px] text-base leading-[1.3] text-white/90">
            Log in as a different type of service and the library is
            different, because the obligations are different. Download
            what you need one at a time, or pull the whole set down in
            bulk.
          </p>
        </ScrollReveal>

        <ScrollReveal
          y={0}
          delay={0.15}
          className="relative w-full max-w-none self-start lg:w-[145%]"
        >
          <div className="relative aspect-[4096/2560] w-full overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/mc-library-screenshot.png"
              alt="MediComply compliance template library"
              fill
              sizes="(min-width: 1024px) 720px, 100vw"
              className="object-contain"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

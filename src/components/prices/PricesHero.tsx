import Image from "next/image";
import { ScrollReveal } from "../ScrollReveal";

export function PricesHero() {
  return (
    <section className="bg-brand-purple pb-24 pt-36 lg:pb-32 lg:pt-56">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-10 lg:px-[100px]">
        <ScrollReveal className="max-w-[610px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green bg-transparent px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange backdrop-blur-md">
            <Image src="/images/dot-icon.svg" alt="" width={9} height={9} />
            Services
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.2] text-white sm:text-5xl lg:text-[60px]">
            Every stage of CQC, priced up front.
          </h1>
          <p className="mt-8 max-w-[607px] text-base leading-[1.3] text-white/90">
            No hourly billing and no surprise invoices. Pick the stage you&apos;re
            at — applying, preparing for assessment, or running a registered
            service day to day — and buy the support you need for it.
          </p>
        </ScrollReveal>
        <ScrollReveal y={0} className="relative">
          <div className="relative h-[350px] w-full overflow-hidden rounded-[32px] sm:h-[420px] lg:h-[475px]">
            <Image
              src="/images/prices-hero-photo.png"
              alt="Consultant reviewing CQC pricing options"
              fill
              sizes="(min-width: 1024px) 610px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

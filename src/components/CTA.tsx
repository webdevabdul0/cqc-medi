import Image from "next/image";
import { OutlineButton, PrimaryButton } from "./Buttons";
import { ScrollReveal } from "./ScrollReveal";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-white pb-32 pt-20 lg:pb-44 lg:pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-[200px] hidden lg:block">
        <Image
          src="/images/cta-wave.svg"
          alt=""
          width={1481}
          height={445}
          className="w-full"
          style={{ height: "auto" }}
        />
      </div>
      <ScrollReveal className="relative mx-auto max-w-[1440px] px-6 text-center lg:px-[100px]">
        <h2 className="mx-auto max-w-[760px] text-3xl font-bold leading-[1.2] text-brand-purple sm:text-4xl lg:text-5xl">
          Talk to the consultant who&apos;d handle your file.
        </h2>
        <p className="mx-auto mt-6 max-w-[652px] text-base leading-[1.3] text-black/80 sm:text-lg">
          Fifteen minutes will tell you what you need to register for, what the
          process looks like for your service, and roughly how long it will
          take. If you don&apos;t need us, we&apos;ll say so.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton href="#call">Book a free scope call</PrimaryButton>
          <OutlineButton href="#prices" dark>
            See services and prices
          </OutlineButton>
        </div>
      </ScrollReveal>
    </section>
  );
}

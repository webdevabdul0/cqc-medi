import Image from "next/image";
import { OutlineButton, PrimaryButton } from "./Buttons";
import { ScrollReveal } from "./ScrollReveal";

export function CTA({
  heading = "Talk to the consultant who’d handle your file.",
  body = "Fifteen minutes will tell you what you need to register for, what the process looks like for your service, and roughly how long it will take. If you don’t need us, we’ll say so.",
  primaryLabel = "Book a free scope call",
  primaryHref = "https://calendly.com/smarthealthcompliance/medi-comply-demo-by-shc-1",
  secondaryLabel = "See services and prices",
  secondaryHref = "/services",
}: {
  heading?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white pb-56 pt-20 lg:pb-68 lg:pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-[200px] hidden lg:block">
        <Image
          src="/images/cta-wave.svg"
          alt=""
          width={1481}
          height={465}
          className="w-full origin-center"
          style={{ height: "465px", transform: "scale(1.15)" }}
        />
      </div>
      <ScrollReveal className="relative mx-auto max-w-[1440px] px-6 text-center lg:px-[100px]">
        <h2 className="mx-auto max-w-[760px] text-3xl font-bold leading-[1.2] text-brand-purple sm:text-4xl lg:text-5xl">
          {heading}
        </h2>
        <p className="mx-auto mt-6 max-w-[652px] text-base leading-[1.3] text-black/80 sm:text-lg">
          {body}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton href={primaryHref} external>{primaryLabel}</PrimaryButton>
          <OutlineButton href={secondaryHref} dark>
            {secondaryLabel}
          </OutlineButton>
        </div>
      </ScrollReveal>
    </section>
  );
}

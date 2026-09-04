import Image from "next/image";
import { OutlineButton, PrimaryButton } from "../Buttons";
import { ScrollReveal } from "../ScrollReveal";

export function RegisteringCrossSell() {
  return (
    <section className="relative flex min-h-[600px] items-end overflow-hidden py-20 lg:min-h-[1070px] lg:py-28">
      <Image
        src="/images/mc-registering-laptop.png"
        alt=""
        fill
        sizes="1440px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-purple-2/0 to-brand-purple" />
      <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollReveal className="mx-auto max-w-[918px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
            <span className="size-2 rounded-full bg-brand-orange" />
            Registering with us
          </span>
          <h2 className="mt-6 text-4xl font-bold leading-[1.2] text-white sm:text-5xl lg:text-[50px]">
            If we are handling your registration, your portal starts on day
            one.
          </h2>
          <p className="mx-auto mt-6 max-w-[620px] text-base leading-[1.3] text-white/85">
            Everything we build during your application, your policies, your
            statement of purpose, your evidence, loads straight into
            MediComply. You begin trading with your compliance already
            running rather than with a folder of documents nobody opens
            again. See the registration packages for what that includes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton href="/services">
              See registration packages
            </PrimaryButton>
            <OutlineButton href="https://calendly.com/smarthealthcompliance/15-minute-call" external>Talk to a consultant</OutlineButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

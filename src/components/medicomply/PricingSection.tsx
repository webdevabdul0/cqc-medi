import Image from "next/image";
import { OutlineButton, PrimaryButton } from "../Buttons";
import { ScrollReveal } from "../ScrollReveal";

export function PricingSection() {
  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[40px] bg-brand-lilac">
          <ScrollReveal className="px-6 py-10 sm:px-10 sm:py-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-green px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
              <span className="size-2 rounded-full bg-brand-orange" />
              Worth doing first
            </span>
            <h2 className="mt-6 max-w-[1020px] text-3xl font-bold leading-[1.2] text-brand-purple sm:text-4xl lg:text-[50px]">
              Your annual remote mock inspection, worth £500.
            </h2>
            <p className="mt-6 max-w-[1020px] text-base leading-[1.3] text-black">
              Once a year, a compliance consultant reviews your portal, your
              evidence and your records as an inspector would, and tells you
              what a real assessment would find. Every client gets one,
              included in the subscription, at no additional cost.
            </p>
            <p className="mt-4 max-w-[1020px] text-base leading-[1.3] text-black">
              <span className="font-bold">Most providers find something.</span>{" "}
              That is the point of it. Finding it in your mock costs you an
              afternoon of admin. Finding it in an assessment costs you a
              rating.
            </p>
          </ScrollReveal>

          <div className="relative overflow-hidden rounded-t-[40px] bg-gradient-to-br from-brand-purple-2 to-brand-purple px-6 py-10 sm:px-10 sm:py-12 lg:min-h-[600px]">
            <ScrollReveal
              y={0}
              delay={0.15}
              className="pointer-events-none absolute -right-[150px] bottom-0 z-20 hidden aspect-[4096/2731] h-[600px] w-auto max-w-none lg:block"
            >
              <Image
                src="/images/mc-pricing-laptop.png"
                alt="MediComply dashboard on a laptop"
                fill
                sizes="700px"
                className="object-contain object-right-bottom"
              />
            </ScrollReveal>

            <ScrollReveal className="relative z-10 max-w-[560px] lg:max-w-[700px]">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-green px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
                <span className="size-2 rounded-full bg-brand-orange" />
                Worth doing first
              </span>
              <h2 className="mt-6 max-w-[700px] text-3xl font-bold leading-[1.2] text-white sm:text-4xl lg:text-[50px]">
                One price, per site, everything included
              </h2>
              <p className="mt-6 max-w-[700px] text-base leading-[1.3] text-white/90">
                No setup fee, no per user charge and no training invoices.
                Setup, configuration, unlimited users on your site and your
                annual mock inspection are all in the monthly price. A
                minimum term applies, and we will tell you exactly what it is
                before you commit to anything.
              </p>

              <div className="mt-8 flex items-center gap-6 rounded-[24px] bg-gradient-to-r from-[#F04E3E] to-brand-orange p-6">
                <div className="shrink-0 border-r border-white/30 pr-6">
                  <p className="text-4xl font-bold text-white lg:text-[50px]">
                    £99
                  </p>
                  <p className="mt-1 text-sm leading-[1.3] text-white/85">
                    per month,
                    <br />
                    excluding VAT
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    MediComply, fully configured to your sector
                  </h3>
                  <p className="mt-1 text-sm leading-[1.3] text-white/85">
                    Includes portal setup, your activity calendar built for
                    you, unlimited users on your site, the full template and
                    audit library, the CPD course library, and your annual
                    remote mock inspection.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <PrimaryButton href="#subscribe">Subscribe now</PrimaryButton>
                <OutlineButton href="#call">Book a demo first</OutlineButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

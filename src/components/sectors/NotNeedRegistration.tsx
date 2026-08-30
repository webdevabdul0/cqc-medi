import Image from "next/image";
import { PrimaryButton } from "../Buttons";
import { ScrollReveal } from "../ScrollReveal";

const EXEMPT_ACTIVITIES = [
  "Beauty treatments with no prescription-only medicines involved: facials, non-medical peels, lashes, waxing, most laser and IPL hair removal",
  "Housing support or social support only: shopping, cleaning, companionship, help getting to appointments",
  "Prompting or supervising medicines, without providing any personal care tasks",
  "Personal training, sports massage or nutrition advice with no clinical treatment",
  "Talking therapies delivered by a counsellor or psychotherapist who isn't a listed healthcare professional",
];

export function NotNeedRegistration() {
  return (
    <section className="bg-gradient-to-r from-brand-purple to-brand-purple-2">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-stretch gap-16 px-6 lg:grid-cols-2 lg:gap-10 lg:px-[100px]">
        <ScrollReveal className="py-20 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green bg-transparent px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange backdrop-blur-md">
            <Image src="/images/dot-icon.svg" alt="" width={9} height={9} />
            Registration + software
          </span>
          <h2 className="mt-8 max-w-[620px] text-3xl font-bold leading-[1.2] text-white sm:text-4xl">
            You might not need CQC registration at all
          </h2>
          <p className="mt-6 max-w-[620px] text-base leading-[1.3] text-white/90">
            Not every health-adjacent business is regulated, and we&apos;d
            rather tell you that on a free call than take a fee for an
            application you didn&apos;t need. You generally don&apos;t need
            to register if you only provide:
          </p>
          <ul className="mt-6 max-w-[620px] space-y-3">
            {EXEMPT_ACTIVITIES.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-[1.3] text-white/85"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-green" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[620px] text-sm leading-[1.3] text-white/70">
            Other regulators may still apply: local authority licensing, the
            GDC, the GPhC, the HFEA or Ofsted depending on what you do. If
            you&apos;re unsure, ask us and we&apos;ll tell you straight.
          </p>
          <div className="mt-8">
            <PrimaryButton href="#call">
              Check whether you&apos;re in scope
            </PrimaryButton>
          </div>
        </ScrollReveal>
        <ScrollReveal y={0} className="relative order-first h-[300px] w-full overflow-hidden lg:order-none lg:h-auto">
          <Image
            src="/images/document-photo-v2.png"
            alt="Consultant reviewing whether a service needs CQC registration"
            fill
            sizes="(min-width: 1024px) 611px, 100vw"
            className="object-cover"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}

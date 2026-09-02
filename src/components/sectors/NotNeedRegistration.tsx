import Image from "next/image";
import { PrimaryButton } from "../Buttons";
import { ScrollReveal } from "../ScrollReveal";

const DEFAULT_EXEMPT_ACTIVITIES = [
  "Beauty treatments with no prescription-only medicines involved: facials, non-medical peels, lashes, waxing, most laser and IPL hair removal",
  "Housing support or social support only: shopping, cleaning, companionship, help getting to appointments",
  "Prompting or supervising medicines, without providing any personal care tasks",
  "Personal training, sports massage or nutrition advice with no clinical treatment",
  "Talking therapies delivered by a counsellor or psychotherapist who isn't a listed healthcare professional",
];

export function NotNeedRegistration({
  badge = "Registration + software",
  heading = "You might not need CQC registration at all",
  paragraphs = [
    "Not every health-adjacent business is regulated, and we'd rather tell you that on a free call than take a fee for an application you didn't need. You generally don't need to register if you only provide:",
  ],
  listItems = DEFAULT_EXEMPT_ACTIVITIES,
  footnote = "Other regulators may still apply: local authority licensing, the GDC, the GPhC, the HFEA or Ofsted depending on what you do. If you're unsure, ask us and we'll tell you straight.",
  buttonLabel = "Check whether you're in scope",
  buttonHref = "#call",
  imageSrc = "/images/document-photo-v2.png",
  imageAlt = "Consultant reviewing whether a service needs CQC registration",
}: {
  badge?: string;
  heading?: string;
  paragraphs?: string[];
  listItems?: string[];
  footnote?: string;
  buttonLabel?: string;
  buttonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="bg-gradient-to-r from-brand-purple to-brand-purple-2">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-stretch gap-16 px-6 lg:grid-cols-2 lg:gap-10 lg:px-[100px]">
        <ScrollReveal className="py-20 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green bg-transparent px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange backdrop-blur-md">
            <Image src="/images/dot-icon.svg" alt="" width={9} height={9} />
            {badge}
          </span>
          <h2 className="mt-8 max-w-[620px] text-3xl font-bold leading-[1.2] text-white sm:text-4xl">
            {heading}
          </h2>
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-6 max-w-[620px] text-base leading-[1.3] text-white/90"
            >
              {paragraph}
            </p>
          ))}
          {listItems.length > 0 && (
            <ul className="mt-6 max-w-[620px] space-y-3">
              {listItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-[1.3] text-white/85"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-green" />
                  {item}
                </li>
              ))}
            </ul>
          )}
          {footnote && (
            <p className="mt-6 max-w-[620px] text-sm leading-[1.3] text-white/70">
              {footnote}
            </p>
          )}
          {buttonLabel && (
            <div className="mt-8">
              <PrimaryButton href={buttonHref}>{buttonLabel}</PrimaryButton>
            </div>
          )}
        </ScrollReveal>
        <ScrollReveal
          y={0}
          className="relative order-first h-[300px] w-full overflow-hidden lg:order-none lg:h-auto"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 611px, 100vw"
            className="object-cover"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}

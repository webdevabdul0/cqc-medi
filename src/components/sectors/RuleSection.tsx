import Image from "next/image";
import { ScrollReveal } from "../ScrollReveal";

export function RuleSection({
  badge,
  heading = "The rule in one paragraph",
  paragraphs = [
    "If you carry on any activity listed in Schedule 1 of the Health and Social Care Act 2008 (Regulated Activities) Regulations 2014 in England, you must register with CQC unless a specific exception or exemption applies. Each regulated activity is registered separately, and there is no hierarchy between them, so you apply for all the ones that describe what you actually do. Carrying on a regulated activity without being registered is a criminal offence. That's why we spend the first conversation on scope, not paperwork.",
  ],
  buttonLabel = "Read CQC's scope of registration guidance →",
  buttonHref = "https://www.cqc.org.uk/guidance-providers/scope-registration",
  imageSrc = "/images/sectors-rule-photo.png",
  imageAlt = "Consultant checking CQC scope of registration",
  headingSize = "sm:text-3xl",
  imageOnLeft = false,
  imagePosition = "center",
}: {
  badge?: string;
  heading?: string;
  paragraphs?: string[];
  buttonLabel?: string;
  buttonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  headingSize?: string;
  imageOnLeft?: boolean;
  imagePosition?: "left" | "center" | "right";
}) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollReveal className="overflow-hidden rounded-[40px] border border-[#d8d8d8] bg-brand-lilac shadow-[0px_8px_10px_0px_rgba(0,0,0,0.14)]">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2">
            <div
              className={`p-8 sm:p-12 lg:py-12 ${
                imageOnLeft ? "lg:order-2" : ""
              }`}
            >
              {badge && (
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-green bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
                  <span className="size-2 rounded-full bg-brand-orange" />
                  {badge}
                </span>
              )}
              <h2
                className={`text-2xl font-bold leading-[1.2] text-brand-purple ${headingSize}`}
              >
                {heading}
              </h2>
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-6 text-base leading-[1.3] text-black/80"
                >
                  {paragraph}
                </p>
              ))}
              <a
                href={buttonHref}
                {...(buttonHref.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-brand-green px-[30px] py-4 text-base font-bold text-[#fbfbfb] transition-opacity hover:opacity-90"
              >
                {buttonLabel}
              </a>
            </div>
            <div className={`p-5 ${imageOnLeft ? "lg:order-1" : ""}`}>
              <div className="relative h-[280px] w-full overflow-hidden rounded-[20px] sm:h-full sm:min-h-[374px]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                  style={{ objectPosition: imagePosition }}
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

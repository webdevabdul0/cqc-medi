import Image from "next/image";
import { ScrollReveal, ScrollRevealStagger } from "../ScrollReveal";

export function PurplePromoSection({
  heading,
  paragraphs,
  imageSrc,
  imageAlt,
  reverse = false,
  checklist,
  variant = "purple",
}: {
  heading: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  checklist?: string[];
  variant?: "purple" | "white";
}) {
  const isWhite = variant === "white";

  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <div
          className={`mx-auto max-w-[1280px] overflow-hidden rounded-[40px] p-6 sm:p-8 lg:p-8 ${
            isWhite
              ? "bg-brand-lilac"
              : "bg-gradient-to-br from-brand-purple-2 to-brand-purple"
          }`}
        >
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <ScrollReveal
              className={`py-8 lg:py-14 ${reverse ? "lg:order-2" : ""}`}
            >
              <h2
                className={`max-w-[540px] text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-[42px] ${
                  isWhite ? "text-brand-purple" : "text-white"
                }`}
              >
                {heading}
              </h2>
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className={`mt-6 max-w-[540px] text-base leading-[1.3] ${
                    isWhite ? "text-black" : "text-white/90"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </ScrollReveal>

            <ScrollReveal
              y={0}
              delay={0.15}
              className={`relative h-[360px] w-full overflow-hidden rounded-2xl shadow-2xl sm:h-[440px] lg:h-[520px] ${
                reverse ? "lg:order-1" : ""
              }`}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover object-top"
              />
            </ScrollReveal>
          </div>

          {checklist && (
            <ScrollRevealStagger className="mt-10 grid grid-cols-1 gap-3 lg:grid-cols-2">
              {checklist.map((item) => (
                <div
                  key={item}
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
                    {item}
                  </span>
                </div>
              ))}
            </ScrollRevealStagger>
          )}
        </div>
      </div>
    </section>
  );
}

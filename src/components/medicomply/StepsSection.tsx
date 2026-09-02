import { ScrollReveal, ScrollRevealStagger } from "../ScrollReveal";

export type Step = { number: string; title: string; body: string };

export function StepsSection({
  eyebrow,
  heading,
  subtext,
  steps,
  dark = false,
}: {
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  steps: Step[];
  dark?: boolean;
}) {
  return (
    <section
      className={`${dark ? "bg-gradient-to-r from-brand-purple to-brand-purple-2" : "bg-white"} ${
        heading ? "py-20 lg:py-28" : "pb-20 pt-0 lg:pb-28"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        {heading && (
          <ScrollReveal className="mx-auto max-w-[700px] text-center">
            {eyebrow && (
              <span
                className={`inline-flex items-center gap-2 rounded-full border border-brand-green px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange ${
                  dark ? "bg-transparent backdrop-blur-md" : "bg-white"
                }`}
              >
                {eyebrow}
              </span>
            )}
            <h2
              className={`mt-6 text-3xl font-bold leading-[1.2] sm:text-4xl ${
                dark ? "text-white" : "text-brand-purple"
              }`}
            >
              {heading}
            </h2>
            {subtext && (
              <p
                className={`mt-4 text-base leading-[1.3] ${
                  dark ? "text-white/80" : "text-black/70"
                }`}
              >
                {subtext}
              </p>
            )}
          </ScrollReveal>
        )}

        {dark ? (
          <ScrollRevealStagger
            className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 ${
              heading ? "mt-12" : ""
            }`}
          >
            {steps.map((step) => (
              <div key={step.number} className="rounded-[24px] bg-white/10 p-8">
                <span className="text-3xl font-bold text-white/40">
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.3] text-white/80">
                  {step.body}
                </p>
              </div>
            ))}
          </ScrollRevealStagger>
        ) : (
          <ScrollRevealStagger className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`border border-[#cecece] p-8 first:rounded-t-2xl last:rounded-b-2xl sm:first:rounded-tr-none sm:last:rounded-bl-none lg:first:rounded-l-2xl lg:first:rounded-tr-none lg:last:rounded-r-2xl lg:last:rounded-bl-none ${
                  i % 2 === 1 ? "bg-brand-lilac" : "bg-white"
                }`}
              >
                <span className="inline-flex size-[60px] items-center justify-center rounded-lg bg-brand-lilac text-2xl font-bold text-brand-purple">
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl font-bold text-brand-purple">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-[1.3] text-black">
                  {step.body}
                </p>
              </div>
            ))}
          </ScrollRevealStagger>
        )}
      </div>
    </section>
  );
}

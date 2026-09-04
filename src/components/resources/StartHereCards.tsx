import Image from "next/image";
import { ScrollRevealStagger } from "../ScrollReveal";

const POINTS = [
  "How to work out which regulated activities apply to you",
  "Every form CQC will ask for, and who completes each one",
  "What a registered manager actually has to prove",
  "The five mistakes that cause most rejections",
  "Realistic timescales, so you don't sign a lease too early",
];

export function StartHereCards() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollRevealStagger className="overflow-hidden rounded-[40px] lg:grid lg:grid-cols-2">
          <div className="bg-brand-purple p-8 sm:p-10">
            <div className="relative h-[275px] w-full overflow-hidden rounded-[20px]">
              <Image
                src="/images/resources-starthere-photo.png"
                alt="Consultant filling out a CQC application"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
            <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-green bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
              <Image src="/images/dot-icon.svg" alt="" width={9} height={9} />
              Start here
            </span>
            <h2 className="mt-6 text-3xl font-bold leading-[1.2] text-white sm:text-4xl">
              The Easy Guide to Registering with CQC
            </h2>
            <p className="mt-6 text-base leading-[1.3] text-white/90">
              If you only read one thing on this page, read this. It walks
              the whole registration process from working out whether
              you&apos;re in scope to the day your certificate arrives.
            </p>
            <ul className="mt-6 space-y-3">
              {POINTS.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-snug text-white/90"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-green" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-lilac">
            <iframe
              src="https://app.flossly.ai/lead-form/8507123ef51ba69714224a44386168c6ea539286f1b0411811acc578e3b40a6c"
              title="Get your free guide"
              className="min-h-[600px] w-full border-0"
              loading="lazy"
              allow="payment"
            />
          </div>
        </ScrollRevealStagger>
      </div>
    </section>
  );
}

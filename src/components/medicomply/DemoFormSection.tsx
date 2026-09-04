import Image from "next/image";
import { ScrollRevealStagger } from "../ScrollReveal";

const POINTS = [
  "The task list and templates for your service type",
  "How the activity calendar would be built for you",
  "Staff records, CPD tracking and the rota",
  "What a self mock inspection looks like",
  "A straight answer on whether you need it yet",
];

export function DemoFormSection() {
  return (
    <section id="demo" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollRevealStagger className="overflow-hidden rounded-[40px] lg:grid lg:grid-cols-2">
          <div className="bg-brand-purple p-8 sm:p-10">
            <div className="relative h-[275px] w-full overflow-hidden rounded-[20px]">
              <Image
                src="/images/mc-demo-meeting.png"
                alt="Two consultants reviewing a CQC portal demo"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
            <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-green bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
              <Image src="/images/dot-icon.svg" alt="" width={9} height={9} />
              What the demo covers
            </span>
            <h2 className="mt-6 text-3xl font-bold leading-[1.2] text-white sm:text-4xl">
              Your sector, your calendar, your questions.
            </h2>
            <p className="mt-6 text-base leading-[1.3] text-white/90">
              Tell us what you run and we will show you the version of the
              portal you would actually get.
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
              src="https://app.flossly.ai/lead-form/d0738880e424e8fb0092a19a50d450a653c65800adba6b59e0d242ddbb49b1b9"
              title="Book a demo"
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

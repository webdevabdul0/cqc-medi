import Image from "next/image";
import { ScrollRevealStagger } from "../ScrollReveal";

const DEMO_COVERS = [
  "The task list and templates for your service type",
  "How the activity calendar would be built for you",
  "Staff records, CPD tracking and the rota",
  "What a self mock inspection looks like",
  "A straight answer on whether you need it yet",
];

export function TalkToConsultant() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollRevealStagger className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[40px] bg-brand-purple p-8 sm:p-10">
            <div className="relative h-[275px] w-full overflow-hidden rounded-[20px]">
              <Image
                src="/images/mc-demo-consultation.png"
                alt="Consultant walking a provider through the MediComply demo"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
            <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-green bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
              <span className="size-2 rounded-full bg-brand-orange" />
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
              {DEMO_COVERS.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-snug text-white/90"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-green" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/*
            TODO: Flossly Form goes here to book the demo call. On
            successful submission it should redirect the user to a
            confirmation page.
          */}
          <div className="flex min-h-[500px] items-center justify-center overflow-hidden rounded-[40px] bg-brand-lilac p-8 sm:p-10">
            <p className="text-2xl font-bold text-black/10">Flossly Form</p>
          </div>
        </ScrollRevealStagger>
      </div>
    </section>
  );
}

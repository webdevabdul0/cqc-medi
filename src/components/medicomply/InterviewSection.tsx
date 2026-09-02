import Image from "next/image";
import { ScrollReveal, ScrollRevealStagger } from "../ScrollReveal";

const CHECKLIST = [
  "Simplified task list that shows the next action rather than all ninety at once",
  "Policies and procedures in place, version controlled and dated",
  "Risk assessments completed with a live risk register behind them",
  "Logs for incidents, complaints and safeguarding, ready from day one",
  "CPD records per staff member, with completion dates",
  "HR folders holding contracts, DBS checks and right to work documents",
];

export function InterviewSection() {
  return (
    <section className="bg-brand-lilac py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-green px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
              <span className="size-2 rounded-full bg-brand-orange" />
              Where you are · applying
            </span>
            <h2 className="mt-6 max-w-[540px] text-3xl font-bold leading-[1.2] text-brand-purple sm:text-4xl lg:text-[42px]">
              At your registered manager interview
            </h2>
            <p className="mt-6 max-w-[620px] text-base leading-[1.3] text-black">
              CQC does not only want to hear that you understand good
              governance. They want to know what you will actually do on a
              Tuesday in March, and how you will show it happened. Saying
              &ldquo;we will audit quarterly&rdquo; is an intention. Opening
              a portal that already holds your audit schedule, your risk
              assessments, your policy set, your CPD records and your HR
              folders is evidence. It changes the interview from a set of
              promises into a demonstration. Registered managers we prepare
              are able to answer the systems questions by describing
              something that exists, which is a considerably easier
              conversation than describing something they intend to build.
            </p>

            <ScrollRevealStagger className="mt-8 flex flex-col gap-3">
              {CHECKLIST.map((item) => (
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
          </ScrollReveal>

          <ScrollReveal
            y={0}
            delay={0.15}
            className="relative h-[420px] w-full overflow-hidden rounded-[20px] shadow-2xl sm:h-[560px] lg:h-[680px]"
          >
            <Image
              src="/images/wyaApplying.png"
              alt="MediComply portal at a registered manager interview"
              fill
              sizes="(min-width: 1024px) 620px, 100vw"
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

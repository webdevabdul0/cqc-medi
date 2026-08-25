import Image from "next/image";
import { ScrollReveal, ScrollRevealStagger } from "./ScrollReveal";

const CARDS = [
  {
    photo: "/images/people-card-1.png",
    title: "We tell you if you don't need us",
    body: "Plenty of businesses that contact us are not in scope for CQC registration at all. We say so on the first call rather than taking a fee for an application nobody needed.",
  },
  {
    photo: "/images/people-card-2.png",
    title: "We don't promise outcomes",
    body: "No consultancy can guarantee a registration decision, and anyone who tells you otherwise is selling you something. What we can promise is that CQC will never reject your application for something avoidable.",
  },
  {
    photo: "/images/people-card-3.png",
    title: "You keep everything",
    body: "The policies and documents built during your application are yours, in editable format. You are not renting your own compliance from us.",
  },
  {
    photo: "/images/people-card-4.png",
    title: "We say when you're not ready",
    body: "If your interview answers are weak or your evidence is thin, you will hear it from your consultant first. That conversation is uncomfortable and it is the entire point of paying for one.",
  },
];

export function HowWeWorkWithPeople() {
  return (
    <section className="bg-gradient-to-r from-brand-purple via-brand-purple-2 to-brand-purple py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollReveal className="mx-auto max-w-[708px] text-center">
          <h2 className="text-3xl font-bold leading-[1.2] text-white sm:text-4xl">
            How we work with People
          </h2>
          <p className="mt-4 text-base leading-[1.3] text-white/80">
            Four things we hold to, including the ones that cost us money.
          </p>
        </ScrollReveal>

        <div className="relative mt-14 hidden justify-center lg:flex">
          <Image src="/images/people-badge.svg" alt="" width={106} height={106} className="relative z-10" />
        </div>
        <div className="relative mx-auto hidden h-[110px] max-w-[1160px] lg:block">
          <div className="absolute left-0 right-0 top-0 border-t border-dashed border-white/30" />
          {["12.5%", "37.5%", "62.5%", "87.5%"].map((left) => (
            <div
              key={left}
              className="absolute top-0 h-full border-l border-dashed border-white/30"
              style={{ left }}
            />
          ))}
        </div>

        <ScrollRevealStagger className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-0 lg:grid-cols-4">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-[24px] border border-white/20 bg-white p-5"
            >
              <div className="relative h-[170px] w-full overflow-hidden rounded-2xl">
                <Image
                  src={card.photo}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 280px, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-black">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.3] text-black/70">
                {card.body}
              </p>
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}

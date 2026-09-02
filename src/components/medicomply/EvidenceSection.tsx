import Image from "next/image";
import { ScrollReveal } from "../ScrollReveal";

export function EvidenceSection() {
  return (
    <section className="relative flex min-h-[520px] items-end overflow-hidden pb-16 pt-20 lg:min-h-[710px] lg:pb-20 lg:pt-28">
      <Image
        src="/images/mc-evidence-photo.png"
        alt=""
        fill
        sizes="1440px"
        className="object-cover"
        priority={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-2 to-transparent to-80%" />
      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10">
        <ScrollReveal className="max-w-[1043px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
            <span className="size-2 rounded-full bg-brand-orange" />
            Why all in one matters at assessment
          </span>
          <h2 className="mt-6 max-w-[1034px] text-4xl font-bold leading-[1.3] text-white sm:text-5xl lg:text-[50px]">
            Evidence that lives in six places is evidence you cannot
            produce on the day.
          </h2>
          <p className="mt-6 max-w-[1043px] text-base leading-[1.3] text-white/85">
            An inspector does not ask whether you have a system. They ask
            you to show them something specific, and then something else
            that connects to it: the incident, the action taken, the policy
            it sits under, the staff member involved, their training
            record, their supervision. In one portal that is four clicks.
            Across six systems it is a phone call to whoever set them up.
          </p>
          <p className="mt-4 max-w-[1043px] text-base font-semibold leading-[1.3] text-white">
            The all in one part is not a convenience feature. It is what
            makes your evidence provable in the moment somebody asks.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import { PrimaryButton } from "./Buttons";
import { ScrollReveal } from "./ScrollReveal";

export function DifferentModel() {
  return (
    <section className="bg-brand-purple py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-10 lg:px-[100px]">
        <ScrollReveal
          y={0}
          className="relative order-2 aspect-square w-full max-w-[520px] justify-self-center lg:order-1 lg:max-w-none"
        >
          <Image
            src="/images/document-photo.png"
            alt="CQC MediSolutions team reviewing an application"
            fill
            sizes="(min-width: 1024px) 620px, 100vw"
            className="object-contain"
          />
        </ScrollReveal>
        <ScrollReveal className="order-1 max-w-[620px] lg:order-2">
          <h2 className="text-3xl font-bold leading-[1.2] text-white sm:text-4xl">
            The documents were never the difficult part. The judgement was.
          </h2>
          <p className="mt-8 text-base leading-[1.3] text-white/90">
            We built a different model. Your application runs inside the MediComply
            portal as a simple task list. Your templates are already there, written
            for your sector. You upload what we ask for, and an experienced
            consultant reviews every piece of it, tells you what&apos;s wrong and
            why, and improves it with you. Then we complete the CQC forms, submit
            them, and prepare you properly for the registered manager interview. You
            always know what&apos;s outstanding, who&apos;s holding it, and what
            happens next. That is the whole difference.
          </p>
          <div className="mt-10">
            <PrimaryButton href="#apply">Apply for CQC Registration</PrimaryButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

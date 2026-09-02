import Image from "next/image";
import { ScrollReveal } from "../ScrollReveal";

export function PortalYourWaySection() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-brand-purple-2 to-brand-purple py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-green px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
              <span className="size-2 rounded-full bg-brand-orange" />
              Fully customisable
            </span>
            <h2 className="mt-6 max-w-[500px] text-3xl font-bold leading-[1.2] text-white sm:text-4xl">
              Your portal, your way. And if we have missed something, you
              add it yourself.
            </h2>
            <p className="mt-6 max-w-[500px] text-base leading-[1.3] text-white/85">
              You are not locked into what we configured on day one. Add
              your own tasks, your own audits, your own frequencies and
              your own documents whenever your service changes, takes on a
              new activity, or an insurer asks for something we could not
              have known about. Rename things to match the language your
              team already uses. The portal bends to your service rather
              than the other way round.
            </p>
          </ScrollReveal>

          <ScrollReveal
            delay={0.15}
            className="relative h-[300px] w-full overflow-hidden rounded-[20px] sm:h-[400px] lg:h-[480px]"
          >
            <Image
              src="/images/tabsImage.png"
              alt="MediComply portal customised for your service"
              fill
              sizes="620px"
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

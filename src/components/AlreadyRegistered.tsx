import { ScrollRevealStagger } from "./ScrollReveal";

export function AlreadyRegistered() {
  return (
    <section className="bg-white pb-8 pt-20 lg:pb-10 lg:pt-28">
      <ScrollRevealStagger className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-[100px]">
        <h2 className="text-3xl font-bold leading-[1.3] text-brand-purple sm:text-4xl lg:text-[42px]">
          Already registered? Staying registered is the harder part.
        </h2>
        <p className="text-base leading-[1.4] text-black/80">
          Registration is one day. Compliance is every day after it. MediComply is
          where your service runs once CQC has said yes. Most providers
          don&apos;t fall down because they never had the right documents. They
          fall down because eighteen months later the audits haven&apos;t been
          done, the risk assessments are out of date, three staff are overdue on
          training, and nobody can find the evidence when an inspector asks for
          it. The paperwork existed. Nobody was managing it. MediComply turns your
          ongoing compliance into a running list of tasks with dates against
          them, so the work is visible before it becomes a problem rather than
          after.
        </p>
      </ScrollRevealStagger>
    </section>
  );
}

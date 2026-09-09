export function WebinarReplays({ onRegister }: { onRegister: (label: string) => void }) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-orange">
            On demand
          </p>
          <h2 className="text-3xl font-bold text-brand-purple sm:text-4xl">
            Can&apos;t make it live?
          </h2>
          <p className="mx-auto mt-4 max-w-[400px] text-base text-black/60">
            Register anyway. Every session is recorded.
          </p>
        </div>

        <div className="mx-auto max-w-[900px] flex flex-col items-start justify-between gap-7 rounded-[18px] border border-[#E9E1F0] bg-white p-9 sm:flex-row sm:items-center">
          <p className="text-base leading-relaxed text-black/55 sm:max-w-[580px]">
            The recording and the slides go out the morning after each session
            to everyone who registered, whether you made it live or not. Past
            sessions will be listed here as the series runs.
          </p>
          <button
            onClick={() => onRegister("All six sessions — the full CQC mini-series")}
            className="shrink-0 rounded-full bg-brand-green px-7 py-3.5 text-base font-bold text-white transition-opacity hover:opacity-90"
          >
            Register for the series
          </button>
        </div>
      </div>
    </section>
  );
}

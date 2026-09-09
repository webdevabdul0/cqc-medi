import Image from "next/image";

export function WebinarsHero() {
  return (
    <header className="overflow-hidden bg-gradient-to-r from-brand-purple to-brand-purple-2 pb-20 pt-36 lg:pb-24 lg:pt-52">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-white/90">
              CQC Resources
            </p>
            <h1 className="text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[66px]">
              Webinar mini&#8209;series
            </h1>
            <p className="mt-5 max-w-[430px] text-lg leading-relaxed text-white/90">
              One 30-minute session a month, Thursday lunchtimes, to keep you
              up to date, informed, and clear on how the CQC process actually
              works. Six parts, start to finish — and short enough to take at
              your desk.
            </p>
            <div className="mt-8">
              <a
                href="#next"
                className="inline-flex items-center justify-center rounded-full bg-brand-green px-7 py-3.5 text-base font-bold text-white transition-opacity hover:opacity-90"
              >
                See what&apos;s next
              </a>
            </div>
            <div className="mt-10 flex gap-8 border-t border-white/20 pt-6">
              {[
                { stat: "30 min", label: "one topic per session" },
                { stat: "Monthly", label: "Thursdays, 1pm" },
                { stat: "Free", label: "live and on demand" },
              ].map(({ stat, label }) => (
                <div key={stat}>
                  <span className="block text-2xl font-bold text-brand-green">{stat}</span>
                  <small className="text-sm text-white/75">{label}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/images/webinar-hero.png"
              alt="Webinar series overview"
              width={620}
              height={480}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}

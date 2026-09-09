"use client";

import { nextWebinar } from "./data";
import { WebinarCountdown } from "./WebinarCountdown";

function CalIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="3" width="13" height="11.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M1.5 6.5h13M5 1.5v3M11 1.5v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 4.5V8l2.5 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function VideoIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="4" width="9.5" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 7.5l3.5-2v5l-3.5-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function WebinarNextUp({ onRegister }: { onRegister: (label: string) => void }) {
  const w = nextWebinar;
  const pct = Math.round(((w.seatsTotal - w.seatsLeft) / w.seatsTotal) * 100);

  return (
    <section id="next" className="bg-brand-lilac py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-orange">
            What&apos;s up next
          </p>
          <h2 className="text-3xl font-bold text-brand-purple sm:text-4xl lg:text-[42px]">
            The next 30 minutes that will save you weeks
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-base text-black/70">
            One topic, half an hour, no filler. Registration closes 24 hours
            before the session, or as soon as places run out.
          </p>
        </div>

        <div className="overflow-hidden rounded-[24px] bg-white shadow-xl lg:grid lg:grid-cols-[1.55fr_1fr]">
          {/* Main */}
          <div className="p-8 lg:p-11">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-pink-600">
              <span className="size-[7px] shrink-0 animate-pulse rounded-full bg-pink-500" />
              Part {w.part} of {w.total} · Live on Zoom
            </span>
            <h3 className="mb-3.5 text-[28px] font-bold leading-[1.2] text-brand-purple lg:text-[31px]">
              {w.title}
            </h3>
            <p className="mb-6 text-base leading-relaxed text-black/60">{w.description}</p>

            <div className="mb-6 flex flex-wrap gap-3">
              {[
                { icon: <CalIcon />, text: w.date },
                { icon: <ClockIcon />, text: w.time },
                { icon: <VideoIcon />, text: w.format },
              ].map(({ icon, text }) => (
                <span
                  key={text}
                  className="flex items-center gap-2 rounded-xl bg-brand-lilac px-4 py-2.5 text-sm font-semibold text-brand-purple"
                >
                  <span className="text-brand-purple-2">{icon}</span>
                  {text}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-brand-orange text-sm font-bold text-white">
                {w.host.initials}
              </div>
              <div>
                <b className="block text-sm font-bold text-brand-purple">{w.host.name}</b>
                <small className="text-xs text-black/50">{w.host.org}</small>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col justify-center bg-brand-purple p-8 text-white lg:p-9">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] opacity-70">
              Doors open in
            </p>
            <WebinarCountdown isoDate={w.isoDate} />

            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between text-xs font-semibold">
                <span className="opacity-80">Places remaining</span>
                <b className="text-brand-orange">
                  {w.seatsLeft} of {w.seatsTotal}
                </b>
              </div>
              <div className="h-[7px] overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-green to-brand-orange"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>

            <button
              onClick={() => onRegister(w.registerLabel)}
              className="w-full rounded-full bg-brand-green py-3.5 text-base font-bold text-white transition-opacity hover:opacity-90"
            >
              Register for this session
            </button>

            <p className="mt-3.5 text-center text-[12px] leading-relaxed opacity-70">
              Free to attend. Zoom link sent once we confirm your place.
              <br />
              <button
                onClick={() => onRegister("All six sessions — the full CQC mini-series")}
                className="mt-1 font-bold text-brand-green hover:text-white"
              >
                Or register for all six →
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

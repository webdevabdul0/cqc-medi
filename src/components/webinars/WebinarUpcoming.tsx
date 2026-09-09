"use client";

import { useState } from "react";
import { upcomingWebinars, stageNames, filterLabels, stageKeys, type Webinar } from "./data";

const stageBadge: Record<string, string> = {
  before: "bg-emerald-100 text-emerald-700",
  apply: "bg-pink-100 text-pink-700",
  after: "bg-orange-100 text-orange-700",
};

function WebinarCard({ webinar: w, onRegister }: { webinar: Webinar; onRegister: (label: string) => void }) {
  return (
    <article className={`flex flex-col rounded-[16px] border border-[#E9E1F0] bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-transparent${w.full ? " pointer-events-none opacity-50" : ""}`}>
      <div className="mb-4 flex items-baseline gap-2">
        <b className="font-[Quicksand,sans-serif] text-3xl font-bold leading-none text-brand-purple">
          {w.day}
        </b>
        <span className="text-xs font-bold uppercase tracking-widest text-pink-500">
          {w.month} {w.year}
        </span>
        <span className="ml-auto rounded-full border border-[#E2D8EC] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-black/40">
          Part {w.ep}
        </span>
      </div>
      <span className={`mb-3.5 self-start rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${stageBadge[w.stage]}`}>
        {stageNames[w.stage]}
      </span>
      <h3 className="mb-2.5 text-xl font-bold leading-[1.3] text-brand-purple">{w.title}</h3>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-black/55">{w.blurb}</p>
      <div className="flex items-center justify-between gap-3 border-t border-[#EDE6F3] pt-4">
        <small className="text-xs font-semibold text-black/45">
          Thu 1:00pm · 30 min
          <br />
          {w.spaces}
        </small>
        {!w.full && (
          <button
            onClick={() => onRegister(`Part ${w.ep} — ${w.title}, Thu ${w.day} ${w.month} ${w.year}`)}
            className="shrink-0 rounded-full bg-brand-green px-5 py-2 text-sm font-bold text-white transition-opacity hover:opacity-85"
          >
            Register
          </button>
        )}
      </div>
    </article>
  );
}

export function WebinarUpcoming({ onRegister }: { onRegister: (label: string) => void }) {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? upcomingWebinars
      : upcomingWebinars.filter((w) => w.stage === active);

  return (
    <section id="upcoming" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-orange">
            The full series
          </p>
          <h2 className="text-3xl font-bold text-brand-purple sm:text-4xl lg:text-[42px]">
            Six sessions, one a month
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-base text-black/60">
            Thursday lunchtimes at 1pm. Follow the series in order for the
            whole process end to end, or book the single session you need.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2.5">
          {stageKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`rounded-full border-[1.5px] px-5 py-2 text-sm font-bold transition-colors ${
                active === key
                  ? "border-brand-purple bg-brand-purple text-white"
                  : "border-[#DCD2E6] bg-white text-black/50 hover:border-brand-purple-2 hover:text-brand-purple-2"
              }`}
            >
              {filterLabels[key]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((w) => (
            <WebinarCard key={w.ep} webinar={w} onRegister={onRegister} />
          ))}
        </div>
      </div>
    </section>
  );
}

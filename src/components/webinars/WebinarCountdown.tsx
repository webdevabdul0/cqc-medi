"use client";

import { useState, useEffect } from "react";

function calcTime(isoDate: string) {
  let diff = new Date(isoDate).getTime() - Date.now();
  if (diff < 0) diff = 0;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m: String(m).padStart(2, "0"), s: String(s).padStart(2, "0") };
}

export function WebinarCountdown({ isoDate }: { isoDate: string }) {
  const [time, setTime] = useState(calcTime(isoDate));

  useEffect(() => {
    const id = setInterval(() => setTime(calcTime(isoDate)), 1000);
    return () => clearInterval(id);
  }, [isoDate]);

  const units = [
    { value: time.d, label: "days" },
    { value: time.h, label: "hrs" },
    { value: time.m, label: "min" },
    { value: time.s, label: "sec" },
  ];

  return (
    <div className="flex gap-2.5 mb-7">
      {units.map(({ value, label }) => (
        <div key={label} className="flex-1 rounded-xl bg-white/10 py-3 text-center">
          <b className="block text-2xl font-bold text-brand-green leading-none font-[Quicksand,sans-serif]">
            {value}
          </b>
          <small className="text-[10px] uppercase tracking-widest opacity-70">{label}</small>
        </div>
      ))}
    </div>
  );
}

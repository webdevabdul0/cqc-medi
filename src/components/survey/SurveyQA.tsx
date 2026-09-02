"use client";

import Image from "next/image";
import { useState } from "react";

const QA_REASONS = [
  "I am planning to register and want to understand the process",
  "My application was returned or refused",
  "I am not sure whether I need to register at all",
  "I am already registered and preparing for assessment",
  "I am changing legal entity or adding an activity",
  "I am comparing consultants before I commit",
  "Something else",
];

function nextLastFriday(from: Date) {
  const today = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  for (let i = 0; i < 14; i++) {
    const d = new Date(today.getFullYear(), today.getMonth() + i + 1, 0);
    d.setDate(d.getDate() - ((d.getDay() - 5 + 7) % 7));
    if (d >= today) return d;
  }
  return today;
}

function longDate(d: Date) {
  return d.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SurveyQA() {
  const session = nextLastFriday(new Date());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [saved, setSaved] = useState(false);

  function submit() {
    if (!name) return setError("Add your name for the door list.");
    if (!EMAIL_RE.test(email))
      return setError("That email address does not look right.");
    if (phone.replace(/[^0-9]/g, "").length < 10)
      return setError("Add a phone number in case the session moves.");
    if (!reason)
      return setError(
        "Tell us what brings you, so we can have the right consultant in the room.",
      );
    setError(undefined);
    setSaved(true);
  }

  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-[32px] lg:grid-cols-2">
      <div className="bg-gradient-to-r from-brand-purple to-brand-purple-2 p-6 sm:p-10">
        <span className="text-sm font-bold uppercase tracking-wide text-white/80">
          Last Friday of every month
        </span>
        <h3 className="mt-3 text-3xl font-bold leading-[1.2] text-white sm:text-4xl">
          Open CQC Q&amp;A session in Enfield
        </h3>
        <p className="mt-4 max-w-[550px] text-base leading-[1.3] text-white/85">
          Bring your statement of purpose, your policies, or just your
          questions. Our consultants answer them in the room, in front of
          everyone else in the same position. Free to attend, and seats are
          limited.
        </p>

        <div className="mt-6 flex flex-wrap items-baseline gap-3 rounded-xl border border-white/30 px-4 py-3 text-sm text-white">
          <span className="font-bold uppercase tracking-wide text-brand-green">
            Next session
          </span>
          <span className="font-semibold">{longDate(session)}</span>
          <span className="text-white/70">2:00pm to 4:00pm</span>
        </div>

        <p className="mt-6 max-w-[550px] border-l-2 border-brand-green pl-4 text-sm leading-[1.3] text-white/70">
          Before you pay anyone for CQC support, meet them. If someone has
          cold-called you claiming to be from CQC or promising a fast-tracked
          registration, you can check them against CQC directly on 03000
          616161.
        </p>

        {saved ? (
          <div className="mt-6 border border-white/30 bg-white/10 p-5">
            <p className="text-sm font-bold uppercase tracking-wide text-brand-green">
              Your seat is saved
            </p>
            <p className="mt-2 text-base leading-[1.3] text-white">
              Confirmation is on its way to {email}. Bring whatever you have
              written so far, even if it is half finished.
            </p>
          </div>
        ) : (
          <>
            <p className="mt-6 text-sm font-bold text-white">
              Save your seat and we will send you the address
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-xl bg-white px-6 py-3.5 text-base text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl bg-white px-6 py-3.5 text-base text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-xl bg-white px-6 py-3.5 text-base text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="rounded-xl bg-white px-6 py-3.5 text-base text-black/70 focus:outline-none focus:ring-2 focus:ring-brand-green"
              >
                <option value="">What brings you to the session</option>
                {QA_REASONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
            {error && (
              <p className="mt-3 text-sm font-semibold text-[#ffb4b4]">
                {error}
              </p>
            )}
            <button
              type="button"
              onClick={submit}
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-brand-green px-[30px] py-4 text-base font-bold text-[#fbfbfb] transition-opacity hover:opacity-90"
            >
              Book my £15 call
            </button>
          </>
        )}
      </div>

      <div className="relative min-h-[320px]">
        <Image
          src="/images/mc-survey-qa-handshake.png"
          alt="Consultant meeting a provider at the Q&A session"
          fill
          sizes="(min-width: 1024px) 640px, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

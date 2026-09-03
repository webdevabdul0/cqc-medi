"use client";

import Image from "next/image";
import { useState } from "react";
import { FlosslyModal } from "../FlosslyModal";
import { PrimaryButton } from "../Buttons";
import type { SurveyResult as SurveyResultType } from "./evaluate";

const BOOK_CALL_FORM = "https://app.flossly.ai/lead-form/9fb650db3c42124684a0b26a3ab38981323c169fbc32d3306528c4c837b2e02d";
const GOCARDLESS = "https://pay.gocardless.com/BRT01KYW3FK2XFX14FCWBQ757FN3Q";
const CALENDLY_CALL = "https://calendly.com/smarthealthcompliance/medi-comply-demo-by-shc-1";

const STAMP_CLASSES: Record<SurveyResultType["stampTone"], string> = {
  ok: "border-brand-green text-brand-green",
  warn: "border-brand-orange text-brand-orange",
  no: "border-[#d6373a] text-[#d6373a]",
};

const FINDING_CLASSES: Record<"ok" | "gap" | "no", string> = {
  ok: "bg-brand-green",
  gap: "bg-brand-orange",
  no: "bg-[#ef5658]",
};

const FINDING_GLYPH: Record<"ok" | "gap" | "no", string> = {
  ok: "✓",
  gap: "!",
  no: "✕",
};

const NEXT_STEP_COPY: Record<
  SurveyResultType["route"],
  {
    title: string;
    priceCaption: string;
    body: string;
    includes: string[];
  }
> = {
  start: {
    title: "Start your application",
    priceCaption:
      "£1,599 in full, or secure your place with a £99 deposit deducted from the balance",
    body: "We draft the forms, build the evidence pack around your statement of purpose, prepare your manager for the fit person interview and run a pre-submission review before anything reaches CQC. Work begins within 24 hours of the invoice being settled.",
    includes: [],
  },
  audit: {
    title: "Book your discovery call",
    priceCaption:
      "for a discovery call, a full report and a consultation with our team",
    body: "The check above tells you where you fall short. The discovery call fixes it: a consultant works through your gaps with you, you get it in writing to work from, and you get proper CQC advice from a team that does this every day.",
    includes: [
      "A discovery call that goes through every blocker and gap from your check, and the order to fix them in",
      "A full report you keep: your verdict, the documents CQC will ask for, and a realistic submission date",
      "A CQC consultation with our team, with direct advice on your registration route and your registered manager",
      "A consultant reads your answers before you speak, so you are not explaining it all again from scratch",
      "Direct answers to your own questions, whatever you bring to the call",
      "The £15 credited against your registration fee if you go ahead with us",
    ],
  },
  scope: {
    title: "Book your discovery call",
    priceCaption:
      "for a discovery call, a full report and a consultation with our team",
    body: "A consultant checks your model against the regulated activity definitions and tells you plainly whether you need to register, then puts it in writing. If you do not need to register, they will say so and that is the end of it. Operating unregistered when you should be registered is a criminal offence, so it is worth asking someone who knows.",
    includes: [
      "A discovery call that places your model against the regulated activity definitions and tells you where it sits",
      "A full report you keep: whether you must register, what would tip you into scope, and what keeps you out",
      "A CQC consultation with our team on the route and the timeline, if it turns out you do need to register",
      "A consultant reads your answers before you speak, so you are not explaining it all again from scratch",
      "Direct answers to your own questions, whatever you bring to the call",
      "The £15 credited against your registration fee if you go ahead with us",
    ],
  },
};

export function SurveyResult({
  result,
  reference,
  onRestart,
}: {
  result: SurveyResultType;
  reference: string;
  onRestart: () => void;
}) {
  const next = NEXT_STEP_COPY[result.route];
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="mx-auto flex max-w-[1280px] flex-col gap-8">
      <div className="rounded-[32px] border border-[#d8d8d8] bg-white p-6 sm:p-10">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <p className="text-lg font-bold text-brand-purple">
            Eligibility decision notice
          </p>
          <p className="text-right text-sm text-black/50">
            Ref {reference}
            <br />
            {new Date().toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <h2 className="max-w-[848px] text-3xl font-bold leading-[1.2] text-brand-purple sm:text-4xl">
            {result.verdict}
          </h2>
          <div
            className={`inline-flex shrink-0 flex-col items-center border-[3px] px-6 py-3 text-center uppercase ${STAMP_CLASSES[result.stampTone]}`}
          >
            <span className="text-xl font-bold leading-[1.3]">
              {result.stamp}
            </span>
            <span className="text-sm font-medium leading-[1.3]">
              {result.stampNote}
            </span>
          </div>
        </div>
        <p className="mt-4 max-w-[848px] text-base leading-[1.3] text-black/70">
          {result.sub}
        </p>

        <div className="mt-8 divide-y divide-[#eee] border-t border-[#eee]">
          {result.findings.map((finding, i) => (
            <div key={i} className="flex items-start gap-4 py-4">
              <span
                className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded text-xs font-bold text-white ${FINDING_CLASSES[finding.k]}`}
              >
                {FINDING_GLYPH[finding.k]}
              </span>
              <div>
                <p className="text-base text-black">{finding.label}</p>
                {finding.note && (
                  <p className="mt-0.5 text-sm text-black/60">
                    {finding.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 overflow-hidden rounded-[32px] border border-[#d8d8d8] lg:grid-cols-2">
        <div className="bg-white p-6 sm:p-10">
          <span className="text-xl font-bold text-black sm:text-[28px]">
            Recommended next step
          </span>
          <h3 className="mt-3 text-3xl font-bold text-brand-purple sm:text-4xl lg:text-[50px]">
            {next.title}
          </h3>

          {result.route === "start" ? (
            <p className="mt-4 text-sm font-semibold text-black">
              {next.priceCaption}
            </p>
          ) : (
            <div className="mt-4 flex items-baseline gap-4">
              <span className="text-5xl font-bold text-brand-purple">
                £15
              </span>
              <span className="max-w-[220px] text-sm leading-[1.3] text-black">
                {next.priceCaption}
                <em className="mt-1 block text-sm font-bold uppercase not-italic tracking-wide text-brand-green">
                  About the price of three coffees
                </em>
              </span>
            </div>
          )}

          <p className="mt-6 text-base leading-[1.3] text-black/70">
            {next.body}
          </p>

          {next.includes.length > 0 && (
            <>
              <p className="mt-6 text-xl font-bold text-brand-purple-2 sm:text-[28px]">
                What your £15 gets you
              </p>
              <ul className="mt-4 space-y-3">
                {next.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-[1.3] text-black">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded bg-brand-green text-xs font-bold text-white">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="relative min-h-[320px]">
          <Image
            src="/images/mc-survey-consultant-call.png"
            alt="Consultant taking a discovery call"
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-3 border border-white bg-black/50 p-4 backdrop-blur-md">
            <PrimaryButton
              onClick={result.route === "start" ? undefined : () => setFormOpen(true)}
              href={result.route === "start" ? CALENDLY_CALL : undefined}
              external={result.route === "start"}
            >
              {result.route === "start"
                ? "Book the start call"
                : "Book my £15 call"}
            </PrimaryButton>
            {result.route !== "start" && (
              <a
                href={CALENDLY_CALL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white bg-white px-[30px] py-4 text-base font-bold text-brand-purple transition-opacity hover:opacity-90"
              >
                Already paid? Choose a time
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          type="button"
          onClick={onRestart}
          className="inline-flex items-center justify-center rounded-xl border border-brand-purple px-[30px] py-4 text-base font-bold text-brand-purple transition-colors hover:bg-brand-lilac"
        >
          Start again
        </button>
        <p className="mx-auto mt-6 max-w-[600px] text-xs leading-[1.4] text-black/50">
          This check is an indicative guide based on your own answers. It is
          not a decision by the Care Quality Commission and it is not legal
          advice. Registration decisions rest with CQC alone.
        </p>
      </div>

      {formOpen && (
        <FlosslyModal
          src={BOOK_CALL_FORM}
          onClose={() => setFormOpen(false)}
          redirectAfterSubmit={GOCARDLESS}
        />
      )}
    </div>
  );
}

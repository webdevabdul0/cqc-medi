"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { QUESTIONS, SECTIONS } from "./data";
import { evaluate, type SurveyAnswers } from "./evaluate";
import { SurveyQA } from "./SurveyQA";
import { SurveyQuestionCard } from "./SurveyQuestionCard";
import { SurveyResult } from "./SurveyResult";

type Contact = {
  name: string;
  business: string;
  email: string;
  phone: string;
  dialCode: string;
  location: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function makeReference() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `EL-${String(d.getFullYear()).slice(2)}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${rand}`;
}

const TOTAL = QUESTIONS.length + 1;

export function SurveyWidget() {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<SurveyAnswers>({});
  const [contact, setContact] = useState<Contact>({
    name: "",
    business: "",
    email: "",
    phone: "",
    dialCode: "+44",
    location: "",
  });
  const [consent, setConsent] = useState(false);
  const [formError, setFormError] = useState<string | undefined>();
  const [finished, setFinished] = useState(false);
  const [reference] = useState(makeReference);
  const submittedRef = useRef(false);

  const doneSections = useMemo(() => {
    return SECTIONS.filter((s) => {
      if (s.key === "G") return finished;
      const qs = QUESTIONS.filter((q) => q.section === s.key);
      return qs.every((q) => answers[q.id] !== undefined);
    }).map((s) => s.key);
  }, [answers, finished]);

  const result = useMemo(
    () => (finished ? evaluate(answers) : null),
    [finished, answers],
  );

  // Generate PDFs, upload to S3, call webhook + email when survey finishes
  useEffect(() => {
    if (!finished || !result || submittedRef.current) return;
    submittedRef.current = true;

    const dateStr = new Date().toLocaleDateString("en-GB", {
      weekday: "long", day: "numeric", month: "long", year: "numeric",
    });

    async function run() {
      try {
        // 1. Generate PDFs
        const { buildSurveyPdf, buildResultPdf } = await import("@/lib/surveyPdf");
        const [surveyBlob, resultBlob] = await Promise.all([
          buildSurveyPdf(answers, contact, reference, dateStr),
          buildResultPdf(result!, contact, reference, dateStr),
        ]);

        // 2. Get presigned upload URLs
        const urlRes = await fetch("/api/survey/upload-urls", { method: "POST" });
        if (!urlRes.ok) throw new Error("Failed to get upload URLs");
        const { survey: surveyUrls, result: resultUrls } = await urlRes.json() as {
          survey: { uploadUrl: string; readUrl: string };
          result: { uploadUrl: string; readUrl: string };
        };

        // 3. Upload directly to S3
        await Promise.all([
          fetch(surveyUrls.uploadUrl, {
            method: "PUT",
            headers: { "Content-Type": "application/pdf" },
            body: surveyBlob,
          }),
          fetch(resultUrls.uploadUrl, {
            method: "PUT",
            headers: { "Content-Type": "application/pdf" },
            body: resultBlob,
          }),
        ]);

        // 4. Call server: Flossly webhook + email
        await fetch("/api/survey/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: contact.name,
            email: contact.email,
            phone: `${contact.dialCode}${contact.phone.replace(/[^0-9]/g, "").replace(/^0+/, "")}`,
            business: contact.business,
            location: contact.location,
            surveyUrl: surveyUrls.readUrl,
            resultUrl: resultUrls.readUrl,
            consent,
            reference,
          }),
        });
      } catch (err) {
        console.error("[survey submit]", err);
      }
    }

    void run();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  if (finished && result) {
    return (
      <section id="survey" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
          <SurveyResult
            result={result}
            reference={reference}
            onRestart={() => {
              setAnswers({});
              setContact({
                name: "",
                business: "",
                email: "",
                phone: "",
                dialCode: "+44",
                location: "",
              });
              setConsent(false);
              setFinished(false);
              setIdx(0);
            }}
          />
          <div className="mx-auto mt-8 max-w-[1280px]">
            <SurveyQA />
          </div>
        </div>
      </section>
    );
  }

  // final step: contact details
  if (idx >= QUESTIONS.length) {
    function submit() {
      if (!contact.name) return setFormError("Add your name so we know whose notice this is.");
      if (!contact.business)
        return setFormError(
          "Add your company name, or the trading name you plan to register.",
        );
      if (!EMAIL_RE.test(contact.email))
        return setFormError(
          "That email address does not look right. Check it and try again.",
        );
      if (contact.phone.replace(/[^0-9]/g, "").length < 10)
        return setFormError("Add a phone number we can reach you on.");
      if (!contact.location)
        return setFormError("Add the town or city the service will operate from.");
      if (!consent)
        return setFormError("Tick the box so we have your permission to send it.");
      setFormError(undefined);
      setFinished(true);
    }

    return (
      <section id="survey" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
          <SurveyQuestionCard
            activeSection="G"
            doneSections={doneSections}
            step={TOTAL}
            total={TOTAL}
            heading="Where should we send your decision notice?"
            subtext="Your findings are written up against your business, so we need to know whose they are. We use your location to tell you which CQC regional team will handle the application."
            type="form"
            showBack
            onBack={() => setIdx(idx - 1)}
            onNext={submit}
            nextLabel="See my result"
            message={formError}
            fields={[
              {
                name: "name",
                label: "Your Name",
                value: contact.name,
                onChange: (v) => setContact((c) => ({ ...c, name: v })),
              },
              {
                name: "company",
                label: "Company name",
                value: contact.business,
                onChange: (v) => setContact((c) => ({ ...c, business: v })),
              },
              {
                name: "email",
                label: "Email",
                type: "email",
                value: contact.email,
                onChange: (v) => setContact((c) => ({ ...c, email: v })),
              },
              {
                name: "phone",
                label: "Phone number",
                isPhone: true,
                value: contact.phone,
                onChange: (v) => setContact((c) => ({ ...c, phone: v })),
                dialCode: contact.dialCode,
                onDialCodeChange: (v) => setContact((c) => ({ ...c, dialCode: v })),
              },
              {
                name: "location",
                label: "Business location",
                fullWidth: true,
                value: contact.location,
                onChange: (v) => setContact((c) => ({ ...c, location: v })),
              },
            ]}
            consentLabel="Send me my decision notice and gap list, and have a consultant follow up about it. This check is indicative and is not a decision by CQC."
            consentChecked={consent}
            onConsentChange={setConsent}
          />
        </div>
      </section>
    );
  }

  // question steps
  const question = QUESTIONS[idx];
  const picked = answers[question.id];
  const selected = Array.isArray(picked) ? picked : picked ? [picked] : [];
  const canGo =
    question.type === "multi"
      ? selected.length > 0
      : picked !== undefined;

  function selectSingle(optionId: string) {
    setAnswers((prev) => ({ ...prev, [question.id]: optionId }));
    setTimeout(() => setIdx((i) => i + 1), 220);
  }

  function toggleMulti(optionId: string) {
    const option = question.options.find((o) => o.id === optionId);
    const current = Array.isArray(answers[question.id])
      ? (answers[question.id] as string[])
      : [];
    let next: string[];
    if (option?.exclusive) {
      next = current.includes(optionId) ? [] : [optionId];
    } else {
      const withoutExclusive = current.filter((id) => {
        const opt = question.options.find((o) => o.id === id);
        return !opt?.exclusive;
      });
      next = withoutExclusive.includes(optionId)
        ? withoutExclusive.filter((id) => id !== optionId)
        : [...withoutExclusive, optionId];
    }
    setAnswers((prev) => ({ ...prev, [question.id]: next }));
  }

  return (
    <section id="survey" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <SurveyQuestionCard
          activeSection={question.section}
          doneSections={doneSections}
          step={idx + 1}
          total={TOTAL}
          heading={question.prompt}
          subtext={question.help}
          type={question.type === "single" ? "radio" : "checkbox"}
          options={question.options}
          selected={selected}
          onSelect={question.type === "single" ? selectSingle : toggleMulti}
          showBack={idx > 0}
          onBack={() => setIdx((i) => i - 1)}
          onNext={() => setIdx((i) => i + 1)}
          nextDisabled={!canGo}
          nextLabel={
            idx === QUESTIONS.length - 1
              ? "Last step"
              : question.type === "multi"
                ? "Continue"
                : "Next"
          }
        />
      </div>
    </section>
  );
}

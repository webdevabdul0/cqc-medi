"use client";

import { useEffect, useRef, useState } from "react";
import type { SurveyResult } from "@/components/survey/evaluate";

const SAMPLE_CONTACT = {
  name: "Jane Smith",
  business: "Meadow Care Ltd",
  email: "jane@meadowcare.co.uk",
  phone: "+447700900123",
  location: "Birmingham",
};

const SAMPLE_REFERENCE = "EL-260904-4291";
const SAMPLE_DATE = "Thursday, 4 September 2026";

// A representative "needs gaps fixed" result
const SAMPLE_RESULT_AUDIT: SurveyResult = {
  route: "audit",
  stamp: "GAPS FOUND",
  stampNote: "Action required",
  stampTone: "warn",
  verdict: "You are likely within scope for CQC registration, but three eligibility gaps need to be resolved before you can submit.",
  sub: "Your activity profile and location suggest a regulated activity is being carried out. The gaps below must be addressed before CQC will accept an application — your discovery call will go through each one.",
  findings: [
    { k: "ok",  label: "Regulated activity — Personal care", note: "Personal care is being provided, bringing you into scope." },
    { k: "ok",  label: "Registered manager — named candidate identified", note: "You have a named candidate who meets the fit person criteria." },
    { k: "gap", label: "DBS check — enhanced disclosure not yet obtained", note: "An enhanced DBS check for the registered manager is required before submission." },
    { k: "gap", label: "Policies and procedures — incomplete", note: "Your safeguarding and medication management policies need updating to meet CQC standards." },
    { k: "no",  label: "Premises inspection readiness — not confirmed", note: "The premises have not been assessed against the CQC environment standards." },
  ],
};

// A "ready to go" result
const SAMPLE_RESULT_START: SurveyResult = {
  route: "start",
  stamp: "ELIGIBLE",
  stampNote: "Proceed to register",
  stampTone: "ok",
  verdict: "Your answers indicate you are eligible to proceed with a CQC registration application now.",
  sub: "All key eligibility criteria are met. You have a named registered manager, your regulated activity is confirmed, and your evidence pack foundations are in place.",
  findings: [
    { k: "ok", label: "Regulated activity — Treatment of disease, disorder or injury (TDDI)", note: "The services described place you in scope for registration." },
    { k: "ok", label: "Registered manager — candidate identified and DBS obtained" },
    { k: "ok", label: "Premises — suitable and inspectable" },
    { k: "ok", label: "Policies and procedures — core set in place" },
  ],
};

export default function PdfPreviewPage() {
  const [auditUrl, setAuditUrl] = useState<string | null>(null);
  const [startUrl, setStartUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    async function generate() {
      const { buildResultPdf } = await import("@/lib/surveyPdf");
      const [auditBlob, startBlob] = await Promise.all([
        buildResultPdf(SAMPLE_RESULT_AUDIT, SAMPLE_CONTACT, SAMPLE_REFERENCE, SAMPLE_DATE),
        buildResultPdf(SAMPLE_RESULT_START, SAMPLE_CONTACT, "EL-260904-8877", SAMPLE_DATE),
      ]);
      setAuditUrl(URL.createObjectURL(auditBlob));
      setStartUrl(URL.createObjectURL(startBlob));
      setLoading(false);
    }
    void generate();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-2 text-2xl font-bold text-gray-800">PDF Preview — Result PDFs</h1>
      <p className="mb-8 text-sm text-gray-500">Dev-only page. Two variants: &ldquo;gaps found&rdquo; (audit route) and &ldquo;eligible&rdquo; (start route).</p>
      {loading && <p className="text-gray-500">Generating PDFs…</p>}
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        {auditUrl && (
          <div>
            <p className="mb-2 font-semibold text-gray-700">Audit route — &quot;Gaps Found&quot;</p>
            <iframe src={auditUrl} className="h-[900px] w-full rounded shadow-lg" />
          </div>
        )}
        {startUrl && (
          <div>
            <p className="mb-2 font-semibold text-gray-700">Start route — &quot;Eligible&quot;</p>
            <iframe src={startUrl} className="h-[900px] w-full rounded shadow-lg" />
          </div>
        )}
      </div>
    </div>
  );
}

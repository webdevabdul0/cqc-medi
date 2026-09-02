export type Finding = { k: "ok" | "gap" | "no"; label: string; note?: string };

export type SurveyAnswers = Record<string, string | string[]>;

export type SurveyResult = {
  outcome:
    | "OUT_OF_SCOPE"
    | "NOT_REQUIRED"
    | "READY"
    | "NEARLY"
    | "NOT_READY";
  stamp: string;
  stampNote: string;
  stampTone: "ok" | "warn" | "no";
  verdict: string;
  sub: string;
  findings: Finding[];
  route: "start" | "audit" | "scope";
  gaps: number;
  blockers: number;
};

const NATION_REGULATORS: Record<string, string> = {
  scotland: "Care Inspectorate and Healthcare Improvement Scotland",
  wales: "Care Inspectorate Wales and Healthcare Inspectorate Wales",
  ni: "the Regulation and Quality Improvement Authority",
};

const DOCUMENT_NAMES: Record<string, string> = {
  safeguarding: "safeguarding",
  consent: "consent",
  data: "information governance",
  recruitment: "safer recruitment",
  training: "training and competency",
  business: "business plan and forecast",
  complaints: "complaints and duty of candour",
};

export function evaluate(answers: SurveyAnswers): SurveyResult {
  const acts = Array.isArray(answers.activities) ? answers.activities : [];
  const docs = Array.isArray(answers.documents) ? answers.documents : [];
  const regulated = acts.length > 0 && !acts.includes("none");

  if (answers.nation !== "england") {
    const nation = String(answers.nation ?? "");
    return {
      outcome: "OUT_OF_SCOPE",
      stamp: "Outside CQC",
      stampNote: "Wrong regulator",
      stampTone: "no",
      verdict: "CQC does not regulate services outside England.",
      sub: `Your service falls to ${NATION_REGULATORS[nation] ?? "a different regulator"} instead. The evidence they want overlaps heavily with CQC's, so the preparation is not wasted, but the application route is different.`,
      findings: [
        {
          k: "no",
          label: "Service is not in England",
          note: "CQC registration under the Health and Social Care Act 2008 applies to England only",
        },
      ],
      route: "scope",
      gaps: 0,
      blockers: 0,
    };
  }

  if (!regulated) {
    return {
      outcome: "NOT_REQUIRED",
      stamp: "Likely exempt",
      stampNote: "No regulated activity",
      stampTone: "warn",
      verdict: "On what you have told us, you probably do not need to register.",
      sub: "Registration is triggered by carrying on a regulated activity. Nothing you selected is one. That said, the boundary is where most people get caught out: aesthetics, IV therapy and staffing models can cross into regulated territory depending on who does what, and getting it wrong is a criminal offence rather than a paperwork problem.",
      findings: [
        {
          k: "ok",
          label: "No regulated activity selected",
          note: "On this answer alone, registration is not required",
        },
        {
          k: "gap",
          label: "Worth confirming the boundary in writing",
          note: "Prescription-only treatments, delegated clinical tasks and how your staff are engaged can all move you into scope",
        },
      ],
      route: "scope",
      gaps: 0,
      blockers: 0,
    };
  }

  const ok: Finding[] = [];
  const gaps: Finding[] = [];
  const blocks: Finding[] = [];

  ok.push({
    k: "ok",
    label: "You are carrying on a regulated activity in England",
    note: `${acts.length} activity type${acts.length > 1 ? "s" : ""} selected, which sets your document list`,
  });

  if (answers.fitness === "yes" || answers.fitness === "unsure") {
    blocks.push({
      k: "no",
      label: "Fit person declaration needs review before anything is submitted",
      note: "A disclosure does not automatically stop registration, but it has to be presented properly and with the right supporting evidence. Handled badly it is a refusal.",
    });
  } else {
    ok.push({ k: "ok", label: "No fit person flags declared" });
  }

  if (answers.entity === "none") {
    blocks.push({
      k: "no",
      label: "No legal entity yet",
      note: "CQC registers a legal entity. Incorporate or formalise before you apply, and use the same name throughout",
    });
  } else {
    ok.push({ k: "ok", label: "Legal entity exists" });
  }

  const orgNeedsRM = answers.entity === "limited" || answers.entity === "partnership";
  if (answers.manager === "recruiting") {
    blocks.push({
      k: "no",
      label: "No registered manager identified",
      note: "An organisation needs one for each regulated activity. The manager files their own application alongside yours",
    });
  } else if (answers.manager === "unsure") {
    gaps.push({
      k: "gap",
      label: "Unclear whether you need a registered manager",
      note: "Turns on your legal entity and who is in day-to-day charge. Quick to settle, expensive to get wrong",
    });
  } else if (answers.manager === "self" && orgNeedsRM) {
    gaps.push({
      k: "gap",
      label: "Sole charge answer does not match your legal entity",
      note: "You have selected a company or partnership, which must have a registered manager even if that person is you",
    });
  } else {
    ok.push({ k: "ok", label: "Registered manager position is clear" });
  }

  if (answers.rm_credentials === "both") {
    ok.push({ k: "ok", label: "Manager can evidence experience and qualification" });
  } else if (answers.rm_credentials === "neither") {
    blocks.push({
      k: "no",
      label: "Manager cannot yet evidence competence",
      note: "CQC interviews the manager against the specific activities you apply for",
    });
  } else if (answers.rm_credentials === "experience") {
    gaps.push({
      k: "gap",
      label: "Manager has experience but no Level 5",
      note: "Workable if the application shows enrolment or an equivalent, and the interview preparation is done properly",
    });
  } else {
    gaps.push({
      k: "gap",
      label: "Manager is qualified but light on experience in this service type",
      note: "Needs careful evidencing of relevant competence",
    });
  }

  if (answers.dbs === "yes") {
    ok.push({ k: "ok", label: "Enhanced DBS in the form CQC accepts" });
  } else if (answers.dbs === "wrong") {
    gaps.push({
      k: "gap",
      label: "DBS is the wrong type",
      note: "CQC generally will not accept a certificate countersigned by a previous employer or agency. Reapply through the right route now, it takes weeks",
    });
  } else if (answers.dbs === "applied") {
    gaps.push({
      k: "gap",
      label: "DBS still in progress",
      note: "Not a blocker, but it sets your earliest realistic submission date",
    });
  } else {
    blocks.push({
      k: "no",
      label: "No DBS started",
      note: "This is usually the longest single lead time in the whole process",
    });
  }

  if (answers.premises === "secured" || answers.premises === "office") {
    ok.push({ k: "ok", label: "Premises position is evidenced" });
  } else if (answers.premises === "progress") {
    gaps.push({
      k: "gap",
      label: "Premises not yet secured",
      note: "CQC wants proof of legal occupancy, and a building control completion certificate for care homes",
    });
  } else {
    blocks.push({
      k: "no",
      label: "No premises identified",
      note: "Location is a condition of your registration, so it cannot be left open",
    });
  }

  if (answers.sop === "tailored") {
    ok.push({ k: "ok", label: "Statement of purpose written for this service" });
  } else if (answers.sop === "draft") {
    gaps.push({
      k: "gap",
      label: "Statement of purpose is a draft or an unadapted template",
      note: "It must match the activities, service user bands and locations on the form exactly",
    });
  } else {
    blocks.push({
      k: "no",
      label: "No statement of purpose",
      note: "Mandatory. The application does not go anywhere without it",
    });
  }

  const core = [
    "safeguarding",
    "consent",
    "data",
    "recruitment",
    "training",
    "business",
    "complaints",
  ];
  const missing = core.filter((d) => !docs.includes(d));
  if (missing.length === 0) {
    ok.push({ k: "ok", label: "Core policy set is written and tailored" });
  } else if (missing.length <= 2) {
    gaps.push({
      k: "gap",
      label: `Missing ${missing.length} core document${missing.length > 1 ? "s" : ""}`,
      note: `Still to write: ${missing.map((m) => DOCUMENT_NAMES[m]).join(", ")}`,
    });
  } else {
    blocks.push({
      k: "no",
      label: `Missing ${missing.length} of 7 core documents`,
      note: `Still to write: ${missing.map((m) => DOCUMENT_NAMES[m]).join(", ")}. Since February 2026 any one of these missing returns the whole application`,
    });
  }

  if (answers.insurance === "yes") {
    ok.push({ k: "ok", label: "Insurance in place" });
  } else {
    gaps.push({
      k: "gap",
      label: "Insurance not bound",
      note: "Quick to fix, but it needs to be in place and evidenced before submission",
    });
  }

  const findings = [...ok, ...gaps, ...blocks];

  if (blocks.length === 0 && gaps.length === 0) {
    return {
      outcome: "READY",
      stamp: "Ready to submit",
      stampNote: "No gaps found",
      stampTone: "ok",
      verdict: "Nothing in your answers would stop this application.",
      sub: "On the twelve checks above you are in the small minority who could submit now. The remaining risk is consistency: whether your statement of purpose, policies and forms tell the same story. That is what the pre-submission review is for.",
      findings,
      route: "start",
      gaps: 0,
      blockers: 0,
    };
  }
  if (blocks.length === 0) {
    return {
      outcome: "NEARLY",
      stamp: "Eligible, gaps found",
      stampNote: `${gaps.length} to close`,
      stampTone: "warn",
      verdict: `You are eligible to apply, with ${gaps.length} gap${gaps.length > 1 ? "s" : ""} to close first.`,
      sub: "None of these stops you registering. All of them would slow you down or, under the February 2026 rules, get the application returned unread. They are the sort of thing that takes days rather than months.",
      findings,
      route: "audit",
      gaps: gaps.length,
      blockers: 0,
    };
  }
  return {
    outcome: "NOT_READY",
    stamp: "Not ready",
    stampNote: `${blocks.length} blocker${blocks.length > 1 ? "s" : ""}`,
    stampTone: "no",
    verdict: "You are eligible in principle, but submitting today would get this returned.",
    sub: "Eligibility and readiness are different questions. Nothing here says you cannot register. It says the application would come straight back, and under the current rules that means cancelling and rejoining the queue rather than sending the missing piece.",
    findings,
    route: "audit",
    gaps: gaps.length,
    blockers: blocks.length,
  };
}

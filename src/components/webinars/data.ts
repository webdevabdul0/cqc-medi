export const FLOSSLY_WEBINAR_SRC =
  "https://app.flossly.ai/lead-form/f39fac931095d88fb12e2f8062f6bbfb298c52e5aa458712c3e5275b2f7f5d8d";

export const nextWebinar = {
  part: 2,
  total: 6,
  title: "The Silent Application Killers Nobody Warns You About",
  description:
    "The small, quiet things that sink an application — vague wording, thin evidence, a Statement of Purpose that doesn't match the form.",
  date: "Wednesday 10 September 2026",
  isoDate: "2026-09-10T13:00:00+01:00",
  time: "1:00pm – 1:30pm",
  format: "Zoom · 20 min + Q&A",
  host: { name: "Victoria Yannagas", org: "CQC MediSolutions", initials: "VY" },
  seatsLeft: 38,
  seatsTotal: 60,
  registerLabel: "Part 2 — The Silent Application Killers Nobody Warns You About, Wed 10 Sep 2026",
};

export type Stage = "before" | "apply" | "after";

export interface Webinar {
  ep: number;
  day: string;
  month: string;
  year: string;
  title: string;
  blurb: string;
  stage: Stage;
  spaces: string;
  full: boolean;
}

export const upcomingWebinars: Webinar[] = [
  {
    ep: 1,
    day: "20",
    month: "Aug",
    year: "2026",
    title: "CQC's 2026 ShakeUp: Get It Right Before You Apply",
    blurb:
      "Twenty minutes on what has actually changed at CQC this year — how assessments are being run, what it means for applications in the queue, and what providers are being asked for now.",
    stage: "before",
    spaces: "14 places left",
    full: true,
  },
  {
    ep: 2,
    day: "10",
    month: "Sep",
    year: "2026",
    title: "The Silent Application Killers Nobody Warns You About",
    blurb:
      "The small, quiet things that sink an application — vague wording, thin evidence, a Statement of Purpose that doesn't match the form.",
    stage: "apply",
    spaces: "38 places left",
    full: false,
  },
  {
    ep: 3,
    day: "15",
    month: "Oct",
    year: "2026",
    title: "Inspection-Ready: The Premises & Paperwork Checklist",
    blurb:
      "What CQC expects of your location and the document pack behind it, from floor plans and IPC through to Schedule 3 files.",
    stage: "apply",
    spaces: "22 places left",
    full: false,
  },
  {
    ep: 4,
    day: "12",
    month: "Nov",
    year: "2026",
    title: "Money Talks: Making Your Numbers CQC-Proof",
    blurb:
      "Financial viability, fees and the numbers CQC actually looks at — and what a credible business plan needs to show.",
    stage: "apply",
    spaces: "51 places left",
    full: false,
  },
  {
    ep: 5,
    day: "10",
    month: "Dec",
    year: "2026",
    title: "Inside the CQC Interview: Live Mock Q&A",
    blurb:
      "The Registered Manager and Nominated Individual interview: the questions that come up, and what a strong answer sounds like.",
    stage: "apply",
    spaces: "51 places left",
    full: false,
  },
  {
    ep: 6,
    day: "14",
    month: "Jan",
    year: "2027",
    title: "Registered ≠ Compliant: Staying Inspection-Ready All Year",
    blurb:
      "Getting registered is the start. What has to keep running afterwards, and what the first inspection will look for.",
    stage: "after",
    spaces: "60 places left",
    full: false,
  },
];

export const stageNames: Record<Stage, string> = {
  before: "Before you apply",
  apply: "Your application",
  after: "After registration",
};

export const filterLabels: Record<string, string> = {
  all: "All sessions",
  before: "Before you apply",
  apply: "Your application",
  after: "After registration",
};

export const stageKeys = ["all", "before", "apply", "after"] as const;

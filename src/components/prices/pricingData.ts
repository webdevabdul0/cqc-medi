export type Plan = {
  popular?: boolean;
  tag: string;
  title: string;
  price: string;
  priceNote: string;
  body: string;
  features: string[];
  primaryLabel?: string;
  secondaryLabel?: string;
};

export const STAGE_PLANS: Plan[][] = [
  // Stage 01 — Getting registered
  [
    {
      popular: true,
      tag: "One-off · Done for you · Includes coaching",
      title: "CQC Registration with Interview Preparation",
      price: "£1,599",
      priceNote: "One-off",
      body: "Our full registration service plus the coaching that gets your registered manager through their interview. This is the route we recommend to first-time providers, because a strong application still fails at interview stage.",
      features: [
        "All CQC application forms drafted and submitted",
        "Policies and procedures customised to your service",
        "One-to-one coaching for the registered manager",
        "3 mock interviews with written feedback",
      ],
      secondaryLabel: "Talk to us first",
    },
    {
      tag: "One-off · Done for you",
      title: "CQC Registration",
      price: "£1,165",
      priceNote: "One-off",
      body: "We complete and submit your CQC application for you, and handle CQC's follow-up questions until a decision is made. For providers who are confident about the interview and want the paperwork off their desk.",
      features: [
        "New provider application form",
        "Registered manager application form",
        "DBS application and countersigning",
        "Statement of purpose written for your service",
      ],
      secondaryLabel: "Talk to us first",
    },
    {
      tag: "One-off · Done for you",
      title: "CQC Interview Preparation",
      price: "£599",
      priceNote: "One-off",
      body: "Intensive preparation for the registered manager interview. You've already applied — this gets you ready for the questions CQC actually asks, and the follow-ups they ask when an answer is thin.",
      features: [
        "3 mock interviews with a compliance consultant",
        "50+ question and answer pack (PDF)",
        "15-minute prep call on the day",
        "Written feedback on where your answers need work",
      ],
      secondaryLabel: "Talk to us first",
    },
    {
      tag: "One-off · Done for you",
      title: "Policy Bundle",
      price: "£449",
      priceNote: "One-off",
      body: "A complete set of policies and procedures written for your sector and branded to your service, mapped to CQC's quality statements. Supplied in editable Word format so your team can keep them current — not a locked PDF.",
      features: [
        "Full policy and procedure suite for your service type",
        "Mapped to the CQC single assessment framework",
        "Branded with your logo and service details",
        "Editable Word files you own outright",
      ],
      secondaryLabel: "Ask what's included",
    },
  ],
  // Stage 02 — Getting inspection-ready
  [
    {
      tag: "One-off · Assessment + written report",
      title: "Mock Inspection",
      price: "£750",
      priceNote: "one-off",
      body: "A full rehearsal of a CQC assessment, run by a consultant who knows what inspectors open first. We review your evidence, records and staff files, interview your manager, and tell you what a real inspection would find.",
      features: [
        "Evidence and records review against the quality statements",
        "Registered manager interviewed as CQC would",
        "Staff file and training compliance check",
        "Written report with a rated finding per quality statement",
        "Prioritised action plan with deadlines",
      ],
      secondaryLabel: "Check availability",
    },
    {
      tag: "Per visit · On site or remote",
      title: "Consultancy Visits",
      price: "£595",
      priceNote: "per visit",
      body: "A compliance consultant working alongside your team for the day. Most providers book one when they've taken on a new manager, had a requirement notice, or simply can't tell whether their systems would hold up.",
      features: [
        "Gap analysis across governance, records and staffing",
        "Hands-on fixes to your documents while we're there",
        "Briefing session for your staff",
        "Action plan you can hand straight to your manager",
        "Follow-up visits at the same rate, no retainer",
      ],
      secondaryLabel: "Ask about multi-site",
    },
  ],
  // Stage 03 — Staying compliant
  [
    {
      tag: "Monthly · Software · Cancel anytime",
      title: "MediComply Software",
      price: "£99",
      priceNote: "per month",
      body: "The platform your compliance actually lives in once you're registered. Audits, risk assessments, staff training and rotas in one place, so evidence is ready when CQC asks rather than assembled in a panic the week before.",
      features: [
        "Evidence and records review against the quality statements",
        "Registered manager interviewed as CQC would",
        "Staff file and training compliance check",
        "Written report with a rated finding per quality statement",
        "Prioritised action plan with deadlines",
      ],
      secondaryLabel: "Book a demo",
    },
    {
      tag: "Not sure which one",
      title: "Tell us where you are and we'll tell you what you need",
      price: "Free",
      priceNote: "15-minute call",
      body: "If you're between two options, a short call is faster than reading the page twice. We'll tell you honestly if you don't need the bigger package — including if you don't need us at all yet.",
      features: [
        "No sales script and no pressure",
        "A straight answer on timescales and cost",
        "Same consultant who'd handle your file",
      ],
      primaryLabel: "Book a Call",
    },
  ],
];

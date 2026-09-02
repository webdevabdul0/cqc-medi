export type SurveyOption = {
  id: string;
  label: string;
  note?: string;
  exclusive?: boolean;
};

export type SurveyQuestion = {
  id: string;
  section: string;
  type: "single" | "multi";
  prompt: string;
  help: string;
  options: SurveyOption[];
};

export const SECTIONS = [
  { key: "A", name: "Scope" },
  { key: "B", name: "Structure" },
  { key: "C", name: "Fitness" },
  { key: "D", name: "Premises" },
  { key: "E", name: "Evidence" },
  { key: "F", name: "Timing" },
  { key: "G", name: "Your details" },
];

export const QUESTIONS: SurveyQuestion[] = [
  {
    id: "nation",
    section: "A",
    type: "single",
    prompt: "Where will you deliver the service?",
    help: "CQC only regulates services in England. The other UK nations have their own regulators.",
    options: [
      { id: "england", label: "England" },
      { id: "scotland", label: "Scotland" },
      { id: "wales", label: "Wales" },
      { id: "ni", label: "Northern Ireland" },
    ],
  },
  {
    id: "activities",
    section: "A",
    type: "multi",
    prompt: "Which of these will you actually be doing?",
    help: "Pick everything that applies. These are the regulated activities under Schedule 1 of the Health and Social Care Act 2008, in plain English. Your selection decides which documents CQC expects.",
    options: [
      {
        id: "personal_care",
        label: "Personal care in someone's own home",
        note: "Washing, dressing, toileting, help with eating",
      },
      {
        id: "accommodation",
        label: "Accommodation with nursing or personal care",
        note: "Care home, residential home, supported living with care",
      },
      {
        id: "treatment",
        label: "Treatment of disease, disorder or injury",
        note: "Delivered by or under supervision of a healthcare professional",
      },
      {
        id: "surgical",
        label: "Surgical procedures",
        note: "Includes cosmetic surgery, hair transplant and some minor procedures",
      },
      {
        id: "diagnostic",
        label: "Diagnostic and screening procedures",
        note: "Scanning clinics, blood tests, some aesthetic and IV therapy services",
      },
      {
        id: "nursing",
        label: "Nursing care",
        note: "Provided by a registered nurse",
      },
      {
        id: "dental",
        label: "Primary dental care",
        note: "NHS or private dental practice",
      },
      {
        id: "family_planning",
        label: "Family planning, maternity or midwifery services",
      },
      {
        id: "remote",
        label: "Transport services, triage or medical advice provided remotely",
      },
      {
        id: "none",
        label: "None of these",
        note: "Beauty and wellness only, non-medical support, or introductions to self-employed carers",
        exclusive: true,
      },
    ],
  },
  {
    id: "entity",
    section: "B",
    type: "single",
    prompt: "What is the legal entity applying?",
    help: "CQC registers a legal entity, not a trading name. The entity must exist before you apply.",
    options: [
      { id: "limited", label: "Limited company, already incorporated" },
      { id: "partnership", label: "Partnership or LLP, already formed" },
      { id: "sole", label: "Individual or sole trader" },
      { id: "none", label: "Not set up yet" },
    ],
  },
  {
    id: "manager",
    section: "B",
    type: "single",
    prompt: "Do you have a registered manager?",
    help: "Any organisation, including a limited company with one director, must have a registered manager for each regulated activity. Sole traders in day-to-day charge themselves are the exception.",
    options: [
      {
        id: "named",
        label: "Yes, named and ready to submit their own application",
      },
      {
        id: "self",
        label: "I am a sole trader and I will be in day-to-day charge myself",
      },
      { id: "recruiting", label: "No, still recruiting" },
      { id: "unsure", label: "Not sure whether I need one" },
    ],
  },
  {
    id: "rm_credentials",
    section: "B",
    type: "single",
    prompt: "What can the manager evidence?",
    help: "CQC interviews the manager and tests whether they have the qualifications, competence, skills and experience for the specific activities on the application.",
    options: [
      {
        id: "both",
        label: "Relevant management experience and a Level 5 Diploma",
        note: "Or an equivalent qualification, or enrolled and working towards it",
      },
      { id: "experience", label: "Management experience, no formal qualification" },
      {
        id: "qualification",
        label: "Qualification, but limited experience in this service type",
      },
      { id: "neither", label: "Neither yet" },
    ],
  },
  {
    id: "dbs",
    section: "C",
    type: "single",
    prompt: "Is the DBS check in place?",
    help: "CQC needs an enhanced DBS obtained through their own countersignature route, or one on the update service that they can check. High street or employer DBS certificates are usually refused.",
    options: [
      {
        id: "yes",
        label: "Yes, enhanced DBS ready and countersigned or on the update service",
      },
      { id: "applied", label: "Applied for, waiting on it" },
      {
        id: "wrong",
        label: "We have a DBS, but from a previous employer or agency",
      },
      { id: "no", label: "Not started" },
    ],
  },
  {
    id: "fitness",
    section: "C",
    type: "single",
    prompt:
      "Does any of this apply to the provider, nominated individual or manager?",
    help: "Unspent convictions or cautions, inclusion on a barred list, undischarged bankruptcy or insolvency restrictions, disqualification as a director, or a previous CQC registration that was refused or cancelled.",
    options: [
      { id: "none", label: "None of these apply" },
      { id: "yes", label: "One or more applies" },
      { id: "unsure", label: "Not certain, it would need checking" },
    ],
  },
  {
    id: "premises",
    section: "D",
    type: "single",
    prompt: "What is the position on premises?",
    help: "For services delivered at a location, CQC wants evidence of legal occupancy and, for care homes, a building control completion certificate.",
    options: [
      {
        id: "secured",
        label: "Secured, with lease or title and any planning and building sign-off",
      },
      { id: "progress", label: "Identified, still in legals or fit-out" },
      {
        id: "office",
        label: "Care is delivered in people's homes, we have an office base",
      },
      { id: "none", label: "Nothing identified yet" },
    ],
  },
  {
    id: "sop",
    section: "D",
    type: "single",
    prompt: "Is your statement of purpose written?",
    help: "It has to match the activities, service user bands and locations on the form exactly. Inconsistency between the two is one of the most common reasons an application comes straight back.",
    options: [
      { id: "tailored", label: "Written and tailored to this service" },
      {
        id: "draft",
        label: "Rough draft or a bought template we have not adapted",
      },
      { id: "no", label: "Not started" },
    ],
  },
  {
    id: "documents",
    section: "E",
    type: "multi",
    prompt: "Which of these are written for your service, not generic templates?",
    help: "Since February 2026 CQC has looked hardest at consent and information governance. A policy with another provider's name still in it counts as a missing document.",
    options: [
      { id: "safeguarding", label: "Safeguarding policy, adults and children as relevant" },
      { id: "consent", label: "Consent policy, including mental capacity" },
      { id: "data", label: "Data protection and information governance policy" },
      { id: "recruitment", label: "Safer recruitment procedure with your DBS process" },
      { id: "training", label: "Staff induction, training plan and competency framework" },
      { id: "business", label: "Business plan with a twelve month financial forecast" },
      { id: "complaints", label: "Complaints procedure and duty of candour" },
      { id: "medicines", label: "Medicines management, where it applies to you" },
      { id: "none", label: "None of these yet", exclusive: true },
    ],
  },
  {
    id: "insurance",
    section: "E",
    type: "single",
    prompt: "Where are you on insurance?",
    help: "Public liability, and medical malpractice or professional indemnity where the activity calls for it.",
    options: [
      { id: "yes", label: "In place, certificates to hand" },
      { id: "quoted", label: "Quoted, not bound yet" },
      { id: "no", label: "Not arranged" },
    ],
  },
  {
    id: "timeline",
    section: "F",
    type: "single",
    prompt: "When do you want to be registered?",
    help: "Most decisions currently take around ten to sixteen weeks from a clean submission, so work back from your opening date.",
    options: [
      { id: "q1", label: "Within three months" },
      { id: "q2", label: "Three to six months" },
      { id: "q3", label: "Six to twelve months" },
      { id: "exploring", label: "Still working out whether to do it" },
    ],
  },
];

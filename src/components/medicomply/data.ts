export const HERO_PILLS = [
  {
    label: "WHAT IT DOES",
    title: "All in one",
    body: "One system instead of six",
  },
  {
    label: "WHAT IT DOES",
    title: "Built for your sector",
    body: "Your compliance, your evidence",
  },
  {
    label: "WHAT IT DOES",
    title: "Never miss a mandatory",
    body: "Activity calendar and self mock",
  },
  {
    label: "WHERE YOU ARE",
    title: "Applying to CQC",
    body: "Task list, templates, interview",
  },
  {
    label: "WHERE YOU ARE",
    title: "Already registered",
    body: "Off paper, or off a system that never fitted",
  },
];

export const STATS = [
  { value: "100+", label: "Compliance templates" },
  { value: "40+", label: "Digital audits" },
  { value: "50+", label: "CPD courses" },
  { value: "∞", label: "Users per site" },
  { value: "1", label: "Login for all of it" },
  { value: "£500", label: "Annual mock, included" },
];

export const REPLACES = [
  "Paper audit forms",
  "The policy folder",
  "A separate training portal",
  "Rota app",
  "Leave and absence spreadsheet",
  "Staff file cabinet",
  "DBS tracker spreadsheet",
  "Incident book",
  "Complaints log",
  "Safeguarding log",
  "Risk register document",
  "Wall planner",
  "Calendar reminders",
  "The pre-inspection panic folder",
];

export const GENERIC_VS_MEDICOMPLY = [
  {
    generic: "One system for every provider, whatever they do",
    medicomply: "Configured to your service type before you log in",
  },
  {
    generic: "Hundreds of templates, most of them irrelevant to you",
    medicomply: "You see the templates that apply to you, and nothing else",
  },
  {
    generic: "Tasks for services you do not run cluttering your calendar",
    medicomply: "Your activity calendar reflects your actual obligations",
  },
  {
    generic: "You build your own schedule from a blank calendar",
    medicomply: "We build the schedule with you during setup",
  },
  {
    generic: "A login, a welcome email and good luck",
    medicomply: "A consultant sets it up and walks your team through it",
  },
  {
    generic: "Training charged as an extra, or a video library",
    medicomply: "Unlimited training for as long as you are with us",
  },
];

export const FEATURE_TRIO = [
  [
    {
      stat: "100+ templates",
      title: "Compliance templates",
      body: "Over one hundred templates covering the CQC key lines of enquiry: digital audits, risk assessments, logs, checklists, forms, and a CQC question and answer set, all in digital format rather than Word documents you have to remember to save.",
    },
    {
      stat: "Evidence",
      title: "Document management",
      body: "Policies, procedures, certificates, contracts and completed records stored with version history and dates. When an inspector asks for the current version of something, there is only one current version.",
    },
  ],
  [
    {
      stat: "40+ audits",
      title: "Digital audits",
      body: "More than forty customisable digital audits aligned to the key lines of enquiry. Each one is flexible, so you can adjust the questions to your service, and all of them can be completed on the app while you are walking the floor.",
    },
    {
      stat: "Mobile",
      title: "Complete it where the work happens",
      body: "Audits and checks are completed on the app, at the point the task is done. Evidence is attached there and then, which is the only reliable way to make sure it is attached at all.",
    },
  ],
  [
    {
      stat: "Risk",
      title: "Risk assessments and logs",
      body: "A full set of digital risk assessments and logs, reviewed and managed in one place. The risk register populates action plans automatically, so an identified risk turns into an assigned action rather than a note nobody revisits.",
    },
    {
      stat: "Secure",
      title: "Cloud based and centralised",
      body: "All your compliance data in one secure cloud system, accessible from anywhere, with no local files to lose when a laptop dies or a manager leaves.",
    },
  ],
];

export const FREQUENCY_GRID = [
  {
    label: "Daily",
    category: "Checks and logs",
    body: "Opening checks, fridge temperatures, equipment logs, whatever your service requires.",
  },
  {
    label: "Weekly",
    category: "Routine tasks",
    body: "Stock, cleaning schedules, spot checks and team briefings.",
  },
  {
    label: "Monthly",
    category: "Audits",
    body: "Infection control, medicines, health and safety, records audits.",
  },
  {
    label: "Six monthly",
    category: "Reviews",
    body: "Policy reviews, risk assessment reviews, training refreshers.",
  },
  {
    label: "Annual",
    category: "The big ones",
    body: "Full governance review, statement of purpose, insurance and contracts.",
  },
];

export const WHERE_YOU_ARE_STATS = [
  {
    title: "Users",
    label: "Unlimited users per site",
    body: "You are not charged per seat, so there is no reason to share a login. Everyone who needs access gets their own, which is also what makes the audit trail worth having.",
    icon: "/images/mc-stat-users.svg",
  },
  {
    title: "Incidents",
    label: "Complaints, incidents and safeguarding",
    body: "Log complaints, incidents, accidents and safeguarding concerns as they happen, with the actions taken and the outcome recorded against each one. Trends surface in the reporting rather than in a bad assessment.",
    icon: "/images/mc-stat-incidents.svg",
  },
  {
    title: "Reporting",
    label: "Self mock inspection",
    body: "Run reports across audits, training, incidents and outstanding tasks. Then run a self mock inspection against the quality statements to see where you would score today, before anyone else does.",
    icon: "/images/mc-stat-reporting.svg",
  },
];

export const APPLYING_FEATURES = [
  "Simplified task list that shows the next action rather than all ninety at once",
  "Templates specific to your sector, not a generic library you have to filter",
  "Policies and procedures ready to brand and adapt to your service",
  "Evidence attached to the task it proves, so nothing is lost between drafts",
  "Your consultant sees the same screen you do, so reviews happen inside the portal",
  "Everything carries forward into the live system on the day you are registered",
];

export const ALREADY_REGISTERED_PATHS = [
  {
    label: "Path one",
    title: "You are still on paper",
    body: "Folders, wall planners, printed audit forms, signing sheets in a ring binder and a spreadsheet somebody keeps a personal copy of. It works, right up until the moment you need to find one specific record from fourteen months ago while an inspector waits.",
    points: [
      "Nothing is lost when a folder walks, a laptop dies or a manager leaves",
      "Evidence is timestamped, so you can prove when something was done",
      "No printing, no filing, no version confusion over which policy is current",
      "Completed records are searchable by date, by staff member or by task",
      "Audits are completed on the app while you walk the floor, not typed up afterwards",
      "Your team can be anywhere and still see the same live record",
    ],
  },
  {
    label: "Path two",
    title: "You have software, but it was never built for your sector",
    body: "You bought a compliance system, it was designed for care homes, and you run an aesthetic clinic. Half the modules are irrelevant, the templates need rewriting every time, and the team has quietly gone back to a spreadsheet because the system is more work than the work.",
    points: [
      "Configured to your service before you log in, not a library you filter",
      "Your activity calendar matches your real obligations, not a generic schedule",
      "A consultant sets it up, so it is not a project that lands on your manager",
      "You only see the templates, audits and tasks that apply to your service",
      "Add your own tasks, audits and frequencies for anything specific to you",
      "Unlimited training, so the team actually uses it instead of working around it",
    ],
  },
];

export const MOVE_ACROSS_STEPS = [
  {
    number: "01",
    title: "We look at what you already have",
    body: "Your existing policies, audit schedule, risk assessments and staff files, whether they are in folders, on a drive or in another system. We work out what carries over and what is out of date.",
  },
  {
    number: "02",
    title: "We build your calendar around your year",
    body: "Your existing audit dates, review dates and renewal dates are scheduled as they already fall, so you are not restarting a compliance year you are halfway through.",
  },
  {
    number: "03",
    title: "We load it in and fill the gaps",
    body: "Your current documents go into your portal. Where something is missing or has drifted out of date, we tell you, and our sector templates cover it rather than leaving you to write it.",
  },
  {
    number: "04",
    title: "We train the team, then you run it",
    body: "Unlimited training for everyone who needs it, including new starters later. Most teams are working in the portal within the first fortnight.",
  },
];

export const ONBOARDING_STEPS = [
  {
    number: "01",
    title: "We configure your portal",
    body: "Built around your service type, your regulated activities and the sites you run, before you get your login.",
  },
  {
    number: "02",
    title: "We build your activity calendar",
    body: "Your daily, weekly, monthly, six monthly and annual tasks scheduled against your obligations, with the reminders set.",
  },
  {
    number: "03",
    title: "An annual remote mock",
    body: "Every client gets a remote mock inspection once a year, run by a compliance consultant, included in your subscription.",
  },
  {
    number: "04",
    title: "Unlimited training",
    body: "We train your team on the portal for as long as you need it. Not one onboarding call, and not an extra invoice when you hire someone new.",
  },
];

export const ESTABLISHED_PROVIDER_FAQ = [
  {
    title: "We already have systems that work. Why change?",
    body: "If your systems genuinely work, do not change them. The providers who benefit are the ones where compliance depends on one person remembering, where evidence is assembled in the fortnight before an assessment, or where nobody could tell you today whether last month's audits were completed. The honest test is this: if your registered manager left on Friday, could somebody else pick up the compliance on Monday without a handover document that does not exist? If the answer is no, the system is that person, not a system.",
  },
  {
    title: "Will we lose the history we have built up?",
    body: "PLACEHOLDER — answer to be supplied.",
  },
  {
    title: "Our team is not especially technical.",
    body: "PLACEHOLDER — answer to be supplied.",
  },
  {
    title: "We have an assessment coming. Is it too late to move?",
    body: "PLACEHOLDER — answer to be supplied.",
  },
  {
    title: "We run more than one site.",
    body: "PLACEHOLDER — answer to be supplied.",
  },
  {
    title: "What happens if we want to leave?",
    body: "PLACEHOLDER — answer to be supplied.",
  },
];

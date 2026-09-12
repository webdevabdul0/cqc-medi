import type { AccordionItem } from "../Accordion";

export const REGULATED_ACTIVITIES: AccordionItem[] = [
  {
    title: "Personal care",
    body: "Help with the things people can't do for themselves at home: washing, dressing, toileting, eating and help with mobility. It's the activity behind most domiciliary care and supported living services.",
    watchOutFor: "Watch out for",
    watchOutForBody:
      "Housing support and social support on their own (shopping, cleaning, companionship) don't trigger registration. Neither does only prompting or supervising medicines. The moment you cross into personal care tasks, you need to be registered.",
  },
  {
    title: "Accommodation for persons who require nursing or personal care",
    body: "Care homes, with or without nursing, where people live on a long-term or respite basis and receive personal or nursing care on site as part of their accommodation. This is the activity behind residential and nursing care homes.",
    watchOutFor: "Watch out for",
    watchOutForBody:
      "Sheltered or extra-care housing where care is arranged separately by a domiciliary provider usually doesn't need this activity — only the care provider registers. The accommodation itself is only in scope when care is bundled in as part of the offer.",
  },
  {
    title: "Treatment of disease, disorder or injury",
    body: "Clinical treatment aimed at a diagnosed condition, delivered or supervised by a listed healthcare professional. It covers everything from GP-style consultations to injectable treatments involving prescription-only medicines.",
    watchOutFor: "Watch out for",
    watchOutForBody:
      "Purely cosmetic treatments with no medicine and no clinical diagnosis behind them usually fall outside this activity. The line is what's being treated and who's treating it, not how the service markets itself.",
  },
  {
    title: "Surgical procedures",
    body: "Any procedure involving an incision or instruments entering the body, from minor procedures like mole removal to hair transplants and cosmetic surgery under local or general anaesthetic.",
    watchOutFor: "Watch out for",
    watchOutForBody:
      "It doesn't matter how minor the procedure feels or how quickly it's done. If an instrument breaks the skin, this activity applies, and CQC expects the same standard of clinical governance regardless of scale.",
  },
  {
    title: "Diagnostic and screening procedures",
    body: "Tests carried out to establish whether someone has a condition: x-rays, endoscopy, ultrasound scanning used for medical purposes, and similar screening services delivered outside the NHS.",
    watchOutFor: "Watch out for",
    watchOutForBody:
      "Screening for general wellbeing rather than diagnosing a specific condition can sit in a grey area. If the results are used to inform clinical decisions, treat it as in scope and ask us if you're unsure.",
  },
  {
    title: "Nursing care",
    body: "Care provided by, or under the direct supervision of, a registered nurse. It's often registered alongside personal care in domiciliary, supported living and residential settings.",
    watchOutFor: "Watch out for",
    watchOutForBody:
      "Employing a nurse doesn't automatically mean you need this activity — it's about whether nursing care is actually part of what you deliver to service users, not just who's on the payroll.",
  },
  {
    title: "Transport services, triage and medical advice provided remotely",
    body: "Patient transport services, remote triage, and clinical advice given by phone or video by a listed healthcare professional, provided outside the NHS.",
    watchOutFor: "Watch out for",
    watchOutForBody:
      "A booking line or a driver with no clinical input doesn't need this activity. It applies once clinical judgement — triage, advice or medical decision-making — is part of what's delivered remotely.",
  },
  {
    title: "Maternity and midwifery services",
    body: "Care provided by a midwife during pregnancy, birth and the postnatal period, delivered outside the NHS, including independent midwifery practices and private birth services.",
    watchOutFor: "Watch out for",
    watchOutForBody:
      "Antenatal classes or doula support with no clinical midwifery care attached generally don't trigger this activity. It's the clinical midwifery input that brings a service into scope.",
  },
  {
    title: "Services in slimming clinics",
    body: "Weight-management services that involve prescribing or supplying medicines, such as appetite suppressants or other prescription-only treatments for weight loss.",
    watchOutFor: "Watch out for",
    watchOutForBody:
      "Diet plans, coaching and lifestyle programmes with no medicine involved usually sit outside CQC's scope. The moment a prescription enters the service, that changes.",
  },
  {
    title: "Family planning services",
    body: "Contraceptive advice and the fitting or removal of devices such as coils and implants, provided outside the NHS.",
    watchOutFor: "Watch out for",
    watchOutForBody:
      "General sexual health advice without any clinical procedure attached is unlikely to need registration on its own — it's the fitting, removal or prescribing that brings the activity into scope.",
  },
  {
    title: "Accommodation for persons who require treatment for substance misuse",
    body: "Residential rehabilitation and detox services that provide accommodation together with treatment for drug or alcohol dependency.",
    watchOutFor: "Watch out for",
    watchOutForBody:
      "Peer-support or sober-living accommodation with no clinical treatment attached is a different regulatory picture entirely. This activity is about accommodation combined with treatment, not housing on its own.",
  },
  {
    title: "Accommodation and nursing or personal care in the further education sector",
    body: "Residential further-education colleges that provide nursing or personal care to students alongside their education, typically for students with additional needs.",
    watchOutFor: "Watch out for",
    watchOutForBody:
      "Standard college boarding with no personal or nursing care built in doesn't need this activity. It only applies where care, not just accommodation, is part of what the college provides.",
  },
  {
    title: "Assessment or medical treatment for persons detained under the Mental Health Act 1983",
    body: "Assessing or treating patients detained under the Mental Health Act, typically delivered by independent mental health hospitals and secure services.",
    watchOutFor: "Watch out for",
    watchOutForBody:
      "This is one of the more heavily scrutinised activities on the list. Expect CQC to look closely at safeguarding, restrictive practice and staff training from the first conversation onward.",
  },
  {
    title: "Termination of pregnancies",
    body: "Independent-sector abortion services, covering both medical and surgical termination provided outside the NHS.",
    watchOutFor: "Watch out for",
    watchOutForBody:
      "This activity carries its own additional legal requirements alongside CQC registration. We'll walk you through both in the same conversation rather than treating them separately.",
  },
  {
    title: "Management of supply of blood and blood derived products",
    body: "Independent blood banks and services that manage the supply of blood or blood-derived products outside NHS Blood and Transplant.",
    watchOutFor: "Watch out for",
    watchOutForBody:
      "This is a narrow, specialist activity. If it applies to you, you almost certainly already know — but it's easy to miss if blood products are only a small part of a wider clinical service.",
  },
];

export const SCOPE_CHECKLIST = [
  {
    number: "01",
    title: "The right legal entity",
    body: "You register as an individual, a partnership or an organisation. Applying as the wrong entity is one of the most common reasons an application has to be withdrawn and started again, and you don't get the fee back.",
  },
  {
    number: "02",
    title: "A registered manager",
    body: "Most services need a manager registered with CQC in their own right, with their own application and their own interview. They must have the right qualifications and experience for the service they'll run.",
  },
  {
    number: "03",
    title: "A nominated individual",
    body: "If you're registering as an organisation, you'll need a nominated individual: a director, manager or secretary responsible for supervising how the regulated activity is carried on.",
  },
  {
    number: "04",
    title: "DBS checks at the right level",
    body: "Enhanced DBS checks with the correct barred list checks, countersigned through CQC. Certificates obtained through another employer usually won't be accepted.",
  },
  {
    number: "05",
    title: "A statement of purpose",
    body: "A formal document setting out your aims, the regulated activities you'll carry on, who you'll provide services to, and where. CQC reads this closely, because it defines what you're registered to do.",
  },
  {
    number: "06",
    title: "Policies and procedures that match your service",
    body: "Generic policies downloaded from the internet are visible from a mile away. Yours need to describe how your service actually operates and meet the fundamental standards.",
  },
  {
    number: "07",
    title: "Insurance and indemnity cover",
    body: "Public liability and professional indemnity insurance appropriate to your regulated activity. CQC will ask for evidence of this during the application, not after you're already trading.",
  },
  {
    number: "08",
    title: "Evidence you can fund the service",
    body: "A business plan and cash flow showing you can run the service safely from day one. This matters most for new domiciliary care and residential providers, where CQC has seen agencies register and then fail to trade.",
  },
];

export type SectorCard = {
  photo: string;
  title: string;
  body: string;
  activity: string;
};

export type SectorCategory = {
  category: string;
  sectors: SectorCard[];
};

export const SECTOR_CATEGORIES: SectorCategory[] = [
  {
    category: "",
    sectors: [
      {
        photo: "/images/sector-domiciliary.png",
        title: "Domiciliary Care",
        body: "Our software is designed to streamline and enhance the operations of your domiciliary care business, providing you with the tools to deliver exceptional care while optimizing efficiency. With features like customizable care plans, you can tailor support to meet each client's unique needs, ensuring person-centered care. Real-time scheduling and staff management tools simplify workforce coordination, reducing administrative burdens and minimizing errors.",
        activity: "Regulated activity: personal care",
      },
      {
        photo: "/images/sector-supported-living.png",
        title: "Supported Living",
        body: "Our software is specifically designed to meet the needs of supported living businesses, offering robust tools and features to streamline your operations and enhance the quality of care. We provide comprehensive assistance with your CQC application and registration, ensuring your business meets all regulatory requirements right from the start. With tools for creating personalised support plans, managing staff schedules, and maintaining secure, compliant records, our software helps you deliver consistent, high-quality care.",
        activity: "Regulated activity: personal care",
      },
      {
        photo: "/images/sector-hairtransplant.png",
        title: "Hair Transplant Clinic",
        body: "Our software is built to support the unique needs of hair transplant clinics, offering a range of features that streamline operations and ensure compliance with industry standards. We assist with digital audits and risk assessments, helping you identify and address potential areas of improvement efficiently. With mock inspection tools, your clinic can prepare thoroughly for regulatory evaluations, ensuring you meet all required standards. Additionally, our platform includes customisable policies, allowing you to tailor protocols to your clinic's specific needs.",
        activity: "Regulated activity: surgical procedures",
      },
      {
        photo: "/images/sector-private-gp.png",
        title: "Private Clinics",
        body: "Our software is specifically designed for private clinics registered with the CQC, offering a range of features to streamline operations and ensure full compliance with regulatory standards. We assist with digital audits and risk assessments, enabling you to identify and address potential issues efficiently. Our mock inspection tools prepare your clinic for regulatory evaluations, while our customisable policies allow you to tailor procedures to your specific needs. Additionally, we provide comprehensive preparation for the CQC registered manager interview, equipping you with the knowledge and confidence to succeed.",
        activity: "Regulated activity: treatment of disease, disorder or injury",
      },
    ],
  },
];

export const FAQ_ITEMS: AccordionItem[] = [
  {
    title: "How long does CQC registration take?",
    body: "CQC's published target is around ten weeks from a complete application, but in practice most providers should plan for longer. Incomplete applications, DBS delays and interview scheduling all add time. The single biggest cause of delay is submitting an application that isn't finished, because the clock effectively restarts each time CQC comes back with questions. Don't sign a lease or a contract on the assumption of a ten-week turnaround.",
  },
  {
    title: "Do I need a registered manager?",
    body: "Most services do. The registered manager applies to CQC in their own right, has their own interview, and must have the qualifications and experience appropriate to the service they'll run. A small number of services are exempt, typically where the provider is an individual who is personally in day-to-day charge. If you're relying on an exemption, check it before you build your structure around it.",
  },
  {
    title: "Can I register without a clinical background?",
    body: "Yes. Providers register as a legal entity and don't personally need to be clinicians. What matters is that the people delivering and managing care are appropriately qualified. Plenty of successful registered providers come from business rather than clinical backgrounds. Your registered manager and clinical leads are where the clinical credibility has to sit.",
  },
  {
    title: "What happens if I trade without registering?",
    body: "Carrying on a regulated activity without registration is a criminal offence, and CQC can prosecute. It also causes commercial damage that outlasts the enforcement: insurers, commissioners, landlords and payment providers all ask about it. If you think you may already be trading in scope, get advice quickly rather than waiting; providers who come forward are in a materially better position than those who are found.",
  },
  {
    title: "How many regulated activities should I register for?",
    body: "All the ones that describe what you actually do. Each is registered separately and there's no hierarchy between them, though registering for one sometimes removes the need to register for another. Nursing care provided as part of treatment of disease, disorder or injury is the usual example. Under-registering leaves you carrying on an unregistered activity; over-registering brings scrutiny you don't need.",
  },
  {
    title: "What does the registered manager interview involve?",
    body: "A structured interview with a CQC inspector covering your service model, safeguarding, regulatory knowledge, staffing, governance and how you'd handle specific scenarios. Strong applications still fail here, usually because the manager knows their service but can't connect it to the regulations. That gap is what our interview preparation is built to close.",
  },
];

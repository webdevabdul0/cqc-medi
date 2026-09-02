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
    category: "Care in people's homes and communities",
    sectors: [
      {
        photo: "/images/sector-domiciliary.png",
        title: "CQC registration for domiciliary care agencies",
        body: "Home care delivered in people's own houses and flats: help with washing, dressing, toileting, eating and mobility, plus medication support. Domiciliary care is the single most common new registration in England and one of the most heavily scrutinised, because CQC has seen a lot of agencies register and then fail to trade. Expect close questions on your recruitment plan, your travel time between calls, your on-call arrangements and how you'll fund the first six months before local authority payments start arriving.",
        activity: "Regulated activity: personal care",
      },
      {
        photo: "/images/sector-livein.png",
        title: "CQC registration for live-in care providers",
        body: "A carer living in the client's home and providing personal care around the clock. The registration itself sits under the same activity as domiciliary care, but the operational questions are different: working time, rest breaks, accommodation arrangements, safeguarding when there's a single carer with no colleague present, and how you cover a placement when the carer is unwell. Your policies need to answer those specifically rather than reading like a standard homecare pack.",
        activity: "Regulated activity: personal care",
      },
      {
        photo: "/images/sector-supported-living.png",
        title: "CQC registration for supported living services",
        body: "Care and support for people in their own tenancies, most often adults with a learning disability, autistic people, people with mental health needs or physical disabilities. Where you provide personal care, you must register. CQC will assess your application against Right support, right care, right culture, so your model of care, your approach to restrictive practice and how people are supported to have choice and control matter as much as your paperwork.",
        activity: "Regulated activity: personal care",
      },
      {
        photo: "/images/sector-complex-care.png",
        title: "CQC registration for complex care at home",
        body: "Clinical care delivered in the community: tracheostomy and ventilation support, PEG feeding, catheter care, spinal injury packages and continuing healthcare placements. These services usually need more than one regulated activity, because personal care and nursing-led treatment sit under different headings. Getting that combination right at application stage saves you a variation later.",
        activity: "Regulated activities: personal care · treatment of disease, disorder or injury",
      },
      {
        photo: "/images/sector-care-homes.png",
        title: "CQC registration for care homes",
        body: "Residential care homes and nursing homes, where accommodation and care are provided together. Registration covers the location as well as the provider, so the premises themselves come under scrutiny: fire safety, environmental risk, room sizes and adaptations. If you employ registered nurses in their professional capacity, you'll usually need to register for treatment of disease, disorder or injury alongside the accommodation activity.",
        activity:
          "Regulated activities: accommodation with nursing or personal care · treatment of disease, disorder or injury",
      },
      {
        photo: "/images/sector-substance-misuse.png",
        title: "CQC registration for substance misuse services",
        body: "Residential rehabilitation and detoxification services for people with drug or alcohol dependency. These registrations attract detailed questions about clinical governance, prescribing arrangements, medical oversight and how you manage risk during withdrawal. A registered manager with directly relevant experience is close to essential.",
        activity:
          "Regulated activity: accommodation for persons who require treatment for substance misuse",
      },
    ],
  },
  {
    category: "Private clinics and aesthetics",
    sectors: [
      {
        photo: "/images/sector-hairtransplant.png",
        title: "CQC registration for hair transplant clinics",
        body: "FUE, FUT, DHI and related surgical hair restoration. Hair transplant clinics involve instruments entering the body, which puts them squarely in scope for surgical procedures. CQC has been increasingly active in this sector following concerns about unregistered clinics, overseas-trained operators and technicians performing procedures without appropriate supervision. Your application needs to be clear about exactly who does what, and what the supervising clinician's role actually is in practice.",
        activity: "Regulated activity: surgical procedures",
      },
      {
        photo: "/images/sector-aesthetic.png",
        title: "CQC registration for aesthetic clinics",
        body: "Botulinum toxin, dermal fillers, thread lifts, polynucleotides, skin boosters and similar treatments. Whether you need to register turns on what you're actually doing: treatments involving prescription-only medicines, or provided by or under the supervision of a listed healthcare professional, generally fall within treatment of disease, disorder or injury. Purely cosmetic beauty treatments with no medicine involved usually don't. The line is finer than most clinic owners expect, and it's the single most common question we're asked.",
        activity: "Regulated activity: treatment of disease, disorder or injury",
      },
      {
        photo: "/images/sector-iv-drip.png",
        title: "CQC registration for IV drip and vitamin infusion clinics",
        body: "Intravenous vitamin therapy, hydration drips, NAD+ and booster injections, whether delivered from a clinic or as a mobile service. Infusions and injections given by or under the supervision of a healthcare professional bring you into scope. Mobile services raise an extra question CQC will ask directly: where is your registered location, and how do you maintain governance, medicines management and emergency response when treatment happens in a client's living room or a hotel suite.",
        activity: "Regulated activity: treatment of disease, disorder or injury",
      },
      {
        photo: "/images/sector-weight-loss.png",
        title: "CQC registration for weight loss and weight management clinics",
        body: "Prescribing services including GLP-1 weight loss injections. This is the fastest-growing area of new registration we see, and a lot of clinics have been trading for months before realising they're in scope. Depending on how the service is structured you may fall under services in slimming clinics, treatment of disease, disorder or injury, or the remote advice activity if you consult online. Prescribing governance and how you verify patient eligibility will be central to the application.",
        activity:
          "Regulated activities: services in slimming clinics · treatment of disease, disorder or injury",
      },
      {
        photo: "/images/sector-scanning.png",
        title: "CQC registration for scanning and ultrasound clinics",
        body: "Private baby scanning, diagnostic ultrasound, imaging and health screening services. Some diagnostic work is specifically excepted from registration and some isn't, which makes this one of the activities where providers most often get it wrong in both directions: registering unnecessarily, or assuming an exemption that doesn't apply to what they actually offer. Worth checking before you sign a lease.",
        activity: "Regulated activity: diagnostic and screening procedures",
      },
      {
        photo: "/images/sector-private-gp.png",
        title: "CQC registration for private GP and specialist practices",
        body: "Private general practice, consultant-led clinics, sexual health services, travel clinics and occupational health where clinical treatment is provided. Straightforward in principle, but the application depends heavily on getting your scope right, because practices frequently register for one activity and then discover they've been carrying on another, which means a variation and a delay.",
        activity: "Regulated activity: treatment of disease, disorder or injury",
      },
      {
        photo: "/images/sector-remote-clinics.png",
        title: "CQC registration for online and remote clinics",
        body: "Digital consultation platforms, remote prescribing services, telephone triage and video GP services. Remote providers are held to the same standards as physical clinics, with additional expectations around identity verification, safeguarding when you can't see the patient's environment, and how you handle a patient who deteriorates between consultations.",
        activity:
          "Regulated activity: transport services, triage and medical advice provided remotely",
      },
      {
        photo: "/images/sector-sports-medical.png",
        title: "CQC registration for sports ground, gym and event medical services",
        body: "Pitchside medical cover, event medics, stadium treatment rooms and treatment provided inside gyms. Exceptions that previously kept these services outside CQC regulation are being removed, and applications can be made from 7 September 2026. If you hold contracts with clubs, venues or event organisers, they will start asking whether you're registered, often before the second commencement date arrives.",
        activity: "Regulated activity: treatment of disease, disorder or injury · new from 2026",
      },
      {
        photo: "/images/sector-dental.png",
        title: "CQC registration for dental practices",
        body: "General and specialist dental practices, including squat practices registering for the first time and existing practices going through a change of ownership. Timing is what catches people out: the registration has to align with your completion date, your lease and your equipment install, and CQC won't be rushed because your contracts have moved. We build the application backwards from your opening date.",
        activity: "Regulated activity: treatment of disease, disorder or injury",
      },
      {
        photo: "/images/sector-physio.png",
        title: "CQC registration for physiotherapy and musculoskeletal clinics",
        body: "Physiotherapy, osteopathy-adjacent rehabilitation and MSK services. Whether registration is required depends on who provides the treatment and how the service is structured. Treatment provided by or under the supervision of a listed healthcare professional generally falls in scope, though exceptions apply. If you're unsure whether your setup needs registration, it's worth checking before you take on new premises or contracts.",
        activity: "Regulated activity: treatment of disease, disorder or injury",
      },
      {
        photo: "/images/sector-ambulance.png",
        title: "CQC registration for independent ambulance and patient transport",
        body: "Non-emergency patient transport, event ambulance cover and independent ambulance services. Vehicle standards, crew competence, medicines carried on board and how you handle a patient whose condition escalates in transit all feature heavily in the assessment.",
        activity:
          "Regulated activity: transport services, triage and medical advice provided remotely",
      },
      {
        photo: "/images/sector-maternity.png",
        title: "CQC registration for maternity and midwifery services",
        body: "Independent midwives, private antenatal and postnatal care, and birth centres. Clinical escalation is the heart of the application: what happens when a home birth needs to transfer, who your named obstetric contact is, and how your indemnity arrangements stand up.",
        activity: "Regulated activity: maternity and midwifery services",
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

import type { Metadata } from "next";
import { Accordion } from "@/components/Accordion";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AlreadyRegisteredPaths } from "@/components/medicomply/AlreadyRegisteredPaths";
import { ApplyingSection } from "@/components/medicomply/ApplyingSection";
import { ComparisonSection } from "@/components/medicomply/ComparisonSection";
import {
  APPLYING_FEATURES,
  ESTABLISHED_PROVIDER_FAQ,
  MOVE_ACROSS_STEPS,
  ONBOARDING_STEPS,
} from "@/components/medicomply/data";
import { EvidenceSection } from "@/components/medicomply/EvidenceSection";
import { FeatureTrio } from "@/components/medicomply/FeatureTrio";
import { InterviewSection } from "@/components/medicomply/InterviewSection";
import { FrequencyGrid } from "@/components/medicomply/FrequencyGrid";
import { Hero } from "@/components/medicomply/Hero";
import { OpenLibrarySection } from "@/components/medicomply/OpenLibrarySection";
import { PortalYourWaySection } from "@/components/medicomply/PortalYourWaySection";
import { PricingSection } from "@/components/medicomply/PricingSection";
import { PurplePromoSection } from "@/components/medicomply/PurplePromoSection";
import { RegisteringCrossSell } from "@/components/medicomply/RegisteringCrossSell";
import { DemoFormSection } from "@/components/medicomply/DemoFormSection";
import { StatsRow } from "@/components/medicomply/StatsRow";
import { StepsSection } from "@/components/medicomply/StepsSection";
import { TeamRecordsStats } from "@/components/medicomply/TeamRecordsStats";
import { WhatItReplaces } from "@/components/medicomply/WhatItReplaces";
import { WhereYouAreStats } from "@/components/medicomply/WhereYouAreStats";
import { NotNeedRegistration } from "@/components/sectors/NotNeedRegistration";
import { RuleSection } from "@/components/sectors/RuleSection";

export const metadata: Metadata = {
  title: "MediComply | CQC MediSolutions",
  description:
    "MediComply is your all-in-one CQC compliance portal, supporting you from application to assessment. Cloud-based, tailored to your service.",
};

export default function MediComplyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsRow />
        <WhatItReplaces />
        <EvidenceSection />
        <ComparisonSection />
        <OpenLibrarySection />
        <PortalYourWaySection />
        <FeatureTrio />
        <FrequencyGrid />
        <PurplePromoSection
          heading="Every one of those obligations, scheduled on a calendar somebody built for you."
          paragraphs={[
            "Your activity calendar is populated during setup with the tasks your service actually has to complete, at the frequency it has to complete them. Weekly staff meetings, mental capacity reviews, equipment checks, safeguarding policy reviews, record audits, all of it dated and assigned rather than remembered.",
            "Add your own events at any point, filter by type, and see the month at a glance. Nothing here depends on one person keeping a wall planner up to date.",
          ]}
          imageSrc="/images/mc-promo-352.png"
          imageAlt="MediComply activity calendar"
        />
        <PurplePromoSection
          heading="The system reminds you, you complete the task, you attach the evidence, and it is saved for your inspection."
          paragraphs={[
            "That is the entire loop, and it is why providers who use the portal are not assembling a folder in the fortnight before an assessment. When CQC asks what you did about a specific incident in October, the answer is in the log, with the evidence attached and the date it was completed. The dashboard beside this is the first thing your manager sees each morning: an overall compliance health score, and everything falling due underneath it.",
          ]}
          imageSrc="/images/mc-promo-351.png"
          imageAlt="MediComply compliance dashboard"
        />
        <PurplePromoSection
          heading="Inspect yourself, whenever you want to know where you stand."
          paragraphs={[
            "The self mock inspection walks the five key questions, safe, effective, caring, responsive and well-led, and asks you the questions an inspector would ask. Each one tells you the evidence you would need to show, and flags the critical ones where a no appears prominently in your report. You get a score against the pass threshold for each key question, so you know where you stand today rather than where you assume you stand. Run it before a manager starts, after a change of service, or any month you want a straight answer.",
          ]}
          imageSrc="/images/mc-promo-350.png"
          imageAlt="MediComply self mock inspection"
        />
        <WhereYouAreStats />
        <PurplePromoSection
          heading="A missing DBS should be visible to you before it is visible to an inspector."
          paragraphs={[
            "Add every staff member to the portal and upload contracts, DBS checks, right to work documents, references and qualifications. Mandatory items are flagged as pending until they are there, so the gap surfaces on the dashboard rather than in an assessment. Rotas, availability, leave, absence and overtime run from the same screen, which is also how you evidence that you have thought about safe staffing.",
          ]}
          imageSrc="/images/mc-promo-353.png"
          imageAlt="MediComply staff records"
        />
        <PurplePromoSection
          heading="Assign a course, and the completion record becomes your training evidence."
          paragraphs={[
            "Your team gets a CPD library covering the mandatory training CQC expects, delivered as interactive modules inside the platform. Assign courses to individuals, and required, completed and remaining hours are tracked per person. No chasing certificates by email, and no spreadsheet somebody updates from memory the week before an assessment.",
          ]}
          imageSrc="/images/mc-promo-354.png"
          imageAlt="MediComply CPD training"
        />
        <TeamRecordsStats />
        <ApplyingSection />
        <PurplePromoSection
          heading="A CQC application is not hard because the questions are difficult. It is hard because nobody tells you what order to do things in."
          paragraphs={[
            "Open the portal and you get a task list for your application, in sequence, with the next thing you need to do at the top. Complete a task, upload the document that proves it, and it stays attached to that task rather than sitting in somebody's downloads folder. Every template you are given is the one for your service. An aesthetic clinic does not wade through domiciliary care paperwork to find its own, and a supported living provider is not handed a policy suite written for a dental practice.",
          ]}
          imageSrc="/images/mc-promo-358.png"
          imageAlt="MediComply application task list"
          checklist={APPLYING_FEATURES}
        />
        <InterviewSection />
        <RuleSection
          badge="Where you are · applying"
          heading="An interview answer with a screen behind it is a different answer."
          paragraphs={[
            "We cannot guarantee a registration outcome and neither can anyone else. What we can say is that the questions inspectors press hardest on, how you will monitor quality, how you will know when something has gone wrong, how you will evidence it, are much easier to answer when the systems are already running rather than planned.",
            "If you want the coaching alongside the portal, that is our registration with interview preparation package.",
          ]}
          buttonLabel="Registration with interview preparation"
          buttonHref="/services"
          imageSrc="/images/mc-interview-team.png"
          imageAlt="Team preparing for a CQC registered manager interview"
          headingSize="sm:text-4xl lg:text-[42px]"
        />
        <AlreadyRegisteredPaths />
        <RuleSection
          badge="Going paperless properly"
          heading="Digital only counts if the evidence is digital too."
          paragraphs={[
            "Plenty of providers say they have gone paperless and mean they scan things at the end of the month. That is a filing change, not a systems change, and an inspector can tell the difference: a scanned form proves a document exists, but it does not prove when the task was done, who did it, or that anything happened as a result.",
            "In MediComply the record is created at the moment the task is completed, by the person who completed it, with the evidence attached there and then. You end up with a defensible audit trail rather than a tidier cupboard.",
          ]}
          buttonLabel="Registration with interview preparation"
          buttonHref="/services"
          imageSrc="/images/mc-paperless-photo.png"
          imageAlt="Provider going paperless with a compliance portal"
          headingSize="sm:text-4xl lg:text-[42px]"
          imageOnLeft
          imagePosition="right"
        />
        <StepsSection
          heading="How we move you across"
          subtext="Your existing dates, documents and history, brought into MediComply without restarting your compliance year."
          steps={MOVE_ACROSS_STEPS}
        />
        <NotNeedRegistration
          badge="Worth doing first"
          heading="Start with the mock, not the migration."
          paragraphs={[
            "If you have been running for a few years, the useful first step is usually the remote mock inspection, which tells you where your compliance actually stands today. Then the portal gets built around what you need rather than around what you assume you need. Every client gets that mock once a year anyway, so for established providers it simply happens at the start rather than nine months in.",
          ]}
          listItems={[]}
          footnote=""
          buttonLabel=""
          imageSrc="/images/mc-mock-handshake.png"
          imageAlt="Consultant and provider shaking hands to start a remote mock inspection"
        />
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-0">
            <div className="text-center">
              <h2 className="text-3xl font-bold leading-[1.2] text-brand-purple sm:text-4xl">
                What established providers ask us
              </h2>
              <p className="mx-auto mt-4 max-w-[620px] text-base leading-[1.3] text-black/70">
                The questions below come up on almost every call with a
                provider who has been running for more than a couple of
                years.
              </p>
            </div>
            <div className="mt-12 rounded-[24px] bg-brand-lilac p-3 sm:p-4">
              <Accordion items={ESTABLISHED_PROVIDER_FAQ} defaultOpenIndex={0} />
            </div>
          </div>
        </section>
        <section className="bg-white pt-20 lg:pt-28">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
            <ScrollReveal className="grid grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-10">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-green px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
                  <span className="size-2 rounded-full bg-brand-orange" />
                  We set it up.
                </span>
                <h2 className="mt-6 max-w-[503px] text-3xl font-bold leading-[1.2] text-brand-purple sm:text-4xl lg:text-[42px]">
                  You are not handed an empty system.
                </h2>
              </div>
              <p className="text-base leading-[1.3] text-black">
                The reason compliance software usually fails is not the
                software. It is that somebody bought it, logged in once, and
                never configured it. That does not happen here, because
                configuring it is our job rather than yours, and we take the
                time over it that it actually needs.
              </p>
            </ScrollReveal>
          </div>
        </section>
        <PurplePromoSection
          variant="white"
          heading="Setup is a conversation with a compliance consultant, not a welcome email with a password in it."
          paragraphs={[
            "We go through what you do, what regulated activities you are registered for, how many sites you run, who does what, and where you are currently keeping things. That is the difference between a portal that fits and a portal your team works around.",
            "It takes as long as it takes. We would rather spend the extra time up front than have you discover at assessment that a mandatory task was never on your calendar because nobody asked the right question at the start.",
          ]}
          imageSrc="/images/mc-setup-consultation.png"
          imageAlt="Compliance consultant setting up a provider's portal"
          checklist={[
            "Your regulated activities mapped to the tasks and audits they require",
            "Your sector template library loaded, so you open the portal to your documents",
            "Every mandatory task built in at the frequency the regulations require",
            "Your existing dates honoured, so you are not restarting a compliance year",
            "Your own tasks added for anything specific to your service or your insurer",
            "Your team set up with the right access, then trained on it properly",
          ]}
        />
        <StepsSection steps={ONBOARDING_STEPS} />
        <PricingSection />
        <RegisteringCrossSell />
        <DemoFormSection />
        <CTA
          heading="Compliance you can show, on the day someone asks to see it."
          body="Book a demo and we will show you the portal configured for your service. If you would be better off waiting until you are registered, we will tell you that too."
          primaryLabel="Book a demo"
          secondaryLabel="Request a callback"
          secondaryHref="#call"
        />
      </main>
      <Footer />
    </>
  );
}

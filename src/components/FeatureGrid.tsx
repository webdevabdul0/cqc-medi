import Image from "next/image";
import { ScrollRevealStagger } from "./ScrollReveal";

const FEATURES = [
  {
    icon: "/images/icon-task.svg",
    photo: "/images/card-task-photo.png",
    title: "Task management",
    body: "Everything your service has to do, scheduled and assigned, with a clear view of what's due, what's overdue and who owns it. Nothing depends on somebody remembering.",
  },
  {
    icon: "/images/icon-audits.svg",
    photo: "/images/card-audits-photo.png",
    title: "Digital audits",
    body: "Over 40 audits mapped to the CQC assessment framework, completed on the app as you walk the service. Results are stored and dated, so your evidence builds itself.",
  },
  {
    icon: "/images/icon-risk.svg",
    photo: "/images/card-risk-photo.png",
    title: "Risk assessments and risk register",
    body: "A full library of risk assessments, reviewed on schedule, feeding automatically into a risk register that populates your action plans rather than sitting in a folder.",
  },
  {
    icon: "/images/icon-policies.svg",
    photo: "/images/card-policies-photo.png",
    title: "Policies that stay current",
    body: "Over 100 compliance templates, forms and checklists, kept in one place and updated as guidance changes, so you aren't working from a version somebody downloaded two years ago.",
  },
  {
    icon: "/images/icon-training.svg",
    photo: "/images/card-training-photo.png",
    title: "Staff training and CPD",
    body: "A CPD course library with progress tracked per member of staff, so you can show at a glance who is compliant and who needs chasing.",
  },
  {
    icon: "/images/icon-hr.svg",
    photo: "/images/card-hr-photo.png",
    title: "HR and rota management",
    body: "Shifts, availability and staffing records in the same system as your compliance, because safe staffing is something CQC will ask you to evidence.",
  },
];

export function FeatureGrid() {
  return (
    <section className="bg-white pb-20 pt-8 lg:pb-28 lg:pt-10">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollRevealStagger className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-6 overflow-hidden rounded-[40px] border border-[#d8d8d8] bg-white p-6 sm:flex-row sm:items-center sm:p-8"
            >
              <div className="flex-1">
                <div className="relative size-10">
                  <Image
                    src={feature.icon}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-[1.3] text-black/70">
                  {feature.body}
                </p>
              </div>
              <div className="relative aspect-[240/354] h-auto w-full shrink-0 overflow-hidden rounded-[30px] sm:h-[354px] sm:w-[240px]">
                <Image
                  src={feature.photo}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 240px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}

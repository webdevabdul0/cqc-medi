import Image from "next/image";
import { ScrollReveal, ScrollRevealStagger } from "./ScrollReveal";

const LIBRARY_ITEMS = [
  "A folder of templates and good luck",
  "You work out which documents apply to your service",
  "You second-guess whether you've filled them in correctly",
  "You complete and submit the CQC forms yourself",
  "You chase CQC when they come back with questions",
  "A list of likely interview questions to memorise",
  "Nobody checks your work before CQC sees it",
];

const US_ITEMS = [
  "Your application managed inside the MediComply portal",
  "A simplified task list telling you exactly what to do next",
  "Templates already loaded and written for your sector",
  "We review everything you upload, feed back, and improve it with you",
  "We complete the CQC forms and submit the application for you",
  "A full A to Z interview programme, not a question list",
  "Every document validated by an experienced CQC consultant",
];

function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={`mt-1.5 size-3 shrink-0 ${className}`} fill="none">
      <path
        d="M1 6L4.5 9.5L11 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Comparison() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <ScrollReveal className="mx-auto max-w-[620px] text-center">
          <h2 className="text-3xl font-bold leading-[1.2] text-brand-purple sm:text-4xl">
            What sets us apart
          </h2>
          <p className="mt-4 text-base leading-[1.3] text-black/70">
            Both approaches end with a set of documents. Only one of them ends with
            somebody who has checked them.
          </p>
        </ScrollReveal>

        <ScrollRevealStagger className="mt-16 grid grid-cols-1 gap-8 lg:mx-[120px] lg:grid-cols-2">
          <div className="overflow-hidden rounded-[40px] bg-brand-lilac p-10 shadow-[0px_57px_60px_-23px_rgba(128,9,168,0.29)] sm:p-14">
            <div className="flex size-[100px] items-center justify-center rounded-full bg-[#1a0e33]">
              <Image src="/images/icon-library.svg" alt="" width={44} height={44} />
            </div>
            <h3 className="mt-8 text-2xl font-semibold text-brand-purple">
              Buying a document library
            </h3>
            <ul className="mt-8 space-y-4">
              {LIBRARY_ITEMS.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-snug text-black/70">
                  <Check className="text-black/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-visible rounded-[40px] bg-gradient-to-r from-brand-purple to-brand-purple-2 p-10 sm:p-14">
            <span className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 items-center rounded-full border-[5px] border-[#fff8f0] bg-gradient-to-r from-[#f3d41f] via-[#f58729] to-[#ef5658] px-5 py-2 text-lg font-semibold text-white">
              Recommended
            </span>
            <div className="flex size-[100px] items-center justify-center rounded-full bg-white">
              <Image src="/images/icon-brand-mark.svg" alt="" width={66} height={34} />
            </div>
            <h3 className="mt-8 max-w-xs text-2xl font-semibold text-white">
              Working with CQC MediSolutions
            </h3>
            <ul className="mt-8 space-y-4">
              {US_ITEMS.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-snug text-white/90">
                  <Check className="text-white" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollRevealStagger>
      </div>
    </section>
  );
}

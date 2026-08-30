"use client";

import { useState } from "react";

export type AccordionItem = {
  title: string;
  body?: string;
  watchOutFor?: string;
  watchOutForBody?: string;
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-lilac">
      <svg
        viewBox="0 0 10 6"
        className={`size-2.5 text-brand-purple transition-transform ${open ? "rotate-180" : ""}`}
        fill="none"
      >
        <path
          d="M1 1l4 4 4-4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Accordion({
  items,
  defaultOpenIndex = -1,
}: {
  items: AccordionItem[];
  defaultOpenIndex?: number;
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.title} className="rounded-xl bg-white">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-6 px-5 py-[18px] text-left"
            >
              <span className="text-lg font-bold text-black">{item.title}</span>
              <ChevronIcon open={open} />
            </button>
            {open && item.body && (
              <div className="px-5 pb-6 text-sm leading-[1.3] text-black/80">
                <p>{item.body}</p>
                {item.watchOutFor && (
                  <>
                    <p className="mt-4 font-bold text-brand-purple">
                      {item.watchOutFor}
                    </p>
                    <p className="mt-2">{item.watchOutForBody}</p>
                  </>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

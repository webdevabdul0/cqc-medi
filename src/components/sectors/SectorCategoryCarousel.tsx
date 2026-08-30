"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { SectorCategory } from "./data";

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 20 20" className="size-4 text-white" fill="none">
      <path
        d={direction === "left" ? "M12.5 15L7.5 10L12.5 5" : "M7.5 15L12.5 10L7.5 5"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SectorCategoryCarousel({ category }: { category: SectorCategory }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(category.sectors.length <= 1);

  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-sector-card]");
    const distance = (card?.offsetWidth ?? 600) + 32;
    el.scrollBy({ left: dir * distance, behavior: "smooth" });
    setTimeout(updateEdges, 350);
  };

  return (
    <div>
      <div className="flex items-center gap-6 border-b border-black/10 pb-4">
        <h3 className="whitespace-nowrap text-xl font-bold text-brand-purple sm:text-2xl">
          {category.category}
        </h3>
        <div className="hidden flex-1 sm:block" />
        <div className="ml-auto flex shrink-0 items-center gap-3">
          <button
            type="button"
            aria-label="Previous"
            disabled={atStart}
            onClick={() => scrollByCard(-1)}
            className="flex size-9 items-center justify-center rounded-full bg-brand-purple disabled:opacity-30"
          >
            <ArrowIcon direction="left" />
          </button>
          <span className="rounded-full bg-brand-lilac px-4 py-1.5 text-sm font-bold text-brand-purple">
            1 to {category.sectors.length}
          </span>
          <button
            type="button"
            aria-label="Next"
            disabled={atEnd}
            onClick={() => scrollByCard(1)}
            className="flex size-9 items-center justify-center rounded-full bg-brand-purple disabled:opacity-30"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={updateEdges}
        className="mt-8 flex snap-x snap-mandatory gap-8 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {category.sectors.map((sector) => (
          <div
            key={sector.title}
            data-sector-card
            className="flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-[20px] border border-[#d8d8d8] sm:w-[65%] sm:min-w-[600px] sm:flex-row"
          >
            <div className="relative h-[220px] w-full shrink-0 sm:h-auto sm:w-[42%]">
              <Image
                src={sector.photo}
                alt={sector.title}
                fill
                sizes="(min-width: 640px) 350px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8">
              <h4 className="text-xl font-semibold text-black">{sector.title}</h4>
              <p className="mt-4 text-sm leading-[1.3] text-black/70">
                {sector.body}
              </p>
              <p className="mt-4 text-sm font-bold text-brand-purple">
                {sector.activity}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

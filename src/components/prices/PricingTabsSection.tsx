"use client";

import { useState } from "react";
import { PricingCards } from "./PricingCards";
import { STAGE_PLANS } from "./pricingData";
import { StagesRow } from "./StagesRow";

export function PricingTabsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white pb-20 pt-16 lg:pb-28 lg:pt-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <StagesRow active={active} onSelect={setActive} />
        <div className="mt-16">
          <PricingCards key={active} plans={STAGE_PLANS[active]} />
        </div>
      </div>
    </section>
  );
}

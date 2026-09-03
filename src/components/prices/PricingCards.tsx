"use client";

import { useState } from "react";
import { FlosslyModal } from "../FlosslyModal";
import { OutlineButton, PrimaryButton } from "../Buttons";
import type { Plan } from "./pricingData";

function Check() {
  return (
    <svg viewBox="0 0 12 12" className="mt-1.5 size-3 shrink-0 text-brand-purple" fill="none">
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

function PlanCard({ plan }: { plan: Plan }) {
  const [formSrc, setFormSrc] = useState<string | null>(null);

  return (
    <>
      <div
        className={`relative overflow-visible rounded-[40px] border p-10 sm:p-12 ${
          plan.popular
            ? "border-brand-purple bg-brand-lilac shadow-[0px_40px_60px_-25px_rgba(128,9,168,0.35)]"
            : "border-[#cecece] bg-white"
        }`}
      >
        {plan.popular && (
          <span className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 items-center whitespace-nowrap rounded-full border-[5px] border-[#fff8f0] bg-gradient-to-r from-[#f3d41f] via-[#f58729] to-[#ef5658] px-5 py-2 text-lg font-semibold text-white">
            Most Popular
          </span>
        )}
        <span className="text-sm font-semibold text-black/60">{plan.tag}</span>
        <h3 className="mt-3 max-w-md text-2xl font-bold leading-[1.2] text-brand-purple">
          {plan.title}
        </h3>
        <p className="mt-6 text-4xl font-bold text-brand-purple">
          {plan.price}{" "}
          <span className="text-base font-medium text-black/60">{plan.priceNote}</span>
        </p>
        <div className="mt-8 border-t border-black/10 pt-8">
          <p className="text-base leading-[1.3] text-black/70">{plan.body}</p>
          <ul className="mt-8 space-y-4">
            {plan.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-base leading-snug text-black/80">
                <Check />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <PrimaryButton
            onClick={plan.primaryFormSrc ? () => setFormSrc(plan.primaryFormSrc!) : undefined}
            href={plan.primaryFormSrc ? undefined : plan.primaryHref}
            external={!!plan.primaryHref}
            className={plan.secondaryLabel ? undefined : "w-full sm:flex-1"}
          >
            {plan.primaryLabel ?? "Buy Now"}
          </PrimaryButton>
          {plan.secondaryLabel && (
            <OutlineButton href={plan.secondaryHref} external dark>
              {plan.secondaryLabel}
            </OutlineButton>
          )}
        </div>
      </div>

      {formSrc && (
        <FlosslyModal
          src={formSrc}
          onClose={() => setFormSrc(null)}
          redirectAfterSubmit={plan.redirectAfterSubmit}
        />
      )}
    </>
  );
}

export function PricingCards({ plans }: { plans: Plan[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {plans.map((plan) => (
        <PlanCard key={plan.title} plan={plan} />
      ))}
    </div>
  );
}

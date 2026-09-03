"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { RESOURCE_CARDS } from "./data";

const RESOURCE_FORM = "https://app.flossly.ai/lead-form/8507123ef51ba69714224a44386168c6ea539286f1b0411811acc578e3b40a6c";

export function ResourceGateHero({
  resource,
}: {
  resource: (typeof RESOURCE_CARDS)[number];
}) {
  const router = useRouter();

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (!e.origin.includes("flossly.ai")) return;
      const d = e.data as Record<string, unknown> | null;
      if (!d) return;
      const isSubmit =
        d.type === "form_submitted" ||
        d.type === "submission" ||
        d.event === "submitted" ||
        d.event === "submission_created" ||
        d.submitted === true;
      if (isSubmit) {
        router.push(`/resources/${resource.slug}/thanks`);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [resource.slug, router]);

  return (
    <section className="bg-white pb-20 pt-36 lg:pb-28 lg:pt-56">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-green bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-orange">
              <Image src="/images/dot-icon.svg" alt="" width={9} height={9} />
              {resource.tag}
            </span>
            <h1 className="mt-8 max-w-[620px] text-3xl font-bold leading-[1.2] text-brand-purple sm:text-4xl lg:text-5xl">
              {resource.title}
            </h1>
            <p className="mt-8 max-w-[620px] text-base leading-[1.3] text-black/70">
              {resource.gateBody}
            </p>

            <div className="relative mt-10 h-[350px] w-full sm:h-[420px]">
              <Image
                src="/images/newResource.png"
                alt={resource.title}
                fill
                sizes="(min-width: 1024px) 575px, 100vw"
                className="object-contain object-left"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-[40px] bg-brand-lilac">
            <iframe
              src={RESOURCE_FORM}
              title="Get your free resource"
              className="min-h-[600px] w-full border-0"
              allow="payment"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

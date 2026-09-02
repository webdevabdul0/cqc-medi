import Image from "next/image";
import type { RESOURCE_CARDS } from "./data";

export function ResourceGateHero({
  resource,
}: {
  resource: (typeof RESOURCE_CARDS)[number];
}) {
  return (
    <section className="bg-white py-20 lg:py-28">
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

          {/*
            TODO: Flossly Form goes here. On successful submission it should
            redirect the user to /resources/[slug]/thanks so they land on the
            "Thanks for downloading!" page and get the file.
          */}
          <div className="flex min-h-[500px] items-center justify-center overflow-hidden rounded-[40px] bg-brand-lilac p-8 sm:p-10">
            <p className="text-2xl font-bold text-black/10">Flossly Form</p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useEffect } from "react";

export function ThanksHero({ fileUrl }: { fileUrl: string }) {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, [fileUrl]);

  return (
    <section className="bg-white pb-20 pt-36 lg:pb-28 lg:pt-56">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-10">
          <div>
            <h1 className="max-w-[620px] text-3xl font-bold leading-[1.2] text-brand-purple sm:text-4xl lg:text-5xl">
              Thanks for downloading!
            </h1>
            <p className="mt-6 max-w-[620px] text-base leading-[1.3] text-black/70">
              Click below to download you free resource file
            </p>
            <div className="mt-8">
              <a
                href={fileUrl}
                download
                className="inline-flex items-center justify-center rounded-xl bg-brand-green px-[30px] py-4 text-base font-bold text-[#fbfbfb] transition-opacity hover:opacity-90"
              >
                Download free
              </a>
            </div>
          </div>

          <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[600px]">
            <Image
              src="/images/newResource.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 575px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

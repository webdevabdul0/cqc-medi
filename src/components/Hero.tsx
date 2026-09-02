"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { OutlineButton, PrimaryButton } from "./Buttons";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-hero-heading]",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          "[data-hero-text]",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          "[data-hero-buttons]",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.45"
        )
        .fromTo(
          "[data-hero-image]",
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.9 },
          "-=0.7"
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="bg-gradient-to-r from-brand-purple to-brand-purple-2 pb-24 pt-36 lg:pb-32 lg:pt-56"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-10 lg:px-[100px]">
        <div className="max-w-[610px]">
          <h1
            data-hero-heading
            className="text-4xl font-bold leading-[1.2] text-white sm:text-5xl lg:text-[60px]"
          >
            We don&apos;t sell folders. We get providers registered.
          </h1>
          <p
            data-hero-text
            className="mt-8 max-w-[607px] text-base leading-[1.3] text-white/90"
          >
            There are plenty of companies who will sell you a library of policies and
            wish you luck. We built CQC MediSolutions because that model leaves the
            hardest part of registration exactly where it started: with you, at
            eleven at night, wondering whether what you&apos;ve written is good enough.
          </p>
          <div data-hero-buttons className="mt-10 flex flex-wrap gap-4">
            <PrimaryButton href="#apply">Apply for CQC Registration</PrimaryButton>
            <OutlineButton href="#call">Book a Call</OutlineButton>
          </div>
        </div>
        <div data-hero-image className="relative">
          <div className="relative h-[350px] w-full overflow-hidden rounded-[32px] sm:h-[420px] lg:h-[475px]">
            <Image
              src="/images/hero-image.png"
              alt="Healthcare professionals reviewing compliance documents"
              fill
              sizes="(min-width: 1024px) 610px, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(32,20,73,0.84)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image src="/images/hero-badge.svg" alt="" width={86} height={86} />
            </div>
            <div className="absolute bottom-8 left-1/2 w-[85%] -translate-x-1/2 text-center">
              <p className="text-sm font-semibold leading-[1.3] text-white">
                See how MediComply streamlines compliance with integrated audits, HR,
                CPD, risk, and document management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";

export function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl bg-brand-green px-[30px] py-4 text-base font-bold text-[#fbfbfb] transition-opacity hover:opacity-90"
    >
      {children}
    </Link>
  );
}

export function OutlineButton({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        dark
          ? "inline-flex items-center justify-center rounded-xl border border-brand-purple bg-white px-[30px] py-4 text-base font-bold text-brand-purple transition-colors hover:bg-brand-lilac"
          : "inline-flex items-center justify-center rounded-xl border border-white px-[30px] py-4 text-base font-bold text-[#fbfbfb] transition-colors hover:bg-white/10"
      }
    >
      {children}
    </Link>
  );
}

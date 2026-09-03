import Link from "next/link";
import type { ReactNode } from "react";

const primaryCls =
  "inline-flex items-center justify-center rounded-xl bg-brand-green px-[30px] py-4 text-base font-bold text-[#fbfbfb] transition-opacity hover:opacity-90";

const outlineLightCls =
  "inline-flex items-center justify-center rounded-xl border border-white px-[30px] py-4 text-base font-bold text-[#fbfbfb] transition-colors hover:bg-white/10";

const outlineDarkCls =
  "inline-flex items-center justify-center rounded-xl border border-brand-purple bg-white px-[30px] py-4 text-base font-bold text-brand-purple transition-colors hover:bg-brand-lilac";

export function PrimaryButton({
  href,
  onClick,
  children,
  className = "",
  external,
}: {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`${primaryCls} ${className}`}>
        {children}
      </button>
    );
  }
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${primaryCls} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href!} className={`${primaryCls} ${className}`}>
      {children}
    </Link>
  );
}

export function OutlineButton({
  href,
  onClick,
  children,
  dark = false,
  external,
}: {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  dark?: boolean;
  external?: boolean;
}) {
  const cls = dark ? outlineDarkCls : outlineLightCls;
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={cls}>
        {children}
      </button>
    );
  }
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href!} className={cls}>
      {children}
    </Link>
  );
}

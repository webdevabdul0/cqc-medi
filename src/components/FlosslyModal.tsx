"use client";

import { useEffect } from "react";

export function FlosslyModal({
  src,
  onClose,
  redirectAfterSubmit,
}: {
  src: string;
  onClose: () => void;
  redirectAfterSubmit?: string;
}) {
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
        onClose();
        if (redirectAfterSubmit) {
          window.location.href = redirectAfterSubmit;
        }
      }
    };
    window.addEventListener("message", handler);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("message", handler);
      document.body.style.overflow = prev;
    };
  }, [onClose, redirectAfterSubmit]);

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[720px] overflow-hidden rounded-[24px] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full bg-black/10 text-xl leading-none text-black transition-colors hover:bg-black/20"
        >
          ×
        </button>
        <iframe
          src={src}
          title="Form"
          className="h-[640px] w-full border-0"
          allow="payment"
        />
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

const PAY_URL   = "https://pay.gocardless.com/BRT01M143KWHZD7Z9VJFQEH1GVBHF";
const DELAY_MS  = 4000;
const EMAIL_RE  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const DIAL_CODES = [
  { code: "+44",  label: "🇬🇧 +44"  },
  { code: "+353", label: "🇮🇪 +353" },
  { code: "+1",   label: "🇺🇸 +1"   },
  { code: "+33",  label: "🇫🇷 +33"  },
  { code: "+49",  label: "🇩🇪 +49"  },
  { code: "+34",  label: "🇪🇸 +34"  },
  { code: "+39",  label: "🇮🇹 +39"  },
  { code: "+31",  label: "🇳🇱 +31"  },
  { code: "+91",  label: "🇮🇳 +91"  },
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+92",  label: "🇵🇰 +92"  },
  { code: "+880", label: "🇧🇩 +880" },
  { code: "+234", label: "🇳🇬 +234" },
  { code: "+254", label: "🇰🇪 +254" },
  { code: "+27",  label: "🇿🇦 +27"  },
];

export function StartPopup() {
  const [mounted,  setMounted]  = useState(false);
  const [visible,  setVisible]  = useState(false);
  const [step,     setStep]     = useState<1 | 2>(1);

  const [name,       setName]       = useState("");
  const [email,      setEmail]      = useState("");
  const [phone,      setPhone]      = useState("");
  const [dialCode,   setDialCode]   = useState("+44");
  const [busy,       setBusy]       = useState(false);
  const [error,      setError]      = useState<string | null>(null);

  const [emailTouched, setEmailTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);

  const lastFocusRef = useRef<Element | null>(null);
  const h1Ref        = useRef<HTMLHeadingElement>(null);
  const h2Ref        = useRef<HTMLHeadingElement>(null);

  const phoneDigits = phone.replace(/\D/g, "").replace(/^0+/, "");
  const emailValid  = EMAIL_RE.test(email.trim());
  const phoneValid  = phoneDigits.length >= 7 && phoneDigits.length <= 12;

  const emailError = emailTouched && email.trim() !== "" && !emailValid
    ? "Please enter a valid email address"
    : null;
  const phoneError = phoneTouched && phone.trim() !== "" && !phoneValid
    ? phoneDigits.length > 12
      ? "Number is too long — please check it"
      : "Number is too short — please check it"
    : null;

  const canPay =
    name.trim() !== "" &&
    emailValid &&
    phoneValid;

  // ── Show after delay ──────────────────────────────────────────────────────
  useEffect(() => {
    const t = setTimeout(() => {
      lastFocusRef.current = document.activeElement;
      setMounted(true);
      // double-rAF so CSS transition sees the from-state first
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setVisible(true);
          h1Ref.current?.focus();
        })
      );
    }, DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  // ── Scroll lock ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (mounted) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [mounted]);

  // ── Escape key ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!mounted) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") dismiss(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [mounted]);

  function dismiss() {
    setVisible(false);
    setTimeout(() => {
      setMounted(false);
      setStep(1);
      (lastFocusRef.current as HTMLElement | null)?.focus?.();
    }, 220);
  }

  function goStep2() {
    setStep(2);
    requestAnimationFrame(() => h2Ref.current?.focus());
  }

  async function handlePay() {
    if (!canPay || busy) return;
    setBusy(true);
    setError(null);
    try {
      const digits = phone.replace(/\D/g, "").replace(/^0+/, "");
      await fetch("/api/popup/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:  name.trim(),
          email: email.trim(),
          phone: `${dialCode} ${digits}`,
        }),
      });
      window.location.href = PAY_URL;
    } catch {
      setError("Something went wrong. Please try again.");
      setBusy(false);
    }
  }

  if (!mounted) return null;

  // ── Shared classes ────────────────────────────────────────────────────────
  const inputCls =
    "block w-full rounded-xl border border-[#e1d9ee] px-5 py-3.5 text-base text-black " +
    "placeholder:text-black/40 focus:border-brand-purple focus:outline-none focus:ring-0 bg-white";

  return (
    /* overlay */
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={step === 1 ? "sp-title-1" : "sp-title-2"}
      className="fixed inset-0 z-[400] flex items-end justify-center sm:items-center"
      style={{
        background: "rgba(47,1,102,0.55)",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
        opacity: visible ? 1 : 0,
        transition: "opacity 200ms ease-out",
      }}
      onClick={dismiss}
    >
      {/* modal */}
      <div
        className="
          relative w-full bg-white px-7 pb-10 pt-8
          rounded-t-[40px]
          sm:max-w-[520px] sm:rounded-[40px] sm:px-10 sm:pb-10 sm:pt-10
          max-h-[90vh] overflow-y-auto
        "
        style={{
          transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)",
          opacity: visible ? 1 : 0,
          transition: "transform 240ms ease-out, opacity 240ms ease-out",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* drag handle (mobile only) */}
        <div className="absolute left-1/2 top-2.5 h-1 w-10 -translate-x-1/2 rounded-full bg-[#e1d9ee] sm:hidden" />

        {/* close */}
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-2.5 top-2.5 flex size-11 items-center justify-center rounded-xl text-2xl text-black/40 hover:bg-brand-lilac hover:text-black"
        >
          ×
        </button>

        {/* ── STEP 1 ── */}
        {step === 1 && (
          <>
            {/* Eyebrow badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-green bg-white/80 px-4 py-2 backdrop-blur-sm">
              <span className="size-2.5 shrink-0 rounded-full bg-brand-orange" />
              <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-brand-orange">
                A smaller way to begin
              </span>
            </div>

            {/* Headline */}
            <h2
              id="sp-title-1"
              ref={h1Ref}
              tabIndex={-1}
              className="mb-4 font-bold leading-[1.3] text-brand-purple focus:outline-none"
            >
              <span className="block text-[22px] sm:text-[27px]">
                Start your CQC application for
              </span>
              <span className="block text-[52px] leading-none sm:text-[60px]">
                £99
              </span>
            </h2>

            <p className="mb-5 text-[16px] leading-[1.3] text-black sm:text-[18px]">
              The £99 holds your place and gets your portal built around your
              service type. You keep the £1,500 balance until you are ready to
              submit.
            </p>

            <p className="mb-6 inline-block rounded-[8px] bg-brand-lilac px-[18px] py-2.5 text-[15px] font-semibold text-[#740799]">
              £1,599 total. Your £99 comes off it.
            </p>

            <button
              onClick={goStep2}
              className="block w-full rounded-xl bg-brand-green py-[18px] text-[16px] font-bold text-white transition-opacity hover:opacity-90"
            >
              See what the £99 covers
            </button>
            <button
              onClick={dismiss}
              className="mt-3.5 block w-full py-2.5 text-center text-base font-semibold text-black/60 hover:text-black"
            >
              Not right now
            </button>
          </>
        )}

        {/* ── STEP 2 ── */}
        {step === 2 && (
          <>
            <button
              onClick={() => setStep(1)}
              className="-ml-1.5 mb-3.5 px-1.5 py-1 text-[15px] font-semibold text-black/50 hover:text-brand-purple"
            >
              ‹ Back
            </button>
            <h2
              id="sp-title-2"
              ref={h2Ref}
              tabIndex={-1}
              className="mb-5 text-2xl font-bold text-brand-purple focus:outline-none"
            >
              Your details
            </h2>

            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`mb-3 ${inputCls}`}
            />

            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setEmailTouched(true)}
              className={`mb-1 ${inputCls} ${emailError ? "border-[#ef5658] focus:border-[#ef5658]" : ""}`}
            />
            {emailError && (
              <p className="mb-2 text-[12px] font-semibold text-[#ef5658]">{emailError}</p>
            )}
            {!emailError && <div className="mb-3" />}

            {/* Phone with dial code */}
            <div className={`mb-1 flex overflow-hidden rounded-xl border bg-white focus-within:border-brand-purple ${phoneError ? "border-[#ef5658] focus-within:border-[#ef5658]" : "border-[#e1d9ee]"}`}>
              <select
                value={dialCode}
                onChange={(e) => setDialCode(e.target.value)}
                aria-label="Country code"
                className="shrink-0 border-r border-[#e1d9ee] bg-white pl-3 pr-2 text-sm text-black focus:outline-none"
              >
                {DIAL_CODES.map((d) => (
                  <option key={d.code} value={d.code}>{d.label}</option>
                ))}
              </select>
              <input
                type="tel"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={() => setPhoneTouched(true)}
                className="min-w-0 flex-1 bg-white px-4 py-3.5 text-base text-black placeholder:text-black/40 focus:outline-none"
              />
            </div>
            {phoneError && (
              <p className="mb-2 mt-1 text-[12px] font-semibold text-[#ef5658]">{phoneError}</p>
            )}
            {!phoneError && <div className="mb-5" />}

            {error && (
              <p className="mb-3 text-sm font-semibold text-[#ef5658]">{error}</p>
            )}

            <button
              onClick={handlePay}
              disabled={!canPay || busy}
              className="block w-full rounded-xl bg-brand-purple py-[18px] text-[17px] font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {busy ? "Please wait…" : "Pay £99 by Direct Debit"}
            </button>
            <p className="mt-3 text-center text-[13px] font-medium text-black/50">
              Non-refundable. Ten places a month.
            </p>

            {/* ── What the £99 does ── */}
            <div className="mt-7 border-t border-[#e1d9ee] pt-6">
              <h3 className="mb-3 text-[15px] font-bold text-brand-purple">What your £99 does</h3>
              <ul className="mb-4 space-y-2">
                {[
                  "Your place on this month's list",
                  "Your portal built for your service type",
                  "Your policy set, not a template",
                  "Evidence mapped to the five key questions",
                  "Registered manager requirements, in writing",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 text-[14px] font-medium leading-snug text-black/80">
                    <span className="mt-0.5 shrink-0 font-bold text-brand-green">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="mb-5 space-y-2">
                {[
                  "Your portal login, released when the balance clears",
                  "The CQC's own registration fee",
                  "DBS checks and qualifications",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 text-[14px] font-medium leading-snug text-black/40">
                    <span className="mt-0.5 shrink-0 font-bold">×</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Cost breakdown */}
              <ul className="mb-4 rounded-xl bg-brand-lilac px-4 py-3 space-y-1.5">
                {[
                  { label: "Today, deducted from your total", value: "£99" },
                  { label: "Before you submit", value: "£1,500" },
                ].map((row) => (
                  <li key={row.label} className="flex justify-between gap-4 text-[14px] font-semibold text-brand-purple">
                    <span>{row.label}</span><span className="whitespace-nowrap">{row.value}</span>
                  </li>
                ))}
                <li className="flex justify-between gap-4 border-t border-[#e1d9ee] pt-2 text-[15px] font-bold text-brand-purple">
                  <span>Total</span><span>£1,599</span>
                </li>
                <li className="flex justify-between gap-4 text-[13px] font-medium text-black/50">
                  <span>Then, from the day your login is released</span><span className="whitespace-nowrap">£99/month</span>
                </li>
              </ul>

              <p className="text-[13px] font-medium text-black/50">
                Payment is by Direct Debit and takes three to five working days to clear.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

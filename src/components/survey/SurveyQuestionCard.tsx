"use client";

import { SECTIONS } from "./data";

export type SurveyOption = { id: string; label: string; note?: string };
export type SurveyField = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel";
  fullWidth?: boolean;
  value: string;
  onChange: (value: string) => void;
  /** phone-specific */
  isPhone?: boolean;
  dialCode?: string;
  onDialCodeChange?: (code: string) => void;
};

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

type BaseProps = {
  activeSection: string;
  doneSections: string[];
  step: number;
  total: number;
  heading: string;
  subtext?: string;
  showBack?: boolean;
  onBack?: () => void;
  onNext: () => void;
  nextDisabled?: boolean;
  nextLabel?: string;
  message?: string;
};

type OptionsProps = BaseProps & {
  type: "radio" | "checkbox";
  options: SurveyOption[];
  selected: string[];
  onSelect: (id: string) => void;
};

type FormProps = BaseProps & {
  type: "form";
  fields: SurveyField[];
  consentLabel?: string;
  consentChecked?: boolean;
  onConsentChange?: (checked: boolean) => void;
};

export function SurveyQuestionCard(props: OptionsProps | FormProps) {
  const {
    activeSection,
    doneSections,
    step,
    total,
    heading,
    subtext,
    showBack,
    onBack,
    onNext,
    nextDisabled,
    nextLabel = "Next",
    message,
  } = props;

  return (
    <div className="rounded-[32px] bg-brand-lilac p-3 sm:p-4">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[361px_1fr]">
        <div className="flex flex-col gap-2 rounded-[24px] bg-white p-2">
          {SECTIONS.map((section) => {
            const isActive = section.key === activeSection;
            const isDone = doneSections.includes(section.key);
            return (
              <div
                key={section.key}
                className={`rounded-xl px-4 py-4 text-base font-semibold transition-colors ${
                  isActive
                    ? "bg-brand-purple-2 text-white"
                    : isDone
                      ? "text-brand-purple-2"
                      : "text-black/50"
                }`}
              >
                {section.key}: {section.name}
              </div>
            );
          })}
        </div>

        <div className="p-2 sm:p-4">
          <span className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-bold text-brand-purple">
            {String(step).padStart(2, "0")} / {total}
          </span>
          <h2 className="mt-6 text-2xl font-bold leading-[1.2] text-brand-purple sm:text-3xl">
            {heading}
          </h2>
          {subtext && (
            <p className="mt-3 text-base leading-[1.3] text-black/70">
              {subtext}
            </p>
          )}

          {props.type === "form" ? (
            <>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {props.fields.map((field) =>
                  field.isPhone ? (
                    <div
                      key={field.name}
                      className={`flex overflow-hidden rounded-xl bg-white focus-within:ring-2 focus-within:ring-brand-purple-2 ${
                        field.fullWidth ? "sm:col-span-2" : ""
                      }`}
                    >
                      <select
                        value={field.dialCode ?? "+44"}
                        onChange={(e) => field.onDialCodeChange?.(e.target.value)}
                        className="shrink-0 border-r border-black/10 bg-white pl-3 pr-2 text-sm text-black focus:outline-none"
                        aria-label="Country code"
                      >
                        {DIAL_CODES.map((d) => (
                          <option key={d.code} value={d.code}>
                            {d.label}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        placeholder={field.label}
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        className="min-w-0 flex-1 px-4 py-3.5 text-base text-black placeholder:text-black/40 focus:outline-none"
                      />
                    </div>
                  ) : (
                    <input
                      key={field.name}
                      type={field.type ?? "text"}
                      placeholder={field.label}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      className={`rounded-xl bg-white px-6 py-3.5 text-base text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-brand-purple-2 ${
                        field.fullWidth ? "sm:col-span-2" : ""
                      }`}
                    />
                  )
                )}
              </div>
              {props.consentLabel && (
                <label className="mt-6 flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={props.consentChecked ?? false}
                    onChange={(e) => props.onConsentChange?.(e.target.checked)}
                    className="mt-1 size-6 shrink-0 rounded-md border-2 border-[#d8d8d8] text-brand-purple-2 focus:ring-brand-purple-2"
                  />
                  <span className="text-sm leading-[1.3] text-black/70">
                    {props.consentLabel}
                  </span>
                </label>
              )}
            </>
          ) : (
            <div className="mt-6 space-y-3">
              {props.options.map((option) => {
                const isRadio = props.type === "radio";
                const isSelected = props.selected.includes(option.id);

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => props.onSelect(option.id)}
                    className="flex w-full items-center gap-4 rounded-xl bg-white px-6 py-3.5 text-left transition-colors hover:bg-brand-lilac"
                  >
                    <span
                      className={`flex size-6 shrink-0 items-center justify-center border-2 ${
                        isRadio ? "rounded-full" : "rounded-md"
                      } ${
                        isSelected
                          ? "border-brand-purple-2"
                          : "border-[#d8d8d8]"
                      }`}
                    >
                      {isSelected && (
                        <span
                          className={`bg-brand-purple-2 ${
                            isRadio
                              ? "size-3.5 rounded-full"
                              : "size-3.5 rounded-sm"
                          }`}
                        />
                      )}
                    </span>
                    <span>
                      <span className="block text-base text-black">
                        {option.label}
                      </span>
                      {option.note && (
                        <span className="mt-0.5 block text-sm text-black/60">
                          {option.note}
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {message && (
            <p className="mt-4 text-sm font-semibold text-[#d6373a]">
              {message}
            </p>
          )}

          <div className="mt-8 flex items-center justify-between gap-4">
            {showBack ? (
              <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center justify-center rounded-xl border border-brand-purple px-[30px] py-4 text-base font-bold text-brand-purple transition-colors hover:bg-white"
              >
                Back
              </button>
            ) : (
              <span className="text-sm text-black/50">
                Nothing is sent until you ask us to
              </span>
            )}
            <button
              type="button"
              onClick={onNext}
              disabled={nextDisabled}
              className="inline-flex items-center justify-center rounded-xl bg-brand-green px-[30px] py-4 text-base font-bold text-[#fbfbfb] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {nextLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WebinarBand() {
  return (
    <div className="bg-gradient-to-r from-brand-purple to-brand-purple-2 py-20 text-center lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <h2 className="text-[34px] font-bold text-white sm:text-4xl">
          Need more than an hour of our time?
        </h2>
        <p className="mx-auto mt-4 max-w-[520px] text-lg leading-relaxed text-white/85">
          If your application is already in motion, a pre-submission review
          will get you further than a webinar will.
        </p>
        <a
          href="https://calendly.com/smarthealthcompliance/medi-comply-demo-by-shc-1"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center justify-center rounded-full bg-brand-green px-8 py-4 text-base font-bold text-white transition-opacity hover:opacity-90"
        >
          Book a Call
        </a>
      </div>
    </div>
  );
}

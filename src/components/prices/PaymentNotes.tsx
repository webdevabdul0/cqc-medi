import { ScrollRevealStagger } from "../ScrollReveal";

export function PaymentNotes() {
  return (
    <section className="bg-white py-16">
      <ScrollRevealStagger className="mx-auto max-w-[1440px] space-y-6 px-6 lg:px-[100px]">
        <div className="rounded-xl border-l-4 border-brand-orange bg-[#f8dac1] p-6">
          <p className="text-base leading-[1.4] text-black/80">
            <span className="font-bold">Payment. </span>
            All prices exclude VAT. One-off services are payable in full before
            work begins; MediComply is billed monthly and can be cancelled at
            any time.
          </p>
        </div>
        <div className="rounded-xl border-l-4 border-brand-green bg-[#d2fbec] p-6">
          <p className="text-base leading-[1.4] text-black/80">
            <span className="font-bold">What we can&apos;t do. </span>
            We can&apos;t guarantee a registration outcome — no consultancy
            can, and anyone who says otherwise is selling you something. What
            we can do is make sure CQC never rejects your application for
            something avoidable.
          </p>
        </div>
      </ScrollRevealStagger>
    </section>
  );
}

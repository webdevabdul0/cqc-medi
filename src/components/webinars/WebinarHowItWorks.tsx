const steps = [
  {
    num: 1,
    title: "Fill in the form",
    body: "Tell us who you are, your service type and which session you want. It takes about a minute.",
  },
  {
    num: 2,
    title: "We confirm your place",
    body: "Your enquiry lands with our team. We check capacity and confirm by email, usually within one working day.",
  },
  {
    num: 3,
    title: "Zoom link lands in your inbox",
    body: "You get the joining link plus a calendar invite, then a reminder the morning of the session.",
  },
];

export function WebinarHowItWorks() {
  return (
    <section className="bg-gradient-to-r from-brand-purple to-brand-purple-2 py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[100px]">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-green">
            Registering
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-[42px]">
            How you get your Zoom link
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] text-base text-white/80">
            Places are checked by hand so we can keep the sessions small
            enough for real questions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.num}
              className="rounded-[16px] border border-white/20 bg-white/8 p-7 backdrop-blur-sm"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-brand-purple">
                {s.num}
              </div>
              <h4 className="mb-2 text-lg font-bold text-white">{s.title}</h4>
              <p className="text-sm leading-relaxed text-white/80">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

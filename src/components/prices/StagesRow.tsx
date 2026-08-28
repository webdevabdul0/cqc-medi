const STAGES = [
  {
    label: "STAGE 01",
    title: "Getting registered",
    body: "Applications, policies, manager interview",
  },
  {
    label: "STAGE 02",
    title: "Getting inspection-ready",
    body: "Mock inspections, consultancy visits",
  },
  {
    label: "STAGE 03",
    title: "Staying compliant",
    body: "Applications, policies, manager interview",
  },
];

export function StagesRow({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-[20px] border border-brand-purple sm:grid-cols-3">
      {STAGES.map((stage, i) => (
        <button
          key={stage.label}
          type="button"
          onClick={() => onSelect(i)}
          aria-pressed={active === i}
          className={`p-8 text-left transition-colors ${
            active === i
              ? "bg-brand-purple text-white"
              : "bg-brand-lilac text-black hover:bg-white"
          }`}
        >
          <span
            className={`text-xs font-bold uppercase tracking-wide ${
              active === i ? "text-white/70" : "text-black/50"
            }`}
          >
            {stage.label}
          </span>
          <h3 className="mt-2 text-2xl font-semibold">{stage.title}</h3>
          <p
            className={`mt-4 text-sm ${
              active === i ? "text-white/80" : "text-black/60"
            }`}
          >
            {stage.body}
          </p>
        </button>
      ))}
    </div>
  );
}

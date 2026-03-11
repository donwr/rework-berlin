const STATS = [
  {
    number: "2.7M",
    label: "Tons per year",
    desc: "Estimated sports-related textile waste generated in Europe annually",
  },
  {
    number: "92%",
    label: "Polyester-based",
    desc: "Share of synthetic fibers in sports merchandise, making recycling difficult",
  },
  {
    number: "<1%",
    label: "Re-enters circular systems",
    desc: "Proportion of sports textiles that are reused, repaired, or recycled",
  },
  {
    number: "1",
    label: "Season lifespan",
    desc: "Average useful life of fan merchandise before it is discarded or forgotten",
  },
];

export default function Problem() {
  return (
    <section className="py-[clamp(5rem,10vh,8rem)] bg-[var(--sage-cream)]">
      <div className="max-w-[var(--max-w)] mx-auto px-[clamp(1.5rem,5vw,5rem)]">
        {/* Section label */}
        <div className="font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-[0.12em] mb-4 flex items-center gap-2 before:content-[''] before:inline-block before:w-2 before:h-[2px] before:bg-[var(--signal)]">
          The Challenge
        </div>

        {/* Section heading */}
        <h2 className="font-[family-name:var(--font-cormorant-garamond)] font-medium italic leading-[1.15] mb-8 text-[clamp(2rem,4vw,3rem)] max-w-[700px]">
          Sports has a textile waste problem hiding in plain sight
        </h2>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STATS.map((stat) => (
            <div
              key={stat.number}
              className="bg-[var(--warm-cream)] p-8 px-7 border border-[rgba(30,30,30,0.06)]"
            >
              <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[2.75rem] font-bold text-[var(--forest)] leading-none mb-2">
                {stat.number}
              </div>
              <div className="font-[family-name:var(--font-dm-sans)] text-sm font-bold text-[var(--charcoal)] mb-1.5">
                {stat.label}
              </div>
              <div className="text-[0.8125rem] text-[rgba(30,30,30,0.6)] leading-[1.5]">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Key message */}
        <p className="font-[family-name:var(--font-cormorant-garamond)] text-[1.375rem] italic text-[var(--forest)] max-w-[680px] leading-[1.45] border-l-[3px] border-[var(--signal)] pl-6">
          Every season, sports ecosystems produce enormous volumes of textile
          waste — most of it synthetic, nearly all of it linear. Very little is
          reused, repaired, or recycled.
        </p>

        {/* Footnote */}
        <p className="text-[0.6875rem] text-[rgba(30,30,30,0.4)] mt-3">
          *Illustrative estimates based on industry reporting.
        </p>
      </div>
    </section>
  );
}

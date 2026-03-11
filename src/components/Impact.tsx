const IMPACTS = [
  {
    number: "200+",
    label: "Participants per activation",
    desc: "Fans directly engaged in hands-on textile circularity at each event.",
  },
  {
    number: "80kg",
    label: "Textiles diverted",
    desc: "Sports apparel repaired, redesigned, and kept out of landfill per event.",
  },
  {
    number: "12",
    label: "Workshops per year",
    desc: "Scalable activations across tournaments, fan zones, and community events.",
  },
  {
    number: "95%",
    label: "Awareness increase",
    desc: "Measurable shift in textile sustainability knowledge after one session.",
  },
];

export default function Impact() {
  return (
    <section
      id="impact"
      className="relative py-[clamp(5rem,10vh,8rem)] bg-[var(--warm-cream)] overflow-hidden"
    >
      <div className="max-w-[var(--max-w)] mx-auto px-[clamp(1.5rem,5vw,5rem)]">
        <h2 className="font-[family-name:var(--font-cormorant-garamond)] text-[clamp(3rem,8vw,6rem)] font-bold uppercase leading-none text-[var(--charcoal)] tracking-[-0.02em] mb-[clamp(3rem,6vh,5rem)]">
          Measurable
          <br />
          Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-[rgba(30,30,30,0.1)]">
          {IMPACTS.map((item, i) => (
            <div
              key={item.number}
              className={`py-10 px-8 ${
                i === 0 ? "lg:pl-0" : ""
              } ${
                i === IMPACTS.length - 1
                  ? "lg:pr-0 lg:border-r-0"
                  : "lg:border-r lg:border-[rgba(30,30,30,0.08)]"
              } ${
                i < 2
                  ? "md:max-lg:border-b md:max-lg:border-[rgba(30,30,30,0.08)]"
                  : ""
              } ${
                i === 1 ? "md:max-lg:border-r-0" : ""
              } max-md:border-b max-md:border-[rgba(30,30,30,0.08)] max-md:px-0 max-md:py-6`}
            >
              <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-[var(--forest)] leading-none mb-3">
                {item.number}
              </div>
              <div className="font-[family-name:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[0.06em] text-[var(--charcoal)] mb-2">
                {item.label}
              </div>
              <div className="text-[0.8125rem] text-[rgba(30,30,30,0.5)] leading-[1.6]">
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 pt-8 border-t border-[rgba(30,30,30,0.1)] font-[family-name:var(--font-cormorant-garamond)] text-[1.25rem] italic text-[var(--forest)] max-w-[700px] leading-[1.5]">
          Every activation generates documented outcomes for sustainability
          reporting, stakeholder communication, and institutional
          accountability.
        </p>
      </div>
    </section>
  );
}

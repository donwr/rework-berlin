const CASES = [
  {
    title: "Sports Events",
    items: [
      "Fan zone activations at major tournaments",
      "Matchday experiences at club venues",
      "Half-time and pre-game engagement zones",
    ],
    value:
      "Turns idle event time into visible sustainability action that fans actively seek out.",
  },
  {
    title: "Education & Youth",
    items: [
      "Youth league sustainability workshops",
      "School sport partnership programs",
      "University research collaborations",
    ],
    value:
      "Connects circular economy principles to hands-on learning within sport contexts young people care about.",
  },
  {
    title: "Institutional & Brand",
    items: [
      "Federation-wide sustainability initiatives",
      "Sponsor activation with measurable impact",
      "CSR program integration for sports brands",
    ],
    value:
      "A credible, participatory sustainability format that produces reportable outcomes and compelling media content.",
  },
];

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="py-[clamp(5rem,10vh,8rem)] bg-[var(--warm-cream)]"
    >
      <div className="max-w-[var(--max-w)] mx-auto px-[clamp(1.5rem,5vw,5rem)]">
        {/* Section label */}
        <div className="font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-[0.12em] mb-4 flex items-center gap-2 before:content-[''] before:inline-block before:w-2 before:h-[2px] before:bg-[var(--signal)]">
          Where It Works
        </div>

        <h2 className="font-[family-name:var(--font-cormorant-garamond)] font-medium italic leading-[1.15] mb-8 text-[clamp(2rem,4vw,2.75rem)] max-w-[600px]">
          Built for the places sport already happens
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASES.map((c) => (
            <div
              key={c.title}
              className="bg-[var(--sage-cream)] p-10 px-8 border border-[rgba(30,30,30,0.06)] flex flex-col"
            >
              <h3 className="font-[family-name:var(--font-cormorant-garamond)] text-[1.75rem] font-semibold italic text-[var(--forest)] mb-5">
                {c.title}
              </h3>
              <ul className="list-none mb-6 flex-1">
                {c.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-[var(--charcoal)] py-2 border-b border-[rgba(30,30,30,0.06)] flex items-center gap-2"
                  >
                    <span className="text-[var(--moss)] text-[0.8125rem]">
                      &rarr;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[0.8125rem] text-[rgba(30,30,30,0.6)] leading-[1.55] mt-auto">
                {c.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

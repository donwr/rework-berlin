const STEPS = [
  {
    num: "01",
    title: "Event Setup",
    desc: "A mobile workshop station is installed directly at the sports venue \u2014 inside a fan zone, tournament area, or community event space. Everything needed is self-contained and ready to go.",
  },
  {
    num: "02",
    title: "Collection",
    desc: "Fans bring their own worn, outdated, or unused sports textiles. Additional materials from club overstock or event merchandise are provided on-site.",
  },
  {
    num: "03",
    title: "Transformation",
    desc: "Guided by experienced facilitators, participants repair, redesign, and customize garments using accessible textile techniques. Every piece becomes one of a kind.",
  },
  {
    num: "04",
    title: "Learning",
    desc: "Participants engage with the story behind their materials \u2014 synthetic fibers, production cycles, and what circularity looks like in practice.",
  },
];

export default function HowItWorks() {
  return (
    <>
      {/* Immersive band */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-[var(--forest)]">
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "url('https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1600&q=80') center/cover no-repeat",
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,30,20,0.85)] via-[rgba(43,74,43,0.2)] to-[rgba(43,74,43,0.3)]" />

        <div className="relative z-[2] px-[clamp(1.5rem,5vw,5rem)] pb-[clamp(3rem,6vh,5rem)] max-w-[var(--max-w)] mx-auto w-full">
          <h2 className="font-[family-name:var(--font-cormorant-garamond)] text-[clamp(3rem,7vw,5.5rem)] font-bold uppercase leading-none text-[var(--off-white)] tracking-[-0.02em] max-w-[700px]">
            Transform Your
            <br />
            Textiles With Us
          </h2>
        </div>
      </section>

      {/* CTA bar */}
      <div className="py-6 bg-[var(--forest)] text-right">
        <div className="flex items-center justify-end gap-8 px-[clamp(1.5rem,5vw,5rem)] max-w-[var(--max-w)] mx-auto">
          <span className="text-[0.625rem] font-medium uppercase tracking-[0.1em] text-[rgba(240,232,208,0.5)] text-right max-w-[240px] leading-[1.6]">
            Bring your old jerseys, worn sportswear, and forgotten merchandise
            to our next activation.
          </span>
          <a
            href="#contact"
            className="inline-flex items-center justify-center font-[family-name:var(--font-dm-sans)] text-[0.6875rem] font-medium uppercase tracking-[0.06em] py-2.5 px-5 cursor-pointer transition-all duration-300 bg-transparent border border-[var(--off-white)] text-[var(--off-white)] hover:bg-[var(--off-white)] hover:text-[var(--forest)] hover:scale-[1.03]"
          >
            Partner With Us
          </a>
        </div>
      </div>

      {/* Editorial steps */}
      <section
        id="how-it-works"
        className="py-[clamp(5rem,10vh,8rem)] bg-[var(--sage-cream)]"
      >
        <div className="max-w-[var(--max-w)] mx-auto px-[clamp(1.5rem,5vw,5rem)]">
          <h2 className="font-[family-name:var(--font-cormorant-garamond)] text-[clamp(2rem,4.5vw,3.25rem)] font-bold uppercase leading-[1.1] text-[var(--charcoal)] mb-8 max-w-[600px]">
            The Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] border-t border-[rgba(30,30,30,0.1)]">
            {STEPS.map((step) => (
              <div key={step.num} className="contents max-md:!block max-md:border-b max-md:border-[rgba(30,30,30,0.08)] max-md:py-6">
                <div className="py-7 pr-8 max-md:pr-0 max-md:py-0 max-md:pb-2 border-b border-[rgba(30,30,30,0.08)] max-md:border-b-0 flex items-baseline gap-4">
                  <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[0.6875rem] font-medium text-[var(--signal)] tracking-[0.05em]">
                    {step.num}
                  </span>
                  <span className="font-[family-name:var(--font-cormorant-garamond)] text-[1.375rem] font-semibold italic text-[var(--charcoal)]">
                    {step.title}
                  </span>
                </div>
                <div className="py-7 max-md:py-0 border-b border-[rgba(30,30,30,0.08)] max-md:border-b-0 text-[0.8125rem] leading-[1.7] text-[rgba(30,30,30,0.55)] flex items-center">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

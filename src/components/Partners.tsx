const TAGS = [
  "Sports federations & clubs",
  "Event organizers",
  "Sustainability foundations",
  "Universities & research",
  "Sports brands & apparel",
];

export default function Partners() {
  return (
    <section className="py-[clamp(5rem,10vh,8rem)] bg-[var(--forest)] text-[var(--off-white)]">
      <div className="max-w-[var(--max-w)] mx-auto px-[clamp(1.5rem,5vw,5rem)]">
        {/* Section label */}
        <div className="font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-[0.12em] mb-4 flex items-center gap-2 text-[rgba(240,232,208,0.5)] before:content-[''] before:inline-block before:w-2 before:h-[2px] before:bg-[var(--signal)]">
          Collaborations
        </div>

        <h2 className="font-[family-name:var(--font-cormorant-garamond)] font-medium italic leading-[1.15] mb-8 text-[clamp(2rem,4vw,3rem)] text-[var(--off-white)]">
          Designed for partnership
        </h2>

        <p className="text-base text-[rgba(240,232,208,0.7)] max-w-[600px] leading-[1.7] mb-8">
          The Rework Berlin operates as a collaborative platform. We work with
          organizations that share an interest in making sustainability tangible
          within sport — combining resources, networks, and expertise to scale
          impact across events and communities.
        </p>

        <p className="font-[family-name:var(--font-cormorant-garamond)] text-[1.25rem] italic text-[rgba(240,232,208,0.4)] mb-10">
          Partner organizations coming soon.
        </p>

        <div className="flex flex-wrap gap-3">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="text-[0.8125rem] font-medium py-2.5 px-5 border border-[rgba(240,232,208,0.15)] text-[rgba(240,232,208,0.6)] transition-all duration-300 hover:border-[rgba(240,232,208,0.35)] hover:text-[var(--off-white)] cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

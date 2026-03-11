export default function Editorial() {
  return (
    <section className="bg-[var(--warm-cream)] py-[clamp(4rem,8vh,6rem)] border-t border-[rgba(30,30,30,0.06)]">
      <div className="max-w-[var(--max-w)] mx-auto px-[clamp(1.5rem,5vw,5rem)]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr_1fr] md:grid-rows-[auto_auto] gap-x-8 gap-y-6 items-start">
          {/* Feature title - col 1, row 1 */}
          <div className="md:col-start-1 md:row-start-1">
            <h3 className="font-[family-name:var(--font-cormorant-garamond)] text-[clamp(2.5rem,5vw,3.5rem)] font-medium italic leading-[1.1] text-[var(--charcoal)] mb-3">
              Mobile
              <br />
              Stations
            </h3>
            <span className="text-xs text-[rgba(30,30,30,0.4)] italic">
              by Rework Berlin
            </span>
          </div>

          {/* Body text - col 2, row 1 */}
          <div className="md:col-start-2 md:row-start-1 text-[0.8125rem] leading-[1.7] text-[rgba(30,30,30,0.65)] pt-2">
            <p>
              Imagine interactive sustainability stations embedded directly into
              the energy of live sport — fan zones, tournament grounds, matchday
              events. Fans bring old jerseys, worn-out sportswear, and forgotten
              merchandise. With guidance and professional equipment, they repair,
              redesign, and transform these textiles into something personal and
              lasting. Each session is both a creative act and an encounter with
              the realities of textile production, synthetic fibers, and circular
              economy practices.
            </p>
          </div>

          {/* Brand name with starburst - col 3, row 1 */}
          <div className="md:col-start-3 md:row-start-1 font-[family-name:var(--font-cormorant-garamond)] text-[clamp(3rem,6vw,5rem)] font-normal text-[var(--charcoal)] text-left md:text-right leading-none flex items-start justify-start md:justify-end gap-1">
            Rework
            <svg
              className="inline-block w-5 h-5 mt-[0.35em]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0l1.8 7.6L20.5 3.5l-4.1 6.7L24 12l-7.6 1.8 4.1 6.7-6.7-4.1L12 24l-1.8-7.6-6.7 4.1 4.1-6.7L0 12l7.6-1.8L3.5 3.5l6.7 4.1z" />
            </svg>
          </div>

          {/* Tall image left - col 1, row 2 */}
          <div className="md:col-start-1 md:row-start-2 overflow-hidden aspect-[3/4] md:aspect-[3/4] max-md:aspect-[16/10]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80"
              alt="Textile workshop detail"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card right - col 2-3, row 2 */}
          <div className="md:col-start-2 md:col-span-2 md:row-start-2 relative">
            <div className="font-[family-name:var(--font-dm-sans)] text-[0.625rem] font-medium uppercase tracking-[0.1em] text-[rgba(30,30,30,0.4)] mb-2">
              Activation / Sports Events 2026
            </div>
            <div className="relative overflow-hidden aspect-[16/10]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1000&q=80"
                alt="Community engagement"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6 px-8 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent w-full">
                <h4 className="font-[family-name:var(--font-cormorant-garamond)] text-[2rem] font-medium italic text-[var(--off-white)] underline underline-offset-4 decoration-1 mb-1">
                  Fan Zone Lab
                </h4>
                <a
                  href="#concept"
                  className="inline-flex items-center justify-center w-7 h-7 border border-[rgba(240,232,208,0.4)] text-[var(--off-white)] text-sm mt-2"
                >
                  &#8599;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

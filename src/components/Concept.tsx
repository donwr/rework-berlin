export default function Concept() {
  return (
    <section
      id="concept"
      className="pt-[clamp(5rem,10vh,8rem)] pb-[clamp(3rem,6vh,5rem)] bg-[var(--sage-cream)]"
    >
      <div className="max-w-[var(--max-w)] mx-auto px-[clamp(1.5rem,5vw,5rem)]">
        {/* Row 1: Thumbnail + About heading + two text columns */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] lg:grid-cols-[200px_1fr_1fr] gap-x-12 gap-y-8 items-start mb-[clamp(3rem,6vh,5rem)]">
          <div className="overflow-hidden aspect-[3/4] max-md:aspect-[16/10]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&q=80"
              alt="Workshop participant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <div className="font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-[0.1em] text-[rgba(30,30,30,0.45)] mb-6 text-center">
              About Rework Berlin
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-[0.8125rem] leading-[1.75] text-[rgba(30,30,30,0.6)]">
                A portable, fully equipped upcycling workshop designed for
                sports events. Set up inside fan zones, tournament villages, or
                community sports days, each station gives participants the tools
                and guidance to work directly with discarded sports textiles.
              </p>
              <p className="text-[0.8125rem] leading-[1.75] text-[rgba(30,30,30,0.6)]">
                The experience combines creative participation with
                sustainability education. Fans don&apos;t just hear about
                circularity — they practice it. Every garment repaired,
                redesigned, or customized is a tangible act of sustainability
                that participants take home.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: Small thumbnail offset right */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_180px] gap-8 items-end mb-[clamp(3rem,6vh,5rem)]">
          <div></div>
          <div className="overflow-hidden aspect-square">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80"
              alt="Sports textile detail"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Row 3: Heading + Description left, Images right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-[family-name:var(--font-cormorant-garamond)] text-[clamp(2rem,4.5vw,3.25rem)] font-bold uppercase leading-[1.1] text-[var(--charcoal)] tracking-[-0.01em] mb-8">
              Learn the Art of
              <br />
              Textile Circularity
            </h2>
            <div className="font-[family-name:var(--font-dm-sans)] text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-[var(--charcoal)] mb-4">
              Description
            </div>
            <p className="text-[0.8125rem] leading-[1.75] text-[rgba(30,30,30,0.6)] max-w-[380px]">
              Join us for hands-on workshops where participants repair, redesign,
              customize, and transform sports garments using professional
              techniques including patching, printing, embroidery, and creative
              redesign. Every session builds awareness of synthetic fibers,
              production cycles, and what circularity looks like in practice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="overflow-hidden aspect-[3/4] sm:row-span-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80"
                alt="Textile textures"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&q=80"
                alt="Community making"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

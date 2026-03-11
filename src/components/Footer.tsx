const PROGRAM_LINKS = [
  { label: "Concept", href: "#concept" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Impact", href: "#impact" },
  { label: "Use Cases", href: "#use-cases" },
];

const COLLABORATE_LINKS = [
  { label: "Partner With Us", href: "#contact" },
  { label: "Download Project Deck", href: "#" },
  { label: "Inquiry Types", href: "#" },
  { label: "Contact", href: "#contact" },
];

const LEARN_LINKS = [
  { label: "Textile Circularity", href: "#" },
  { label: "Sustainability in Sport", href: "#" },
  { label: "Research & Policy", href: "#" },
  { label: "Press", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--forest)] text-[var(--off-white)] pt-[clamp(4rem,8vh,6rem)] pb-8 -mt-px">
      <div className="max-w-[var(--max-w)] mx-auto px-[clamp(1.5rem,5vw,5rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 lg:gap-12 mb-16">
          {/* Brand column */}
          <div>
            <div className="font-[family-name:var(--font-cormorant-garamond)] text-2xl font-semibold mb-3">
              Rework Berlin
            </div>
            <p className="text-sm text-[rgba(240,232,208,0.5)] leading-[1.6] max-w-[280px]">
              Turning sports textile waste into participatory sustainability
              experiences.
            </p>
          </div>

          {/* Program */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.1em] text-[rgba(240,232,208,0.4)] mb-5">
              Program
            </h4>
            <ul className="list-none">
              {PROGRAM_LINKS.map((link) => (
                <li key={link.label} className="mb-2.5">
                  <a
                    href={link.href}
                    className="text-sm text-[rgba(240,232,208,0.65)] transition-colors duration-300 hover:text-[var(--off-white)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collaborate */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.1em] text-[rgba(240,232,208,0.4)] mb-5">
              Collaborate
            </h4>
            <ul className="list-none">
              {COLLABORATE_LINKS.map((link) => (
                <li key={link.label} className="mb-2.5">
                  <a
                    href={link.href}
                    className="text-sm text-[rgba(240,232,208,0.65)] transition-colors duration-300 hover:text-[var(--off-white)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.1em] text-[rgba(240,232,208,0.4)] mb-5">
              Learn More
            </h4>
            <ul className="list-none">
              {LEARN_LINKS.map((link) => (
                <li key={link.label} className="mb-2.5">
                  <a
                    href={link.href}
                    className="text-sm text-[rgba(240,232,208,0.65)] transition-colors duration-300 hover:text-[var(--off-white)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[rgba(255,255,255,0.08)] gap-4 text-center">
          <span className="text-xs text-[rgba(240,232,208,0.35)]">
            &copy; 2026 Rework Berlin
          </span>
          <span className="text-xs text-[rgba(240,232,208,0.35)]">
            reworkberlin.de
          </span>
        </div>
      </div>
    </footer>
  );
}

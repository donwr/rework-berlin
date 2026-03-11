"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("#hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-[clamp(1.5rem,4vw,3rem)] py-5 border-b transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(237,240,232,0.92)] backdrop-blur-[20px] border-b-[rgba(30,30,30,0.08)]"
          : "bg-transparent border-b-transparent"
      }`}
    >
      <span
        className={`font-[family-name:var(--font-dm-sans)] text-[0.8125rem] font-bold uppercase tracking-[0.08em] whitespace-nowrap transition-colors duration-400 ${
          scrolled ? "text-[var(--charcoal)]" : "text-[var(--off-white)]"
        }`}
      >
        Rework Berlin
      </span>

      <span
        className={`absolute left-1/2 -translate-x-1/2 font-[family-name:var(--font-dm-sans)] text-[0.8125rem] font-medium uppercase tracking-[0.06em] cursor-pointer transition-colors duration-300 ${
          scrolled
            ? "text-[rgba(30,30,30,0.5)] hover:text-[var(--charcoal)]"
            : "text-[rgba(240,232,208,0.7)] hover:text-[var(--off-white)]"
        }`}
      >
        Menu
      </span>

      <div className="flex items-center gap-6">
        {/* Social icons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            aria-label="Website"
            className={`flex items-center justify-center w-7 h-7 transition-colors duration-300 ${
              scrolled
                ? "text-[rgba(30,30,30,0.4)] hover:text-[var(--charcoal)]"
                : "text-[rgba(240,232,208,0.6)] hover:text-[var(--off-white)]"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-4 h-4"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className={`flex items-center justify-center w-7 h-7 transition-colors duration-300 ${
              scrolled
                ? "text-[rgba(30,30,30,0.4)] hover:text-[var(--charcoal)]"
                : "text-[rgba(240,232,208,0.6)] hover:text-[var(--off-white)]"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-4 h-4"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className={`flex items-center justify-center w-7 h-7 transition-colors duration-300 ${
              scrolled
                ? "text-[rgba(30,30,30,0.4)] hover:text-[var(--charcoal)]"
                : "text-[rgba(240,232,208,0.6)] hover:text-[var(--off-white)]"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-4 h-4"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            </svg>
          </a>
        </div>

        {/* Nav links */}
        <ul className="hidden md:flex gap-6 list-none">
          <li>
            <a
              href="#contact"
              className={`text-[0.8125rem] font-medium uppercase tracking-[0.06em] transition-colors duration-300 ${
                scrolled
                  ? "text-[rgba(30,30,30,0.5)] hover:text-[var(--charcoal)]"
                  : "text-[rgba(240,232,208,0.7)] hover:text-[var(--off-white)]"
              }`}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#concept"
              className={`text-[0.8125rem] font-medium uppercase tracking-[0.06em] transition-colors duration-300 ${
                scrolled
                  ? "text-[rgba(30,30,30,0.5)] hover:text-[var(--charcoal)]"
                  : "text-[rgba(240,232,208,0.7)] hover:text-[var(--off-white)]"
              }`}
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

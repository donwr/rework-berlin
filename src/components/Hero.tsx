"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/images/hero.jpg", alt: "Upcycled sports jersey fashion", local: true },
  { src: "/images/workshop/PHOTO-2026-01-23-14-11-33.jpeg", alt: "Workshop session", local: true },
  { src: "/images/workshop/PHOTO-2026-01-23-14-11-19.jpeg", alt: "Workshop activity", local: true },
  { src: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1200&q=80", alt: "Textile workshop hands at work", local: false },
  { src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&q=80", alt: "Textile material close-up", local: false },
  { src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&q=80", alt: "Community engagement", local: false },
];

const DURATION = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [barKey, setBarKey] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
    setBarKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const id = setInterval(nextSlide, DURATION);
    return () => clearInterval(id);
  }, [nextSlide]);

  return (
    <section
      id="hero"
      className="relative min-h-dvh grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-[var(--forest)]"
    >
      {/* Left side */}
      <div className="flex flex-col justify-between pt-[clamp(5rem,8vh,7rem)] pb-[clamp(2.5rem,4vh,3.5rem)] px-[clamp(2rem,4vw,4rem)] relative">
        <div className="font-[family-name:var(--font-dm-sans)] text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-[rgba(240,232,208,0.45)] mb-8">
          Sustainability Activation
          <br />
          2026
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h2 className="font-[family-name:var(--font-cormorant-garamond)] text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold italic leading-[1.1] text-[var(--off-white)] mb-6">
            Turning sports textile
            <br />
            waste into experience
          </h2>

          <h1 className="font-[family-name:var(--font-dm-sans)] text-[clamp(3.5rem,9vw,7.5rem)] font-bold leading-[0.9] text-[var(--off-white)] uppercase tracking-[-0.02em] mb-8">
            Rework
            <br />
            Berlin<sup className="text-[0.25em] align-super font-normal tracking-normal">&reg;</sup>
          </h1>

          <p className="font-[family-name:var(--font-dm-sans)] text-[0.75rem] font-normal uppercase tracking-[0.04em] text-[rgba(240,232,208,0.55)] max-w-[320px] leading-[1.65] mb-8">
            Mobile upcycling stations integrated into sports events where fans
            transform old jerseys and merchandise while learning about textile
            sustainability.
          </p>

          <div className="flex gap-4 flex-wrap mt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center font-[family-name:var(--font-dm-sans)] text-[0.8125rem] font-medium uppercase tracking-[0.06em] py-3.5 px-9 border-none cursor-pointer transition-all duration-300 bg-[var(--signal)] text-white hover:bg-[var(--signal-hover)] hover:scale-[1.03]"
            >
              Partner With Us
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center font-[family-name:var(--font-dm-sans)] text-[0.8125rem] font-medium uppercase tracking-[0.06em] py-3.5 px-9 cursor-pointer transition-all duration-300 bg-transparent border border-[var(--off-white)] text-[var(--off-white)] hover:bg-[var(--off-white)] hover:text-[var(--forest)] hover:scale-[1.03]"
            >
              Download Concept Deck
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-end justify-between mt-auto">
          <div className="flex gap-3">
            {/* Globe */}
            <a
              href="#"
              className="flex items-center justify-center w-8 h-8 border border-[rgba(240,232,208,0.15)] text-[rgba(240,232,208,0.5)] transition-all duration-300 hover:text-[var(--off-white)] hover:border-[rgba(240,232,208,0.35)]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-3.5 h-3.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="flex items-center justify-center w-8 h-8 border border-[rgba(240,232,208,0.15)] text-[rgba(240,232,208,0.5)] transition-all duration-300 hover:text-[var(--off-white)] hover:border-[rgba(240,232,208,0.35)]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-3.5 h-3.5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              className="flex items-center justify-center w-8 h-8 border border-[rgba(240,232,208,0.15)] text-[rgba(240,232,208,0.5)] transition-all duration-300 hover:text-[var(--off-white)] hover:border-[rgba(240,232,208,0.35)]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-3.5 h-3.5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              </svg>
            </a>
          </div>

          <div className="font-[family-name:var(--font-dm-sans)] text-[0.625rem] font-medium uppercase tracking-[0.1em] text-[rgba(240,232,208,0.35)] text-right leading-[1.5]">
            Rework
            <br />
            Berlin
          </div>
        </div>
      </div>

      {/* Right side - Image Carousel */}
      <div className="relative overflow-hidden h-[50vh] md:h-auto">
        {SLIDES.map((slide, i) =>
          slide.local ? (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              className={`object-cover transition-opacity duration-[1200ms] ease-in-out ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
              priority={i === 0}
              sizes="50vw"
            />
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            />
          )
        )}

        {/* Progress bar */}
        <div
          key={barKey}
          className="absolute bottom-0 left-0 h-[2px] bg-[var(--off-white)] opacity-50 w-full origin-left"
          style={{
            animation: `progress-shrink ${DURATION}ms linear forwards`,
          }}
        />
      </div>
    </section>
  );
}

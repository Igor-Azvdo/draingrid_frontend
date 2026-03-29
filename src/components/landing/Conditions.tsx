"use client";

import { useState } from "react";
import { Container } from "./Container";
import { conditionsContent } from "@/data/landing-content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Conditions() {
  const ref = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-surface-dark text-white relative noise-overlay overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <Container>
        <div ref={ref} className="scroll-fade-in max-w-3xl mx-auto relative z-10">
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-semibold text-center mb-4">
            Indicações
          </p>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-bold text-white text-center mb-14 leading-tight">
            {conditionsContent.title}
          </h2>

          <div className="flex flex-col gap-2">
            {conditionsContent.categories.map((cat, i) => (
              <div
                key={i}
                className="bg-glass-light border border-glass-border rounded-xl overflow-hidden transition-all duration-300 hover:border-glass-border-hover"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-semibold text-white/80 text-base md:text-lg transition-colors cursor-pointer"
                  aria-expanded={openIndex === i}
                >
                  {cat.name}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className={`shrink-0 text-accent/60 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6 flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm font-medium text-accent/70 bg-accent/[0.08] border border-accent/10 px-3.5 py-1.5 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-12 h-px bg-accent/30 mx-auto mt-14 mb-6" />
          <p className="text-center text-base text-white/40 italic max-w-lg mx-auto leading-relaxed">
            {conditionsContent.closing}
          </p>
        </div>
      </Container>
    </section>
  );
}

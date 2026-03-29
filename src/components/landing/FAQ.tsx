"use client";

import { useState } from "react";
import { Container } from "./Container";
import { faqContent } from "@/data/landing-content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function FAQ() {
  const ref = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="duvidas" className="py-24 md:py-32 bg-surface-dark text-white relative noise-overlay overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div ref={ref} className="scroll-fade-in max-w-3xl mx-auto relative z-10">
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-semibold text-center mb-4">
            Tire suas dúvidas
          </p>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-bold text-white text-center mb-14 leading-tight">
            {faqContent.title}
          </h2>

          <div className="flex flex-col gap-2">
            {faqContent.items.map((item, i) => (
              <div
                key={i}
                className="bg-glass-light border border-glass-border rounded-xl overflow-hidden transition-all duration-300 hover:border-glass-border-hover"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-semibold text-white/80 text-base md:text-lg transition-colors cursor-pointer"
                  aria-expanded={openIndex === i}
                >
                  {item.question}
                  <span
                    className={`shrink-0 text-xl text-accent/50 transition-transform duration-300 font-light ${
                      openIndex === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-white/40 leading-[1.8] text-[0.9375rem]">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

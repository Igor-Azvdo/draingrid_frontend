"use client";

import { useState } from "react";
import { Container } from "../Container";
import { faqContent } from "@/data/landing-content-newhomepage";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="duvidas" className="py-24 bg-section-green-soft scroll-mt-24" style={{ fontFamily: "var(--font-urbanist), sans-serif" }}>
      <Container>
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left: title */}
          <div className="md:w-1/3 shrink-0">
            <h2 className="text-6xl md:text-7xl font-extrabold text-text leading-none tracking-tight">
              Dúvidas
            </h2>
            <p className="text-text/40 text-base mt-3">Perguntas frequentes</p>
          </div>

          {/* Right: accordion */}
          <div className="flex-1 border-t border-text/10">
            {faqContent.items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="border-b border-text/10">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left gap-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-xl text-text leading-snug">
                      {item.question}
                    </span>
                    <div className="w-7 h-7 rounded-full border border-text/20 flex items-center justify-center shrink-0 transition-colors duration-200">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-text/40 transition-transform duration-300" style={{ transform: isOpen ? "rotate(45deg)" : "none" }}>
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="text-text/50 text-lg leading-relaxed pb-6">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

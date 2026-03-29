"use client";

import { useState } from "react";
import { Container } from "./Container";
import { faqContent } from "@/data/landing-content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function FAQ() {
  const ref = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="duvidas" className="py-20 md:py-28 bg-bg-warm">
      <Container>
        <div ref={ref} className="scroll-fade-in max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-text text-center mb-12">
            {faqContent.title}
          </h2>
          <div className="flex flex-col gap-3">
            {faqContent.items.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-card-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-hero-dark text-lg hover:bg-bg-warm/50 transition-colors cursor-pointer"
                  aria-expanded={openIndex === i}
                >
                  {item.question}
                  <span
                    className={`shrink-0 text-2xl text-primary-dark transition-transform duration-300 ${
                      openIndex === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 pb-5 text-text/70 leading-relaxed">
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

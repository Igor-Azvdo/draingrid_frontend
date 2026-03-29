"use client";

import { useState } from "react";
import { Container } from "./Container";
import { conditionsContent } from "@/data/landing-content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Conditions() {
  const ref = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-bg-sage">
      <Container>
        <div ref={ref} className="scroll-fade-in max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-text text-center mb-12">
            {conditionsContent.title}
          </h2>
          <div className="flex flex-col gap-3">
            {conditionsContent.categories.map((cat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-card-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-hero-dark text-lg hover:bg-bg-warm/50 transition-colors cursor-pointer"
                >
                  {cat.name}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className={`shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm font-medium text-primary-dark bg-primary/10 px-3 py-1.5 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-lg text-text/70 italic max-w-xl mx-auto">
            {conditionsContent.closing}
          </p>
        </div>
      </Container>
    </section>
  );
}

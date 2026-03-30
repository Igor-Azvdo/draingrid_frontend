"use client";

import { useState } from "react";
import { Container } from "./Container";
import { faqContent } from "@/data/landing-content";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="duvidas" className="py-24 bg-white scroll-mt-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-block px-5 py-2 rounded-full border border-card-border bg-bg text-xs font-bold tracking-widest uppercase text-primary-dark mb-6">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text">
              Tire suas <span className="text-highlight-dark">dúvidas</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqContent.items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`rounded-[2rem] overflow-hidden transition-all duration-500 border ${
                    isOpen
                      ? "bg-primary-dark border-primary-dark text-white shadow-xl"
                      : "bg-white border-card-border hover:border-primary/30"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-bold text-base md:text-lg ${
                        isOpen ? "text-white" : "text-text"
                      }`}
                    >
                      {item.question}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "border-white/20 text-white rotate-180"
                          : "border-card-border text-text/40"
                      }`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${
                      isOpen
                        ? "max-h-[400px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-5 border-t border-white/10">
                      <p className="text-white/70 leading-relaxed pt-4">
                        {item.answer}
                      </p>
                    </div>
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

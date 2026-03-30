"use client";

import { useState } from "react";
import { Container } from "./Container";
import { conditionsContent } from "@/data/landing-content";

export function Conditions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white scroll-mt-24">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-block px-5 py-2 rounded-full border border-card-border bg-bg text-xs font-bold tracking-widest uppercase text-primary-dark mb-6">
              Indicações
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text mb-6">
              Para <span className="text-highlight-dark">quem</span> é
            </h2>
          </div>

          <div className="space-y-4">
            {conditionsContent.categories.map((cat, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`rounded-[2rem] overflow-hidden transition-all duration-500 ease-in-out border ${
                    isOpen
                      ? "bg-primary-dark border-primary-dark text-white shadow-2xl scale-[1.02]"
                      : "bg-white border-card-border text-text hover:border-primary/30"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <div className="flex items-center gap-6">
                      <div
                        className={`p-4 rounded-full ${
                          isOpen
                            ? "bg-white/10 text-white"
                            : "bg-bg text-primary-dark"
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
                          <circle cx="12" cy="12" r="3" />
                          <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                        </svg>
                      </div>
                      <h3
                        className={`text-xl md:text-2xl font-extrabold ${
                          isOpen ? "text-white" : "text-text"
                        }`}
                      >
                        {cat.name}
                      </h3>
                    </div>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-transform duration-300 ${
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
                        ? "max-h-[600px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-8 border-t border-white/10 mt-2">
                      <div className="flex flex-wrap gap-2 py-6">
                        {cat.items.map((item) => (
                          <span
                            key={item}
                            className="text-sm font-medium px-3 py-1.5 rounded-full bg-white/10 text-white"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-10 text-center text-lg text-text/60 italic max-w-xl mx-auto">
            {conditionsContent.closing}
          </p>
        </div>
      </Container>
    </section>
  );
}

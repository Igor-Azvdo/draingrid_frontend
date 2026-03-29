"use client";

import { Container } from "./Container";
import { cannabisContent } from "@/data/landing-content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function WhatIsCannabis() {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-bg-cream">
      <Container>
        <div ref={ref} className="scroll-fade-in">
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-semibold text-center mb-4">
            Entenda
          </p>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-bold text-text text-center mb-8 leading-tight">
            {cannabisContent.title}
          </h2>

          <div className="max-w-3xl mx-auto mb-14">
            <p className="text-text/60 text-base md:text-lg leading-[1.9] text-center mb-4">
              {cannabisContent.intro}
            </p>
            <p className="text-text/60 text-base md:text-lg leading-[1.9] text-center">
              {cannabisContent.body}
            </p>
          </div>

          {/* Info cards with stagger */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14 stagger-children visible">
            {cannabisContent.cards.map((card, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-sm rounded-xl border border-black/[0.04] p-6 hover:border-accent/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <h3 className="text-base font-bold text-text">
                    {card.title}
                  </h3>
                </div>
                <p className="text-text/50 leading-relaxed text-[0.9375rem] pl-4">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Faith note — distinguished treatment */}
          <div className="max-w-3xl mx-auto border-l-2 border-accent/30 pl-6 md:pl-8 py-2">
            <p className="text-text/50 leading-[1.9] italic text-[0.9375rem]">
              {cannabisContent.faithNote}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

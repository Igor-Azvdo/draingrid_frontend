"use client";

import { Container } from "./Container";
import { cannabisContent } from "@/data/landing-content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function WhatIsCannabis() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div ref={ref} className="scroll-fade-in">
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-text text-center mb-6">
            {cannabisContent.title}
          </h2>
          <p className="text-text/80 text-lg leading-[1.8] text-center max-w-3xl mx-auto mb-4">
            {cannabisContent.intro}
          </p>
          <p className="text-text/80 text-lg leading-[1.8] text-center max-w-3xl mx-auto mb-12">
            {cannabisContent.body}
          </p>

          {/* Info cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {cannabisContent.cards.map((card, i) => (
              <div
                key={i}
                className="bg-bg-warm rounded-2xl border border-card-border p-6"
              >
                <h3 className="text-lg font-bold text-hero-dark mb-2">
                  {card.title}
                </h3>
                <p className="text-text/70 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Faith note */}
          <div className="max-w-3xl mx-auto bg-bg-warm border border-primary-light/30 rounded-2xl p-6 md:p-8">
            <p className="text-text/80 leading-[1.8] italic">
              {cannabisContent.faithNote}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

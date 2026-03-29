"use client";

import { Container } from "./Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { finalCtaContent } from "@/data/landing-content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function FinalCTA() {
  const ref = useScrollAnimation();

  return (
    <section className="py-28 md:py-40 bg-hero-dark text-white relative noise-overlay overflow-hidden">
      {/* Atmospheric elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <Container>
        <div ref={ref} className="scroll-fade-in max-w-2xl mx-auto text-center relative z-10">
          <div className="w-12 h-px bg-accent/40 mx-auto mb-12" />

          {finalCtaContent.text.map((line, i) => (
            <p
              key={i}
              className={`mb-6 ${
                i === 0
                  ? "font-display text-2xl md:text-[2.5rem] font-bold leading-[1.2]"
                  : "text-base md:text-lg text-white/40 leading-[1.9]"
              }`}
            >
              {line}
            </p>
          ))}

          <div className="mt-14">
            <WhatsAppButton variant="gold" className="text-lg md:text-xl px-10 py-5">
              {finalCtaContent.cta}
            </WhatsAppButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

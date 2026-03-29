"use client";

import { Container } from "./Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { finalCtaContent } from "@/data/landing-content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function FinalCTA() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-hero-dark to-hero-darker text-white">
      <Container>
        <div ref={ref} className="scroll-fade-in max-w-2xl mx-auto text-center">
          {finalCtaContent.text.map((line, i) => (
            <p
              key={i}
              className={`mb-6 leading-relaxed ${
                i === 0
                  ? "text-2xl md:text-3xl font-extrabold"
                  : "text-lg md:text-xl text-white/80"
              }`}
            >
              {line}
            </p>
          ))}
          <div className="mt-10">
            <WhatsAppButton variant="primary" className="text-xl px-10 py-5">
              {finalCtaContent.cta}
            </WhatsAppButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

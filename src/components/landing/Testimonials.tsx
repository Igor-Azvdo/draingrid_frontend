"use client";

import { Container } from "./Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { testimonialsContent } from "@/data/landing-content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Testimonials() {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-bg-cream">
      <Container>
        <div ref={ref} className="scroll-fade-in">
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-semibold text-center mb-4">
            Resultados reais
          </p>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-bold text-text text-center mb-16 leading-tight">
            {testimonialsContent.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonialsContent.items.map((item, i) => (
              <div
                key={i}
                className="relative bg-white/80 backdrop-blur-sm rounded-xl border border-black/[0.04] p-7 md:p-8 flex flex-col hover:border-accent/15 transition-all duration-300"
              >
                {/* Decorative quote */}
                <span className="font-display text-6xl text-accent/15 leading-none absolute -top-1 left-5">
                  &ldquo;
                </span>

                <h3 className="font-display text-lg font-bold text-text mt-6 mb-4 leading-snug">
                  {item.headline}
                </h3>
                <p className="text-text/50 leading-[1.8] text-[0.9375rem] flex-1">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-text/30 tracking-wide">
            {testimonialsContent.disclaimer}
          </p>

          <div className="mt-12 text-center">
            <WhatsAppButton variant="primary">
              Agendar minha consulta
            </WhatsAppButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

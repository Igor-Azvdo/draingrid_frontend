"use client";

import { Container } from "./Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { testimonialsContent } from "@/data/landing-content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Testimonials() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div ref={ref} className="scroll-fade-in">
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-text text-center mb-12">
            {testimonialsContent.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsContent.items.map((item, i) => (
              <div
                key={i}
                className="bg-bg-warm rounded-2xl border border-card-border p-6 md:p-8 flex flex-col"
              >
                <span className="text-5xl text-primary/30 font-serif leading-none mb-2">
                  &ldquo;
                </span>
                <h3 className="text-lg font-bold text-accent mb-3">
                  {item.headline}
                </h3>
                <p className="text-text/70 leading-relaxed flex-1">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-text/40 italic">
            {testimonialsContent.disclaimer}
          </p>
          <div className="mt-10 text-center">
            <WhatsAppButton variant="primary">
              Agendar minha consulta
            </WhatsAppButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

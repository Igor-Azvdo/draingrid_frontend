"use client";

import { Container } from "./Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { plansContent } from "@/data/landing-content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Plans() {
  const ref = useScrollAnimation();

  return (
    <section id="planos" className="py-24 md:py-32 bg-bg-cream">
      <Container>
        <div ref={ref} className="scroll-fade-in">
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-semibold text-center mb-4">
            Acompanhamento
          </p>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-bold text-text text-center mb-2 leading-tight">
            {plansContent.title}
          </h2>
          <p className="text-text/40 text-center text-sm mb-16">
            {plansContent.subtitle}
          </p>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
            {plansContent.plans.map((plan) => (
              <div
                key={plan.name}
                className={`shrink-0 w-[260px] md:w-auto snap-center flex flex-col rounded-xl border p-6 md:p-7 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-white border-accent/30 shadow-[0_8px_40px_rgba(201,169,110,0.12)] relative"
                    : "bg-white/80 border-black/[0.04] hover:border-accent/15"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-hero-dark text-[0.65rem] font-bold uppercase tracking-[0.1em] px-3 py-1 rounded-full">
                    Recomendado
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-text mb-1">
                  {plan.name}
                </h3>
                <p className="text-accent font-bold text-base mb-5">
                  {plan.duration}
                </p>
                <p className="text-text/40 text-sm mb-4 leading-relaxed">
                  {plan.audience}
                </p>
                <div className="mt-auto pt-4 border-t border-black/[0.04]">
                  <p className="text-text/60 text-sm font-medium">
                    {plan.includes}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-text/40 italic text-sm mb-8">
              {plansContent.closing}
            </p>
            <WhatsAppButton variant="primary">
              Agendar minha consulta
            </WhatsAppButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

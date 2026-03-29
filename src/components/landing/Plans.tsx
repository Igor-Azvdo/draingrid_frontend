"use client";

import { Container } from "./Container";
import { plansContent } from "@/data/landing-content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Plans() {
  const ref = useScrollAnimation();

  return (
    <section id="planos" className="py-20 md:py-28 bg-bg-sage">
      <Container>
        <div ref={ref} className="scroll-fade-in">
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-text text-center mb-2">
            {plansContent.title}
          </h2>
          <p className="text-text/60 text-center italic mb-12">
            {plansContent.subtitle}
          </p>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
            {plansContent.plans.map((plan) => (
              <div
                key={plan.name}
                className={`shrink-0 w-[280px] md:w-auto snap-center flex flex-col rounded-2xl border p-6 md:p-8 ${
                  plan.highlighted
                    ? "bg-white border-accent shadow-lg ring-2 ring-accent/20 relative"
                    : "bg-white border-card-border"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    Recomendado
                  </span>
                )}
                <h3 className="text-xl font-extrabold text-hero-dark mb-1">
                  {plan.name}
                </h3>
                <p className="text-accent font-bold text-lg mb-4">
                  {plan.duration}
                </p>
                <p className="text-text/60 text-sm mb-3">
                  {plan.audience}
                </p>
                <p className="text-text/80 text-sm font-medium mt-auto pt-4 border-t border-card-border">
                  {plan.includes}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-lg text-text/70 italic">
            {plansContent.closing}
          </p>
        </div>
      </Container>
    </section>
  );
}

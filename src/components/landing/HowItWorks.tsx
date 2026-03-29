"use client";

import { Container } from "./Container";
import { stepsContent } from "@/data/landing-content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function HowItWorks() {
  const ref = useScrollAnimation();

  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-bg-cream">
      <Container>
        <div ref={ref} className="scroll-fade-in">
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-semibold text-center mb-4">
            Protocolo
          </p>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-bold text-text text-center mb-20 leading-tight">
            {stepsContent.title}
          </h2>

          {/* Steps — clean numbered list */}
          <div className="max-w-3xl mx-auto">
            {stepsContent.steps.map((step, i) => (
              <div
                key={step.number}
                className={`flex items-start gap-8 md:gap-12 ${i < stepsContent.steps.length - 1 ? "mb-12 pb-12 border-b border-black/[0.04]" : ""}`}
              >
                {/* Number */}
                <span className="font-display text-5xl md:text-6xl font-bold text-accent/30 leading-none shrink-0 -mt-1">
                  {String(step.number).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text/50 leading-[1.8] text-[0.9375rem]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

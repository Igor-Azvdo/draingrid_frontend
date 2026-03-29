"use client";

import { Container } from "./Container";
import { stepsContent } from "@/data/landing-content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function HowItWorks() {
  const ref = useScrollAnimation();

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-bg-warm">
      <Container>
        <div ref={ref} className="scroll-fade-in">
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-text text-center mb-16">
            {stepsContent.title}
          </h2>
          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-light/40 -translate-x-1/2" />

            {stepsContent.steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 md:gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Number circle */}
                <div className="shrink-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-extrabold text-lg z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                  {step.number}
                </div>

                {/* Content */}
                <div
                  className={`flex-1 ml-4 md:ml-0 bg-white rounded-2xl border border-card-border p-6 shadow-sm md:w-[calc(50%-3rem)] ${
                    i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                  }`}
                >
                  <h3 className="text-lg font-bold text-hero-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text/70 leading-relaxed">
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

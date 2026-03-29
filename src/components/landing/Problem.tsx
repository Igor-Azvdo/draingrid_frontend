"use client";

import { Container } from "./Container";
import { problemContent } from "@/data/landing-content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Problem() {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-surface-dark text-white relative noise-overlay overflow-hidden">
      {/* Atmospheric glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <div ref={ref} className="scroll-fade-in max-w-[720px] mx-auto text-center relative z-10">
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-semibold mb-6">
            O problema
          </p>
          <h2 className="font-display text-2xl md:text-[2.25rem] font-medium text-white/70 leading-snug mb-6">
            {problemContent.title}
          </h2>

          {/* The punch line */}
          <p className="font-display text-4xl md:text-[3.25rem] font-bold text-white mb-10 leading-[1.1]">
            {problemContent.highlight}
          </p>

          <div className="w-12 h-px bg-accent/40 mx-auto mb-10" />

          {problemContent.body.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-white/50 text-base md:text-lg leading-[1.9] mb-5 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}

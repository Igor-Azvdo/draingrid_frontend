"use client";

import { Container } from "./Container";
import { painPoints } from "@/data/landing-content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const iconMap: Record<string, React.ReactNode> = {
  moon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  ),
  jaw: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 00-7 17l3-3" />
      <path d="M12 2a10 10 0 017 17l-3-3" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  pill: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m10.5 1.5 3 3-9 9-3-3z" />
      <path d="m13.5 10.5 3 3-9 9-3-3z" />
    </svg>
  ),
  repeat: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 1l4 4-4 4" />
      <path d="M3 11V9a4 4 0 014-4h14" />
      <path d="M7 23l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 01-4 4H3" />
    </svg>
  ),
  search: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),
  stack: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
};

export function PainPoints() {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-bg-cream relative">
      <Container>
        <div ref={ref} className="scroll-fade-in">
          {/* Section label */}
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-semibold text-center mb-4">
            Identifique-se
          </p>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-bold text-text text-center mb-16 leading-tight">
            {painPoints.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 stagger-children visible">
            {painPoints.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl border border-black/[0.04] p-5 hover:border-accent/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300"
              >
                <span className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
                  {iconMap[item.icon]}
                </span>
                <span className="text-text/80 font-medium text-[0.9375rem] leading-snug">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <div className="mt-16 text-center">
            <div className="w-12 h-px bg-accent/40 mx-auto mb-8" />
            <p className="font-display text-xl md:text-2xl font-medium italic text-text/90 max-w-xl mx-auto leading-relaxed">
              {painPoints.closing}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

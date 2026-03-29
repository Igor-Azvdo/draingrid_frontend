"use client";

import { Container } from "./Container";
import { painPoints } from "@/data/landing-content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const iconMap: Record<string, React.ReactNode> = {
  moon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  ),
  jaw: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 00-7 17l3-3" />
      <path d="M12 2a10 10 0 017 17l-3-3" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  pill: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m10.5 1.5 3 3-9 9-3-3z" />
      <path d="m13.5 10.5 3 3-9 9-3-3z" />
    </svg>
  ),
  repeat: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 1l4 4-4 4" />
      <path d="M3 11V9a4 4 0 014-4h14" />
      <path d="M7 23l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 01-4 4H3" />
    </svg>
  ),
  search: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),
  stack: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
};

export function PainPoints() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-bg-warm">
      <Container>
        <div ref={ref} className="scroll-fade-in">
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-text text-center mb-12">
            {painPoints.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {painPoints.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white rounded-2xl border border-card-border p-5 shadow-sm"
              >
                <span className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary-dark">
                  {iconMap[item.icon]}
                </span>
                <span className="text-text font-medium">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-xl md:text-2xl font-semibold italic text-hero-dark max-w-2xl mx-auto leading-relaxed">
            {painPoints.closing}
          </p>
        </div>
      </Container>
    </section>
  );
}

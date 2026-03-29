"use client";

import { Container } from "./Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { aboutContent } from "@/data/landing-content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function About() {
  const ref = useScrollAnimation();

  return (
    <section id="sobre" className="py-24 md:py-36 bg-hero-dark text-white relative noise-overlay overflow-hidden">
      {/* Atmospheric elements */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <Container>
        <div ref={ref} className="scroll-fade-in relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-14 md:gap-20">
            {/* Photo placeholder — elegant frame */}
            <div className="shrink-0 relative">
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl bg-glass-light border border-glass-border flex items-center justify-center overflow-hidden">
                <span className="text-white/20 text-sm font-medium tracking-wide uppercase">Foto da Dra. Ingrid</span>
              </div>
              {/* Decorative corner accent */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-accent/30 rounded-br-2xl" />
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-semibold mb-4">
                A prescritora
              </p>
              <h2 className="font-display text-3xl md:text-[2.75rem] font-bold mb-10 leading-tight">
                {aboutContent.title}
              </h2>

              {aboutContent.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`leading-[1.9] mb-5 ${
                    i === 0
                      ? "font-display text-xl md:text-2xl font-medium italic text-accent-light/80"
                      : "text-white/50 text-base"
                  }`}
                >
                  {p}
                </p>
              ))}

              <div className="w-12 h-px bg-accent/30 mx-auto md:mx-0 my-8" />

              <p className="text-white/30 text-sm mb-6 tracking-wide">
                {aboutContent.credentials}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
                {aboutContent.badges.map((badge) => (
                  <span
                    key={badge}
                    className="text-xs font-semibold text-accent/80 uppercase tracking-[0.1em] border border-accent/20 px-4 py-2 rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <WhatsAppButton variant="outline">
                Agendar minha consulta
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

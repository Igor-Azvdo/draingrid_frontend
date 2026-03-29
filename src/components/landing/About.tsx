"use client";

import { Container } from "./Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { aboutContent } from "@/data/landing-content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function About() {
  const ref = useScrollAnimation();

  return (
    <section id="sobre" className="py-20 md:py-28 bg-hero-dark text-white">
      <Container>
        <div ref={ref} className="scroll-fade-in flex flex-col md:flex-row items-center gap-12">
          {/* Photo placeholder */}
          <div className="shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-white/10 border border-white/10 flex items-center justify-center">
            <span className="text-white/30 text-sm font-medium">Foto da Dra. Ingrid</span>
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold mb-8">
              {aboutContent.title}
            </h2>
            {aboutContent.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-white/80 text-lg leading-[1.8] mb-4 ${
                  i === 0 ? "font-semibold italic text-primary-light text-xl" : ""
                }`}
              >
                {p}
              </p>
            ))}
            <p className="text-white/50 text-sm mt-6 mb-6 italic">
              {aboutContent.credentials}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
              {aboutContent.badges.map((badge) => (
                <span
                  key={badge}
                  className="text-sm font-semibold text-accent border border-accent/40 px-4 py-1.5 rounded-full"
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
      </Container>
    </section>
  );
}

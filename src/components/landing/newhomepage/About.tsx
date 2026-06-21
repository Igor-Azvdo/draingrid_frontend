"use client";

import Image from "next/image";
import { Container } from "../Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { aboutContent } from "@/data/landing-content-newhomepage";

export function About() {
  return (
    <section
      id="sobre"
      data-track-section="sobre"
      className="py-16 mt-16 bg-section-green-soft md:rounded-[4rem] mx-0 md:mx-6 mb-6 scroll-mt-24"
    >
      <Container>
        <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-16">
          {/* Photo */}
          <div className="w-full md:w-5/12 md:sticky md:top-28">
            <div className="relative">
              {/* accent blob behind */}
              <div className="absolute -inset-3 -z-0 rounded-[2.75rem] bg-primary/15 blur-2xl" aria-hidden />
              <div className="relative z-10 rounded-[2.25rem] overflow-hidden shadow-2xl ring-1 ring-white/60 border-4 border-white">
                <Image
                  src="/dra-ingrid.jpg"
                  alt="Dra. Ingrid Azevedo"
                  width={500}
                  height={620}
                  className="w-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                {/* gradient + credential chip */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/45 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-dark/10 shrink-0">
                    <svg className="w-5 h-5 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="font-extrabold text-base text-text leading-none">Dra. Ingrid Azevedo</p>
                    <p className="text-[10px] text-text/50 uppercase font-bold tracking-[0.2em] mt-1">
                      CRO PB 11599 · Prescritora Canábica
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-7/12 space-y-7 md:pt-2">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary-dark/40" />
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary-dark">
                Sobre mim
              </span>
            </div>
            <h2 className="text-4xl md:text-[3.2rem] font-extrabold text-text leading-[1.05]">
              {aboutContent.title}
            </h2>
            <div className="text-text/65 text-base md:text-lg font-light leading-relaxed space-y-4">
              {aboutContent.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "font-semibold not-italic text-primary-dark text-xl md:text-2xl leading-snug border-l-4 border-primary/40 pl-5"
                      : ""
                  }
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5 pt-1">
              {aboutContent.badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-card-border shadow-sm"
                >
                  <svg className="w-4 h-4 text-primary-dark shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-bold text-text text-sm tracking-tight">{badge}</span>
                </span>
              ))}
            </div>

            <div className="pt-2">
              <WhatsAppButton variant="green" size="lg" trackClick="cta-sobre">
                Fale comigo e tire suas dúvidas
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

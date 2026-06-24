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
        {/* Body: small photo + expanded copy */}
        <div className="flex flex-col md:flex-row items-start gap-10 lg:gap-14">
          {/* Photo — smaller, floats alongside text */}
          <div className="w-full max-w-[360px] mx-auto md:mx-0 md:w-[360px] shrink-0 md:sticky md:top-28">
            <div className="relative">
              <div className="absolute -inset-2.5 -z-0 rounded-[2rem] bg-primary/15 blur-2xl" aria-hidden />
              <div className="relative z-10 rounded-[1.75rem] overflow-hidden shadow-xl ring-1 ring-white/60 border-4 border-white">
                <Image
                  src="/dra-ingrid.jpg"
                  alt="Dra. Ingrid Azevedo, dentista e prescritora canábica"
                  width={320}
                  height={400}
                  className="w-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 space-y-5">
            {/* Title + role — directly above the copy */}
            <div>
              <h2 className="text-4xl md:text-[3.4rem] font-extrabold text-text leading-[1.03]">
                {aboutContent.title}
              </h2>
              <p className="mt-3 text-primary-dark font-semibold text-sm md:text-base tracking-wide">
                {aboutContent.role}
              </p>
            </div>

            <div className="text-text/65 text-base md:text-lg font-light leading-relaxed space-y-4">
              {aboutContent.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "font-semibold text-primary-dark text-xl md:text-2xl leading-snug border-l-4 border-primary/40 pl-5"
                      : ""
                  }
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Credentials chips — after the text */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-1">
              {aboutContent.badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full border border-card-border shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 text-primary-dark shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-bold text-text text-xs tracking-tight">{badge}</span>
                </span>
              ))}
            </div>

            <div className="pt-3">
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

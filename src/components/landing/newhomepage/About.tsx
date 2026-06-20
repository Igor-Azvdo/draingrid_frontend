"use client";

import Image from "next/image";
import { Container } from "../Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { aboutContent } from "@/data/landing-content-newhomepage";

export function About() {
  return (
    <section
      id="sobre"
      className="py-16 mt-16 bg-section-green-soft md:rounded-[4rem] mx-0 md:mx-6 mb-6 scroll-mt-24"
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-11">
          {/* Photo */}
          <div className="w-full md:w-5/12">
            <div className="rounded-[2rem] overflow-hidden shadow-xl relative border-4 border-white md:max-h-[650px]">
              <Image
                src="/dra-ingrid.jpg"
                alt="Dra. Ingrid Azevedo"
                width={400}
                height={500}
                className="w-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg max-w-[180px]">
                <p className="font-extrabold text-base text-text">Dra. Ingrid</p>
                <p className="text-[10px] text-text/50 uppercase font-bold tracking-[0.2em] mt-0.5">
                  Prescritora Canábica
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-7/12 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-card-border bg-white text-[10px] font-bold tracking-[0.2em] uppercase text-primary-dark">
              Sobre mim
            </div>
            <h2 className="text-4xl md:text-[3.2rem] font-extrabold text-text leading-tight">
              {aboutContent.title}
            </h2>
            <div className="text-text/60 text-base font-light leading-relaxed space-y-3">
              {aboutContent.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "font-semibold italic text-primary-dark text-lg"
                      : ""
                  }
                >
                  {p}
                </p>
              ))}
            </div>
            <p className="text-text/40 text-xs italic">
              {aboutContent.credentials}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {aboutContent.badges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center p-4 bg-white rounded-2xl border border-card-border shadow-sm transition-transform hover:-translate-y-1"
                >
                  <div className="w-2.5 h-2.5 bg-primary-dark rounded-full mr-4" />
                  <span className="font-bold text-text text-sm tracking-tight">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
            <WhatsAppButton variant="green">
              Agendar minha consulta
            </WhatsAppButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

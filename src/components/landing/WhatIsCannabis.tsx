import Image from "next/image";
import { Container } from "./Container";
import { cannabisContent } from "@/data/landing-content";

export function WhatIsCannabis() {
  return (
    <section className="py-24 bg-white scroll-mt-24">
      <Container>
        <div className="flex flex-col md:flex-row items-stretch gap-16">
          {/* Image */}
          <div className="w-full md:w-5/12">
            <div className="h-full rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white">
              <Image
                src="/hero.jpg"
                alt="Cannabis Medicinal"
                width={600}
                height={700}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-7/12 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-card-border bg-bg text-[10px] font-bold tracking-[0.2em] uppercase text-primary-dark">
              Cannabis Medicinal
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text leading-tight">
              O que é{" "}
              <span className="text-highlight-dark italic font-light">
                de verdade
              </span>
            </h2>
            <div className="text-text/60 text-base font-light leading-relaxed space-y-4">
              <p>{cannabisContent.intro}</p>
              <p>{cannabisContent.body}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {cannabisContent.cards.map((card, i) => (
                <div
                  key={i}
                  className="flex items-center p-5 bg-bg rounded-2xl border border-card-border shadow-sm transition-transform hover:-translate-y-1"
                >
                  <div className="w-2.5 h-2.5 bg-primary-dark rounded-full mr-4 shrink-0" />
                  <div>
                    <h3 className="font-bold text-text text-sm">
                      {card.title}
                    </h3>
                    <p className="text-text/50 text-sm">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

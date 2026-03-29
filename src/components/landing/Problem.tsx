"use client";

import { Container } from "./Container";
import { problemContent } from "@/data/landing-content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Problem() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-bg-sage">
      <Container>
        <div ref={ref} className="scroll-fade-in max-w-[680px] mx-auto text-center">
          <h2 className="text-2xl md:text-[2.25rem] font-extrabold text-text leading-snug mb-4">
            {problemContent.title}
          </h2>
          <p className="text-3xl md:text-[2.75rem] font-extrabold text-hero-dark mb-8">
            {problemContent.highlight}
          </p>
          {problemContent.body.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-text/80 text-lg leading-[1.8] mb-4 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}

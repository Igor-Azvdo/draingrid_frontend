import Image from "next/image";
import { Container } from "../Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { problemContent } from "@/data/landing-content-newhomepage";

const cardContent = (
  <>
    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-[10px] font-bold tracking-widest uppercase mb-5">
      ainda há esperança
    </div>
    <h2 className="text-3xl md:text-4xl font-extrabold text-text leading-tight mb-4">
      {problemContent.title}{" "}
      <span className="text-primary-dark">{problemContent.highlight}</span>
    </h2>
    <p className="text-text/55 text-base leading-relaxed mb-7 whitespace-pre-line">
      {problemContent.body}
    </p>
    <WhatsAppButton variant="green" trackClick="cta-problema">
      Quero encontrar a minha dose
    </WhatsAppButton>
  </>
);

export function Problem() {
  return (
    <section data-track-section="problema" className="py-16 scroll-mt-24">
      <Container>

        {/* Mobile: image on top, card below */}
        <div className="md:hidden rounded-[2.5rem] overflow-hidden">
          <div className="relative h-[280px] w-full">
            <Image
              src="/problem-hero.jpg"
              alt="Cannabis medicinal — Dra. Ingrid Azevedo"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="bg-white p-8">
            {cardContent}
          </div>
        </div>

        {/* Desktop: side-by-side with overlapping card */}
        <div className="hidden md:block relative rounded-[3rem] overflow-hidden min-h-[540px]">
          <div className="absolute inset-0 flex">
            <div className="w-[52%] relative">
              <Image
                src="/problem-hero.jpg"
                alt="Cannabis medicinal — Dra. Ingrid Azevedo"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="flex-1 bg-primary-dark" />
          </div>
          <div className="relative z-10 flex items-center min-h-[540px] justify-end pr-8 md:pr-12">
            <div className="bg-white rounded-[2rem] p-8 md:p-10 w-[52%]">
              {cardContent}
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}

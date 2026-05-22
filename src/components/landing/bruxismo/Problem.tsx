import Image from "next/image";
import { Container } from "../Container";
import { WhatsAppButton } from "./WhatsAppButton";

const cardContent = (
  <>
    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-[10px] font-bold tracking-widest uppercase mb-5">
      ainda há esperança
    </div>
    <h2 className="text-3xl md:text-4xl font-extrabold text-text leading-tight mb-4">
      Vamos tratar a origem,{" "}
      <span className="text-primary-dark">não o sintoma.</span>
    </h2>
    <p className="text-text/55 text-base leading-relaxed mb-7">
      A placa protege o esmalte. Mas o bruxismo vem do sistema nervoso — e a cannabis medicinal é o tratamento que chega lá. Regulamentada pela ANVISA. Prescrita por dentista. Entregue em casa.
    </p>
    <WhatsAppButton variant="green">
      Quero entender meu tratamento
    </WhatsAppButton>
  </>
);

export function Problem() {
  return (
    <section className="py-16 scroll-mt-24">
      <Container>

        {/* Mobile: image on top, card below */}
        <div className="md:hidden rounded-[2.5rem] overflow-hidden">
          <div className="relative h-[280px] w-full">
            <Image
              src="/problem-hero.jpg"
              alt="Tratamento para bruxismo com cannabis medicinal"
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
                alt="Tratamento para bruxismo com cannabis medicinal"
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

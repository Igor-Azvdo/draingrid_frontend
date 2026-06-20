import { Container } from "../Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { testimonialsContent } from "@/data/landing-content-bruxismo";

export function Testimonials() {
  return (
    <section data-track-section="depoimentos" className="py-24 bg-white scroll-mt-24 overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <div className="inline-block px-4 py-1.5 rounded-full border border-card-border bg-bg text-[10px] font-bold tracking-[0.2em] uppercase text-primary-dark">
            Resultados reais
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text leading-tight">
            O que <span className="text-highlight">muda</span> na vida de quem{" "}
            <br className="hidden md:block" />
            <span className="italic font-light text-text/40">
              passa pelo protocolo
            </span>
          </h2>
        </div>
      </Container>

      {/* Cards com overflow além do container */}
      <div className="px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonialsContent.items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-card-border flex flex-col"
            >
              <span className="text-5xl text-primary/20 leading-none mb-4">
                &ldquo;
              </span>
              <p className="font-bold text-text text-xl mb-4 leading-snug">
                {item.headline}
              </p>
              <p className="text-text/50 text-base leading-relaxed flex-1 mb-8">
                {item.body}
              </p>
              <div className="flex gap-1 pt-4 border-t border-card-border">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-primary-dark text-sm">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Container>
        <p className="mt-8 text-center text-sm text-text/30 italic">
          {testimonialsContent.disclaimer}
        </p>

        <div className="mt-10 text-center">
          <WhatsAppButton variant="green" trackClick="cta-depoimentos">
            Agendar minha consulta
          </WhatsAppButton>
        </div>
      </Container>
    </section>
  );
}

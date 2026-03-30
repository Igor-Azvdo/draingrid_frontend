import { Container } from "./Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { testimonialsContent } from "@/data/landing-content";

export function Testimonials() {
  return (
    <section className="py-24 bg-white scroll-mt-24">
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

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsContent.items.map((item, i) => (
            <div
              key={i}
              className="bg-bg p-12 rounded-[3rem] hover:bg-section-green-soft transition-all duration-500 group cursor-default hover:shadow-xl"
            >
              <div className="mb-8">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-primary-dark text-xs">
                      ★
                    </span>
                  ))}
                </div>
                <p className="font-bold text-text text-lg mb-1">
                  {item.headline}
                </p>
              </div>
              <p className="text-text/50 text-lg leading-relaxed italic">
                &ldquo;{item.body}&rdquo;
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-text/30 italic">
          {testimonialsContent.disclaimer}
        </p>

        <div className="mt-10 text-center">
          <WhatsAppButton variant="green">
            Agendar minha consulta
          </WhatsAppButton>
        </div>
      </Container>
    </section>
  );
}

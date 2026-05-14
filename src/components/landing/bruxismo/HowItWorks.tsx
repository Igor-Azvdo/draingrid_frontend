import { Container } from "../Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { stepsContent } from "@/data/landing-content-bruxismo";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="pt-16 pb-24 bg-white scroll-mt-24">
      <Container>
        {/* Header: texto à esquerda, botão à direita */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">
          <div>
            <div className="inline-block px-5 py-2 rounded-full border border-card-border bg-bg text-xs font-bold tracking-widest uppercase text-primary-dark mb-6">
              Passo a passo
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text mb-4">
              Como <span className="text-highlight">funciona</span>
            </h2>
            <p className="text-text/50 text-lg max-w-xl">
              Do primeiro contato ao resultado — cada etapa pensada para você.
            </p>
          </div>
          <div className="shrink-0">
            <WhatsAppButton variant="green">
              Agendar minha consulta
            </WhatsAppButton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stepsContent.steps.map((step) => (
            <div
              key={step.number}
              className="group relative bg-bg rounded-[2rem] p-8 text-center transition-all duration-500 hover:bg-primary-dark hover:text-white hover:shadow-2xl hover:scale-[1.02]"
            >
              <div className="absolute top-4 right-6 text-[80px] font-extrabold text-primary/5 leading-none group-hover:text-white/10 transition-colors">
                {step.number}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white border border-card-border flex items-center justify-center text-primary-dark font-extrabold text-lg mx-auto mb-5 group-hover:bg-white/20 group-hover:border-white/20 group-hover:text-white transition-all">
                  {step.number}
                </div>
                <h3 className="text-base font-bold mb-2">{step.title}</h3>
                <p className="text-text/50 leading-relaxed text-sm group-hover:text-white/70 transition-colors">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

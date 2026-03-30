import { Container } from "./Container";
import { plansContent } from "@/data/landing-content";

export function Plans() {
  return (
    <section
      id="planos"
      className="py-24 bg-section-green-soft md:rounded-[4rem] mx-0 md:mx-6 scroll-mt-24"
    >
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-5 py-2 rounded-full border border-card-border bg-white text-xs font-bold tracking-widest uppercase text-primary-dark mb-6">
            Planos
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text mb-2">
            Os <span className="text-highlight">Planos</span>
          </h2>
          <p className="text-text/50 italic text-lg">
            {plansContent.subtitle}
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {plansContent.plans.map((plan) => (
            <div
              key={plan.name}
              className={`shrink-0 w-[280px] md:w-auto snap-center flex flex-col rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 ${
                plan.highlighted
                  ? "bg-primary-dark text-white shadow-2xl scale-[1.02] relative"
                  : "bg-white border border-card-border hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Recomendado
                </span>
              )}
              <h3
                className={`text-xl font-extrabold mb-1 ${
                  plan.highlighted ? "text-white" : "text-text"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`font-bold text-lg mb-4 ${
                  plan.highlighted ? "text-primary-light" : "text-primary-dark"
                }`}
              >
                {plan.duration}
              </p>
              <p
                className={`text-sm mb-3 ${
                  plan.highlighted ? "text-white/60" : "text-text/50"
                }`}
              >
                {plan.audience}
              </p>
              <p
                className={`text-sm font-medium mt-auto pt-4 border-t ${
                  plan.highlighted
                    ? "border-white/10 text-white/80"
                    : "border-card-border text-text/70"
                }`}
              >
                {plan.includes}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-lg text-text/50 italic">
          {plansContent.closing}
        </p>
      </Container>
    </section>
  );
}

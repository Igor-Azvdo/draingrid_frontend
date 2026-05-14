import { Container } from "../Container";
import { painPoints } from "@/data/landing-content-bruxismo";

export function PainPoints() {
  return (
    <section className="py-24 bg-white scroll-mt-24">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-text leading-tight">
            Você se <span className="text-highlight-dark">reconhece</span> aqui?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.items.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-[2rem] overflow-hidden h-[220px] shadow-sm border border-card-border transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Background image */}
              <img
                src={item.image}
                alt={item.text}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-base leading-snug">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-xl md:text-2xl font-semibold text-text max-w-2xl mx-auto leading-relaxed">
          {painPoints.closing}
        </p>
      </Container>
    </section>
  );
}

import { Container } from "../Container";
import { painPoints } from "@/data/landing-content-newhomepage";

export function PainPoints() {
  return (
    <section data-track-section="dores" className="bg-white scroll-mt-24">
      <Container className="py-20">
        <div className="flex flex-col md:flex-row items-stretch gap-10 lg:gap-16">

          {/* Left — image */}
          <div className="w-full md:w-4/12 flex flex-col md:py-8">
            <div className="rounded-[2rem] overflow-hidden flex-1 min-h-[220px]">
              <img
                src="/painpoints-hero.jpg"
                alt="Paciente com bruxismo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right — content */}
          <div className="w-full md:w-7/12 flex flex-col justify-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-text leading-tight">
              Você se <span className="text-primary">reconhece</span> aqui?
            </h2>

            <ul className="divide-y divide-text/10">
              {painPoints.items.map((item, i) => (
                <li key={i} className="flex items-center gap-4 py-3.5">
                  <span className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span className="text-text text-base md:text-lg font-semibold leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-text/60 text-lg md:text-xl leading-relaxed border-l-2 border-primary/40 pl-5 italic font-light">
              {painPoints.closing}
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}

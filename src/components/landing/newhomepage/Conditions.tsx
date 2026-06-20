import { Container } from "../Container";
import { conditionsContent } from "@/data/landing-content-newhomepage";

export function Conditions() {
  return (
    <section id="indicacoes" className="py-24 bg-white scroll-mt-24">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-block px-5 py-2 rounded-full border border-card-border bg-bg text-xs font-bold tracking-widest uppercase text-primary-dark mb-6">
              Indicações
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text mb-6">
              Para <span className="text-highlight-dark">quem</span> é
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditionsContent.categories.map((cat, i) => (
              <div
                key={i}
                className="rounded-[2rem] border border-card-border bg-bg p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-primary-dark/10 text-primary-dark">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-extrabold text-text">
                    {cat.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm font-medium px-3 py-1.5 rounded-full bg-white border border-card-border text-text/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-lg text-text/60 italic max-w-xl mx-auto">
            {conditionsContent.closing}
          </p>
        </div>
      </Container>
    </section>
  );
}

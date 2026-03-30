import { Container } from "./Container";
import { problemContent } from "@/data/landing-content";

export function Problem() {
  return (
    <section className="py-24 bg-section-green-soft md:rounded-[4rem] mx-0 md:mx-6 mb-6 scroll-mt-24">
      <Container>
        <div className="max-w-[720px] mx-auto text-center">
          <div className="inline-block px-5 py-2 rounded-full border border-card-border bg-white text-xs font-bold tracking-widest uppercase text-primary-dark mb-6">
            Tratamento Individualizado
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-text/70 leading-snug mb-4">
            {problemContent.title}{" "}
            <span className="hidden md:inline text-4xl md:text-6xl font-extrabold text-text">
              Mas você <span className="text-highlight">não é uma bula.</span>
            </span>
          </h2>
          <p className="text-4xl font-extrabold text-text mb-10 md:hidden">
            Mas você <span className="text-highlight">não é uma bula.</span>
          </p>
          {problemContent.body.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-text/60 text-lg leading-[1.8] mb-4 last:mb-0 font-light"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}

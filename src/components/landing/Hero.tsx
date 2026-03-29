import { Container } from "./Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { heroContent } from "@/data/landing-content";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-overlay">
      {/* Background images — mobile vs desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('/hero-mobile.jpg')" }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/hero-desktop.jpg')" }}
      />

      {/* Dark overlay with atmosphere */}
      <div className="absolute inset-0 bg-hero-dark/85 md:bg-transparent">
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-hero-dark/95 via-hero-dark/75 to-hero-dark/30" />
      </div>

      {/* Decorative gradient glow */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-hero-dark to-transparent z-[2]" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <Container className="relative z-10 pt-28 pb-20 md:pt-36 md:pb-32">
        <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          {/* Eyebrow */}
          <p className="text-accent uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-6 animate-fade-up">
            Prescritora Canabica &middot; ANVISA
          </p>

          <h1 className="font-display text-[2.25rem] leading-[1.15] md:text-[3.75rem] md:leading-[1.1] font-bold text-white mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
            {heroContent.title}
          </h1>

          <p className="text-white/60 text-base md:text-lg leading-[1.9] mb-10 max-w-xl animate-fade-up" style={{ animationDelay: "200ms" }}>
            {heroContent.description}
          </p>

          <div className="animate-fade-up" style={{ animationDelay: "300ms" }}>
            <WhatsAppButton variant="gold" className="mb-8">
              {heroContent.cta}
            </WhatsAppButton>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 animate-fade-up" style={{ animationDelay: "400ms" }}>
            {heroContent.badges.map((badge, i) => (
              <span
                key={badge}
                className="text-[0.75rem] font-medium text-white/40 uppercase tracking-[0.1em] border-b border-white/10 pb-0.5"
              >
                {badge}
                {i < heroContent.badges.length - 1 && (
                  <span className="ml-3 text-accent/40">&middot;</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "./Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { heroContent } from "@/data/landing-content";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background images — mobile vs desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('/hero-mobile.jpg')" }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/hero-desktop.jpg')" }}
      />

      {/* Overlay — uniform on mobile, lateral gradient on desktop */}
      <div className="absolute inset-0 bg-hero-dark/80 md:bg-transparent">
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-hero-dark/90 via-hero-dark/60 to-transparent" />
      </div>

      {/* Content */}
      <Container className="relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-[2.5rem] leading-tight md:text-[3.5rem] md:leading-tight font-extrabold text-white mb-6">
            {heroContent.title}
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
            {heroContent.description}
          </p>
          <WhatsAppButton variant="primary" className="mb-6">
            {heroContent.cta}
          </WhatsAppButton>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
            {heroContent.badges.map((badge) => (
              <span
                key={badge}
                className="text-sm font-semibold text-white/70 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

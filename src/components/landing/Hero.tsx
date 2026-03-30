import Image from "next/image";
import { Container } from "./Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { heroContent } from "@/data/landing-content";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background images — mobile vs desktop */}
      <div
        className="absolute inset-0 bg-cover md:hidden"
        style={{
          backgroundImage: "url('/herobglpmobile.jpg')",
          backgroundPosition: "center top",
        }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/herobglp.jpg')" }}
      />

      {/* Content */}
      <Container className="relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left space-y-6">
          <Image
            src="/logo.svg"
            alt="Dra. Ingrid Azevedo"
            width={160}
            height={90}
            className="mx-auto md:mx-0 mb-4"
            unoptimized
          />

          <div className="inline-flex items-center px-4 py-2 rounded-full border border-text/15 bg-white/60 backdrop-blur-sm text-[10px] font-bold tracking-[0.2em] uppercase text-text">
            Prescritora Canábica ANVISA
          </div>

          <h1 className="text-4xl sm:text-5xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight text-text">
            {heroContent.title}
          </h1>

          <p className="text-lg text-text/60 font-light leading-relaxed max-w-xl">
            {heroContent.description}
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <WhatsAppButton variant="green">
              {heroContent.cta}
            </WhatsAppButton>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 pt-2">
            {heroContent.badges.map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-2 text-sm text-text/60"
              >
                <svg
                  className="w-4 h-4 text-primary-dark shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-[1px] h-8 bg-text/20" />
      </div>
    </section>
  );
}

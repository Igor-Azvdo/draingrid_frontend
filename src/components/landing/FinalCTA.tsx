import { Container } from "./Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { finalCtaContent } from "@/data/landing-content";

export function FinalCTA() {
  return (
    <section data-track-section="cta-final" className="py-24 md:py-32 bg-white">
      <Container>
        <div className="relative max-w-3xl mx-auto">
          <div className="relative bg-primary-dark rounded-[3rem] px-8 py-16 md:px-16 md:py-20 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10 space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-white leading-[1.1]">
                Agende a sua<br />
                consulta <span className="text-white/70">agora.</span>
              </h2>
              <div className="pt-4">
                <WhatsAppButton variant="white" trackClick="cta-final">
                  {finalCtaContent.cta}
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

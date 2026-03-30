import { Container } from "./Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { finalCtaContent } from "@/data/landing-content";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-2xl md:text-3xl font-extrabold text-text leading-snug">
            {finalCtaContent.text[0]}
          </p>
          <p className="text-lg md:text-xl text-text/60 font-light leading-relaxed">
            {finalCtaContent.text[1]}
          </p>
          <div className="pt-4">
            <WhatsAppButton variant="green">
              {finalCtaContent.cta}
            </WhatsAppButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

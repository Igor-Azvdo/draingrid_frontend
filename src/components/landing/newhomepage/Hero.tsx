"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Container } from "../Container";
import { WhatsAppButton } from "./WhatsAppButton";
import { heroContent } from "@/data/landing-content-newhomepage";

export function Hero() {
  useEffect(() => {
    const logoEl = document.getElementById("hero-logo-wrap");
    if (!logoEl) return;

    const update = () => {
      const p = Math.min(window.scrollY / 350, 1);
      const opacity = Math.max(0, 1 - p * 2.2);
      const scale = 1 - p * 0.18;
      const ty = -p * 28;
      logoEl.style.opacity = String(opacity);
      logoEl.style.transform = `translateY(${ty}px) scale(${scale})`;
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section data-track-section="hero" className="bg-white overflow-hidden min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col md:flex-row">

        {/* Left column */}
        <div className="flex-[45] flex flex-col px-6 sm:px-10 lg:px-16 xl:px-20 pb-6 md:pb-0">

          {/* Hero text content */}
          <div className="flex-1 flex flex-col items-center justify-center pt-4 md:pt-10 pb-4 md:pb-16">
            <div className="space-y-4 md:space-y-7 max-w-xl w-full text-center md:text-left md:mx-0 mx-auto">

              {/* Large hero logo — fades out as header logo appears (desktop only) */}
              <div
                id="hero-logo-wrap"
                className="hidden md:block will-change-transform"
                style={{ transformOrigin: "left center" }}
              >
                <Image
                  src="/logo.svg"
                  alt="Dra. Ingrid Azevedo"
                  width={220}
                  height={130}
                  className="h-16 md:h-24 w-auto"
                  unoptimized
                  priority
                />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[2.85rem] xl:text-[3.25rem] font-extrabold leading-[1.1] tracking-tight text-text">
                Você já tentou de tudo. Só não tentou{" "}
                <span className="text-primary">a dose certa pra você.</span>
              </h1>

              <p className="text-sm text-text/55 leading-relaxed max-w-md">
                {heroContent.description}
              </p>

              <div className="flex flex-row flex-wrap items-center justify-center gap-3 w-full max-w-lg mx-auto md:mx-0 md:justify-start">
                <WhatsAppButton variant="green" size="lg" trackClick="cta-hero">
                  Fale comigo e tire suas dúvidas
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>

        {/* Right column — image */}
        <div className="flex-[55] flex flex-col px-4 sm:px-6 lg:px-8 pb-4 pt-4 md:pt-0 md:pb-0 order-first md:order-none">
          <div className="relative flex-1 rounded-[2rem] md:rounded-none md:rounded-tl-[3rem] md:rounded-bl-[3rem] overflow-hidden min-h-[320px]">
            <picture>
              <source media="(min-width: 768px)" srcSet="/herobruxismo.jpg" />
              <img
                src="/herobruxismo.jpg"
                alt="Dra. Ingrid Azevedo, dentista e prescritora canábica"
                className="absolute inset-0 w-full h-full object-cover object-[center_top]"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </picture>
          </div>
        </div>

      </div>
    </section>
  );
}

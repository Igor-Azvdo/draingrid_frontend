"use client";

import { useEffect, useState } from "react";
import { Container } from "../Container";
import { WhatsAppButton } from "./WhatsAppButton";

const trust = [
  "Receita digital emitida na primeira consulta",
  "Suporte semanal — você não fica sozinho",
  "Teleconsulta — atendo todo o Brasil",
];

const instagramIcon = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

function buildSrc() {
  const base = "https://app.clinicweed.com.br/agendar/draingridazevedo?bare=1";
  if (typeof window === "undefined") return base;
  const params = new URLSearchParams(window.location.search);
  const attrs = ["fbclid", "gclid", "utm_source", "utm_medium", "utm_campaign"];
  const extra = attrs
    .filter((k) => params.has(k))
    .map((k) => `&${k}=${params.get(k)}`)
    .join("");
  return base + extra;
}

export function FinalCTA() {
  const [iframeSrc, setIframeSrc] = useState(
    "https://app.clinicweed.com.br/agendar/draingridazevedo?bare=1"
  );

  useEffect(() => {
    setIframeSrc(buildSrc());

    const onMessage = (e: MessageEvent) => {
      if (!e.data || typeof e.data.height !== "number") return;
      if (e.data.type !== "resize") return;
      const iframe = document.getElementById(
        "clinicweed-booking"
      ) as HTMLIFrameElement | null;
      if (iframe) iframe.style.height = e.data.height + "px";
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <section data-track-section="cta-final" className="relative bg-[#2d5c3e]">
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />
      <div className="absolute -left-64 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute -left-48 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none" />

      <Container className="relative z-10 py-20 md:py-28">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 md:gap-20 items-center">

            {/* Left: copy + buttons */}
            <div className="flex-1 space-y-8">
              <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-white leading-[1.1]">
                Agende a sua<br />
                consulta <span className="text-white/70">agora.</span>
              </h2>

              <p className="text-white text-base md:text-lg leading-relaxed">
                Uma consulta é suficiente para sair com o protocolo escrito. Sem fila. Sem deslocamento. Online.
              </p>

              <div className="space-y-3">
                {trust.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <WhatsAppButton variant="white" trackClick="cta-final">
                  Falar no WhatsApp
                </WhatsAppButton>

                <a
                  href="https://www.instagram.com/draingrid.azevedo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/20 text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition-all duration-200"
                >
                  {instagramIcon}
                  <span>@draingrid.azevedo</span>
                </a>
              </div>
            </div>

            {/* Right: scheduling widget */}
            <div className="w-full md:w-[560px] shrink-0 bg-white rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                id="clinicweed-booking"
                src={iframeSrc}
                width={560}
                style={{
                  border: "none",
                  display: "block",
                  width: "100%",
                  height: 700,
                }}
              />
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}

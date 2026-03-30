"use client";

import Image from "next/image";
import { useState } from "react";
import { navLinks, WHATSAPP_URL } from "@/data/landing-content";

export function Footer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá, Dra. Ingrid! Meu nome é ${name}. Gostaria de agendar uma consulta.`;
    const url = `https://wa.me/5511985827582?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-primary-dark text-white">
      {/* Top section */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.svg"
              alt="Dra. Ingrid Azevedo"
              width={180}
              height={100}
              className="h-24 w-auto brightness-0 invert mb-6"
              unoptimized
            />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Dentista e prescritora canábica habilitada pela ANVISA. Tratamento
              individualizado com cannabis medicinal.
            </p>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-primary-dark transition-all duration-300 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="group-hover:scale-110 transition-transform"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/draingridazevedo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-primary-dark transition-all duration-300 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:scale-110 transition-transform"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Navegação
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/links"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Todos os links
                </a>
              </li>
            </ul>
          </div>

          {/* Informações */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Informações
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-primary-light shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                CRO PB 11599
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-primary-light shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Prescritora habilitada ANVISA
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-primary-light shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                  />
                </svg>
                Atendimento online para todo o Brasil
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-primary-light shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Seg–Sex · 8h às 18h
              </li>
            </ul>
          </div>

          {/* Formulário */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Agende sua consulta
            </h4>
            <p className="text-sm text-white/70 mb-5">
              Deixe seu nome e WhatsApp que entraremos em contato.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-white/10 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary-light/50 focus:bg-white/15 transition-all"
              />
              <input
                type="tel"
                placeholder="Seu WhatsApp"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full bg-white/10 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary-light/50 focus:bg-white/15 transition-all"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold text-sm uppercase tracking-widest rounded-full px-5 py-3.5 hover:bg-primary-light transition-colors active:scale-95"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] text-white/50 font-bold uppercase tracking-[0.2em]">
          <span>
            © {new Date().getFullYear()} Dra. Ingrid Azevedo. Todos os direitos
            reservados.
          </span>
          <span>
            Desenvolvido por{" "}
            <a
              href="https://www.instagram.com/igorazvdo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white/60 transition-colors"
            >
              Igor Azevedo
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

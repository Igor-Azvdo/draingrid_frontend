"use client";

import Image from "next/image";
import { useState } from "react";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { navLinks, WHATSAPP_URL } from "@/data/landing-content";

export function Header() {
  const scrolled = useScrollHeader();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-hero-dark/95 backdrop-blur-xl shadow-[0_1px_0_rgba(201,169,110,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-8 flex items-center justify-between h-18 md:h-22">
        {/* Logo */}
        <a href="#" className="shrink-0">
          <Image
            src="/logo.svg"
            alt="Dra. Ingrid Azevedo"
            width={110}
            height={64}
            className="brightness-0 invert opacity-90"
            unoptimized
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/60 hover:text-accent font-medium text-[0.8125rem] uppercase tracking-[0.15em] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent/90 hover:bg-accent text-hero-dark font-bold text-[0.8125rem] uppercase tracking-[0.08em] px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_2px_12px_rgba(201,169,110,0.2)] hover:shadow-[0_4px_20px_rgba(201,169,110,0.35)]"
          >
            Agendar consulta
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white/80 p-2 cursor-pointer"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </>
            ) : (
              <>
                <path d="M3 7h18" />
                <path d="M3 12h12" />
                <path d="M3 17h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-hero-dark/98 backdrop-blur-xl border-t border-white/5 px-6 py-8 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/60 hover:text-accent font-medium text-sm uppercase tracking-[0.12em] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-accent text-hero-dark font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-full text-center transition-colors"
          >
            Agendar consulta
          </a>
        </nav>
      </div>
    </header>
  );
}

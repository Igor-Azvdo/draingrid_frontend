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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-hero-dark/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="shrink-0">
          <Image
            src="/logo.svg"
            alt="Draingrid"
            width={120}
            height={70}
            className="brightness-0 invert"
            unoptimized
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white font-medium text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-hero-dark font-bold text-sm px-5 py-2.5 rounded-full hover:bg-primary-light transition-colors"
          >
            Agendar consulta
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </>
            ) : (
              <>
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="md:hidden bg-hero-dark/95 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white font-medium text-base transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-primary text-hero-dark font-bold text-base px-5 py-3 rounded-full text-center hover:bg-primary-light transition-colors"
          >
            Agendar consulta
          </a>
        </nav>
      )}
    </header>
  );
}

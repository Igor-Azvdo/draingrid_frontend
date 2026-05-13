"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { navLinks, WHATSAPP_URL } from "@/data/landing-content";
import { Container } from "./Container";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const elem = document.getElementById(href.replace("#", ""));
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "py-3 bg-white/95 backdrop-blur-xl border-b border-card-border shadow-sm"
            : "py-5 md:py-6 bg-transparent"
        }`}
      >
        <Container className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="z-[101]"
          >
            <Image
              src="/logo.svg"
              alt="Dra. Ingrid Azevedo"
              width={110}
              height={64}
              className="h-14 w-auto transition-all duration-300"
              unoptimized
            />
          </a>

          {/* Desktop Nav Pills */}
          <div className="hidden lg:flex items-center gap-2">
            <div
              className={`flex items-center gap-1 p-1.5 rounded-full border transition-all duration-300 ${
                scrolled
                  ? "bg-bg border-card-border"
                  : "bg-white/60 backdrop-blur-md border-text/10"
              }`}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    scrolled
                      ? "text-text/50 hover:bg-primary-dark hover:text-white"
                      : "text-text/50 hover:bg-primary-dark hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-flex group items-center rounded-full pl-5 pr-1.5 py-1.5 shadow-lg transition-all duration-300 ${
              scrolled
                ? "bg-primary-dark text-white hover:bg-primary"
                : "bg-primary-dark text-white hover:bg-primary"
            }`}
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] mr-4">
              Agendar
            </span>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all bg-white/20 group-hover:bg-white/30"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </div>
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden w-11 h-11 rounded-full border flex items-center justify-center shadow-sm transition-all duration-300 z-[101] ${
              scrolled || menuOpen
                ? "bg-white border-card-border"
                : "bg-white/60 backdrop-blur-sm border-text/10"
            }`}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1A2B20"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1A2B20"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
              </svg>
            )}
          </button>
        </Container>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[99] flex flex-col justify-center items-center space-y-6 transition-all duration-500 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="text-2xl font-extrabold text-text hover:text-primary-dark transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-primary-dark text-white rounded-full text-sm font-bold uppercase tracking-widest mt-6 shadow-lg active:scale-95 transition-transform"
        >
          Agendar consulta
        </a>
      </div>
    </>
  );
}

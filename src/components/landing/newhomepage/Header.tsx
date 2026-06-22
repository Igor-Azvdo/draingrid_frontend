"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { navLinks, WHATSAPP_URL } from "@/data/landing-content-newhomepage";
import { Container } from "../Container";
import { BookingWidget } from "@/components/BookingWidget";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const headerEl = document.getElementById("main-header") as HTMLElement | null;

    let lastScrollY = window.scrollY;

    const update = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < 768;
      const pastHero = currentScrollY > window.innerHeight * 0.9;

      if (!headerEl) return;

      headerEl.style.backgroundColor = "rgba(255,255,255,0.98)";
      headerEl.style.backdropFilter = "blur(8px)";
      headerEl.style.borderBottom = "1px solid rgba(26,43,32,0.08)";
      headerEl.style.boxShadow = "0 1px 8px rgba(0,0,0,0.05)";

      if (isMobile) {
        // Mobile: hidden over hero, visible after
        headerEl.style.transform = pastHero ? "translateY(0)" : "translateY(-100%)";
      } else {
        // Desktop: hidden over hero; past hero, show on scroll up, hide on scroll down
        const scrollingUp = currentScrollY < lastScrollY;
        if (!pastHero) {
          headerEl.style.transform = "translateY(-100%)";
        } else if (scrollingUp) {
          headerEl.style.transform = "translateY(0)";
        } else {
          headerEl.style.transform = "translateY(-100%)";
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const elem = document.getElementById(href.replace("#", ""));
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        id="main-header"
        className="fixed top-0 left-0 w-full z-[100]"
        style={{
          paddingTop: 12,
          paddingBottom: 12,
          transform: "translateY(-100%)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1), background-color 0.2s, border-bottom 0.2s, box-shadow 0.2s",
        }}
      >
        <Container className="flex justify-between items-center">

          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <Image
              src="/logo.svg"
              alt="Dra. Ingrid Azevedo"
              width={110}
              height={64}
              className="h-12 w-auto"
              unoptimized
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest text-text/50 hover:text-text hover:bg-text/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={WHATSAPP_URL} data-cw-shortlink="df902d7c"
              target="_blank"
              rel="noopener noreferrer"
              data-track-click="cta-header"
              className="inline-flex group items-center rounded-full pl-5 pr-1.5 py-1.5 bg-primary-dark text-white hover:bg-primary transition-all duration-300 shadow-sm"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] mr-4">
                Agendar
              </span>
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/20 group-hover:bg-white/30 transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                </svg>
              </div>
            </a>
          </div>

          {/* Mobile toggle — always visible */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 rounded-full border border-text/15 flex items-center justify-center z-[101] bg-white"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A2B20" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18" /><path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A2B20" strokeWidth="2" strokeLinecap="round">
                <path d="M3 12h18" /><path d="M3 6h18" /><path d="M3 18h18" />
              </svg>
            )}
          </button>
        </Container>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[99] flex flex-col items-center overflow-y-auto px-6 pt-24 pb-12 space-y-6 transition-all duration-400 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="text-2xl font-extrabold text-text hover:text-primary transition-colors"
          >
            {link.label}
          </a>
        ))}

        {/* Booking widget */}
        {menuOpen && (
          <div className="w-full max-w-md mt-4">
            <BookingWidget />
          </div>
        )}

        <a
          href={WHATSAPP_URL} data-cw-shortlink="df902d7c"
          target="_blank"
          rel="noopener noreferrer"
          data-track-click="cta-menu-mobile"
          className="px-8 py-4 bg-primary-dark text-white rounded-full text-sm font-bold uppercase tracking-widest mt-2 shadow-lg active:scale-95 transition-transform"
        >
          Agendar pelo WhatsApp
        </a>
      </div>
    </>
  );
}

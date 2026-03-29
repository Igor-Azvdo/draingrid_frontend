import Image from "next/image";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="py-10 bg-hero-darker border-t border-white/[0.04]">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        <Image
          src="/logo.svg"
          alt="Dra. Ingrid Azevedo"
          width={80}
          height={47}
          className="brightness-0 invert opacity-20"
          unoptimized
        />
        <div className="flex items-center gap-8 text-[0.8125rem] text-white/20">
          <a
            href="/links"
            className="hover:text-white/40 transition-colors duration-300"
          >
            Links
          </a>
          <span className="text-white/10">|</span>
          <span>Desenvolvido por Igor Azevedo</span>
        </div>
      </Container>
    </footer>
  );
}

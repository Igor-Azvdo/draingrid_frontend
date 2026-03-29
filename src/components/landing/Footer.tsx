import Image from "next/image";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="py-8 bg-hero-darker text-white/40">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
        <Image
          src="/logo.svg"
          alt="Draingrid"
          width={80}
          height={47}
          className="brightness-0 invert opacity-40"
          unoptimized
        />
        <div className="flex items-center gap-6 text-sm">
          <a
            href="/links"
            className="hover:text-white/60 transition-colors"
          >
            Links
          </a>
          <span>Desenvolvido por Igor Azevedo</span>
        </div>
      </Container>
    </footer>
  );
}

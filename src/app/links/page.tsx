import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { LinkCard } from "@/components/LinkCard";

export default function Link2() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero image with fade - mobile only */}
      <div className="relative w-full h-[35vh] sm:h-[50vh] shrink-0 md:hidden">
        <Image
          src="/hero.jpg"
          alt="Dra Ingrid Azevedo"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-x-0 -bottom-[2px] top-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center flex-1 px-5 -mt-10 sm:-mt-20 md:mt-16 relative z-10">
        <div className="w-full max-w-lg flex flex-col items-center gap-6">
          {/* Name + Description */}
          <div className="flex flex-col items-center text-center animate-fade-up">
            <Image
              src="/logo.svg"
              alt={siteConfig.name}
              width={220}
              height={128}
            />
            <p className="mt-2 text-base sm:text-lg text-text/60 font-medium leading-relaxed max-w-sm mx-auto">
              {siteConfig.description}
            </p>
          </div>

          {/* Links */}
          <div className="w-full flex flex-col gap-5">
            {siteConfig.links.map((link, index) => (
              <div
                key={index}
                className="animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 120}ms` }}
              >
                <LinkCard link={link} />
              </div>
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-6 mb-10 text-center text-sm text-text/30">
            Desenvolvido por Igor Azevedo
          </footer>
        </div>
      </div>
    </main>
  );
}

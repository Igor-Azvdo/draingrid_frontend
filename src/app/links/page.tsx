import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { LinkCard } from "@/components/LinkCard";
import { BookingWidget } from "@/components/BookingWidget";

export default function Link2() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0D1F17]">
      {/* Content */}
      <div className="flex flex-col items-center flex-1 px-5 pt-14 relative z-10">
        <div className="w-full max-w-lg flex flex-col items-center gap-5">
          {/* Profile photo + Description */}
          <div className="flex flex-col items-center text-center animate-fade-up">
            <div className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-white/20 shadow-lg">
              <Image
                src="/hero.jpg"
                alt="Dra Ingrid Azevedo"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
            <p className="mt-4 text-sm sm:text-base text-white/60 font-medium leading-relaxed max-w-sm mx-auto">
              {siteConfig.description}
            </p>
          </div>

          {/* Links */}
          <div className="w-full flex flex-col gap-3">
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

          {/* Booking widget */}
          <div className="w-full animate-fade-up" style={{ animationDelay: `${(siteConfig.links.length + 1) * 120}ms` }}>
            <p className="text-center text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">
              Agendar consulta
            </p>
            <BookingWidget />
          </div>

          {/* Footer */}
          <footer className="mt-6 mb-10 text-center text-sm text-white/20">
            Desenvolvido por Igor Azevedo
          </footer>
        </div>
      </div>
    </main>
  );
}

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site-config";

export default function Home() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/link2");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [router]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-5 py-16">
      <div className="w-full max-w-lg flex flex-col items-center gap-8">
        <div className="flex flex-col items-center text-center animate-fade-up">
          <Image
            src="/logo.svg"
            alt={siteConfig.name}
            width={280}
            height={163}
            priority
          />
        </div>

        <div
          className="animate-fade-up flex flex-col items-center gap-4"
          style={{ animationDelay: "200ms" }}
        >
          <span className="text-2xl sm:text-3xl font-extrabold text-primary-dark">
            Em breve
          </span>
          <p className="text-text/50 font-medium text-center">
            Redirecionando em{" "}
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/15 text-primary-dark font-bold">
              {countdown}
            </span>
          </p>
          <a
            href="/link2"
            className="mt-2 text-sm text-primary-dark/60 hover:text-primary-dark underline underline-offset-4 transition-colors"
          >
            Ir para os links agora
          </a>
        </div>
      </div>

      <footer className="mt-auto pt-8 pb-6 text-center text-sm text-text/30">
        Desenvolvido por Igor Azevedo
      </footer>
    </main>
  );
}

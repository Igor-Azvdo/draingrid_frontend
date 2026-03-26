import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "Dra Ingrid Azevedo | Cannabis Medicinal e Odontologia",
  description:
    "Dra Ingrid Azevedo - Cirurgiã Dentista e especialista em Cannabis Medicinal. Ajudo você a viver melhor, aliviar a dor e dormir bem de forma natural e segura. Atendimento online e presencial em João Pessoa.",
  keywords: [
    "cannabis medicinal",
    "odontologia",
    "cirurgiã dentista",
    "Dra Ingrid Azevedo",
    "Draingrid",
    "João Pessoa",
    "tratamento com cannabis",
    "dor crônica",
    "insônia",
  ],
  authors: [{ name: "Dra Ingrid Azevedo" }],
  openGraph: {
    title: "Dra Ingrid Azevedo | Cannabis Medicinal e Odontologia",
    description:
      "Ajudo você a viver melhor, aliviar a dor e dormir bem de forma natural e segura.",
    type: "website",
    locale: "pt_BR",
    siteName: "Draingrid",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={nunito.className}>
      <body className="text-text antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Urbanist, DM_Sans } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-urbanist" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-body" });

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "Dra. Ingrid Azevedo | Prescritora Canábica · Cannabis Medicinal",
  description:
    "Dra. Ingrid Azevedo — Dentista e prescritora canábica habilitada pela ANVISA. Tratamento individualizado com cannabis medicinal para dor crônica, insônia, ansiedade, bruxismo, TEA e mais. Atendimento online para todo o Brasil.",
  keywords: [
    "cannabis medicinal",
    "prescritora canábica",
    "Dra Ingrid Azevedo",
    "dor crônica",
    "insônia",
    "bruxismo",
    "ansiedade",
    "fibromialgia",
    "autismo TEA",
    "ANVISA",
    "tratamento natural",
    "odontologia",
    "teleconsulta",
  ],
  authors: [{ name: "Dra. Ingrid Azevedo" }],
  openGraph: {
    title: "Dra. Ingrid Azevedo | Prescritora Canábica · Cannabis Medicinal",
    description:
      "A dose certa muda tudo. Tratamento individualizado com cannabis medicinal para dor, insônia, ansiedade e mais.",
    type: "website",
    locale: "pt_BR",
    siteName: "Dra. Ingrid Azevedo",
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
    <html lang="pt-BR" className={`${urbanist.variable} ${dmSans.variable}`}>
      <body className="text-text antialiased">{children}</body>
    </html>
  );
}

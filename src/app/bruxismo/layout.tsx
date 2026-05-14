import type { Metadata } from "next";

const SITE_URL = "https://dentistacanabica.com.br";
const URL = `${SITE_URL}/bruxismo`;

const TITLE = "Tratamento de Bruxismo com Cannabis Medicinal | Dra. Ingrid Azevedo";
const DESCRIPTION =
  "Bruxismo severo, mandíbula travada e disfunção de ATM tratados com cannabis medicinal. Protocolo individualizado por dentista e prescritora canábica habilitada pela ANVISA. Atendimento online em todo o Brasil.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tratamento de bruxismo com cannabis medicinal — Dra. Ingrid Azevedo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  keywords: [
    "tratamento de bruxismo",
    "bruxismo cannabis medicinal",
    "bruxismo severo",
    "mandíbula travada",
    "disfunção de ATM",
    "ATM cannabis",
    "placa de bruxismo",
    "ranger os dentes durante o sono",
    "dor na mandíbula",
    "Dra Ingrid Azevedo",
    "dentista canábica",
    "prescritor cannabis ANVISA",
  ],
};

export default function BruxismoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { faqContent } from "@/data/landing-content-newhomepage";

const SITE_URL = "https://dentistacanabica.com.br";
const URL = `${SITE_URL}/newhomepage`;

const TITLE = "Cannabis Medicinal Online | Dra. Ingrid Azevedo — Dentista Canábica";
const DESCRIPTION =
  "Insônia, dor crônica, ansiedade, bruxismo e fibromialgia tratados com cannabis medicinal, em protocolo individualizado e ajustado ao seu organismo. Prescrição legal e teleconsulta em todo o Brasil com a Dra. Ingrid Azevedo.";

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
        alt: "Cannabis medicinal online — Dra. Ingrid Azevedo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqContent.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function NewHomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}

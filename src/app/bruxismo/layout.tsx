import type { Metadata } from "next";
import { faqContent } from "@/data/landing-content-bruxismo";

const SITE_URL = "https://dentistacanabica.com.br";
const URL = `${SITE_URL}/bruxismo`;

const TITLE = "Tratamento de Bruxismo com Cannabis Medicinal | Dra. Ingrid Azevedo";
const DESCRIPTION =
  "Bruxismo severo, mandíbula travada e disfunção de ATM tratados com cannabis medicinal. Protocolo individualizado por dentista e prescritora canábica. Atendimento online em todo o Brasil.";

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
    "bruxismo refratário",
    "mandíbula travada",
    "disfunção de ATM",
    "ATM cannabis",
    "placa de bruxismo",
    "ranger os dentes durante o sono",
    "dor na mandíbula",
    "botox masseter alternativa",
    "Dra Ingrid Azevedo",
    "dentista canábica",
    "prescritor cannabis medicinal",
    "CBD para bruxismo",
  ],
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

const medicalConditionJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Bruxismo",
  alternateName: ["Ranger de dentes", "Apertamento dental", "Bruxism"],
  code: {
    "@type": "MedicalCode",
    code: "F45.8",
    codingSystem: "ICD-10",
  },
  signOrSymptom: [
    { "@type": "MedicalSymptom", name: "Mandíbula travada ao acordar" },
    { "@type": "MedicalSymptom", name: "Desgaste dental" },
    { "@type": "MedicalSymptom", name: "Cefaleia tensional matinal" },
    { "@type": "MedicalSymptom", name: "Dor miofascial facial" },
    { "@type": "MedicalSymptom", name: "Disfunção temporomandibular" },
  ],
  possibleTreatment: {
    "@type": "MedicalTherapy",
    name: "Protocolo individualizado de cannabis medicinal para bruxismo",
    description:
      "Tratamento com canabidiol (CBD) e fitocanabinoides em dose ajustada semanalmente, com foco em modular sono profundo, tônus muscular noturno e ativação simpática.",
    seriousAdverseOutcome: { "@type": "MedicalEntity", name: "Nenhum efeito adverso grave esperado em doses terapêuticas" },
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "@id": `${URL}/#therapy`,
  name: "Tratamento de bruxismo com cannabis medicinal",
  description:
    "Protocolo médico individualizado de cannabis medicinal para bruxismo noturno, diurno e refratário, conduzido por dentista e prescritora canábica.",
  url: URL,
  provider: { "@id": `${SITE_URL}/#physician` },
  areaServed: { "@type": "Country", name: "Brasil" },
  availableLanguage: "Portuguese",
  recognizingAuthority: {
    "@type": "Organization",
    name: "ANVISA",
    url: "https://www.gov.br/anvisa/pt-br",
  },
};

export default function BruxismoLayout({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {children}
    </>
  );
}

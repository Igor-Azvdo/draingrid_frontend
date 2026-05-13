import type { Metadata, Viewport } from "next";
import { Urbanist, DM_Sans } from "next/font/google";
import { faqContent } from "@/data/landing-content";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-urbanist" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-body" });

const SITE_URL = "https://dentistacanabica.com.br";
const SITE_NAME = "Dra. Ingrid Azevedo — Dentista Canábica";
const TITLE = "Dentista Canábica | Cannabis Medicinal Online · Dra. Ingrid Azevedo";
const DESCRIPTION =
  "Dra. Ingrid Azevedo — dentista e prescritora canábica habilitada pela ANVISA. Cannabis medicinal online, com prescrição legal e protocolo individualizado para dor crônica, insônia, ansiedade, bruxismo, fibromialgia, TEA e mais. Atendimento por teleconsulta em todo o Brasil.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Dra. Ingrid Azevedo",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "dentista canábica",
    "cannabis medicinal",
    "cannabis medicinal online",
    "prescritora canábica",
    "prescritor cannabis ANVISA",
    "receita de cannabis",
    "Dra Ingrid Azevedo",
    "dor crônica",
    "insônia",
    "bruxismo",
    "ansiedade",
    "fibromialgia",
    "autismo TEA",
    "ANVISA",
    "teleconsulta cannabis",
    "tratamento com cannabis",
    "óleo de CBD",
    "canabidiol",
  ],
  authors: [{ name: "Dra. Ingrid Azevedo", url: SITE_URL }],
  creator: "Dra. Ingrid Azevedo",
  publisher: "Dra. Ingrid Azevedo",
  category: "health",
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Ingrid Azevedo — Dentista e prescritora canábica habilitada pela ANVISA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "BR",
    "geo.placename": "Brasil",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const physicianJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": `${SITE_URL}/#physician`,
  name: "Dra. Ingrid Azevedo",
  alternateName: "Dentista Canábica",
  description:
    "Cirurgiã-dentista e prescritora de cannabis medicinal habilitada pela ANVISA. Atendimento online para todo o Brasil.",
  url: SITE_URL,
  image: `${SITE_URL}/dra-ingrid.jpg`,
  medicalSpecialty: ["Dentistry", "PainMedicine", "Psychiatric"],
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Prescrição de Cannabis Medicinal",
      description:
        "Avaliação clínica e prescrição individualizada de cannabis medicinal com acompanhamento semanal.",
    },
  ],
  areaServed: { "@type": "Country", name: "Brasil" },
  availableLanguage: "Portuguese",
  isAcceptingNewPatients: true,
  priceRange: "$$",
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "Cirurgiã-Dentista — CRO PB 11599",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "Prescritora Canábica habilitada pela ANVISA",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "appointments",
    availableLanguage: "Portuguese",
    areaServed: "BR",
    url: "https://wa.me/5511985827582",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "pt-BR",
  publisher: { "@id": `${SITE_URL}/#physician` },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqContent.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${urbanist.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preload" as="image" href="/herobglp.jpg" media="(min-width: 768px)" fetchPriority="high" />
        <link rel="preload" as="image" href="/herobglpmobile.jpg" media="(max-width: 767px)" fetchPriority="high" />
        <script
          async
          src="https://api.clinicweed.proximosite.com.br/api/tracking/script/clw_8fc17d6d58311b45e5813d531bc2fb5f.js"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="text-text antialiased">{children}</body>
    </html>
  );
}

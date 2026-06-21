"use client";

import { Header } from "@/components/landing/newhomepage/Header";
import { Hero } from "@/components/landing/newhomepage/Hero";
import { PainPoints } from "@/components/landing/newhomepage/PainPoints";
import { Problem } from "@/components/landing/newhomepage/Problem";
// import { WhatIsCannabis } from "@/components/landing/newhomepage/WhatIsCannabis"; // soft delete
import { About } from "@/components/landing/newhomepage/About";
import { HowItWorks } from "@/components/landing/newhomepage/HowItWorks";
import { Testimonials } from "@/components/landing/newhomepage/Testimonials";
import { FAQ } from "@/components/landing/newhomepage/FAQ";
import { FinalCTA } from "@/components/landing/newhomepage/FinalCTA";
import { Footer } from "@/components/landing/newhomepage/Footer";
import { FloatingWhatsApp } from "@/components/landing/newhomepage/FloatingWhatsApp";
import { faqContent } from "@/data/landing-content-newhomepage";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqContent.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <FloatingWhatsApp />
      <main>
        <Hero />
        <PainPoints />
        <Problem />
        {/* soft delete: seção "O que é de verdade" (Cannabis Medicinal) */}
        {/* <WhatIsCannabis /> */}
        <HowItWorks />
        <About />
        <Testimonials />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

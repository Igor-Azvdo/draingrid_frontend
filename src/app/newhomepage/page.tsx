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

export default function NewHomepageLanding() {
  return (
    <>
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

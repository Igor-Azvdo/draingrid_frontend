"use client";

import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { PainPoints } from "@/components/landing/PainPoints";
import { Problem } from "@/components/landing/Problem";
import { WhatIsCannabis } from "@/components/landing/WhatIsCannabis";
import { About } from "@/components/landing/About";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Conditions } from "@/components/landing/Conditions";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { Plans } from "@/components/landing/Plans";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

export default function BruxismoLanding() {
  return (
    <>
      <Header />
      <FloatingWhatsApp />
      <main>
        <Hero />
        <PainPoints />
        <Problem />
        <WhatIsCannabis />
        <HowItWorks />
        <About />
        <Conditions />
        <Testimonials />
        <FAQ />
        <Plans />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

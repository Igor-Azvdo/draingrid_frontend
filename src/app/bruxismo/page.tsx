"use client";

import { Header } from "@/components/landing/bruxismo/Header";
import { Hero } from "@/components/landing/bruxismo/Hero";
import { PainPoints } from "@/components/landing/bruxismo/PainPoints";
import { Problem } from "@/components/landing/bruxismo/Problem";
import { WhatIsCannabis } from "@/components/landing/bruxismo/WhatIsCannabis";
import { About } from "@/components/landing/bruxismo/About";
import { HowItWorks } from "@/components/landing/bruxismo/HowItWorks";
import { Conditions } from "@/components/landing/bruxismo/Conditions";
import { Testimonials } from "@/components/landing/bruxismo/Testimonials";
import { FAQ } from "@/components/landing/bruxismo/FAQ";
import { Plans } from "@/components/landing/bruxismo/Plans";
import { FinalCTA } from "@/components/landing/bruxismo/FinalCTA";
import { Footer } from "@/components/landing/bruxismo/Footer";
import { FloatingWhatsApp } from "@/components/landing/bruxismo/FloatingWhatsApp";

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

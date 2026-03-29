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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Problem />
        <WhatIsCannabis />
        <About />
        <HowItWorks />
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

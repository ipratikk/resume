"use client";

import { useState } from "react";

import Navbar from "components/Navbar";
import Hero from "components/Hero";
import CinematicImpact from "components/CinematicImpact";
import ProductShowcase from "components/ProductShowcase";
import Experience from "components/Experience";
import Footer from "components/Footer";
import IntroAnimation from "components/IntroAnimation";
import Skills from "components/Skills";
import Projects from "components/Projects";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main>

      {showIntro && (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      )}

      {/* MAIN CONTENT */}
      <div className={`${showIntro ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}>

        {/* <Navbar /> */}
        <Hero />
        <CinematicImpact />
        <Experience />
        <ProductShowcase />
        <Skills />
        <Projects />
        <Footer />

      </div>

    </main>
  );
}
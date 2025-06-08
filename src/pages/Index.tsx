import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingDock from '@/components/FloatingDock';
import PixelTrail from '@/components/PixelTrail';

const Index = () => {
  return (
    <div className="relative">
      <FloatingDock />
      <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 text-foreground">
        <PixelTrail />
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;


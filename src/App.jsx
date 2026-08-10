import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import Gallery from './components/Gallery';
import AboutCraft from './components/AboutCraft';
import HowToOrder from './components/HowToOrder';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Initialize Lenis Smooth Scroll with lighter/faster duration (0.6s)
    const lenis = new Lenis({
      duration: 0.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.lenis = lenis;

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-900 selection:bg-rose-500 selection:text-white flex flex-col justify-between overflow-x-hidden">
      <Header />
      <main className="flex-grow pt-[116px] sm:pt-[132px]">
        <Hero />
        <MarqueeBanner />
        <Gallery />
        <AboutCraft />
        <HowToOrder />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

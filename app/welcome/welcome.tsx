import React, { useEffect, useState, useRef } from "react";
import { motion } from 'framer-motion';
import Hero from "~/components/Hero";
import Skills from "~/components/Skills";
import Projects from "~/components/Projects";
import Experience from "~/components/Experience";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";

// Animated SVG Wave Layer
function WaveBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep background ambient glow */}
      <div style={{
        position: 'absolute', top: '10%', left: '-10%',
        width: '60%', height: '60%',
        background: 'radial-gradient(ellipse, rgba(6,182,212,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-10%',
        width: '55%', height: '55%',
        background: 'radial-gradient(ellipse, rgba(14,165,233,0.07) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />

      {/* Animated SVG Waves at bottom */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '220px', overflow: 'hidden' }}>
        {/* Wave 1 */}
        <svg className="wave-1" style={{ position: 'absolute', bottom: 0, width: '200%', height: '100%' }}
          viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="rgba(6,182,212,0.07)"
            d="M0,60 C180,100 360,20 540,60 C720,100 900,20 1080,60 C1260,100 1440,20 1440,60 L1440,120 L0,120 Z" />
        </svg>
        {/* Wave 2 */}
        <svg className="wave-2" style={{ position: 'absolute', bottom: 0, width: '200%', height: '100%' }}
          viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="rgba(14,165,233,0.05)"
            d="M0,40 C240,80 480,10 720,50 C960,90 1200,10 1440,50 L1440,120 L0,120 Z" />
        </svg>
        {/* Wave 3 */}
        <svg className="wave-3" style={{ position: 'absolute', bottom: 0, width: '200%', height: '100%' }}
          viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="rgba(103,232,249,0.04)"
            d="M0,80 C120,40 300,100 480,60 C660,20 840,90 1020,50 C1200,10 1320,80 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>

      {/* Flowing river lines */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.04 }}
        preserveAspectRatio="none">
        <defs>
          <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M-100,200 Q300,100 700,300 T1600,200" stroke="url(#riverGrad)" strokeWidth="2" fill="none" />
        <path d="M-100,400 Q400,250 800,450 T1600,350" stroke="url(#riverGrad)" strokeWidth="1.5" fill="none" />
        <path d="M-100,600 Q350,500 750,650 T1600,550" stroke="url(#riverGrad)" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}

export function Welcome() {
  const [darkMode] = useState(true);

  useEffect(() => {
    document.body.style.background = '#020917';
  }, []);

  return (
    <div className="relative min-h-screen">
      <WaveBackground />
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </main>
    </div>
  );
}

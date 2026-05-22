import * as React from "react";
import type { Route } from "./+types/home";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "~/components/Navbar";
import Hero from "~/components/Hero";
import About from "~/components/About";
import Skills from "~/components/Skills";
import Projects from "~/components/Projects";
import Experience from "~/components/Experience";
import Achievements from "~/components/Achievements";
import Contact from "~/components/Contact";
import AIAssistant from "~/components/AIAssistant";
import Footer from "~/components/Footer";
import GalleryCursor from "~/components/GalleryCursor";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jhanvi Jain | Full Stack Developer & AI Security Engineer" },
    {
      name: "description",
      content:
        "Portfolio of Jhanvi Jain — Full Stack Developer, AI Security Engineer & Application Security Analyst at EY India.",
    },
    {
      name: "keywords",
      content:
        "Jhanvi Jain, portfolio, AI Security, LangChain, Full Stack Developer, EY India, cybersecurity",
    },
    { property: "og:title", content: "Jhanvi Jain | Portfolio" },
    {
      property: "og:description",
      content: "Full Stack Developer & AI Security Engineer — building privacy-first AI systems.",
    },
  ];
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left bg-gradient-to-r from-copper to-teal"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <div className="min-h-screen relative text-ink selection:bg-copper selection:text-cream">
      <GalleryCursor />
      <ScrollProgress />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="bg-glow" />
        <div className="bg-topology" />
        <div className="bg-dots" />
      </div>
      <main className="relative z-10 w-full overflow-hidden grain-overlay">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <AIAssistant />
      <Footer darkMode={darkMode} />
    </div>
  );
}

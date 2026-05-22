import * as React from "react";
import type { Route } from "./+types/home";
import { useState, useRef } from "react";
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
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left bg-gradient-to-r from-electric-blue to-neon-pink"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
}

function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const updateMousePos = (ev: MouseEvent) => {
      setMousePos({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePos);
    return () => window.removeEventListener("mousemove", updateMousePos);
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-[999] flex flex-col items-start gap-1"
      animate={{ x: mousePos.x + 20, y: mousePos.y + 20 }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      <div className="text-[10px] text-vivid-red font-mono tracking-widest bg-cyber-black/80 px-1 border border-vivid-red/30">
        X: {Math.round(mousePos.x).toString().padStart(4, '0')}
      </div>
      <div className="text-[10px] text-vivid-red font-mono tracking-widest bg-cyber-black/80 px-1 border border-vivid-red/30">
        Y: {Math.round(mousePos.y).toString().padStart(4, '0')}
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="bg-cyber-black text-slate-200 min-h-screen relative selection:bg-vivid-red selection:text-white cursor-crosshair">
      <CustomCursor />
      <ScrollProgress />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="relative z-10 w-full overflow-hidden scanlines film-grain">
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

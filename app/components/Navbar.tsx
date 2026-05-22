import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'INDEX', url: '#home' },
  { name: 'ORIGIN', url: '#about' },
  { name: 'MODULES', url: '#skills' },
  { name: 'ARCHIVES', url: '#projects' },
  { name: 'SYSTEM', url: '#experience' },
];

const Navbar = ({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (value: boolean) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Determine active section
      const sections = navLinks.map(l => l.url.replace('#', ''));
      for (const sec of sections.reverse()) {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sec);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'py-2 backdrop-blur-xl bg-cream/80 border-b border-ink/10'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo / Identifier */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 group"
            data-cursor-label="Home"
            data-cursor-magnetic
          >
            <div className="flex flex-col">
              <span className="text-xl font-display font-medium tracking-wide text-ink uppercase leading-none">
                Jhanvi Jain
              </span>
              <span className="text-[10px] font-mono text-ink/50 tracking-[0.2em] uppercase mt-1 group-hover:text-teal transition-colors">
                Portfolio // 2026
              </span>
            </div>
          </motion.a>

          {/* Desktop Links & Status */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1 bg-cream/70 border border-ink/10 px-4 py-2 rounded-full mr-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.url.replace('#', '');
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    data-cursor-label="Navigate"
                    data-cursor-magnetic
                    className={`relative px-4 py-1 rounded-full text-xs font-mono transition-all duration-300 ${
                      isActive ? 'text-cream bg-ink' : 'text-ink/60 hover:text-ink'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navTab"
                        className="absolute inset-0 bg-ink rounded-full z-0"
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Availability Status (Mats.zip inspired) */}
            <a 
              href="#contact"
              className="flex items-center gap-3 px-4 py-2 border border-ink/15 rounded-full hover:bg-cream/70 transition-colors group"
              data-cursor-label="Connect"
              data-cursor-magnetic
            >
              <div className="relative flex items-center justify-center w-2 h-2">
                <div className="absolute inset-0 bg-olive rounded-full animate-ping opacity-75" />
                <div className="relative w-2 h-2 bg-olive rounded-full" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink/70 group-hover:text-ink transition-colors">
                Available for Work
              </span>
            </a>

            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-2 px-4 py-2 border border-ink/15 rounded-full hover:bg-cream/70 transition-colors"
              data-cursor-label="Theme"
              data-cursor-magnetic
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink/70">
                {darkMode ? "Light" : "Dark"} Mode
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 rounded border border-ink/10 text-ink backdrop-blur-sm bg-cream/70"
            data-cursor-label="Menu"
            data-cursor-magnetic
          >
            <AnimatePresence mode="wait">
              {isOpen
                ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={20} />
                  </motion.div>
                : <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={20} />
                  </motion.div>
              }
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden border-t border-ink/10 bg-cream"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 px-4 py-4 border border-ink/10 rounded text-ink font-mono text-sm tracking-widest hover:border-copper hover:text-copper transition-all"
                  data-cursor-label="Open"
                  data-cursor-magnetic
                >
                  <span className="text-copper opacity-50">{'>'}</span> {link.name}
                </motion.a>
              ))}
              
              <div className="mt-6 flex items-center justify-center gap-3 px-4 py-4 border border-ink/10 rounded">
                <div className="relative flex items-center justify-center w-2 h-2">
                  <div className="absolute inset-0 bg-olive rounded-full animate-ping opacity-75" />
                  <div className="relative w-2 h-2 bg-olive rounded-full" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-ink/70">
                  Currently Available
                </span>
              </div>

              <button
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                className="w-full flex items-center justify-center gap-3 px-4 py-4 border border-ink/10 rounded font-mono text-xs uppercase tracking-widest text-ink/70 hover:text-ink hover:border-ink/30 transition-all"
                data-cursor-label="Theme"
                data-cursor-magnetic
              >
                Switch to {darkMode ? "Light" : "Dark"} Mode
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Mail, Github, Linkedin, Twitter, Code, Coffee } from 'lucide-react';

const quickLinks = ['Home', 'Skills', 'Projects', 'Experience', 'Contact'];

const stats = [
  { label: 'CGPA', value: '8.87', sub: 'KIIT University' },
  { label: 'Experience', value: '3+', sub: 'Years' },
  { label: 'Projects', value: '5+', sub: 'Built' },
  { label: 'Certifications', value: '14+', sub: 'Earned' },
];

const techStack = ['Python', 'LangChain', 'React', 'Flask', 'AWS', 'AutoGen', 'MySQL', 'Java'];

const Footer = ({ darkMode }: any) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-8 mt-10">
      {/* Top divider wave */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(44,107,111,0.4), transparent)' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand block */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              {/* Water drop */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
                className="w-9 h-9"
              >
                <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                  <path d="M16 4 C16 4, 6 16, 6 21 C6 26.5 10.5 30 16 30 C21.5 30 26 26.5 26 21 C26 16 16 4 16 4Z"
                    fill="url(#footerDropGrad)" />
                  <ellipse cx="12" cy="19" rx="2.5" ry="4" fill="rgba(255,255,255,0.25)" transform="rotate(-20 12 19)" />
                  <defs>
                    <linearGradient id="footerDropGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#67e8f9" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-ink">Jhanvi Jain</h3>
                <p className="text-xs text-ink/50">like the River Ganga — ever-flowing</p>
              </div>
            </div>

            <p className="text-sm text-ink/70 leading-relaxed max-w-sm">
              Full Stack Developer & AI Security Engineer building the future of intelligent security — one agentic workflow at a time.
            </p>

            {/* Contact info */}
            <div className="space-y-2">
              <a href="mailto:jhanvijain052003@gmail.com"
                className="flex items-center gap-2 text-sm text-ink/70 hover:text-teal transition-colors duration-200"
                data-cursor-label="Email"
              >
                <Mail size={14} className="text-teal" />
                jhanvijain052003@gmail.com
              </a>
              <p className="flex items-center gap-2 text-sm text-ink/70">
                <span className="text-teal text-xs">📍</span>
                India
              </p>
            </div>

            {/* Social icons */}
            <div className="flex gap-2">
              {[
                { icon: <Github size={16} />, href: 'https://github.com/jhxnvii', label: 'GitHub' },
                { icon: <Linkedin size={16} />, href: 'https://linkedin.com/in/jhanvi-jain-40394823b/', label: 'LinkedIn' },
                { icon: <Twitter size={16} />, href: 'https://x.com/Jhxnvii_e', label: 'X' },
                { icon: <Mail size={16} />, href: 'mailto:jhanvijain052003@gmail.com', label: 'Email' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.12 }}
                  whileTap={{ scale: 0.9 }}
                  title={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-ink/60 hover:text-teal transition-all duration-300"
                  style={{ background: 'rgba(44,107,111,0.08)', border: '1px solid rgba(44,107,111,0.18)' }}
                  data-cursor-label={s.label}
                  data-cursor-magnetic
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-ink mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 4 }}
                    className="text-sm text-ink/70 hover:text-teal transition-all duration-200 flex items-center gap-2"
                    data-cursor-label="Jump"
                  >
                    <span className="w-1 h-1 rounded-full bg-teal" />
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack + Support */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code size={15} className="text-teal" />
                <h4 className="text-sm font-semibold text-ink tracking-wide">Core Stack</h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-full text-xs text-ink/70"
                    style={{ background: 'rgba(44,107,111,0.08)', border: '1px solid rgba(44,107,111,0.15)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Coffee size={15} className="text-copper" />
                <h4 className="text-sm font-semibold text-ink tracking-wide">Support My Work</h4>
              </div>
              <motion.a
                href="https://buymeacoffee.com/jhanvijain"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-cream"
                style={{ background: 'linear-gradient(135deg, #c06b3e, #d7986a)', boxShadow: '0 4px 15px rgba(192,107,62,0.25)' }}
                data-cursor-label="Support"
              >
                <Coffee size={14} />
                Buy me a coffee ☕
              </motion.a>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-5 mb-10"
          style={{ borderColor: 'rgba(44,107,111,0.15)' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-ink">{stat.value}</div>
                <div className="text-xs text-ink/50 mt-0.5">{stat.label}</div>
                <div className="text-xs text-ink/40">{stat.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: '1px solid rgba(44,107,111,0.1)' }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs text-ink/50 text-center"
          >
            © {year} Jhanvi Jain — All rights reserved. Made with{' '}
            <Heart className="inline w-3 h-3 text-red-500" />{' '}
            & a lot of <span className="text-teal">💧</span> in India.
          </motion.p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4, scale: 1.1 }}
            whileTap={{ scale: 0.93 }}
            className="w-10 h-10 rounded-full flex items-center justify-center text-teal transition-all duration-300"
            style={{ background: 'rgba(44,107,111,0.1)', border: '1px solid rgba(44,107,111,0.25)' }}
            aria-label="Scroll to top"
            data-cursor-label="Top"
            data-cursor-magnetic
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
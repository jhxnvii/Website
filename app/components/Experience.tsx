import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Briefcase, Building, Target, Zap } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer | AI Security Products",
    company: "EY India",
    date: "March 2026 – Current",
    type: "Core Team",
    color: "#00f0ff", // electric-blue
    bullets: [
      "Architecting and building AI-powered security products in the Agentic SOC project using Multi-Agent Framework, LangChain, and AutoGen.",
      "Handling end-to-end data ingestion, pipelines, and model training for AI agents, from scratch to production-ready LLM systems.",
      "Designing core architecture and SLMS workflows for scalable, privacy-first AI security solutions."
    ]
  },
  {
    id: 2,
    role: "Application Security Analyst",
    company: "Flipkart",
    date: "October 2024 – February 2026",
    type: "Data Protection",
    color: "#ff2a85", // neon-pink
    bullets: [
      "Conducted security assessments on web and API applications, identifying vulnerabilities and recommending prioritized controls.",
      "Engineered Email Security, CASB, and Endpoint Protection policies, improving enterprise-wide data protection.",
      "Built Flask-based dashboards and PII masking pipelines, strengthening secure SDLC adoption."
    ]
  },
  {
    id: 3,
    role: "AI/ML Engineer",
    company: "RnPSoft Pvt. Ltd.",
    date: "May 2024 – August 2024",
    type: "Internship",
    color: "#7000ff", // deep-purple
    bullets: [
      "Led the development of a handwritten OCR model (TROCR), improving handwritten text recognition accuracy across diverse datasets.",
      "Implemented and fine-tuned machine learning models, achieving measurable improvements in model performance and inference quality.",
      "Collaborated with cross-functional teams to deliver the project within timelines."
    ]
  }
];

const ExperienceNode = ({ exp, index }: { exp: any, index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex md:justify-between items-center w-full mb-16 md:mb-24 flex-col ${
        isEven ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      <div className="w-full md:w-[45%] flex justify-start md:justify-center mb-8 md:mb-0 relative">
        <div className="absolute top-8 md:top-1/2 -translate-y-1/2 left-[-15px] md:left-auto md:right-[-45px] w-6 h-6 rounded-full bg-cyber-black border-2 border-white shadow-[0_0_15px_#fff] z-10 hidden md:block" style={{ borderColor: exp.color, boxShadow: `0 0 20px ${exp.color}` }} />
        {/* Mobile node */}
        <div className="absolute top-2 left-[-24px] w-4 h-4 rounded-full bg-cyber-black border-2 border-white md:hidden z-10" style={{ borderColor: exp.color, boxShadow: `0 0 10px ${exp.color}` }} />
        
        <div className="pl-6 md:pl-0 w-full md:flex md:flex-col md:items-end md:pr-12 text-left md:text-right">
          <span className="font-mono text-xs tracking-widest px-3 py-1 rounded inline-block mb-3" style={{ backgroundColor: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}>
            {exp.date}
          </span>
          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-shadow-sm">{exp.role}</h3>
          <div className="flex items-center md:justify-end gap-2 text-slate-400 font-mono text-sm mb-2">
            <Building size={14} style={{ color: exp.color }} />
            <span>{exp.company}</span>
            <span className="text-white/20">•</span>
            <span>{exp.type}</span>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[45%] pl-6 md:pl-12">
        <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-white/20 transition-colors">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at ${isEven ? '0%' : '100%'} 0%, ${exp.color}15 0%, transparent 70%)` }} />
          
          <ul className="space-y-4">
            {exp.bullets.map((bullet: string, i: number) => (
              <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed font-mono">
                <Target size={16} className="shrink-0 mt-0.5" style={{ color: exp.color }} />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="py-32 relative z-20" ref={containerRef}>
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-electric-blue/10 border border-electric-blue/30 rounded-sm mb-4">
            <Briefcase size={14} className="text-electric-blue" />
            <span className="text-xs uppercase tracking-widest text-electric-blue font-mono">Operations Log</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-mono text-white font-bold uppercase tracking-tight text-center">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-deep-purple">Experience</span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Cyber Center Line */}
          <div className="absolute left-[8px] md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="w-full bg-gradient-to-b from-electric-blue via-neon-pink to-deep-purple shadow-[0_0_15px_#00f0ff]"
              style={{ height: useTransform(pathLength, [0, 1], ["0%", "100%"]) }}
            />
          </div>

          <div className="relative z-10 w-full pt-10">
            {experiences.map((exp, index) => (
              <ExperienceNode key={exp.id} exp={exp} index={index} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
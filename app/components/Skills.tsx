import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Shield, Brain, Server, ShieldCheck, HardDrive, TerminalSquare, Cpu } from 'lucide-react';

const skillCategories = [
  {
    id: "ai",
    label: "AI/ML & GenAI",
    icon: <Brain size={24} />,
    color: "#ff2a85",
    items: ["LangChain", "LangGraph", "CrewAI", "AutoGen", "OpenAI SDK", "RAG Pipelines", "Vector Databases", "LlamaIndex", "Model Fine-Tuning", "TrOCR"]
  },
  {
    id: "sec",
    label: "Cybersecurity",
    icon: <Shield size={24} />,
    color: "#00f0ff",
    items: ["Microsoft Purview", "Defender", "CASB", "DLP", "SIEM", "RBAC", "EDR", "PII Detection", "Threat Modeling", "Incident Response"]
  },
  {
    id: "dev",
    label: "Full Stack",
    icon: <Code size={24} />,
    color: "#7000ff",
    items: ["React.js", "Next.js", "Node.js", "Flask", "Python", "Java", "C++", "TailwindCSS", "Framer Motion", "Three.js"]
  },
  {
    id: "cloud",
    label: "Cloud & Data",
    icon: <Server size={24} />,
    color: "#00f0ff",
    items: ["AWS", "Docker", "Git", "MySQL", "SQLite3", "CI/CD Pipeline", "Data Analytics", "Pandas", "NumPy"]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0]);

  return (
    <section id="skills" className="py-32 relative z-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-deep-purple/20 border border-deep-purple/50 rounded-sm mb-6">
            <Cpu size={14} className="text-deep-purple animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-deep-purple font-mono">System Modules</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-mono text-white font-bold uppercase tracking-tight text-center">
            Neural <span className="cyber-gradient-text">Capabilities</span>
          </h2>
        </motion.div>

        {/* AI Control Panel */}
        <div className="max-w-5xl mx-auto glass-card rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.05)]">
          <div className="grid grid-cols-1 md:grid-cols-12 h-full">
            
            {/* Sidebar Navigation */}
            <div className="md:col-span-4 border-r border-white/10 bg-cyber-black/50 p-6 flex flex-col gap-4">
              <div className="text-xs text-slate-500 font-mono tracking-widest uppercase mb-4 pl-2">Select Matrix Node:</div>
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 overflow-hidden ${
                    activeCategory.id === cat.id 
                    ? 'bg-white/10 text-white shadow-[0_0_20px_rgba(0,240,255,0.1)]' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {activeCategory.id === cat.id && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-electric-blue shadow-[0_0_10px_#00f0ff]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className={`relative z-10 transition-colors duration-300 ${activeCategory.id === cat.id ? 'text-electric-blue' : 'text-slate-500'}`}>
                    {cat.icon}
                  </div>
                  <span className="relative z-10 font-mono tracking-wide font-medium">{cat.label}</span>
                  
                  {/* Cyber detail */}
                  {activeCategory.id === cat.id && (
                    <span className="absolute right-4 text-[10px] text-electric-blue/50 font-mono animate-pulse">ACTIVE</span>
                  )}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="md:col-span-8 p-8 relative min-h-[400px] flex flex-col justify-center bg-gradient-to-br from-cyber-black/80 to-cyber-dark">
              {/* Background decorative grid */}
              <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(var(--color-electric-blue) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative z-10"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center" style={{ color: activeCategory.color, boxShadow: `0 0 20px ${activeCategory.color}40`, borderColor: activeCategory.color }}>
                      {activeCategory.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-mono text-white tracking-wide">{activeCategory.label}</h3>
                      <p className="text-slate-400 text-sm font-mono">{'>'} Uploading capabilities structure...</p>
                    </div>
                  </div>

                  {/* Skills Grid - Nodes */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {activeCategory.items.map((item, idx) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.05, borderColor: activeCategory.color }}
                        className="group relative flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5 overflow-hidden transition-all duration-300"
                        style={{ cursor: 'crosshair' }}
                      >
                        <span className="relative z-10 text-sm text-slate-300 font-mono group-hover:text-white transition-colors">{item}</span>
                        
                        {/* Hover line effect */}
                        <div 
                          className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                          style={{ backgroundColor: activeCategory.color, boxShadow: `0 0 10px ${activeCategory.color}` }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative corner brackets */}
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-electric-blue/50" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-electric-blue/50" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
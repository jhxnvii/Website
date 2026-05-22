import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Shield, Brain, Server, Cpu } from 'lucide-react';

const skillCategories = [
  {
    id: "ai",
    label: "AI/ML & GenAI",
    icon: <Brain size={24} />,
    color: "#c06b3e",
    items: ["LangChain", "LangGraph", "CrewAI", "AutoGen", "OpenAI SDK", "RAG Pipelines", "Vector Databases", "LlamaIndex", "Model Fine-Tuning", "TrOCR"]
  },
  {
    id: "sec",
    label: "Cybersecurity",
    icon: <Shield size={24} />,
    color: "#2c6b6f",
    items: ["Microsoft Purview", "Defender", "CASB", "DLP", "SIEM", "RBAC", "EDR", "PII Detection", "Threat Modeling", "Incident Response"]
  },
  {
    id: "dev",
    label: "Full Stack",
    icon: <Code size={24} />,
    color: "#6a7566",
    items: ["React.js", "Next.js", "Node.js", "Flask", "Python", "Java", "C++", "TailwindCSS", "Framer Motion", "Three.js"]
  },
  {
    id: "cloud",
    label: "Cloud & Data",
    icon: <Server size={24} />,
    color: "#2c6b6f",
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
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cream border border-ink/10 rounded-sm mb-6">
            <Cpu size={14} className="text-ink" />
            <span className="text-xs uppercase tracking-widest text-ink/70 font-mono">Expertise Index</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-ink font-bold uppercase tracking-tight text-center">
            Neural <span className="ink-gradient-text">Capabilities</span>
          </h2>
        </motion.div>

        {/* AI Control Panel */}
        <div className="max-w-5xl mx-auto soft-card rounded-2xl border border-ink/10 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 h-full">
            
            {/* Sidebar Navigation */}
            <div className="md:col-span-4 border-r border-ink/10 bg-cream/80 p-6 flex flex-col gap-4">
              <div className="text-xs text-ink/50 font-mono tracking-widest uppercase mb-4 pl-2">Select Matrix Node:</div>
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat)}
                  data-cursor-label="Select"
                  data-cursor-magnetic
                  className={`relative flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 overflow-hidden ${
                    activeCategory.id === cat.id 
                    ? 'bg-cream text-ink shadow-[0_0_20px_rgba(17,17,17,0.08)]' 
                    : 'text-ink/60 hover:bg-cream/70 hover:text-ink'
                  }`}
                >
                  {activeCategory.id === cat.id && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-teal"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className={`relative z-10 transition-colors duration-300 ${activeCategory.id === cat.id ? 'text-teal' : 'text-ink/50'}`}>
                    {cat.icon}
                  </div>
                  <span className="relative z-10 font-mono tracking-wide font-medium">{cat.label}</span>
                  
                  {/* Cyber detail */}
                  {activeCategory.id === cat.id && (
                    <span className="absolute right-4 text-[10px] text-teal/60 font-mono">ACTIVE</span>
                  )}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="md:col-span-8 p-8 relative min-h-[400px] flex flex-col justify-center bg-cream">
              {/* Background decorative grid */}
              <div className="absolute inset-0 z-0 opacity-15" style={{ backgroundImage: 'radial-gradient(var(--color-ink) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
              
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
                    <div className="w-12 h-12 rounded-full border border-ink/15 flex items-center justify-center bg-cream/70" style={{ color: activeCategory.color, boxShadow: `0 0 20px ${activeCategory.color}40`, borderColor: activeCategory.color }}>
                      {activeCategory.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-display text-ink tracking-wide">{activeCategory.label}</h3>
                      <p className="text-ink/60 text-sm font-mono">{'>'} Loading capability map...</p>
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
                        className="group relative flex items-center justify-between p-3 rounded-lg border border-ink/10 bg-cream/70 overflow-hidden transition-all duration-300"
                        data-cursor-label="Skill"
                      >
                        <span className="relative z-10 text-sm text-ink/70 font-mono group-hover:text-ink transition-colors">{item}</span>
                        
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
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-ink/30" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-ink/30" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
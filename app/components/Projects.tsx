import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X, Shield, MessageSquare, Eye, Layers } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'PII Extractor',
    subtitle: 'Evidence_01',
    description: 'A Chrome extension that detects and redacts personal data (PII) on websites in real-time. Prevents leaks to Generative AI engines.',
    icon: <Shield size={24} />,
    color: '#c06b3e',
    stack: ['React', 'Flask', 'Regex'],
    github: 'https://github.com/jhxnvii/PII-CHROME-EXTENSION',
    details: 'Engineered a React-based dashboard to audit detection logs, application logs, and errors with MySQL backend. Enabled real-time monitoring and reporting of PII exposure.',
  },
  {
    id: 2,
    title: 'NLP + RAG Core',
    subtitle: 'Evidence_02',
    description: 'An NLP-based chatbot using Google Gemma 2B with Retrieval Augmented Generation (RAG) for context-aware responses.',
    icon: <MessageSquare size={24} />,
    color: '#2c6b6f',
    stack: ['Python', 'Gemma 2B', 'LlamaIndex'],
    github: 'https://github.com/jhxnvii/Chatbot-NLP',
    details: 'Implements a sophisticated chatbot leveraging NLP with Google Gemma 2B and RAG pipelines. It retrieves relevant context from a knowledge base before generating responses.',
  },
  {
    id: 3,
    title: 'OCR Detect: TrOCR',
    subtitle: 'Evidence_03',
    description: 'Computer vision model deployed at RnP Soft for converting handwritten text to digital format with optimized ML algorithms.',
    icon: <Eye size={24} />,
    color: '#6a7566',
    stack: ['Python', 'TrOCR', 'Vision Transformer'],
    github: null,
    details: 'Led the development of a handwritten OCR detection model using TrOCR technology. The model utilizes advanced ML algorithms and computer vision to convert handwritten text into digital format with exceptional accuracy.',
  },
  {
    id: 4,
    title: 'Email Classifier',
    subtitle: 'Evidence_04',
    description: 'Categorizes Confidential, PII, and Internal emails using rule-based and keyword-scoring methods.',
    icon: <Shield size={24} />,
    color: '#2c6b6f',
    stack: ['Python', 'Gradio', 'Rule-based AI'],
    github: null,
    details: 'Developed an email classification system on Google Colab to categorize Confidential, PII, and Internal emails. Integrated Gradio interface for interactive classification visualization.',
  },
  {
    id: 5,
    title: 'Agentic SOC',
    subtitle: 'Evidence_05',
    description: 'AI-powered security operations using Multi-Agent Framework for automated threat detection and response at EY.',
    icon: <Layers size={24} />,
    color: '#c06b3e',
    stack: ['LangChain', 'AutoGen', 'LLM'],
    github: null,
    details: 'Architecting AI-powered security products in the Agentic SOC project at EY India using Multi-Agent Framework, LangChain, and AutoGen. Designing core architecture and SLMS workflows for scalable AI security solutions.',
  },
];

const ForensicCard = ({ project, onClick }: { project: any, onClick: () => void }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="relative group hover-lift"
      data-cursor-label="Open"
      data-cursor-magnetic
    >
      <div className="absolute inset-0 bg-cream/70 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="absolute -left-2 top-4 bottom-4 w-1 scale-y-0 origin-center group-hover:scale-y-100 transition-transform duration-300" style={{ backgroundColor: project.color }} />
      
      <div className="border border-ink/10 bg-cream/80 p-6 relative overflow-hidden h-full flex flex-col group-hover:border-ink/30 transition-colors">
        
        <div className="flex justify-between items-start mb-8">
          <div className="w-10 h-10 border border-ink/10 flex flex-col items-center justify-center bg-cream/80 opacity-70 group-hover:opacity-100 transition-opacity" style={{ color: project.color }}>
            {project.icon}
          </div>
          <div className="text-right">
            <span className="text-[10px] font-mono tracking-widest text-ink/50 block uppercase">File ID</span>
            <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 border mt-1 inline-block" style={{ color: project.color, borderColor: `${project.color}50` }}>
              {project.subtitle}
            </span>
          </div>
        </div>

        <h3 className="text-2xl font-display font-medium text-ink mb-3">{project.title}</h3>
        <p className="text-ink/60 text-xs leading-relaxed mb-6 font-mono flex-1 border-l border-ink/10 pl-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-ink/10">
          {project.stack.map((tech: string, i: number) => (
            <span key={i} className="text-[10px] font-mono text-ink/50 uppercase tracking-widest">
              [{tech}]
            </span>
          ))}
        </div>

        {/* Hover technical overlay */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: project.color }} />
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="projects" className="py-32 relative z-20 border-t border-ink/10 bg-cream">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end border-b border-ink/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-copper rounded-full animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-copper font-mono">Gallery Access</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-ink tracking-tight">
              Evidence <span className="italic text-ink/50 font-light">Archive</span>
            </h2>
          </div>
          <div className="text-[10px] font-mono tracking-widest text-ink/50 uppercase mt-4 md:mt-0 text-right">
            Files: 0{projects.length}<br/>
            Status: CURATED
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ForensicCard key={project.id} project={project} onClick={() => { setSelectedProject(project); document.body.style.overflow = 'hidden'; }} />
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-cream/95 flex items-center justify-center z-[200] p-4 select-none"
            >
              <div className="absolute top-4 left-4 text-copper font-mono text-[10px] tracking-widest">CURATION MODE</div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-3xl w-full border border-ink/20 bg-cream relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: selectedProject.color }} />
                
                <div className="p-8">
                  <button onClick={closeModal} className="absolute top-6 right-6 text-ink/40 hover:text-ink transition-colors" data-cursor-label="Close">
                    <X size={24} />
                  </button>
                  
                  <div className="flex justify-between items-start mb-8 border-b border-ink/10 pb-6">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest mb-2 block uppercase text-ink/50">
                        {selectedProject.subtitle}
                      </span>
                      <h3 className="text-4xl font-display text-ink">{selectedProject.title}</h3>
                    </div>
                    <div className="w-12 h-12 border border-ink/20 flex items-center justify-center" style={{ color: selectedProject.color, backgroundColor: `${selectedProject.color}10` }}>
                      {selectedProject.icon}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-4 border border-ink/10 bg-cream/70 font-mono text-sm leading-relaxed text-ink/70">
                      <span className="text-[10px] text-copper uppercase tracking-widest block mb-2">Subject Details:</span>
                      {selectedProject.details}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border border-ink/10 p-4">
                        <h4 className="text-[10px] font-mono text-ink/50 uppercase tracking-widest mb-2">Tech Stack Extract</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.stack.map((tech: string, i: number) => (
                            <span key={i} className="px-2 py-1 bg-cream text-[10px] font-mono text-ink/70 uppercase tracking-widest border border-ink/10">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="border border-ink/10 p-4 flex flex-col justify-center">
                        <h4 className="text-[10px] font-mono text-ink/50 uppercase tracking-widest mb-2">Actions</h4>
                        {selectedProject.github ? (
                          <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-ink/20 text-ink text-xs font-mono uppercase tracking-widest hover:bg-ink hover:text-cream transition-colors" data-cursor-label="Open">
                            <Github size={14} /> Open Repository
                          </a>
                        ) : (
                          <span className="text-xs font-mono text-copper uppercase tracking-widest">
                            [CLASSIFIED / NO SOURCE]
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
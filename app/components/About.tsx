import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';

function CyberOrb() {
  const mesh = useRef<any>(null);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.2;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <Sphere ref={mesh} args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#ff2a85"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
          wireframe={true}
        />
      </Sphere>
    </Float>
  );
}

const timelineData = [
  { year: "2018-2021", title: "Early Spark & Foundation", desc: "Developed a deep interest in computing systems and foundational programming." },
  { year: "2021-2025", title: "B.Tech Computer Science @ KIIT", desc: "Mastered full-stack development, algorithms, and deep cybersecurity integration." },
  { year: "2024", title: "AI/ML Engineer @ RnPSoft", desc: "Led the development of advanced OCR systems utilizing deep learning paradigms." },
  { year: "2024-2026", title: "AppSec Analyst @ Flipkart", desc: "Engineered robust PII masking pipelines and advanced enterprise data protection policies." },
  { year: "2026-Present", title: "AI Security Engineer @ EY", desc: "Architecting Agentic SOC platforms fusing GenAI with cybersecurity frameworks." }
];

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" className="py-32 relative z-20" ref={containerRef}>
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: 3D Object & Personality text */}
          <div className="relative h-full min-h-[500px] flex flex-col justify-center">
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
              <Canvas camera={{ position: [0, 0, 4] }}>
                <ambientLight intensity={1} />
                <directionalLight position={[2, 1, 1]} intensity={2} color="#00f0ff" />
                <directionalLight position={[-2, -1, -1]} intensity={2} color="#ff2a85" />
                <CyberOrb />
              </Canvas>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 p-8 glass-card rounded-2xl border border-electric-blue/20 max-w-md mx-auto lg:mx-0 backdrop-blur-md"
            >
              <h2 className="text-3xl font-mono text-white mb-6 uppercase tracking-wider">
                <span className="text-electric-blue">01.</span> Origin Story
              </h2>
              <p className="text-slate-300 leading-relaxed font-mono text-sm mb-6">
                I am <span className="text-neon-pink font-semibold">Artist</span> + <span className="text-electric-blue font-semibold">Engineer</span> + <span className="text-deep-purple font-semibold">Researcher</span>. 
                My passion lies at the intersection of highly secure computing domains and incredibly intuitive generative AI models.
              </p>
              <p className="text-slate-300 leading-relaxed font-mono text-sm">
                Beyond my screen, I bring systems to life using critical thinking, while retaining the aesthetic sensibilities of a painter. 
                I constantly search for elegance in logic.
              </p>
            </motion.div>
          </div>

          {/* Right: Animated Timeline */}
          <div className="relative">
            <h2 className="text-3xl font-mono text-white mb-12 uppercase tracking-wider">
               Journey Log
            </h2>
            
            <div className="relative pl-8">
              {/* Timeline glow line */}
              <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="w-full bg-gradient-to-b from-electric-blue via-deep-purple to-neon-pink"
                  style={{ height: lineHeight }}
                />
              </div>

              <div className="space-y-12">
                {timelineData.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="relative"
                  >
                    {/* Node Dot */}
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-cyber-black border-2 border-electric-blue shadow-[0_0_10px_#00f0ff] z-10" />
                    
                    <span className="text-xs font-mono text-neon-pink tracking-widest uppercase mb-1 block">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;

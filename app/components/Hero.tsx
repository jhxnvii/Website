import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Search, Zap, ShieldAlert } from 'lucide-react';

function Custom3DObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[2.5, 2]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#111111"
        distort={0.3}
        speed={1.5}
        wireframe={true}
        transparent={true}
        opacity={0.3}
      />
      {/* Add a subtle red inner glow */}
      <meshStandardMaterial 
        color="#c06b3e" 
        wireframe={true} 
        transparent={true} 
        opacity={0.05} 
        blending={THREE.AdditiveBlending} 
      />
    </Icosahedron>
  );
}

const Hero = () => {
  const [time, setTime] = useState("");
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString());
    };
    const timer = setInterval(updateTime, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden w-full gallery-hero">
      
      {/* Background 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} intensity={1.2} color="#2c6b6f" />
          <directionalLight position={[-2, -2, -5]} intensity={1.4} color="#c06b3e" />
          <Custom3DObject />
        </Canvas>
      </div>

      {/* Killian Herzer style HUD Corners */}
      <div className="absolute top-24 left-6 z-30 pointer-events-none hidden md:block">
        <div className="text-[10px] font-mono text-ink/70 tracking-widest uppercase">
          <span className="opacity-50">STATUS:</span> ONLINE<br/>
          <span className="opacity-50">STUDIO:</span> 0x88F<br/>
          <span className="opacity-50">LATENCY:</span> 12ms
        </div>
      </div>
      <div className="absolute top-24 right-6 z-30 pointer-events-none hidden md:block text-right">
        <div className="text-[10px] font-mono text-teal tracking-widest uppercase">
          <span className="opacity-50">SESSION:</span> LIVE<br/>
          <span className="opacity-50">UPLINK:</span> SECURE<br/>
          <span className="animate-pulse text-copper">● REC</span>
        </div>
      </div>
      <div className="absolute bottom-6 left-6 z-30 pointer-events-none hidden md:block">
        <div className="text-[10px] font-mono text-ink/50 tracking-widest">
          {time}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col items-center justify-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-ink/10 bg-cream/70 backdrop-blur-sm mb-8"
          >
            <ShieldAlert size={14} className="text-copper" />
            <span className="text-ink text-[10px] font-mono uppercase tracking-[0.3em]">
              Studio Log: Portfolio
            </span>
          </motion.div>

          {/* Typography split: Serif for main, Mono for sub */}
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
            className="text-5xl md:text-7xl lg:text-[130px] font-display font-medium text-ink tracking-tight leading-none mb-6"
          >
            Jhanvi
            <br />
            <span className="italic font-light text-ink/60">Jain</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-4 text-xs font-mono tracking-[0.2em] uppercase text-ink/60 max-w-xl text-center"
          >
            <span className="text-ink">AI/ML Engineer</span>
            <span className="hidden md:inline text-copper">|</span>
            <span className="text-ink">Cyber Security</span>
            <span className="hidden md:inline text-copper">|</span>
            <span className="text-ink">Full Stack</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex gap-6"
          >
             <a
                href="#projects"
                className="group relative px-6 py-3 bg-ink text-cream overflow-hidden border border-ink flex items-center gap-2 transition-transform hover:scale-105"
                data-cursor-label="View"
                data-cursor-magnetic
              >
                <Search size={16} />
                <span className="font-mono text-xs font-bold uppercase tracking-widest">View Archive</span>
              </a>
              <a
                href="#about"
                className="group relative px-6 py-3 bg-transparent text-ink overflow-hidden border border-ink/20 flex items-center gap-2 hover:bg-cream/70 transition-transform hover:scale-105"
                data-cursor-label="Read"
                data-cursor-magnetic
              >
                <Zap size={16} className="text-teal" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest">Origin Notes</span>
              </a>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
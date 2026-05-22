import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Palette, Image as ImageIcon } from 'lucide-react';

const certifications = [
  { name: "AI for Everyone (Coursera)", org: "Deeplearning.ai" },
  { name: "GenAI for Everyone (Coursera)", org: "Deeplearning.ai" },
  { name: "GDPR Foundation", org: "Packt / Coursera" },
  { name: "AWS Academy Cloud", org: "AWS" },
  { name: "Foundations of Data Science", org: "Coursera" },
  { name: "PCAP Python 1 & 2", org: "Cisco Networking" },
  { name: "Cybersecurity Essentials", org: "Cisco Networking" },
  { name: "Flipkart ISCP Trainee", org: "Flipkart" },
  { name: "Google Data Analytics", org: "Coursera" }
];

const artworks = [
  { title: "Madhubani Painting", type: "Traditional", color: "#ff2a85" },
  { title: "Acrylic Art", type: "ModernCanvas", color: "#00f0ff" },
  { title: "Oil Painting", type: "Easel Work", color: "#7000ff" },
  { title: "Glass Painting", type: "Transparent", color: "#00f0ff" }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-32 relative z-20">
      <div className="container mx-auto px-6">
        
        {/* Certifications Row */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-deep-purple/10 border border-deep-purple/30 rounded-sm mb-4">
              <Award size={14} className="text-deep-purple" />
              <span className="text-xs uppercase tracking-widest text-deep-purple font-mono">Verified Credentials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-mono text-white font-bold uppercase tracking-tight">
              Honors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-deep-purple to-neon-pink">Certifications</span>
            </h2>
          </motion.div>

          {/* Scrolling ticker or grid for certs */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-4 rounded-xl border border-white/5 hover:border-white/20 transition-all flex items-start gap-4"
              >
                <div className="mt-1 opacity-50"><Star size={16} className="text-electric-blue" /></div>
                <div>
                  <h3 className="text-sm font-semibold text-white leading-snug">{cert.name}</h3>
                  <p className="text-xs font-mono text-slate-500 mt-1">{cert.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Art Gallery Row */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col items-end text-right"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-pink/10 border border-neon-pink/30 rounded-sm mb-4">
              <Palette size={14} className="text-neon-pink" />
              <span className="text-xs uppercase tracking-widest text-neon-pink font-mono">Creative Outlet</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-mono text-white font-bold uppercase tracking-tight">
              Virtual <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-electric-blue">Gallery</span>
            </h2>
          </motion.div>

          {/* Minimal conceptual frames */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {artworks.map((art, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative h-64 glass-card rounded-md border p-2 flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden transition-all duration-500"
                style={{ borderColor: `${art.color}40`, boxShadow: `0 10px 40px ${art.color}15` }}
              >
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
                <div className="absolute top-0 bottom-0 w-[1px] bg-white/10 left-10 pointer-events-none" />
                <div className="absolute top-10 bottom-10 w-[1px] bg-white/10 right-10 pointer-events-none" />
                <div className="absolute left-0 right-0 h-[1px] bg-white/10 top-10 pointer-events-none" />
                <div className="absolute left-10 right-10 h-[1px] bg-white/10 bottom-10 pointer-events-none" />
                
                <ImageIcon size={32} className="opacity-20 mb-4 transition-opacity group-hover:opacity-100" style={{ color: art.color }} />
                <h3 className="text-xl font-display font-semibold text-white relative z-10">{art.title}</h3>
                <span className="text-xs font-mono tracking-widest uppercase mt-2 relative z-10" style={{ color: art.color }}>{art.type}</span>

                <div className="absolute inset-0 flex items-center justify-center bg-cyber-black/90 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-20">
                  <span className="px-4 py-2 border rounded-full text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors" style={{ borderColor: art.color }}>
                    View Artwork
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;

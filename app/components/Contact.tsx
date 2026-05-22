import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, CheckCircle, Mail, MapPin, Loader, TerminalSquare, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => setFormState('success'), 2000); // Simulate network request
  };

  return (
    <section id="contact" className="py-32 relative z-20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col items-center"
        >
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-pink/10 border border-neon-pink/30 rounded-sm mb-4">
            <TerminalSquare size={14} className="text-neon-pink" />
            <span className="text-xs uppercase tracking-widest text-neon-pink font-mono">Secure COM Channel</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-mono text-white font-bold uppercase tracking-tight text-center">
            Establish <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-deep-purple">Connection</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Interactive Data/Globe */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-8 relative"
          >
            <div className="glass-card p-8 rounded-2xl border border-white/10 relative overflow-hidden h-full min-h-[400px] flex flex-col">
              {/* Cyber Background elements */}
              <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-electric-blue/5 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-[50%] h-[50%] rounded-tl-full bg-deep-purple/10 blur-[100px] pointer-events-none" />
              
              <h3 className="text-2xl font-mono text-white mb-6">Network Node: <span className="text-electric-blue">INDIA</span></h3>
              
              <div className="space-y-6 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-electric-blue">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-1">Location Coordinates</h4>
                    <p className="text-white font-mono">Bhubaneswar, India</p>
                    <p className="text-slate-500 font-mono text-xs mt-1">LAT: 20.2961° N, LONG: 85.8245° E</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-neon-pink">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-1">Direct Ping</h4>
                    <a href="mailto:jhanvijain052003@gmail.com" className="text-white font-mono hover:text-neon-pink transition-colors">
                      jhanvijain052003@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-deep-purple">
                    <AlertCircle size={20} />
                  </div>
                  <div>
                    <h4 className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-1">System Status</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
                      <span className="text-electric-blue font-mono text-sm">Receiving Packets...</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Globe ASCII/Canvas placeholder */}
              <div className="mt-8 text-center opacity-30 select-none hidden md:block">
                <pre className="text-[6px] md:text-[8px] leading-[6px] md:leading-[8px] text-electric-blue font-mono text-center overflow-hidden">
{`          .,-,--,.
        .,-   ...  .  --.
     ./   .       .      . \.
    / .        . .          \\
   / .   .       .   ...     \\
  |  .      .       .  ..     |
 |  .         .           .    |
 |     .     .          .      |
  |  .          .         .   |
   \\    ...       .    .     /
    \\         .    .        /
     \`\.     .    .       ./
       \`--.  .   .  .--'
           \`--..--'`}
                </pre>
              </div>
            </div>
          </motion.div>

          {/* Right: Terminal Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl border border-white/10 relative overflow-hidden bg-cyber-black/80 h-full flex flex-col">
              
              {/* Terminal Header */}
              <div className="flex items-center gap-2 p-4 border-b border-white/10 bg-white/5">
                <div className="flex gap-1.5 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-500/50" />
                </div>
                <Terminal size={14} className="text-slate-500" />
                <span className="text-xs font-mono text-slate-500">root@portfolio:~# ./initiate_contact.sh</span>
              </div>

              {/* Terminal Body */}
              <div className="p-6 md:p-8 flex-1">
                <AnimatePresence mode="wait">
                  {formState === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center h-full text-center py-12"
                    >
                      <div className="w-20 h-20 bg-neon-pink/10 rounded-full flex items-center justify-center mb-6 relative">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", bounce: 0.5 }}
                        >
                          <CheckCircle size={40} className="text-neon-pink" />
                        </motion.div>
                        <div className="absolute inset-0 border-2 border-neon-pink rounded-full animate-ping opacity-20" />
                      </div>
                      <h3 className="text-2xl font-mono text-white mb-2">Transmission Successful!</h3>
                      <p className="text-slate-400 font-mono text-sm max-w-sm">
                        {"{"}
                        <br/>
                        <span className="pl-4">"status": 200,</span>
                        <br/>
                        <span className="pl-4">"message": "I will get back to you securely."</span>
                        <br/>
                        {"}"}
                      </p>
                      <button 
                        onClick={() => { setFormState('idle'); setFormData({ name: '', email: '', message: '' }); }}
                        className="mt-8 px-6 py-2 border border-white/20 text-slate-300 rounded font-mono hover:bg-white/5 transition-colors text-sm"
                      >
                        Reset Terminal
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6 flex flex-col h-full justify-between"
                    >
                      <div className="space-y-6">
                        <div className="group relative">
                          <label htmlFor="name" className="text-xs font-mono text-slate-500 uppercase tracking-widest pl-1">Identifier</label>
                          <div className="mt-2 relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-electric-blue font-mono">{'>'}</span>
                            <input
                              type="text"
                              id="name"
                              required
                              disabled={formState === 'loading'}
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full bg-cyber-dark/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white font-mono focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/50 transition-all placeholder-slate-600 disabled:opacity-50"
                              placeholder="Enter your name"
                            />
                          </div>
                        </div>

                        <div className="group relative">
                          <label htmlFor="email" className="text-xs font-mono text-slate-500 uppercase tracking-widest pl-1">Return Address</label>
                          <div className="mt-2 relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-deep-purple font-mono">{'>'}</span>
                            <input
                              type="email"
                              id="email"
                              required
                              disabled={formState === 'loading'}
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full bg-cyber-dark/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white font-mono focus:outline-none focus:border-deep-purple focus:ring-1 focus:ring-deep-purple/50 transition-all placeholder-slate-600 disabled:opacity-50"
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>

                        <div className="group relative">
                          <label htmlFor="message" className="text-xs font-mono text-slate-500 uppercase tracking-widest pl-1">Payload</label>
                          <div className="mt-2 relative">
                            <span className="absolute left-4 top-4 text-neon-pink font-mono">{'>'}</span>
                            <textarea
                              id="message"
                              required
                              disabled={formState === 'loading'}
                              rows={4}
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                              className="w-full bg-cyber-dark/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white font-mono focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink/50 transition-all placeholder-slate-600 resize-none disabled:opacity-50"
                              placeholder="Type your message..."
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={formState === 'loading'}
                        className="w-full relative mt-8 overflow-hidden rounded border border-electric-blue group disabled:opacity-75 disabled:cursor-not-allowed"
                      >
                        <div className="absolute inset-0 bg-electric-blue/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <div className="relative z-10 px-6 py-4 flex items-center justify-center gap-3 font-mono font-bold text-electric-blue uppercase tracking-widest group-hover:text-white transition-colors">
                          {formState === 'loading' ? (
                            <>
                              <Loader size={18} className="animate-spin text-white" />
                              <span className="text-white">Transmitting...</span>
                            </>
                          ) : (
                            <>
                              <Send size={18} />
                              <span>Execute SEND</span>
                            </>
                          )}
                        </div>
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
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
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-cream border border-ink/10 rounded-sm mb-4">
            <TerminalSquare size={14} className="text-ink" />
            <span className="text-xs uppercase tracking-widest text-ink/70 font-mono">Secure COM Channel</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-ink font-bold uppercase tracking-tight text-center">
            Establish <span className="ink-gradient-text">Connection</span>
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
            <div className="glass-card p-8 rounded-2xl border border-ink/10 relative overflow-hidden h-full min-h-[400px] flex flex-col hover-lift" data-cursor-label="Info">
              {/* Cyber Background elements */}
              <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-teal/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-[50%] h-[50%] rounded-tl-full bg-copper/10 blur-[100px] pointer-events-none" />
              
              <h3 className="text-2xl font-display text-ink mb-6">Network Node: <span className="text-teal">INDIA</span></h3>
              
              <div className="space-y-6 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-cream border border-ink/10 flex items-center justify-center text-teal">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-ink/60 font-mono text-xs tracking-widest uppercase mb-1">Location Coordinates</h4>
                    <p className="text-ink font-mono">Bhubaneswar, India</p>
                    <p className="text-ink/50 font-mono text-xs mt-1">LAT: 20.2961° N, LONG: 85.8245° E</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-cream border border-ink/10 flex items-center justify-center text-copper">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-ink/60 font-mono text-xs tracking-widest uppercase mb-1">Direct Ping</h4>
                    <a href="mailto:jhanvijain052003@gmail.com" className="text-ink font-mono hover:text-copper transition-colors" data-cursor-label="Email">
                      jhanvijain052003@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-cream border border-ink/10 flex items-center justify-center text-olive">
                    <AlertCircle size={20} />
                  </div>
                  <div>
                    <h4 className="text-ink/60 font-mono text-xs tracking-widest uppercase mb-1">System Status</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-olive animate-pulse" />
                      <span className="text-olive font-mono text-sm">Receiving Packets...</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Globe ASCII/Canvas placeholder */}
              <div className="mt-8 text-center opacity-30 select-none hidden md:block">
                <pre className="text-[6px] md:text-[8px] leading-[6px] md:leading-[8px] text-teal font-mono text-center overflow-hidden">
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
            <div className="glass-card rounded-2xl border border-ink/10 relative overflow-hidden bg-cream/80 h-full flex flex-col">
              
              {/* Terminal Header */}
              <div className="flex items-center gap-2 p-4 border-b border-ink/10 bg-cream/70">
                <div className="flex gap-1.5 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-500/50" />
                </div>
                <Terminal size={14} className="text-ink/50" />
                <span className="text-xs font-mono text-ink/50">root@portfolio:~# ./initiate_contact.sh</span>
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
                      <div className="w-20 h-20 bg-copper/10 rounded-full flex items-center justify-center mb-6 relative">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", bounce: 0.5 }}
                        >
                          <CheckCircle size={40} className="text-copper" />
                        </motion.div>
                        <div className="absolute inset-0 border-2 border-copper rounded-full animate-ping opacity-20" />
                      </div>
                      <h3 className="text-2xl font-display text-ink mb-2">Transmission Successful!</h3>
                      <p className="text-ink/60 font-mono text-sm max-w-sm">
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
                        className="mt-8 px-6 py-2 border border-ink/20 text-ink rounded font-mono hover:bg-cream transition-colors text-sm"
                        data-cursor-label="Reset"
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
                          <label htmlFor="name" className="text-xs font-mono text-ink/50 uppercase tracking-widest pl-1">Identifier</label>
                          <div className="mt-2 relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-teal font-mono">{'>'}</span>
                            <input
                              type="text"
                              id="name"
                              required
                              disabled={formState === 'loading'}
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full bg-cream/70 border border-ink/10 rounded-lg pl-10 pr-4 py-3 text-ink font-mono focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 transition-all placeholder-ink/40 disabled:opacity-50"
                              placeholder="Enter your name"
                            />
                          </div>
                        </div>

                        <div className="group relative">
                          <label htmlFor="email" className="text-xs font-mono text-ink/50 uppercase tracking-widest pl-1">Return Address</label>
                          <div className="mt-2 relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-olive font-mono">{'>'}</span>
                            <input
                              type="email"
                              id="email"
                              required
                              disabled={formState === 'loading'}
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full bg-cream/70 border border-ink/10 rounded-lg pl-10 pr-4 py-3 text-ink font-mono focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive/20 transition-all placeholder-ink/40 disabled:opacity-50"
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>

                        <div className="group relative">
                          <label htmlFor="message" className="text-xs font-mono text-ink/50 uppercase tracking-widest pl-1">Payload</label>
                          <div className="mt-2 relative">
                            <span className="absolute left-4 top-4 text-copper font-mono">{'>'}</span>
                            <textarea
                              id="message"
                              required
                              disabled={formState === 'loading'}
                              rows={4}
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                              className="w-full bg-cream/70 border border-ink/10 rounded-lg pl-10 pr-4 py-3 text-ink font-mono focus:outline-none focus:border-copper focus:ring-1 focus:ring-copper/20 transition-all placeholder-ink/40 resize-none disabled:opacity-50"
                              placeholder="Type your message..."
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={formState === 'loading'}
                        className="w-full relative mt-8 overflow-hidden rounded border border-teal group disabled:opacity-75 disabled:cursor-not-allowed"
                        data-cursor-label="Send"
                      >
                        <div className="absolute inset-0 bg-teal/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <div className="relative z-10 px-6 py-4 flex items-center justify-center gap-3 font-mono font-bold text-teal uppercase tracking-widest group-hover:text-ink transition-colors">
                          {formState === 'loading' ? (
                            <>
                              <Loader size={18} className="animate-spin text-ink" />
                              <span className="text-ink">Transmitting...</span>
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
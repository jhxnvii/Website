import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Cpu } from 'lucide-react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{sender: 'user' | 'bot', text: string}[]>([
    { sender: 'bot', text: 'Hello! I am Jhanvi\'s digital assistant. How can I guide you through her portfolio?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    setInput('');
    setIsTyping(true);

    // Simulated simple bot responses
    setTimeout(() => {
      let reply = "I'm a simple mock assistant to demonstrate the cyber aesthetic! Feel free to reach out to Jhanvi directly for detailed technical discussions.";
      const query = input.toLowerCase();
      
      if (query.includes('skill') || query.includes('tech')) {
        reply = "Jhanvi specializes in Agentic AI (LangChain, CrewAI), Application Security (Data Protection, Threat Modeling), and Full Stack Development (React, Next.js, Python).";
      } else if (query.includes('experience') || query.includes('work')) {
        reply = "She currently works as a Full Stack Developer | AI Security Products at EY India, and previously as an AppSec Analyst at Flipkart.";
      } else if (query.includes('contact') || query.includes('email')) {
        reply = "You can ping her through the Contact Terminal section at the bottom, or directly email her at jhanvijain052003@gmail.com.";
      } else if (query.includes('project')) {
        reply = "She has built PII redaction Chrome extensions, an NLP RAG Chatbot, and Agentic SOC architectures. Check out the Execution Matrix above!";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 3, type: "spring" }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-[150] w-14 h-14 rounded-full flex items-center justify-center bg-cyber-black border border-electric-blue shadow-[0_0_20px_rgba(0,240,255,0.4)] ${isOpen ? 'hidden' : 'flex'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="absolute inset-0 rounded-full bg-electric-blue/20 animate-ping opacity-75" />
        <Bot size={24} className="text-electric-blue relative z-10" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[200] w-80 sm:w-96 glass-card border border-white/20 rounded-2xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(112,0,255,0.3)]"
            style={{ height: '500px', maxHeight: 'calc(100vh - 40px)' }}
          >
            {/* Header */}
            <div className="bg-cyber-dark p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neon-pink/20 flex items-center justify-center border border-neon-pink/50">
                  <Cpu size={16} className="text-neon-pink" />
                </div>
                <div>
                  <h3 className="text-white font-mono text-sm font-bold">J.A.I.N. Core</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 rounded-lg ${
                      msg.sender === 'user' 
                      ? 'bg-electric-blue/20 text-electric-blue border border-electric-blue/30 rounded-br-none' 
                      : 'bg-white/5 text-slate-300 border border-white/10 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-lg bg-white/5 border border-white/10 rounded-bl-none flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-electric-blue/50 flex flex-col items-center justify-center overflow-hidden">
                      <motion.div 
                        animate={{ height: ['20%', '100%', '20%'] }} 
                        transition={{ repeat: Infinity, duration: 1 }} 
                        className="w-full bg-electric-blue opacity-50" 
                      />
                    </div>
                    <span className="text-slate-500 text-xs">Synthesizing...</span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 bg-cyber-dark/80 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Query system..."
                className="flex-1 bg-cyber-black border border-white/10 rounded-lg px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-neon-pink"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 rounded-lg bg-electric-blue/20 text-electric-blue border border-electric-blue/30 flex items-center justify-center disabled:opacity-50 transition-colors hover:bg-electric-blue/30"
              >
                <Send size={16} />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;

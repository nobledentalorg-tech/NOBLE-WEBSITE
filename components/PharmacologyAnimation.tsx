'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimationProps {
  type: 'ions' | 'shield' | 'bacteria-kill' | 'none';
}

export const PharmacologyAnimation: React.FC<AnimationProps> = ({ type }) => {
  if (type === 'none') return null;

  if (type === 'ions') {
    return (
      <div className="relative w-full h-full bg-slate-950 rounded-2xl overflow-hidden flex items-center justify-center">
        {/* Enamel Surface */}
        <div className="absolute inset-y-0 right-0 w-1/3 bg-blue-900/30 border-l-4 border-blue-500/50 flex flex-col justify-around p-2">
           {[...Array(5)].map((_, i) => (
             <div key={i} className="w-full h-4 bg-blue-400/20 rounded-full border border-blue-400/40 animate-pulse" />
           ))}
        </div>
        
        {/* Floating Ions */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: -100, y: Math.random() * 100 - 50, opacity: 0 }}
            animate={{ 
              x: [null, 200], 
              opacity: [0, 1, 1, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className={`absolute w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-black text-white shadow-lg ${i % 2 === 0 ? 'bg-blue-500' : 'bg-cyan-400'}`}
          >
            {i % 2 === 0 ? 'Ca²⁺' : 'PO₄³⁻'}
          </motion.div>
        ))}
        
        <div className="absolute top-4 left-4">
           <p className="text-xs font-black uppercase text-blue-400 tracking-widest">Remineralization Flux ACTIVE</p>
        </div>
      </div>
    );
  }

  if (type === 'shield') {
    return (
      <div className="relative w-full h-full bg-slate-950 rounded-2xl overflow-hidden">
        {/* Dentinal Tubules */}
        <div className="absolute inset-0 flex justify-around items-center px-12">
            {[...Array(4)].map((_, i) => (
               <div key={i} className="w-12 h-32 bg-amber-900/20 border-x-2 border-amber-700/30 relative">
                  {/* Nerve Signal */}
                  <motion.div 
                     animate={{ y: [-20, 20], opacity: [0, 1, 0] }}
                     transition={{ duration: 1, repeat: Infinity }}
                     className="absolute inset-x-0 top-1/2 h-1 bg-red-500 blur-sm" 
                  />
                  
                  {/* Shield Growth */}
                  <motion.div
                     initial={{ height: 0 }}
                     animate={{ height: "100%" }}
                     transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
                     className="absolute inset-x-0 top-0 bg-gradient-to-b from-blue-400/60 to-transparent"
                  />
               </div>
            ))}
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
           <p className="text-xs font-black uppercase text-cyan-400 tracking-[0.3em] bg-black/80 px-4 py-2 rounded-full border border-cyan-500/30">HCA Layer Forming</p>
        </div>
      </div>
    );
  }

  if (type === 'bacteria-kill') {
    return (
      <div className="relative w-full h-full bg-slate-950 rounded-2xl overflow-hidden flex items-center justify-center">
        {/* Bacteria Cells */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 1, opacity: 1, x: Math.random() * 200 - 100, y: Math.random() * 100 - 50 }}
            animate={{ 
              scale: [1, 1.1, 0],
              opacity: [1, 1, 0],
              filter: ["blur(0px)", "blur(0px)", "blur(10px)"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut"
            }}
            className="absolute w-12 h-8 bg-green-900/40 border-2 border-green-500/50 rounded-full flex items-center justify-center"
          >
             <div className="w-1 h-4 bg-green-400 rotate-45 rounded-full opacity-40" />
             <div className="w-1 h-4 bg-green-400 -rotate-45 rounded-full opacity-40 ml-1" />
          </motion.div>
        ))}
        
        {/* Antibiotic Particles */}
        {[...Array(20)].map((_, i) => (
           <motion.div
              key={i}
              initial={{ x: -200, y: Math.random() * 100 - 50 }}
              animate={{ x: 300 }}
              transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
              className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]"
           />
        ))}

        <div className="absolute bottom-4 right-4">
           <p className="text-xs font-black uppercase text-rose-400 tracking-widest">Protein Synthesis INHIBITED</p>
        </div>
      </div>
    );
  }

  return null;
};

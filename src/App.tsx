/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function App() {
  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#111111] flex flex-col items-center justify-center p-8 overflow-hidden relative">
      {/* Header Navigation */}
      <nav className="absolute top-0 left-0 w-full p-12 flex justify-between items-center z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 0.3, x: 0 }}
          className="text-[10px] font-bold tracking-[0.3em] uppercase"
        >
          Index v.01
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 0.4, x: 0 }}
          className="text-[10px] font-medium tracking-[0.2em] uppercase"
        >
          2024 Design Study
        </motion.div>
      </nav>

      <div className="relative z-10 text-center flex flex-col items-center">
        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-12 w-full max-w-[600px] aspect-[16/9] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer border border-gray-100"
        >
          <img 
            src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&q=80&w=1200" 
            alt="Endangered Francois' Langur Baby"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Decorative Vertical Line */}
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: 48 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="w-px bg-black opacity-10 mx-auto mb-6"
        />
        
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ 
              duration: 1, 
              ease: [0.19, 1, 0.22, 1]
            }}
            className="text-[80px] sm:text-[92px] leading-none font-light tracking-[-0.04em]"
          >
            Hola mundo
          </motion.h1>
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-sm text-gray-400 font-normal tracking-wide max-w-[400px] mx-auto leading-relaxed italic"
        >
          La simplicidad es la máxima sofisticación.
        </motion.p>
      </div>

      {/* Decorative Bottom Elements */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8"
      >
        <div className="flex gap-16">
          <div className="text-center">
            <div className="text-[9px] uppercase tracking-widest text-gray-300 mb-1 font-bold">Project</div>
            <div className="text-[11px] font-medium text-gray-600">Minimal Starter</div>
          </div>
          <div className="text-center">
            <div className="text-[9px] uppercase tracking-widest text-gray-300 mb-1 font-bold">Format</div>
            <div className="text-[11px] font-medium text-gray-600">React + Vite</div>
          </div>
          <div className="text-center">
            <div className="text-[9px] uppercase tracking-widest text-gray-300 mb-1 font-bold">Team</div>
            <div className="text-[11px] font-medium text-gray-600">Equipo Pro</div>
          </div>
        </div>
        
        {/* Progress Bar Element */}
        <div className="w-64 h-[1px] bg-gray-100 relative overflow-hidden">
          <motion.div 
            initial={{ left: "-100%" }}
            animate={{ left: "0%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-0 h-full w-12 bg-black opacity-20"
          />
        </div>
      </motion.div>

      {/* Team Members */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-12 flex flex-col gap-1"
      >
        <div className="text-[8px] uppercase tracking-[0.2em] text-gray-300 font-bold mb-1">Collaborators</div>
        <div className="text-[10px] text-gray-500 font-medium">Ximena Chavez Acosta</div>
        <div className="text-[10px] text-gray-500 font-medium">Gutierrez Martinez Abril Angelina</div>
        <div className="text-[10px] text-gray-500 font-medium">Mayorga Aguilar Ruth Shaddai</div>
        <div className="mt-2 text-[9px] uppercase tracking-widest text-[#111111] font-black">Web Master</div>
      </motion.div>

      {/* Subtle Corner Label */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-12"
      >
        <div className="w-10 h-10 border border-gray-100 flex items-center justify-center rounded-full">
          <div className="w-1 h-1 bg-black rounded-full animate-pulse"></div>
        </div>
      </motion.div>
    </main>
  );
}

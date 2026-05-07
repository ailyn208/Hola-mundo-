/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");

  const handleNumber = (n: string) => {
    setDisplay(prev => (prev === "0" ? n : prev + n));
  };

  const handleOperator = (op: string) => {
    setEquation(display + " " + op + " ");
    setDisplay("0");
  };

  const calculate = () => {
    try {
      const parts = equation.split(" ");
      const firstNum = parseFloat(parts[0]);
      const operator = parts[1];
      const secondNum = parseFloat(display);
      let result = 0;

      switch (operator) {
        case "+": result = firstNum + secondNum; break;
        case "-": result = firstNum - secondNum; break;
        case "*": result = firstNum * secondNum; break;
        case "/": result = firstNum / secondNum; break;
      }

      setDisplay(String(result));
      setEquation("");
    } catch (e) {
      setDisplay("Error");
    }
  };

  const clear = () => {
    setDisplay("0");
    setEquation("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4 }}
      className="mt-12 bg-white border border-gray-100 p-6 rounded-sm shadow-sm w-full max-w-[280px]"
    >
      <div className="text-right mb-4">
        <div className="text-[10px] text-gray-300 uppercase tracking-widest h-4">{equation}</div>
        <div className="text-2xl font-light tracking-tight">{display}</div>
      </div>
      <div className="grid grid-cols-4 gap-2 text-[11px] font-medium text-gray-600">
        <button onClick={clear} className="p-3 hover:bg-gray-50 flex items-center justify-center border border-gray-50 uppercase tracking-widest text-[9px]">C</button>
        <button onClick={() => handleOperator("/")} className="p-3 hover:bg-gray-50 border border-gray-50">/</button>
        <button onClick={() => handleOperator("*")} className="p-3 hover:bg-gray-50 border border-gray-50">×</button>
        <button onClick={() => handleOperator("-")} className="p-3 hover:bg-gray-50 border border-gray-50">-</button>
        <button onClick={() => handleNumber("7")} className="p-3 hover:bg-gray-50 border border-gray-50">7</button>
        <button onClick={() => handleNumber("8")} className="p-3 hover:bg-gray-50 border border-gray-50">8</button>
        <button onClick={() => handleNumber("9")} className="p-3 hover:bg-gray-50 border border-gray-50">9</button>
        <button onClick={() => handleOperator("+")} className="p-3 hover:bg-gray-50 border border-gray-50">+</button>
        <button onClick={() => handleNumber("4")} className="p-3 hover:bg-gray-50 border border-gray-50">4</button>
        <button onClick={() => handleNumber("5")} className="p-3 hover:bg-gray-50 border border-gray-50">5</button>
        <button onClick={() => handleNumber("6")} className="p-3 hover:bg-gray-50 border border-gray-50">6</button>
        <button onClick={calculate} className="p-3 bg-[#111111] text-white row-span-3 flex items-center justify-center font-bold">=</button>
        <button onClick={() => handleNumber("1")} className="p-3 hover:bg-gray-50 border border-gray-50">1</button>
        <button onClick={() => handleNumber("2")} className="p-3 hover:bg-gray-50 border border-gray-50">2</button>
        <button onClick={() => handleNumber("3")} className="p-3 hover:bg-gray-50 border border-gray-50">3</button>
        <button onClick={() => handleNumber("0")} className="p-3 hover:bg-gray-50 border border-gray-50 col-span-3">0</button>
      </div>
    </motion.div>
  );
}

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

        <Calculator />
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

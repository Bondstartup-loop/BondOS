import React from 'react';
import { motion } from 'framer-motion';

const GridBackground = () => {
  const beams = Array.from({ length: 6 });

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#FDFDFD]">
      {/* THE SVG GRID PATTERN*/}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path 
                d="M 40 0 L 0 0 0 40" 
                fill="none" 
                stroke="rgba(37, 99, 235, 0.15)" 
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" style={{
            maskImage: 'radial-gradient(circle at center, white 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, white 30%, transparent 80%)'
          }} />
        </svg>
      </div>

      {/* THE GLOWING BLUE BEAMS */}
      {beams.map((_, i) => (
        <motion.div
          key={`h-${i}`}
          initial={{ opacity: 0, scaleX: 0, x: "-20%", y: `${20 + i * 12}%` }}
          animate={{ 
            opacity: [0, 0.5, 0],
            scaleX: [0, 1, 0],
            x: ["0%", "100%"] 
          }}
          transition={{
            duration: Math.random() * 4 + 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
          className="absolute h-[2px] w-[300px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px]"
        />
      ))}

      {beams.map((_, i) => (
        <motion.div
          key={`v-${i}`}
          initial={{ opacity: 0, scaleY: 0, x: `${15 + i * 15}%`, y: "-20%" }}
          animate={{ 
            opacity: [0, 0.4, 0],
            scaleY: [0, 1, 0],
            y: ["0%", "100%"] 
          }}
          transition={{
            duration: Math.random() * 4 + 8,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
          className="absolute w-[2px] h-[300px] bg-gradient-to-b from-transparent via-blue-400 to-transparent blur-[1px]"
        />
      ))}

      {/* 3. CENTER BLOSSOM GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/20 blur-[120px] rounded-full" />
    </div>
  );
};

export default GridBackground;
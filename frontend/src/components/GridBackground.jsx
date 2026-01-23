import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const GridBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-end movement
  const springConfig = { damping: 35, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // BRIGHT SPOTLIGHT: High visibility blue reveal
  const spotlight = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `radial-gradient(450px circle at ${x}px ${y}px, rgba(37, 99, 235, 0.2), transparent 80%)`
  );

  // Beams positioned at specific percentages of the screen
  const beamsH = [25, 55, 85];
  const beamsV = [20, 50, 80];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#FDFDFD]">
      
      {/* 1. INTERACTIVE REVEAL SPOTLIGHT */}
      <motion.div 
        className="absolute inset-0 z-40 pointer-events-none" 
        style={{ background: spotlight }} 
      />

      {/* 2. SPACIOUS BLUEPRINT FIELD (48px) */}
      <div className="absolute inset-0 z-10 opacity-[0.45]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            {/* Inactive Base Grid */}
            <pattern id="dots" width="48" height="48" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#94a3b8" />
            </pattern>
            
            {/* Active Glowing Blue Grid */}
            <pattern id="dots-active" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#2563eb" />
            </pattern>

            {/* Mouse Tracking Mask */}
            <mask id="mouse-mask">
              <motion.rect 
                style={{ 
                  x: useTransform(smoothX, (v) => v - 350), 
                  y: useTransform(smoothY, (v) => v - 350) 
                }}
                width="700" height="700" 
                fill="url(#gradientMask)" 
              />
              <radialGradient id="gradientMask">
                <stop offset="0%" stopColor="white" />
                <stop offset="50%" stopColor="white" opacity="0.6" />
                <stop offset="100%" stopColor="black" />
              </radialGradient>
            </mask>
          </defs>

          <rect width="100%" height="100%" fill="url(#dots)" />
          
          <rect 
            width="100%" height="100%" 
            fill="url(#dots-active)" 
            mask="url(#mouse-mask)" 
            className="filter drop-shadow-[0_0_8px_rgba(37,99,235,0.7)]"
          />
        </svg>
      </div>

      {/* 3. HIGH-SPEED SCANNING BEAMS (Full Screen Travel) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        
        {/* --- HORIZONTAL: Left to Right --- */}
        {beamsH.map((pos, i) => (
          <motion.div
            key={`h-${i}`}
            initial={{ x: "-20%", opacity: 0 }}
            animate={{ 
                x: ["0%", "100%"], // Full Width Travel
                opacity: [0, 0.7, 0] 
            }}
            transition={{
              duration: 10, // Increased speed from 20s
              repeat: Infinity,
              delay: i * 3,
              ease: "linear"
            }}
            className="absolute h-[1.5px] w-[200px]"
            style={{ 
                top: `${pos}%`,
                background: 'linear-gradient(90deg, transparent, #2563eb, transparent)',
                boxShadow: '0 0 25px rgba(37, 99, 235, 0.5)' 
            }}
          />
        ))}

        {/* --- VERTICAL: Top to Bottom --- */}
        {beamsV.map((pos, i) => (
          <motion.div
            key={`v-${i}`}
            initial={{ y: "-20%", opacity: 0 }}
            animate={{ 
                y: ["0%", "100%"], // Full Height Travel
                opacity: [0, 0.6, 0] 
            }}
            transition={{
              duration: 12, // Increased speed from 25s
              repeat: Infinity,
              delay: i * 4,
              ease: "linear"
            }}
            className="absolute w-[1.5px] h-[200px]"
            style={{ 
                left: `${pos}%`,
                background: 'linear-gradient(180deg, transparent, #2563eb, transparent)',
                boxShadow: '0 0 25px rgba(37, 99, 235, 0.4)' 
            }}
          />
        ))}
      </div>

      {/* 4. DEPTH AMBIANCE (Increased contrast) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.7]">
        <motion.div 
          style={{ 
            x: useTransform(smoothX, (v) => v * -0.03), 
            y: useTransform(smoothY, (v) => v * -0.03) 
          }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/60 blur-[130px] rounded-full" 
        />
        <motion.div 
          style={{ 
            x: useTransform(smoothX, (v) => v * 0.03), 
            y: useTransform(smoothY, (v) => v * 0.03) 
          }}
          className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-50/70 blur-[150px] rounded-full" 
        />
      </div>

      {/* 5. PHYSICAL TEXTURE OVERLAY */}
      <div 
        className="absolute inset-0 z-50 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

    </div>
  );
};

export default GridBackground;
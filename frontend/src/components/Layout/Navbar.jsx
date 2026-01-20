import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // LOGO CLICK TO TOP
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center pointer-events-none">
      <motion.nav 
        initial={false}
        animate={{
          width: scrolled ? "92%" : "100%",
          maxWidth: scrolled ? "1200px" : "100%",
          marginTop: scrolled ? "10px" : "0px",
          borderRadius: scrolled ? "24px" : "0px",
          height: scrolled ? "70px" : "90px",
          paddingLeft: scrolled ? "30px" : "60px",
          paddingRight: scrolled ? "30px" : "60px",
        }}
        transition={{ 
          duration: 0.8, 
          ease: [0.16, 1, 0.3, 1] 
        }}
        className={`
          relative flex items-center justify-between overflow-hidden
          border-b pointer-events-auto transition-colors duration-500
          ${scrolled 
            ? "bg-gray-50/80 backdrop-blur-2xl border-gray-200/50 shadow-2xl shadow-black/5" 
            : "bg-white/70 backdrop-blur-md border-gray-100"}
        `}
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "250%" }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear", repeatDelay: 0.5 }}
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.1), transparent)",
            width: "40%"
          }}
        />

        {/* LOGO SECTION - Now Clickable */}
        <div 
          onClick={scrollToTop} 
          className="flex items-center relative z-10 cursor-pointer group"
        >
          <img 
            src="/images/logo.png" 
            alt="BOND Logo" 
            className={`transition-all duration-700 object-contain group-hover:scale-105 ${scrolled ? "h-10" : "h-14"}`} 
          />
        </div>

        <div className="flex items-center relative z-10">
          <button 
            onClick={() => document.getElementById('earlyaccess')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-[11px] font-black bg-bond-dark text-white px-8 py-3.5 rounded-xl 
                             hover:shadow-[0_0_25px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 
                             transition-all active:scale-95 cursor-pointer uppercase tracking-[0.2em]"
          >
            Get Early Access
          </button>
        </div>

        <AnimatePresence>
          {!scrolled && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-bond-blue/40 to-transparent"
            />
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Typewriter from "./Typewriter";
import GridBackground from "./GridBackground";

export const Hero = () => {
  const slowScrollTo = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition - 80;
    const duration = 1500;
    let start = null;
    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    };
    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const nextScrollY = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, nextScrollY);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  return (
    <section className="relative pt-32 md:pt-26 pb-20 px-4 sm:px-6 overflow-hidden min-h-screen flex items-center justify-center">
      <GridBackground />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-bond-blue text-[10px] md:text-xs font-bold uppercase tracking-widest mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-bond-blue animate-pulse" />
          <span className="hidden sm:inline">
            The AI Founder Operating System
          </span>
          <span className="sm:hidden">AI Founder OS</span>
        </motion.div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-bond-dark tracking-tight mb-8 leading-[1.1]">
          From Idea to <br />
          <div className="h-15 sm:h-20 md:h-30 flex items-center justify-center">
            <Typewriter />
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-2xl mx-auto text-base md:text-xl text-bond-slate leading-relaxed mb-12 px-2"
        >
          BOND acts as your AI co-founder—understanding your stage, guiding your
          next move, and proving your progress to investors.
        </motion.p>

        <div className="flex flex-col items-center justify-center gap-8">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => slowScrollTo("vision")}
            className="group relative px-10 md:px-12 py-4 md:py-5 bg-bond-dark text-white font-bold rounded-2xl shadow-2xl transition-all overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative flex items-center gap-3 text-sm md:text-base">
              Explore BOND{" "}
              <ArrowRight
                size={20}
                className="group-hover:rotate-90 transition-transform duration-500"
              />
            </span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 5, 0] }}
            transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-bond-slate/40"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
              Scroll to Discover
            </span>
            <ChevronDown size={16} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

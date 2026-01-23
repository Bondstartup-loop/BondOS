import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { Navbar } from "./components/Layout/Navbar";
import { Hero } from "./components/Hero";
import Vision from "./components/Vision";
import Roadmap from "./components/Roadmap";
import EarlyAccess from "./components/EarlyAccess";
import Footer from "./components/Layout/Footer";
import GridBackground from "./components/GridBackground";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for the floating button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] selection:bg-blue-100 selection:text-bond-blue relative">
      <Navbar />
      <main>
        {/* <GridBackground /> */}
        <Hero />
        <Vision />
        <Roadmap />
        <EarlyAccess />
      </main>
      <Footer />

      {/* FLOATING BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-white/80 backdrop-blur-lg border border-gray-200 
                       text-bond-blue rounded-2xl shadow-2xl shadow-blue-500/10 cursor-pointer group"
          >
            <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
            
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 bg-blue-500/5 blur-xl rounded-full -z-10" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="fixed top-0 left-1/2 -translate-x-1/2 -z-10 w-full max-w-4xl h-[500px] bg-blue-100/20 blur-[120px] rounded-full" />
    </div>
  );
}

export default App;
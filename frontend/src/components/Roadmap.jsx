import React, { useRef, useState } from "react";
import { 
  motion, 
  useScroll, 
  useSpring, 
  useTransform, 
  useMotionValueEvent, 
  AnimatePresence 
} from "framer-motion";
import {
  Lightbulb,
  Search,
  Code2,
  BarChart2,
  Users,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Ideation",
    description: "Founder enters BOND. Our AI Co-Founder turns your raw idea into a clear, testable problem statement using market-first frameworks.",
    icon: <Lightbulb className="text-amber-500" />,
    color: "bg-amber-50",
  },
  {
    step: "02",
    title: "Validation",
    description: "BOND guides your customer discovery. It analyzes interview transcripts to confirm if the pain is real—forcing a pivot before you waste a cent on code.",
    icon: <Search className="text-blue-500" />,
    color: "bg-blue-50",
  },
  {
    step: "03",
    title: "MVP Builder",
    description: "BOND tells you exactly what to build and, more importantly, what to ignore. We focus only on features that prove value and generate data.",
    icon: <Code2 className="text-indigo-500" />,
    color: "bg-indigo-50",
  },
  {
    step: "04",
    title: "Product-Market Fit",
    description: "Track usage, retention, and engagement inside BOND. We show you the 'Aha!' moments that prove you've built something people actually want.",
    icon: <BarChart2 className="text-emerald-500" />,
    color: "bg-emerald-50",
  },
  {
    step: "05",
    title: "Growth & Team",
    description: "The OS helps you find the right co-founders and early hires by matching your skill gaps with proven collaborators.",
    icon: <Users className="text-purple-500" />,
    color: "bg-purple-50",
  },
  {
    step: "06",
    title: "Operations",
    description: "From legal setup to hiring workflows and financial tracking, BOND manages the 'boring' stuff so you can stay in the product.",
    icon: <ShieldCheck className="text-slate-500" />,
    color: "bg-slate-50",
  },
  {
    step: "07",
    title: "Fund-Ready",
    description: "BOND packages your traction into a verified investor-ready profile, then connects you to capital that fits your specific startup DNA.",
    icon: <Rocket className="text-bond-blue" />,
    color: "bg-blue-100",
  },
];

const ConfettiPiece = ({ index }) => {
  const colors = ["#2563eb", "#3b82f6", "#10b981", "#64748b", "#f59e0b"];
  const color = colors[index % colors.length];
  const xTarget = (Math.random() - 0.5) * 800;
  const yTarget = -Math.random() * 600 - 200;
  const rotation = Math.random() * 720;
  const size = Math.random() * 10 + 5;

  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
      animate={{ x: xTarget, y: yTarget, opacity: 0, scale: 0, rotate: rotation }}
      transition={{ duration: Math.random() * 2 + 2, ease: [0.23, 1, 0.32, 1] }}
      style={{ position: 'absolute', width: size, height: size, backgroundColor: color, borderRadius: index % 3 === 0 ? '50%' : '2px', zIndex: 50 }}
    />
  );
};

export const Roadmap = () => {
  const containerRef = useRef(null);
  const [hasFired, setHasFired] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // CUSTOM SMOOTH SCROLL
  const slowScrollTo = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition - 60; 
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 90%"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const statusOpacity = useTransform(scrollYProgress, [0.95, 1], [0, 1]);
  const ctaScale = useTransform(scrollYProgress, [0.95, 1], [0.9, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.99 && !hasFired) {
      setHasFired(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
    }
    if (latest < 0.7) setHasFired(false);
  });

  return (
    <section id="roadmap" ref={containerRef} className="py-20 pb-32 px-6 bg-[#FDFDFD] relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-bond-blue text-[10px] font-black uppercase tracking-[0.2em] mb-10"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-bond-blue animate-pulse" />
            The Bond Methodology
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-bond-dark mb-6 tracking-tight">
            The Path to Traction
          </h2>
          <p className="text-bond-slate text-lg max-w-xl mx-auto leading-relaxed opacity-80">
            Our operating system guides you through the 7 critical stages of building an investable startup.
          </p>
        </div>

        {/* Timeline Area */}
        <div className="relative pb-40">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gray-200" />
          
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-bond-blue origin-top z-10 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          />

          {/* Steps */}
          <div className="space-y-32">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Content Card */}
                <div className="md:w-1/2 w-full pl-12 md:pl-0 md:px-12">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-black text-bond-blue tracking-widest uppercase">
                        Step {item.step}
                      </span>
                      <div className="h-px w-8 bg-blue-100 group-hover:w-12 transition-all duration-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-bond-dark mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-bond-slate text-sm leading-relaxed opacity-70">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center z-20 shadow-sm overflow-hidden">
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    className={`w-full h-full flex items-center justify-center ${item.color}`}
                  >
                    {React.cloneElement(item.icon, { size: 18 })}
                  </motion.div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CELEBRATION AREA */}
        <div className="relative flex flex-col items-center">
          <AnimatePresence>
            {showConfetti && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {Array.from({ length: 80 }).map((_, i) => <ConfettiPiece key={i} index={i} />)}
              </div>
            )}
          </AnimatePresence>

          <motion.div style={{ opacity: statusOpacity }} className="mb-10 text-center">
            <div className="text-green-600 font-black text-[10px] uppercase tracking-[0.3em] mb-3 bg-green-50 px-4 py-1 rounded-full border border-green-100 inline-block">
              Roadmap Complete
            </div>
            <h4 className="text-3xl md:text-4xl font-black text-bond-dark tracking-tight">Your startup is now fund-ready.</h4>
          </motion.div>

          <motion.div style={{ scale: ctaScale }} className="relative z-20">
            <button 
              onClick={() => slowScrollTo('earlyaccess')}
              className="group relative px-14 py-7 bg-bond-dark text-white font-black rounded-3xl shadow-2xl hover:bg-black transition-all active:scale-95 cursor-pointer flex flex-col items-center overflow-hidden"
            >
               <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
               <span className="text-[10px] opacity-60 uppercase tracking-[0.2em] mb-1 font-bold">Phase 01 Achieved</span>
               <span className="flex items-center gap-3 text-xs tracking-widest uppercase">
                 Join the Inner Circle  <Rocket size={18} className={hasFired ? "text-bond-blue animate-bounce" : ""} />
               </span>
            </button>
            <motion.div style={{ opacity: statusOpacity }} className="absolute inset-0 bg-bond-blue blur-[60px] -z-10 rounded-full opacity-30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
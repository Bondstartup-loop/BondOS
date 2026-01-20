import React from "react";
import { motion } from "framer-motion";
import { Target, ShieldCheck, Sparkles, Zap } from "lucide-react";

export const Vision = () => {
  const features = [
    {
      icon: <Sparkles className="text-blue-600" size={24} />,
      title: "AI Co-Founder Intelligence",
      description:
        "BOND doesn't just list tasks. It understands your product, your market, and your current stage to suggest what actually moves the needle.",
    },
    {
      icon: <ShieldCheck className="text-blue-600" size={24} />,
      title: "Proof of Progress",
      description:
        "Stop telling investors what you'll do. Show them what you've done. BOND archives every validation call, MVP test, and user insight as investable proof.",
    },
    {
      icon: <Target className="text-blue-600" size={24} />,
      title: "Hyper-Focus Engine",
      description:
        "Building a startup is noisy. BOND silences the distractions by giving you exactly one high-leverage 'Next Step' at a time.",
    },
  ];

  return (
    <section
      id="vision"
      className="py-20 pt-8 px-6 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-bond-blue font-bold text-sm uppercase tracking-widest mb-4"
            >
              <Zap size={16} fill="currentColor" /> The Vision
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold text-bond-dark leading-tight"
            >
              Building a startup shouldn't be a{" "}
              <span className="text-gray-400">guessing game.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-md text-bond-slate text-lg leading-relaxed"
          >
            We’ve codified the path from day zero to your first check. BOND is
            the operating system that turns raw effort into an investable asset.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-bond-dark mb-4">
                {feature.title}
              </h3>
              <p className="text-bond-slate leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>

            {/* Learn more */}
              {/* <div className="mt-8 flex items-center gap-2 text-bond-blue font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <span>→</span>
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* High Impact Vision Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-10 p-12 rounded-[40px] bg-bond-dark text-white text-center relative overflow-hidden"
        >
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />

          <h3 className="text-2xl md:text-4xl font-medium leading-tight max-w-4xl mx-auto relative z-10">
            "Our mission is to democratize the{" "}
            <span className="text-blue-400">Series A mindset</span>, giving
            every founder the tools, discipline, and proof required to build
            something that lasts."
          </h3>
          <div className="mt-8 text-bond-slate font-bold uppercase tracking-widest text-xs opacity-60">
            — The Bond Manifesto
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;

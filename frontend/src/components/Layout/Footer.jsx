import React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Reduced top padding on mobile (pt-10)
    <footer className="bg-white border-t border-gray-100 pt-10 md:pt-20 pb-8 md:pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Adjusted gap-y-10 for mobile to pull items closer together */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-12 mb-12 md:mb-16">
          {/* Brand & Mission */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.png"
                alt="BOND Logo"
                // Significantly smaller logo on mobile (h-10)
                className="h-10 md:h-24 w-auto object-contain bg-transparent"
              />
            </div>
            <p className="text-bond-slate text-sm leading-relaxed max-w-xs mb-5 font-medium">
              The AI Founder Operating System. <br />
              Codifying the path from idea to fund-ready.
            </p>
            <div className="flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl text-bond-slate hover:text-bond-blue hover:bg-blue-50 transition-all border border-gray-100"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://www.linkedin.com/company/bond-os/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl text-bond-slate hover:text-bond-blue hover:bg-blue-50 transition-all border border-gray-100"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/bondstartup"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl text-bond-slate hover:text-pink-500 hover:bg-pink-50 transition-all border border-gray-100"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-1">
            <h4 className="text-[10px] font-bold text-bond-dark uppercase tracking-[0.2em] mb-4 md:mb-6">
              Navigation
            </h4>
            {/* Reduced vertical spacing on mobile (space-y-3) */}
            <ul className="space-y-3 md:space-y-4">
              {[
                { name: "Our Vision", id: "vision" },
                { name: "Startup Roadmap", id: "roadmap" },
                { name: "Join Waitlist", id: "earlyaccess" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-bond-slate text-sm hover:text-bond-blue transition-colors flex items-center group cursor-pointer border-none bg-transparent p-0"
                  >
                    {item.name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity ml-1"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <h4 className="text-[10px] font-bold text-bond-dark uppercase tracking-[0.2em] mb-4 md:mb-6">
              Inquiries
            </h4>
            <a
              href="mailto:bondstartup@outlook.com"
              className="flex items-center gap-3 text-bond-dark font-semibold hover:text-bond-blue transition-colors mb-5 md:mb-6 group"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-blue-50 flex items-center justify-center text-bond-blue group-hover:bg-bond-blue group-hover:text-white transition-all shrink-0">
                <Mail size={16} />
              </div>
              <span className="text-sm md:text-base truncate">
                bondstartup@outlook.com
              </span>
            </a>

            {/* Tighter padding on mobile (p-4) */}
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-bond-dark uppercase tracking-wider">
                  Beta Status
                </span>
              </div>
              <p className="text-[11px] text-bond-slate font-medium leading-relaxed">
                Platform in progress. <br />
                Early Access rolling out Q1 2026.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Reduced padding and unified text size */}
        <div className="pt-6 md:pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © {currentYear} BOND Technologies.
          </div>

          <div className="text-[10px] text-bond-slate font-bold uppercase tracking-widest flex items-center gap-1">
            Built for the next 1% of founders
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="text-bond-blue"
            >
              ✦
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

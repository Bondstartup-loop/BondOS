import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Mail,
  MessageSquare,
  MessageCircle,
} from "lucide-react";

const EarlyAccess = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, feedback });
    setSubmitted(true);
  };

  return (
    <section id="earlyaccess" className="py-14 px-8 relative overflow-hidden ">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-50/50 blur-[100px] -z-10 rounded-full" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-100 shadow-premium rounded-[40px] p-8 md:p-16 text-center relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-bond-blue text-xs font-bold uppercase tracking-widest mb-6">
                  Beta Access
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-bond-dark mb-6">
                  Shape the future of{" "}
                  <span className="text-bond-blue">BOND.</span>
                </h2>
                <p className="text-bond-slate text-lg mb-10 max-w-lg mx-auto">
                  We are building BOND for the next generation of founders. Join
                  the waitlist and help us build the OS you've always wanted.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      required
                      type="email"
                      placeholder="Enter your founder email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-bond-blue transition-all"
                    />
                  </div>

                  <div className="relative">
                    <MessageSquare
                      className="absolute left-4 top-4 text-gray-400"
                      size={20}
                    />
                    <textarea
                      placeholder="What is your biggest challenge as a founder right now?"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      rows="3"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-bond-blue transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-bond-dark text-white font-bold rounded-2xl shadow-xl hover:bg-black transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Join the Inner Circle <Send size={18} />
                  </motion.button>
                </form>

                <p className="mt-6 text-xs text-gray-400">
                  No spam. Just early access and major milestones.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6 flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-bold text-bond-dark mb-4">
                  You're on the list!
                </h2>
                <p className="text-bond-slate text-lg mb-8">
                  Thanks for the feedback. We'll reach out to{" "}
                  <strong>{email}</strong> shortly with your early access
                  invite.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col items-center mb-6"
                >
                  <p className="text-bond-slate text-sm font-semibold flex items-center gap-2 mb-2">
                    <span className="text-bond-blue">✦</span> Join 100+ founders
                    in our inner circle
                  </p>
                  <p className="text-bond-slate/60 text-xs max-w-[280px]">
                    Get daily startup insights, high-leverage frameworks, and
                    real-time platform updates.
                  </p>
                </motion.div>

                {/* COMMUNITY BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open(
                      "https://chat.whatsapp.com/GMTuIY39dkXB9xQX04xsDy",
                      "_blank",
                    )
                  }
                  className="px-10 py-4 bg-bond-blue text-white font-bold rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center gap-3 cursor-pointer mb-6"
                >
                  <MessageCircle size={20} />
                  Join the Founder Community
                </motion.button>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-bold text-bond-slate hover:text-bond-blue transition-colors cursor-pointer"
                >
                  Edit response
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default EarlyAccess;

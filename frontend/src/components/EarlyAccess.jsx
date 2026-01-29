import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Mail,
  MessageSquare,
  MessageCircle,
} from "lucide-react";
import axios from "axios";

const EarlyAccess = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email) {
      setLoading(false);
      return alert("Email is required");
    }
    try {
      const response = await axios.post("http://localhost:8000/founders", {
        email: email,
        feedback: feedback,
      });
      console.log("Backend Response:", response.data);
      setSubmitted(true);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("You are already on the waitlist! We'll reach out to you soon.");
        setSubmitted(true);
      } else {
        console.error("Submission failed:", error);
        alert("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="earlyaccess"
      className="py-14 px-4 sm:px-8 relative overflow-hidden "
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 md:w-150 h-75 md:h-100 bg-blue-50/50 blur-[100px] -z-10 rounded-full" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-100 shadow-premium rounded-4xl sm:rounded-[40px] p-6 sm:p-8 md:p-16 text-center relative overflow-hidden"
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
                <p className="text-bond-slate text-base md:text-lg mb-10 max-w-lg mx-auto">
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
                    disabled={loading}
                    type="submit"
                    className={`w-full py-4 bg-bond-dark text-white font-bold rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 ${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    {loading ? "Processing..." : "Join the Inner Circle"}{" "}
                    <Send size={18} />
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
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-bond-dark mb-4">
                  You're on the list!
                </h2>
                <p className="text-bond-slate text-base md:text-lg mb-8">
                  Thanks for the feedback. We'll reach out to{" "}
                  <strong>{email}</strong> shortly.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col items-center mb-6"
                >
                  <p className="text-bond-slate text-sm font-semibold flex items-center gap-2 mb-2">
                    <span className="text-bond-blue">✦</span> Join 100+ founders
                    in our circle
                  </p>
                  <p className="text-bond-slate/60 text-xs max-w-70">
                    Get daily startup insights and real-time platform updates.
                  </p>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open(
                      "https://chat.whatsapp.com/GMTuIY39dkXB9xQX04xsDy",
                      "_blank",
                    )
                  }
                  className="w-full sm:w-auto px-6 md:px-10 py-4 bg-bond-blue text-white font-bold rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 cursor-pointer mb-6"
                >
                  <MessageCircle size={20} />
                  <span className="text-sm md:text-base">
                    Join the Community
                  </span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default EarlyAccess;

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    user_name: "",
    user_phone: "",
    user_class: "",
    user_course: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.user_name || !formData.user_phone || !formData.user_course) {
      alert("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID!, 
        {
          ...formData,
          date_time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      );
      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row shadow-blue-900/5 min-h-[600px]">
          {/* Info Banner */}
          <div className="w-full md:w-5/12 bg-blue-600 p-10 text-white flex flex-col justify-between relative overflow-hidden shrink-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply opacity-50 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Admissions Open</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Greater Noida West. Limited seats available for the upcoming academic session. Enroll now to kickstart your journey.
              </p>
            </div>

            <div className="relative z-10 space-y-4">
              <a href="tel:+918130550149" className="block transform transition-transform hover:scale-105 active:scale-95">
                <div className="bg-blue-700/50 p-4 rounded-xl border border-white/10 hover:bg-blue-700/70 transition-colors">
                  <div className="text-sm text-blue-200 mb-1">Call for Enquiry</div>
                  <div className="text-xl font-bold">+91 8130550149</div>
                </div>
              </a>
              <a href="mailto:rdvidyapeethnoida@gmail.com" className="block transform transition-transform hover:scale-105 active:scale-95">
                <div className="bg-blue-700/50 p-4 rounded-xl border border-white/10 hover:bg-blue-700/70 transition-colors">
                  <div className="text-sm text-blue-200 mb-1">Email Us</div>
                  <div className="text-lg font-bold truncate">rdvidyapeethnoida@gmail.com</div>
                </div>
              </a>
            </div>
          </div>

          {/* Dynamic Right Side: Form or Success State */}
          <div className="w-full md:w-7/12 p-10 lg:p-12 relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Enquiry Received!</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Thank you for choosing RD Vidyapeeth. Our academic counselor will call you within 24 hours.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-8"
                    onClick={() => setStatus("idle")}
                  >
                    Back to Form
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">Request a Callback</h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Full Name *</label>
                      <input 
                        type="text" 
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Phone Number *</label>
                        <input 
                          type="tel" 
                          name="user_phone"
                          value={formData.user_phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 90000 00000"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Current Class</label>
                        <select 
                          name="user_class"
                          value={formData.user_class}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900"
                        >
                          <option value="">Select Class</option>
                          <option value="8">Class 8</option>
                          <option value="9">Class 9</option>
                          <option value="10">Class 10</option>
                          <option value="11">Class 11</option>
                          <option value="12">Class 12</option>
                          <option value="dropper">Dropper</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Course Interested In *</label>
                      <select 
                        name="user_course"
                        value={formData.user_course}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900"
                      >
                        <option value="">Select Course</option>
                        <option value="jee">IIT-JEE Main & Adv</option>
                        <option value="neet">NEET Entrance</option>
                        <option value="foundation">Foundation (8-10)</option>
                        <option value="commerce">Commerce (11-12)</option>
                      </select>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full mt-4"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </span>
                      ) : (
                        status === "error" ? "Something went wrong!" : "Submit Enquiry"
                      )}
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}

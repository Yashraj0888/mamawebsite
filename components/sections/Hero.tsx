"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Students studying at RD Vidyapith"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/20" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="w-[90%] md:w-[70%] lg:w-[60%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 font-medium text-sm mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Admissions Open for 2026-2027
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Empowering Students for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
                Academic Excellence
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Premium Coaching for IIT-JEE, NEET, Foundation, & Commerce. Experience personalized mentorship, expert faculty, and a highly competitive environment designed to help you achieve top ranks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button size="lg" className="w-full sm:w-auto text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  Enquire Now
                </Button>
              </a>
              <a href="#courses">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg border-white text-white hover:bg-white hover:text-slate-900">
                  View Courses
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

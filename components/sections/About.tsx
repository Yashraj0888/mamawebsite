"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Target, Flag, BookOpenCheck } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 relative">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/faculty.png"
                alt="Expert Faculty at RD Vidyapith"
                className="w-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-blue-900/10" />
            </motion.div>
            
            {/* Decorative block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100 hidden md:block"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <Target className="w-6 h-6" />
                </div>
                <div className="font-bold text-2xl text-slate-800">15+</div>
              </div>
              <p className="text-sm text-slate-600 font-medium">Years of Educational Excellence</p>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-3">About Us</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Shaping the future of bright minds since inception.
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At RD Vidyapith, we believe that every student has the potential to achieve greatness. Our rigorous curriculum, highly experienced faculty, and tech-enabled classrooms provide the perfect ecosystem for success in highly competitive environments.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-600 shrink-0">
                    <Flag className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h4>
                    <p className="text-slate-600">Deliver uncompromising quality education that builds a strong, unshakeable conceptual foundation for every student.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-600 shrink-0">
                    <BookOpenCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h4>
                    <p className="text-slate-600">To be the most trusted coaching institute in India, recognized for consistently producing top ranks in JEE, NEET, and Boards.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

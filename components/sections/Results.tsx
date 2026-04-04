"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Trophy, Star, Quote } from "lucide-react";

export function Results() {
  const testimonials = [
    {
      text: "The faculties at RD Vidyapith made concepts so easy to grasp. The regular test series prepared me beautifully for the actual JEE exam pressure.",
      author: "Aarav S.",
      role: "JEE Advanced AIR 412"
    },
    {
      text: "I joined the 2-year NEET program. The personal mentorship and NCERT focus helped me score 680+ and get into my dream medical college.",
      author: "Priya M.",
      role: "NEET Score: 685"
    }
  ];

  return (
    <section id="results" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/images/results.png"
                alt="Successful Student"
                className="w-full object-cover rounded-3xl shadow-2xl shadow-blue-900/20"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 p-8 rounded-2xl shadow-xl hidden md:block">
                <Trophy className="w-12 h-12 text-blue-100 mb-2" />
                <div className="text-4xl font-extrabold text-white">500+</div>
                <div className="text-blue-100 font-medium">Students Trained</div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-blue-400 tracking-wider uppercase mb-3">Proven Success</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
                Our results speak louder than words.
              </h3>

              <div className="space-y-8">
                {testimonials.map((testimonial, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2, duration: 0.5 }}
                    className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 relative"
                  >
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-700 opacity-50" />
                    <div className="flex gap-1 mb-4 text-accent-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg text-slate-300 italic mb-6 relative z-10 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <div className="font-bold text-lg">{testimonial.author}</div>
                      <div className="text-blue-400 text-sm font-medium">{testimonial.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

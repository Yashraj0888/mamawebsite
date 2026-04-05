"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";

export function Highlights() {
  const features = [
    {
      image: "/images/faculty_highlight.png",
      title: "Experienced Faculty",
      description: "Learn from top educators with years of proven track records in competitive exams. Our veteran faculty members bring decades of institutional experience, ensuring every concept is delivered with clarity, passion, and depth."
    },
    {
      image: "/images/batch_highlight.png",
      title: "Small Batch Sizes",
      description: "We strongly believe in quality over quantity. Our strict small batch policies ensure personalized attention for every single student, meaning no doubts are ever left unresolved and every voice in the classroom is heard."
    },
    {
      image: "/images/performance_highlight.png",
      title: "Performance Tracking",
      description: "Stay ahead of the curve with our tech-driven analytics. We conduct frequent mock tests modeled closely after real JEE/NEET exams, providing deep microscopic analytics to identify, target, and drastically improve weak areas."
    },
    {
      image: "/images/mentorship_highlight.png",
      title: "Personal Mentorship",
      description: "Rigorous education goes beyond just the classroom. Students receive dedicated one-on-one sessions to discuss preparation strategies, manage exam-related stress, and maintain peak motivation throughout their academic journey."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 relative z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border-t border-slate-100">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">The RD Vidyapeeth Advantage</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100 hover:border-blue-200 group flex flex-col h-full"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white mb-0 drop-shadow-md">{feature.title}</h3>
              </div>
              <div className="p-6 md:p-8 flex-grow">
                <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

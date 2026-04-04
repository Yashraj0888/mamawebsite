"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { CheckCircle2, Users, LineChart, GraduationCap } from "lucide-react";

export function Highlights() {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Experienced Faculty",
      description: "Learn from top educators with years of proven track record in competitive exams."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Small Batch Sizes",
      description: "Personalized attention for every student to ensure no doubts are left unresolved."
    },
    {
      icon: <LineChart className="h-8 w-8 text-blue-600" />,
      title: "Performance Tracking",
      description: "Regular mock tests and deep analytics to identify and improve weak areas."
    },
    {
      icon: <CheckCircle2 className="h-8 w-8 text-blue-600" />,
      title: "Personal Mentorship",
      description: "Dedicated one-on-one sessions to guide strategy and maintain peak motivation."
    }
  ];

  return (
    <section className="py-20 bg-white relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border-t border-slate-100">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-slate-100 hover:border-blue-100 group"
            >
              <div className="bg-blue-100/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

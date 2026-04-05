"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { GraduationCap, Award, BookOpen, Star } from "lucide-react";

export function Faculty() {
  const coreTeam = [
    {
      name: "RAJNISH KUMAR SINGH",
      subtitle: "Founder & Senior Faculty",
      image: "/images/founder1.jpeg",
      qualifications: [
        "M.Sc Marine Biology from Cochin University of Science and Technology",
        "M.Sc Zoology from Kerala University",
        "22+ Years Teaching Experience",
        "Former Senior Faculty AICE (AMITY)",
        "Narayana PMT Academy & other Institutions"
      ],
      icon: <Award className="w-5 h-5 text-blue-600" />
    },
    {
      name: "DHARMENDRA KUMAR PANDEY",
      subtitle: "Founder & Senior Faculty",
      image: "/images/founder2.jpeg",
      qualifications: [
        "B.Sc (Mathematics), M.Sc (History)",
        "15+ Years of Teaching Experience",
        "Expert in Foundation Building for Competitive Exams",
        "Mentor to Top-Ranking Students",
        "Strong Academic & Administrative Expertise",
        "Student-Centric and Concept-Based Teaching Approach"
      ],
      icon: <Star className="w-5 h-5 text-blue-600" />
    },
    {
      name: "NIRMALA SINGH",
      role: "Founder & Senior Faculty",
      image: "/images/image.png",
      qualifications: [
        "M.Sc. Life Sciences | Botany Faculty",
        "15+ Years of Teaching Experience",
        "Expertise in Life Sciences & Botany",
        "NEET Preparation Specialist",
        "Mentored 1000+ Students",
        "Concept-Based & Result-Oriented Teaching"
      ],
      icon: <BookOpen className="w-5 h-5 text-blue-600" />
    },
    {
      name: "DR. RAJAN KUMAR",
      role: "Founder & Senior Faculty",
      image: "/images/guest1.jpeg",
      qualifications: [
        "M.B.B.S (Gold Medalist)",
        "M.D (Emergency Medicine & Critical Care)",
        "Former Resident Doctor AIIMS New Delhi",
        "Former C.M.O J.J Hospital"
      ],
      icon: <GraduationCap className="w-5 h-5 text-blue-600" />
    }
  ];

  return (
    <section id="faculty" className="py-24 bg-white relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-3 text-center">Our Core Founders</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 text-center uppercase">Leadership & Faculty</h3>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full mb-8"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Our team of dedicated founders brings over two decades of educational excellence and institutional mastery to RD Vidyapeeth.
          </p>
        </motion.div>

        {/* Core Founders Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 max-w-6xl mx-auto px-4">
          {coreTeam.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
              className="group w-full h-[520px] [perspective:1000px]"
            >
              <div className="relative w-full h-full transition-transform duration-[800ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer shadow-xl rounded-[2.5rem] hover:shadow-blue-900/10">
                
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white rounded-[2.5rem] border border-slate-100 flex flex-col overflow-hidden">
                  {/* Image Container: uses object-contain so heads are NEVER cut off */}
                  <div className="w-full h-[75%] overflow-hidden bg-slate-50/50 pt-6 flex items-end justify-center">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-contain object-bottom scale-[1.02] transform transition-transform duration-700 group-hover:scale-110" 
                    />
                  </div>
                  {/* Details Container */}
                  <div className="p-6 flex flex-col items-center justify-center h-[25%] text-center bg-white border-t border-slate-50">
                    <h4 className="text-xl font-bold text-slate-900 leading-tight tracking-tight uppercase">{member.name}</h4>
                    <p className="text-[11px] font-extrabold text-blue-600 mt-2 uppercase tracking-[0.2em] opacity-80">
                      {('subtitle' in member) ? member.subtitle : member.role}
                    </p>
                  </div>
                </div>

                {/* Back Side (Lighter, premium aesthetic) */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-blue-50/95 backdrop-blur-sm rounded-[2.5rem] p-10 flex flex-col items-center justify-center border-2 border-blue-100 shadow-inner">
                  <div className="mb-6 bg-blue-600 p-4 rounded-3xl shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    {React.cloneElement(member.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-6 text-center uppercase tracking-widest border-b-2 border-blue-200 pb-2">{member.name}</h4>
                  <ul className="space-y-3.5 w-full">
                    {member.qualifications.map((q, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 text-xs font-bold">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                        <span className="text-left leading-relaxed">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

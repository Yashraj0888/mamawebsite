"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { GraduationCap, Award, BookOpen, Star } from "lucide-react";

export function Faculty() {
  const founders = [
    {
      name: "Founder & Senior Faculty",
      image: "/images/founder1.jpeg",
      qualifications: [
        "22 Years Teaching Experience",
        "Former Senior Faculty AICE (AMITY)",
        "Narayana PMT Academy & other Institutions"
      ],
      icon: <Award className="w-5 h-5 text-blue-600" />
    },
    {
      name: "Founder & Senior Faculty",
      image: "/images/founder2.jpeg",
      qualifications: [
        "22 Years Teaching Experience",
        "Former Senior Faculty AICE (AMITY)",
        "Narayana PMT Academy & other Institutions"
      ],
      icon: <Star className="w-5 h-5 text-blue-600" />
    }
  ];

  const guestFaculty = [
    {
      name: "Dr. Rajan Kumar",
      role: "Guest Faculty",
      image: "/images/guest1.jpeg",
      qualifications: [
        "M.B.B.S (Gold Medalist)",
        "M.D (Emergency Medicine & Critical Care)",
        "Former Resident Doctor AIIMS New Delhi",
        "Former C.M.O J.J Hospital"
      ],
      icon: <GraduationCap className="w-5 h-5 text-teal-600" />
    },
    {
      name: "NIRMALA SINGH",
      role: "M.Sc. Life Sciences | Botany Faculty",
      image: "/images/image.png",
      qualifications: [
        "15+ Years of Teaching Experience",
        "Expertise in Life Sciences & Botany",
        "NEET Preparation Specialist",
        "Mentored 1000+ Students",
        "Concept-Based & Result-Oriented Teaching"
      ],
      icon: <BookOpen className="w-5 h-5 text-teal-600" />
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
          <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-3 text-center">Our Leadership</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 text-center">Meet Our Expert Faculty</h3>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full mb-8"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Led by veterans with over two decades of institutional experience, our faculty ensures academic excellence through personalized mentorship.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24 px-[5%] md:px-[10%]">
          {founders.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
              className="bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl group flex flex-col sm:flex-row h-full transition-all duration-500 hover:shadow-blue-900/10"
            >
              <div className="w-full sm:w-1/2 h-80 sm:h-auto overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
              </div>
              <div className="p-8 w-full sm:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  {member.icon}
                  <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                </div>
                <ul className="space-y-3">
                  {member.qualifications.map((q, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm italic">
                      <span className="text-blue-500 mt-1">•</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-teal-600 tracking-wider uppercase mb-3">Distinguished Experts</h2>
          <h3 className="text-3xl font-bold text-slate-900">Guest Faculty</h3>
        </motion.div>

        {/* Guest Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-[5%]">
          {guestFaculty.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: "backOut" }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg flex flex-col sm:flex-row items-center sm:items-start gap-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 border-4 border-teal-50 ring-4 ring-teal-100/50 shadow-inner">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex flex-col mb-3">
                  <h4 className="text-xl font-bold text-slate-900 leading-tight">{member.name}</h4>
                  <span className="text-xs text-teal-600 font-bold uppercase tracking-wide mt-1">{member.role}</span>
                </div>
                <ul className="space-y-2">
                  {member.qualifications.map((q, i) => (
                    <li key={i} className="text-sm text-slate-500 leading-tight flex items-start gap-2">
                      <span className="text-teal-500">•</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

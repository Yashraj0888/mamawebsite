"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Atom, Stethoscope, BookMarked, Calculator } from "lucide-react";

export function Courses() {
  const courses = [
    {
      id: "jee",
      title: "IIT-JEE",
      subtitle: "Main & Advanced",
      icon: <Atom className="h-10 w-10 text-white" />,
      color: "from-blue-600 to-indigo-600",
      description: "Rigorous preparation for India's toughest engineering entrance exams.",
      subjects: ["Physics", "Chemistry", "Mathematics"],
      features: ["Concept-based learning", "Weekly mock tests", "Advanced doubt clearing"]
    },
    {
      id: "neet",
      title: "NEET",
      subtitle: "Medical Entrance",
      icon: <Stethoscope className="h-10 w-10 text-white" />,
      color: "from-emerald-500 to-teal-600",
      description: "Thorough NCERT-focused teaching dedicated to producing future doctors.",
      subjects: ["Physics", "Chemistry", "Biology"],
      features: ["NCERT line-by-line focus", "Regular part tests", "Performance analysis"]
    },
    {
      id: "foundation",
      title: "Foundation",
      subtitle: "Classes 7th to 10th",
      icon: <BookMarked className="h-10 w-10 text-white" />,
      color: "from-orange-500 to-red-500",
      description: "Build incredibly strong basics for early competitive exam preparation.",
      subjects: ["Science", "Mathematics", "Mental Ability"],
      features: ["Olympiad preparation", "Conceptual clarity", "Board exam readiness"]
    },
    {
      id: "commerce",
      title: "Commerce",
      subtitle: "Classes 11th & 12th",
      icon: <Calculator className="h-10 w-10 text-white" />,
      color: "from-purple-500 to-fuchsia-600",
      description: "Expert guidance for commerce stream aimed at top board percentages.",
      subjects: ["Accountancy", "Business Studies", "Economics"],
      features: ["Practical teaching", "Case study methodology", "Board exam focus"]
    }
  ];

  return (
    <section id="courses" className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-3">Our Programs</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Courses for Every Goal
          </h3>
          <p className="text-lg text-slate-600">
            Choose from our specialized programs tailored to maximize your potential and ensure success in your target examinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all group flex flex-col h-full"
            >
              {/* Header */}
              <div className={`p-8 bg-gradient-to-br ${course.color} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 p-4 opacity-20 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-500">
                   {course.icon}
                </div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-white mb-1">{course.title}</h4>
                  <p className="text-white/80 font-medium">{course.subtitle}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">{course.description}</p>
                
                <div className="mb-6">
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Subjects Covered</h5>
                  <div className="flex flex-wrap gap-2">
                    {course.subjects.map((subject, sIdx) => (
                      <span key={sIdx} className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Features</h5>
                  <ul className="space-y-2">
                    {course.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#contact" className="mt-auto block">
                  <Button variant="outline" className="w-full text-blue-600 border-blue-600 hover:bg-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    Enquire Details
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

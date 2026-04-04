"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row shadow-blue-900/5">
          {/* CTA Banner Left */}
          <div className="w-full md:w-5/12 bg-blue-600 p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply opacity-50 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Admissions Open</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Limited seats available for the upcoming academic session. Enroll now to kickstart your journey.
              </p>
            </div>

            <div className="relative z-10 space-y-4">
              <div className="bg-blue-700/50 p-4 rounded-xl">
                <div className="text-sm text-blue-200 mb-1">Call for Enquiry</div>
                <div className="text-xl font-bold">+91 98765 43210</div>
              </div>
              <div className="bg-blue-700/50 p-4 rounded-xl">
                <div className="text-sm text-blue-200 mb-1">Email Us</div>
                <div className="text-lg font-bold truncate">admissions@rdvidyapith.com</div>
              </div>
            </div>
          </div>

          {/* Form Right */}
          <div className="w-full md:w-7/12 p-10 lg:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Request a Callback</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 90000 00000"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Current Class</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all">
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
                <label className="text-sm font-semibold text-slate-700">Course Interested In</label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all">
                  <option value="">Select Course</option>
                  <option value="jee">IIT-JEE Main & Adv</option>
                  <option value="neet">NEET Entrance</option>
                  <option value="foundation">Foundation (8-10)</option>
                  <option value="commerce">Commerce (11-12)</option>
                </select>
              </div>

              <Button type="submit" size="lg" className="w-full mt-4">
                Submit Enquiry
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

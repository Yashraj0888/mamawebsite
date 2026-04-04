import React from "react";
import { Container } from "./Container";
import { BookOpen, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-primary-600 text-white p-2 rounded-lg">
              <BookOpen className="h-6 w-6" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-white">
              RD Vidyapith
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Empowering students with strong conceptual foundations to achieve top
            ranks in IIT-JEE, NEET, Foundation, and Commerce exams.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-400 font-bold transition-colors">
              FB
            </a>
            <a href="#" className="hover:text-primary-400 font-bold transition-colors">
              IG
            </a>
            <a href="#" className="hover:text-primary-400 font-bold transition-colors">
              X
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
            <li><a href="#courses" className="hover:text-primary-400 transition-colors">Our Courses</a></li>
            <li><a href="#results" className="hover:text-primary-400 transition-colors">Results & Testimonials</a></li>
            <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact & Admissions</a></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-6">Our Courses</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#courses" className="hover:text-primary-400 transition-colors">IIT-JEE (Main & Adv)</a></li>
            <li><a href="#courses" className="hover:text-primary-400 transition-colors">NEET Preparation</a></li>
            <li><a href="#courses" className="hover:text-primary-400 transition-colors">Foundation (8th - 10th)</a></li>
            <li><a href="#courses" className="hover:text-primary-400 transition-colors">Commerce (11th - 12th)</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
              <span>123 Knowledge Park, Education Hub, New Delhi, India 110001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary-500 shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary-500 shrink-0" />
              <span>admissions@rdvidyapith.com</span>
            </li>
          </ul>
        </div>
      </Container>
      
      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} RD Vidyapith. All rights reserved.</p>
      </div>
    </footer>
  );
}

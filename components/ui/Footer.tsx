import React from "react";
import { Container } from "./Container";
import { BookOpen, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img src="/images/logo.jpeg" alt="RD Vidyapeeth Logo" className="w-12 h-12 rounded-full" />
            <span className="font-bold text-2xl tracking-tight text-white">
              RD Vidyapeeth
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Empowering students with strong conceptual foundations to achieve top
            ranks in IIT-JEE, NEET, Foundation, and Commerce exams.
          </p>
          <div className="flex gap-4">
            {/* <a href="https://www.facebook.com/share/1BUjSkgnzD/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all p-2.5 bg-white/5 rounded-xl block">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M9.101 24v-11.231h-3.777v-4.385h3.777v-3.231c0-3.741 2.281-5.783 5.626-5.783 1.602 0 2.98.119 3.381.173v3.917l-2.319.001c-1.815 0-2.166.862-2.166 2.127v2.795h4.337l-.565 4.385h-3.772v11.231h-4.5z"/>
              </svg>
            </a> */}
            <a href="https://www.instagram.com/rdvidyapeeth/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-all p-2.5 bg-white/5 rounded-xl block">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.56-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.413-.56-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.413-2.227.217-.56.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.26-2.911.557-.79.306-1.459.717-2.126 1.384-.667.667-1.078 1.336-1.384 2.126-.297.763-.5 1.634-.557 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.668.072 4.947c.058 1.277.26 2.148.557 2.911.306.79.717 1.459 1.384 2.126.667.667 1.336 1.078 2.126 1.384.763.297 1.634.5 2.911.557 1.28.058 1.688.072 4.947.072s3.668-.014 4.947-.072c1.277-.058 2.148-.26 2.911-.557.79-.306 1.459-.717 2.126-1.384.667-.667 1.078-1.336 1.384-2.126.297-.763.5-1.634.557-2.911.058-1.28.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.058-1.277-.26-2.148-.557-2.911-.306-.79-.717-1.459-1.384-2.126-.667-.667-1.336-1.078-2.126-1.384-.763-.297-1.634-.5-2.911-.557-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/rd-vidyapeeth-015a85400" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all p-2.5 bg-white/5 rounded-xl block">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
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
            <li><a href="#courses" className="hover:text-primary-400 transition-colors">Foundation (7th - 10th)</a></li>
            <li><a href="#courses" className="hover:text-primary-400 transition-colors">Commerce (11th - 12th)</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
              <span>Greater Noida West</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary-500 shrink-0" />
              <a href="tel:+918130550149" className="hover:text-primary-400 transition-colors font-medium">+91 8130550149</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary-500 shrink-0" />
              <a href="mailto:rdvidyapeethnoida@gmail.com" className="hover:text-primary-400 transition-colors font-medium">rdvidyapeethnoida@gmail.com</a>
            </li>
          </ul>
        </div>
      </Container>
      
      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} RD Vidyapeeth. All rights reserved.</p>
      </div>
    </footer>
  );
}

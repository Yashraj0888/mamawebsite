"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Menu, X, BookOpen } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Results", href: "#results" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="w-full px-[5%] md:px-[8%] flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src="/images/logo.jpeg" alt="RD Vidyapeeth Logo" className="w-10 h-10 rounded-full" />
          <span className={cn("font-bold text-xl tracking-tight transition-colors", isScrolled ? "text-slate-900" : "text-white")}>
            RD Vidyapeeth
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn("text-sm font-medium hover:text-primary-600 transition-colors", isScrolled ? "text-slate-600" : "text-white/90 hover:text-white")}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact">
            <Button size="sm">Enquire Now</Button>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden p-2 transition-colors", isScrolled ? "text-slate-600" : "text-white")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-primary-600 px-2 py-1"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full">Enquire Now</Button>
          </a>
        </div>
      )}
    </header>
  );
}

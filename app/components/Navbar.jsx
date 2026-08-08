"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-[#0a0a0a]/80 backdrop-blur-sm'}`}>
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        <a href="#" className="text-white font-bold text-lg hover:text-blue-400 transition">Asawari</a>
        <div className="hidden md:flex gap-8 text-gray-400 text-sm">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#academics" className="hover:text-white transition">Academics</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#certifications" className="hover:text-white transition">Certifications</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        <div className="flex gap-3">
          <a href="/Asawari_resume.pdf" target="_blank" className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-sm hover:border-white hover:text-white transition-all">
            Resume
          </a>
          
          
        </div>
      </div>
    </nav>
  );
}
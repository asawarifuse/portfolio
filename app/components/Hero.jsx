"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const fullName = "Asawari";
  const [displayedName, setDisplayedName] = useState("");
  const [nameComplete, setNameComplete] = useState(false);

  useEffect(() => {
    if (displayedName.length < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedName(fullName.slice(0, displayedName.length + 1));
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      setNameComplete(true);
    }
  }, [displayedName]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>
      <p className="text-gray-400 text-lg mb-2 animate-fade-in">Hello, I&apos;m</p>
      <h1 className="text-5xl md:text-7xl font-bold mb-4 h-20 flex items-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        {displayedName}
        {!nameComplete && <span className="animate-pulse ml-1 text-white">|</span>}
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 animate-fade-in-delayed">
        Data Analyst & Full-Stack Developer
      </p>
      <div className="mt-8 flex gap-4 animate-fade-in-delayed">
        <a href="#projects" className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 hover:scale-105 hover:shadow-xl hover:shadow-white/20 transition-all duration-300">
          View Projects
        </a>
        <a href="#contact" className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl hover:shadow-white/20 transition-all duration-300">
          Connect
        </a>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-extralight text-white tracking-tight">
              ALT<span className="font-semibold">URA</span>
            </h3>
            <p className="text-stone-500 text-sm font-light mt-2">
              Outdoor Side Retention System
            </p>
          </div>
          <nav className="flex flex-wrap gap-8">
            <a href="#features" className="text-stone-400 hover:text-white text-sm font-light transition-colors duration-300">
              Features
            </a>
            <a href="#technology" className="text-stone-400 hover:text-white text-sm font-light transition-colors duration-300">
              Technology
            </a>
            <a href="#gallery" className="text-stone-400 hover:text-white text-sm font-light transition-colors duration-300">
              Gallery
            </a>
            <a href="#contact" className="text-stone-400 hover:text-white text-sm font-light transition-colors duration-300">
              Contact
            </a>
          </nav>
        </div>
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-600 text-xs font-light">
            © {new Date().getFullYear()} Altura. All rights reserved.
          </p>
          <p className="text-stone-700 text-xs font-light">
            Engineered in Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
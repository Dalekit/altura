import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Modern outdoor living"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[2px] bg-amber-500" />
            <span className="text-amber-500 uppercase tracking-[0.3em] text-xs font-medium">
              Redefining Outdoor Blinds
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-extralight text-white tracking-tight leading-[0.9] mb-6">
            ALT
            <span className="font-semibold">URA</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-lg mb-4">
            The outdoor side retention system that eliminates rippling, defies the wind, and disappears when you don't need it.
          </p>

          <p className="text-sm text-white/40 font-light tracking-wide mb-10">
            Engineered precision. Effortless living.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300"
            >
              Discover More
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 hover:border-white/60 text-white text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300"
            >
              Get a Quote
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
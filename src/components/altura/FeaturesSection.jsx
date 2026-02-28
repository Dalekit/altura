import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Eye, Square, Shield } from 'lucide-react';

const features = [
  {
    icon: Wind,
    title: 'Wind Resistant',
    description: 'Revolutionary side retention technology keeps your blind perfectly in place, even in strong winds. No more flapping or rippling.',
  },
  {
    icon: Eye,
    title: 'Full Retractability',
    description: 'The bottom rail lifts completely into the headbox, giving you unobstructed views and maximum visibility when the blind is retracted.',
  },
  {
    icon: Square,
    title: 'Always Square',
    description: 'Out-of-level tracking technology keeps your blind perfectly square at all times, regardless of installation conditions.',
  },
  {
    icon: Shield,
    title: 'Constant Tension',
    description: 'Leaf springs in the side channels maintain continuous fabric tension, eliminating ripple and sag for a clean, taut finish.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-28 md:py-40 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-amber-600" />
            <span className="text-amber-600 uppercase tracking-[0.3em] text-[11px] font-medium">
              Why Altura
            </span>
            <div className="w-8 h-[1px] bg-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extralight text-stone-900 tracking-tight mb-6">
            Engineered to <span className="font-semibold">Perform</span>
          </h2>
          <p className="text-stone-500 font-light max-w-xl mx-auto leading-relaxed">
            Every detail of the Altura system has been designed to solve the problems that have plagued outdoor blinds for decades.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-8 bg-white border border-stone-200/60 hover:border-amber-300/60 transition-all duration-500 h-full">
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-amber-500 transition-all duration-500" />
                
                <div className="w-12 h-12 flex items-center justify-center bg-stone-100 group-hover:bg-amber-50 transition-colors duration-500 mb-6">
                  <feature.icon className="w-5 h-5 text-stone-600 group-hover:text-amber-600 transition-colors duration-500" />
                </div>
                
                <h3 className="text-lg font-semibold text-stone-900 mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-stone-500 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
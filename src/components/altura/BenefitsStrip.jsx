import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: 'Zero', label: 'Fabric Ripple' },
  { value: '100%', label: 'Retractable' },
  { value: 'All', label: 'Weather Conditions' },
  { value: 'Any', label: 'Mounting Angle' },
];

export default function BenefitsStrip() {
  return (
    <section className="bg-amber-600 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-light text-white mb-2">
                {stat.value}
              </div>
              <div className="text-amber-100/70 text-xs uppercase tracking-[0.2em] font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
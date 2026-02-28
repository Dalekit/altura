import React from 'react';
import { motion } from 'framer-motion';

const techDetails = [
  {
    number: '01',
    title: 'Side Retention Channels',
    description: "Precision-engineered channels lock the fabric edges in place. Unlike traditional blinds that rely on loose guides, Altura's channels grip the fabric securely — eliminating the rippling that occurs down the sides in wind.",
  },
  {
    number: '02',
    title: 'Leaf Spring Tension System',
    description: 'Integrated leaf springs within the side channels apply continuous, even tension across the entire fabric width. This patented system ensures your blind stays taut and wrinkle-free in any weather condition.',
  },
  {
    number: '03',
    title: 'Full-Retract Headbox',
    description: 'The bottom rail retracts completely into the compact headbox, leaving your outdoor space completely open and unobstructed. No dangling rails, no visual clutter — just clear views.',
  },
  {
    number: '04',
    title: 'Out-of-Level Tracking',
    description: 'The intelligent headbox compensates for uneven mounting surfaces, while the tracking system maintains the blind perfectly square throughout its travel. No shimming, no compromise.',
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-28 md:py-40 bg-stone-900 relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="sticky top-32">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Altura blind system detail"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
              
              {/* Floating stat */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-light text-white">100%</span>
                    <span className="text-amber-400 text-sm uppercase tracking-wider">Retractable</span>
                  </div>
                  <p className="text-white/50 text-sm font-light">
                    Bottom rail fully disappears into headbox
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Tech Details */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-amber-500" />
                <span className="text-amber-500 uppercase tracking-[0.3em] text-[11px] font-medium">
                  The Technology
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extralight text-white tracking-tight mb-6">
                How It <span className="font-semibold">Works</span>
              </h2>
              <p className="text-stone-400 font-light leading-relaxed">
                Four core innovations come together to create an outdoor blind system that outperforms everything before it.
              </p>
            </motion.div>

            <div className="space-y-10">
              {techDetails.map((detail, index) => (
                <motion.div
                  key={detail.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <span className="text-3xl font-extralight text-amber-500/40 group-hover:text-amber-500 transition-colors duration-500">
                        {detail.number}
                      </span>
                    </div>
                    <div className="border-l border-stone-700 group-hover:border-amber-600/40 transition-colors duration-500 pl-6">
                      <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                        {detail.title}
                      </h3>
                      <p className="text-sm text-stone-400 font-light leading-relaxed">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
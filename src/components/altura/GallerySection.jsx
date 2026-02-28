import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    alt: 'Modern patio with outdoor blind',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
    alt: 'Contemporary outdoor living space',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80',
    alt: 'Sleek exterior with shading',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80',
    alt: 'Outdoor entertaining area',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    alt: 'Premium home exterior',
    span: 'col-span-1 row-span-1',
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-28 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-amber-600" />
            <span className="text-amber-600 uppercase tracking-[0.3em] text-[11px] font-medium">
              Inspiration
            </span>
            <div className="w-8 h-[1px] bg-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extralight text-stone-900 tracking-tight mb-6">
            Seamless <span className="font-semibold">Integration</span>
          </h2>
          <p className="text-stone-500 font-light max-w-xl mx-auto leading-relaxed">
            Altura complements the finest architectural designs, blending seamlessly into any outdoor living environment.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[260px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative overflow-hidden group ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
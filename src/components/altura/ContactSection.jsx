import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 md:py-40 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-amber-600" />
              <span className="text-amber-600 uppercase tracking-[0.3em] text-[11px] font-medium">
                Get in Touch
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-900 tracking-tight mb-6">
              Ready to <span className="font-semibold">Transform</span> Your Space?
            </h2>
            <p className="text-stone-500 font-light leading-relaxed mb-12 max-w-md">
              Contact us to learn more about the Altura system, request a quote, or find an authorised dealer near you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-stone-200/60 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-stone-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-900">Phone</p>
                  <p className="text-sm text-stone-500 font-light">1300 ALTURA</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-stone-200/60 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-stone-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-900">Email</p>
                  <p className="text-sm text-stone-500 font-light">info@altura.com.au</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-stone-200/60 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-stone-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-900">Headquarters</p>
                  <p className="text-sm text-stone-500 font-light">Australia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 border border-stone-200/60 space-y-6">
                <div>
                  <label className="text-xs uppercase tracking-[0.15em] text-stone-500 font-medium mb-2 block">
                    Full Name
                  </label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-stone-200 focus:border-amber-500 rounded-none h-12 bg-transparent"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs uppercase tracking-[0.15em] text-stone-500 font-medium mb-2 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-stone-200 focus:border-amber-500 rounded-none h-12 bg-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.15em] text-stone-500 font-medium mb-2 block">
                      Phone
                    </label>
                    <Input
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-stone-200 focus:border-amber-500 rounded-none h-12 bg-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.15em] text-stone-500 font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-stone-200 focus:border-amber-500 rounded-none min-h-[120px] bg-transparent resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-14 bg-stone-900 hover:bg-stone-800 text-white rounded-none uppercase tracking-[0.2em] text-xs font-medium transition-all duration-300"
                >
                  Send Enquiry
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            ) : (
              <div className="bg-white p-10 md:p-16 border border-stone-200/60 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-16 h-16 bg-amber-50 flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-light text-stone-900 mb-3">Thank You</h3>
                <p className="text-stone-500 font-light max-w-sm">
                  Your enquiry has been received. Our team will be in touch within 24 hours.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
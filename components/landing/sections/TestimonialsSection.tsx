'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote:
      "Comfortside West has been our go-to distributor for mini-splits. Their pricing is competitive, shipping is fast, and the technical support team really knows their stuff. They've helped us grow our HVAC business significantly.",
    name: 'John Martinez',
    role: 'HVAC Contractor, Phoenix AZ',
    initials: 'JM',
  },
  {
    id: 2,
    quote:
      "We switched to Comfortside West last year and couldn't be happier. The dealer program benefits are excellent, and having a dedicated account manager makes ordering so much easier. Highly recommend!",
    name: 'Sarah Chen',
    role: 'Owner, Cool Air Solutions',
    initials: 'SC',
  },
  {
    id: 3,
    quote:
      "The quality of Cooper&Hunter and Olmo products from Comfortside West is outstanding. Our customers love the reliability, and we love the warranty support. A true partnership.",
    name: 'Mike Roberts',
    role: 'Service Manager, Texas Climate Co',
    initials: 'MR',
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-primary text-white overflow-hidden">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white/90 mb-4">
            Testimonials
          </span>
          <h2 className="text-h2 text-white mb-4">
            What Our Dealers Say
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what HVAC contractors and
            dealers have to say about partnering with Comfortside West.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12"
            >
              <Quote className="w-12 h-12 text-white/30 mb-6" />
              <blockquote className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">
                  {testimonials[currentIndex].initials}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-white/60">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-white w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

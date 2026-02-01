'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: 'What brands do you carry?',
    answer:
      'We are an authorized distributor for three premium HVAC brands: Cooper&Hunter, Olmo, and Bravo. Each brand offers different features and price points to meet various customer needs, from budget-friendly options to premium systems with advanced features.',
  },
  {
    question: 'How do I become a dealer?',
    answer:
      'Becoming a Comfortside West dealer is easy. Simply fill out our dealer application form or contact our sales team. Once approved, you\'ll get access to wholesale pricing, dedicated account management, marketing support, and priority inventory access.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We primarily serve the Western United States, with fast shipping to California, Texas, Arizona, Nevada, Colorado, and surrounding states. Most orders ship within 24-48 hours, and we offer competitive freight rates for bulk orders.',
  },
  {
    question: 'Do you offer technical support?',
    answer:
      'Yes! Our technical support team is available to help with installation questions, troubleshooting, and warranty claims. We also offer product training sessions and technical documentation for all our dealers.',
  },
  {
    question: 'What warranties are available?',
    answer:
      'Warranty coverage varies by brand and product. Cooper&Hunter offers up to 10-year warranties on compressors, Olmo provides 7-year coverage, and Bravo offers 5-year warranties. All products include standard manufacturer warranty support through our dealership.',
  },
  {
    question: 'Do you offer volume discounts?',
    answer:
      'Absolutely. We offer tiered pricing based on order volume and dealer status. Our dealer program includes multiple pricing tiers, and high-volume contractors can qualify for additional discounts and rebates.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section bg-cream-dark">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="badge badge-primary mb-4">FAQ</span>
            <h2 className="text-h2 text-primary mb-6">
              Common Questions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions about our products or dealer program? We've compiled
              answers to the most frequently asked questions below.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Still have questions? Contact us
            </Link>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-soft overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-primary" />
                    ) : (
                      <Plus className="w-4 h-4 text-primary" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

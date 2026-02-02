'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Home,
  Building2,
  Layers,
  ArrowRight,
} from 'lucide-react';

const products = [
  {
    icon: Home,
    title: 'Residential Systems',
    description:
      'Single and multi-zone mini-split systems perfect for homes. Energy-efficient cooling and heating solutions.',
    href: '/products/residential',
    iconBg: 'bg-primary/10',
  },
  {
    icon: Building2,
    title: 'Commercial/VRF',
    description:
      'Variable Refrigerant Flow systems for commercial applications. Scalable solutions for any building size.',
    href: '/products/commercial',
    iconBg: 'bg-accent/10',
  },
  {
    icon: Layers,
    title: 'All-in-One Units',
    description:
      'Integrated heating and cooling solutions. Simple installation with comprehensive climate control.',
    href: '/products/all-in-one',
    iconBg: 'bg-primary/15',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export function ServicesSection() {
  return (
    <section className="section bg-gray-50">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="badge badge-primary mb-4">Our Products</span>
          <h2 className="text-h2 text-primary mb-4">
            Ductless HVAC Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a complete range of ductless mini-split systems to meet every
            residential and commercial need. All backed by industry-leading warranties.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div key={product.title} variants={itemVariants}>
              <Link
                href={product.href}
                className="group block bg-white rounded-lg shadow-sm hover:shadow-md p-8 h-full relative overflow-hidden transition-shadow duration-300 border border-gray-100"
              >
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className={`w-14 h-14 rounded-xl ${product.iconBg} flex items-center justify-center mb-6`}
                  >
                    <product.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    View Products
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div variants={itemVariants}>
            <div className="bg-primary rounded-lg p-8 h-full flex flex-col justify-center text-white">
              <h3 className="text-2xl font-semibold mb-4">
                Need help choosing the right system?
              </h3>
              <p className="text-white/80 mb-6">
                Our team can help you find the perfect HVAC solution for any project.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary rounded-md px-6 py-3 font-medium hover:bg-gray-100 transition-colors group"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

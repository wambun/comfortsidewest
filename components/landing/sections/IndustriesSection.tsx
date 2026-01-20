'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Building2,
  Stethoscope,
  UtensilsCrossed,
  Landmark,
  Factory,
  ShoppingBag,
  GraduationCap,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: 'Professional Services',
    href: '/industries/professional-services',
    image: '/static/images/industries/professional-services.jpg',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare & Biotech',
    href: '/industries/healthcare',
    image: '/static/images/industries/healthcare.jpg',
  },
  {
    icon: UtensilsCrossed,
    title: 'Hospitality & Resorts',
    href: '/industries/hospitality',
    image: '/static/images/industries/retail.jpg',
  },
  {
    icon: Landmark,
    title: 'Financial Services',
    href: '/industries/financial-services',
    image: '/static/images/industries/professional-services.jpg',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    href: '/industries/manufacturing',
    image: '/static/images/industries/manufacturing.jpg',
  },
  {
    icon: ShoppingBag,
    title: 'Retail',
    href: '/industries/retail',
    image: '/static/images/industries/retail.jpg',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    href: '/industries/education',
    image: '/static/images/industries/technology.jpg',
  },
  {
    icon: HeartHandshake,
    title: 'Non-Profits',
    href: '/industries/non-profits',
    image: '/static/images/industries/healthcare.jpg',
  },
];

export function IndustriesSection() {
  return (
    <section className="section bg-cream">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="badge badge-primary mb-4">Industries We Serve</span>
          <h2 className="text-h2 text-primary mb-4">
            Expert HR Solutions Across Industries
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand the unique challenges of your industry and deliver tailored
            HR solutions that drive success.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <Link
                href={industry.href}
                className="group block relative bg-white rounded-card overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                {/* Background image - shows on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-primary/80" />
                </div>

                {/* Content */}
                <div className="relative p-6 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all duration-300">
                    <industry.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-white transition-colors">
                    {industry.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View all industries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

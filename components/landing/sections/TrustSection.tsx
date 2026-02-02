'use client';

import { motion } from 'framer-motion';
import { Users, Clock, Award, Truck } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Dealer Partners',
  },
  {
    icon: Clock,
    value: '15+',
    label: 'Years Experience',
  },
  {
    icon: Award,
    value: '3',
    label: 'Premium Brands',
  },
  {
    icon: Truck,
    value: '48hr',
    label: 'Fast Shipping',
  },
];

export function TrustSection() {
  return (
    <section className="py-16 lg:py-20 bg-cream">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-4xl lg:text-5xl font-heading font-semibold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

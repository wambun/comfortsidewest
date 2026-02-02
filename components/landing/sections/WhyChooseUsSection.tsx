'use client';

import { motion } from 'framer-motion';
import { Truck, Users, DollarSign, HeadphonesIcon, Package, Award } from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: 'Competitive Wholesale Pricing',
    description:
      'Get the best prices on premium HVAC systems. Volume discounts and dealer incentives available.',
  },
  {
    icon: Truck,
    title: 'Fast Western US Shipping',
    description:
      'Quick delivery across the Western United States. Most orders ship within 24-48 hours.',
  },
  {
    icon: Package,
    title: 'Large Inventory Selection',
    description:
      'Extensive stock of residential and commercial units. Find exactly what your customers need.',
  },
  {
    icon: Users,
    title: 'Dedicated Account Managers',
    description:
      'Personal support from experienced HVAC professionals who understand your business needs.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Technical Support',
    description:
      'Expert technical assistance for installation questions, troubleshooting, and warranty claims.',
  },
  {
    icon: Award,
    title: 'Exclusive Dealer Program',
    description:
      'Access special pricing tiers, marketing support, and priority inventory for registered dealers.',
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section bg-white relative overflow-hidden">
      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <span className="badge badge-primary mb-4">Why Comfortside West</span>
            <h2 className="text-h2 text-primary mb-6">
              Your Trusted HVAC Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              As a leading wholesale distributor of ductless HVAC systems, we're committed
              to helping contractors and dealers succeed with competitive pricing, reliable
              inventory, and exceptional support.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 * index }}
                  className="flex gap-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-primary/15"
                  >
                    <feature.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gray-50 rounded-lg shadow-sm p-8 border border-gray-100">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-white rounded-lg border border-gray-100">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years in Business</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg border border-gray-100">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Active Dealers</div>
                </div>
              </div>

              {/* Feature cards */}
              <div className="space-y-4">
                {features.slice(4).map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

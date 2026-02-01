'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Shield, Star } from 'lucide-react';

const brands = [
  {
    name: 'Cooper&Hunter',
    tagline: 'Industry Leader',
    description:
      'With over 20 years of experience, Cooper&Hunter delivers premium quality mini-split systems with industry-leading warranties and exceptional performance.',
    features: ['20+ Years Experience', 'Inverter Technology', '10-Year Warranty'],
    href: '/brands/cooper-hunter',
    image: '/static/images/brands/cooper-hunter.jpg',
    logo: '/static/images/brands/cooper-hunter-logo.png',
    accent: 'from-blue-500/20 to-blue-600/20',
  },
  {
    name: 'Olmo',
    tagline: 'Smart & Efficient',
    description:
      'Olmo combines cutting-edge technology with affordability. WiFi-enabled smart controls and high SEER ratings make these units perfect for modern homes.',
    features: ['WiFi Enabled', 'High SEER Ratings', 'Smart Controls'],
    href: '/brands/olmo',
    image: '/static/images/brands/olmo.jpg',
    logo: '/static/images/brands/olmo-logo.png',
    accent: 'from-emerald-500/20 to-emerald-600/20',
  },
  {
    name: 'Bravo',
    tagline: 'Best Value',
    description:
      'Bravo offers reliable, budget-friendly HVAC solutions without compromising on quality. Perfect for contractors seeking competitive pricing.',
    features: ['Competitive Pricing', 'Reliable Performance', '5-Year Warranty'],
    href: '/brands/bravo',
    image: '/static/images/brands/bravo.jpg',
    logo: '/static/images/brands/bravo-logo.png',
    accent: 'from-amber-500/20 to-amber-600/20',
  },
];

export function BrandsSection() {
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
          <span className="badge badge-primary mb-4">Our Brands</span>
          <h2 className="text-h2 text-primary mb-4">
            Premium <span className="text-gradient-primary">HVAC Brands</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We partner with industry-leading manufacturers to bring you the best
            ductless HVAC systems at competitive wholesale prices.
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={brand.href}
                className="group block bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 h-full"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${brand.accent}`} />
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-3xl font-heading font-semibold mb-1">{brand.name}</h3>
                      <p className="text-white/80 text-sm">{brand.tagline}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {brand.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {brand.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center">
                          <Star className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Explore {brand.name}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 lg:mt-16"
        >
          <div className="bg-primary/5 rounded-2xl p-8 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mb-4">
                  <Award className="w-7 h-7 text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-1">Authorized Distributor</h4>
                <p className="text-sm text-muted-foreground">Official wholesale partner for all brands</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-1">Full Warranty Support</h4>
                <p className="text-sm text-muted-foreground">Complete manufacturer warranty coverage</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mb-4">
                  <Star className="w-7 h-7 text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-1">Expert Training</h4>
                <p className="text-sm text-muted-foreground">Product training and technical support</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Home,
  Building2,
  Layers,
  ArrowRight,
  Thermometer,
  Wind,
  Gauge,
  CheckCircle,
  Phone,
} from 'lucide-react';
import { CTASection } from '@/components/landing';

const categories = [
  {
    slug: 'residential',
    icon: Home,
    title: 'Residential Systems',
    tagline: 'Perfect for Homes',
    description:
      'Single and multi-zone mini-split systems designed for residential applications. Energy-efficient heating and cooling for any home size.',
    features: [
      'Single & Multi-Zone Options',
      'High SEER Ratings (up to 22+)',
      'Quiet Operation',
      'WiFi Smart Controls Available',
      'Heat Pump Technology',
    ],
    applications: ['Single Family Homes', 'Condos & Apartments', 'Room Additions', 'Garages & Workshops'],
    image: '/static/images/industries/manufacturing.jpg',
    btuRange: '9,000 - 48,000 BTU',
    zones: 'Up to 5 Zones',
  },
  {
    slug: 'commercial',
    icon: Building2,
    title: 'Commercial / VRF Systems',
    tagline: 'Built for Business',
    description:
      'Variable Refrigerant Flow systems for commercial and light commercial applications. Scalable solutions that grow with your business needs.',
    features: [
      'VRF Technology',
      'Simultaneous Heating & Cooling',
      'Centralized Control Systems',
      'High Capacity Options',
      'Energy Recovery',
    ],
    applications: ['Office Buildings', 'Retail Spaces', 'Hotels & Hospitality', 'Medical Facilities'],
    image: '/static/images/industries/manufacturing.jpg',
    btuRange: '48,000 - 288,000 BTU',
    zones: 'Up to 64 Zones',
  },
  {
    slug: 'all-in-one',
    icon: Layers,
    title: 'All-in-One Units',
    tagline: 'Simple & Complete',
    description:
      'Integrated heating and cooling solutions in a single package. Perfect for quick installations and spaces where simplicity is key.',
    features: [
      'Single Unit Installation',
      'Through-the-Wall Design',
      'Heating & Cooling Combined',
      'Easy Maintenance',
      'Compact Footprint',
    ],
    applications: ['Apartments', 'Hotels', 'Senior Living', 'Modular Buildings'],
    image: '/static/images/industries/manufacturing.jpg',
    btuRange: '9,000 - 24,000 BTU',
    zones: 'Single Zone',
  },
];

const benefits = [
  {
    icon: Thermometer,
    title: 'Energy Efficient',
    description: 'Our systems feature high SEER ratings for maximum energy savings.',
  },
  {
    icon: Wind,
    title: 'Quiet Operation',
    description: 'Whisper-quiet indoor units for comfortable living and working spaces.',
  },
  {
    icon: Gauge,
    title: 'Precise Control',
    description: 'Zone-by-zone temperature control for optimal comfort.',
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="badge badge-primary mb-4">Product Catalog</span>
            <h1 className="text-4xl sm:text-5xl lg:text-display font-semibold tracking-headline text-primary mb-6">
              Premium Ductless{' '}
              <span className="text-gradient-primary">HVAC Systems</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our complete range of mini-split and VRF systems from top brands.
              All products come with manufacturer warranties and dedicated dealer support.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-primary text-sm">{benefit.title}</div>
                    <div className="text-xs text-muted-foreground">{benefit.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section bg-cream-dark">
        <div className="container-main">
          <div className="space-y-16 lg:space-y-24">
            {categories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-card">
                    <Image
                      src={category.image}
                      alt={category.title}
                      width={800}
                      height={500}
                      className="w-full h-[300px] lg:h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

                    {/* Specs Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex gap-4">
                        <div className="glass rounded-xl px-4 py-2 text-center">
                          <div className="text-xs text-white/70">BTU Range</div>
                          <div className="text-sm font-semibold text-white">{category.btuRange}</div>
                        </div>
                        <div className="glass rounded-xl px-4 py-2 text-center">
                          <div className="text-xs text-white/70">Zones</div>
                          <div className="text-sm font-semibold text-white">{category.zones}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Icon */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-card flex items-center justify-center">
                    <category.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="badge badge-primary mb-4">{category.tagline}</span>
                  <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-4">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">{category.description}</p>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {category.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Applications */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-primary mb-3">Common Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.applications.map((app) => (
                        <span
                          key={app}
                          className="px-3 py-1 bg-primary/10 rounded-full text-xs text-primary font-medium"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/products/${category.slug}`}
                    className="btn btn-primary text-base px-8 py-4 group"
                  >
                    View {category.title}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Available Section */}
      <section className="section bg-cream">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="badge badge-primary mb-4">Available Brands</span>
            <h2 className="text-h2 text-primary mb-4">
              All Products Available in <span className="text-gradient-primary">3 Top Brands</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from Cooper&Hunter, Olmo, or Bravo to match your project requirements and budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Cooper&Hunter', tagline: 'Premium Quality', href: '/brands/cooper-hunter' },
              { name: 'Olmo', tagline: 'Smart Technology', href: '/brands/olmo' },
              { name: 'Bravo', tagline: 'Best Value', href: '/brands/bravo' },
            ].map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={brand.href}
                  className="group block bg-white rounded-2xl p-8 text-center shadow-soft hover:shadow-card transition-all hover:-translate-y-2"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl font-heading font-bold text-primary">
                      {brand.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-1">{brand.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{brand.tagline}</p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                    View Brand
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dealer Contact Section */}
      <section className="section bg-primary">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                Need Help Choosing the Right System?
              </h2>
              <p className="text-lg text-white/80 mb-6">
                Our experienced team is here to help you select the perfect HVAC solution
                for any residential or commercial project. Get personalized recommendations
                and wholesale pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn bg-white text-primary hover:bg-cream text-base px-8 py-4 group"
                >
                  Contact Sales
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:8009107349"
                  className="btn bg-transparent border-2 border-white/30 text-white hover:bg-white/10 text-base px-8 py-4"
                >
                  <Phone className="w-4 h-4" />
                  800-910-7349
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '500+', label: 'Dealer Partners' },
                { value: '15+', label: 'Years Experience' },
                { value: '24/7', label: 'Support Available' },
                { value: '48hr', label: 'Fast Shipping' },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import {
  Home,
  Building2,
  Layers,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Phone,
  Thermometer,
  Wind,
  Gauge,
  Zap,
  Shield,
  Settings,
} from 'lucide-react';
import { CTASection } from '@/components/landing';

const categories: Record<
  string,
  {
    slug: string;
    icon: typeof Home;
    title: string;
    tagline: string;
    description: string;
    longDescription: string;
    features: string[];
    applications: string[];
    image: string;
    btuRange: string;
    zones: string;
    products: {
      name: string;
      brand: string;
      btu: string;
      seer: string;
      features: string[];
      popular?: boolean;
    }[];
    specs: { label: string; value: string }[];
  }
> = {
  residential: {
    slug: 'residential',
    icon: Home,
    title: 'Residential Systems',
    tagline: 'Perfect for Homes',
    description:
      'Single and multi-zone mini-split systems designed for residential applications.',
    longDescription:
      'Our residential ductless mini-split systems are the ideal solution for homeowners seeking energy-efficient, zone-controlled heating and cooling. Whether you need a single-zone system for a room addition or a multi-zone setup for your entire home, we have options from all three of our premium brands.',
    features: [
      'Single & Multi-Zone Options',
      'High SEER Ratings (up to 22+)',
      'Whisper-Quiet Operation',
      'WiFi Smart Controls Available',
      'Heat Pump Technology',
      'Inverter Compressor Technology',
      'Dehumidification Mode',
      'Auto Restart Function',
    ],
    applications: ['Single Family Homes', 'Condos & Apartments', 'Room Additions', 'Garages & Workshops', 'Sunrooms', 'Home Offices'],
    image: '/static/images/industries/manufacturing.jpg',
    btuRange: '9,000 - 48,000 BTU',
    zones: 'Up to 5 Zones',
    specs: [
      { label: 'BTU Range', value: '9,000 - 48,000' },
      { label: 'SEER Rating', value: 'Up to 22+' },
      { label: 'Zones', value: '1-5' },
      { label: 'Voltage', value: '115V / 230V' },
      { label: 'Refrigerant', value: 'R-410A' },
      { label: 'Warranty', value: '5-10 Years' },
    ],
    products: [
      {
        name: 'Single-Zone Wall Mount',
        brand: 'Cooper&Hunter',
        btu: '9,000 - 24,000 BTU',
        seer: 'Up to 22 SEER',
        features: ['WiFi Ready', 'Heat Pump', 'Inverter'],
        popular: true,
      },
      {
        name: 'Multi-Zone System (2-5 Zones)',
        brand: 'Cooper&Hunter',
        btu: '18,000 - 48,000 BTU',
        seer: 'Up to 21 SEER',
        features: ['Multiple Indoor Options', 'Heat Pump', 'Inverter'],
      },
      {
        name: 'Single-Zone Mini Split',
        brand: 'Olmo',
        btu: '9,000 - 24,000 BTU',
        seer: 'Up to 20 SEER',
        features: ['WiFi Enabled', 'Smart Controls', 'Heat Pump'],
        popular: true,
      },
      {
        name: 'Multi-Zone System',
        brand: 'Olmo',
        btu: '24,000 - 42,000 BTU',
        seer: 'Up to 19 SEER',
        features: ['App Control', 'Zone Control', 'Inverter'],
      },
      {
        name: 'Entry-Level Single Zone',
        brand: 'Bravo',
        btu: '9,000 - 18,000 BTU',
        seer: 'Up to 17 SEER',
        features: ['Value Pricing', 'Reliable', 'Heat Pump'],
      },
      {
        name: 'Budget Multi-Zone',
        brand: 'Bravo',
        btu: '24,000 - 36,000 BTU',
        seer: 'Up to 16 SEER',
        features: ['Affordable', '2-3 Zones', 'Heat Pump'],
      },
    ],
  },
  commercial: {
    slug: 'commercial',
    icon: Building2,
    title: 'Commercial / VRF Systems',
    tagline: 'Built for Business',
    description:
      'Variable Refrigerant Flow systems for commercial and light commercial applications.',
    longDescription:
      'Our commercial VRF (Variable Refrigerant Flow) systems provide scalable, efficient climate control for businesses of all sizes. From small retail spaces to large office buildings, these systems offer simultaneous heating and cooling, centralized control, and exceptional energy efficiency.',
    features: [
      'VRF Technology',
      'Simultaneous Heating & Cooling',
      'Centralized Control Systems',
      'High Capacity Options',
      'Energy Recovery Ventilation',
      'BMS Integration',
      'Long Piping Distances',
      'Modular Expansion',
    ],
    applications: ['Office Buildings', 'Retail Spaces', 'Hotels & Hospitality', 'Medical Facilities', 'Schools & Universities', 'Restaurants'],
    image: '/static/images/industries/manufacturing.jpg',
    btuRange: '48,000 - 288,000 BTU',
    zones: 'Up to 64 Zones',
    specs: [
      { label: 'BTU Range', value: '48,000 - 288,000' },
      { label: 'SEER Rating', value: 'Up to 20+' },
      { label: 'Zones', value: 'Up to 64' },
      { label: 'Voltage', value: '208-230V 3-Phase' },
      { label: 'Refrigerant', value: 'R-410A' },
      { label: 'Warranty', value: '7-10 Years' },
    ],
    products: [
      {
        name: 'Light Commercial VRF',
        brand: 'Cooper&Hunter',
        btu: '48,000 - 96,000 BTU',
        seer: 'Up to 20 SEER',
        features: ['Heat Recovery', 'Up to 16 Zones', 'BMS Ready'],
        popular: true,
      },
      {
        name: 'Commercial VRF System',
        brand: 'Cooper&Hunter',
        btu: '120,000 - 288,000 BTU',
        seer: 'Up to 18 SEER',
        features: ['Modular Design', 'Up to 64 Zones', 'Central Control'],
      },
      {
        name: 'Mid-Size VRF',
        brand: 'Olmo',
        btu: '48,000 - 72,000 BTU',
        seer: 'Up to 19 SEER',
        features: ['Smart Integration', 'Energy Recovery', 'Compact Design'],
      },
      {
        name: 'Commercial Split Systems',
        brand: 'Bravo',
        btu: '36,000 - 60,000 BTU',
        seer: 'Up to 16 SEER',
        features: ['Value Commercial', 'Reliable', 'Easy Install'],
      },
    ],
  },
  'all-in-one': {
    slug: 'all-in-one',
    icon: Layers,
    title: 'All-in-One Units',
    tagline: 'Simple & Complete',
    description:
      'Integrated heating and cooling solutions in a single package.',
    longDescription:
      'Our all-in-one PTAC and packaged terminal units combine heating and cooling in a single, easy-to-install package. Perfect for hospitality, multi-family housing, and applications where simplicity and reliability are paramount. These through-the-wall units require no outdoor unit, making installation straightforward.',
    features: [
      'Single Unit Installation',
      'Through-the-Wall Design',
      'Heating & Cooling Combined',
      'Easy Maintenance',
      'Compact Footprint',
      'No Outdoor Unit Required',
      'Individual Room Control',
      'Quick Replacement',
    ],
    applications: ['Hotels & Motels', 'Apartments', 'Senior Living Facilities', 'Modular Buildings', 'Dormitories', 'Assisted Living'],
    image: '/static/images/industries/manufacturing.jpg',
    btuRange: '9,000 - 24,000 BTU',
    zones: 'Single Zone',
    specs: [
      { label: 'BTU Range', value: '9,000 - 24,000' },
      { label: 'EER Rating', value: 'Up to 12.1' },
      { label: 'Zones', value: '1' },
      { label: 'Voltage', value: '115V / 230V' },
      { label: 'Refrigerant', value: 'R-410A' },
      { label: 'Warranty', value: '5 Years' },
    ],
    products: [
      {
        name: 'PTAC Unit',
        brand: 'Cooper&Hunter',
        btu: '9,000 - 15,000 BTU',
        seer: '12.1 EER',
        features: ['Heat Pump or Electric Heat', 'Standard Sleeve', 'Remote Included'],
        popular: true,
      },
      {
        name: 'High-Capacity PTAC',
        brand: 'Cooper&Hunter',
        btu: '18,000 - 24,000 BTU',
        seer: '11.5 EER',
        features: ['Large Rooms', 'Electric Heat', 'Digital Controls'],
      },
      {
        name: 'Smart PTAC',
        brand: 'Olmo',
        btu: '9,000 - 12,000 BTU',
        seer: '12.0 EER',
        features: ['WiFi Enabled', 'Motion Sensor', 'Energy Saving'],
      },
      {
        name: 'Economy PTAC',
        brand: 'Bravo',
        btu: '9,000 - 15,000 BTU',
        seer: '11.0 EER',
        features: ['Budget Friendly', 'Reliable', 'Easy Install'],
      },
    ],
  },
};

export default function ProductCategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = categories[slug];

  if (!category) {
    notFound();
  }

  const Icon = category.icon;

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-cream-dark">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container-main">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <span className="badge badge-primary">{category.tagline}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-headline text-primary mb-6">
                {category.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {category.longDescription}
              </p>

              {/* Quick Specs */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-xl shadow-soft">
                  <div className="text-sm text-muted-foreground mb-1">BTU Range</div>
                  <div className="font-semibold text-primary">{category.btuRange}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-soft">
                  <div className="text-sm text-muted-foreground mb-1">Zones</div>
                  <div className="font-semibold text-primary">{category.zones}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-soft">
                  <div className="text-sm text-muted-foreground mb-1">Brands</div>
                  <div className="font-semibold text-primary">3 Available</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:8009107349"
                  className="btn btn-primary text-base px-8 py-4"
                >
                  <Phone className="w-4 h-4" />
                  Call for Pricing
                </a>
                <Link
                  href="/contact"
                  className="btn btn-secondary text-base px-8 py-4"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={800}
                  height={500}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features & Applications */}
      <section className="section bg-cream">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-primary mb-6">Features & Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {category.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-soft">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-primary mb-6">Common Applications</h2>
              <div className="flex flex-wrap gap-3">
                {category.applications.map((app) => (
                  <span
                    key={app}
                    className="px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium"
                  >
                    {app}
                  </span>
                ))}
              </div>

              {/* Specifications */}
              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">Technical Specifications</h3>
              <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                {category.specs.map((spec, index) => (
                  <div
                    key={spec.label}
                    className={`flex justify-between p-4 ${
                      index !== category.specs.length - 1 ? 'border-b border-border' : ''
                    }`}
                  >
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-medium text-primary">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Listings */}
      <section className="section bg-cream-dark">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="badge badge-primary mb-4">Available Products</span>
            <h2 className="text-h2 text-primary mb-4">
              {category.title} <span className="text-gradient-primary">by Brand</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contact us for current availability and wholesale pricing on these products.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((product, index) => (
              <motion.div
                key={`${product.brand}-${product.name}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative bg-white rounded-2xl shadow-soft hover:shadow-card transition-all p-6"
              >
                {product.popular && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
                    Popular
                  </span>
                )}

                <div className="mb-4">
                  <span className="text-xs text-accent font-semibold uppercase tracking-wide">
                    {product.brand}
                  </span>
                  <h3 className="text-lg font-semibold text-primary mt-1">{product.name}</h3>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Thermometer className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{product.btu}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Gauge className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{product.seer}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 bg-primary/5 rounded text-xs text-primary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a
                  href="tel:8009107349"
                  className="block w-full text-center btn btn-secondary py-3"
                >
                  Call for Pricing
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="default"
        title="Ready to Order?"
        description="Contact our sales team for wholesale pricing, availability, and expert recommendations for your project."
        primaryCTA={{ text: 'Contact Sales', href: '/contact' }}
        secondaryCTA={{ text: 'Become a Dealer', href: '/dealer-program' }}
      />
    </>
  );
}

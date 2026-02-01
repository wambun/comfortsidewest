'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Award,
  Shield,
  Truck,
  Users,
  GraduationCap,
  DollarSign,
  Headphones,
  Package,
} from 'lucide-react';
import { CTASection } from '@/components/landing';

const benefits = [
  {
    icon: DollarSign,
    title: 'Wholesale Pricing',
    description: 'Competitive wholesale rates on all Cooper&Hunter, Olmo, and Bravo products.',
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    description: 'Quick delivery across the Western United States from our distribution center.',
  },
  {
    icon: Shield,
    title: 'Full Warranty Support',
    description: 'Complete manufacturer warranty coverage with dedicated claims assistance.',
  },
  {
    icon: GraduationCap,
    title: 'Product Training',
    description: 'Comprehensive training on installation, maintenance, and troubleshooting.',
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    description: 'Expert technical assistance when you need it, with knowledgeable staff.',
  },
  {
    icon: Package,
    title: 'Large Inventory',
    description: 'Extensive stock ensures you get the products you need, when you need them.',
  },
];

const requirements = [
  'Active HVAC contractor license or business',
  'Valid business license and tax ID',
  'Verifiable business address',
  'Commitment to quality installations',
];

const testimonials = [
  {
    quote: "Comfortside West has been our go-to distributor for years. Great pricing, fast shipping, and they actually answer the phone when you call.",
    author: 'Mike R.',
    company: 'R&M HVAC Services',
    location: 'Phoenix, AZ',
  },
  {
    quote: "The training they provide on Cooper&Hunter systems really helped us expand our ductless offerings. Our customers love the results.",
    author: 'Sarah L.',
    company: 'Cool Comfort Solutions',
    location: 'Los Angeles, CA',
  },
  {
    quote: "Best wholesale partner we've worked with. Their warranty support is outstanding and they stand behind every product.",
    author: 'David K.',
    company: 'Western Climate Control',
    location: 'Denver, CO',
  },
];

const stats = [
  { value: '500+', label: 'Dealer Partners' },
  { value: '15+', label: 'Years Experience' },
  { value: '99%', label: 'In-Stock Rate' },
  { value: '48hr', label: 'Avg. Delivery' },
];

export default function DealerProgramPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge badge-primary mb-4">Dealer Program</span>
              <h1 className="text-4xl sm:text-5xl lg:text-display font-semibold tracking-headline text-primary mb-6">
                Partner with the{' '}
                <span className="text-gradient-primary">West's Best</span>{' '}
                HVAC Distributor
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Join over 500 successful HVAC contractors and dealers who trust Comfortside West
                for premium ductless systems, competitive pricing, and exceptional support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="btn btn-primary text-base px-8 py-4 group"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:8009107349"
                  className="btn btn-secondary text-base px-8 py-4"
                >
                  <Phone className="w-4 h-4" />
                  800-910-7349
                </a>
              </div>

              {/* Quick benefits */}
              <div className="flex flex-wrap gap-4">
                {['Wholesale Pricing', 'Fast Shipping', 'Full Warranty Support'].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-foreground/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-card text-center"
                  >
                    <div className="text-4xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-cream-dark">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="badge badge-primary mb-4">Dealer Benefits</span>
            <h2 className="text-h2 text-primary mb-4">
              Everything You Need to <span className="text-gradient-primary">Succeed</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              When you partner with Comfortside West, you get more than just products.
              You get a complete support system designed for your success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-card transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="section bg-cream">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="badge badge-primary mb-4">Our Brands</span>
            <h2 className="text-h2 text-primary mb-4">
              Access to <span className="text-gradient-primary">3 Premium Brands</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              As a Comfortside West dealer, you get exclusive access to our complete lineup
              of premium ductless HVAC systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Cooper&Hunter',
                tagline: 'Premium Quality',
                features: ['10-Year Warranty', 'Inverter Technology', 'Full Product Line'],
                color: 'bg-blue-500',
              },
              {
                name: 'Olmo',
                tagline: 'Smart & Efficient',
                features: ['WiFi Standard', 'Smart Controls', 'High SEER'],
                color: 'bg-emerald-500',
              },
              {
                name: 'Bravo',
                tagline: 'Best Value',
                features: ['Competitive Pricing', 'Reliable', '5-Year Warranty'],
                color: 'bg-amber-500',
              },
            ].map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-card transition-all"
              >
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${brand.color} mb-4`}>
                  {brand.tagline}
                </span>
                <h3 className="text-2xl font-semibold text-primary mb-4">{brand.name}</h3>
                <ul className="space-y-3">
                  {brand.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/brands/${brand.name.toLowerCase().replace('&', '-').replace(' ', '')}`}
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm mt-6 hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="section bg-primary text-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                Becoming a Dealer is Easy
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Our streamlined application process gets you set up quickly so you can start
                ordering products right away.
              </p>

              <div className="space-y-6">
                {[
                  { step: '1', title: 'Apply', description: 'Fill out our simple dealer application form' },
                  { step: '2', title: 'Verify', description: 'We verify your business credentials' },
                  { step: '3', title: 'Approve', description: 'Get approved and receive your dealer account' },
                  { step: '4', title: 'Order', description: 'Start ordering at wholesale prices immediately' },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-white/70 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">Basic Requirements</h3>
                <ul className="space-y-4">
                  {requirements.map((req) => (
                    <li key={req} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{req}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white/70 text-sm mb-4">
                    Ready to get started? Apply today and a member of our team will be in touch
                    within 1 business day.
                  </p>
                  <Link
                    href="/contact"
                    className="btn bg-white text-primary hover:bg-cream w-full text-center"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-cream-dark">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="badge badge-primary mb-4">Dealer Testimonials</span>
            <h2 className="text-h2 text-primary mb-4">
              What Our <span className="text-gradient-primary">Dealers Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-soft"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Join Our Dealer Network?"
        description="Apply today and start accessing wholesale pricing on premium ductless HVAC systems."
        primaryCTA={{ text: 'Apply Now', href: '/contact' }}
        secondaryCTA={{ text: 'Call Us', href: 'tel:8009107349' }}
      />
    </>
  );
}

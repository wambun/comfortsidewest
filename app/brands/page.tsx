'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Award,
  Shield,
  Star,
  CheckCircle,
  Phone,
  Truck,
  Users,
} from 'lucide-react';
import { CTASection } from '@/components/landing';

const brands = [
  {
    slug: 'cooper-hunter',
    name: 'Cooper&Hunter',
    tagline: 'Premium Quality',
    description:
      'With over 20 years of experience, Cooper&Hunter delivers premium quality mini-split systems with industry-leading warranties and exceptional performance. Trusted by contractors worldwide.',
    features: [
      '20+ Years in Industry',
      'Inverter Technology',
      '10-Year Compressor Warranty',
      'WiFi-Ready Options',
      'High SEER Ratings',
      'Full Product Line',
    ],
    highlights: [
      { label: 'Warranty', value: '10 Years' },
      { label: 'SEER Range', value: '16-22+' },
      { label: 'Product Lines', value: '12+' },
    ],
    color: 'from-blue-500/20 to-blue-600/20',
    accentColor: 'bg-blue-500',
  },
  {
    slug: 'olmo',
    name: 'Olmo',
    tagline: 'Smart & Efficient',
    description:
      'Olmo combines cutting-edge technology with affordability. WiFi-enabled smart controls and high SEER ratings make these units perfect for modern, connected homes and tech-savvy installers.',
    features: [
      'Built-In WiFi Controls',
      'Smart Home Compatible',
      'High SEER Efficiency',
      'Sleek Modern Design',
      'Voice Control Ready',
      'App-Based Monitoring',
    ],
    highlights: [
      { label: 'Warranty', value: '7 Years' },
      { label: 'SEER Range', value: '17-20' },
      { label: 'Smart Features', value: 'Standard' },
    ],
    color: 'from-emerald-500/20 to-emerald-600/20',
    accentColor: 'bg-emerald-500',
  },
  {
    slug: 'bravo',
    name: 'Bravo',
    tagline: 'Best Value',
    description:
      'Bravo offers reliable, budget-friendly HVAC solutions without compromising on quality. Perfect for price-conscious contractors and projects where value is the top priority.',
    features: [
      'Competitive Wholesale Pricing',
      'Reliable Performance',
      '5-Year Warranty',
      'Easy Installation',
      'Parts Availability',
      'Consistent Quality',
    ],
    highlights: [
      { label: 'Warranty', value: '5 Years' },
      { label: 'SEER Range', value: '15-17' },
      { label: 'Price Point', value: 'Value' },
    ],
    color: 'from-amber-500/20 to-amber-600/20',
    accentColor: 'bg-amber-500',
  },
];

const benefits = [
  {
    icon: Award,
    title: 'Authorized Distributor',
    description: 'Official wholesale partner for all three premium HVAC brands.',
  },
  {
    icon: Shield,
    title: 'Full Warranty Support',
    description: 'Complete manufacturer warranty coverage on all products.',
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    description: 'Quick delivery across the Western United States.',
  },
  {
    icon: Users,
    title: 'Dealer Support',
    description: 'Expert training and technical support for our partners.',
  },
];

export default function BrandsPage() {
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
            <span className="badge badge-primary mb-4">Our Partners</span>
            <h1 className="text-4xl sm:text-5xl lg:text-display font-semibold tracking-headline text-primary mb-6">
              Premium HVAC{' '}
              <span className="text-gradient-primary">Brands</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              As an authorized wholesale distributor, we partner with the industry's most trusted
              HVAC manufacturers to bring you quality systems at competitive prices.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex flex-col items-center p-4 bg-white rounded-xl shadow-soft"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center mb-2">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-sm font-semibold text-primary text-center">{benefit.title}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="section bg-cream-dark">
        <div className="container-main">
          <div className="space-y-16 lg:space-y-24">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? '' : ''
                }`}
              >
                {/* Brand Card */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${brand.color} p-8 lg:p-12`}>
                    <div className="relative z-10">
                      {/* Brand Logo Placeholder */}
                      <div className="bg-white rounded-2xl p-6 inline-block mb-6 shadow-soft">
                        <div className="text-3xl font-heading font-bold text-primary">
                          {brand.name}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="grid grid-cols-3 gap-4 mt-8">
                        {brand.highlights.map((highlight) => (
                          <div key={highlight.label} className="bg-white/80 backdrop-blur rounded-xl p-4 text-center">
                            <div className="text-xl font-bold text-primary">{highlight.value}</div>
                            <div className="text-xs text-muted-foreground">{highlight.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${brand.accentColor} mb-4`}>
                    {brand.tagline}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-4">
                    {brand.name}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">{brand.description}</p>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {brand.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={`/brands/${brand.slug}`}
                      className="btn btn-primary text-base px-8 py-4 group"
                    >
                      Explore {brand.name}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/products"
                      className="btn btn-secondary text-base px-8 py-4"
                    >
                      View Products
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section bg-cream">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="badge badge-primary mb-4">Compare Brands</span>
            <h2 className="text-h2 text-primary mb-4">
              Which Brand is <span className="text-gradient-primary">Right for You?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each brand serves different needs. Here's a quick comparison to help you choose.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-x-auto"
          >
            <table className="w-full bg-white rounded-2xl shadow-soft overflow-hidden">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left font-semibold">Feature</th>
                  <th className="p-4 text-center font-semibold">Cooper&Hunter</th>
                  <th className="p-4 text-center font-semibold">Olmo</th>
                  <th className="p-4 text-center font-semibold">Bravo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4 font-medium text-primary">Warranty</td>
                  <td className="p-4 text-center">10 Years</td>
                  <td className="p-4 text-center">7 Years</td>
                  <td className="p-4 text-center">5 Years</td>
                </tr>
                <tr className="bg-cream/50">
                  <td className="p-4 font-medium text-primary">SEER Ratings</td>
                  <td className="p-4 text-center">16-22+</td>
                  <td className="p-4 text-center">17-20</td>
                  <td className="p-4 text-center">15-17</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-primary">WiFi Control</td>
                  <td className="p-4 text-center">Optional</td>
                  <td className="p-4 text-center">Standard</td>
                  <td className="p-4 text-center">Optional</td>
                </tr>
                <tr className="bg-cream/50">
                  <td className="p-4 font-medium text-primary">Price Point</td>
                  <td className="p-4 text-center">Premium</td>
                  <td className="p-4 text-center">Mid-Range</td>
                  <td className="p-4 text-center">Value</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-primary">Best For</td>
                  <td className="p-4 text-center text-sm">Long-term reliability</td>
                  <td className="p-4 text-center text-sm">Smart home integration</td>
                  <td className="p-4 text-center text-sm">Budget-conscious projects</td>
                </tr>
                <tr className="bg-cream/50">
                  <td className="p-4 font-medium text-primary">Product Range</td>
                  <td className="p-4 text-center">Full Line</td>
                  <td className="p-4 text-center">Residential Focus</td>
                  <td className="p-4 text-center">Essential Models</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-8"
          >
            <p className="text-muted-foreground mb-4">
              Not sure which brand is right for your project?
            </p>
            <a
              href="tel:8009107349"
              className="btn btn-primary text-base px-8 py-4 inline-flex"
            >
              <Phone className="w-4 h-4" />
              Call Us: 800-910-7349
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Partner with Comfortside West?"
        description="Become a dealer today and get access to all three premium brands at competitive wholesale pricing."
        primaryCTA={{ text: 'Become a Dealer', href: '/dealer-program' }}
        secondaryCTA={{ text: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Phone,
  Award,
  Shield,
  Star,
  Thermometer,
  Gauge,
  Home,
  Building2,
  Layers,
} from 'lucide-react';
import { CTASection } from '@/components/landing';

const brandsData: Record<
  string,
  {
    slug: string;
    name: string;
    tagline: string;
    description: string;
    longDescription: string;
    history: string;
    features: string[];
    warranty: {
      compressor: string;
      parts: string;
      labor: string;
    };
    highlights: { label: string; value: string }[];
    productLines: {
      category: string;
      icon: typeof Home;
      products: {
        name: string;
        btu: string;
        seer: string;
        features: string[];
      }[];
    }[];
    certifications: string[];
    accentColor: string;
    bgGradient: string;
  }
> = {
  'cooper-hunter': {
    slug: 'cooper-hunter',
    name: 'Cooper&Hunter',
    tagline: 'Premium Quality',
    description: 'Industry-leading mini-split systems with over 20 years of proven reliability.',
    longDescription:
      'Cooper&Hunter has been a trusted name in the HVAC industry for over two decades. Known for their commitment to quality, innovation, and customer satisfaction, Cooper&Hunter systems combine advanced inverter technology with robust build quality to deliver exceptional performance year after year.',
    history:
      'Founded with a mission to provide reliable, energy-efficient climate control solutions, Cooper&Hunter has grown to become one of the most respected brands in the ductless HVAC market. Their products are installed in millions of homes and businesses worldwide.',
    features: [
      '20+ Years Industry Experience',
      'Advanced Inverter Technology',
      'Industry-Leading Warranties',
      'WiFi-Ready Smart Controls',
      'High SEER Efficiency Ratings',
      'Full Residential & Commercial Line',
      'Quiet Operation Technology',
      'Cold Climate Heat Pump Options',
      'Self-Diagnostic Functions',
      'Anti-Corrosion Coatings',
    ],
    warranty: {
      compressor: '10 Years',
      parts: '5 Years',
      labor: 'Varies by Model',
    },
    highlights: [
      { label: 'Years in Business', value: '20+' },
      { label: 'SEER Range', value: '16-22+' },
      { label: 'Product Lines', value: '12+' },
      { label: 'Compressor Warranty', value: '10 Years' },
    ],
    productLines: [
      {
        category: 'Residential',
        icon: Home,
        products: [
          {
            name: 'Sophia Series',
            btu: '9,000 - 36,000 BTU',
            seer: 'Up to 22 SEER',
            features: ['Premium Efficiency', 'WiFi Ready', 'Inverter'],
          },
          {
            name: 'Karolina Series',
            btu: '9,000 - 24,000 BTU',
            seer: 'Up to 20 SEER',
            features: ['Value Premium', 'Quiet Operation', 'Heat Pump'],
          },
          {
            name: 'Multi-Zone Systems',
            btu: '18,000 - 48,000 BTU',
            seer: 'Up to 21 SEER',
            features: ['2-5 Zones', 'Flexible Design', 'Individual Control'],
          },
        ],
      },
      {
        category: 'Commercial',
        icon: Building2,
        products: [
          {
            name: 'VRF Systems',
            btu: '48,000 - 288,000 BTU',
            seer: 'Up to 20 SEER',
            features: ['Heat Recovery', 'Central Control', 'Up to 64 Zones'],
          },
          {
            name: 'Light Commercial',
            btu: '24,000 - 60,000 BTU',
            seer: 'Up to 18 SEER',
            features: ['High Capacity', 'Durable Build', 'BMS Ready'],
          },
        ],
      },
      {
        category: 'All-in-One',
        icon: Layers,
        products: [
          {
            name: 'PTAC Units',
            btu: '9,000 - 24,000 BTU',
            seer: '12.1 EER',
            features: ['Through-Wall', 'Heat Pump/Electric', 'Standard Sleeve'],
          },
        ],
      },
    ],
    certifications: ['Energy Star Partner', 'AHRI Certified', 'ETL Listed', 'EPA Compliant'],
    accentColor: 'bg-blue-500',
    bgGradient: 'from-blue-500/20 to-blue-600/20',
  },
  olmo: {
    slug: 'olmo',
    name: 'Olmo',
    tagline: 'Smart & Efficient',
    description: 'Modern, connected HVAC systems with built-in smart home technology.',
    longDescription:
      'Olmo represents the future of home climate control. Every system comes equipped with built-in WiFi connectivity and smart home integration, allowing homeowners to control their comfort from anywhere. Combining sleek aesthetics with high-efficiency performance, Olmo is the perfect choice for modern, tech-savvy installations.',
    history:
      'Olmo was designed from the ground up for the connected home. Recognizing the growing demand for smart home integration, Olmo developed a complete line of ductless systems that seamlessly integrate with popular smart home platforms.',
    features: [
      'Built-In WiFi Connectivity',
      'Smart Home Compatible',
      'High SEER Efficiency',
      'Sleek Modern Design',
      'Voice Control Ready',
      'Mobile App Monitoring',
      'Alexa & Google Compatible',
      'Geo-Fencing Capability',
      'Usage Tracking & Reports',
      'Automatic Updates',
    ],
    warranty: {
      compressor: '7 Years',
      parts: '5 Years',
      labor: 'Varies by Model',
    },
    highlights: [
      { label: 'WiFi Control', value: 'Standard' },
      { label: 'SEER Range', value: '17-20' },
      { label: 'Smart Features', value: 'Built-In' },
      { label: 'Compressor Warranty', value: '7 Years' },
    ],
    productLines: [
      {
        category: 'Residential',
        icon: Home,
        products: [
          {
            name: 'Alpic Series',
            btu: '9,000 - 24,000 BTU',
            seer: 'Up to 20 SEER',
            features: ['WiFi Standard', 'Voice Control', 'Smart Scheduling'],
          },
          {
            name: 'Multi-Zone Smart',
            btu: '24,000 - 42,000 BTU',
            seer: 'Up to 19 SEER',
            features: ['Zone-by-Zone App Control', 'Energy Reports', 'Inverter'],
          },
        ],
      },
      {
        category: 'Commercial',
        icon: Building2,
        products: [
          {
            name: 'Commercial Smart',
            btu: '48,000 - 72,000 BTU',
            seer: 'Up to 19 SEER',
            features: ['Fleet Management', 'Remote Diagnostics', 'API Access'],
          },
        ],
      },
      {
        category: 'All-in-One',
        icon: Layers,
        products: [
          {
            name: 'Smart PTAC',
            btu: '9,000 - 15,000 BTU',
            seer: '12.0 EER',
            features: ['WiFi Enabled', 'Motion Sensor', 'Guest Mode'],
          },
        ],
      },
    ],
    certifications: ['Energy Star Partner', 'AHRI Certified', 'ETL Listed', 'Works with Alexa'],
    accentColor: 'bg-emerald-500',
    bgGradient: 'from-emerald-500/20 to-emerald-600/20',
  },
  bravo: {
    slug: 'bravo',
    name: 'Bravo',
    tagline: 'Best Value',
    description: 'Reliable, budget-friendly HVAC solutions without compromising quality.',
    longDescription:
      "Bravo is designed for contractors and homeowners who need dependable climate control at an affordable price. While priced competitively, Bravo systems don't cut corners on quality. Every unit undergoes rigorous testing to ensure reliable performance and longevity.",
    history:
      'Bravo was created to fill the gap in the market for truly affordable yet reliable ductless systems. By focusing on essential features and efficient manufacturing, Bravo delivers exceptional value without sacrificing the performance contractors and homeowners need.',
    features: [
      'Competitive Wholesale Pricing',
      'Proven Reliability',
      'Easy Installation',
      'Quality Components',
      'Comprehensive 5-Year Warranty',
      'Parts Availability',
      'Simple Controls',
      'Durable Construction',
      'Consistent Performance',
      'Contractor-Friendly',
    ],
    warranty: {
      compressor: '5 Years',
      parts: '5 Years',
      labor: 'Varies',
    },
    highlights: [
      { label: 'Price Point', value: 'Value' },
      { label: 'SEER Range', value: '15-17' },
      { label: 'Warranty', value: '5 Years' },
      { label: 'Reliability', value: 'Proven' },
    ],
    productLines: [
      {
        category: 'Residential',
        icon: Home,
        products: [
          {
            name: 'Value Single-Zone',
            btu: '9,000 - 18,000 BTU',
            seer: 'Up to 17 SEER',
            features: ['Best Price', 'Reliable', 'Heat Pump'],
          },
          {
            name: 'Budget Multi-Zone',
            btu: '24,000 - 36,000 BTU',
            seer: 'Up to 16 SEER',
            features: ['2-3 Zones', 'Affordable', 'Inverter'],
          },
        ],
      },
      {
        category: 'Commercial',
        icon: Building2,
        products: [
          {
            name: 'Light Commercial',
            btu: '36,000 - 60,000 BTU',
            seer: 'Up to 16 SEER',
            features: ['Value Commercial', 'High Capacity', 'Durable'],
          },
        ],
      },
      {
        category: 'All-in-One',
        icon: Layers,
        products: [
          {
            name: 'Economy PTAC',
            btu: '9,000 - 15,000 BTU',
            seer: '11.0 EER',
            features: ['Budget-Friendly', 'Simple Install', 'Reliable'],
          },
        ],
      },
    ],
    certifications: ['AHRI Certified', 'ETL Listed', 'EPA Compliant'],
    accentColor: 'bg-amber-500',
    bgGradient: 'from-amber-500/20 to-amber-600/20',
  },
};

export default function BrandPage() {
  const params = useParams();
  const slug = params.slug as string;
  const brand = brandsData[slug];

  if (!brand) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className={`absolute inset-0 bg-gradient-to-br ${brand.bgGradient} opacity-30`} />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/50 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
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
              href="/brands"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Brands
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${brand.accentColor}`}>
                  {brand.tagline}
                </span>
              </div>

              {/* Brand Logo */}
              <div className="bg-white rounded-2xl p-6 inline-block mb-6 shadow-soft">
                <div className="text-4xl font-heading font-bold text-primary">
                  {brand.name}
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                {brand.longDescription}
              </p>

              <p className="text-muted-foreground mb-8">
                {brand.history}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:8009107349"
                  className="btn btn-primary text-base px-8 py-4"
                >
                  <Phone className="w-4 h-4" />
                  Call for Pricing
                </a>
                <Link
                  href="/products"
                  className="btn btn-secondary text-base px-8 py-4"
                >
                  View Products
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4">
                {brand.highlights.map((highlight) => (
                  <div
                    key={highlight.label}
                    className="bg-white rounded-2xl p-6 shadow-soft text-center"
                  >
                    <div className="text-3xl font-bold text-primary mb-1">
                      {highlight.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {highlight.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Warranty Info */}
              <div className="mt-6 bg-white rounded-2xl p-6 shadow-soft">
                <h3 className="font-semibold text-primary mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  Warranty Coverage
                </h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-primary">{brand.warranty.compressor}</div>
                    <div className="text-xs text-muted-foreground">Compressor</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">{brand.warranty.parts}</div>
                    <div className="text-xs text-muted-foreground">Parts</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">{brand.warranty.labor}</div>
                    <div className="text-xs text-muted-foreground">Labor</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-cream-dark">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="badge badge-primary mb-4">Features</span>
            <h2 className="text-h2 text-primary mb-4">
              Why Choose <span className="text-gradient-primary">{brand.name}</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {brand.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-soft"
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <h3 className="text-lg font-semibold text-primary mb-4">Certifications & Standards</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {brand.certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full"
                >
                  <Award className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-primary">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Lines */}
      <section className="section bg-cream">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="badge badge-primary mb-4">Product Catalog</span>
            <h2 className="text-h2 text-primary mb-4">
              {brand.name} <span className="text-gradient-primary">Product Lines</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the complete range of {brand.name} systems available through Comfortside West.
            </p>
          </motion.div>

          <div className="space-y-12">
            {brand.productLines.map((line, lineIndex) => (
              <motion.div
                key={line.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: lineIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                    <line.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary">{line.category}</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {line.products.map((product) => (
                    <div
                      key={product.name}
                      className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all"
                    >
                      <h4 className="text-lg font-semibold text-primary mb-3">{product.name}</h4>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Thermometer className="w-4 h-4 text-muted-foreground" />
                          <span>{product.btu}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Gauge className="w-4 h-4 text-muted-foreground" />
                          <span>{product.seer}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-2 py-1 bg-primary/5 rounded text-xs text-primary"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-primary">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
              Ready to Order {brand.name} Products?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact our sales team for wholesale pricing, availability, and expert recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8009107349"
                className="btn bg-white text-primary hover:bg-cream text-base px-8 py-4"
              >
                <Phone className="w-4 h-4" />
                800-910-7349
              </a>
              <Link
                href="/contact"
                className="btn bg-transparent border-2 border-white/30 text-white hover:bg-white/10 text-base px-8 py-4"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Brands */}
      <section className="section bg-cream-dark">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h3 className="text-xl font-semibold text-primary">Explore Other Brands</h3>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {Object.values(brandsData)
              .filter((b) => b.slug !== brand.slug)
              .map((otherBrand) => (
                <Link
                  key={otherBrand.slug}
                  href={`/brands/${otherBrand.slug}`}
                  className="group flex items-center gap-3 bg-white rounded-xl px-6 py-4 shadow-soft hover:shadow-card transition-all"
                >
                  <span className={`w-3 h-3 rounded-full ${otherBrand.accentColor}`} />
                  <span className="font-medium text-primary group-hover:text-primary/80">
                    {otherBrand.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

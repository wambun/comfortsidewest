import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CTASection } from '@/components/landing';
import { Target, Users, Truck, Award, Shield, Clock, Building2, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Comfortside West - your trusted wholesale distributor for premium ductless HVAC systems from Cooper&Hunter, Olmo, and Bravo.',
};

const values = [
  {
    icon: Target,
    title: 'Dealer-First Approach',
    description:
      'We partner exclusively with HVAC contractors and dealers. Our success is built on your success.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description:
      'Our experienced team provides personalized service, technical support, and product training.',
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    description:
      'Strategically located to serve the Western United States with quick delivery times.',
  },
  {
    icon: Award,
    title: 'Premium Brands',
    description:
      'We carry only trusted brands: Cooper&Hunter, Olmo, and Bravo - proven quality you can rely on.',
  },
  {
    icon: Shield,
    title: 'Full Warranty Support',
    description:
      'Complete manufacturer warranty coverage and dedicated claims processing assistance.',
  },
  {
    icon: Clock,
    title: 'Responsive Service',
    description:
      'When you need answers or product support, our team responds quickly to keep your projects moving.',
  },
];

const stats = [
  { value: '500+', label: 'Dealer Partners' },
  { value: '15+', label: 'Years Experience' },
  { value: '3', label: 'Premium Brands' },
  { value: '24/7', label: 'Support' },
];

const serviceAreas = [
  'California',
  'Nevada',
  'Arizona',
  'Oregon',
  'Washington',
  'Utah',
  'Colorado',
  'New Mexico',
  'Idaho',
  'Montana',
  'Wyoming',
  'Hawaii',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-cream">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-primary mb-4">About Us</span>
              <h1 className="text-h1 text-primary mb-6">
                Your Western States HVAC Wholesale Partner
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Comfortside West is a leading wholesale distributor of premium ductless HVAC
                systems, serving HVAC contractors and dealers across the Western United States.
                We specialize in mini-split and VRF systems from Cooper&Hunter, Olmo, and Bravo.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/dealer-program" className="btn btn-primary">
                  Become a Dealer
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-card">
                <Image
                  src="/static/images/industries/manufacturing.jpg"
                  alt="Comfortside West warehouse and distribution"
                  width={1200}
                  height={800}
                  className="w-full h-[350px] lg:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>

              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-4 right-4 lg:left-6 lg:right-6">
                <div className="grid grid-cols-4 gap-2 lg:gap-3">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-3 lg:p-4 text-center shadow-card"
                    >
                      <div className="text-lg lg:text-2xl font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-[10px] lg:text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-primary text-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 mb-6">Our Mission</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              To empower HVAC contractors and dealers with premium ductless systems, competitive
              wholesale pricing, and exceptional support - helping them grow their businesses
              and deliver outstanding comfort solutions to their customers.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-cream-dark">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="badge badge-primary mb-4">Why Choose Us</span>
            <h2 className="text-h2 text-primary mb-4">The Comfortside Difference</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              When it comes to selecting an HVAC wholesale partner, we know you have choices.
              Here's why dealers choose Comfortside West.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-card p-8 shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section bg-cream">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-primary mb-4">Our Story</span>
              <h2 className="text-h2 text-primary mb-6">
                Built on Trust, Driven by Service
              </h2>
              <p className="text-muted-foreground mb-6">
                Comfortside West was founded with a simple vision: to be the wholesale partner
                that HVAC contractors actually want to work with. After years of experiencing
                the challenges of working with large, impersonal distributors, our founders
                set out to create something better.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, we serve over 500 dealers across the Western United States, providing
                not just products, but a true partnership. From product selection and training
                to warranty support and marketing assistance, we're invested in our dealers'
                success at every step.
              </p>
              <p className="text-muted-foreground">
                Our exclusive partnerships with Cooper&Hunter, Olmo, and Bravo mean we can
                offer a complete range of ductless solutions for any application - from
                budget-friendly residential units to sophisticated commercial VRF systems.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-primary rounded-2xl p-6 text-white">
                    <div className="text-4xl font-bold mb-2">15+</div>
                    <div className="text-white/80">Years Serving the West Coast</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-soft">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-muted-foreground">Trusted Dealer Partners</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white rounded-2xl p-6 shadow-soft">
                    <div className="text-4xl font-bold text-primary mb-2">3</div>
                    <div className="text-muted-foreground">Premium Brands Available</div>
                  </div>
                  <div className="bg-accent/10 rounded-2xl p-6">
                    <div className="text-4xl font-bold text-accent mb-2">48hr</div>
                    <div className="text-foreground/80">Typical Shipping Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-cream-dark">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-primary mb-4">Coverage Area</span>
              <h2 className="text-h2 text-primary mb-6">
                Serving the Western United States
              </h2>
              <p className="text-muted-foreground mb-6">
                Strategically located to provide fast, reliable shipping to dealers throughout
                the Western states. Our distribution network ensures you get the products you
                need, when you need them.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {serviceAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-soft"
                  >
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-primary">{area}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn btn-primary">
                Check Availability in Your Area
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card bg-primary/10 p-8">
                <div className="text-center">
                  <Building2 className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Distribution Center
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Centrally located to serve the entire Western region with efficiency
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-primary">48hr</div>
                      <div className="text-xs text-muted-foreground">Avg. Delivery</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-primary">99%</div>
                      <div className="text-xs text-muted-foreground">In-Stock Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Partner with Comfortside West?"
        description="Join our network of successful HVAC dealers and get access to premium brands at wholesale pricing."
        primaryCTA={{ text: 'Become a Dealer', href: '/dealer-program' }}
        secondaryCTA={{ text: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}

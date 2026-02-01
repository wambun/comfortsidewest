'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '800-910-7349',
    href: 'tel:8009107349',
    description: 'Call us for immediate assistance',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'West@comfortside.com',
    href: 'mailto:West@comfortside.com',
    description: 'Send us a message anytime',
  },
  {
    icon: MapPin,
    title: 'Service Area',
    value: 'Western United States',
    href: null,
    description: 'Serving dealers across the West',
  },
];

const contactTypes = [
  'New Dealer Inquiry',
  'Existing Dealer',
  'Product Information',
  'Warranty/Support',
  'General Question',
  'Other',
];

const productInterests = [
  'Residential Mini-Splits',
  'Commercial/VRF Systems',
  'All-in-One/PTAC Units',
  'Multiple Categories',
  'Not Sure - Need Guidance',
];

const referralSources = [
  'Google Search',
  'Industry Referral',
  'Trade Show',
  'Manufacturer Referral',
  'LinkedIn',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    contactType: '',
    productInterest: '',
    referralSource: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitSuccess(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-cream">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge badge-primary mb-4">Contact Us</span>
            <h1 className="text-h1 text-primary mb-6">
              Let's Talk HVAC
            </h1>
            <p className="text-lg text-muted-foreground">
              Whether you're interested in becoming a dealer, need product information,
              or have questions about our services, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-cream-dark">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-h3 text-primary mb-6">Get in Touch</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-primary font-medium hover:text-primary/80 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-primary font-medium">{info.value}</p>
                      )}
                      <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-card p-6 shadow-soft mb-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 5:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>

              {/* Dealer Benefits CTA */}
              <div className="bg-primary rounded-card p-6 text-white">
                <h3 className="font-semibold mb-3">Become a Dealer</h3>
                <p className="text-sm text-white/80 mb-4">
                  Join our network of 500+ dealers and get access to wholesale pricing,
                  training, and dedicated support.
                </p>
                <Link
                  href="/dealer-program"
                  className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-button font-medium text-sm hover:bg-cream transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-card p-8 shadow-card">
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-h3 text-primary mb-4">Message Received!</h2>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. A member of our team will get back to you
                      within 1 business day.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={() => setSubmitSuccess(false)}
                        className="btn btn-secondary"
                      >
                        Send Another Message
                      </button>
                      <Link href="/products" className="btn btn-primary">
                        Browse Products
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold text-primary mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="contactType"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            I am a... *
                          </label>
                          <select
                            id="contactType"
                            name="contactType"
                            required
                            value={formData.contactType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          >
                            <option value="">Select...</option>
                            {contactTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="productInterest"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Product Interest
                          </label>
                          <select
                            id="productInterest"
                            name="productInterest"
                            value={formData.productInterest}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          >
                            <option value="">Select...</option>
                            {productInterests.map((interest) => (
                              <option key={interest} value={interest}>
                                {interest}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="referralSource"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          How did you hear about us?
                        </label>
                        <select
                          id="referralSource"
                          name="referralSource"
                          value={formData.referralSource}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        >
                          <option value="">Select...</option>
                          {referralSources.map((source) => (
                            <option key={source} value={source}>
                              {source}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                          placeholder="Tell us about your HVAC needs, projects, or questions..."
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-primary flex-1 sm:flex-initial"
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                          <Send className="w-4 h-4" />
                        </button>
                        <a
                          href="tel:8009107349"
                          className="btn btn-secondary flex-1 sm:flex-initial"
                        >
                          <Phone className="w-4 h-4" />
                          Or Call: 800-910-7349
                        </a>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section bg-cream">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-h2 text-primary mb-4">Quick Links</h2>
            <p className="text-muted-foreground">
              Find what you're looking for faster
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/products"
              className="group bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/25 transition-colors">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Browse Products</h3>
              <p className="text-sm text-muted-foreground">
                Explore our full catalog of mini-split and VRF systems
              </p>
            </Link>

            <Link
              href="/brands"
              className="group bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/25 transition-colors">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Our Brands</h3>
              <p className="text-sm text-muted-foreground">
                Learn about Cooper&Hunter, Olmo, and Bravo
              </p>
            </Link>

            <Link
              href="/dealer-program"
              className="group bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/25 transition-colors">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Dealer Program</h3>
              <p className="text-sm text-muted-foreground">
                Join our network of 500+ successful dealers
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

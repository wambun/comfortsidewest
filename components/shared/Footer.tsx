'use client';

import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import { footerLinks, socialLinks } from '@/data/config/footerLinks';
import { contactInfo } from '@/data/config/headerNavLinks';
import { siteConfig } from '@/data/config/site.settings';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Contact Section */}
      <div className="border-b border-white/10">
        <div className="container-main py-12 lg:py-16">
          <h2 className="font-heading text-3xl lg:text-4xl text-center mb-8">
            Contact Us
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5 text-accent" />
              <span className="text-lg">{contactInfo.phone}</span>
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5 text-accent" />
              <span className="text-lg">{contactInfo.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-main py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Logo and Social Links */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="flex items-center">
                <span className="text-3xl font-bold">
                  <span className="text-accent">C</span>
                  <span className="text-white">H</span>
                </span>
              </div>
              <span className="text-white text-xl font-semibold group-hover:text-white/80 transition-colors">
                Comfortside West
              </span>
            </Link>
            <p className="text-white/60 text-sm mb-6 max-w-xs">
              Your trusted wholesale distributor for premium ductless HVAC systems. Serving dealers across the Western United States.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={socialLinks.bbb}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Better Business Bureau"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerLinks.map((column) => (
                <div key={column.columnName}>
                  <h3 className="text-white uppercase text-xs font-semibold tracking-wider mb-4 pb-2 border-b border-white/10">
                    {column.columnName}
                  </h3>
                  <ul className="space-y-3">
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-white/60 hover:text-white text-sm transition-colors"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} {siteConfig.author}. All rights reserved.
            </p>
            <p className="text-white/40 text-sm">
              Wholesale HVAC Distributor
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

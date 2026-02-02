'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { headerNavLinks, contactInfo, headerCTA } from '@/data/config/headerNavLinks';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-primary text-white/90 text-sm">
        <div className="container-main flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{contactInfo.phone}</span>
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="hidden sm:flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{contactInfo.email}</span>
            </a>
          </div>
          <Link
            href={headerCTA.href}
            className="flex items-center gap-2 text-white hover:text-white/80 transition-colors font-medium"
          >
            <span>{headerCTA.title}</span>
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={cn(
          'bg-white border-b border-gray-200 transition-all duration-300',
          isScrolled && 'shadow-lg'
        )}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center">
                <span className="text-3xl lg:text-4xl font-bold">
                  <span className="text-accent">C</span>
                  <span className="text-primary">H</span>
                </span>
              </div>
              <div className="hidden sm:block">
                <span className="text-primary font-bold text-lg lg:text-xl group-hover:text-primary/80 transition-colors">
                  Comfortside West
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {headerNavLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors',
                      pathname === link.href || pathname.startsWith(link.href + '/')
                        ? 'text-primary bg-primary/5'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    )}
                  >
                    {link.title}
                    {link.children && (
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          activeDropdown === link.href && 'rotate-180'
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2 w-64"
                      >
                        <div className="bg-white rounded-lg border border-gray-200 shadow-xl overflow-hidden">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                'block px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0',
                                pathname === child.href && 'bg-primary/5'
                              )}
                            >
                              <span className="block text-gray-900 font-medium text-sm">
                                {child.title}
                              </span>
                              {child.description && (
                                <span className="block text-gray-500 text-xs mt-0.5">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href={headerCTA.href}
                className="inline-flex items-center justify-center bg-primary text-white hover:bg-primary-600 px-6 py-2.5 text-sm font-semibold rounded-md transition-all duration-200 uppercase tracking-wide"
              >
                {headerCTA.title}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[104px] bg-white z-40 lg:hidden overflow-y-auto"
          >
            <div className="container-main py-6">
              <nav className="space-y-1">
                {headerNavLinks.map((link) => (
                  <div key={link.href}>
                    {link.children ? (
                      <div>
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === link.href ? null : link.href
                            )
                          }
                          className={cn(
                            'flex items-center justify-between w-full px-4 py-3 text-lg font-medium rounded-md transition-colors',
                            activeDropdown === link.href
                              ? 'text-primary bg-primary/5'
                              : 'text-gray-700'
                          )}
                        >
                          {link.title}
                          <ChevronDown
                            className={cn(
                              'w-5 h-5 transition-transform duration-200',
                              activeDropdown === link.href && 'rotate-180'
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.href && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-2 space-y-1">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className={cn(
                                      'block px-4 py-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors',
                                      pathname === child.href && 'text-primary bg-primary/5'
                                    )}
                                  >
                                    {child.title}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          'block px-4 py-3 text-lg font-medium rounded-md transition-colors',
                          pathname === link.href
                            ? 'text-primary bg-primary/5'
                            : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                        )}
                      >
                        {link.title}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  href={headerCTA.href}
                  className="inline-flex items-center justify-center bg-primary text-white hover:bg-primary-600 w-full py-3 text-base font-semibold rounded-md transition-all duration-200 uppercase tracking-wide"
                >
                  {headerCTA.title}
                </Link>
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-6 space-y-3">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>{contactInfo.phone}</span>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>{contactInfo.email}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

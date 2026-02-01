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
      <div className="bg-primary text-white/80 text-sm">
        <div className="container-main flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{contactInfo.phone}</span>
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="hidden sm:flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{contactInfo.email}</span>
            </a>
          </div>
          <Link
            href={headerCTA.href}
            className="flex items-center gap-2 text-accent hover:text-accent-300 transition-colors font-medium"
          >
            <span>{headerCTA.title}</span>
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={cn(
          'bg-primary border-b border-white/10 transition-all duration-300',
          isScrolled && 'shadow-lg'
        )}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-accent flex items-center justify-center">
                  <span className="text-primary font-bold text-lg lg:text-xl">CW</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-heading text-xl lg:text-2xl font-medium group-hover:text-accent transition-colors">
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
                      'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                      pathname === link.href || pathname.startsWith(link.href + '/')
                        ? 'text-accent'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
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
                        <div className="bg-primary-400 rounded-xl border border-white/10 shadow-xl overflow-hidden">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                'block px-4 py-3 hover:bg-white/5 transition-colors',
                                pathname === child.href && 'bg-white/5'
                              )}
                            >
                              <span className="block text-white font-medium text-sm">
                                {child.title}
                              </span>
                              {child.description && (
                                <span className="block text-white/60 text-xs mt-0.5">
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
                className="btn bg-accent text-primary hover:bg-accent-300 px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200"
              >
                {headerCTA.title}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-accent transition-colors"
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
            className="fixed inset-0 top-[104px] bg-primary z-40 lg:hidden overflow-y-auto"
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
                            'flex items-center justify-between w-full px-4 py-3 text-lg font-medium rounded-lg transition-colors',
                            activeDropdown === link.href
                              ? 'text-accent bg-white/5'
                              : 'text-white/80'
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
                                      'block px-4 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors',
                                      pathname === child.href && 'text-accent bg-white/5'
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
                          'block px-4 py-3 text-lg font-medium rounded-lg transition-colors',
                          pathname === link.href
                            ? 'text-accent bg-white/5'
                            : 'text-white/80 hover:text-white hover:bg-white/5'
                        )}
                      >
                        {link.title}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  href={headerCTA.href}
                  className="btn bg-accent text-primary hover:bg-accent-300 w-full justify-center py-3 text-base font-semibold rounded-lg transition-all duration-200"
                >
                  {headerCTA.title}
                </Link>
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-6 space-y-3">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 px-4 py-2 text-white/70 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>{contactInfo.phone}</span>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 px-4 py-2 text-white/70 hover:text-accent transition-colors"
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

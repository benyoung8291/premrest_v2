'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, typography, spacing, layout, shadows } from '@/app/lib/tokens';

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: 'Services',
    children: [
      { label: 'Cleaning', href: '/cleaning' },
      { label: 'Installation', href: '/installs' },
      { label: 'Special Projects', href: '/special-projects' },
    ],
  },
  {
    label: 'Industries',
    children: [
      { label: 'Facility Managers', href: '/facility-managers' },
      { label: 'Builders & Developers', href: '/builders-developers' },
      { label: 'Building Managers', href: '/building-managers' },
      { label: 'Procurement Managers', href: '/procurement-managers' },
      { label: 'Sustainability Managers', href: '/sustainability-managers' },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'About',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Careers', href: '/careers' },
      { label: 'Case Studies', href: '/case-studies' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
  },
];

function PromoBanner({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div
      style={{
        background: colors.charcoal.DEFAULT,
        color: colors.white,
        textAlign: 'center',
        padding: `${spacing[2]} ${spacing[4]}`,
        fontSize: typography.fontSize['body-sm'],
        fontFamily: typography.fontFamily.body,
        fontWeight: typography.fontWeight.medium,
        letterSpacing: typography.letterSpacing.wide,
        position: 'relative',
      }}
    >
      <span>Free consultation on all commercial flooring projects — <a href="/contact" style={{ textDecoration: 'underline', color: 'inherit' }}>Get in touch</a></span>
      <button
        onClick={onDismiss}
        aria-label="Dismiss banner"
        style={{
          position: 'absolute',
          right: spacing[4],
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          color: colors.white,
          cursor: 'pointer',
          fontSize: '18px',
          lineHeight: 1,
          padding: spacing[1],
          opacity: 0.7,
        }}
      >
        ×
      </button>
    </div>
  );
}

export default function Navigation() {
  const [showBanner, setShowBanner] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      {/* Promo banner */}
      {showBanner && <PromoBanner onDismiss={() => setShowBanner(false)} />}

      {/* Main navigation */}
      <nav
        style={{
          background: colors.white,
          borderBottom: `1px solid ${colors.cream[400]}`,
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            maxWidth: layout.maxWidth,
            margin: '0 auto',
            padding: `${spacing[4]} ${layout.gutter}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Left: hamburger (mobile) + nav links (desktop) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing[1], flex: 1 }}>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="nav-hamburger"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: spacing[2],
                flexDirection: 'column',
                gap: '5px',
              }}
              aria-label="Toggle menu"
            >
              <motion.span
                style={{ display: 'block', width: '22px', height: '1.5px', background: colors.charcoal.DEFAULT }}
                animate={mobileOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                style={{ display: 'block', width: '22px', height: '1.5px', background: colors.charcoal.DEFAULT }}
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                style={{ display: 'block', width: '22px', height: '1.5px', background: colors.charcoal.DEFAULT }}
                animate={mobileOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              />
            </button>

            {/* Desktop nav links */}
            <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: spacing[1] }}>
              {navItems.map((item) => (
                <div
                  key={item.label}
                  onMouseEnter={() => item.children ? handleMouseEnter(item.label) : undefined}
                  onMouseLeave={item.children ? handleMouseLeave : undefined}
                  style={{ position: 'relative' }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        padding: `${spacing[2]} ${spacing[3]}`,
                        fontFamily: typography.fontFamily.body,
                        fontSize: typography.fontSize['body-sm'],
                        fontWeight: typography.fontWeight.medium,
                        color: colors.charcoal.DEFAULT,
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = colors.charcoal[400]}
                      onMouseLeave={(e) => e.currentTarget.style.color = colors.charcoal.DEFAULT}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      style={{
                        padding: `${spacing[2]} ${spacing[3]}`,
                        fontFamily: typography.fontFamily.body,
                        fontSize: typography.fontSize['body-sm'],
                        fontWeight: typography.fontWeight.medium,
                        color: activeDropdown === item.label ? colors.charcoal[400] : colors.charcoal.DEFAULT,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: spacing[1],
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {item.label}
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: 'transform 0.2s ease', transform: activeDropdown === item.label ? 'rotate(180deg)' : 'rotate(0)' }}>
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          background: colors.white,
                          border: `1px solid ${colors.cream[400]}`,
                          borderRadius: '0.375rem',
                          boxShadow: shadows.lg,
                          minWidth: '220px',
                          padding: `${spacing[2]} 0`,
                          zIndex: 100,
                        }}
                      >
                        {item.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            style={{
                              display: 'block',
                              padding: `${spacing[2]} ${spacing[4]}`,
                              fontFamily: typography.fontFamily.body,
                              fontSize: typography.fontSize['body-sm'],
                              color: colors.charcoal.DEFAULT,
                              textDecoration: 'none',
                              transition: 'background 0.15s ease',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = colors.cream[200]}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                          >
                            {child.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Center: Logo */}
          <a
            href="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <img
              src="/images/Premrest_Main_Charcoal.svg"
              alt="Premrest"
              style={{ height: '28px', width: 'auto' }}
            />
          </a>

          {/* Right: icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing[4], flex: 1, justifyContent: 'flex-end' }}>
            {/* Search icon */}
            <a
              href="/search"
              aria-label="Search"
              style={{
                color: colors.charcoal.DEFAULT,
                display: 'flex',
                alignItems: 'center',
                padding: spacing[1],
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </a>

            {/* Phone icon */}
            <a
              href="tel:1300207915"
              aria-label="Call us"
              className="nav-phone-icon"
              style={{
                color: colors.charcoal.DEFAULT,
                display: 'flex',
                alignItems: 'center',
                padding: spacing[1],
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </a>

            {/* Contact button */}
            <a
              href="/contact"
              className="nav-contact-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: `${spacing[2]} ${spacing[5]}`,
                background: colors.charcoal.DEFAULT,
                color: colors.white,
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-sm'],
                fontWeight: typography.fontWeight.medium,
                borderRadius: '0.25rem',
                textDecoration: 'none',
                lineHeight: 1,
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = colors.charcoal.light}
              onMouseLeave={(e) => e.currentTarget.style.background = colors.charcoal.DEFAULT}
            >
              Get a Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              bottom: 0,
              width: '85%',
              maxWidth: '380px',
              zIndex: 1001,
              background: colors.white,
              overflowY: 'auto',
              boxShadow: '4px 0 20px rgba(0,0,0,0.1)',
            }}
          >
            {/* Close button */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: `${spacing[4]} ${spacing[5]}`, borderBottom: `1px solid ${colors.cream[400]}` }}>
              <img src="/images/Premrest_Main_Charcoal.svg" alt="Premrest" style={{ height: '24px' }} />
              <button
                onClick={() => setMobileOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: spacing[2], fontSize: '24px', color: colors.charcoal.DEFAULT }}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            {/* Mobile nav links */}
            <div style={{ padding: `${spacing[4]} 0` }}>
              {navItems.map((item) => (
                <div key={item.label} style={{ borderBottom: `1px solid ${colors.cream[300]}` }}>
                  {item.href ? (
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: 'block',
                        padding: `${spacing[4]} ${spacing[5]}`,
                        fontFamily: typography.fontFamily.body,
                        fontSize: typography.fontSize['body-md'],
                        fontWeight: typography.fontWeight.medium,
                        color: colors.charcoal.DEFAULT,
                        textDecoration: 'none',
                      }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '100%',
                          padding: `${spacing[4]} ${spacing[5]}`,
                          fontFamily: typography.fontFamily.body,
                          fontSize: typography.fontSize['body-md'],
                          fontWeight: typography.fontWeight.medium,
                          color: colors.charcoal.DEFAULT,
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          textAlign: 'left',
                        }}
                      >
                        {item.label}
                        <svg
                          width="12"
                          height="7"
                          viewBox="0 0 12 7"
                          fill="none"
                          style={{ transition: 'transform 0.2s ease', transform: mobileExpanded === item.label ? 'rotate(180deg)' : 'rotate(0)' }}
                        >
                          <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === item.label && item.children && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ overflow: 'hidden', background: colors.cream[100] }}
                          >
                            {item.children.map((child) => (
                              <a
                                key={child.href}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                style={{
                                  display: 'block',
                                  padding: `${spacing[3]} ${spacing[5]} ${spacing[3]} ${spacing[8]}`,
                                  fontFamily: typography.fontFamily.body,
                                  fontSize: typography.fontSize['body-sm'],
                                  color: colors.charcoal[500],
                                  textDecoration: 'none',
                                }}
                              >
                                {child.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div style={{ padding: `${spacing[6]} ${spacing[5]}` }}>
              <a
                href="tel:1300207915"
                style={{
                  display: 'block',
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-md'],
                  fontWeight: typography.fontWeight.semibold,
                  color: colors.charcoal.DEFAULT,
                  textDecoration: 'none',
                  marginBottom: spacing[4],
                }}
              >
                1300 207 915
              </a>
              <a
                href="/contact"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: `${spacing[3]} ${spacing[6]}`,
                  background: colors.charcoal.DEFAULT,
                  color: colors.white,
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-sm'],
                  fontWeight: typography.fontWeight.medium,
                  borderRadius: '0.25rem',
                  textDecoration: 'none',
                }}
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.3)',
              zIndex: 1000,
            }}
          />
        )}
      </AnimatePresence>

      {/* Responsive styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .nav-contact-btn { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .nav-hamburger { display: none !important; }
        }
        @media (max-width: 480px) {
          .nav-phone-icon { display: none !important; }
        }
      ` }} />
    </>
  );
}

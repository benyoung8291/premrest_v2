'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, typography, spacing, layout } from '@/app/lib/tokens';

const footerLinks = {
  help: {
    title: 'Help',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Call 1300 207 915', href: 'tel:1300207915' },
      { label: 'Email Us', href: 'mailto:hello@premrest.com.au' },
    ],
  },
  services: {
    title: 'Services',
    links: [
      { label: 'Cleaning', href: '/cleaning' },
      { label: 'Installation', href: '/installs' },
      { label: 'Special Projects', href: '/special-projects' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Careers', href: '/careers' },
      { label: 'Case Studies', href: '/case-studies' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'All Resources', href: '/resources' },
      { label: 'Projects', href: '/projects' },
      { label: "Let's Talk Facilities", href: '/lets-talk-facilities' },
      { label: "Let's Talk Sustainability", href: '/lets-talk-sustainability' },
    ],
  },
};

function FooterAccordion({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="footer-accordion" style={{ borderBottom: `1px solid ${colors.cream[400]}` }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: `${spacing[4]} 0`,
          fontFamily: typography.fontFamily.body,
          fontSize: typography.fontSize['body-sm'],
          fontWeight: typography.fontWeight.semibold,
          color: colors.charcoal.DEFAULT,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          letterSpacing: typography.letterSpacing.wider,
          textTransform: 'uppercase',
        }}
      >
        {title}
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          style={{ transition: 'transform 0.2s ease', transform: open ? 'rotate(180deg)' : 'rotate(0)' }}
        >
          <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ paddingBottom: spacing[4] }}>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    display: 'block',
                    padding: `${spacing[2]} 0`,
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize['body-sm'],
                    color: colors.charcoal[500],
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer style={{ background: colors.cream[200], color: colors.charcoal.DEFAULT }}>
      {/* Email Signup Section */}
      <div
        style={{
          borderBottom: `1px solid ${colors.cream[400]}`,
          padding: `${spacing[12]} 0`,
        }}
      >
        <div
          style={{
            maxWidth: layout.contentWidth,
            margin: '0 auto',
            padding: `0 ${layout.gutter}`,
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontFamily: typography.fontFamily.headline,
              fontSize: typography.fontSize['heading-lg'],
              fontWeight: typography.fontWeight.bold,
              color: colors.charcoal.DEFAULT,
              marginBottom: spacing[2],
            }}
          >
            Stay in the loop
          </h3>
          <p
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-md'],
              color: colors.charcoal[500],
              marginBottom: spacing[6],
            }}
          >
            Sign up for the latest in commercial flooring insights and updates.
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); setEmail(''); }}
            style={{
              display: 'flex',
              gap: spacing[2],
              maxWidth: '440px',
              margin: '0 auto',
            }}
            className="footer-signup-form"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{
                flex: 1,
                padding: `${spacing[3]} ${spacing[4]}`,
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-sm'],
                border: `1px solid ${colors.cream[500]}`,
                borderRadius: '0.25rem',
                background: colors.white,
                color: colors.charcoal.DEFAULT,
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                padding: `${spacing[3]} ${spacing[6]}`,
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-sm'],
                fontWeight: typography.fontWeight.medium,
                background: colors.charcoal.DEFAULT,
                color: colors.white,
                border: 'none',
                borderRadius: '0.25rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = colors.charcoal.light}
              onMouseLeave={(e) => e.currentTarget.style.background = colors.charcoal.DEFAULT}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Footer Links */}
      <div
        style={{
          maxWidth: layout.contentWidth,
          margin: '0 auto',
          padding: `${spacing[12]} ${layout.gutter}`,
        }}
      >
        {/* Desktop: 4-column grid */}
        <div className="footer-grid-desktop" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: spacing[8] }}>
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <p
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-xs'],
                  fontWeight: typography.fontWeight.semibold,
                  letterSpacing: typography.letterSpacing.widest,
                  textTransform: 'uppercase',
                  color: colors.charcoal[400],
                  marginBottom: spacing[4],
                  marginTop: 0,
                }}
              >
                {section.title}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[2] }}>
                {section.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="hover-underline"
                    style={{
                      fontFamily: typography.fontFamily.body,
                      fontSize: typography.fontSize['body-sm'],
                      color: colors.charcoal[500],
                      textDecoration: 'none',
                      display: 'inline-block',
                      width: 'fit-content',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = colors.charcoal.DEFAULT)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = colors.charcoal[500])}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Accordion */}
        <div className="footer-grid-mobile" style={{ display: 'none' }}>
          {Object.values(footerLinks).map((section) => (
            <FooterAccordion key={section.title} title={section.title} links={section.links} />
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: `1px solid ${colors.cream[400]}`,
          padding: `${spacing[6]} 0`,
        }}
      >
        <div
          style={{
            maxWidth: layout.contentWidth,
            margin: '0 auto',
            padding: `0 ${layout.gutter}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: spacing[4],
          }}
          className="footer-bottom"
        >
          {/* Social icons */}
          <div style={{ display: 'flex', gap: spacing[4], alignItems: 'center' }}>
            <a href="https://www.linkedin.com/company/premrest" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: colors.charcoal[400], transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = colors.charcoal.DEFAULT} onMouseLeave={(e) => e.currentTarget.style.color = colors.charcoal[400]}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://www.instagram.com/premrest" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: colors.charcoal[400], transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = colors.charcoal.DEFAULT} onMouseLeave={(e) => e.currentTarget.style.color = colors.charcoal[400]}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.youtube.com/@premrest" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ color: colors.charcoal[400], transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = colors.charcoal.DEFAULT} onMouseLeave={(e) => e.currentTarget.style.color = colors.charcoal[400]}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>

          {/* Copyright + legal links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing[4], flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.caption,
                color: colors.charcoal[400],
              }}
            >
              &copy; {new Date().getFullYear()} Premrest. All rights reserved.
            </span>
            <a
              href="/privacy-policy"
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.caption,
                color: colors.charcoal[400],
                textDecoration: 'none',
              }}
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.caption,
                color: colors.charcoal[400],
                textDecoration: 'none',
              }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .footer-grid-desktop { display: none !important; }
          .footer-grid-mobile { display: block !important; }
          .footer-signup-form {
            flex-direction: column !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center;
          }
        }
      ` }} />
    </footer>
  );
}

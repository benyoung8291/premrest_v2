'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { colors, typography, spacing, layout, borderRadius } from '@/app/lib/tokens';
import BrandIllustration from '@/app/components/ui/BrandIllustration';

const footerLinks = {
  services: {
    title: 'Services',
    links: [
      { label: 'Cleaning', href: '/cleaning' },
      { label: 'Installs', href: '/installs' },
      { label: 'Special Projects', href: '/special-projects' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Projects', href: '/projects' },
      { label: 'Let\'s Talk Facilities', href: '/lets-talk-facilities' },
      { label: 'Let\'s Talk Sustainability', href: '/lets-talk-sustainability' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
    ],
  },
};

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <footer
      ref={ref}
      className="noise-overlay"
      style={{
        background: colors.charcoal.dark,
        color: colors.white,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background illustrations — more visible */}
      <BrandIllustration
        type="scribble"
        color="grey"
        size={500}
        position={{ bottom: '-80px', right: '-80px' }}
        animation="float"
        opacity={0.06}
      />
      <BrandIllustration
        type="patch"
        color="orange"
        size={200}
        position={{ top: '20%', right: '15%' }}
        animation="parallax"
        opacity={0.04}
      />

      {/* Featured content banner — magazine style */}
      <div
        style={{
          borderBottom: `1px solid ${colors.charcoal[700]}`,
          padding: `${spacing[10]} 0`,
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            maxWidth: layout.contentWidth,
            margin: '0 auto',
            padding: `0 ${layout.gutter}`,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: spacing[6],
          }}
        >
          {/* Latest podcast */}
          <motion.a
            href="/lets-talk-facilities"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: spacing[4],
              padding: spacing[4],
              borderRadius: borderRadius.lg,
              textDecoration: 'none',
              color: colors.white,
              border: '1px solid transparent',
              transition: 'all 0.3s',
            }}
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: `${colors.charcoal[600]}` }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.1 }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: borderRadius.lg,
                background: `linear-gradient(135deg, ${colors.orange.DEFAULT}, ${colors.orange.dark})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
              </svg>
            </div>
            <div>
              <span
                style={{
                  display: 'block',
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize.label,
                  fontWeight: typography.fontWeight.semibold,
                  letterSpacing: typography.letterSpacing.wider,
                  textTransform: 'uppercase',
                  color: colors.orange[300],
                  marginBottom: '2px',
                }}
              >
                Latest Episode
              </span>
              <span
                style={{
                  fontFamily: typography.fontFamily.headline,
                  fontSize: typography.fontSize['body-md'],
                  fontWeight: typography.fontWeight.bold,
                }}
              >
                Let&apos;s Talk Facilities
              </span>
            </div>
          </motion.a>

          {/* Latest project */}
          <motion.a
            href="/projects"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: spacing[4],
              padding: spacing[4],
              borderRadius: borderRadius.lg,
              textDecoration: 'none',
              color: colors.white,
              border: '1px solid transparent',
              transition: 'all 0.3s',
            }}
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: `${colors.charcoal[600]}` }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.2 }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: borderRadius.lg,
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <img
                src="/images/Home_FeaturedImage.jpg"
                alt="Latest project"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <span
                style={{
                  display: 'block',
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize.label,
                  fontWeight: typography.fontWeight.semibold,
                  letterSpacing: typography.letterSpacing.wider,
                  textTransform: 'uppercase',
                  color: colors.orange[300],
                  marginBottom: '2px',
                }}
              >
                Latest Project
              </span>
              <span
                style={{
                  fontFamily: typography.fontFamily.headline,
                  fontSize: typography.fontSize['body-md'],
                  fontWeight: typography.fontWeight.bold,
                }}
              >
                View Our Recent Work
              </span>
            </div>
          </motion.a>

          {/* CTA */}
          <motion.a
            href="/contact"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: spacing[4],
              padding: spacing[4],
              borderRadius: borderRadius.lg,
              textDecoration: 'none',
              color: colors.white,
              background: `linear-gradient(135deg, ${colors.orange.DEFAULT}22, transparent)`,
              border: `1px solid ${colors.orange.DEFAULT}33`,
              transition: 'all 0.3s',
            }}
            whileHover={{ borderColor: colors.orange.DEFAULT }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.3 }}
          >
            <span
              style={{
                fontFamily: typography.fontFamily.accent,
                fontSize: typography.fontSize['body-lg'],
                fontStyle: 'italic',
                color: colors.cream[300],
              }}
            >
              Ready to transform your floors?
            </span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{ color: colors.orange.DEFAULT, fontSize: '20px' }}
            >
              →
            </motion.span>
          </motion.a>
        </div>
      </div>

      {/* Main footer content */}
      <div
        style={{
          maxWidth: layout.contentWidth,
          margin: '0 auto',
          padding: `${spacing[16]} ${layout.gutter}`,
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
            gap: spacing[8],
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <img
              src="/images/Premrest_Main_Charcoal.svg"
              alt="Premrest"
              style={{ height: '36px', width: 'auto', filter: 'brightness(10)', marginBottom: spacing[5] }}
            />
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-sm'],
                color: colors.charcoal[400],
                lineHeight: typography.lineHeight.relaxed,
                maxWidth: '280px',
                margin: `0 0 ${spacing[6]}`,
              }}
            >
              Australia&apos;s go-to for commercial floor care — cleaning, installing, and maintaining floors from small spaces to multi-level projects.
            </p>
            <a
              href="tel:1300207915"
              style={{
                display: 'block',
                fontFamily: typography.fontFamily.headline,
                fontSize: typography.fontSize['heading-sm'],
                fontWeight: typography.fontWeight.heavy,
                color: colors.orange.DEFAULT,
                textDecoration: 'none',
                marginBottom: spacing[2],
              }}
            >
              1300 207 915
            </a>
            <a
              href="mailto:hello@premrest.com.au"
              className="hover-underline"
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-sm'],
                color: colors.charcoal[400],
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              hello@premrest.com.au
            </a>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <p
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize.label,
                  fontWeight: typography.fontWeight.semibold,
                  letterSpacing: typography.letterSpacing.widest,
                  textTransform: 'uppercase',
                  color: colors.charcoal[500],
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
                      color: colors.charcoal[400],
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      display: 'inline-block',
                      width: 'fit-content',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = colors.white)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = colors.charcoal[400])}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: `1px solid ${colors.charcoal[700]}`,
          padding: `${spacing[5]} 0`,
          position: 'relative',
          zIndex: 2,
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
          }}
          className="footer-bottom"
        >
          <p
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize.caption,
              color: colors.charcoal[500],
              margin: 0,
            }}
          >
            &copy; {new Date().getFullYear()} Premrest. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: typography.fontFamily.accent,
              fontSize: typography.fontSize.caption,
              fontStyle: 'italic',
              color: colors.charcoal[500],
              margin: 0,
            }}
          >
            Beautiful flooring, beautifully maintained.
          </p>
        </div>
      </div>

      {/* Responsive styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
          .footer-bottom {
            flex-direction: column !important;
            gap: 0.5rem;
            text-align: center;
          }
        }
      ` }} />
    </footer>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, typography, spacing, borderRadius, shadows } from '@/app/lib/tokens';
import Button from '@/app/components/ui/Button';

interface ContactPanelProps {
  defaultService?: string;
}

const serviceOptions = [
  { value: 'cleaning', label: 'Floor Cleaning & Maintenance' },
  { value: 'installs', label: 'Floor Installation' },
  { value: 'special', label: 'Special Projects' },
  { value: 'sustainability', label: 'Sustainability Enquiry' },
  { value: 'general', label: 'General Enquiry' },
];

export default function ContactPanel({ defaultService = 'general' }: ContactPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showTrigger, setShowTrigger] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: defaultService,
    message: '',
  });

  useEffect(() => {
    const handleScroll = () => {
      // Show floating trigger after scrolling 40% of the page
      setShowTrigger(window.scrollY > window.innerHeight * 0.4);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for custom events to open panel with context
  useEffect(() => {
    const handler = (e: CustomEvent) => {
      if (e.detail?.service) {
        setFormData((prev) => ({ ...prev, service: e.detail.service }));
      }
      setIsOpen(true);
    };
    window.addEventListener('openContactPanel' as any, handler);
    return () => window.removeEventListener('openContactPanel' as any, handler);
  }, []);

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: `${spacing[3]} ${spacing[4]}`,
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize['body-sm'],
    border: `1px solid ${colors.charcoal[200]}`,
    borderRadius: borderRadius.md,
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
    background: colors.white,
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.label,
    fontWeight: typography.fontWeight.semibold,
    letterSpacing: typography.letterSpacing.wide,
    textTransform: 'uppercase',
    color: colors.charcoal[500],
    marginBottom: spacing[1],
  };

  return (
    <>
      {/* Floating trigger button — persistent but subtle */}
      <AnimatePresence>
        {showTrigger && !isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            style={{
              position: 'fixed',
              bottom: spacing[6],
              right: spacing[6],
              zIndex: 900,
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: colors.orange.DEFAULT,
              color: colors.white,
              border: 'none',
              cursor: 'pointer',
              boxShadow: shadows.lg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
            }}
            aria-label="Open contact form"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.3)',
              zIndex: 950,
            }}
          />
        )}
      </AnimatePresence>

      {/* Slide-in panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: '460px',
              background: colors.white,
              zIndex: 960,
              boxShadow: shadows.xl,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: `${spacing[5]} ${spacing[6]}`,
                borderBottom: `1px solid ${colors.charcoal[100]}`,
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: typography.fontFamily.headline,
                    fontSize: typography.fontSize['heading-sm'],
                    fontWeight: typography.fontWeight.bold,
                    color: colors.charcoal.DEFAULT,
                    margin: 0,
                  }}
                >
                  Get in Touch
                </h3>
                <p
                  style={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize['body-xs'],
                    color: colors.charcoal[400],
                    margin: `${spacing[1]} 0 0`,
                  }}
                >
                  We&apos;ll get back to you within 24 hours
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: spacing[2],
                  color: colors.charcoal[400],
                  fontSize: '20px',
                  lineHeight: 1,
                }}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <form
              style={{
                padding: spacing[6],
                display: 'flex',
                flexDirection: 'column',
                gap: spacing[4],
                flex: 1,
              }}
              onSubmit={(e) => {
                e.preventDefault();
                // Form submission handled by backend
              }}
            >
              <div>
                <label style={labelStyle}>Service</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[4] }}>
                <div>
                  <label style={labelStyle}>Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>Company</label>
                  <input
                    type="text"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={inputStyle}
                  required
                />
              </div>

              <div>
                <label style={labelStyle}>Phone</label>
                <input
                  type="tel"
                  placeholder="04XX XXX XXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <Button variant="primary" size="lg" fullWidth type="submit">
                Send Enquiry
              </Button>

              <p
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize.caption,
                  color: colors.charcoal[400],
                  textAlign: 'center',
                  margin: 0,
                }}
              >
                Or call us directly at{' '}
                <a href="tel:1300207915" style={{ color: colors.orange.DEFAULT, fontWeight: typography.fontWeight.semibold, textDecoration: 'none' }}>
                  1300 207 915
                </a>
              </p>
            </form>

            {/* Bottom decoration */}
            <div
              style={{
                padding: `${spacing[4]} ${spacing[6]}`,
                background: colors.offWhite,
                borderTop: `1px solid ${colors.charcoal[100]}`,
              }}
            >
              <img
                src="/images/Premrest_Scribble_Orange.svg"
                alt=""
                role="presentation"
                style={{ height: '20px', opacity: 0.4 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

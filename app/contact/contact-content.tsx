'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: `${spacing[3]} ${spacing[4]}`,
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize['body-md'],
  fontWeight: typography.fontWeight.regular,
  color: colors.charcoal.DEFAULT,
  background: colors.white,
  border: `1px solid ${colors.charcoal[200]}`,
  borderRadius: borderRadius.md,
  outline: 'none',
  transition: 'border-color 0.2s ease',
  boxSizing: 'border-box' as const,
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize['body-sm'],
  fontWeight: typography.fontWeight.medium,
  color: colors.charcoal[600],
  marginBottom: spacing[2],
};

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={colors.orange.DEFAULT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={colors.orange.DEFAULT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={colors.orange.DEFAULT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [focused, setFocused] = useState<string | null>(null);

  const getFocusedInputStyle = (name: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: focused === name ? colors.orange.DEFAULT : colors.charcoal[200],
    boxShadow: focused === name ? `0 0 0 3px ${colors.orange[50]}` : 'none',
  });

  return (
    <motion.form
      ref={ref}
      action="https://formsubmit.co/office@premrest.com.au"
      method="POST"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: spacing[5],
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[5] }}>
        <div>
          <label style={labelStyle} htmlFor="first-name">First name</label>
          <input
            id="first-name"
            name="first_name"
            type="text"
            required
            style={getFocusedInputStyle('first-name')}
            onFocus={() => setFocused('first-name')}
            onBlur={() => setFocused(null)}
            placeholder="John"
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="last-name">Last name</label>
          <input
            id="last-name"
            name="last_name"
            type="text"
            required
            style={getFocusedInputStyle('last-name')}
            onFocus={() => setFocused('last-name')}
            onBlur={() => setFocused(null)}
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label style={labelStyle} htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          style={getFocusedInputStyle('email')}
          onFocus={() => setFocused('email')}
          onBlur={() => setFocused(null)}
          placeholder="john@company.com.au"
        />
      </div>

      <div>
        <label style={labelStyle} htmlFor="phone">Phone number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          style={getFocusedInputStyle('phone')}
          onFocus={() => setFocused('phone')}
          onBlur={() => setFocused(null)}
          placeholder="04XX XXX XXX"
        />
      </div>

      <div>
        <label style={labelStyle} htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          style={getFocusedInputStyle('company')}
          onFocus={() => setFocused('company')}
          onBlur={() => setFocused(null)}
          placeholder="Your company name"
        />
      </div>

      <div>
        <label style={labelStyle} htmlFor="message">Where can we help?</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          style={{
            ...getFocusedInputStyle('message'),
            resize: 'vertical' as const,
            minHeight: '120px',
          }}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused(null)}
          placeholder="Tell us about your project or enquiry..."
        />
      </div>

      <div style={{ marginTop: spacing[2] }}>
        <Button type="submit" size="lg">
          Send message
        </Button>
      </div>
    </motion.form>
  );
}

function ContactInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const infoCards = [
    {
      icon: <PhoneIcon />,
      label: 'Phone',
      value: '1300 207 915',
      href: 'tel:1300207915',
    },
    {
      icon: <EmailIcon />,
      label: 'Email',
      value: 'office@premrest.com.au',
      href: 'mailto:office@premrest.com.au',
    },
    {
      icon: <MapPinIcon />,
      label: 'Address',
      value: '1/99 Heyington Ave, Thomastown VIC 3074',
      href: 'https://maps.google.com/?q=1/99+Heyington+Ave+Thomastown+VIC+3074',
    },
  ];

  return (
    <motion.div
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: spacing[6],
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div>
        <Heading as="h2" size="heading-md" style={{ marginBottom: spacing[3] }}>
          Get in touch
        </Heading>
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-md'],
            color: colors.charcoal[500],
            lineHeight: typography.lineHeight.relaxed,
            margin: 0,
          }}
        >
          Have a question or ready to start a project? Reach out and our team will get back to you promptly.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
        {infoCards.map((card, i) => (
          <motion.a
            key={card.label}
            href={card.href}
            target={card.label === 'Address' ? '_blank' : undefined}
            rel={card.label === 'Address' ? 'noopener noreferrer' : undefined}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: spacing[4],
              padding: spacing[5],
              background: colors.white,
              borderRadius: borderRadius.lg,
              boxShadow: shadows.sm,
              textDecoration: 'none',
              transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ boxShadow: shadows.md, y: -2 }}
          >
            <div
              style={{
                flexShrink: 0,
                width: '48px',
                height: '48px',
                borderRadius: borderRadius.md,
                background: colors.orange[50],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {card.icon}
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
                  color: colors.charcoal[400],
                  marginBottom: spacing[1],
                }}
              >
                {card.label}
              </span>
              <span
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-md'],
                  fontWeight: typography.fontWeight.medium,
                  color: colors.charcoal.DEFAULT,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                {card.value}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Contact image */}
      <motion.div
        style={{
          borderRadius: borderRadius.lg,
          overflow: 'hidden',
          marginTop: spacing[2],
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <img
          src="/images/contact-image.svg"
          alt="Contact Premrest"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            borderRadius: borderRadius.lg,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function ContactContent() {
  return (
    <RedesignLayout>
      <PageHero
        title="Let's build better floors, together."
        compact
      />

      <ContentSection background={colors.offWhite} padding="lg">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: spacing[16],
            alignItems: 'start',
          }}
        >
          {/* Left: Contact Form */}
          <div
            style={{
              background: colors.white,
              borderRadius: borderRadius.lg,
              padding: spacing[10],
              boxShadow: shadows.md,
            }}
          >
            <Heading as="h2" size="heading-md" style={{ marginBottom: spacing[2] }}>
              Send us a message
            </Heading>
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-sm'],
                color: colors.charcoal[400],
                margin: 0,
                marginBottom: spacing[8],
                lineHeight: typography.lineHeight.relaxed,
              }}
            >
              Fill in the form below and we&apos;ll get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>

          {/* Right: Contact Info */}
          <ContactInfo />
        </div>

        {/* Responsive styles */}
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            div[style*="grid-template-columns: 1.2fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 480px) {
            div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}} />
      </ContentSection>
    </RedesignLayout>
  );
}

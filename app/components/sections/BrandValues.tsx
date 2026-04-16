'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { colors, typography, spacing, layout } from '@/app/lib/tokens';
import Heading from '@/app/components/ui/Heading';

const values = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Expert Care',
    description: 'Over 20 years of specialist commercial flooring experience, from daily maintenance to complex restoration.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Sustainable Practices',
    description: 'Carbon-neutral programs, eco-certified products, and industry-leading waste diversion across every project.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
    title: 'Quality Materials',
    description: 'We partner with the world\'s leading flooring manufacturers to deliver durable, beautiful results.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Trusted Partnerships',
    description: '500+ projects delivered for Australia\'s top organisations — ANZ, KPMG, Medibank, and more.',
  },
];

export default function BrandValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      style={{
        padding: `${spacing[16]} 0`,
        background: colors.white,
      }}
    >
      <div
        style={{
          maxWidth: layout.contentWidth,
          margin: '0 auto',
          padding: `0 ${layout.gutter}`,
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: spacing[12] }}>
          <Heading as="h2" size="heading-xl" align="center">
            Why choose Premrest
          </Heading>
          <p
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-md'],
              color: colors.charcoal[500],
              marginTop: spacing[3],
              maxWidth: '520px',
              margin: `${spacing[3]} auto 0`,
              lineHeight: typography.lineHeight.normal,
            }}
          >
            Australia&apos;s trusted partner for commercial floor care — built on quality, sustainability, and genuine relationships.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: spacing[8],
          }}
          className="brand-values-grid"
        >
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: colors.cream[200],
                  color: colors.charcoal.DEFAULT,
                  marginBottom: spacing[4],
                }}
              >
                {value.icon}
              </div>
              <h3
                style={{
                  fontFamily: typography.fontFamily.headline,
                  fontSize: typography.fontSize['heading-sm'],
                  fontWeight: typography.fontWeight.bold,
                  color: colors.charcoal.DEFAULT,
                  marginBottom: spacing[2],
                  lineHeight: typography.lineHeight.snug,
                }}
              >
                {value.title}
              </h3>
              <p
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-sm'],
                  color: colors.charcoal[500],
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .brand-values-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .brand-values-grid {
            grid-template-columns: 1fr !important;
          }
        }
      ` }} />
    </section>
  );
}

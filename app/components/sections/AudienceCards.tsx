'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';
import Heading from '@/app/components/ui/Heading';

const audiences = [
  {
    title: 'Facility Managers',
    description: 'Ongoing floor care for large commercial spaces. We become an extension of your team.',
    href: '/facility-managers',
    illustration: '/images/Premrest_Home_Facilities_Illustration.svg',
    accent: colors.orange.DEFAULT,
  },
  {
    title: 'Builders & Developers',
    description: 'New builds and large-scale installation projects, delivered on time and within spec.',
    href: '/builders-developers',
    illustration: '/images/Premrest_Hero_Installs_Office.svg',
    accent: colors.green.DEFAULT,
  },
  {
    title: 'Building Managers',
    description: 'Multi-tenant floor management with the flexibility to handle diverse requirements.',
    href: '/building-managers',
    illustration: '/images/Premrest_Cleaning_Growth.svg',
    accent: colors.cream.dark,
  },
  {
    title: 'Sustainability Managers',
    description: 'Environmentally responsible flooring solutions backed by real sustainability credentials.',
    href: '/sustainability-managers',
    illustration: '/images/Premrest_SustainabilityEarth.svg',
    accent: colors.green.DEFAULT,
  },
];

export default function AudienceCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      style={{
        padding: `${spacing[24]} 0`,
        background: colors.warmGray,
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: layout.contentWidth,
          margin: '0 auto',
          padding: `0 ${layout.gutter}`,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: spacing[12], maxWidth: '600px', margin: `0 auto ${spacing[12]}` }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize.label,
              fontWeight: typography.fontWeight.semibold,
              letterSpacing: typography.letterSpacing.widest,
              textTransform: 'uppercase',
              color: colors.orange.DEFAULT,
              marginBottom: spacing[3],
              marginTop: 0,
            }}
          >
            Who We Work With
          </motion.p>
          <Heading as="h2" size="heading-xl" align="center">
            Tailored for your role.
          </Heading>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: spacing[5],
          }}
          className="audience-grid"
        >
          {audiences.map((audience, i) => (
            <motion.a
              key={audience.title}
              href={audience.href}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, boxShadow: shadows.xl }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                color: 'inherit',
                background: colors.white,
                borderRadius: borderRadius.lg,
                overflow: 'hidden',
                boxShadow: shadows.sm,
                transition: 'box-shadow 0.3s ease',
                position: 'relative',
              }}
            >
              {/* Accent top bar */}
              <div style={{ height: '4px', background: audience.accent }} />

              {/* Illustration area */}
              <div
                style={{
                  padding: `${spacing[6]} ${spacing[5]} 0`,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <motion.img
                  src={audience.illustration}
                  alt=""
                  role="presentation"
                  style={{ height: '100px', width: 'auto' }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: `${spacing[4]} ${spacing[5]} ${spacing[6]}`, flex: 1 }}>
                <h3
                  style={{
                    fontFamily: typography.fontFamily.headline,
                    fontSize: typography.fontSize['heading-sm'],
                    fontWeight: typography.fontWeight.bold,
                    color: colors.charcoal.DEFAULT,
                    margin: `0 0 ${spacing[2]}`,
                  }}
                >
                  {audience.title}
                </h3>
                <p
                  style={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize['body-sm'],
                    color: colors.charcoal[500],
                    lineHeight: typography.lineHeight.relaxed,
                    margin: `0 0 ${spacing[4]}`,
                  }}
                >
                  {audience.description}
                </p>
                <span
                  style={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize['body-xs'],
                    fontWeight: typography.fontWeight.semibold,
                    color: audience.accent,
                    letterSpacing: typography.letterSpacing.wide,
                    textTransform: 'uppercase',
                  }}
                >
                  Your journey →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .audience-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .audience-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      ` }} />
    </section>
  );
}

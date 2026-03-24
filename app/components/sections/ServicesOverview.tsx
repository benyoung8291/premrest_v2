'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';
import Heading from '@/app/components/ui/Heading';
import BrandIllustration from '@/app/components/ui/BrandIllustration';

const services = [
  {
    title: 'Cleaning',
    subtitle: 'Floor Care & Maintenance',
    description: 'Expert commercial floor care and maintenance. From daily upkeep to deep restoration — we keep your floors performing at their best.',
    href: '/cleaning',
    image: '/images/Cleaning_FeaturedImage-p-1080.jpg',
    illustration: { type: 'patch' as const, color: 'orange' as const },
    stat: '500+',
    statLabel: 'floors maintained monthly',
  },
  {
    title: 'Installs',
    subtitle: 'Professional Installation',
    description: 'Professional flooring installation for projects of every scale. New builds, refurbishments, and everything in between.',
    href: '/installs',
    image: '/images/Home_FeaturedImage.jpg',
    illustration: { type: 'scribble' as const, color: 'cream' as const },
    stat: '20+',
    statLabel: 'years experience',
  },
  {
    title: 'Special Projects',
    subtitle: 'Bespoke Solutions',
    description: 'Bespoke flooring solutions for when the brief is anything but ordinary. Complex, challenging, and uniquely yours.',
    href: '/special-projects',
    image: '/images/FeaturedImage_About.jpg',
    illustration: { type: 'rays' as const, color: 'cream' as const },
    stat: '100%',
    statLabel: 'bespoke approach',
  },
];

export default function ServicesOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="noise-overlay"
      style={{
        padding: `${spacing[24]} 0 ${spacing[32]}`,
        background: colors.white,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background textures */}
      <BrandIllustration
        type="canvas"
        color="cream"
        size={800}
        position={{ top: '-200px', right: '-300px' }}
        animation="parallax"
        opacity={0.06}
      />
      <BrandIllustration
        type="scribble"
        color="grey"
        size={400}
        position={{ bottom: '-100px', left: '-150px' }}
        animation="float"
        opacity={0.04}
      />

      <div
        style={{
          maxWidth: layout.contentWidth,
          margin: '0 auto',
          padding: `0 ${layout.gutter}`,
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Section header */}
        <div style={{ marginBottom: spacing[16], maxWidth: '650px' }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: spacing[3],
              marginBottom: spacing[4],
            }}
          >
            <div
              style={{
                width: '48px',
                height: '2px',
                background: colors.orange.DEFAULT,
              }}
            />
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.label,
                fontWeight: typography.fontWeight.semibold,
                letterSpacing: typography.letterSpacing.widest,
                textTransform: 'uppercase',
                color: colors.orange.DEFAULT,
                margin: 0,
              }}
            >
              What We Do
            </p>
          </motion.div>
          <Heading as="h2" size="display-md">
            End-to-end flooring. One partner.
          </Heading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-lg'],
              color: colors.charcoal[500],
              lineHeight: typography.lineHeight.relaxed,
              marginTop: spacing[5],
              marginBottom: 0,
            }}
          >
            From cleaning to installation to complex special projects —
            Premrest handles every aspect of commercial flooring.
          </motion.p>
        </div>

        {/* Asymmetric editorial layout: 1 large + 2 stacked */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gridTemplateRows: 'auto auto',
            gap: spacing[6],
          }}
          className="services-grid"
        >
          {/* Featured large card — Cleaning */}
          <motion.a
            href={services[0].href}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.2, duration: 0.7 }}
            style={{
              display: 'block',
              textDecoration: 'none',
              color: 'inherit',
              borderRadius: borderRadius.xl,
              overflow: 'hidden',
              background: colors.charcoal.DEFAULT,
              position: 'relative',
              gridRow: '1 / 3',
              minHeight: '560px',
            }}
            className="service-card-featured"
          >
            {/* Full background image */}
            <motion.div
              style={{ position: 'absolute', inset: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={services[0].image}
                alt={services[0].title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 40%, transparent 70%)',
                }}
              />
            </motion.div>

            {/* Floating illustration */}
            <img
              src="/images/Premrest_Patch_Orange.svg"
              alt=""
              role="presentation"
              style={{
                position: 'absolute',
                top: spacing[5],
                right: spacing[5],
                width: '80px',
                opacity: 0.25,
              }}
            />

            {/* Content overlay at bottom */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: `${spacing[8]} ${spacing[8]}`,
                zIndex: 2,
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize.label,
                  fontWeight: typography.fontWeight.semibold,
                  letterSpacing: typography.letterSpacing.widest,
                  textTransform: 'uppercase',
                  color: colors.orange.DEFAULT,
                  marginBottom: spacing[2],
                }}
              >
                {services[0].subtitle}
              </span>
              <h3
                style={{
                  fontFamily: typography.fontFamily.headline,
                  fontSize: typography.fontSize['heading-xl'],
                  fontWeight: typography.fontWeight.heavy,
                  color: colors.white,
                  margin: `0 0 ${spacing[3]}`,
                  lineHeight: 1.05,
                }}
              >
                {services[0].title}
              </h3>
              <p
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-md'],
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: typography.lineHeight.relaxed,
                  margin: `0 0 ${spacing[5]}`,
                  maxWidth: '400px',
                }}
              >
                {services[0].description}
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: spacing[2] }}>
                <span
                  style={{
                    fontFamily: typography.fontFamily.headline,
                    fontSize: typography.fontSize['heading-lg'],
                    fontWeight: typography.fontWeight.heavy,
                    color: colors.orange.DEFAULT,
                  }}
                >
                  {services[0].stat}
                </span>
                <span
                  style={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize['body-xs'],
                    color: 'rgba(255,255,255,0.5)',
                    letterSpacing: typography.letterSpacing.wide,
                    textTransform: 'uppercase',
                  }}
                >
                  {services[0].statLabel}
                </span>
              </div>
            </div>
          </motion.a>

          {/* Two stacked cards — Installs & Special Projects */}
          {services.slice(1).map((service, i) => (
            <motion.a
              key={service.title}
              href={service.href}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              style={{
                display: 'flex',
                textDecoration: 'none',
                color: 'inherit',
                borderRadius: borderRadius.xl,
                overflow: 'hidden',
                background: colors.offWhite,
                boxShadow: shadows.sm,
                transition: 'box-shadow 0.4s ease',
                position: 'relative',
                minHeight: '260px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = shadows.xl)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = shadows.sm)}
              className="service-card-small"
            >
              {/* Image side */}
              <div style={{ width: '45%', position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
                <motion.img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Illustration overlay */}
                <img
                  src={`/images/Premrest_${service.illustration.type === 'scribble' ? 'Scribble' : 'Rays'}_${service.illustration.color.charAt(0).toUpperCase() + service.illustration.color.slice(1)}.svg`}
                  alt=""
                  role="presentation"
                  style={{
                    position: 'absolute',
                    top: spacing[3],
                    right: spacing[3],
                    width: '50px',
                    opacity: 0.35,
                  }}
                />
              </div>

              {/* Content side */}
              <div style={{ padding: `${spacing[6]} ${spacing[6]}`, display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
                <span
                  style={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize.label,
                    fontWeight: typography.fontWeight.semibold,
                    letterSpacing: typography.letterSpacing.widest,
                    textTransform: 'uppercase',
                    color: colors.orange.DEFAULT,
                    marginBottom: spacing[2],
                  }}
                >
                  {service.subtitle}
                </span>
                <h3
                  style={{
                    fontFamily: typography.fontFamily.headline,
                    fontSize: typography.fontSize['heading-md'],
                    fontWeight: typography.fontWeight.heavy,
                    color: colors.charcoal.DEFAULT,
                    margin: `0 0 ${spacing[3]}`,
                    lineHeight: 1.1,
                  }}
                >
                  {service.title}
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
                  {service.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: spacing[2], marginTop: 'auto' }}>
                  <span
                    style={{
                      fontFamily: typography.fontFamily.headline,
                      fontSize: typography.fontSize['heading-sm'],
                      fontWeight: typography.fontWeight.heavy,
                      color: colors.orange.DEFAULT,
                    }}
                  >
                    {service.stat}
                  </span>
                  <span
                    style={{
                      fontFamily: typography.fontFamily.body,
                      fontSize: typography.fontSize.caption,
                      color: colors.charcoal[400],
                      letterSpacing: typography.letterSpacing.wide,
                      textTransform: 'uppercase',
                    }}
                  >
                    {service.statLabel}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }
          .service-card-featured {
            grid-row: auto !important;
            min-height: 400px !important;
          }
          .service-card-small {
            flex-direction: column !important;
            min-height: auto !important;
          }
          .service-card-small > div:first-child {
            width: 100% !important;
            height: 200px;
          }
        }
      ` }} />
    </section>
  );
}

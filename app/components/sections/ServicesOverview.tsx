'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';
import Heading from '@/app/components/ui/Heading';
import BrandIllustration from '@/app/components/ui/BrandIllustration';

const services = [
  {
    title: 'Cleaning',
    description: 'Expert commercial floor care and maintenance. From daily upkeep to deep restoration — we keep your floors performing.',
    href: '/cleaning',
    image: '/images/Cleaning_FeaturedImage-p-1080.jpg',
    illustration: { type: 'patch' as const, color: 'orange' as const },
    stats: '500+ floors maintained monthly',
  },
  {
    title: 'Installs',
    description: 'Professional flooring installation for projects of every scale. New builds, refurbishments, and everything in between.',
    href: '/installs',
    image: '/images/Home_FeaturedImage.jpg',
    illustration: { type: 'scribble' as const, color: 'cream' as const },
    stats: '20+ years experience',
  },
  {
    title: 'Special Projects',
    description: 'Bespoke flooring solutions for when the brief is anything but ordinary. Complex, challenging, and uniquely yours.',
    href: '/special-projects',
    image: '/images/FeaturedImage_About.jpg',
    illustration: { type: 'rays' as const, color: 'cream' as const },
    stats: 'No project too complex',
  },
];

export default function ServicesOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      style={{
        padding: `${spacing[24]} 0`,
        background: colors.white,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background texture */}
      <BrandIllustration
        type="canvas"
        color="cream"
        size={600}
        position={{ top: '-100px', right: '-200px' }}
        animation="parallax"
        opacity={0.08}
      />

      <div
        style={{
          maxWidth: layout.contentWidth,
          margin: '0 auto',
          padding: `0 ${layout.gutter}`,
        }}
      >
        {/* Section header */}
        <div style={{ marginBottom: spacing[12], maxWidth: '600px' }}>
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
            What We Do
          </motion.p>
          <Heading as="h2" size="heading-xl">
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
              marginTop: spacing[4],
              marginBottom: 0,
            }}
          >
            From cleaning to installation to complex special projects —
            Premrest handles every aspect of commercial flooring so you don&apos;t have to juggle multiple contractors.
          </motion.p>
        </div>

        {/* Service cards — editorial layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: spacing[6],
          }}
          className="services-grid"
        >
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href={service.href}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              style={{
                display: 'block',
                textDecoration: 'none',
                color: 'inherit',
                borderRadius: borderRadius.lg,
                overflow: 'hidden',
                background: colors.white,
                boxShadow: shadows.md,
                transition: 'box-shadow 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = shadows.xl)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = shadows.md)}
            >
              {/* Image */}
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <motion.img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Overlay gradient */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                  }}
                />
                {/* Floating illustration */}
                <img
                  src={`/images/Premrest_${service.illustration.type === 'patch' ? 'Patch' : service.illustration.type === 'scribble' ? 'Scribble' : 'Rays'}_${service.illustration.color.charAt(0).toUpperCase() + service.illustration.color.slice(1)}.svg`}
                  alt=""
                  role="presentation"
                  style={{
                    position: 'absolute',
                    top: spacing[3],
                    right: spacing[3],
                    width: '60px',
                    opacity: 0.5,
                  }}
                />
                {/* Service title overlay */}
                <h3
                  style={{
                    position: 'absolute',
                    bottom: spacing[4],
                    left: spacing[5],
                    fontFamily: typography.fontFamily.headline,
                    fontSize: typography.fontSize['heading-lg'],
                    fontWeight: typography.fontWeight.heavy,
                    color: colors.white,
                    margin: 0,
                  }}
                >
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div style={{ padding: `${spacing[5]} ${spacing[5]} ${spacing[6]}` }}>
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
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: typography.fontFamily.accent,
                      fontSize: typography.fontSize['body-xs'],
                      fontStyle: 'italic',
                      color: colors.charcoal[400],
                    }}
                  >
                    {service.stats}
                  </span>
                  <span
                    style={{
                      fontFamily: typography.fontFamily.body,
                      fontSize: typography.fontSize['body-xs'],
                      fontWeight: typography.fontWeight.semibold,
                      color: colors.orange.DEFAULT,
                      letterSpacing: typography.letterSpacing.wide,
                      textTransform: 'uppercase',
                    }}
                  >
                    Learn more →
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
            gap: 1.5rem !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .services-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      ` }} />
    </section>
  );
}

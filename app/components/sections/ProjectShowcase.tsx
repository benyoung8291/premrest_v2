'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { colors, typography, spacing, layout } from '@/app/lib/tokens';
import Heading from '@/app/components/ui/Heading';

const materialSwatches = [
  { name: 'Carpet Tile', color: '#6B5B4E' },
  { name: 'Vinyl Plank', color: '#9B958A' },
  { name: 'Timber', color: '#D4C5A9' },
  { name: 'Polished Concrete', color: '#B0B0A8' },
  { name: 'Hybrid', color: '#3C6E47' },
];

export default function ProjectShowcase() {
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: spacing[10],
            alignItems: 'center',
          }}
          className="project-showcase-grid"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.6 }}
            style={{
              borderRadius: '0.375rem',
              overflow: 'hidden',
            }}
          >
            <img
              src="/images/Home_FeaturedImage.jpg"
              alt="Featured project"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                aspectRatio: '4/3',
                objectFit: 'cover',
              }}
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.label,
                fontWeight: typography.fontWeight.semibold,
                letterSpacing: typography.letterSpacing.widest,
                textTransform: 'uppercase',
                color: colors.charcoal[400],
                marginBottom: spacing[3],
              }}
            >
              Featured Project
            </p>
            <Heading as="h2" size="heading-xl">
              Medibank Place
            </Heading>
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-md'],
                color: colors.charcoal[500],
                lineHeight: typography.lineHeight.relaxed,
                margin: `${spacing[4]} 0 ${spacing[6]}`,
                maxWidth: '440px',
              }}
            >
              A complete flooring transformation across 12 levels of Melbourne&apos;s
              iconic Medibank headquarters. Carpet tile installation, vinyl plank
              in common areas, and ongoing maintenance programs.
            </p>

            {/* Material swatches */}
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-sm'],
                fontWeight: typography.fontWeight.medium,
                color: colors.charcoal.DEFAULT,
                marginBottom: spacing[3],
              }}
            >
              Materials used
            </p>
            <div style={{ display: 'flex', gap: spacing[2], marginBottom: spacing[8] }}>
              {materialSwatches.map((swatch) => (
                <div
                  key={swatch.name}
                  title={swatch.name}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: swatch.color,
                    border: '2px solid transparent',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = colors.charcoal.DEFAULT}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
                />
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', gap: spacing[3] }}>
              <a
                href="/projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: `${spacing[3]} ${spacing[6]}`,
                  background: colors.charcoal.DEFAULT,
                  color: colors.white,
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-sm'],
                  fontWeight: typography.fontWeight.medium,
                  borderRadius: '0.25rem',
                  textDecoration: 'none',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = colors.charcoal.light}
                onMouseLeave={(e) => e.currentTarget.style.background = colors.charcoal.DEFAULT}
              >
                View All Projects
              </a>
              <a
                href="/case-studies"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: `${spacing[3]} ${spacing[6]}`,
                  background: 'transparent',
                  color: colors.charcoal.DEFAULT,
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-sm'],
                  fontWeight: typography.fontWeight.medium,
                  border: `1px solid ${colors.charcoal[300]}`,
                  borderRadius: '0.25rem',
                  textDecoration: 'none',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = colors.cream[200]}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                Case Studies
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .project-showcase-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      ` }} />
    </section>
  );
}

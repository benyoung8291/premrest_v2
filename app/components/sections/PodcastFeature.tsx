'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';
import Heading from '@/app/components/ui/Heading';
import BrandIllustration from '@/app/components/ui/BrandIllustration';

const podcasts = [
  {
    title: "Let's Talk Facilities",
    description: 'Industry insights, expert interviews, and real talk about commercial facility management.',
    href: '/lets-talk-facilities',
    logo: '/images/67a54d0fe733570a899a1d4b_LetsTalkFacilities_Logo2.svg',
    color: colors.orange.DEFAULT,
    episodes: '50+ episodes',
  },
  {
    title: "Let's Talk Sustainability",
    description: 'Conversations about building a more sustainable built environment, one floor at a time.',
    href: '/lets-talk-sustainability',
    logo: '/images/premrest_sustainability-lts.svg',
    color: colors.green.DEFAULT,
    episodes: '30+ episodes',
  },
];

export default function PodcastFeature() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      style={{
        padding: `${spacing[24]} 0`,
        background: colors.offWhite,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <BrandIllustration
        type="rays"
        color="cream"
        size={400}
        position={{ bottom: '-100px', left: '-150px' }}
        animation="rotate"
        opacity={0.1}
      />

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
            Thought Leadership
          </motion.p>
          <Heading as="h2" size="heading-xl" align="center">
            Listen. Learn. Lead.
          </Heading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-md'],
              color: colors.charcoal[500],
              lineHeight: typography.lineHeight.relaxed,
              marginTop: spacing[4],
              marginBottom: 0,
            }}
          >
            Our podcasts bring together industry leaders to discuss what matters
            most in commercial facilities and sustainability.
          </motion.p>
        </div>

        {/* Podcast cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: spacing[6],
          }}
          className="podcast-grid"
        >
          {podcasts.map((podcast, i) => (
            <motion.a
              key={podcast.title}
              href={podcast.href}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6, boxShadow: shadows.xl }}
              style={{
                display: 'flex',
                gap: spacing[6],
                padding: spacing[6],
                background: colors.white,
                borderRadius: borderRadius.lg,
                boxShadow: shadows.md,
                textDecoration: 'none',
                color: 'inherit',
                alignItems: 'center',
                transition: 'box-shadow 0.3s ease',
                borderLeft: `4px solid ${podcast.color}`,
              }}
            >
              {/* Logo */}
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: borderRadius.md,
                  background: colors.offWhite,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  overflow: 'hidden',
                }}
              >
                <motion.img
                  src={podcast.logo}
                  alt={podcast.title}
                  style={{ width: '80%', height: 'auto' }}
                  whileHover={{ scale: 1.1 }}
                />
              </div>

              {/* Content */}
              <div>
                <h3
                  style={{
                    fontFamily: typography.fontFamily.headline,
                    fontSize: typography.fontSize['heading-sm'],
                    fontWeight: typography.fontWeight.bold,
                    color: colors.charcoal.DEFAULT,
                    margin: `0 0 ${spacing[2]}`,
                  }}
                >
                  {podcast.title}
                </h3>
                <p
                  style={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize['body-sm'],
                    color: colors.charcoal[500],
                    lineHeight: typography.lineHeight.relaxed,
                    margin: `0 0 ${spacing[3]}`,
                  }}
                >
                  {podcast.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3] }}>
                  <span
                    style={{
                      fontFamily: typography.fontFamily.accent,
                      fontSize: typography.fontSize['body-xs'],
                      fontStyle: 'italic',
                      color: colors.charcoal[400],
                    }}
                  >
                    {podcast.episodes}
                  </span>
                  <span
                    style={{
                      fontFamily: typography.fontFamily.body,
                      fontSize: typography.fontSize['body-xs'],
                      fontWeight: typography.fontWeight.semibold,
                      color: podcast.color,
                      letterSpacing: typography.letterSpacing.wide,
                      textTransform: 'uppercase',
                    }}
                  >
                    Listen now →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .podcast-grid {
            grid-template-columns: 1fr !important;
          }
        }
      ` }} />
    </section>
  );
}

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
    colorLight: colors.orange[50],
    episodes: '50+ episodes',
    latest: 'New episodes weekly',
  },
  {
    title: "Let's Talk Sustainability",
    description: 'Conversations about building a more sustainable built environment, one floor at a time.',
    href: '/lets-talk-sustainability',
    logo: '/images/premrest_sustainability-lts.svg',
    color: colors.green.DEFAULT,
    colorLight: '#eef5f0',
    episodes: '30+ episodes',
    latest: 'New episodes fortnightly',
  },
];

function WaveformDecoration({ color }: { color: string }) {
  const bars = 20;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '3px',
        height: '40px',
        opacity: 0.2,
      }}
    >
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className="waveform-bar"
          style={{
            width: '3px',
            height: '100%',
            background: color,
            borderRadius: '2px',
            animationDelay: `${i * 0.08}s`,
            animationDuration: `${0.8 + Math.random() * 0.8}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function PodcastFeature() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      style={{
        padding: `${spacing[24]} 0 ${spacing[32]}`,
        background: colors.offWhite,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <BrandIllustration
        type="rays"
        color="cream"
        size={500}
        position={{ bottom: '-150px', left: '-200px' }}
        animation="rotate"
        opacity={0.08}
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
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: spacing[16], maxWidth: '650px', margin: `0 auto ${spacing[16]}` }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: spacing[3],
              marginBottom: spacing[4],
            }}
          >
            <div
              style={{
                width: '32px',
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
              Thought Leadership
            </p>
            <div
              style={{
                width: '32px',
                height: '2px',
                background: colors.orange.DEFAULT,
              }}
            />
          </motion.div>
          <Heading as="h2" size="display-md" align="center">
            Listen. Learn. Lead.
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
            Our podcasts bring together industry leaders to discuss what matters
            most in commercial facilities and sustainability.
          </motion.p>
        </div>

        {/* Podcast cards — bold editorial style */}
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
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
              whileHover={{ y: -8 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: colors.white,
                borderRadius: borderRadius.xl,
                boxShadow: shadows.md,
                textDecoration: 'none',
                color: 'inherit',
                overflow: 'hidden',
                transition: 'box-shadow 0.4s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = shadows.xl)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = shadows.md)}
            >
              {/* Color accent top bar */}
              <div
                style={{
                  height: '4px',
                  background: `linear-gradient(90deg, ${podcast.color}, ${podcast.color}66)`,
                }}
              />

              {/* Logo + waveform area */}
              <div
                style={{
                  padding: `${spacing[8]} ${spacing[6]} ${spacing[5]}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: `radial-gradient(circle at 20% 50%, ${podcast.colorLight}, transparent 60%)`,
                }}
              >
                <div
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: borderRadius.lg,
                    background: colors.offWhite,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    overflow: 'hidden',
                    boxShadow: shadows.sm,
                  }}
                >
                  <motion.img
                    src={podcast.logo}
                    alt={podcast.title}
                    style={{ width: '80%', height: 'auto' }}
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
                <WaveformDecoration color={podcast.color} />
              </div>

              {/* Content */}
              <div style={{ padding: `${spacing[5]} ${spacing[6]} ${spacing[6]}`, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3
                  style={{
                    fontFamily: typography.fontFamily.headline,
                    fontSize: typography.fontSize['heading-md'],
                    fontWeight: typography.fontWeight.heavy,
                    color: colors.charcoal.DEFAULT,
                    margin: `0 0 ${spacing[2]}`,
                    lineHeight: 1.15,
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
                    margin: `0 0 ${spacing[5]}`,
                    flex: 1,
                  }}
                >
                  {podcast.description}
                </p>

                {/* Bottom row: episode count + play button */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span
                      style={{
                        display: 'block',
                        fontFamily: typography.fontFamily.headline,
                        fontSize: typography.fontSize['body-md'],
                        fontWeight: typography.fontWeight.bold,
                        color: podcast.color,
                      }}
                    >
                      {podcast.episodes}
                    </span>
                    <span
                      style={{
                        fontFamily: typography.fontFamily.body,
                        fontSize: typography.fontSize.caption,
                        color: colors.charcoal[400],
                      }}
                    >
                      {podcast.latest}
                    </span>
                  </div>

                  {/* Play button */}
                  <motion.div
                    whileHover={{ scale: 1.1, backgroundColor: podcast.color }}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: `${podcast.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background 0.3s',
                    }}
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill={podcast.color}
                      style={{ marginLeft: '2px' }}
                    >
                      <path d="M0 0L16 9L0 18V0Z" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* All content CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{
            textAlign: 'center',
            marginTop: spacing[12],
          }}
        >
          <a
            href="/resources"
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-sm'],
              fontWeight: typography.fontWeight.semibold,
              color: colors.orange.DEFAULT,
              letterSpacing: typography.letterSpacing.wide,
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: spacing[2],
            }}
          >
            Explore all resources
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
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

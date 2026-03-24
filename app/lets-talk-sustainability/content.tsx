'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection, CTABanner } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';

const platforms = [
  { name: 'Apple Podcasts', image: '/images/apple-icon-cream.webp', href: '#' },
  { name: 'Spotify', image: '/images/spotify-icon-cream.webp', href: '#' },
  { name: 'YouTube Music', image: '/images/youtubemusic-icon-cream.webp', href: '#' },
  { name: 'YouTube', image: '/images/youtube-icon-cream.webp', href: '#' },
];

export default function LetsTalkSustainabilityContent() {
  const podcastRef = useRef(null);
  const podcastInView = useInView(podcastRef, { once: true, margin: '-80px' });
  const episodeRef = useRef(null);
  const episodeInView = useInView(episodeRef, { once: true, margin: '-80px' });

  return (
    <RedesignLayout>
      <PageHero
        title="Let's Talk Sustainability"
        accentColor={colors.green.DEFAULT}
        backgroundImage="/images/Premrest_LTS_Hero_Blob.webp"
        backgroundColor={colors.green.dark}
      />

      {/* Podcast Info Section */}
      <ContentSection background={colors.offWhite}>
        <div
          ref={podcastRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: spacing[12],
            alignItems: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={podcastInView ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <img
              src="/images/premrest_facilities-ltf.svg"
              alt="Let's Talk Sustainability podcast logo"
              style={{
                width: '240px',
                height: 'auto',
                borderRadius: borderRadius.lg,
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={podcastInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Heading as="h2" size="heading-lg">
              {"The sustainability conversation"}
            </Heading>
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-lg'],
                color: colors.charcoal[500],
                lineHeight: typography.lineHeight.relaxed,
                marginTop: spacing[4],
                marginBottom: spacing[8],
                maxWidth: '600px',
              }}
            >
              Exploring how the commercial flooring and facilities industry can lead the charge on sustainability. From circular economy practices to green certifications, we cover what matters.
            </p>

            {/* Platform Links */}
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.label,
                fontWeight: typography.fontWeight.semibold,
                letterSpacing: typography.letterSpacing.wider,
                textTransform: 'uppercase',
                color: colors.charcoal[400],
                marginBottom: spacing[4],
              }}
            >
              Listen on
            </p>
            <div style={{ display: 'flex', gap: spacing[4], flexWrap: 'wrap' }}>
              {platforms.map((platform, i) => (
                <motion.a
                  key={platform.name}
                  href={platform.href}
                  title={platform.name}
                  style={{
                    display: 'block',
                    borderRadius: borderRadius.md,
                    overflow: 'hidden',
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={podcastInView ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={platform.image}
                    alt={platform.name}
                    style={{ height: '48px', width: 'auto', display: 'block' }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            div[style*="grid-template-columns: auto 1fr"] {
              grid-template-columns: 1fr !important;
              text-align: center;
            }
          }
        `}} />
      </ContentSection>

      {/* Latest Episode Section */}
      <ContentSection background={colors.white}>
        <div ref={episodeRef}>
          <Heading as="h2" size="heading-lg" align="center">
            Latest Episode
          </Heading>
          <motion.div
            style={{
              marginTop: spacing[10],
              background: colors.offWhite,
              borderRadius: borderRadius.lg,
              padding: spacing[10],
              textAlign: 'center',
              boxShadow: shadows.sm,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={episodeInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-lg'],
                color: colors.charcoal[400],
                marginBottom: spacing[6],
              }}
            >
              New episodes dropping regularly. Stay tuned!
            </p>
            <Button href="#" variant="primary" size="lg">
              Listen Now
            </Button>
          </motion.div>
        </div>
      </ContentSection>

      <CTABanner
        heading="Never miss an episode"
        description="Subscribe to Let's Talk Sustainability on your favourite platform."
        buttonText="Subscribe"
        buttonHref="#"
        background={`linear-gradient(135deg, ${colors.green.DEFAULT}, ${colors.green.dark})`}
      />
    </RedesignLayout>
  );
}

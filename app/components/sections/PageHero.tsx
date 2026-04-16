'use client';

import { motion } from 'framer-motion';
import { colors, typography, spacing, layout } from '@/app/lib/tokens';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  accentColor?: string;
  compact?: boolean;
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  backgroundColor = colors.charcoal.DEFAULT,
  accentColor,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: compact ? '40vh' : '55vh',
        display: 'flex',
        alignItems: 'center',
        background: backgroundColor,
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      {backgroundImage && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
          }}
        >
          <img
            src={backgroundImage}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 40%',
            }}
          />
        </div>
      )}

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: backgroundImage
            ? 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 100%)'
            : 'transparent',
        }}
      />

      {/* Content */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: layout.contentWidth,
          margin: '0 auto',
          padding: `${compact ? spacing[20] : spacing[24]} ${layout.gutter}`,
          paddingTop: compact ? spacing[24] : spacing[32],
        }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h1
          style={{
            fontFamily: typography.fontFamily.headline,
            fontSize: typography.fontSize['display-md'],
            fontWeight: typography.fontWeight.bold,
            lineHeight: typography.lineHeight.snug,
            letterSpacing: typography.letterSpacing.tight,
            color: colors.white,
            margin: 0,
            maxWidth: '800px',
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <motion.p
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-lg'],
              fontWeight: typography.fontWeight.regular,
              lineHeight: typography.lineHeight.relaxed,
              color: 'rgba(255,255,255,0.8)',
              marginTop: spacing[4],
              maxWidth: '560px',
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}

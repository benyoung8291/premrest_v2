'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  backgroundColor = colors.charcoal.dark,
  accentColor = colors.orange.DEFAULT,
  compact = false,
}: PageHeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const words = title.split(' ');

  return (
    <section
      ref={ref}
      className="noise-overlay"
      style={{
        position: 'relative',
        minHeight: compact ? '50vh' : '70vh',
        display: 'flex',
        alignItems: 'center',
        background: backgroundColor,
        overflow: 'hidden',
      }}
    >
      {/* Background image with parallax */}
      {backgroundImage && (
        <motion.div
          style={{
            position: 'absolute',
            inset: '-10%',
            y: imageY,
            scale: imageScale,
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
        </motion.div>
      )}

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: backgroundImage
            ? `linear-gradient(135deg, ${backgroundColor}ee 0%, ${backgroundColor}bb 40%, ${backgroundColor}88 100%)`
            : 'transparent',
        }}
      />

      {/* Bottom gradient fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '30%',
          background: `linear-gradient(transparent, ${backgroundColor})`,
        }}
      />

      {/* Accent line */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(90deg, ${accentColor}, ${colors.cream.DEFAULT})`,
        }}
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Content */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: layout.contentWidth,
          margin: '0 auto',
          padding: `${compact ? spacing[20] : spacing[32]} ${layout.gutter}`,
          paddingTop: compact ? spacing[32] : spacing[40],
          y: textY,
          opacity,
        }}
      >
        <h1
          style={{
            fontFamily: typography.fontFamily.headline,
            fontSize: typography.fontSize['display-md'],
            fontWeight: typography.fontWeight.heavy,
            lineHeight: typography.lineHeight.tight,
            letterSpacing: typography.letterSpacing.tight,
            color: colors.white,
            margin: 0,
            maxWidth: '900px',
          }}
        >
          <span style={{ display: 'flex', flexWrap: 'wrap', gap: '0 0.3em' }}>
            {words.map((word, i) => (
              <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
                <motion.span
                  style={{ display: 'inline-block' }}
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
        </h1>

        {subtitle && (
          <motion.p
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-lg'],
              fontWeight: typography.fontWeight.light,
              lineHeight: typography.lineHeight.relaxed,
              color: colors.charcoal[200],
              marginTop: spacing[6],
              maxWidth: '600px',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { colors, typography, spacing, layout } from '@/app/lib/tokens';
import BrandIllustration from '@/app/components/ui/BrandIllustration';
import Button from '@/app/components/ui/Button';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const words = 'The people behind your floors.'.split(' ');

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: colors.offWhite,
        overflow: 'hidden',
      }}
    >
      {/* Background image with parallax */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          y: imageY,
        }}
      >
        <img
          src="/images/FeaturedImage_About.jpg"
          alt="Premrest team"
          style={{
            width: '100%',
            height: '120%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(135deg, ${colors.charcoal.dark}ee 0%, ${colors.charcoal.DEFAULT}88 50%, transparent 100%)`,
          }}
        />
      </motion.div>

      {/* Illustration accents */}
      <BrandIllustration
        type="scribble"
        color="cream"
        size={300}
        position={{ top: '10%', right: '5%' }}
        animation="float"
        opacity={0.15}
        zIndex={1}
      />
      <BrandIllustration
        type="patch"
        color="orange"
        size={180}
        position={{ bottom: '15%', left: '3%' }}
        animation="parallax"
        opacity={0.2}
        zIndex={1}
      />

      {/* Content */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: layout.contentWidth,
          margin: '0 auto',
          padding: `${spacing[32]} ${layout.gutter} ${spacing[20]}`,
          width: '100%',
          y: textY,
          opacity,
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize.label,
            fontWeight: typography.fontWeight.semibold,
            letterSpacing: typography.letterSpacing.widest,
            textTransform: 'uppercase',
            color: colors.orange.DEFAULT,
            marginBottom: spacing[4],
            marginTop: 0,
          }}
        >
          Commercial Flooring Experts
        </motion.p>

        {/* Headline with word-by-word reveal */}
        <h1
          style={{
            fontFamily: typography.fontFamily.headline,
            fontSize: typography.fontSize['display-xl'],
            fontWeight: typography.fontWeight.heavy,
            lineHeight: typography.lineHeight.tight,
            letterSpacing: typography.letterSpacing.tight,
            color: colors.white,
            margin: `0 0 ${spacing[6]}`,
            maxWidth: '800px',
          }}
        >
          <span style={{ display: 'flex', flexWrap: 'wrap', gap: '0 0.25em' }}>
            {words.map((word, i) => (
              <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
                <motion.span
                  style={{ display: 'inline-block' }}
                  initial={{ y: '120%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    delay: 0.5 + i * 0.08,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-lg'],
            lineHeight: typography.lineHeight.relaxed,
            color: colors.charcoal[200],
            maxWidth: '540px',
            margin: `0 0 ${spacing[8]}`,
          }}
        >
          Cleaning, installing, and caring for Australia&apos;s commercial floors
          — with the relationships to prove it.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          style={{ display: 'flex', gap: spacing[4], flexWrap: 'wrap' }}
        >
          <Button variant="primary" size="lg" href="/cleaning">
            Explore Services
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="/about"
            className="hero-outline-btn"
          >
            <span style={{ color: colors.white }}>Our Story</span>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          style={{
            position: 'absolute',
            bottom: spacing[8],
            left: layout.gutter,
            display: 'flex',
            alignItems: 'center',
            gap: spacing[2],
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            style={{
              width: '24px',
              height: '40px',
              borderRadius: '12px',
              border: `2px solid ${colors.white}40`,
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '8px',
            }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              style={{
                width: '3px',
                height: '8px',
                borderRadius: '2px',
                background: colors.white,
              }}
            />
          </motion.div>
          <span
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize.caption,
              letterSpacing: typography.letterSpacing.wider,
              textTransform: 'uppercase',
              color: `${colors.white}80`,
            }}
          >
            Scroll to explore
          </span>
        </motion.div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-outline-btn {
          border-color: rgba(255,255,255,0.4) !important;
        }
        .hero-outline-btn:hover {
          border-color: rgba(255,255,255,0.8) !important;
          background: rgba(255,255,255,0.1) !important;
        }
      ` }} />
    </section>
  );
}

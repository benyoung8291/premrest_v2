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

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.7, 0.9]);

  const words = 'The people behind your floors.'.split(' ');

  return (
    <section
      ref={ref}
      className="noise-overlay"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: colors.charcoal.dark,
        overflow: 'hidden',
      }}
    >
      {/* Background image with parallax + scale */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-10%',
          y: imageY,
          scale: imageScale,
        }}
      >
        <img
          src="/images/FeaturedImage_About.jpg"
          alt="Premrest team"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
          }}
        />
      </motion.div>

      {/* Multi-layer gradient overlay for depth */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: overlayOpacity,
          background: `linear-gradient(
            160deg,
            ${colors.charcoal.dark}f5 0%,
            ${colors.charcoal.DEFAULT}cc 35%,
            ${colors.charcoal.DEFAULT}66 65%,
            transparent 100%
          )`,
        }}
      />

      {/* Bottom gradient for depth fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '30%',
          background: `linear-gradient(to top, ${colors.charcoal.dark}ee, transparent)`,
          zIndex: 1,
        }}
      />

      {/* Decorative orange accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 2, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '4px',
          background: `linear-gradient(90deg, ${colors.orange.DEFAULT}, ${colors.cream.DEFAULT}, ${colors.orange.DEFAULT})`,
          transformOrigin: 'left',
          zIndex: 5,
        }}
      />

      {/* Floating illustration layers */}
      <BrandIllustration
        type="scribble"
        color="cream"
        size={400}
        position={{ top: '5%', right: '2%' }}
        animation="float"
        opacity={0.08}
        zIndex={1}
      />
      <BrandIllustration
        type="patch"
        color="orange"
        size={240}
        position={{ bottom: '20%', left: '2%' }}
        animation="parallax"
        opacity={0.12}
        zIndex={1}
      />
      <BrandIllustration
        type="rays"
        color="cream"
        size={500}
        position={{ top: '15%', right: '-10%' }}
        animation="rotate"
        opacity={0.04}
        zIndex={1}
      />

      {/* Content */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: layout.contentWidth,
          margin: '0 auto',
          padding: `${spacing[40]} ${layout.gutter} ${spacing[24]}`,
          width: '100%',
          y: textY,
          opacity,
        }}
      >
        {/* Eyebrow with animated line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: spacing[3],
            marginBottom: spacing[5],
          }}
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              width: '48px',
              height: '2px',
              background: colors.orange.DEFAULT,
              transformOrigin: 'left',
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
            Commercial Flooring Experts
          </p>
        </motion.div>

        {/* Headline with word-by-word reveal — OVERSIZED */}
        <h1
          style={{
            fontFamily: typography.fontFamily.headline,
            fontSize: 'clamp(3.5rem, 9vw, 8rem)',
            fontWeight: typography.fontWeight.heavy,
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            color: colors.white,
            margin: `0 0 ${spacing[6]}`,
            maxWidth: '900px',
          }}
        >
          <span style={{ display: 'flex', flexWrap: 'wrap', gap: '0 0.22em' }}>
            {words.map((word, i) => (
              <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
                <motion.span
                  style={{
                    display: 'inline-block',
                    ...(word === 'floors.' ? {
                      background: `linear-gradient(135deg, ${colors.orange.DEFAULT}, ${colors.cream.DEFAULT})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    } : {}),
                  }}
                  initial={{ y: '120%', rotateX: -15 }}
                  animate={{ y: '0%', rotateX: 0 }}
                  transition={{
                    delay: 0.5 + i * 0.1,
                    duration: 0.7,
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-lg'],
            lineHeight: typography.lineHeight.relaxed,
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '520px',
            margin: `0 0 ${spacing[10]}`,
          }}
        >
          Cleaning, installing, and caring for Australia&apos;s commercial floors
          — with the relationships to prove it.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.7 }}
          style={{ display: 'flex', gap: spacing[4], flexWrap: 'wrap', alignItems: 'center' }}
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

        {/* Stats strip below CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          style={{
            display: 'flex',
            gap: spacing[10],
            marginTop: spacing[16],
            paddingTop: spacing[6],
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}
          className="hero-stats"
        >
          {[
            { value: '20+', label: 'Years' },
            { value: '500+', label: 'Projects' },
            { value: '98%', label: 'Retention' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 + i * 0.15 }}
            >
              <span
                style={{
                  display: 'block',
                  fontFamily: typography.fontFamily.headline,
                  fontSize: typography.fontSize['heading-lg'],
                  fontWeight: typography.fontWeight.heavy,
                  color: colors.orange.DEFAULT,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize.caption,
                  letterSpacing: typography.letterSpacing.wider,
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator — modernized */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: spacing[8],
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: spacing[2],
          zIndex: 5,
        }}
      >
        <span
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize.caption,
            letterSpacing: typography.letterSpacing.widest,
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '40px',
            background: `linear-gradient(to bottom, ${colors.orange.DEFAULT}, transparent)`,
          }}
        />
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-outline-btn {
          border-color: rgba(255,255,255,0.25) !important;
        }
        .hero-outline-btn:hover {
          border-color: rgba(255,255,255,0.7) !important;
          background: rgba(255,255,255,0.08) !important;
        }
        @media (max-width: 768px) {
          .hero-stats {
            gap: 2rem !important;
            flex-wrap: wrap;
          }
        }
      ` }} />
    </section>
  );
}

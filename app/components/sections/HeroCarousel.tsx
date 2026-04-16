'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, typography, spacing, layout } from '@/app/lib/tokens';

const slides = [
  {
    image: '/images/Home_FeaturedImage.jpg',
    headline: 'Commercial Flooring Excellence',
    subheadline: 'Cleaning, installing, and caring for Australia\'s commercial floors.',
    cta1: { label: 'Explore Services', href: '/cleaning' },
    cta2: { label: 'View Projects', href: '/projects' },
  },
  {
    image: '/images/Installs_FeaturedImage.jpg',
    headline: 'Expert Installation & Care',
    subheadline: 'Professional flooring for projects of every scale — from small offices to multi-level builds.',
    cta1: { label: 'Installation', href: '/installs' },
    cta2: { label: 'Cleaning Services', href: '/cleaning' },
  },
  {
    image: '/images/FeaturedImage_About.jpg',
    headline: 'Sustainable Flooring Solutions',
    subheadline: 'Eco-responsible practices for floors that look good and do good.',
    cta1: { label: 'Our Approach', href: '/sustainability' },
    cta2: { label: 'Get a Quote', href: '/contact' },
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const slide = slides[current];

  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(480px, 70vh, 700px)',
        overflow: 'hidden',
        background: colors.charcoal.DEFAULT,
      }}
    >
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'absolute',
            inset: 0,
          }}
        >
          <img
            src={slide.image}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          {/* Dark overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.45) 100%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content overlay */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            maxWidth: layout.contentWidth,
            margin: '0 auto',
            padding: `0 ${layout.gutter}`,
            textAlign: 'center',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
            >
              <h1
                style={{
                  fontFamily: typography.fontFamily.headline,
                  fontSize: typography.fontSize['display-xl'],
                  fontWeight: typography.fontWeight.bold,
                  lineHeight: typography.lineHeight.tight,
                  color: colors.white,
                  marginBottom: spacing[4],
                  letterSpacing: typography.letterSpacing.tight,
                }}
              >
                {slide.headline}
              </h1>
              <p
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-lg'],
                  color: 'rgba(255,255,255,0.85)',
                  maxWidth: '560px',
                  margin: `0 auto ${spacing[8]}`,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                {slide.subheadline}
              </p>
              <div style={{ display: 'flex', gap: spacing[3], justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href={slide.cta1.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: `${spacing[3]} ${spacing[6]}`,
                    background: colors.white,
                    color: colors.charcoal.DEFAULT,
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize['body-sm'],
                    fontWeight: typography.fontWeight.medium,
                    borderRadius: '0.25rem',
                    textDecoration: 'none',
                    transition: 'background 0.2s ease',
                  }}
                >
                  {slide.cta1.label}
                </a>
                <a
                  href={slide.cta2.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: `${spacing[3]} ${spacing[6]}`,
                    background: 'transparent',
                    color: colors.white,
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize['body-sm'],
                    fontWeight: typography.fontWeight.medium,
                    border: '1px solid rgba(255,255,255,0.5)',
                    borderRadius: '0.25rem',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  {slide.cta2.label}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dot indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: spacing[6],
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: spacing[2],
          zIndex: 3,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: i === current ? colors.white : 'rgba(255,255,255,0.5)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </section>
  );
}

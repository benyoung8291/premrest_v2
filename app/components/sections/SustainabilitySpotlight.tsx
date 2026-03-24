'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { colors, typography, spacing, layout, borderRadius } from '@/app/lib/tokens';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import BrandIllustration from '@/app/components/ui/BrandIllustration';

const highlights = [
  { text: 'Carbon-neutral floor care programs', icon: '◉' },
  { text: 'Eco-certified cleaning products', icon: '◉' },
  { text: 'Waste diversion and recycling initiatives', icon: '◉' },
  { text: 'Annual sustainability impact reports', icon: '◉' },
];

export default function SustainabilitySpotlight() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const earthRotate = useTransform(scrollYProgress, [0, 1], [-10, 25]);
  const earthScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.95]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 0.3]);

  return (
    <section
      ref={ref}
      className="noise-overlay"
      style={{
        padding: `${spacing[32]} 0`,
        background: `linear-gradient(160deg, ${colors.green.dark} 0%, ${colors.green.DEFAULT} 40%, #3d6e4d 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background textures */}
      <BrandIllustration
        type="canvas"
        color="green"
        size={900}
        position={{ top: '-250px', right: '-350px' }}
        animation="parallax"
        opacity={0.08}
      />

      {/* Decorative accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : undefined}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '3px',
          background: `linear-gradient(90deg, transparent, ${colors.cream.DEFAULT}88, transparent)`,
          transformOrigin: 'center',
        }}
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: spacing[16],
            alignItems: 'center',
          }}
          className="sustainability-grid"
        >
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing[3],
                marginBottom: spacing[4],
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '2px',
                  background: colors.cream.DEFAULT,
                }}
              />
              <p
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize.label,
                  fontWeight: typography.fontWeight.semibold,
                  letterSpacing: typography.letterSpacing.widest,
                  textTransform: 'uppercase',
                  color: colors.cream[200],
                  margin: 0,
                }}
              >
                Sustainability
              </p>
            </motion.div>

            <Heading as="h2" size="display-md" color={colors.white}>
              Floors that care for the future.
            </Heading>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-lg'],
                color: 'rgba(255,255,255,0.75)',
                lineHeight: typography.lineHeight.relaxed,
                margin: `${spacing[5]} 0 ${spacing[8]}`,
              }}
            >
              We don&apos;t just maintain floors — we maintain our responsibility to the
              environment. Sustainability is woven into everything we do.
            </motion.p>

            {/* Sustainability highlights — upgraded with icons and stagger */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: spacing[4],
                marginBottom: spacing[10],
              }}
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : undefined}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: spacing[4],
                    padding: `${spacing[3]} ${spacing[4]}`,
                    borderRadius: borderRadius.lg,
                    background: 'rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${colors.cream.DEFAULT}, ${colors.cream.dark})`,
                      flexShrink: 0,
                      boxShadow: `0 0 12px ${colors.cream.DEFAULT}44`,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: typography.fontFamily.body,
                      fontSize: typography.fontSize['body-md'],
                      color: 'rgba(255,255,255,0.9)',
                      fontWeight: typography.fontWeight.medium,
                    }}
                  >
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Button
                variant="outline"
                size="lg"
                href="/sustainability"
                className="sustainability-btn"
              >
                <span style={{ color: colors.white }}>Our Sustainability Story →</span>
              </Button>
            </motion.div>
          </div>

          {/* Earth illustration with glow effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={isInView ? { opacity: 1, scale: 1 } : undefined}
            transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Glow ring behind earth */}
            <motion.div
              style={{
                position: 'absolute',
                width: '85%',
                maxWidth: '380px',
                aspectRatio: '1',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${colors.cream.DEFAULT}22, transparent 70%)`,
                opacity: glowOpacity,
                filter: 'blur(30px)',
              }}
            />
            <motion.img
              src="/images/Premrest_SustainabilityEarth.svg"
              alt="Sustainability at Premrest"
              style={{
                width: '80%',
                maxWidth: '400px',
                height: 'auto',
                rotate: earthRotate,
                scale: earthScale,
                filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.3))',
              }}
            />
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .sustainability-btn {
          border-color: rgba(255,255,255,0.3) !important;
        }
        .sustainability-btn:hover {
          border-color: rgba(255,255,255,0.7) !important;
          background: rgba(255,255,255,0.1) !important;
        }
        @media (max-width: 768px) {
          .sustainability-grid {
            grid-template-columns: 1fr !important;
          }
        }
      ` }} />
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { colors, typography, spacing, layout } from '@/app/lib/tokens';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import BrandIllustration from '@/app/components/ui/BrandIllustration';

export default function SustainabilitySpotlight() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const earthRotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <section
      ref={ref}
      style={{
        padding: `${spacing[24]} 0`,
        background: `linear-gradient(135deg, ${colors.green.dark} 0%, ${colors.green.DEFAULT} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background textures */}
      <BrandIllustration
        type="canvas"
        color="green"
        size={800}
        position={{ top: '-200px', right: '-300px' }}
        animation="parallax"
        opacity={0.1}
      />

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
            gridTemplateColumns: '1fr 1fr',
            gap: spacing[12],
            alignItems: 'center',
          }}
          className="sustainability-grid"
        >
          {/* Content */}
          <div>
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
                color: colors.cream[200],
                marginBottom: spacing[3],
                marginTop: 0,
              }}
            >
              Sustainability
            </motion.p>

            <Heading as="h2" size="heading-xl" color={colors.white}>
              Floors that care for the future.
            </Heading>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-md'],
                color: 'rgba(255,255,255,0.8)',
                lineHeight: typography.lineHeight.relaxed,
                margin: `${spacing[5]} 0 ${spacing[6]}`,
              }}
            >
              We don&apos;t just maintain floors — we maintain our responsibility to the
              environment. From eco-friendly products to waste reduction programs,
              sustainability is woven into everything we do.
            </motion.p>

            {/* Sustainability highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: spacing[3],
                marginBottom: spacing[8],
              }}
            >
              {[
                'Carbon-neutral floor care programs',
                'Eco-certified cleaning products',
                'Waste diversion and recycling initiatives',
                'Annual sustainability impact reports',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : undefined}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: spacing[3],
                  }}
                >
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: colors.cream.DEFAULT,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: typography.fontFamily.body,
                      fontSize: typography.fontSize['body-sm'],
                      color: 'rgba(255,255,255,0.9)',
                    }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button
                variant="outline"
                size="md"
                href="/sustainability"
                className="sustainability-btn"
              >
                <span style={{ color: colors.white }}>Our Sustainability Story →</span>
              </Button>
            </motion.div>
          </div>

          {/* Earth illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : undefined}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.img
              src="/images/Premrest_SustainabilityEarth.svg"
              alt="Sustainability at Premrest"
              style={{
                width: '80%',
                maxWidth: '400px',
                height: 'auto',
                rotate: earthRotate,
              }}
            />
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .sustainability-btn {
          border-color: rgba(255,255,255,0.4) !important;
        }
        .sustainability-btn:hover {
          border-color: rgba(255,255,255,0.8) !important;
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

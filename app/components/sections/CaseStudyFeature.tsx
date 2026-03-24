'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { colors, typography, spacing, layout, borderRadius } from '@/app/lib/tokens';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import BrandIllustration from '@/app/components/ui/BrandIllustration';

function AnimatedCounter({ value, suffix = '', delay = 0 }: { value: number; suffix?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => {
      let start = 0;
      const end = value;
      const duration = 2000;
      const step = end / (duration / 16);
      const counter = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(counter);
    }, delay);
    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return (
    <span ref={ref} className="stat-glow">
      {count}{suffix}
    </span>
  );
}

export default function CaseStudyFeature() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={ref}
      className="noise-overlay"
      style={{
        padding: `${spacing[32]} 0`,
        background: colors.charcoal.DEFAULT,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background illustrations */}
      <BrandIllustration
        type="scribble"
        color="grey"
        size={600}
        position={{ top: '-80px', left: '-150px' }}
        animation="parallax"
        opacity={0.04}
      />
      <BrandIllustration
        type="patch"
        color="orange"
        size={200}
        position={{ bottom: '10%', right: '5%' }}
        animation="float"
        opacity={0.06}
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
          background: `linear-gradient(90deg, transparent, ${colors.orange.DEFAULT}, transparent)`,
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
            gridTemplateColumns: '1.3fr 1fr',
            gap: spacing[16],
            alignItems: 'center',
          }}
          className="case-study-grid"
        >
          {/* Image with angled clip */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              borderRadius: borderRadius.xl,
              overflow: 'hidden',
              position: 'relative',
              aspectRatio: '4/3',
            }}
          >
            <motion.img
              src="/images/Home_FeaturedImage.jpg"
              alt="Featured project — commercial floor transformation"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                scale: imageScale,
                y: imageY,
              }}
            />
            {/* Gradient overlay on image */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(135deg, ${colors.orange.DEFAULT}22 0%, transparent 50%)`,
              }}
            />
            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : undefined}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{
                position: 'absolute',
                top: spacing[5],
                left: spacing[5],
                padding: `${spacing[2]} ${spacing[4]}`,
                background: colors.orange.DEFAULT,
                borderRadius: borderRadius.full,
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.label,
                fontWeight: typography.fontWeight.semibold,
                letterSpacing: typography.letterSpacing.wider,
                textTransform: 'uppercase',
                color: colors.white,
              }}
            >
              Featured Project
            </motion.div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.2, duration: 0.5 }}
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
                Case Study
              </p>
            </motion.div>

            <Heading as="h2" size="heading-xl" color={colors.white}>
              Transforming commercial spaces, one floor at a time.
            </Heading>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-md'],
                color: colors.charcoal[300],
                lineHeight: typography.lineHeight.relaxed,
                margin: `${spacing[5]} 0 ${spacing[8]}`,
              }}
            >
              Discover how we partnered with some of Australia&apos;s most recognised
              organisations to deliver flooring solutions that exceed expectations
              — on time, on budget, and built to last.
            </motion.p>

            {/* Client quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : undefined}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{
                borderLeft: `3px solid ${colors.orange.DEFAULT}`,
                paddingLeft: spacing[5],
                margin: `0 0 ${spacing[8]}`,
              }}
            >
              <p
                style={{
                  fontFamily: typography.fontFamily.accent,
                  fontSize: typography.fontSize['body-md'],
                  fontStyle: 'italic',
                  color: colors.cream[300],
                  lineHeight: typography.lineHeight.relaxed,
                  margin: `0 0 ${spacing[2]}`,
                }}
              >
                &ldquo;Premrest doesn&apos;t just maintain our floors — they transform
                how we think about our spaces.&rdquo;
              </p>
              <cite
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-xs'],
                  fontStyle: 'normal',
                  color: colors.charcoal[400],
                  letterSpacing: typography.letterSpacing.wide,
                  textTransform: 'uppercase',
                }}
              >
                — Facility Manager, Fortune 500 Client
              </cite>
            </motion.blockquote>

            {/* Animated stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: spacing[6],
                marginBottom: spacing[8],
                paddingBottom: spacing[6],
                borderBottom: `1px solid ${colors.charcoal[600]}`,
              }}
            >
              {[
                { value: 20, suffix: '+', label: 'Years experience' },
                { value: 500, suffix: '+', label: 'Projects delivered' },
                { value: 98, suffix: '%', label: 'Client retention' },
              ].map((stat, i) => (
                <div key={stat.label}>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: typography.fontFamily.headline,
                      fontSize: typography.fontSize['heading-xl'],
                      fontWeight: typography.fontWeight.heavy,
                      color: colors.orange.DEFAULT,
                      lineHeight: 1,
                    }}
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={600 + i * 200} />
                  </span>
                  <span
                    style={{
                      fontFamily: typography.fontFamily.body,
                      fontSize: typography.fontSize.caption,
                      color: colors.charcoal[400],
                      letterSpacing: typography.letterSpacing.wide,
                      textTransform: 'uppercase',
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.7, duration: 0.5 }}
              style={{ display: 'flex', gap: spacing[3] }}
            >
              <Button variant="primary" size="md" href="/case-studies">
                View Case Studies
              </Button>
              <Button variant="ghost" size="md" href="/projects">
                <span style={{ color: colors.cream[300] }}>All Projects →</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .case-study-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      ` }} />
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { colors, typography, spacing, layout, borderRadius } from '@/app/lib/tokens';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import BrandIllustration from '@/app/components/ui/BrandIllustration';

export default function CaseStudyFeature() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const textX = useTransform(scrollYProgress, [0, 0.5], [60, 0]);

  return (
    <section
      ref={ref}
      style={{
        padding: `${spacing[24]} 0`,
        background: colors.charcoal.DEFAULT,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background illustrations */}
      <BrandIllustration
        type="scribble"
        color="grey"
        size={500}
        position={{ top: '-50px', left: '-100px' }}
        animation="parallax"
        opacity={0.05}
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
            gridTemplateColumns: '1.2fr 1fr',
            gap: spacing[12],
            alignItems: 'center',
          }}
          className="case-study-grid"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.7 }}
            style={{
              borderRadius: borderRadius.lg,
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
              }}
            />
            {/* Floating label */}
            <div
              style={{
                position: 'absolute',
                top: spacing[4],
                left: spacing[4],
                padding: `${spacing[1]} ${spacing[3]}`,
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
            </div>
          </motion.div>

          {/* Content */}
          <motion.div style={{ x: textX }}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.label,
                fontWeight: typography.fontWeight.semibold,
                letterSpacing: typography.letterSpacing.widest,
                textTransform: 'uppercase',
                color: colors.orange.DEFAULT,
                marginBottom: spacing[3],
                marginTop: 0,
              }}
            >
              Case Study
            </motion.p>

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
                margin: `${spacing[5]} 0 ${spacing[6]}`,
              }}
            >
              Discover how we partnered with some of Australia&apos;s most recognised
              organisations to deliver flooring solutions that exceed expectations
              — on time, on budget, and built to last.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.5, duration: 0.5 }}
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
                { value: '20+', label: 'Years experience' },
                { value: '500+', label: 'Projects delivered' },
                { value: '98%', label: 'Client retention' },
              ].map((stat) => (
                <div key={stat.label}>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: typography.fontFamily.headline,
                      fontSize: typography.fontSize['heading-lg'],
                      fontWeight: typography.fontWeight.heavy,
                      color: colors.orange.DEFAULT,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontFamily: typography.fontFamily.body,
                      fontSize: typography.fontSize['body-xs'],
                      color: colors.charcoal[400],
                      letterSpacing: typography.letterSpacing.wide,
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
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{ display: 'flex', gap: spacing[3] }}
            >
              <Button variant="primary" size="md" href="/case-studies">
                View Case Studies
              </Button>
              <Button variant="ghost" size="md" href="/projects">
                <span style={{ color: colors.cream[300] }}>All Projects →</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .case-study-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      ` }} />
    </section>
  );
}

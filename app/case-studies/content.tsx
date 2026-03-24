'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection, CTABanner } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import { colors, typography, spacing, borderRadius, shadows } from '@/app/lib/tokens';

export default function CaseStudiesContent() {
  const featuredRef = useRef(null);
  const featuredInView = useInView(featuredRef, { once: true, margin: '-80px' });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-80px' });

  return (
    <RedesignLayout>
      <PageHero
        title="Case Studies"
        subtitle="Success stories, one square metre at a time."
      />

      {/* Featured Case Study */}
      <ContentSection background={colors.white}>
        <div ref={featuredRef}>
          <Heading as="h2" size="heading-lg">
            Featured
          </Heading>
          <motion.div
            style={{
              marginTop: spacing[8],
              background: colors.charcoal.dark,
              borderRadius: borderRadius.lg,
              padding: spacing[12],
              textAlign: 'center',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-lg'],
                color: colors.charcoal[300],
              }}
            >
              Featured case study coming soon.
            </p>
          </motion.div>
        </div>
      </ContentSection>

      {/* Case Studies Grid */}
      <ContentSection background={colors.offWhite}>
        <div ref={gridRef}>
          <Heading as="h2" size="heading-lg">
            More Case Studies
          </Heading>
          <motion.div
            style={{
              marginTop: spacing[8],
              background: colors.white,
              borderRadius: borderRadius.lg,
              padding: spacing[16],
              textAlign: 'center',
              boxShadow: shadows.sm,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={gridInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6 }}
          >
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-lg'],
                color: colors.charcoal[400],
              }}
            >
              No case studies found. Check back soon to see how we have helped our clients transform their spaces.
            </p>
          </motion.div>
        </div>
      </ContentSection>

      <CTABanner
        heading="Ready to transform your space?"
        description="Let us show you what's possible for your commercial floors."
        buttonText="Let's chat"
        buttonHref="/contact"
      />
    </RedesignLayout>
  );
}

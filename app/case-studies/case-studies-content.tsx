'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection, CTABanner } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';

export default function CaseStudiesContent() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-80px' });

  return (
    <RedesignLayout>
      <PageHero
        title="Case Studies"
        subtitle="Success stories, one square metre at a time."
      />

      <ContentSection background={colors.offWhite}>
        <div ref={gridRef}>
          <motion.div
            style={{
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
            <Heading as="h3" size="heading-md" align="center">
              Case studies coming soon
            </Heading>
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-lg'],
                color: colors.charcoal[400],
                lineHeight: typography.lineHeight.relaxed,
                marginTop: spacing[4],
              }}
            >
              We are documenting our success stories. Check back soon to see how we have helped clients transform their spaces.
            </p>
          </motion.div>
        </div>
      </ContentSection>

      <CTABanner
        heading="Let's create your success story"
        description="Talk to our team about your next commercial flooring project."
        buttonText="Get in touch"
        buttonHref="/contact"
      />
    </RedesignLayout>
  );
}

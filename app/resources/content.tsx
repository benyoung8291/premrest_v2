'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection, CTABanner } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';

export default function ResourcesContent() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-80px' });

  return (
    <RedesignLayout>
      <PageHero
        title="Resources"
        subtitle="Tips and insights from our flooring experts."
      />

      {/* Resources Grid */}
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
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-lg'],
                color: colors.charcoal[400],
              }}
            >
              No resources found. Check back soon for expert tips and insights on commercial flooring.
            </p>
          </motion.div>
        </div>
      </ContentSection>

      <CTABanner
        heading="Need expert advice?"
        description="Our team is ready to help you with any flooring questions."
        buttonText="Let's chat"
        buttonHref="/contact"
      />
    </RedesignLayout>
  );
}

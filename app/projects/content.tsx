'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection } from '@/app/components/sections/ContentSection';
import { colors, typography, spacing, borderRadius, shadows } from '@/app/lib/tokens';

export default function ProjectsContent() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-80px' });

  return (
    <RedesignLayout>
      <PageHero
        title="Projects"
        subtitle="Our work speaks for itself."
      />

      {/* Projects Grid */}
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
              No projects found. Check back soon to see our latest commercial flooring work.
            </p>
          </motion.div>
        </div>
      </ContentSection>
    </RedesignLayout>
  );
}

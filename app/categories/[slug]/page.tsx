'use client';

import { use } from 'react';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection } from '@/app/components/sections/ContentSection';
import { colors, typography, spacing } from '@/app/lib/tokens';

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <RedesignLayout>
      <PageHero title={title} compact />
      <ContentSection>
        <p style={{
          fontFamily: typography.fontFamily.body,
          fontSize: typography.fontSize['body-lg'],
          color: colors.charcoal[500],
          lineHeight: typography.lineHeight.relaxed,
          padding: `${spacing[16]} 0`,
          textAlign: 'center' as const,
        }}>
          Content coming soon.
        </p>
      </ContentSection>
    </RedesignLayout>
  );
}

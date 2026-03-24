'use client';

import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection } from '@/app/components/sections/ContentSection';
import { colors, typography, spacing } from '@/app/lib/tokens';

export default function Page() {
  return (
    <RedesignLayout>
      <PageHero title="Book a Guest Spot" compact />
      <ContentSection>
        <div style={{
          maxWidth: '640px',
          margin: '0 auto',
          padding: `${spacing[16]} 0`,
        }}>
          <p style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-lg'],
            color: colors.charcoal[500],
            lineHeight: typography.lineHeight.relaxed,
            marginBottom: spacing[8],
          }}>
            Interested in being a guest on Let&apos;s Talk Facilities? We&apos;d love to hear from you.
            Fill out the form below and our team will get back to you shortly.
          </p>
          <p style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-md'],
            color: colors.charcoal[400],
            lineHeight: typography.lineHeight.relaxed,
          }}>
            Booking form coming soon.
          </p>
        </div>
      </ContentSection>
    </RedesignLayout>
  );
}

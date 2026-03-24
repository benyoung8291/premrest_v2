import type { Metadata } from 'next';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection } from '@/app/components/sections/ContentSection';
import { colors, typography, spacing, borderRadius, shadows } from '@/app/lib/tokens';

export const metadata: Metadata = {
  title: 'Reports',
  description: 'Premrest field reports.',
};

export default function Page() {
  return (
    <RedesignLayout>
      <PageHero
        title="Reports"
        accentColor={colors.orange.DEFAULT}
      />

      <ContentSection background={colors.offWhite}>
        <div
          style={{
            maxWidth: '600px',
          }}
        >
          <div
            style={{
              background: colors.white,
              borderRadius: borderRadius.lg,
              padding: spacing[8],
              boxShadow: shadows.sm,
            }}
          >
            <h2
              style={{
                fontFamily: typography.fontFamily.headline,
                fontSize: typography.fontSize['heading-md'],
                color: colors.charcoal.DEFAULT,
                marginBottom: spacing[3],
              }}
            >
              Field report
            </h2>
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-lg'],
                color: colors.charcoal[500],
                lineHeight: typography.lineHeight.relaxed,
                marginBottom: spacing[6],
              }}
            >
              Complete a report for all field services
            </p>
            <a
              href="https://pulse.premrest.com.au/public/contractor-field-report/8c8d680f-6d0f-4ae1-9688-4f234bda9509"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                fontFamily: typography.fontFamily.headline,
                fontSize: typography.fontSize['body-md'],
                fontWeight: typography.fontWeight.semibold,
                color: colors.white,
                backgroundColor: colors.orange.DEFAULT,
                padding: `${spacing[3]} ${spacing[6]}`,
                borderRadius: borderRadius.md,
                textDecoration: 'none',
                transition: 'background-color 0.2s ease',
              }}
            >
              New field report
            </a>
          </div>
        </div>
      </ContentSection>
    </RedesignLayout>
  );
}

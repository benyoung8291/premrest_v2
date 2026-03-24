import type { Metadata } from 'next';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection } from '@/app/components/sections/ContentSection';
import { colors, typography, spacing, borderRadius, shadows } from '@/app/lib/tokens';

export const metadata: Metadata = {
  title: 'Onboarding',
  description: 'Premrest employee and contractor onboarding.',
};

export default function Page() {
  const cardStyle: React.CSSProperties = {
    background: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing[8],
    boxShadow: shadows.sm,
    display: 'flex',
    flexDirection: 'column',
    gap: spacing[4],
  };

  const headlineStyle: React.CSSProperties = {
    fontFamily: typography.fontFamily.headline,
    fontSize: typography.fontSize['heading-md'],
    color: colors.charcoal.DEFAULT,
  };

  const stepStyle: React.CSSProperties = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize['body-md'],
    color: colors.charcoal[500],
    lineHeight: typography.lineHeight.relaxed,
    padding: `${spacing[3]} 0`,
    borderBottom: `1px solid ${colors.charcoal[100]}`,
  };

  const buttonStyle: React.CSSProperties = {
    display: 'inline-block',
    fontFamily: typography.fontFamily.headline,
    fontSize: typography.fontSize['body-md'],
    fontWeight: typography.fontWeight.semibold,
    color: colors.white,
    backgroundColor: colors.orange.DEFAULT,
    padding: `${spacing[3]} ${spacing[6]}`,
    borderRadius: borderRadius.md,
    textDecoration: 'none',
    textAlign: 'center' as const,
    marginTop: spacing[4],
    transition: 'background-color 0.2s ease',
  };

  return (
    <RedesignLayout>
      <PageHero
        title="Onboarding"
        accentColor={colors.orange.DEFAULT}
      />

      <ContentSection background={colors.offWhite}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: spacing[8],
            alignItems: 'start',
          }}
        >
          {/* New Employee */}
          <div style={cardStyle}>
            <h2 style={headlineStyle}>New employee</h2>
            <div>
              <div style={stepStyle}><strong>Step 1:</strong> Complete onboarding form</div>
              <div style={stepStyle}><strong>Step 2:</strong> Sign employment agreement</div>
              <div style={{ ...stepStyle, borderBottom: 'none' }}><strong>Step 3:</strong> Get a National Crime Check and send through</div>
            </div>
            <a
              href="https://pulse.premrest.com.au/public/employee-onboarding/9392f4cb-1399-4038-8db3-b3c3fd94e6d4"
              target="_blank"
              rel="noopener noreferrer"
              style={buttonStyle}
            >
              Employee onboarding
            </a>
          </div>

          {/* New Contractor */}
          <div style={cardStyle}>
            <h2 style={headlineStyle}>New contractor</h2>
            <div>
              <div style={stepStyle}><strong>Step 1:</strong> Complete onboarding form</div>
              <div style={{ ...stepStyle, borderBottom: 'none' }}><strong>Step 2:</strong> Sign contractor agreement</div>
            </div>
            <a
              href="https://pulse.premrest.com.au/public/supplier-onboarding/abcfbfd6-d54c-4245-8a39-b7c4b35247c3"
              target="_blank"
              rel="noopener noreferrer"
              style={buttonStyle}
            >
              Contractor onboarding
            </a>
          </div>

          {/* Illustration */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/images/employees-hifive.svg"
              alt="Employees high five illustration"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </ContentSection>
    </RedesignLayout>
  );
}

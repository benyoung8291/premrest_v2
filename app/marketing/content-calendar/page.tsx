import type { Metadata } from 'next';
import RedesignLayout from '@/app/redesign-layout';
import { ContentSection } from '@/app/components/sections/ContentSection';
import { colors, typography, spacing } from '@/app/lib/tokens';

export const metadata: Metadata = {
  title: 'Content Calendar',
  description: 'Premrest internal content calendar.',
};

export default function Page() {
  return (
    <RedesignLayout>
      <ContentSection background={colors.white}>
        <h1
          style={{
            fontFamily: typography.fontFamily.headline,
            fontSize: typography.fontSize['heading-xl'],
            color: colors.charcoal.DEFAULT,
            marginBottom: spacing[8],
          }}
        >
          Content Calendar
        </h1>
        <div
          style={{
            width: '100%',
            minHeight: '700px',
          }}
        >
          <iframe
            className="clickup-embed"
            src="https://sharing.clickup.com/9016609088/c/h/8cpx2a0-2176/1177e72a261fed0"
            width="100%"
            height="700"
            style={{
              background: 'transparent',
              border: 'none',
            }}
          />
        </div>
      </ContentSection>
    </RedesignLayout>
  );
}

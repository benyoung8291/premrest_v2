import type { Metadata } from 'next';
import RedesignLayout from '@/app/redesign-layout';
import { ContentSection } from '@/app/components/sections/ContentSection';
import { colors, typography, spacing } from '@/app/lib/tokens';

export const metadata: Metadata = {
  title: 'SDS Datasheets',
  description: 'Premrest safety data sheets.',
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
          SDS Datasheets
        </h1>
        <div
          style={{
            width: '100%',
            minHeight: '3000px',
          }}
        >
          <iframe
            className="airtable-embed"
            src="https://airtable.com/embed/appAJdUNw8P3WkYmo/shr2gf9Uf8JPGq6nK"
            width="100%"
            height="3000"
            style={{
              background: 'transparent',
              border: `1px solid ${colors.charcoal[200]}`,
            }}
          />
        </div>
      </ContentSection>
    </RedesignLayout>
  );
}

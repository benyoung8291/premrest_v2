import type { Metadata } from 'next';
import RedesignLayout from '@/app/redesign-layout';
import { ContentSection } from '@/app/components/sections/ContentSection';
import { colors, typography, spacing } from '@/app/lib/tokens';

export const metadata: Metadata = {
  title: 'Analytics',
  description: 'Premrest internal analytics dashboard.',
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
          Analytics
        </h1>
        <div
          style={{
            position: 'relative',
            paddingBottom: '75%',
            height: 0,
            overflow: 'hidden',
            maxWidth: '100%',
          }}
        >
          <iframe
            src="https://lookerstudio.google.com/embed/reporting/3303a2bb-cff0-4143-98e3-5d6d7a2c5d09/page/09BZE"
            width="600"
            height="450"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
            allowFullScreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
      </ContentSection>
    </RedesignLayout>
  );
}

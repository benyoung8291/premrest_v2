'use client';

import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import { colors, typography, spacing, layout } from '@/app/lib/tokens';

export default function FeedbackContent() {
  return (
    <RedesignLayout>
      <PageHero
        title="Feedback"
        subtitle="We value your feedback. Let us know how we can improve."
        backgroundColor={colors.orange.DEFAULT}
        compact
      />

      <ContentSection>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Heading as="h2" size="heading-lg" align="center">
            Share Your Experience
          </Heading>
          <p
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-lg'],
              color: colors.charcoal.light,
              textAlign: 'center',
              marginTop: spacing[4],
              marginBottom: spacing[8],
            }}
          >
            Your feedback helps us deliver better service. Please take a moment to share your thoughts.
          </p>
          <div
            style={{
              width: '100%',
              minHeight: '600px',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            <iframe
              id="JotFormIFrame-211657481051048"
              title="Customer Feedback"
              allowTransparency={true}
              allowFullScreen={true}
              allow="geolocation; microphone; camera"
              src="https://form.jotform.com/211657481051048"
              frameBorder={0}
              style={{
                width: '100%',
                minHeight: '600px',
                border: 'none',
              }}
            />
          </div>
        </div>
      </ContentSection>
    </RedesignLayout>
  );
}

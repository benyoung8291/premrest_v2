'use client';

import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection, CTABanner } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';

const benefits = [
  {
    title: 'What Facility Managers love about Premrest',
    items: [
      'Proactive maintenance that extends carpet lifespan',
      'Minimal disruption with fast-drying methods',
      'Sustainability reporting for ESG goals',
      'National coverage with local expertise',
    ],
  },
];

export default function ComCork1Content() {
  return (
    <RedesignLayout>
      <PageHero
        title="The wow as you walk in. That's ComCork."
        subtitle="Natural cork flooring that delivers stunning aesthetics, acoustic performance, and sustainability in one beautiful package."
        backgroundColor={colors.charcoal.dark}
        compact
      />

      {/* Problem Section */}
      <ContentSection background={colors.offWhite}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <Heading as="h2" size="heading-xl" align="center">
            Nature&apos;s most magnificent flooring material.
          </Heading>
          <p
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-lg'],
              lineHeight: typography.lineHeight.relaxed,
              color: colors.charcoal.light,
              marginTop: spacing[6],
            }}
          >
            Cork flooring combines natural beauty with incredible performance. Its unique cellular structure provides
            built-in cushioning, thermal insulation, and sound absorption — making it ideal for commercial and
            residential spaces alike.
          </p>
        </div>
      </ContentSection>

      {/* Solution Section */}
      <ContentSection>
        <Heading as="h2" size="heading-xl">
          Beautiful, sustainable, and tougher than it looks
        </Heading>
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-lg'],
            lineHeight: typography.lineHeight.relaxed,
            color: colors.charcoal.light,
            marginTop: spacing[4],
            maxWidth: '700px',
          }}
        >
          ComCork flooring is harvested from the bark of cork oak trees without harming the tree itself. The result is a
          renewable, recyclable flooring solution that performs exceptionally in high-traffic environments.
        </p>
        <div
          style={{
            marginTop: spacing[10],
            background: colors.offWhite,
            borderRadius: borderRadius.lg,
            padding: spacing[8],
          }}
        >
          <h3
            style={{
              fontFamily: typography.fontFamily.headline,
              fontWeight: typography.fontWeight.bold,
              fontSize: typography.fontSize['heading-md'],
              color: colors.charcoal.DEFAULT,
              marginBottom: spacing[4],
            }}
          >
            What Facility Managers love about Premrest
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[4] }}>
            {benefits[0].items.map((item) => (
              <li
                key={item}
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-md'],
                  color: colors.charcoal.light,
                  paddingLeft: spacing[6],
                  position: 'relative',
                }}
              >
                <span style={{ position: 'absolute', left: 0, color: colors.orange.DEFAULT, fontWeight: 700 }}>
                  &#10003;
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </ContentSection>

      {/* Lifecycle Section */}
      <ContentSection background={colors.offWhite}>
        <div style={{ textAlign: 'center' }}>
          <Heading as="h2" size="heading-xl" align="center">
            We manage the full life cycle of your flooring.
          </Heading>
          <p
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-lg'],
              lineHeight: typography.lineHeight.relaxed,
              color: colors.charcoal.light,
              marginTop: spacing[4],
              maxWidth: '700px',
              margin: `${spacing[4]} auto 0`,
            }}
          >
            From supply and installation through to ongoing maintenance and eventual replacement, Premrest handles every
            stage of your cork flooring journey.
          </p>
          <div style={{ marginTop: spacing[8] }}>
            <Button href="/contact" variant="primary" size="lg">
              Let&apos;s chat - 1300 207 915
            </Button>
          </div>
        </div>
      </ContentSection>

      <CTABanner
        heading="Keep flooring issues where they belong — out of sight and under control."
        description="Partner with Premrest for stress-free floor management."
        buttonText="Let's chat"
        buttonHref="/contact"
      />
    </RedesignLayout>
  );
}

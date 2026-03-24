'use client';

import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection, CTABanner } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';

const benefits = [
  {
    icon: '/images/vacuum.png',
    title: 'Avoid costly strip-and-seals',
    description:
      'Frequent deep cleaning means healthy, showroom-grade flooring that aligns with your premium offering, for a fraction of the cost.',
  },
  {
    icon: '/images/teeth.png',
    title: 'Elevate your patient experience',
    description:
      'Just like sparkly clean teeth and a good smile, first impressions start from the ground up.',
  },
  {
    icon: '/images/time.png',
    title: 'Reduce disruption in your practice',
    description:
      'After hours cleaning means no downtime, and no rescheduling patients or loss of revenue.',
  },
  {
    icon: '/images/globe.png',
    title: 'Healthier environment',
    description:
      'Our cleaning methods remove up to 96% of dirt and allergens, creating a healthier space for patients and staff.',
  },
];

export default function DentalPracticesContent() {
  return (
    <RedesignLayout>
      <PageHero
        title="Sparkling floors for a thriving dental practice"
        subtitle="Proactive periodic floor cleaning to create a healthy environment and build a practice patients keep coming back to."
        backgroundColor={colors.orange.DEFAULT}
      />

      {/* Problem Section */}
      <ContentSection background={colors.offWhite}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <Heading as="h2" size="heading-xl" align="center">
            Don&apos;t let dirty, worn floors undermine patient trust.
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
            Your dental practice is built on trust and attention to detail. When patients walk through your doors, every
            surface communicates your standard of care — including your floors. Stained, worn, or poorly maintained
            flooring can undermine the confidence patients have in your practice.
          </p>
        </div>
      </ContentSection>

      {/* Solution Section */}
      <ContentSection>
        <div style={{ textAlign: 'center', marginBottom: spacing[12] }}>
          <Heading as="h2" size="heading-xl" align="center">
            Let&apos;s create floors that match your standard of care.
          </Heading>
          <p
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-lg'],
              color: colors.charcoal.light,
              maxWidth: '700px',
              margin: `${spacing[4]} auto 0`,
            }}
          >
            Our deep cleans are completed after hours, minimising disruption so you can open your doors the next morning
            to fresh, revitalised floors. Cleaning, without the chaos.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: spacing[6] }}>
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              style={{
                background: colors.offWhite,
                borderRadius: borderRadius.lg,
                padding: spacing[8],
                textAlign: 'center',
              }}
            >
              <img
                src={benefit.icon}
                alt=""
                style={{ width: '48px', height: '48px', margin: '0 auto', marginBottom: spacing[4] }}
              />
              <h4
                style={{
                  fontFamily: typography.fontFamily.headline,
                  fontWeight: typography.fontWeight.bold,
                  fontSize: typography.fontSize['heading-sm'],
                  color: colors.charcoal.DEFAULT,
                  marginBottom: spacing[3],
                }}
              >
                {benefit.title}
              </h4>
              <p
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-md'],
                  lineHeight: typography.lineHeight.relaxed,
                  color: colors.charcoal.light,
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            div[style*="grid-template-columns: repeat(4"] {
              grid-template-columns: 1fr 1fr !important;
            }
          }
          @media (max-width: 480px) {
            div[style*="grid-template-columns: repeat(4"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}} />
      </ContentSection>

      <CTABanner
        heading="Let's chat about your dental practice floors"
        description="Get in touch for a no-obligation quote and tailored maintenance plan for your practice."
        buttonText="Let's chat"
        buttonHref="/contact"
      />
    </RedesignLayout>
  );
}

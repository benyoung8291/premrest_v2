'use client';

import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection, CTABanner } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';

export default function HotelCarpetContent() {
  return (
    <RedesignLayout>
      <PageHero
        title="Stop Disruptions and Costly Repairs"
        subtitle="When a single stain or tear forces room closures and expensive, all-or-nothing repairs, your budget and guest experience suffer. Get the luxurious, plush feel of broadloom with the convenience and flexibility of modular carpet."
        backgroundColor={colors.cream.DEFAULT}
        accentColor={colors.charcoal.DEFAULT}
      />

      {/* Problem Section */}
      <ContentSection background={colors.offWhite}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[16], alignItems: 'center' }}>
          <div
            style={{ borderRadius: borderRadius.lg, overflow: 'hidden' }}
          >
            <img
              src="/images/Premrest_HotelCarpet_Problem_Blob.webp"
              alt="Hotel carpet maintenance challenges"
              style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div>
            <Heading as="h2" size="heading-xl">
              Maintaining beautiful rooms without costly, disruptive repairs is challenging.
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
              Traditional broadloom carpet in hotels means that a single stain, burn, or tear can force room closures and
              expensive wall-to-wall replacements. The result? Lost revenue, unhappy guests, and bloated maintenance
              budgets.
            </p>
            <div style={{ marginTop: spacing[6] }}>
              <Button href="#hotel-carpet-form" variant="primary">
                Let&apos;s chat
              </Button>
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            section > div > div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}} />
      </ContentSection>

      {/* Solution Section */}
      <ContentSection>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[16], alignItems: 'center' }}>
          <div>
            <Heading as="h2" size="heading-xl">
              A seamless, innovative carpet tile: with the benefits of broadloom.
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
              Modular carpet tiles give you the luxurious look and feel of broadloom, with the practical benefits of
              targeted replacement. Damaged tiles can be swapped out individually — no room closures, no full
              replacements, and no disruption to guests.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: `${spacing[6]} 0 0` }}>
              {[
                'Individual tile replacement — swap damaged tiles without replacing the whole room',
                'Faster turnaround — rooms back in service the same day',
                'Cost-effective — only replace what you need',
                'Design flexibility — mix and match patterns and colours',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize['body-md'],
                    color: colors.charcoal.light,
                    padding: `${spacing[2]} 0`,
                    paddingLeft: spacing[6],
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      color: colors.orange.DEFAULT,
                      fontWeight: 700,
                    }}
                  >
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: spacing[6] }}>
              <Button href="#hotel-carpet-form" variant="primary">
                Let&apos;s chat
              </Button>
            </div>
          </div>
          <div style={{ borderRadius: borderRadius.lg, overflow: 'hidden' }}>
            <img
              src="/images/Premrest_Cleaning_Steps_Blob.png"
              alt="Carpet tile solution"
              style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            section > div > div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}} />
      </ContentSection>

      <CTABanner
        heading="Targeted fixes. Zero disruptions. Better hotel experience."
        description="Talk to us about modular carpet solutions for your hotel."
        buttonText="Let's chat"
        buttonHref="/contact"
      />
    </RedesignLayout>
  );
}

'use client';

import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection, CTABanner } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';

const benefits = [
  {
    icon: '🎨',
    title: '29 Designer Colours',
    description: 'A stunning palette of cork wall tiles to complement any interior aesthetic.',
  },
  {
    icon: '🔇',
    title: 'Acoustic Performance',
    description: 'Natural sound absorption for quieter, more productive environments.',
  },
  {
    icon: '🌿',
    title: 'Sustainable Material',
    description: 'Harvested from renewable cork oak bark — no trees are felled in the process.',
  },
  {
    icon: '🛡️',
    title: 'Hypoallergenic',
    description: 'Naturally resistant to mould, mildew, and allergens for healthier spaces.',
  },
  {
    icon: '🔥',
    title: 'Fire Retardant',
    description: 'Naturally fire-resistant material that meets commercial building standards.',
  },
  {
    icon: '⚡',
    title: 'Easy Installation',
    description: 'Lightweight tiles that can be installed on walls and ceilings with minimal disruption.',
  },
];

const stats = [
  { number: '29', label: 'Colours' },
  { number: '25+', label: 'Years Experience' },
  { number: '100%', label: 'Natural' },
];

export default function ComCorkContent() {
  return (
    <RedesignLayout>
      <PageHero
        title="ComCork Natural Cork Wall Tiles"
        subtitle="Decorative cork wall and ceiling tiles in 29 designer colours. Supplied and installed nationwide by Premrest."
        backgroundColor={colors.orange.DEFAULT}
        compact
      />

      {/* Intro Section */}
      <ContentSection background={colors.offWhite}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[16], alignItems: 'center' }}>
          <div>
            <Heading as="h2" size="heading-xl">
              Nature&apos;s most magnificent wall covering
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
              ComCork decorative cork tiles transform walls and ceilings into stunning, functional surfaces. Made from
              100% natural cork, these tiles offer exceptional acoustic performance, thermal insulation, and a unique
              organic aesthetic that no synthetic material can replicate.
            </p>
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-lg'],
                lineHeight: typography.lineHeight.relaxed,
                color: colors.charcoal.light,
                marginTop: spacing[4],
              }}
            >
              Available in 29 designer colours, ComCork tiles are perfect for commercial offices, hospitality venues,
              retail spaces, and residential interiors where design meets performance.
            </p>
            <div style={{ display: 'flex', gap: spacing[10], marginTop: spacing[8], paddingTop: spacing[8], borderTop: `2px solid ${colors.cream.DEFAULT}` }}>
              {stats.map((stat) => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <span
                    style={{
                      fontFamily: typography.fontFamily.headline,
                      fontWeight: typography.fontWeight.heavy,
                      fontSize: '2.75rem',
                      color: colors.orange.DEFAULT,
                      display: 'block',
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.number}
                  </span>
                  <span style={{ fontSize: typography.fontSize['body-sm'], color: colors.charcoal.light }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              borderRadius: borderRadius.lg,
              overflow: 'hidden',
              boxShadow: shadows.lg,
            }}
          >
            <img
              src="/images/comcork-hero.webp"
              alt="ComCork natural cork wall tiles"
              style={{ width: '100%', height: '520px', objectFit: 'cover', display: 'block' }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
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

      {/* Benefits Section */}
      <ContentSection background={colors.charcoal.dark}>
        <div style={{ textAlign: 'center', marginBottom: spacing[12] }}>
          <Heading as="h2" size="heading-xl" color={colors.white} align="center">
            Why Choose ComCork?
          </Heading>
          <p
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-lg'],
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '600px',
              margin: `${spacing[4]} auto 0`,
            }}
          >
            Natural cork delivers benefits that synthetic alternatives simply cannot match.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: spacing[8] }}>
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: borderRadius.lg,
                padding: spacing[8],
                transition: 'transform 0.3s',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  background: colors.cream.DEFAULT,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: spacing[5],
                  fontSize: '1.5rem',
                }}
              >
                {benefit.icon}
              </div>
              <h3
                style={{
                  fontFamily: typography.fontFamily.headline,
                  fontWeight: typography.fontWeight.bold,
                  fontSize: typography.fontSize['heading-sm'],
                  color: colors.white,
                  marginBottom: spacing[3],
                }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-md'],
                  lineHeight: typography.lineHeight.relaxed,
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            div[style*="grid-template-columns: repeat(3"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}} />
      </ContentSection>

      {/* Premrest Installation Section */}
      <ContentSection>
        <div style={{ textAlign: 'center', marginBottom: spacing[12] }}>
          <Heading as="h2" size="heading-xl" align="center">
            Supplied &amp; Installed by Premrest
          </Heading>
          <p
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-lg'],
              color: colors.charcoal.light,
              maxWidth: '600px',
              margin: `${spacing[4]} auto 0`,
            }}
          >
            We handle the entire process from product selection and supply through to professional installation, ensuring a flawless finish every time.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: spacing[8] }}>
          {[
            { title: 'Consultation', desc: 'We assess your space and recommend the best ComCork products and colours for your project.' },
            { title: 'Supply', desc: 'Direct supply of ComCork tiles in your chosen colours, with competitive pricing for commercial volumes.' },
            { title: 'Installation', desc: 'Professional installation by our experienced team, with minimal disruption to your operations.' },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: colors.white,
                borderRadius: borderRadius.lg,
                padding: spacing[8],
                boxShadow: shadows.sm,
                borderTop: `4px solid ${colors.cream.DEFAULT}`,
              }}
            >
              <h3
                style={{
                  fontFamily: typography.fontFamily.headline,
                  fontWeight: typography.fontWeight.bold,
                  fontSize: typography.fontSize['heading-sm'],
                  color: colors.charcoal.DEFAULT,
                  marginBottom: spacing[3],
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-md'],
                  lineHeight: typography.lineHeight.relaxed,
                  color: colors.charcoal.light,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            div[style*="grid-template-columns: repeat(3"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}} />
      </ContentSection>

      <CTABanner
        heading="Ready to transform your walls with ComCork?"
        description="Get in touch with our team to discuss your project and receive a quote."
        buttonText="Let's chat - 1300 207 915"
        buttonHref="/contact"
      />
    </RedesignLayout>
  );
}

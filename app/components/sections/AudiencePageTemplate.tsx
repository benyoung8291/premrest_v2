'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection, TwoColumnSection, CTABanner } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface FeatureBullet {
  title: string;
  description: string;
}

export interface AudiencePageConfig {
  /** Role label shown before the colon in the hero, e.g. "Facility Managers" */
  role: string;
  /** Hero subtitle / tagline */
  subtitle: string;
  /** Hero background blob image path */
  heroImage: string;
  /** Optional accent colour override (defaults to orange) */
  accentColor?: string;

  // Problem section
  problemHeading: string;
  problemBody: string[];
  problemImage: string;

  // Solution section
  solutionHeading: string;
  solutionBody: string[];

  // Feature bullets
  features: FeatureBullet[];

  // Lifecycle section (optional – not all pages use it)
  lifecycle?: {
    heading: string;
    body: string[];
  };

  // Sustainability calculator section (optional – sustainability page only)
  calculator?: {
    heading: string;
    body: string[];
    image: string;
    buttonText: string;
    buttonHref: string;
  };

  // CTA banner
  ctaHeading: string;
  ctaButtonText?: string;
  ctaButtonHref?: string;
}

// ---------------------------------------------------------------------------
// Reusable sub-sections
// ---------------------------------------------------------------------------

function CheckIcon({ color = colors.orange.DEFAULT }: { color?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ flexShrink: 0, marginTop: '2px' }}
    >
      <circle cx="12" cy="12" r="12" fill={color} opacity={0.15} />
      <path
        d="M7.5 12.5L10.5 15.5L16.5 9.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FeaturesSection({
  role,
  features,
  accentColor = colors.orange.DEFAULT,
}: {
  role: string;
  features: FeatureBullet[];
  accentColor?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      style={{ background: colors.offWhite, padding: `${spacing[24]} 0`, overflow: 'hidden' }}
    >
      <div
        style={{
          maxWidth: layout.contentWidth,
          margin: '0 auto',
          padding: `0 ${layout.gutter}`,
        }}
      >
        <Heading as="h2" size="heading-xl" align="center" style={{ marginBottom: spacing[16] }}>
          What {role} love about premrest
        </Heading>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: spacing[8],
          }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              style={{
                display: 'flex',
                gap: spacing[4],
                background: colors.white,
                borderRadius: borderRadius.lg,
                padding: spacing[6],
                boxShadow: shadows.sm,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <CheckIcon color={accentColor} />
              <div>
                <h4
                  style={{
                    fontFamily: typography.fontFamily.headline,
                    fontSize: typography.fontSize['heading-sm'],
                    fontWeight: typography.fontWeight.bold,
                    color: colors.charcoal.DEFAULT,
                    margin: 0,
                    marginBottom: spacing[2],
                  }}
                >
                  {feature.title}
                </h4>
                <p
                  style={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize['body-md'],
                    color: colors.charcoal[500],
                    lineHeight: typography.lineHeight.relaxed,
                    margin: 0,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns: repeat(2"] {
            grid-template-columns: 1fr !important;
          }
        }
      `,
        }}
      />
    </section>
  );
}

function LifecycleSection({ heading, body }: { heading: string; body: string[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <TwoColumnSection
      image="/images/Premrest_WeWorkWith_FullLifecycle.webp"
      imageAlt="Full lifecycle floor care"
      imagePosition="right"
      background={colors.white}
    >
      <Heading as="h2" size="heading-xl">
        {heading}
      </Heading>
      {body.map((text, i) => (
        <p
          key={i}
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-lg'],
            color: colors.charcoal[500],
            lineHeight: typography.lineHeight.relaxed,
            margin: 0,
          }}
        >
          {text}
        </p>
      ))}
      <div>
        <Button href="/contact" variant="primary" size="lg">
          Talk to us
        </Button>
      </div>
    </TwoColumnSection>
  );
}

function CalculatorSection({
  heading,
  body,
  image,
  buttonText,
  buttonHref,
}: NonNullable<AudiencePageConfig['calculator']>) {
  return (
    <TwoColumnSection
      image={image}
      imageAlt="Sustainability impact calculator"
      imagePosition="right"
      background={colors.offWhite}
    >
      <Heading as="h2" size="heading-xl" color={colors.charcoal.DEFAULT}>
        {heading}
      </Heading>
      {body.map((text, i) => (
        <p
          key={i}
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-lg'],
            color: colors.charcoal[500],
            lineHeight: typography.lineHeight.relaxed,
            margin: 0,
          }}
        >
          {text}
        </p>
      ))}
      <div>
        <Button href={buttonHref} variant="primary" size="lg">
          {buttonText}
        </Button>
      </div>
    </TwoColumnSection>
  );
}

// ---------------------------------------------------------------------------
// Main template
// ---------------------------------------------------------------------------

export default function AudiencePageTemplate({ config }: { config: AudiencePageConfig }) {
  const accent = config.accentColor || colors.orange.DEFAULT;

  return (
    <RedesignLayout>
      {/* Hero */}
      <PageHero
        title={`${config.role}:`}
        subtitle={config.subtitle}
        backgroundImage={config.heroImage}
        accentColor={accent}
      />

      {/* Problem section */}
      <TwoColumnSection
        image={config.problemImage}
        imageAlt={config.role}
        imagePosition="left"
        background={colors.white}
      >
        <Heading as="h2" size="heading-xl">
          {config.problemHeading}
        </Heading>
        {config.problemBody.map((text, i) => (
          <p
            key={i}
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-lg'],
              color: colors.charcoal[500],
              lineHeight: typography.lineHeight.relaxed,
              margin: 0,
            }}
          >
            {text}
          </p>
        ))}
      </TwoColumnSection>

      {/* Solution section */}
      <ContentSection background={colors.offWhite}>
        <Heading as="h2" size="heading-xl" align="center" style={{ marginBottom: spacing[6] }}>
          {config.solutionHeading}
        </Heading>
        {config.solutionBody.map((text, i) => (
          <p
            key={i}
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-lg'],
              color: colors.charcoal[500],
              lineHeight: typography.lineHeight.relaxed,
              margin: 0,
              textAlign: 'center',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {text}
          </p>
        ))}
      </ContentSection>

      {/* Features */}
      <FeaturesSection role={config.role} features={config.features} accentColor={accent} />

      {/* Lifecycle (optional) */}
      {config.lifecycle && (
        <LifecycleSection heading={config.lifecycle.heading} body={config.lifecycle.body} />
      )}

      {/* Calculator (optional) */}
      {config.calculator && <CalculatorSection {...config.calculator} />}

      {/* CTA */}
      <CTABanner
        heading={config.ctaHeading}
        buttonText={config.ctaButtonText || "Let's chat"}
        buttonHref={config.ctaButtonHref || '/contact'}
        background={
          config.accentColor
            ? `linear-gradient(135deg, ${config.accentColor}, ${colors.charcoal.dark})`
            : undefined
        }
      />
    </RedesignLayout>
  );
}

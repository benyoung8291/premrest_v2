'use client';

import { useRef } from 'react';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection, TwoColumnSection, CTABanner } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';
import { motion, useInView } from 'framer-motion';

/* ─── Sustainability Pillars Data ─── */
const pillars = [
  {
    icon: '🌿',
    title: 'Carbon-Neutral Operations',
    description:
      'We offset 100% of our operational carbon footprint, from transport to on-site equipment, ensuring every clean leaves no trace on the planet.',
  },
  {
    icon: '✅',
    title: 'Eco-Certified Products',
    description:
      'Every product in our toolkit is independently certified, meeting the highest environmental and health standards available in the industry.',
  },
  {
    icon: '♻️',
    title: '96% Waste Diversion',
    description:
      'Our low moisture encapsulation method removes 96% of dirt through regular vacuuming, drastically reducing water waste and chemical runoff.',
  },
  {
    icon: '📊',
    title: 'Impact Reports',
    description:
      'We provide detailed sustainability impact reports so facility managers can quantify the water, energy, and chemical savings of every clean.',
  },
];

/* ─── Sustainability Stats ─── */
const stats = [
  { value: '96%', label: 'Waste diverted from landfill' },
  { value: '75%', label: 'Less water than steam cleaning' },
  { value: '100%', label: 'Carbon-neutral operations' },
];

/* ─── Animated Pillar Card ─── */
function PillarCard({ pillar, index }: { pillar: (typeof pillars)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      style={{
        background: colors.white,
        borderRadius: borderRadius.lg,
        padding: spacing[8],
        boxShadow: shadows.sm,
        position: 'relative',
        overflow: 'hidden',
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Green accent bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(90deg, ${colors.green.DEFAULT}, ${colors.green.light})`,
        }}
      />
      <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: spacing[4] }}>
        {pillar.icon}
      </span>
      <h3
        style={{
          fontFamily: typography.fontFamily.headline,
          fontSize: typography.fontSize['heading-sm'],
          fontWeight: typography.fontWeight.bold,
          color: colors.charcoal.DEFAULT,
          margin: 0,
          marginBottom: spacing[3],
        }}
      >
        {pillar.title}
      </h3>
      <p
        style={{
          fontFamily: typography.fontFamily.body,
          fontSize: typography.fontSize['body-md'],
          color: colors.charcoal[500],
          lineHeight: typography.lineHeight.relaxed,
          margin: 0,
        }}
      >
        {pillar.description}
      </p>
    </motion.div>
  );
}

/* ─── Earth / Stats Section ─── */
function EarthStatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      style={{
        background: colors.charcoal.dark,
        padding: `${spacing[24]} 0`,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: layout.contentWidth,
          margin: '0 auto',
          padding: `0 ${layout.gutter}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: spacing[12],
        }}
      >
        <motion.img
          src="/images/Premrest_SustainabilityEarth.svg"
          alt="Sustainability Earth illustration"
          style={{ width: '100%', maxWidth: '280px' }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isInView ? { opacity: 1, scale: 1 } : undefined}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        <Heading as="h2" size="heading-lg" color={colors.white} align="center">
          Sustainability starts underfoot
        </Heading>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: spacing[8],
            width: '100%',
            maxWidth: '800px',
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              style={{ textAlign: 'center' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span
                style={{
                  fontFamily: typography.fontFamily.headline,
                  fontSize: typography.fontSize['display-md'],
                  fontWeight: typography.fontWeight.heavy,
                  color: colors.green.light,
                  display: 'block',
                  marginBottom: spacing[2],
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-md'],
                  color: colors.charcoal[300],
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
}

/* ─── Main Content Component ─── */
export default function SustainabilityContent() {
  return (
    <RedesignLayout>
      {/* 1. Hero */}
      <PageHero
        title="Beautiful flooring doesn't need to cost the earth"
        subtitle="Sustainability is woven into our fabric, and grounded in everything we do."
        backgroundImage="/images/Premrest_Sustainability_Hero_Blob.webp"
        accentColor={colors.green.DEFAULT}
        backgroundColor={colors.charcoal.dark}
      />

      {/* 2. Introduction */}
      <TwoColumnSection
        image="/images/Premrest_Home_Sustainability_Blob.webp"
        imageAlt="Premrest sustainability commitment"
        imagePosition="left"
        background={colors.offWhite}
      >
        <Heading as="h2" size="heading-lg" color={colors.charcoal.DEFAULT}>
          Let&apos;s create floors that sweep you off your feet.
        </Heading>
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-lg'],
            color: colors.charcoal[500],
            lineHeight: typography.lineHeight.relaxed,
            margin: 0,
          }}
        >
          Environmental responsibility is more than just ticking boxes or meeting targets.
          We&apos;re fostering an environment for the generations; crafting floors that are as
          functional and elegant as they are kind to the planet.
        </p>
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-md'],
            color: colors.charcoal[500],
            lineHeight: typography.lineHeight.relaxed,
            margin: 0,
          }}
        >
          We take a ruthless, uncompromising approach to sustainability across our cleans and
          installs. Our solutions shouldn&apos;t just meet today&apos;s needs, but safeguard
          tomorrow.
        </p>
        <div>
          <Button href="/contact" variant="primary" size="lg">
            Let&apos;s chat
          </Button>
        </div>
      </TwoColumnSection>

      {/* 3. Sustainability Pillars */}
      <ContentSection background={colors.warmGray} padding="lg">
        <div style={{ textAlign: 'center', marginBottom: spacing[12] }}>
          <p
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize.label,
              fontWeight: typography.fontWeight.semibold,
              letterSpacing: typography.letterSpacing.wider,
              textTransform: 'uppercase',
              color: colors.green.DEFAULT,
              marginBottom: spacing[4],
            }}
          >
            Our commitment
          </p>
          <Heading as="h2" size="heading-xl" align="center">
            Sustainability at every step
          </Heading>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: spacing[6],
          }}
        >
          {pillars.map((pillar, i) => (
            <PillarCard key={i} pillar={pillar} index={i} />
          ))}
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 1024px) {
            section > div > div[style*="repeat(4"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 600px) {
            section > div > div[style*="repeat(4"],
            section > div > div[style*="repeat(2"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}} />
      </ContentSection>

      {/* 4. Impact Calculator CTA */}
      <TwoColumnSection
        image="/images/Premrest_Sustainability_Calculator_Blob.webp"
        imageAlt="Sustainability impact calculator"
        imagePosition="left"
        background={colors.green.dark}
      >
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize.label,
            fontWeight: typography.fontWeight.semibold,
            letterSpacing: typography.letterSpacing.wider,
            textTransform: 'uppercase',
            color: colors.green.light,
            margin: 0,
          }}
        >
          Sustainability impact report
        </p>
        <Heading as="h2" size="heading-lg" color={colors.white}>
          Low moisture encapsulation trumps steam cleaning, every time.
        </Heading>
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-lg'],
            color: 'rgba(255,255,255,0.85)',
            lineHeight: typography.lineHeight.relaxed,
            margin: 0,
          }}
        >
          Calculate your impact and generate a report of how significantly less water, energy,
          chemicals and waste you&apos;d be saving with our low moisture encapsulation method.
        </p>
        <div>
          <Button href="/impact-calculator" variant="outline" size="lg">
            Calculate your impact
          </Button>
        </div>
      </TwoColumnSection>

      {/* 5. Earth Illustration + Stats */}
      <EarthStatsSection />

      {/* 6. CTA Banner */}
      <CTABanner
        heading="Let's create floors that do good"
        description="Ready to reduce your environmental footprint without compromising on quality? Let's talk."
        buttonText="Let's chat"
        buttonHref="/contact"
        background={`linear-gradient(135deg, ${colors.green.DEFAULT}, ${colors.green.dark})`}
      />
    </RedesignLayout>
  );
}

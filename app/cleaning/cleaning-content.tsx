'use client';

import { useRef } from 'react';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import {
  ContentSection,
  TwoColumnSection,
  StepsSection,
  TestimonialSection,
  CTABanner,
  ClientLogos,
  FeatureGrid,
} from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';
import { motion, useInView } from 'framer-motion';

const managerRoles = [
  { href: '/facility-managers', icon: '/images/building.png', label: 'Facility Manager' },
  { href: '/building-managers', icon: '/images/apartment.png', label: 'Building Manager' },
  { href: '/procurement-managers', icon: '/images/flowchart.png', label: 'Procurement Manager' },
  { href: '/sustainability-managers', icon: '/images/globe.png', label: 'Sustainability Manager' },
  { href: '/general-cleaning-managers', icon: '/images/data-cleaning.png', label: 'General Cleaning Manager' },
];

const pitfalls = [
  'Floors look worse after they\'ve been cleaned',
  'Stains seem to \'reappear\' in the same spot',
  'Hidden stains have been pushed to the top',
  'Cleaning methods compromising warranties',
  'Over-wetting and long drying times',
  'No long-term strategy for your flooring',
  'Huge replacement and restoration costs',
];

const serviceFeatures = [
  {
    title: 'Low moisture encapsulation',
    description:
      'Removes up to 96% of dirt and debris with minimal water usage. Prevents rapid resoiling and extends carpet lifespan with no chemical odours or downtime.',
  },
  {
    title: 'Dry powder system',
    description:
      'An effective deep-cleaning method for carpets that need a chemical-free approach. Ideal for sensitive environments and quick turnaround.',
  },
  {
    title: 'Steam cleaning',
    description:
      'High-temperature extraction for heavy restoration needs. Best suited for deep-set contamination and periodic intensive cleans.',
  },
  {
    title: 'Sustainability impact report',
    description:
      'We provide detailed reporting on water, energy, chemical and waste savings so you can measure and communicate your environmental impact.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Get a quote',
    description:
      'Tell us about your facility and flooring challenges. We\'ll assess your needs and provide a transparent, no-obligation quote.',
  },
  {
    number: '02',
    title: 'Craft a bespoke maintenance program',
    description:
      'We design a tailored floor care program around your traffic patterns, carpet types, environmental conditions and sustainability goals.',
  },
  {
    number: '03',
    title: 'Never deal with dirty floors again',
    description:
      'Sit back while we handle everything. Your floors stay cleaner for longer, and you never have to worry about them again.',
  },
];

function ManagerRolesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <ContentSection background={colors.offWhite} padding="md">
      <Heading as="h2" size="heading-lg" align="center" style={{ marginBottom: spacing[10] }}>
        {"Help! I'm a..."}
      </Heading>
      <div
        ref={ref}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: spacing[6],
          alignItems: 'stretch',
        }}
      >
        {managerRoles.map((role, i) => (
          <motion.a
            key={role.href}
            href={role.href}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: spacing[4],
              padding: spacing[6],
              background: colors.white,
              borderRadius: borderRadius.lg,
              boxShadow: shadows.sm,
              textDecoration: 'none',
              textAlign: 'center',
              transition: 'box-shadow 0.3s',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -4, boxShadow: shadows.lg }}
          >
            <img
              src={role.icon}
              alt=""
              style={{ width: '48px', height: '48px', objectFit: 'contain' }}
            />
            <span
              style={{
                fontFamily: typography.fontFamily.headline,
                fontSize: typography.fontSize['heading-sm'],
                fontWeight: typography.fontWeight.bold,
                color: colors.charcoal.DEFAULT,
              }}
            >
              {role.label}
            </span>
            <span
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-sm'],
                fontWeight: typography.fontWeight.semibold,
                color: colors.orange.DEFAULT,
                letterSpacing: typography.letterSpacing.wide,
                textTransform: 'uppercase',
              }}
            >
              Learn more &rarr;
            </span>
          </motion.a>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          div[style*="grid-template-columns: repeat(5"] {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          div[style*="grid-template-columns: repeat(5"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}} />
    </ContentSection>
  );
}

function PitfallsCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      style={{
        background: colors.charcoal.dark,
        borderRadius: borderRadius.lg,
        padding: spacing[8],
        overflow: 'hidden',
        position: 'relative',
      }}
      initial={{ opacity: 0, x: 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : undefined}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(90deg, ${colors.orange.DEFAULT}, ${colors.cream.DEFAULT})`,
        }}
      />
      <h3
        style={{
          fontFamily: typography.fontFamily.headline,
          fontSize: typography.fontSize['heading-md'],
          fontWeight: typography.fontWeight.bold,
          color: colors.white,
          margin: 0,
          marginBottom: spacing[6],
        }}
      >
        {"Don't fall for these common pitfalls"}
      </h3>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
        {pitfalls.map((pitfall, i) => (
          <motion.li
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: spacing[3],
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '24px',
                height: '24px',
                minWidth: '24px',
                borderRadius: borderRadius.full,
                background: 'rgba(197, 48, 48, 0.2)',
                color: '#e53e3e',
                fontSize: '14px',
                fontWeight: typography.fontWeight.bold,
              }}
            >
              &times;
            </span>
            <span
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-sm'],
                color: colors.charcoal[200],
                lineHeight: typography.lineHeight.relaxed,
              }}
            >
              {pitfall}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

function StepsWithImageSection() {
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
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: spacing[16],
          alignItems: 'center',
        }}
      >
        <motion.div
          style={{ borderRadius: borderRadius.lg, overflow: 'hidden' }}
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img
            src="/images/Premrest_Cleaning_Steps_Blob.webp"
            alt="Floor cleaning process"
            style={{
              width: '100%',
              aspectRatio: '4/3',
              objectFit: 'cover',
              display: 'block',
              borderRadius: borderRadius.lg,
            }}
          />
        </motion.div>

        <motion.div
          style={{ display: 'flex', flexDirection: 'column', gap: spacing[8] }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2
            style={{
              fontFamily: typography.fontFamily.headline,
              fontSize: typography.fontSize['heading-xl'],
              fontWeight: typography.fontWeight.heavy,
              lineHeight: typography.lineHeight.tight,
              color: colors.white,
              margin: 0,
            }}
          >
            Flawless floors, step by step:
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: spacing[4],
                }}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : undefined}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span
                  style={{
                    fontFamily: typography.fontFamily.headline,
                    fontSize: typography.fontSize['display-md'],
                    fontWeight: typography.fontWeight.heavy,
                    color: colors.orange[200],
                    lineHeight: 1,
                    minWidth: '60px',
                    opacity: 0.4,
                  }}
                >
                  {step.number}
                </span>
                <div>
                  <h4
                    style={{
                      fontFamily: typography.fontFamily.headline,
                      fontSize: typography.fontSize['heading-sm'],
                      fontWeight: typography.fontWeight.bold,
                      color: colors.white,
                      margin: 0,
                      marginBottom: spacing[2],
                    }}
                  >
                    {step.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: typography.fontFamily.body,
                      fontSize: typography.fontSize['body-sm'],
                      color: colors.charcoal[300],
                      lineHeight: typography.lineHeight.relaxed,
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <Button href="/contact" variant="primary" size="lg">
              {"Let's chat"}
            </Button>
          </div>
        </motion.div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: repeat(2"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
}

export default function CleaningContent() {
  return (
    <RedesignLayout>
      {/* Hero */}
      <PageHero
        title="Revived floors, flawless facilities."
        subtitle="Give your commercial floors a new lease on life, with no problems swept under the carpet."
        backgroundImage="/images/Premrest_Cleaning_Hero_Blob.webp"
      />

      {/* Manager Roles */}
      <ManagerRolesSection />

      {/* Problem Section: Nothing general about floor cleaning */}
      <TwoColumnSection
        image="/images/Premrest_Spotters_Blob.webp"
        imageAlt="Premrest spotting and cleaning products"
        imagePosition="left"
      >
        <Heading as="h2" size="heading-xl">
          {"There is nothing 'general' about floor cleaning."}
        </Heading>
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-md'],
            color: colors.charcoal[500],
            lineHeight: typography.lineHeight.relaxed,
            margin: 0,
          }}
        >
          Floors aren&apos;t just something you walk on &mdash; they reflect the care and pride you take
          in creating a healthy environment. Yet, all too often, they&apos;re left in the hands of
          &lsquo;generalists&rsquo; that simply lack the know-how your floors need and deserve.
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
          We&apos;re the specialist floor care experts in your back pocket; your swifty sidekick that
          understands the nuances of floor care across all floor types, root causes of dirt and stains,
          and the standards expected by manufacturers to maintain them.
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
          Our fuss-free program takes away the stress and the guesswork. We roll out the red carpet
          for your floors, giving them the TLC they need to stay cleaner, for longer.
        </p>
        <div>
          <Button href="/contact" variant="primary">
            {"Let's chat"}
          </Button>
        </div>
      </TwoColumnSection>

      {/* Solution + Pitfalls Section */}
      <section style={{ background: colors.warmGray, padding: `${spacing[24]} 0`, overflow: 'hidden' }}>
        <div
          style={{
            maxWidth: layout.contentWidth,
            margin: '0 auto',
            padding: `0 ${layout.gutter}`,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: spacing[16],
            alignItems: 'start',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            <Heading as="h2" size="heading-xl">
              Not all floors need steam or powder.
            </Heading>
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-md'],
                color: colors.charcoal[500],
                lineHeight: typography.lineHeight.relaxed,
                margin: 0,
              }}
            >
              As Australia&apos;s go-to for commercial floor care, we work with all floor types under
              different challenges. That&apos;s why our cleaning programs take every variable into account:
              traffic patterns and zones, specific carpet types, colours, and material finishes,
              environmental conditions, even your sustainability goals.
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
              From steam cleaning to dry powder and everything in between, we&apos;ve got the entire
              toolkit in our arsenal. But more often than not, low moisture encapsulation is the
              perfect fit &mdash; not too wet, not too harsh, but just right. It removes up to 96% of
              dirt and debris, stops rapid resoiling in its tracks, and leaves behind a shield that
              extends its lifespan.
            </p>
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-md'],
                fontWeight: typography.fontWeight.semibold,
                color: colors.charcoal.DEFAULT,
                lineHeight: typography.lineHeight.relaxed,
                margin: 0,
              }}
            >
              The dirt is on us.
            </p>
            <div>
              <Button href="/contact" variant="primary">
                {"Let's chat"}
              </Button>
            </div>
          </div>

          <PitfallsCard />
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            section > div[style*="grid-template-columns: repeat(2"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}} />
      </section>

      {/* Services Feature Grid */}
      <ContentSection background={colors.white} padding="lg">
        <Heading as="h2" size="heading-xl" align="center" style={{ marginBottom: spacing[4] }}>
          Our cleaning methods
        </Heading>
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-lg'],
            color: colors.charcoal[400],
            lineHeight: typography.lineHeight.relaxed,
            textAlign: 'center',
            maxWidth: '600px',
            margin: `0 auto ${spacing[12]}`,
          }}
        >
          We don&apos;t lock ourselves to one method &mdash; it&apos;s about choosing the right one
          for your floors.
        </p>
        <FeatureGrid items={serviceFeatures} columns={2} />
      </ContentSection>

      {/* Steps Section */}
      <StepsWithImageSection />

      {/* Testimonial */}
      <TestimonialSection
        quote="Having worked with Premrest for over 10 years, they are not just a contractor, they are a true partner for all flooring, upholstery and restoration requirements. The expertise that Colin and the Premrest team provide is second to none. Attention to detail, communication and overall delivery sets them apart."
        author="Guy Cartwright"
        role="Account Director - JLL"
        image="/images/GuyCartwright.webp"
      />

      {/* Client Logos */}
      <ClientLogos />

      {/* Sustainability Section */}
      <TwoColumnSection
        image="/images/Premrest_Sustainability_Calculator_Blob.webp"
        imageAlt="Sustainability calculator"
        imagePosition="right"
        background={colors.charcoal.dark}
      >
        <Heading as="h2" size="heading-xl" color={colors.white}>
          {"Beautiful flooring doesn't need to cost the earth."}
        </Heading>
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-md'],
            color: colors.charcoal[300],
            lineHeight: typography.lineHeight.relaxed,
            margin: 0,
          }}
        >
          We&apos;re committed to reducing our environmental footprint while helping facilities meet
          their ambitious sustainability goals. We lead the way in low moisture encapsulation, a
          sustainable floor cleaning method that uses significantly less water, energy, chemicals and
          waste.
        </p>
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-md'],
            color: colors.charcoal[300],
            lineHeight: typography.lineHeight.relaxed,
            margin: 0,
          }}
        >
          We partner with facilities, buildings and national portfolios to help them meet ESG goals
          at scale. Good for your floors, better for the planet.
        </p>
        <div style={{ display: 'flex', gap: spacing[4], flexWrap: 'wrap' }}>
          <Button href="/sustainability" variant="primary">
            Learn more
          </Button>
          <Button href="/impact-calculator" variant="outline">
            <span style={{ color: colors.white, borderColor: colors.white }}>Calculate your impact</span>
          </Button>
        </div>
      </TwoColumnSection>

      {/* CTA Banner */}
      <CTABanner
        heading="Ready to give your floors a new lease on life?"
        description="Get in touch and we'll tailor a floor care program around your facility's needs."
        buttonText="Let's chat"
        buttonHref="/contact"
      />
    </RedesignLayout>
  );
}

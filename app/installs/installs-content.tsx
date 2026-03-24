'use client';

import { useRef } from 'react';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection, TwoColumnSection, StepsSection, CTABanner, ClientLogos } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';
import { motion, useInView } from 'framer-motion';

const managerRoles = [
  { title: 'Builder or Developer', icon: '/images/drawing.png', href: '/builders-developers' },
  { title: 'Facility Manager', icon: '/images/building.png', href: '/facility-managers' },
  { title: 'Building Manager', icon: '/images/apartment.png', href: '/building-managers' },
  { title: 'Procurement Manager', icon: '/images/flowchart.png', href: '/procurement-managers' },
  { title: 'Sustainability Manager', icon: '/images/globe.png', href: '/sustainability-managers' },
];

const pitfalls = [
  'Floors fail to withstand heavy use and wear out prematurely',
  'Buckling or shifting floors due to poor installation',
  'Misaligned seams and edges that detract from a polished finish',
  'Improper methods voiding manufacturer warranties',
  'Poor preparation resulting in floors that don\'t last',
  'No proactive maintenance plan for long-term durability',
  'Skyrocketing costs from frequent repairs or replacements',
];

const steps = [
  { number: '01', title: 'Get a quote', description: 'Tell us about your space and flooring needs. We\'ll provide a detailed, transparent quote tailored to your project.' },
  { number: '02', title: 'Install your ideal flooring vision', description: 'Our expert team handles every detail, from substrate preparation to the final finish, delivering precision craftsmanship on time and on budget.' },
  { number: '03', title: 'Enjoy a beautiful and functional space', description: 'Walk into a space that looks incredible and is built to last, backed by our commitment to quality and sustainability.' },
];

function ManagerRolesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <ContentSection background={colors.offWhite} padding="lg">
      <Heading as="h2" size="heading-lg" align="center" style={{ marginBottom: spacing[12] }}>
        Help! I&apos;m a...
      </Heading>
      <div
        ref={ref}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: spacing[6],
        }}
      >
        {managerRoles.map((role, i) => (
          <motion.a
            key={role.title}
            href={role.href}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: spacing[8],
              background: colors.white,
              borderRadius: borderRadius.lg,
              boxShadow: shadows.sm,
              textDecoration: 'none',
              cursor: 'pointer',
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
              style={{
                width: '56px',
                height: '56px',
                objectFit: 'contain',
                marginBottom: spacing[4],
              }}
            />
            <h4
              style={{
                fontFamily: typography.fontFamily.headline,
                fontSize: typography.fontSize['heading-sm'],
                fontWeight: typography.fontWeight.bold,
                color: colors.charcoal.DEFAULT,
                margin: 0,
                marginBottom: spacing[4],
              }}
            >
              {role.title}
            </h4>
            <span
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-sm'],
                fontWeight: typography.fontWeight.semibold,
                color: colors.orange.DEFAULT,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
            >
              Learn more →
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

function SustainabilitySection() {
  return (
    <TwoColumnSection
      image="/images/Premrest_Installs_Sustainability_Blob.webp"
      imageAlt="Sustainable flooring"
      imagePosition="left"
      background={colors.white}
    >
      <Heading as="h2" size="heading-lg">
        Sustainable flooring should be a standard, not a luxury.
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
        A floor isn&apos;t just a detail, it&apos;s the foundation of your entire space. When it&apos;s not done right, it leaves a lasting impression — but for all the wrong reasons.
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
        Buckling floors, uneven substrates, and premature wear only scratch the surface. We take a pragmatic approach that combines precision, workmanship and sustainability to everything we lay down — creating spaces that look incredible and stack up to the demands of commercial environments.
      </p>
      <p
        style={{
          fontFamily: typography.fontFamily.body,
          fontSize: typography.fontSize['body-md'],
          color: colors.charcoal[500],
          lineHeight: typography.lineHeight.relaxed,
          margin: 0,
          fontWeight: typography.fontWeight.semibold,
        }}
      >
        Let&apos;s build your floor from the ground up.
      </p>
      <div>
        <Button href="/contact">Let&apos;s chat</Button>
      </div>
    </TwoColumnSection>
  );
}

function ArtSection() {
  return (
    <TwoColumnSection
      image="/images/Premrest_Industries_Retail.webp"
      imageAlt="Commercial flooring art"
      imagePosition="right"
      background={colors.offWhite}
    >
      <Heading as="h2" size="heading-lg">
        Create magnificent art, right underneath your feet.
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
        We craft the canvas for your every move. That&apos;s why we work with builders, developers, facility managers and businesses to create spaces that are innovative, functional, and environmentally responsible.
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
        Your floor is the centrepiece that defines your entire space. Every space we put our hands to is an opportunity to design an environment people admire. Craftsmanship isn&apos;t just what we do, it&apos;s who we are.
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
        Partner with us, and you get much more than a flooring contractor. We buy into your vision, now and into the future.
      </p>
      <div>
        <Button href="/contact">Let&apos;s chat</Button>
      </div>
    </TwoColumnSection>
  );
}

function PitfallsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <ContentSection background={colors.white} padding="lg">
      <div
        ref={ref}
        style={{
          maxWidth: layout.narrowWidth,
          margin: '0 auto',
        }}
      >
        <Heading as="h2" size="heading-lg" align="center" style={{ marginBottom: spacing[10] }}>
          Don&apos;t fall for these common pitfalls
        </Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
          {pitfalls.map((pitfall, i) => (
            <motion.div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing[4],
                padding: `${spacing[4]} ${spacing[6]}`,
                background: colors.offWhite,
                borderRadius: borderRadius.lg,
                borderLeft: `4px solid ${colors.orange.DEFAULT}`,
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : undefined}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                }}
              >
                <img src="/images/cross.png" alt="" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
              </span>
              <p
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-md'],
                  fontWeight: typography.fontWeight.medium,
                  color: colors.charcoal.DEFAULT,
                  lineHeight: typography.lineHeight.normal,
                  margin: 0,
                }}
              >
                {pitfall}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </ContentSection>
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
          style={{ position: 'relative', borderRadius: borderRadius.lg, overflow: 'hidden' }}
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img
            src="/images/Premrest_Installs_Steps_Blob.webp"
            alt="Flooring installation steps"
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
          <Heading as="h2" size="heading-lg" color={colors.white}>
            Laying the foundation, step by step:
          </Heading>

          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                style={{
                  display: 'flex',
                  gap: spacing[5],
                  alignItems: 'flex-start',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span
                  style={{
                    fontFamily: typography.fontFamily.headline,
                    fontSize: typography.fontSize['heading-xl'],
                    fontWeight: typography.fontWeight.heavy,
                    color: colors.orange.DEFAULT,
                    lineHeight: 1,
                    flexShrink: 0,
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
            <Button href="/contact" variant="primary" size="lg">Let&apos;s chat</Button>
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

export default function InstallsContent() {
  return (
    <RedesignLayout>
      {/* 1. Hero */}
      <PageHero
        title="Crafted floor installs you can stand on"
        subtitle="Level up your commercial space with floors that stun with every step."
        backgroundImage="/images/Premrest_Hero_Installs_Office.svg"
      />

      {/* 2. Manager Roles */}
      <ManagerRolesSection />

      {/* 3. Sustainability Section */}
      <SustainabilitySection />

      {/* 4. Art Section */}
      <ArtSection />

      {/* 5. Pitfalls */}
      <PitfallsSection />

      {/* 6. Steps */}
      <StepsWithImageSection />

      {/* 7. Client Logos */}
      <ClientLogos />

      {/* 8. CTA */}
      <CTABanner
        heading="Beautiful flooring doesn't need to cost the earth."
        description="Sustainability isn't just a goal, but a responsibility we embrace and steward well. Partner with us to create spaces where innovation, functionality and environmental responsibility co-exist."
        buttonText="Let's chat"
        buttonHref="/contact"
      />
    </RedesignLayout>
  );
}

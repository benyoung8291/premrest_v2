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
} from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';
import { motion, useInView } from 'framer-motion';

const managerRoles = [
  { title: 'Facility Manager', href: '/facility-managers', icon: '/images/building.png' },
  { title: 'Building Manager', href: '/building-managers', icon: '/images/apartment.png' },
  { title: 'Procurement Manager', href: '/procurement-managers', icon: '/images/flowchart.png' },
  { title: 'Sustainability Manager', href: '/sustainability-managers', icon: '/images/globe.png' },
  { title: 'General Cleaning Manager', href: '/general-cleaning-managers', icon: '/images/data-cleaning.png' },
];

const testimonials = [
  {
    quote:
      'Having worked with Premrest for over 10 years, they are not just a contractor, they are true partner for all flooring, upholstery and restoration requirements your clients have. The expertise that Colin and Premrest team provide is second to none when providing guidance to JLL teams and clients. Attention to detail, communication and overall delivery sets them apart.',
    author: 'Guy Cartwright',
    role: 'Account Director - JLL',
  },
  {
    quote:
      'I have worked with Premrest for over 10 years, throughout this time they have always been an integrated component of our service delivery to our clients and more importantly were part of the JLL team. A true partnership built upon credible reliable service and a relationship built on trust. When our clients looked for productivity or cost efficiency Premrest would work with us to delivery cost effective service without cutting back on quality.',
    author: 'Cheryl Stevens',
    role: 'Head of Corporate Business, Executive Director at JLL',
  },
  {
    quote:
      'I highly recommend Premrest for all your flooring needs. With their expertise and commitment to quality, they consistently deliver outstanding results. One of the key strengths of Premrest is their ability to quickly assess the situation and provide prompt and effective solutions. They understand the urgency and work diligently to minimise the disruption caused to your property.',
    author: 'Maria Nicholas',
    role: 'WoAG - National Facilities Manager at JLL',
  },
];

const steps = [
  {
    number: '01',
    title: 'Spill your head scratching problems',
    description:
      'Tell us about the unusual challenges keeping you up at night. No problem is too quirky or unconventional for our team.',
  },
  {
    number: '02',
    title: "We'll devise the perfect fix",
    description:
      'Led by Colin Saddington, our team digs in with curiosity and grit, looking at every angle to figure out what works best.',
  },
  {
    number: '03',
    title: "Relax, that's a Colin special",
    description:
      'Sit back while we roll up our sleeves and tackle your one-of-a-kind challenge with expertise and care.',
  },
];

function ManagerRolesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{ background: colors.offWhite, padding: `${spacing[16]} 0`, overflow: 'hidden' }}>
      <div style={{ maxWidth: layout.contentWidth, margin: '0 auto', padding: `0 ${layout.gutter}` }}>
        <Heading as="h3" size="heading-md" align="center" style={{ marginBottom: spacing[10] }}>
          Help! I&apos;m a...
        </Heading>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(5, 1fr)`,
            gap: spacing[6],
            alignItems: 'stretch',
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
                gap: spacing[4],
                padding: spacing[6],
                background: colors.white,
                borderRadius: borderRadius.lg,
                boxShadow: shadows.sm,
                textDecoration: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                border: `2px solid transparent`,
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{
                y: -4,
                boxShadow: shadows.md,
                borderColor: colors.orange.DEFAULT,
              }}
            >
              <img
                src={role.icon}
                alt=""
                style={{ width: '48px', height: '48px', objectFit: 'contain' }}
              />
              <h4
                style={{
                  fontFamily: typography.fontFamily.headline,
                  fontSize: typography.fontSize['body-md'],
                  fontWeight: typography.fontWeight.bold,
                  color: colors.charcoal.DEFAULT,
                  margin: 0,
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
                Learn more &rarr;
              </span>
            </motion.a>
          ))}
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media (max-width: 768px) {
          section > div > div[style*="repeat(5"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          section > div > div[style*="repeat(5"] {
            grid-template-columns: 1fr !important;
          }
        }
      `,
        }}
      />
    </section>
  );
}

function TestimonialsCarousel() {
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
      <div style={{ maxWidth: layout.contentWidth, margin: '0 auto', padding: `0 ${layout.gutter}` }}>
        <Heading
          as="h2"
          size="heading-lg"
          color={colors.white}
          align="center"
          style={{ marginBottom: spacing[16] }}
        >
          Take the word of global consultancy firms, banks, tech, and other renowned clients
        </Heading>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(3, 1fr)`,
            gap: spacing[8],
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              style={{
                background: colors.charcoal.DEFAULT,
                borderRadius: borderRadius.lg,
                padding: spacing[8],
                display: 'flex',
                flexDirection: 'column',
                gap: spacing[4],
                position: 'relative',
                overflow: 'hidden',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
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
              <blockquote
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-sm'],
                  fontStyle: 'italic',
                  color: colors.charcoal[200],
                  lineHeight: typography.lineHeight.relaxed,
                  margin: 0,
                  flex: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p
                  style={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize['body-md'],
                    fontWeight: typography.fontWeight.semibold,
                    color: colors.orange.DEFAULT,
                    margin: 0,
                  }}
                >
                  {t.author}
                </p>
                <p
                  style={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize['body-sm'],
                    color: colors.charcoal[300],
                    margin: 0,
                    marginTop: spacing[1],
                  }}
                >
                  {t.role}
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
          section > div > div[style*="repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `,
        }}
      />
    </section>
  );
}

export default function SpecialProjectsContent() {
  return (
    <RedesignLayout>
      {/* 1. Hero */}
      <PageHero
        title="Your quirky problems are our exciting projects."
        backgroundImage="/images/Premrest_SpecialProjects_Hero_Blob.webp"
      />

      {/* 2. Manager Roles */}
      <ManagerRolesSection />

      {/* 3. Problem Section - Two Column */}
      <TwoColumnSection
        image="/images/Premrest_SpecialProjects_Problem_Blob.webp"
        imageAlt="Special projects by Premrest"
        imagePosition="left"
      >
        <Heading as="h2" size="heading-xl">
          Your quirky problems are our exciting projects.
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
          We revel in the unusual and thrive on the unexpected. Special projects is your go-to for
          those &ldquo;not-quite-flooring&rdquo; conundrums that keep facility managers up at night.
          Led by Colin Saddington, our team loves rolling up our sleeves and tackling the
          one-of-a-kind challenges that don&apos;t come with a clear solution.
        </p>
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-lg'],
            color: colors.charcoal[500],
            lineHeight: typography.lineHeight.relaxed,
            margin: 0,
          }}
        >
          When things get tricky, we dig in with curiosity and grit, looking at every angle to
          figure out what works best. We lean into the odd and unpredictable because that&apos;s
          where we shine. If it doesn&apos;t fit the mould, it&apos;s probably perfect for us.
        </p>
        <div>
          <Button href="/contact" variant="primary" size="lg">
            Let&apos;s chat
          </Button>
        </div>
      </TwoColumnSection>

      {/* 4. Steps Section */}
      <TwoColumnSection
        image="/images/Premrest_SpecialProjects_Steps_Blob.webp"
        imageAlt="Special projects process"
        imagePosition="left"
        background={colors.charcoal.dark}
      >
        <Heading as="h2" size="heading-xl" color={colors.white}>
          Unravelling the tricky, step by step:
        </Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: spacing[4],
              }}
            >
              <span
                style={{
                  fontFamily: typography.fontFamily.headline,
                  fontSize: typography.fontSize['heading-lg'],
                  fontWeight: typography.fontWeight.heavy,
                  color: colors.orange.DEFAULT,
                  lineHeight: 1,
                  minWidth: '48px',
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
                    fontSize: typography.fontSize['body-md'],
                    color: colors.charcoal[300],
                    lineHeight: typography.lineHeight.relaxed,
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Button href="/contact" variant="outline" size="lg">
            Let&apos;s chat
          </Button>
        </div>
      </TwoColumnSection>

      {/* 5. Testimonials */}
      <TestimonialsCarousel />

      {/* 6. Client Logos */}
      <ClientLogos />

      {/* 7. CTA */}
      <CTABanner
        heading="Let's make your toughest challenges our proudest wins."
        buttonText="Let's chat"
        buttonHref="/contact"
      />
    </RedesignLayout>
  );
}

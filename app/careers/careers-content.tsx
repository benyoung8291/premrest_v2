'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection, CTABanner } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';

const coreValues = [
  {
    title: 'Floor them',
    description: 'We go above and beyond to deliver results that exceed expectations. Every job is an opportunity to impress.',
  },
  {
    title: 'Be a sponge',
    description: 'Stay curious, keep learning, and absorb knowledge from every experience. Growth never stops here.',
  },
  {
    title: 'Work as one',
    description: 'Collaboration is at the heart of everything we do. We win together and support each other through every challenge.',
  },
  {
    title: 'Be bold & kind',
    description: 'Speak up, take initiative, and always treat people with respect. Courage and kindness go hand in hand.',
  },
  {
    title: 'Own it, no shortcuts',
    description: 'Take responsibility for your work. We believe in doing things right the first time, with integrity and pride.',
  },
];

export default function CareersContent() {
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: '-80px' });

  return (
    <RedesignLayout>
      <PageHero
        title="Creating happy work faces."
        backgroundImage="/images/Premrest_floor_traffic.webp"
      />

      {/* Core Values Section */}
      <ContentSection background={colors.offWhite}>
        <Heading as="h2" size="heading-xl" align="center">
          Our Core Values
        </Heading>
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-lg'],
            color: colors.charcoal[500],
            lineHeight: typography.lineHeight.relaxed,
            textAlign: 'center',
            maxWidth: '600px',
            margin: `${spacing[4]} auto ${spacing[12]}`,
          }}
        >
          These are the principles that guide everything we do at Premrest.
        </p>
        <div
          ref={valuesRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: spacing[6],
          }}
        >
          {coreValues.map((value, i) => (
            <motion.div
              key={value.title}
              style={{
                background: colors.white,
                borderRadius: borderRadius.lg,
                padding: spacing[8],
                boxShadow: shadows.sm,
                position: 'relative',
                overflow: 'hidden',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
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
              <span
                style={{
                  fontFamily: typography.fontFamily.headline,
                  fontSize: typography.fontSize['display-lg'],
                  fontWeight: typography.fontWeight.heavy,
                  color: colors.orange[100],
                  lineHeight: 1,
                  display: 'block',
                  marginBottom: spacing[3],
                }}
              >
                {String(i + 1).padStart(2, '0')}
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
                {value.title}
              </h3>
              <p
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-sm'],
                  color: colors.charcoal[500],
                  lineHeight: typography.lineHeight.relaxed,
                  margin: 0,
                }}
              >
                {value.description}
              </p>
            </motion.div>
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

      {/* Team Image + CTA */}
      <ContentSection background={colors.white}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: spacing[12],
            alignItems: 'center',
          }}
        >
          <div>
            <img
              src="/images/Premrest_About_Shake_Hands.svg"
              alt="Premrest team handshake"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: borderRadius.lg,
              }}
            />
          </div>
          <div>
            <Heading as="h2" size="heading-lg">
              Ready to join the team?
            </Heading>
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-lg'],
                color: colors.charcoal[500],
                lineHeight: typography.lineHeight.relaxed,
                margin: `${spacing[4]} 0 ${spacing[8]}`,
              }}
            >
              We are always looking for passionate, driven people to join the Premrest family. If you share our values and want to be part of something special, check out our current openings.
            </p>
            <Button href="/careers" variant="primary" size="lg">
              View job listings
            </Button>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}} />
      </ContentSection>

      <CTABanner
        heading="Let's build something great together."
        description="Explore open roles and find your place at Premrest."
        buttonText="View openings"
        buttonHref="/careers"
      />
    </RedesignLayout>
  );
}

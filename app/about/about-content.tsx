'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection, TwoColumnSection, CTABanner } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';

const teamMembers = [
  { name: '', role: '', image: '' },
  { name: '', role: '', image: '' },
  { name: '', role: '', image: '' },
  { name: '', role: '', image: '' },
];

function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{ background: colors.offWhite, padding: `${spacing[24]} 0`, overflow: 'hidden' }}>
      <div style={{ maxWidth: layout.contentWidth, margin: '0 auto', padding: `0 ${layout.gutter}` }}>
        <Heading as="h2" size="heading-xl" align="center" style={{ marginBottom: spacing[16] }}>
          Meet the team
        </Heading>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: spacing[8],
          }}
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              style={{
                background: colors.white,
                borderRadius: borderRadius.lg,
                overflow: 'hidden',
                boxShadow: shadows.sm,
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  background: colors.warmGray,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={colors.charcoal[300]} strokeWidth="1.5">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M20 21a8 8 0 1 0-16 0" />
                  </svg>
                )}
              </div>
              <div style={{ padding: spacing[5] }}>
                <p
                  style={{
                    fontFamily: typography.fontFamily.headline,
                    fontSize: typography.fontSize['heading-sm'],
                    fontWeight: typography.fontWeight.bold,
                    color: member.name ? colors.charcoal.DEFAULT : colors.charcoal[300],
                    margin: 0,
                    marginBottom: spacing[1],
                  }}
                >
                  {member.name || 'Team member'}
                </p>
                <p
                  style={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize['body-sm'],
                    color: colors.charcoal[400],
                    margin: 0,
                  }}
                >
                  {member.role || 'Role'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          section > div > div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          section > div > div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
}

export default function AboutContent() {
  return (
    <RedesignLayout>
      {/* Hero */}
      <PageHero
        title="About"
        subtitle="Talk to the experts who are floors ahead."
        compact
      />

      {/* About story — image left, text right */}
      <TwoColumnSection
        image="/images/Premrest_About_Problem_Blob.webp"
        imageAlt="Premrest flooring experts at work"
        imagePosition="left"
        background={colors.white}
      >
        <Heading as="h2" size="heading-lg">
          Talk to the flooring experts who are floors ahead.
        </Heading>
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-md'],
            color: colors.charcoal[600],
            lineHeight: typography.lineHeight.relaxed,
            margin: 0,
          }}
        >
          We are the friends of facilities managers, corporate clients, and general cleaning companies across Australia.
        </p>
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-md'],
            color: colors.charcoal[600],
            lineHeight: typography.lineHeight.relaxed,
            margin: 0,
          }}
        >
          We believe in a little bit of &ldquo;wow!&rdquo; as you walk in, because your floor is the biggest canvas your office will ever have.
        </p>
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-md'],
            color: colors.charcoal[600],
            lineHeight: typography.lineHeight.relaxed,
            margin: 0,
          }}
        >
          We install and clean commercial floors, across all floor types and finishes, from small spaces to multi-level projects, with quality that floors even the harshest critics.
        </p>
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-md'],
            color: colors.charcoal[600],
            lineHeight: typography.lineHeight.relaxed,
            margin: 0,
          }}
        >
          Now that&rsquo;s an approach that saves you time, provides value for money, and ensures all your future flooring questions will be answered. Our floors are so good, you&rsquo;ll want to share the before and after shots.
        </p>
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-md'],
            color: colors.charcoal[600],
            lineHeight: typography.lineHeight.relaxed,
            margin: 0,
          }}
        >
          Secure the masterpiece underneath your feet, and don&rsquo;t deal with incompetent operators or settle for counterfeits. Finish the job right the first time, every time, and streamline your flooring contracts.
        </p>
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-md'],
            color: colors.charcoal[600],
            lineHeight: typography.lineHeight.relaxed,
            margin: 0,
          }}
        >
          Our work motto is to &ldquo;make it happen, and make it fun&rdquo;. We take our work seriously, but that doesn&rsquo;t mean we take ourselves too seriously. This means you can ask us any question, no matter how basic, and we&rsquo;ll find an answer.
        </p>
        <div style={{ marginTop: spacing[4] }}>
          <Button href="/contact" variant="primary" size="lg">
            Let&rsquo;s chat
          </Button>
        </div>
      </TwoColumnSection>

      {/* Meet the team */}
      <TeamSection />

      {/* CTA Banner */}
      <CTABanner
        heading="Ready to talk flooring?"
        description="Get in touch with our team of experts and discover what we can do for your space."
        buttonText="Let's chat"
        buttonHref="/contact"
      />
    </RedesignLayout>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection, CTABanner } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';

const industries = [
  {
    name: 'Commercial offices',
    icon: '/images/commercial-offices.png',
    slug: 'commercial-offices',
  },
  {
    name: 'Professional services',
    icon: '/images/professional-services.png',
    slug: 'professional-services',
  },
  {
    name: 'Banking & insurance',
    icon: '/images/banking.png',
    slug: 'banking-insurance',
  },
  {
    name: 'Education',
    icon: '/images/education.png',
    slug: 'education',
  },
  {
    name: 'Government',
    icon: '/images/government.png',
    slug: 'government',
  },
  {
    name: 'Retail',
    icon: '/images/retail.png',
    slug: 'retail',
  },
  {
    name: 'Health',
    icon: '/images/health.png',
    slug: 'health',
  },
  {
    name: 'Fitness',
    icon: '/images/fitness.png',
    slug: 'fitness',
  },
  {
    name: '24/7 call centres',
    icon: '/images/call-centre.png',
    slug: 'call-centres',
  },
  {
    name: 'Transport',
    icon: '/images/airplane-1.png',
    slug: 'transport',
  },
];

export default function IndustriesContent() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-80px' });

  return (
    <RedesignLayout>
      <PageHero
        title="Industries"
        subtitle="Specialist flooring across every sector."
      />

      <ContentSection background={colors.offWhite}>
        <Heading as="h2" size="heading-xl" align="center">
          Sectors we serve
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
          From offices to airports, we deliver specialist flooring solutions tailored to every industry.
        </p>
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: spacing[6],
          }}
        >
          {industries.map((industry, i) => (
            <motion.a
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              style={{
                background: colors.white,
                borderRadius: borderRadius.lg,
                padding: spacing[8],
                boxShadow: shadows.sm,
                textAlign: 'center',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: spacing[4],
                cursor: 'pointer',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={gridInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4, boxShadow: shadows.lg }}
            >
              <img
                src={industry.icon}
                alt={industry.name}
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'contain',
                }}
              />
              <h3
                style={{
                  fontFamily: typography.fontFamily.headline,
                  fontSize: typography.fontSize['heading-sm'],
                  fontWeight: typography.fontWeight.bold,
                  color: colors.charcoal.DEFAULT,
                  margin: 0,
                }}
              >
                {industry.name}
              </h3>
            </motion.a>
          ))}
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            div[style*="grid-template-columns: repeat(3"] {
              grid-template-columns: 1fr !important;
            }
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            div[style*="grid-template-columns: repeat(3"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `}} />
      </ContentSection>

      <CTABanner
        heading="Not sure which solution fits your sector?"
        description="Our specialists can guide you to the right flooring for your industry."
        buttonText="Talk to an expert"
        buttonHref="/contact"
      />
    </RedesignLayout>
  );
}

'use client';

import { useState } from 'react';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection, CTABanner } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import { colors, typography, spacing, borderRadius, shadows } from '@/app/lib/tokens';

const guides = [
  {
    title: 'Spot spray - how to guide',
    content: `Step 1: Test spray on a small discreet area to ensure no adverse effects.

Step 2: Spray the stain from a distance of 15-20cm, covering the entire stain.

Step 3: Allow to dwell for 3-5 minutes.

Step 4: Blot with a clean white cloth, working from the outside in.

Carpet tiles: Gently agitate the stain with a brush or cloth.

Upholstery: Blot only, do not rub.`,
  },
  {
    title: 'Spot wipe - how to guide',
    content: `Step 1: Test wipe on a small discreet area to ensure no adverse effects.

Step 2: Wipe up excess liquid/material from carpet or upholstery.

Step 3: Using a Spot Wipe, gently start blotting the stain working from outside to inside.

Carpet tiles: Gently rub stain to dissolve and remove.

Upholstery: Blot, do not rub.`,
  },
  {
    title: 'Stubborn stains',
    content: `The stain could be permanent damage and repair or replacement could be necessary. Give us a call on 1300 207 915 for some assistance.`,
  },
];

function Accordion({ title, content }: { title: string; content: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        background: colors.white,
        borderRadius: borderRadius.md,
        boxShadow: shadows.sm,
        marginBottom: spacing[3],
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: `${spacing[5]} ${spacing[6]}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          fontFamily: typography.fontFamily.headline,
          fontWeight: typography.fontWeight.bold,
          fontSize: typography.fontSize['body-lg'],
          color: colors.charcoal.DEFAULT,
          textAlign: 'left',
        }}
      >
        {title}
        <span
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.3s',
            fontSize: '1.25rem',
          }}
        >
          &#9660;
        </span>
      </button>
      {isOpen && (
        <div
          style={{
            padding: `0 ${spacing[6]} ${spacing[5]}`,
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-md'],
            lineHeight: typography.lineHeight.relaxed,
            color: colors.charcoal.light,
            whiteSpace: 'pre-line',
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}

export default function SpottingHelpContent() {
  return (
    <RedesignLayout>
      <PageHero
        title="Spotter Help!"
        subtitle="Quick guides for using your Premrest spot cleaning products."
        backgroundColor={colors.orange.DEFAULT}
      />

      <ContentSection>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {guides.map((guide) => (
            <Accordion key={guide.title} title={guide.title} content={guide.content} />
          ))}
        </div>
      </ContentSection>

      <ContentSection background={colors.offWhite}>
        <div style={{ textAlign: 'center' }}>
          <Heading as="h2" size="heading-xl" align="center">
            Still stuck?
          </Heading>
          <p
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-lg'],
              color: colors.charcoal.light,
              marginTop: spacing[4],
              maxWidth: '600px',
              margin: `${spacing[4]} auto 0`,
            }}
          >
            Our team is here to help with any stain or flooring challenge. Give us a call and we&apos;ll guide you
            through it.
          </p>
          <div style={{ marginTop: spacing[6] }}>
            <a
              href="tel:1300207915"
              style={{
                fontFamily: typography.fontFamily.headline,
                fontWeight: typography.fontWeight.bold,
                fontSize: typography.fontSize['heading-md'],
                color: colors.orange.DEFAULT,
                textDecoration: 'none',
              }}
            >
              1300 207 915
            </a>
          </div>
        </div>
      </ContentSection>
    </RedesignLayout>
  );
}

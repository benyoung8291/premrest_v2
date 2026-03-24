'use client';

import { useState } from 'react';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection, TwoColumnSection, CTABanner } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';

const sustainabilityItems = [
  {
    title: 'Our net zero commitment',
    description:
      'Our business operations are third party measured and certified as carbon neutral. We have partnered with Trace to measure and offset our carbon footprint. While this may be a small step, it is our first and one of many as we make the changes necessary to reduce and where possible eliminate our carbon footprint.',
  },
  {
    title: '100% waste water eradication',
    description: 'Our carpet cleaning method eliminates all contaminated waste water.',
  },
  {
    title: '67% reduction in energy usage',
    description:
      'When compared to hot water extraction (aka steam cleaning) our method uses 67% less electricity. This is due to our machines being more efficient and the elimination of hot water.',
  },
  {
    title: '76% reduction in water usage',
    description:
      'We use low moisture cleaning methods that significantly reduce water usage while still ensuring carpets are kept beautiful.',
  },
];

const consultingItems = [
  {
    title: 'Special projects',
    description:
      'Your quirky problems are our exciting projects. We dive into the unknown with a zest for creative solutions, tackling the tasks that don\'t quite fit the mould of regular trades.',
  },
  {
    title: 'Slip test rectifications',
    description:
      'Safety with a twinkle -- that\'s our mantra. We swoop in to identify and fix slip hazards, ensuring your floors are as safe as they are snazzy.',
  },
  {
    title: 'Material selections',
    description:
      'Colin and team are here to whisk you through a world of material choices, ensuring your finishes selection are beautiful and fit-for-purpose.',
  },
  {
    title: '+ more',
    description:
      'Heritage cleaning, mould cleaning, graffiti removal, specialist stone repairs, anti-slip treatments.',
  },
];

const portfolioItems = [
  {
    title: 'Capability',
    description:
      'We currently service clients with locations across Australia. Including regional and remote locations. We\'re talking locations as remote as Alice Springs NT, Kalgoorlie WA, and Mount Isa QLD, to name a few. All this to say that no matter what properties are in your portfolio, we are able to service them.',
  },
  {
    title: 'Property types',
    description:
      'We service everything from 80,000m2 office buildings through to 100m2 retail locations. We have the capability and capacity to take on any portfolio across Australia.',
  },
];

function AccordionItem({ title, description }: { title: string; description: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: `1px solid ${colors.charcoal[200]}`,
        padding: `${spacing[3]} 0`,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          padding: `${spacing[2]} 0`,
          fontFamily: typography.fontFamily.body,
          fontSize: typography.fontSize['body-md'],
          fontWeight: typography.fontWeight.semibold,
          color: colors.charcoal.DEFAULT,
          textAlign: 'left',
        }}
      >
        {title}
        <span style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', fontSize: '0.75rem' }}>
          &#9660;
        </span>
      </button>
      {open && (
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-md'],
            lineHeight: typography.lineHeight.relaxed,
            color: colors.charcoal.light,
            marginTop: spacing[2],
            paddingBottom: spacing[2],
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function GibbonContent() {
  return (
    <RedesignLayout>
      <PageHero
        title="Maintain your carpet investment"
        subtitle="Gibbon Architectural have partnered with Premrest, a national service provider, specialising in floor cleaning, to deliver a maintenance plan that ensures the longevity, care and warranty of your Modulyss, SynSisal & Tretford carpets."
        backgroundColor={colors.charcoal.dark}
        compact
      />

      {/* Hero Detail */}
      <ContentSection>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[12], alignItems: 'center' }}>
          <div>
            <img
              src="/images/GibbonxPremrest.png"
              alt="Gibbon x Premrest"
              style={{ maxWidth: '352px', width: '100%', marginBottom: spacing[6] }}
            />
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-lg'],
                lineHeight: typography.lineHeight.relaxed,
                color: colors.charcoal.light,
              }}
            >
              Premrest specialises in Encapsulation Cleaning Technology, ideal for Modulyss, SynSisal &amp; Tretford carpets.
              Using an eco-friendly cleaning agent, this system encapsulates and crystallises soils, spills, oils and bacteria
              in the carpet fibres, allowing for easy removal with routine vacuuming.
            </p>
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-md'],
                lineHeight: typography.lineHeight.relaxed,
                color: colors.charcoal.light,
                marginTop: spacing[4],
              }}
            >
              Premrest Encapsulation features AFT (Active Film Technology) to help block oily binders that cause rapid
              resoiling, protecting your carpet. This process is both effective and sustainable, using up to 76% less water
              and leaving carpets dry within minutes, ready for immediate use.
            </p>
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-md'],
                lineHeight: typography.lineHeight.relaxed,
                color: colors.charcoal.light,
                marginTop: spacing[4],
              }}
            >
              To book in an encapsulation carpet clean, please fill out our contact form.
            </p>
            <div style={{ marginTop: spacing[6] }}>
              <Button href="/contact" variant="primary">
                Get in touch
              </Button>
            </div>
          </div>
          <div style={{ borderRadius: borderRadius.lg, overflow: 'hidden' }}>
            <img
              src="/images/Untitleddesign.webp"
              alt="People inside a common workspace"
              style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }}
            />
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

      {/* Streets Ahead */}
      <ContentSection background={colors.offWhite}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[12], alignItems: 'center' }}>
          <div style={{ borderRadius: borderRadius.lg, overflow: 'hidden', position: 'relative' }}>
            <img
              src="/images/Premrest_ShawContract_Blob.webp"
              alt="Premrest cleaning"
              style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div>
            <Heading as="h2" size="heading-xl">
              Streets ahead in cleaning office floors.
            </Heading>
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-lg'],
                lineHeight: typography.lineHeight.relaxed,
                color: colors.charcoal.light,
                marginTop: spacing[4],
              }}
            >
              Don&apos;t put up with carpets that aren&apos;t clean. Deal direct with the company general cleaners and
              manufacturers turn to when issues arise with commercial floor cleaning. When it comes to cleaning floors, we
              work in the art of the possible.
            </p>
            <h4
              style={{
                fontFamily: typography.fontFamily.headline,
                fontWeight: typography.fontWeight.bold,
                fontSize: typography.fontSize['heading-sm'],
                color: colors.charcoal.DEFAULT,
                marginTop: spacing[6],
                marginBottom: spacing[2],
              }}
            >
              Our core services
            </h4>
            <ul style={{ listStyle: 'disc', paddingLeft: spacing[6], margin: 0 }}>
              <li style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], color: colors.charcoal.light }}>Carpet Cleaning</li>
              <li style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], color: colors.charcoal.light }}>Hard Floor Cleaning</li>
              <li style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], color: colors.charcoal.light }}>Furniture Cleaning</li>
            </ul>
            <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], color: colors.charcoal.light, marginTop: spacing[4] }}>
              Additional services:
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: spacing[6], margin: 0 }}>
              <li style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], color: colors.charcoal.light }}>Floor covering supply &amp; install (VIC)</li>
              <li style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], color: colors.charcoal.light }}>Special Projects (Consulting, Slip test rectifications, Fit-for-purpose flooring selection)</li>
            </ul>
            <div style={{ marginTop: spacing[6] }}>
              <Button href="/contact" variant="primary">
                Get in touch
              </Button>
            </div>
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

      {/* Benefits Section */}
      <ContentSection>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: spacing[8] }}>
          {/* Sustainability */}
          <div>
            <div style={{ borderRadius: borderRadius.lg, overflow: 'hidden', marginBottom: spacing[4] }}>
              <img src="/images/image-asset.webp" alt="Sustainability" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            </div>
            <h4 style={{ fontFamily: typography.fontFamily.headline, fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize['heading-sm'], color: colors.charcoal.DEFAULT, marginBottom: spacing[3] }}>
              Sustainability + Net Zero
            </h4>
            {sustainabilityItems.map((item) => (
              <AccordionItem key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
          {/* Floor Consulting */}
          <div>
            <div style={{ borderRadius: borderRadius.lg, overflow: 'hidden', marginBottom: spacing[4] }}>
              <img src="/images/ColinInspecting-2.webp" alt="Floor Consulting" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            </div>
            <h4 style={{ fontFamily: typography.fontFamily.headline, fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize['heading-sm'], color: colors.charcoal.DEFAULT, marginBottom: spacing[3] }}>
              Floor Consulting
            </h4>
            {consultingItems.map((item) => (
              <AccordionItem key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
          {/* National Portfolios */}
          <div>
            <div style={{ borderRadius: borderRadius.lg, overflow: 'hidden', marginBottom: spacing[4] }}>
              <img src="/images/image-asset-1.webp" alt="National Portfolios" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            </div>
            <h4 style={{ fontFamily: typography.fontFamily.headline, fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize['heading-sm'], color: colors.charcoal.DEFAULT, marginBottom: spacing[3] }}>
              National Portfolios
            </h4>
            {portfolioItems.map((item) => (
              <AccordionItem key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            div[style*="grid-template-columns: repeat(3"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}} />
      </ContentSection>

      {/* Contact Section */}
      <ContentSection background={colors.charcoal.dark}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[12], alignItems: 'start' }}>
          <div>
            <Heading as="h2" size="heading-xl" color="#fff">
              We fix your pain.
            </Heading>
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-lg'],
                color: '#fff',
                marginTop: spacing[4],
              }}
            >
              No smell. No noise. No complaints.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing[4], marginTop: spacing[8] }}>
              <img
                src="/images/1694389967234.jpg"
                alt="Aaron Kelly"
                style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <h5 style={{ fontFamily: typography.fontFamily.headline, fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize['body-lg'], color: '#fff', margin: 0 }}>
                  Aaron Kelly
                </h5>
                <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-sm'], color: '#ccc', margin: `${spacing[1]} 0 0` }}>
                  General Manager - Cleaning<br />
                  Tel: 0447 888 824<br />
                  aaron.kelly@premrest.com.au
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              background: '#fff',
              borderRadius: borderRadius.lg,
              padding: spacing[8],
            }}
          >
            <form action="/thanks" method="get">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[4] }}>
                <div>
                  <label style={{ display: 'block', fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-sm'], fontWeight: typography.fontWeight.semibold, color: colors.charcoal.DEFAULT, marginBottom: spacing[1] }}>
                    First name
                  </label>
                  <input type="text" name="First-Name" required style={{ width: '100%', padding: spacing[3], border: `1px solid #ddd`, borderRadius: borderRadius.md, fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-sm'], fontWeight: typography.fontWeight.semibold, color: colors.charcoal.DEFAULT, marginBottom: spacing[1] }}>
                    Last name
                  </label>
                  <input type="text" name="Last-Name" required style={{ width: '100%', padding: spacing[3], border: `1px solid #ddd`, borderRadius: borderRadius.md, fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], boxSizing: 'border-box' }} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[4], marginTop: spacing[4] }}>
                <div>
                  <label style={{ display: 'block', fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-sm'], fontWeight: typography.fontWeight.semibold, color: colors.charcoal.DEFAULT, marginBottom: spacing[1] }}>
                    Email address
                  </label>
                  <input type="email" name="Email-Address" required style={{ width: '100%', padding: spacing[3], border: `1px solid #ddd`, borderRadius: borderRadius.md, fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-sm'], fontWeight: typography.fontWeight.semibold, color: colors.charcoal.DEFAULT, marginBottom: spacing[1] }}>
                    Phone number
                  </label>
                  <input type="tel" name="Phone-Number" style={{ width: '100%', padding: spacing[3], border: `1px solid #ddd`, borderRadius: borderRadius.md, fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], boxSizing: 'border-box' }} />
                </div>
              </div>
              <div style={{ marginTop: spacing[6] }}>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </form>
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
    </RedesignLayout>
  );
}

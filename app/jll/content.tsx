'use client';

import { useState } from 'react';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection, CTABanner } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';

const testimonials = [
  {
    quote: 'Having worked with Premrest for over 10 years, they are not just a contractor, they are true partner for all flooring, upholstery and restoration requirements your clients have. The expertise that Colin and Premrest team provide is second to none when providing guidance to JLL teams and clients. Attention to detail, communication and overall delivery sets them apart.',
    name: 'Guy Cartwright',
    title: 'Account Lead - Medibank at JLL',
    image: '/images/GuyCartwright.webp',
  },
  {
    quote: 'I have worked with Premrest for over 10 years, throughout this time they have always been an integrated component of our service delivery to our clients and more importantly were part of the JLL team. A true partnership built upon credible reliable service and a relationship built on trust. When our clients looked for productivity or cost efficiency Premrest would work with us to delivery cost effective service without cutting back on quality.',
    name: 'Cheryl Stevens',
    title: 'Head of Corporate Business, Executive Director at JLL',
    image: '/images/AP_AU_VIC_CHERY_STEVENS_JUNE_2019_007_BW_Crop.jpg',
  },
  {
    quote: 'I highly recommend Premrest for all your flooring, soft furniture, mould remediation & restoration needs. With their expertise and commitment to quality, they consistently deliver outstanding results in the field of restoration services. One of the key strengths of Premrest is their ability to quickly assess the situation and provide prompt and effective solutions. They understand the urgency of restoration projects and work diligently to minimise the disruption caused to your property.',
    name: 'Maria Nicholas',
    title: 'WoAG - National Facilities Manager at JLL',
    image: '/images/1678265518476.jpeg',
  },
];

const sustainabilityItems = [
  { title: 'Our net zero commitment', description: 'Our business operations are third party measured and certified as carbon neutral. We have partnered with Trace to measure and offset our carbon footprint. While this may be a small step, it is our first and one of many as we make the changes necessary to reduce and where possible eliminate our carbon footprint.' },
  { title: '100% waste water eradication', description: 'Our carpet cleaning method eliminates all contaminated waste water.' },
  { title: '67% reduction in energy usage', description: 'When compared to hot water extraction (aka steam cleaning) our method uses 67% less electricity. This is due to our machines being more efficient and the elimination of hot water.' },
  { title: '76% reduction in water usage', description: 'We use low moisture cleaning methods that significantly reduce water usage while still ensuring carpets are kept beautiful.' },
];

const consultingItems = [
  { title: 'Special projects', description: 'Your quirky problems are our exciting projects. We dive into the unknown with a zest for creative solutions, tackling the tasks that don\'t quite fit the mould of regular trades.' },
  { title: 'Slip test rectifications', description: 'Safety with a twinkle -- that\'s our mantra. We swoop in to identify and fix slip hazards, ensuring your floors are as safe as they are snazzy.' },
  { title: 'Material selections', description: 'Colin and team are here to whisk you through a world of material choices, ensuring your finishes selection are beautiful and fit-for-purpose.' },
  { title: '+ more', description: 'Heritage cleaning, mould cleaning, graffiti removal, specialist stone repairs, anti-slip treatments.' },
];

const portfolioItems = [
  { title: 'Capability', description: 'We currently service clients with locations across Australia. Including regional and remote locations. We\'re talking locations as remote as Alice Springs NT, Kalgoorlie WA, and Mount Isa QLD, to name a few. All this to say that no matter what properties are in your portfolio, we are able to service them.' },
  { title: 'Property types', description: 'We service everything from 80,000m2 office buildings through to 100m2 retail locations. We have the capability and capacity to take on any portfolio across Australia.' },
];

function AccordionItem({ title, description }: { title: string; description: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${colors.charcoal[200]}`, padding: `${spacing[3]} 0` }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: `${spacing[2]} 0`, fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], fontWeight: typography.fontWeight.semibold, color: colors.charcoal.DEFAULT, textAlign: 'left' }}
      >
        {title}
        <span style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', fontSize: '0.75rem' }}>&#9660;</span>
      </button>
      {open && (
        <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, marginTop: spacing[2], paddingBottom: spacing[2] }}>
          {description}
        </p>
      )}
    </div>
  );
}

export default function JLLContent() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <RedesignLayout>
      <PageHero
        title="The go-to for commercial floor cleaning"
        subtitle="National service provider. Corrigo Pro. Jaggaer / Bravo."
        backgroundColor={colors.charcoal.dark}
        compact
      />

      {/* Hero Detail */}
      <ContentSection>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[12], alignItems: 'center' }}>
          <div>
            <img src="/images/JLLxPremrestlogos.png" alt="JLL x Premrest" style={{ maxWidth: '400px', width: '100%', marginBottom: spacing[6] }} />
            <div style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-lg'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light }}>
              <p>National service provider</p>
              <p>Corrigo Pro</p>
              <p>Jaggaer / Bravo</p>
            </div>
            <div style={{ marginTop: spacing[6] }}>
              <Button href="/contact" variant="primary">Get in touch</Button>
            </div>
          </div>
          <div style={{ borderRadius: borderRadius.lg, overflow: 'hidden' }}>
            <img src="/images/Untitleddesign.webp" alt="People inside a common workspace" style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `@media (max-width: 768px) { div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; } }` }} />
      </ContentSection>

      {/* Streets Ahead */}
      <ContentSection background={colors.offWhite}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[12], alignItems: 'center' }}>
          <div style={{ borderRadius: borderRadius.lg, overflow: 'hidden' }}>
            <img src="/images/Premrest_ShawContract_Blob.webp" alt="Premrest cleaning" style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }} />
          </div>
          <div>
            <Heading as="h2" size="heading-xl">Streets ahead in cleaning office floors.</Heading>
            <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-lg'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, marginTop: spacing[4] }}>
              Don&apos;t put up with carpets that aren&apos;t clean. Deal direct with the company general cleaners and manufacturers turn to when issues arise with commercial floor cleaning. When it comes to cleaning floors, we work in the art of the possible.
            </p>
            <h4 style={{ fontFamily: typography.fontFamily.headline, fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize['heading-sm'], color: colors.charcoal.DEFAULT, marginTop: spacing[6], marginBottom: spacing[2] }}>Our core services</h4>
            <ul style={{ listStyle: 'disc', paddingLeft: spacing[6], margin: 0 }}>
              <li style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], color: colors.charcoal.light }}>Carpet Cleaning</li>
              <li style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], color: colors.charcoal.light }}>Hard Floor Cleaning</li>
              <li style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], color: colors.charcoal.light }}>Furniture Cleaning</li>
            </ul>
            <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], color: colors.charcoal.light, marginTop: spacing[4] }}>Additional services:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: spacing[6], margin: 0 }}>
              <li style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], color: colors.charcoal.light }}>Floor covering supply &amp; install (VIC)</li>
              <li style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], color: colors.charcoal.light }}>Special Projects (Consulting, Slip test rectifications, Fit-for-purpose flooring selection)</li>
            </ul>
            <div style={{ marginTop: spacing[6] }}>
              <Button href="/contact" variant="primary">Get in touch</Button>
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `@media (max-width: 768px) { div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; } }` }} />
      </ContentSection>

      {/* Benefits Section */}
      <ContentSection>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: spacing[8] }}>
          <div>
            <div style={{ borderRadius: borderRadius.lg, overflow: 'hidden', marginBottom: spacing[4] }}>
              <img src="/images/image-asset.webp" alt="Sustainability" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            </div>
            <h4 style={{ fontFamily: typography.fontFamily.headline, fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize['heading-sm'], color: colors.charcoal.DEFAULT, marginBottom: spacing[3] }}>Sustainability + Net Zero</h4>
            {sustainabilityItems.map((item) => <AccordionItem key={item.title} title={item.title} description={item.description} />)}
          </div>
          <div>
            <div style={{ borderRadius: borderRadius.lg, overflow: 'hidden', marginBottom: spacing[4] }}>
              <img src="/images/ColinInspecting-2.webp" alt="Floor Consulting" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            </div>
            <h4 style={{ fontFamily: typography.fontFamily.headline, fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize['heading-sm'], color: colors.charcoal.DEFAULT, marginBottom: spacing[3] }}>Floor Consulting</h4>
            {consultingItems.map((item) => <AccordionItem key={item.title} title={item.title} description={item.description} />)}
          </div>
          <div>
            <div style={{ borderRadius: borderRadius.lg, overflow: 'hidden', marginBottom: spacing[4] }}>
              <img src="/images/image-asset-1.webp" alt="National Portfolios" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
            </div>
            <h4 style={{ fontFamily: typography.fontFamily.headline, fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize['heading-sm'], color: colors.charcoal.DEFAULT, marginBottom: spacing[3] }}>National Portfolios</h4>
            {portfolioItems.map((item) => <AccordionItem key={item.title} title={item.title} description={item.description} />)}
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `@media (max-width: 768px) { div[style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; } }` }} />
      </ContentSection>

      {/* Testimonials */}
      <ContentSection background={colors.offWhite}>
        <div style={{ textAlign: 'center', marginBottom: spacing[8] }}>
          <Heading as="h2" size="heading-xl" align="center">
            Take the word of global consultancy firms, banks, tech, and other renowned clients
          </Heading>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: spacing[4], marginBottom: spacing[6] }}>
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }}
            />
          </div>
          <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-lg'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, fontStyle: 'italic', marginBottom: spacing[4] }}>
            &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
          </p>
          <h4 style={{ fontFamily: typography.fontFamily.headline, fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize['heading-sm'], color: colors.charcoal.DEFAULT, margin: 0 }}>
            {testimonials[currentTestimonial].name}
          </h4>
          <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-sm'], color: colors.charcoal.light, marginTop: spacing[1] }}>
            {testimonials[currentTestimonial].title}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: spacing[2], marginTop: spacing[6] }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  background: i === currentTestimonial ? colors.orange.DEFAULT : '#ccc',
                  cursor: 'pointer',
                  padding: 0,
                }}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </ContentSection>

      {/* Contact Section */}
      <ContentSection background={colors.charcoal.dark}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[12], alignItems: 'start' }}>
          <div>
            <Heading as="h2" size="heading-xl" color="#fff">We fix your pain.</Heading>
            <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-lg'], color: '#fff', marginTop: spacing[4] }}>No smell. No noise. No complaints.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing[4], marginTop: spacing[8] }}>
              <img src="/images/1694389967234.jpg" alt="Aaron Kelly" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <h5 style={{ fontFamily: typography.fontFamily.headline, fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize['body-lg'], color: '#fff', margin: 0 }}>Aaron Kelly</h5>
                <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-sm'], color: '#ccc', margin: `${spacing[1]} 0 0` }}>
                  General Manager - Cleaning<br />Tel: 0447 888 824<br />aaron.kelly@premrest.com.au
                </p>
              </div>
            </div>
          </div>
          <div style={{ background: '#fff', borderRadius: borderRadius.lg, padding: spacing[8] }}>
            <form action="/thanks" method="get">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[4] }}>
                <div>
                  <label style={{ display: 'block', fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-sm'], fontWeight: typography.fontWeight.semibold, color: colors.charcoal.DEFAULT, marginBottom: spacing[1] }}>First name</label>
                  <input type="text" name="First-Name" required style={{ width: '100%', padding: spacing[3], border: '1px solid #ddd', borderRadius: borderRadius.md, fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-sm'], fontWeight: typography.fontWeight.semibold, color: colors.charcoal.DEFAULT, marginBottom: spacing[1] }}>Last name</label>
                  <input type="text" name="Last-Name" required style={{ width: '100%', padding: spacing[3], border: '1px solid #ddd', borderRadius: borderRadius.md, fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], boxSizing: 'border-box' }} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[4], marginTop: spacing[4] }}>
                <div>
                  <label style={{ display: 'block', fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-sm'], fontWeight: typography.fontWeight.semibold, color: colors.charcoal.DEFAULT, marginBottom: spacing[1] }}>Email address</label>
                  <input type="email" name="Email-Address" required style={{ width: '100%', padding: spacing[3], border: '1px solid #ddd', borderRadius: borderRadius.md, fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-sm'], fontWeight: typography.fontWeight.semibold, color: colors.charcoal.DEFAULT, marginBottom: spacing[1] }}>Phone number</label>
                  <input type="tel" name="Phone-Number" style={{ width: '100%', padding: spacing[3], border: '1px solid #ddd', borderRadius: borderRadius.md, fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], boxSizing: 'border-box' }} />
                </div>
              </div>
              <div style={{ marginTop: spacing[6] }}>
                <Button variant="primary" type="submit">Submit</Button>
              </div>
            </form>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `@media (max-width: 768px) { div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; } }` }} />
      </ContentSection>
    </RedesignLayout>
  );
}

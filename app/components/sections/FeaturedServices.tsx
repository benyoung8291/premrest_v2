'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { colors, typography, spacing, layout, shadows } from '@/app/lib/tokens';
import Heading from '@/app/components/ui/Heading';

const services = [
  {
    title: 'Commercial Floor Cleaning',
    description: 'Expert care and maintenance for carpets, hard floors, and specialty surfaces.',
    image: '/images/Cleaning_FeaturedImage-p-800.jpg',
    href: '/cleaning',
  },
  {
    title: 'Flooring Installation',
    description: 'Professional installation for new builds, refurbishments, and fitouts.',
    image: '/images/Installs_FeaturedImage-p-800.jpg',
    href: '/installs',
  },
  {
    title: 'Bespoke Solutions',
    description: 'Custom flooring projects for complex, challenging, and unique spaces.',
    image: '/images/FeaturedImage_About-p-800.jpg',
    href: '/special-projects',
  },
  {
    title: 'Sustainability Programs',
    description: 'Eco-responsible floor care with carbon-neutral and waste diversion programs.',
    image: '/images/Home_FeaturedImage-p-800.jpg',
    href: '/sustainability',
  },
  {
    title: 'Facility Management',
    description: 'Ongoing floor care partnerships for large-scale commercial portfolios.',
    image: '/images/150624_Medibank_ArchDaily_Medibank_720BourkeSt_EarlCarter_12-p-800.webp',
    href: '/facility-managers',
  },
];

export default function FeaturedServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      ref={ref}
      style={{
        padding: `${spacing[16]} 0`,
        background: colors.cream[200],
      }}
    >
      <div
        style={{
          maxWidth: layout.maxWidth,
          margin: '0 auto',
          padding: `0 ${layout.gutter}`,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: spacing[8],
          }}
        >
          <Heading as="h2" size="heading-xl">
            Our Services
          </Heading>
          <div style={{ display: 'flex', gap: spacing[2] }} className="carousel-arrows">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: `1px solid ${colors.charcoal[300]}`,
                background: colors.white,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'border-color 0.2s ease',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={colors.charcoal.DEFAULT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: `1px solid ${colors.charcoal[300]}`,
                background: colors.white,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'border-color 0.2s ease',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={colors.charcoal.DEFAULT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            gap: spacing[4],
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            paddingBottom: spacing[2],
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href={service.href}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                flex: '0 0 280px',
                scrollSnapAlign: 'start',
                borderRadius: '0.375rem',
                overflow: 'hidden',
                background: colors.white,
                textDecoration: 'none',
                color: 'inherit',
                boxShadow: shadows.sm,
                transition: 'box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = shadows.md}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = shadows.sm}
            >
              <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: spacing[5] }}>
                <h3
                  style={{
                    fontFamily: typography.fontFamily.headline,
                    fontSize: typography.fontSize['heading-sm'],
                    fontWeight: typography.fontWeight.bold,
                    color: colors.charcoal.DEFAULT,
                    marginBottom: spacing[2],
                    lineHeight: typography.lineHeight.snug,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize['body-sm'],
                    color: colors.charcoal[500],
                    lineHeight: typography.lineHeight.normal,
                    marginBottom: spacing[3],
                  }}
                >
                  {service.description}
                </p>
                <span
                  style={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize['body-sm'],
                    fontWeight: typography.fontWeight.medium,
                    color: colors.charcoal.DEFAULT,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: spacing[1],
                  }}
                >
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        div::-webkit-scrollbar { display: none; }
      ` }} />
    </section>
  );
}

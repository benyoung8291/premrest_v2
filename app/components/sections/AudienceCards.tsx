'use client';

import { useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';
import Heading from '@/app/components/ui/Heading';
import BrandIllustration from '@/app/components/ui/BrandIllustration';

const audiences = [
  {
    title: 'Facility Managers',
    description: 'Ongoing floor care for large commercial spaces. We become an extension of your team.',
    href: '/facility-managers',
    illustration: '/images/Premrest_Home_Facilities_Illustration.svg',
    accent: colors.orange.DEFAULT,
    accentLight: colors.orange[50],
    icon: '🏢',
  },
  {
    title: 'Builders & Developers',
    description: 'New builds and large-scale installation projects, delivered on time and within spec.',
    href: '/builders-developers',
    illustration: '/images/Premrest_Hero_Installs_Office.svg',
    accent: colors.green.DEFAULT,
    accentLight: '#eef5f0',
    icon: '🏗',
  },
  {
    title: 'Building Managers',
    description: 'Multi-tenant floor management with the flexibility to handle diverse requirements.',
    href: '/building-managers',
    illustration: '/images/Premrest_Cleaning_Growth.svg',
    accent: colors.cream.dark,
    accentLight: colors.cream[50],
    icon: '🔑',
  },
  {
    title: 'Sustainability Managers',
    description: 'Environmentally responsible flooring solutions backed by real sustainability credentials.',
    href: '/sustainability-managers',
    illustration: '/images/Premrest_SustainabilityEarth.svg',
    accent: colors.green.DEFAULT,
    accentLight: '#eef5f0',
    icon: '🌱',
  },
];

function TiltCard({ children, accent, href }: { children: React.ReactNode; accent: string; href: string }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <div className="perspective-container" style={{ perspective: '1000px' }}>
      <motion.a
        ref={cardRef}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        whileHover={{ boxShadow: `0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px ${accent}22` }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          textDecoration: 'none',
          color: 'inherit',
          background: colors.white,
          borderRadius: borderRadius.xl,
          overflow: 'hidden',
          boxShadow: shadows.sm,
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </motion.a>
    </div>
  );
}

export default function AudienceCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      style={{
        padding: `${spacing[24]} 0 ${spacing[32]}`,
        background: colors.warmGray,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <BrandIllustration
        type="canvas"
        color="cream"
        size={600}
        position={{ top: '-100px', left: '-200px' }}
        animation="parallax"
        opacity={0.06}
      />

      <div
        style={{
          maxWidth: layout.contentWidth,
          margin: '0 auto',
          padding: `0 ${layout.gutter}`,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: spacing[16], maxWidth: '650px', margin: `0 auto ${spacing[16]}` }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: spacing[3],
              marginBottom: spacing[4],
            }}
          >
            <div
              style={{
                width: '32px',
                height: '2px',
                background: colors.orange.DEFAULT,
              }}
            />
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.label,
                fontWeight: typography.fontWeight.semibold,
                letterSpacing: typography.letterSpacing.widest,
                textTransform: 'uppercase',
                color: colors.orange.DEFAULT,
                margin: 0,
              }}
            >
              Who We Work With
            </p>
            <div
              style={{
                width: '32px',
                height: '2px',
                background: colors.orange.DEFAULT,
              }}
            />
          </motion.div>
          <Heading as="h2" size="display-md" align="center">
            Tailored for your role.
          </Heading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-md'],
              color: colors.charcoal[500],
              lineHeight: typography.lineHeight.relaxed,
              marginTop: spacing[4],
              marginBottom: 0,
            }}
          >
            Whatever your role in commercial property, we&apos;ve designed a
            flooring service path that fits.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: spacing[5],
          }}
          className="audience-grid"
        >
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.6 }}
            >
              <TiltCard accent={audience.accent} href={audience.href}>
                {/* Gradient accent top */}
                <div
                  style={{
                    height: '4px',
                    background: `linear-gradient(90deg, ${audience.accent}, ${audience.accent}66)`,
                  }}
                />

                {/* Illustration area with accent background */}
                <div
                  style={{
                    padding: `${spacing[8]} ${spacing[5]} ${spacing[3]}`,
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                    background: `radial-gradient(circle at 50% 80%, ${audience.accentLight}, transparent 70%)`,
                  }}
                >
                  <motion.img
                    src={audience.illustration}
                    alt=""
                    role="presentation"
                    style={{ height: '110px', width: 'auto' }}
                    whileHover={{ scale: 1.12, rotate: 3 }}
                    transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: `${spacing[4]} ${spacing[5]} ${spacing[6]}`, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3
                    style={{
                      fontFamily: typography.fontFamily.headline,
                      fontSize: typography.fontSize['heading-sm'],
                      fontWeight: typography.fontWeight.heavy,
                      color: colors.charcoal.DEFAULT,
                      margin: `0 0 ${spacing[2]}`,
                      lineHeight: 1.15,
                    }}
                  >
                    {audience.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: typography.fontFamily.body,
                      fontSize: typography.fontSize['body-sm'],
                      color: colors.charcoal[500],
                      lineHeight: typography.lineHeight.relaxed,
                      margin: `0 0 ${spacing[5]}`,
                      flex: 1,
                    }}
                  >
                    {audience.description}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: typography.fontFamily.body,
                        fontSize: typography.fontSize['body-xs'],
                        fontWeight: typography.fontWeight.semibold,
                        color: audience.accent,
                        letterSpacing: typography.letterSpacing.wide,
                        textTransform: 'uppercase',
                      }}
                    >
                      Your journey
                    </span>
                    <motion.span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: `${audience.accent}11`,
                        color: audience.accent,
                        fontSize: '14px',
                      }}
                      whileHover={{ background: audience.accent, color: colors.white, scale: 1.1 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .audience-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .audience-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      ` }} />
    </section>
  );
}

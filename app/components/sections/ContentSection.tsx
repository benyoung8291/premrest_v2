'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { colors, typography, spacing, layout, borderRadius, shadows } from '@/app/lib/tokens';

interface ContentSectionProps {
  children: React.ReactNode;
  background?: string;
  padding?: 'sm' | 'md' | 'lg';
}

const paddings = {
  sm: `${spacing[12]} 0`,
  md: `${spacing[16]} 0`,
  lg: `${spacing[24]} 0`,
};

export function ContentSection({ children, background = 'transparent', padding = 'lg' }: ContentSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{ background, padding: paddings[padding], overflow: 'hidden' }}>
      <motion.div
        style={{ maxWidth: layout.contentWidth, margin: '0 auto', padding: `0 ${layout.gutter}` }}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    </section>
  );
}

interface TwoColumnProps {
  image: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  children: React.ReactNode;
  background?: string;
  aspectRatio?: string;
}

export function TwoColumnSection({
  image,
  imageAlt = '',
  imagePosition = 'left',
  children,
  background = 'transparent',
  aspectRatio = '4/3',
}: TwoColumnProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const imageBlock = (
    <motion.div
      style={{ position: 'relative', borderRadius: borderRadius.lg, overflow: 'hidden' }}
      initial={{ opacity: 0, x: imagePosition === 'left' ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : undefined}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <img
        src={image}
        alt={imageAlt}
        style={{
          width: '100%',
          aspectRatio,
          objectFit: 'cover',
          display: 'block',
          borderRadius: borderRadius.lg,
        }}
      />
    </motion.div>
  );

  const contentBlock = (
    <motion.div
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: spacing[6] }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );

  return (
    <section ref={ref} style={{ background, padding: `${spacing[24]} 0`, overflow: 'hidden' }}>
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
        {imagePosition === 'left' ? (
          <>
            {imageBlock}
            {contentBlock}
          </>
        ) : (
          <>
            {contentBlock}
            {imageBlock}
          </>
        )}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
}

interface StepsSectionProps {
  steps: { number: string; title: string; description: string }[];
  background?: string;
}

export function StepsSection({ steps, background = colors.offWhite }: StepsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{ background, padding: `${spacing[24]} 0`, overflow: 'hidden' }}>
      <div style={{ maxWidth: layout.contentWidth, margin: '0 auto', padding: `0 ${layout.gutter}` }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
            gap: spacing[8],
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              style={{
                background: colors.white,
                borderRadius: borderRadius.lg,
                padding: spacing[8],
                boxShadow: shadows.sm,
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
              <span
                style={{
                  fontFamily: typography.fontFamily.headline,
                  fontSize: typography.fontSize['display-lg'],
                  fontWeight: typography.fontWeight.heavy,
                  color: colors.orange[100],
                  lineHeight: 1,
                  display: 'block',
                  marginBottom: spacing[4],
                }}
              >
                {step.number}
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
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-md'],
                  color: colors.charcoal[500],
                  lineHeight: typography.lineHeight.relaxed,
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
}

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  image?: string;
}

export function TestimonialSection({ quote, author, role, image }: TestimonialProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{ background: colors.charcoal.dark, padding: `${spacing[24]} 0`, overflow: 'hidden' }}>
      <motion.div
        style={{
          maxWidth: layout.narrowWidth,
          margin: '0 auto',
          padding: `0 ${layout.gutter}`,
          textAlign: 'center',
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {image && (
          <img
            src={image}
            alt={author}
            style={{
              width: '80px',
              height: '80px',
              borderRadius: borderRadius.full,
              objectFit: 'cover',
              margin: '0 auto',
              marginBottom: spacing[6],
              border: `3px solid ${colors.orange.DEFAULT}`,
            }}
          />
        )}
        <blockquote
          style={{
            fontFamily: typography.fontFamily.accent,
            fontSize: typography.fontSize['heading-md'],
            fontStyle: 'italic',
            fontWeight: typography.fontWeight.light,
            color: colors.white,
            lineHeight: typography.lineHeight.snug,
            margin: 0,
            marginBottom: spacing[6],
          }}
        >
          &ldquo;{quote}&rdquo;
        </blockquote>
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-md'],
            fontWeight: typography.fontWeight.semibold,
            color: colors.orange.DEFAULT,
            margin: 0,
          }}
        >
          {author}
        </p>
        {role && (
          <p
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-sm'],
              color: colors.charcoal[300],
              margin: 0,
              marginTop: spacing[1],
            }}
          >
            {role}
          </p>
        )}
      </motion.div>
    </section>
  );
}

interface CTABannerProps {
  heading: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  background?: string;
}

export function CTABanner({
  heading,
  description,
  buttonText = "Let's chat",
  buttonHref = '/contact',
  background,
}: CTABannerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      style={{
        background: background || `linear-gradient(135deg, ${colors.orange.DEFAULT}, ${colors.orange.dark})`,
        padding: `${spacing[20]} 0`,
        overflow: 'hidden',
      }}
    >
      <motion.div
        style={{
          maxWidth: layout.contentWidth,
          margin: '0 auto',
          padding: `0 ${layout.gutter}`,
          textAlign: 'center',
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h2
          style={{
            fontFamily: typography.fontFamily.headline,
            fontSize: typography.fontSize['heading-xl'],
            fontWeight: typography.fontWeight.heavy,
            color: colors.white,
            margin: 0,
            marginBottom: description ? spacing[4] : spacing[8],
          }}
        >
          {heading}
        </h2>
        {description && (
          <p
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-lg'],
              color: 'rgba(255,255,255,0.85)',
              margin: 0,
              marginBottom: spacing[8],
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {description}
          </p>
        )}
        <motion.a
          href={buttonHref}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '1rem 2.5rem',
            fontSize: typography.fontSize['body-md'],
            fontFamily: typography.fontFamily.body,
            fontWeight: typography.fontWeight.semibold,
            letterSpacing: typography.letterSpacing.wide,
            textTransform: 'uppercase' as const,
            background: colors.white,
            color: colors.orange.DEFAULT,
            border: 'none',
            borderRadius: borderRadius.full,
            cursor: 'pointer',
            textDecoration: 'none',
          }}
          whileHover={{ scale: 1.03, backgroundColor: colors.offWhite }}
          whileTap={{ scale: 0.97 }}
        >
          {buttonText}
        </motion.a>
      </motion.div>
    </section>
  );
}

interface ClientLogosProps {
  background?: string;
}

export function ClientLogos({ background = colors.offWhite }: ClientLogosProps) {
  const logos = [
    { src: '/images/ANZ.png', alt: 'ANZ' },
    { src: '/images/KPMG.svg', alt: 'KPMG' },
    { src: '/images/Medibank_logo.svg', alt: 'Medibank' },
    { src: '/images/Telstra.svg', alt: 'Telstra' },
    { src: '/images/JLL.png', alt: 'JLL' },
    { src: '/images/MorganStanley.png', alt: 'Morgan Stanley' },
    { src: '/images/NetApp.png', alt: 'NetApp' },
    { src: '/images/Vanguard.svg.png', alt: 'Vanguard' },
    { src: '/images/BendigoBank.png', alt: 'Bendigo Bank' },
    { src: '/images/PinsentMasons.svg', alt: 'Pinsent Masons' },
    { src: '/images/Concentrix.png', alt: 'Concentrix' },
    { src: '/images/101Collins.png', alt: '101 Collins' },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} style={{ background, padding: `${spacing[12]} 0`, overflow: 'hidden' }}>
      <div style={{ maxWidth: layout.contentWidth, margin: '0 auto', padding: `0 ${layout.gutter}` }}>
        <p
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize.label,
            fontWeight: typography.fontWeight.semibold,
            letterSpacing: typography.letterSpacing.wider,
            textTransform: 'uppercase',
            color: colors.charcoal[400],
            textAlign: 'center',
            marginBottom: spacing[8],
          }}
        >
          Trusted by leading organisations
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: spacing[8],
            alignItems: 'center',
            justifyItems: 'center',
          }}
        >
          {logos.map((logo, i) => (
            <motion.img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              style={{
                height: '32px',
                width: 'auto',
                maxWidth: '120px',
                objectFit: 'contain',
                filter: 'grayscale(100%) opacity(0.5)',
                transition: 'filter 0.3s',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ filter: 'grayscale(0%) opacity(1)' }}
            />
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns: repeat(6"] {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          section > div > div[style*="grid-template-columns: repeat(6"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}} />
    </section>
  );
}

interface FeatureGridItem {
  icon?: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  items: FeatureGridItem[];
  columns?: 2 | 3 | 4;
  background?: string;
}

export function FeatureGrid({ items, columns = 3, background = 'transparent' }: FeatureGridProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: spacing[6],
      }}
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          style={{
            background: colors.white,
            borderRadius: borderRadius.lg,
            padding: spacing[6],
            boxShadow: shadows.sm,
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {item.icon && (
            <img
              src={item.icon}
              alt=""
              style={{ width: '40px', height: '40px', marginBottom: spacing[4], objectFit: 'contain' }}
            />
          )}
          <h4
            style={{
              fontFamily: typography.fontFamily.headline,
              fontSize: typography.fontSize['heading-sm'],
              fontWeight: typography.fontWeight.bold,
              color: colors.charcoal.DEFAULT,
              margin: 0,
              marginBottom: spacing[2],
            }}
          >
            {item.title}
          </h4>
          <p
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-sm'],
              color: colors.charcoal[500],
              lineHeight: typography.lineHeight.relaxed,
              margin: 0,
            }}
          >
            {item.description}
          </p>
        </motion.div>
      ))}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(${columns}"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </div>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { colors, typography, spacing, layout } from '@/app/lib/tokens';

const tiles = [
  {
    title: 'Why Premrest',
    description: '20+ years of trusted commercial flooring expertise across Australia.',
    image: '/images/FeaturedImage_About-p-800.jpg',
    href: '/about',
  },
  {
    title: 'Sustainability',
    description: 'Our commitment to eco-responsible flooring practices and products.',
    image: '/images/Cleaning_FeaturedImage-p-800.jpg',
    href: '/sustainability',
  },
  {
    title: 'Client Stories',
    description: 'See how we have transformed floors for Australia\'s leading organisations.',
    image: '/images/Installs_FeaturedImage-p-800.jpg',
    href: '/case-studies',
  },
];

export default function PromoTiles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

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
          maxWidth: layout.contentWidth,
          margin: '0 auto',
          padding: `0 ${layout.gutter}`,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: spacing[4],
          }}
          className="promo-tiles-grid"
        >
          {tiles.map((tile, i) => (
            <motion.a
              key={tile.title}
              href={tile.href}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: 'block',
                position: 'relative',
                aspectRatio: '3/4',
                borderRadius: '0.375rem',
                overflow: 'hidden',
                textDecoration: 'none',
              }}
            >
              <img
                src={tile.image}
                alt={tile.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              {/* Gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.05) 50%)',
                }}
              />
              {/* Content */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: spacing[6],
                }}
              >
                <h3
                  style={{
                    fontFamily: typography.fontFamily.headline,
                    fontSize: typography.fontSize['heading-md'],
                    fontWeight: typography.fontWeight.bold,
                    color: colors.white,
                    marginBottom: spacing[2],
                    lineHeight: typography.lineHeight.snug,
                  }}
                >
                  {tile.title}
                </h3>
                <p
                  style={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize['body-sm'],
                    color: 'rgba(255,255,255,0.85)',
                    lineHeight: typography.lineHeight.normal,
                  }}
                >
                  {tile.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .promo-tiles-grid {
            grid-template-columns: 1fr !important;
          }
        }
      ` }} />
    </section>
  );
}

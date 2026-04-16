'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { colors, typography, spacing, layout } from '@/app/lib/tokens';

const categories = [
  {
    title: 'Cleaning',
    image: '/images/Cleaning_FeaturedImage-p-1080.jpg',
    href: '/cleaning',
  },
  {
    title: 'Installation',
    image: '/images/Installs_FeaturedImage-p-1080.jpg',
    href: '/installs',
  },
  {
    title: 'Special Projects',
    image: '/images/FeaturedImage_About-p-1080.jpg',
    href: '/special-projects',
  },
  {
    title: 'All Services',
    image: '/images/Home_FeaturedImage-p-1080.jpg',
    href: '/contact',
  },
];

export default function CategoryTiles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      style={{
        padding: `${spacing[16]} 0`,
        background: colors.white,
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
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: spacing[4],
          }}
          className="category-tiles-grid"
        >
          {categories.map((cat, i) => (
            <motion.a
              key={cat.title}
              href={cat.href}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: 'block',
                position: 'relative',
                aspectRatio: '1',
                borderRadius: '0.375rem',
                overflow: 'hidden',
                textDecoration: 'none',
              }}
            >
              <motion.img
                src={cat.image}
                alt={cat.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              {/* Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 60%)',
                }}
              />
              {/* Label */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: spacing[5],
                }}
              >
                <span
                  style={{
                    fontFamily: typography.fontFamily.headline,
                    fontSize: typography.fontSize['heading-md'],
                    fontWeight: typography.fontWeight.bold,
                    color: colors.white,
                    lineHeight: typography.lineHeight.snug,
                  }}
                >
                  {cat.title}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .category-tiles-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .category-tiles-grid {
            grid-template-columns: 1fr !important;
          }
        }
      ` }} />
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { colors, typography } from '@/app/lib/tokens';

interface HeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'display-xl' | 'display-lg' | 'display-md' | 'heading-xl' | 'heading-lg' | 'heading-md' | 'heading-sm';
  color?: string;
  align?: 'left' | 'center' | 'right';
  animate?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function Heading({
  children,
  as: Tag = 'h2',
  size = 'heading-lg',
  color = colors.charcoal.DEFAULT,
  align = 'left',
  animate = true,
  className = '',
  style: customStyle = {},
}: HeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const baseStyle: React.CSSProperties = {
    fontFamily: typography.fontFamily.headline,
    fontSize: typography.fontSize[size],
    fontWeight: size.startsWith('display') ? typography.fontWeight.heavy : typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: size.startsWith('display') ? typography.letterSpacing.tight : typography.letterSpacing.normal,
    color,
    textAlign: align,
    margin: 0,
    ...customStyle,
  };

  if (!animate) {
    return (
      <Tag className={className} style={baseStyle}>
        {children}
      </Tag>
    );
  }

  // Split text into words for reveal animation
  const text = typeof children === 'string' ? children : null;

  if (text) {
    const words = text.split(' ');
    return (
      <Tag ref={ref} className={className} style={baseStyle}>
        <span style={{ display: 'flex', flexWrap: 'wrap', gap: '0 0.3em' }}>
          {words.map((word, i) => (
            <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
              <motion.span
                style={{ display: 'inline-block' }}
                initial={{ y: '110%' }}
                animate={isInView ? { y: '0%' } : { y: '110%' }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.04,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </span>
      </Tag>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Tag className={className} style={baseStyle}>
        {children}
      </Tag>
    </motion.div>
  );
}

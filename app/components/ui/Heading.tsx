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
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const baseStyle: React.CSSProperties = {
    fontFamily: typography.fontFamily.headline,
    fontSize: typography.fontSize[size],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.snug,
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

  // Simple fade-in animation (no word-by-word reveal)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Tag className={className} style={baseStyle}>
        {children}
      </Tag>
    </motion.div>
  );
}

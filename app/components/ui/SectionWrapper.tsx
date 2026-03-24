'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { spacing, layout } from '@/app/lib/tokens';

interface SectionWrapperProps {
  children: React.ReactNode;
  background?: string;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  maxWidth?: 'full' | 'content' | 'narrow';
  id?: string;
  className?: string;
  animate?: boolean;
}

const paddings = {
  sm: `${spacing[12]} 0`,
  md: `${spacing[16]} 0`,
  lg: `${spacing[24]} 0`,
  xl: `${spacing[32]} 0`,
};

const widths = {
  full: '100%',
  content: layout.contentWidth,
  narrow: layout.narrowWidth,
};

export default function SectionWrapper({
  children,
  background = 'transparent',
  padding = 'lg',
  maxWidth = 'content',
  id,
  className = '',
  animate = true,
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id={id}
      ref={ref}
      className={className}
      style={{
        background,
        padding: paddings[padding],
        overflow: 'hidden',
      }}
    >
      <motion.div
        style={{
          maxWidth: widths[maxWidth],
          margin: '0 auto',
          padding: `0 ${layout.gutter}`,
        }}
        initial={animate ? { opacity: 0, y: 40 } : undefined}
        animate={animate && isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    </section>
  );
}

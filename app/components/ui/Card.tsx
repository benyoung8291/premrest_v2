'use client';

import { motion } from 'framer-motion';
import { colors, typography, shadows, spacing } from '@/app/lib/tokens';

interface CardProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'default' | 'elevated' | 'outlined' | 'image';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
}

const variantStyles = {
  default: {
    background: colors.white,
    border: 'none',
    borderRadius: '0.375rem',
    boxShadow: shadows.sm,
  },
  elevated: {
    background: colors.white,
    border: 'none',
    borderRadius: '0.375rem',
    boxShadow: shadows.md,
  },
  outlined: {
    background: 'transparent',
    border: `1px solid ${colors.cream[400]}`,
    borderRadius: '0.375rem',
    boxShadow: 'none',
  },
  image: {
    background: colors.cream[200],
    border: 'none',
    borderRadius: '0.375rem',
    boxShadow: 'none',
    overflow: 'hidden' as const,
  },
};

const paddings = {
  sm: spacing[4],
  md: spacing[6],
  lg: spacing[8],
};

export default function Card({
  children,
  href,
  variant = 'default',
  padding = 'md',
  className = '',
  style: customStyle = {},
}: CardProps) {
  const v = variantStyles[variant];
  const Component = href ? motion.a : motion.div;

  return (
    <Component
      href={href}
      className={className}
      style={{
        display: 'block',
        padding: variant === 'image' ? 0 : paddings[padding],
        textDecoration: 'none',
        color: 'inherit',
        ...v,
        ...customStyle,
      }}
      whileHover={href ? {
        boxShadow: shadows.md,
        transition: { duration: 0.2 },
      } : undefined}
    >
      {children}
    </Component>
  );
}

export function CardImage({ src, alt, aspectRatio = '16/9' }: { src: string; alt: string; aspectRatio?: string }) {
  return (
    <div style={{ position: 'relative', aspectRatio, overflow: 'hidden' }}>
      <motion.img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}

export function CardBody({ children, padding = 'md' }: { children: React.ReactNode; padding?: 'sm' | 'md' | 'lg' }) {
  return (
    <div style={{ padding: paddings[padding] }}>
      {children}
    </div>
  );
}

export function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: typography.fontFamily.body,
        fontSize: typography.fontSize.label,
        fontWeight: typography.fontWeight.semibold,
        letterSpacing: typography.letterSpacing.wider,
        textTransform: 'uppercase',
        color: colors.charcoal[400],
        marginBottom: spacing[2],
      }}
    >
      {children}
    </span>
  );
}

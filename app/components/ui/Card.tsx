'use client';

import { motion } from 'framer-motion';
import { colors, typography, borderRadius, shadows, spacing } from '@/app/lib/tokens';

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
    borderRadius: borderRadius.lg,
    boxShadow: shadows.sm,
  },
  elevated: {
    background: colors.white,
    border: 'none',
    borderRadius: borderRadius.lg,
    boxShadow: shadows.md,
  },
  outlined: {
    background: 'transparent',
    border: `1px solid ${colors.charcoal[200]}`,
    borderRadius: borderRadius.lg,
    boxShadow: 'none',
  },
  image: {
    background: colors.charcoal.DEFAULT,
    border: 'none',
    borderRadius: borderRadius.lg,
    boxShadow: shadows.md,
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
        y: -6,
        boxShadow: shadows.lg,
        transition: { duration: 0.3 },
      } : undefined}
    >
      {children}
    </Component>
  );
}

// Card subcomponents
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
        whileHover={{ scale: 1.05 }}
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
        color: colors.orange.DEFAULT,
        marginBottom: spacing[2],
      }}
    >
      {children}
    </span>
  );
}

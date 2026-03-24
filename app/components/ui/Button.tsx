'use client';

import { motion } from 'framer-motion';
import { colors, typography, borderRadius, transitions } from '@/app/lib/tokens';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
}

const variants = {
  primary: {
    background: colors.orange.DEFAULT,
    color: colors.white,
    border: 'none',
    hoverBg: colors.orange.dark,
  },
  secondary: {
    background: colors.charcoal.DEFAULT,
    color: colors.white,
    border: 'none',
    hoverBg: colors.charcoal.dark,
  },
  outline: {
    background: 'transparent',
    color: colors.charcoal.DEFAULT,
    border: `2px solid ${colors.charcoal.DEFAULT}`,
    hoverBg: colors.charcoal.DEFAULT,
    hoverColor: colors.white,
  },
  ghost: {
    background: 'transparent',
    color: colors.orange.DEFAULT,
    border: 'none',
    hoverBg: colors.orange[50],
  },
};

const sizes = {
  sm: { padding: '0.5rem 1.25rem', fontSize: typography.fontSize['body-sm'] },
  md: { padding: '0.75rem 2rem', fontSize: typography.fontSize['body-md'] },
  lg: { padding: '1rem 2.5rem', fontSize: typography.fontSize['body-lg'] },
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  fullWidth = false,
}: ButtonProps) {
  const v = variants[variant];
  const s = sizes[size];

  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: s.padding,
    fontSize: s.fontSize,
    fontFamily: typography.fontFamily.body,
    fontWeight: typography.fontWeight.semibold,
    letterSpacing: typography.letterSpacing.wide,
    textTransform: 'uppercase' as const,
    background: v.background,
    color: v.color,
    border: v.border,
    borderRadius: borderRadius.full,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: transitions.normal,
    width: fullWidth ? '100%' : 'auto',
    lineHeight: 1,
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      type={href ? undefined : type}
      className={className}
      style={style}
      whileHover={{
        scale: 1.03,
        backgroundColor: v.hoverBg,
        color: (v as any).hoverColor || v.color,
      }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </Component>
  );
}

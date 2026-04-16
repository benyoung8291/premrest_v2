'use client';

import { motion } from 'framer-motion';
import { colors, typography, transitions } from '@/app/lib/tokens';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  disabled?: boolean;
}

const variants = {
  primary: {
    background: colors.charcoal.DEFAULT,
    color: colors.white,
    border: 'none',
    hoverBg: colors.charcoal.light,
  },
  secondary: {
    background: colors.white,
    color: colors.charcoal.DEFAULT,
    border: `1px solid ${colors.charcoal.DEFAULT}`,
    hoverBg: colors.charcoal.DEFAULT,
    hoverColor: colors.white,
  },
  outline: {
    background: 'transparent',
    color: colors.charcoal.DEFAULT,
    border: `1px solid ${colors.charcoal[300]}`,
    hoverBg: colors.cream[200],
  },
  ghost: {
    background: 'transparent',
    color: colors.charcoal.DEFAULT,
    border: 'none',
    hoverBg: colors.cream[200],
  },
};

const sizes = {
  sm: { padding: '0.5rem 1.25rem', fontSize: typography.fontSize['body-sm'] },
  md: { padding: '0.75rem 1.75rem', fontSize: typography.fontSize['body-md'] },
  lg: { padding: '0.875rem 2.25rem', fontSize: typography.fontSize['body-lg'] },
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
  disabled = false,
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
    fontWeight: typography.fontWeight.medium,
    letterSpacing: typography.letterSpacing.normal,
    background: v.background,
    color: v.color,
    border: v.border,
    borderRadius: '0.25rem',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    transition: transitions.normal,
    width: fullWidth ? '100%' : 'auto',
    lineHeight: 1.2,
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? 'none' as const : 'auto' as const,
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
        backgroundColor: v.hoverBg,
        color: (v as any).hoverColor || v.color,
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  );
}

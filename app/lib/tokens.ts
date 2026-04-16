// =============================================================================
// PREMREST DESIGN SYSTEM — TOKENS
// Clean. Natural. Minimal. (Allbirds-inspired)
// =============================================================================

export const colors = {
  // Primary brand — dark neutral (was orange, now used as subtle accent only)
  orange: {
    DEFAULT: '#212a2f',
    light: '#3a4a52',
    dark: '#141b1f',
    50: '#f2f4f5',
    100: '#e0e4e6',
    200: '#c1c9cd',
    300: '#95a3aa',
    400: '#6b7d85',
    500: '#4a5d66',
    600: '#3a4a52',
    700: '#2d3a41',
    800: '#212a2f',
    900: '#141b1f',
  },

  // Text / heading color (was charcoal)
  charcoal: {
    DEFAULT: '#212a2f',
    light: '#4a5260',
    dark: '#141b1f',
    50: '#f5f5f4',
    100: '#e8e8e6',
    200: '#d5d5d0',
    300: '#b0b0a8',
    400: '#8a8a82',
    500: '#6d6d66',
    600: '#55554f',
    700: '#3d3d38',
    800: '#2a2a26',
    900: '#1a1a17',
  },

  // Warm background tones (was cream)
  cream: {
    DEFAULT: '#F5F5F0',
    light: '#FAFAF7',
    dark: '#E8E8E3',
    50: '#FDFDFB',
    100: '#FAFAF7',
    200: '#F5F5F0',
    300: '#EDEDEA',
    400: '#E8E8E3',
    500: '#D5D5D0',
    600: '#C0C0BB',
    700: '#A0A09B',
    800: '#808078',
    900: '#60605A',
  },

  // Neutral tones
  white: '#ffffff',
  offWhite: '#F5F5F0',
  warmGray: '#E8E8E3',
  black: '#111111',

  // Natural earthy accent tones
  natural: {
    sand: '#D4C5A9',
    stone: '#9B958A',
    fog: '#F0EEEB',
    sage: '#c4d3c2',
    bark: '#6B5B4E',
  },

  // Brand accent (original orange — used sparingly for highlights)
  brandAccent: '#d1703c',

  // Sustainability green
  green: {
    DEFAULT: '#3C6E47',
    light: '#5a9466',
    dark: '#2a5033',
  },

  // UI states
  error: '#c53030',
  success: '#38a169',
  info: '#3182ce',
} as const;

export const typography = {
  fontFamily: {
    headline: 'Georgia, "Times New Roman", serif',
    body: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
    accent: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },

  fontSize: {
    // Display sizes — restrained for clean aesthetic
    'display-xl': 'clamp(2.5rem, 5vw, 4rem)',
    'display-lg': 'clamp(2.25rem, 4vw, 3.25rem)',
    'display-md': 'clamp(2rem, 3.5vw, 2.75rem)',

    // Heading sizes
    'heading-xl': 'clamp(1.75rem, 3vw, 2.5rem)',
    'heading-lg': 'clamp(1.5rem, 2.5vw, 2rem)',
    'heading-md': 'clamp(1.25rem, 2vw, 1.625rem)',
    'heading-sm': 'clamp(1.125rem, 1.5vw, 1.25rem)',

    // Body sizes
    'body-lg': '1.125rem',
    'body-md': '1rem',
    'body-sm': '0.875rem',
    'body-xs': '0.8125rem',

    // UI sizes
    'label': '0.75rem',
    'caption': '0.6875rem',
  },

  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    heavy: 700,
  },

  lineHeight: {
    tight: 1.15,
    snug: 1.3,
    normal: 1.6,
    relaxed: 1.8,
  },

  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.02em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

export const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem',
} as const;

export const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
} as const;

export const layout = {
  maxWidth: '1440px',
  contentWidth: '1200px',
  narrowWidth: '800px',
  gutter: '1.5rem',
  gutterLg: '2.5rem',
} as const;

export const transitions = {
  fast: '150ms ease',
  normal: '250ms ease',
  slow: '400ms ease',
  spring: { type: 'spring' as const, stiffness: 260, damping: 30 },
  springGentle: { type: 'spring' as const, stiffness: 200, damping: 28 },
  springBouncy: { type: 'spring' as const, stiffness: 300, damping: 22 },
} as const;

export const shadows = {
  sm: '0 1px 2px rgba(0,0,0,0.05)',
  md: '0 2px 8px rgba(0,0,0,0.08)',
  lg: '0 4px 16px rgba(0,0,0,0.1)',
  xl: '0 8px 30px rgba(0,0,0,0.1)',
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  full: '9999px',
} as const;

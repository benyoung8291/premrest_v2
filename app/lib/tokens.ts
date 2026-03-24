// =============================================================================
// PREMREST DESIGN SYSTEM — TOKENS
// Bold. Expert. Modern.
// =============================================================================

export const colors = {
  // Primary brand palette
  orange: {
    DEFAULT: '#d1703c',
    light: '#e8956a',
    dark: '#b5582a',
    50: '#fef3ec',
    100: '#fde3d0',
    200: '#f9c5a0',
    300: '#f4a06b',
    400: '#e8856a',
    500: '#d1703c',
    600: '#b5582a',
    700: '#954420',
    800: '#763518',
    900: '#5a2812',
  },

  charcoal: {
    DEFAULT: '#2e3133',
    light: '#4a4e51',
    dark: '#1a1c1e',
    50: '#f4f5f5',
    100: '#e4e5e6',
    200: '#c9cbcc',
    300: '#a3a7a9',
    400: '#7d8285',
    500: '#5c6164',
    600: '#4a4e51',
    700: '#3c4042',
    800: '#2e3133',
    900: '#1a1c1e',
  },

  cream: {
    DEFAULT: '#f9cb8f',
    light: '#fce4c4',
    dark: '#f0a94d',
    50: '#fef9f0',
    100: '#fdf2e0',
    200: '#fce4c4',
    300: '#fad5a5',
    400: '#f9cb8f',
    500: '#f0a94d',
    600: '#e89230',
    700: '#c77720',
    800: '#a05e18',
    900: '#794712',
  },

  // Neutral tones
  white: '#ffffff',
  offWhite: '#faf8f5',
  warmGray: '#f2ede8',
  black: '#111111',

  // Accent (sustainability green — secondary)
  green: {
    DEFAULT: '#4a7c59',
    light: '#6b9e7a',
    dark: '#365a40',
  },

  // UI states
  error: '#c53030',
  success: '#38a169',
  info: '#3182ce',
} as const;

export const typography = {
  // Font families — simplified to 3
  fontFamily: {
    headline: '"futura-pt", "Futura PT", sans-serif',
    body: '"Inter", sans-serif',
    accent: '"Krub", sans-serif',
  },

  // Font sizes — dramatic scale for editorial feel
  fontSize: {
    // Display sizes (hero headlines)
    'display-xl': 'clamp(3.5rem, 8vw, 7rem)',
    'display-lg': 'clamp(3rem, 6vw, 5.5rem)',
    'display-md': 'clamp(2.5rem, 5vw, 4.5rem)',

    // Heading sizes
    'heading-xl': 'clamp(2rem, 4vw, 3.5rem)',
    'heading-lg': 'clamp(1.75rem, 3vw, 2.75rem)',
    'heading-md': 'clamp(1.5rem, 2.5vw, 2rem)',
    'heading-sm': 'clamp(1.25rem, 2vw, 1.5rem)',

    // Body sizes
    'body-lg': '1.25rem',
    'body-md': '1.0625rem',
    'body-sm': '0.9375rem',
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
    heavy: 900,
  },

  lineHeight: {
    tight: 1.05,
    snug: 1.2,
    normal: 1.5,
    relaxed: 1.7,
  },

  letterSpacing: {
    tight: '-0.03em',
    normal: '0',
    wide: '0.05em',
    wider: '0.1em',
    widest: '0.2em',
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
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  spring: { type: 'spring', stiffness: 300, damping: 30 },
  springGentle: { type: 'spring', stiffness: 200, damping: 25 },
  springBouncy: { type: 'spring', stiffness: 400, damping: 20 },
} as const;

export const shadows = {
  sm: '0 1px 3px rgba(0,0,0,0.08)',
  md: '0 4px 12px rgba(0,0,0,0.1)',
  lg: '0 8px 30px rgba(0,0,0,0.12)',
  xl: '0 20px 60px rgba(0,0,0,0.15)',
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  xl: '1.5rem',
  full: '9999px',
} as const;

// =============================================================================
// PREMREST — Framer Motion Animation Presets
// =============================================================================

import type { Variants } from 'framer-motion';

// Fade in from below (default entrance)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Fade in from right
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Scale in
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Text reveal — characters/words slide up
export const textReveal: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03, delayChildren: 0.1 },
  },
};

export const textRevealChild: Variants = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Stagger children
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

// Draw SVG path (for illustrations)
export const drawPath: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Parallax helper — use with useTransform
export const parallaxConfig = {
  slow: [0, 1, -50, 50] as [number, number, number, number],
  medium: [0, 1, -100, 100] as [number, number, number, number],
  fast: [0, 1, -200, 200] as [number, number, number, number],
};

// Marquee (infinite scroll)
export const marquee = {
  animate: {
    x: ['0%', '-50%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop' as const,
        duration: 30,
        ease: 'linear',
      },
    },
  },
};

// Hover states for cards/buttons
export const hoverLift = {
  whileHover: { y: -6, transition: { duration: 0.3 } },
  whileTap: { y: -2, scale: 0.98 },
};

export const hoverScale = {
  whileHover: { scale: 1.03, transition: { duration: 0.3 } },
  whileTap: { scale: 0.98 },
};

// Magnetic effect — pass mouse position
export const magneticStrength = 0.3;

'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

type IllustrationType = 'patch' | 'scribble' | 'rays' | 'canvas';
type IllustrationColor = 'orange' | 'cream' | 'green' | 'blue' | 'tan' | 'grey';

interface BrandIllustrationProps {
  type: IllustrationType;
  color: IllustrationColor;
  size?: number;
  position?: { top?: string; right?: string; bottom?: string; left?: string };
  animation?: 'parallax' | 'rotate' | 'scale' | 'draw' | 'float';
  opacity?: number;
  zIndex?: number;
  className?: string;
}

const fileMap: Record<IllustrationType, Record<string, string>> = {
  patch: {
    orange: '/images/Premrest_Patch_Orange.svg',
    cream: '/images/Premrest_Patch_Cream.svg',
    green: '/images/Premrest_Patch_Green.svg',
    blue: '/images/Premrest_Patch_Blue.svg',
    tan: '/images/Premrest_Patch_Tan_home.svg',
  },
  scribble: {
    orange: '/images/Premrest_Scribble_Orange.svg',
    cream: '/images/Premrest_Scribble_Cream.svg',
    green: '/images/Premrest_Scribble_Green.svg',
    blue: '/images/Premrest_Scribble_Blue.svg',
    grey: '/images/Premrest_Scribbles_grey.svg',
  },
  rays: {
    cream: '/images/Premrest_Rays_Cream.svg',
    blue: '/images/Premrest_Rays_Blue.svg',
  },
  canvas: {
    cream: '/images/Premrest_Canvas_Cream.svg',
    orange: '/images/Premrest_Canvas_Orange.svg',
    green: '/images/Premrest_Canvas_Green.svg',
  },
};

export default function BrandIllustration({
  type,
  color,
  size = 200,
  position = {},
  animation = 'parallax',
  opacity = 0.6,
  zIndex = 0,
  className = '',
}: BrandIllustrationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Animation transforms
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const src = fileMap[type]?.[color];
  if (!src) return null;

  const baseStyle: React.CSSProperties = {
    position: 'absolute',
    width: size,
    height: 'auto',
    opacity,
    zIndex,
    pointerEvents: 'none',
    ...position,
  };

  if (animation === 'parallax') {
    return (
      <motion.img ref={ref} src={src} alt="" role="presentation" className={className}
        style={{ ...baseStyle, y: parallaxY } as any}
      />
    );
  }

  if (animation === 'rotate') {
    return (
      <motion.img ref={ref} src={src} alt="" role="presentation" className={className}
        style={{ ...baseStyle, rotate: rotation } as any}
      />
    );
  }

  if (animation === 'scale') {
    return (
      <motion.img ref={ref} src={src} alt="" role="presentation" className={className}
        style={{ ...baseStyle, scale } as any}
      />
    );
  }

  if (animation === 'draw') {
    return (
      <motion.img ref={ref} src={src} alt="" role="presentation" className={className}
        style={baseStyle}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity, scale: 1 } : undefined}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      />
    );
  }

  if (animation === 'float') {
    return (
      <motion.img ref={ref} src={src} alt="" role="presentation" className={className}
        style={baseStyle}
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0, -2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' as const }}
      />
    );
  }

  return (
    <motion.img ref={ref} src={src} alt="" role="presentation" className={className}
      style={baseStyle}
    />
  );
}

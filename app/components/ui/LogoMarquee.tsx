'use client';

import { motion } from 'framer-motion';
import { colors, spacing, typography } from '@/app/lib/tokens';

const clientLogos = [
  { name: 'ANZ', src: '/images/ANZ.png' },
  { name: 'KPMG', src: '/images/KPMG.svg' },
  { name: 'Medibank', src: '/images/Medibank_logo.svg' },
  { name: 'Telstra', src: '/images/Telstra.svg' },
  { name: '101 Collins', src: '/images/101Collins.png' },
  { name: 'Bendigo Bank', src: '/images/BendigoBank.png' },
  { name: 'Concentrix', src: '/images/Concentrix.png' },
  { name: 'JLL', src: '/images/JLL.png' },
  { name: 'Morgan Stanley', src: '/images/MorganStanley.png' },
  { name: 'NetApp', src: '/images/NetApp.png' },
  { name: 'Pinsent Masons', src: '/images/PinsentMasons.svg' },
];

export default function LogoMarquee() {
  // Duplicate for seamless loop
  const logos = [...clientLogos, ...clientLogos];

  return (
    <section
      style={{
        padding: `${spacing[10]} 0`,
        background: colors.offWhite,
        overflow: 'hidden',
        borderTop: `1px solid ${colors.charcoal[100]}`,
        borderBottom: `1px solid ${colors.charcoal[100]}`,
      }}
    >
      <p
        style={{
          textAlign: 'center',
          fontFamily: typography.fontFamily.body,
          fontSize: typography.fontSize.label,
          fontWeight: typography.fontWeight.semibold,
          letterSpacing: typography.letterSpacing.widest,
          textTransform: 'uppercase',
          color: colors.charcoal[400],
          marginBottom: spacing[6],
          marginTop: 0,
        }}
      >
        Trusted by Australia&apos;s leading organisations
      </p>
      <div style={{ position: 'relative', width: '100%' }}>
        {/* Fade edges */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100px',
            height: '100%',
            background: `linear-gradient(to right, ${colors.offWhite}, transparent)`,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100px',
            height: '100%',
            background: `linear-gradient(to left, ${colors.offWhite}, transparent)`,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: spacing[16],
            width: 'max-content',
          }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 35,
              ease: 'linear',
            },
          }}
        >
          {logos.map((logo, i) => (
            <img
              key={`${logo.name}-${i}`}
              src={logo.src}
              alt={logo.name}
              style={{
                height: '32px',
                width: 'auto',
                opacity: 0.5,
                filter: 'grayscale(100%)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.filter = 'grayscale(0%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.5';
                e.currentTarget.style.filter = 'grayscale(100%)';
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

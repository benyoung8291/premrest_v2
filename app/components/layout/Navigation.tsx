'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { colors, typography, spacing, layout, shadows, transitions, borderRadius } from '@/app/lib/tokens';

interface MegaMenuItem {
  label: string;
  href: string;
  description?: string;
}

interface MegaMenuSection {
  title: string;
  items: MegaMenuItem[];
  featured?: {
    image: string;
    title: string;
    description: string;
    href: string;
  };
  illustration?: string;
}

const menuData: Record<string, MegaMenuSection> = {
  services: {
    title: 'Services',
    items: [
      { label: 'Cleaning', href: '/cleaning', description: 'Commercial floor care and maintenance' },
      { label: 'Installs', href: '/installs', description: 'Professional flooring installation' },
      { label: 'Special Projects', href: '/special-projects', description: 'Bespoke flooring solutions' },
    ],
    featured: {
      image: '/images/Home_FeaturedImage.jpg',
      title: 'Latest Project',
      description: 'See our most recent commercial flooring transformation',
      href: '/projects',
    },
    illustration: '/images/Premrest_Patch_Orange.svg',
  },
  industries: {
    title: 'Industries',
    items: [
      { label: 'Facility Managers', href: '/facility-managers', description: 'Ongoing floor care for large spaces' },
      { label: 'Builders & Developers', href: '/builders-developers', description: 'New builds and installations' },
      { label: 'Building Managers', href: '/building-managers', description: 'Multi-tenant floor management' },
      { label: 'Procurement Managers', href: '/procurement-managers', description: 'Contract flooring solutions' },
      { label: 'Sustainability Managers', href: '/sustainability-managers', description: 'Eco-responsible flooring' },
    ],
    illustration: '/images/Premrest_Home_Facilities_Illustration.svg',
  },
  about: {
    title: 'About',
    items: [
      { label: 'Our Story', href: '/about', description: 'The people behind Premrest' },
      { label: 'Sustainability', href: '/sustainability', description: 'Our commitment to the environment' },
      { label: 'Careers', href: '/careers', description: 'Join the team' },
      { label: 'Case Studies', href: '/case-studies', description: 'Our work in detail' },
    ],
    featured: {
      image: '/images/FeaturedImage_About.jpg',
      title: "Let's Talk Facilities",
      description: 'Listen to our latest podcast episode',
      href: '/lets-talk-facilities',
    },
  },
  resources: {
    title: 'Resources',
    items: [
      { label: 'All Resources', href: '/resources', description: 'Guides, articles, and more' },
      { label: 'Let\'s Talk Facilities', href: '/lets-talk-facilities', description: 'Our facilities podcast' },
      { label: 'Let\'s Talk Sustainability', href: '/lets-talk-sustainability', description: 'Our sustainability podcast' },
      { label: 'Projects', href: '/projects', description: 'Portfolio of our work' },
    ],
  },
};

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero-aware: white text when on hero (not scrolled), dark when scrolled
  const textColor = scrolled ? colors.charcoal.DEFAULT : colors.white;
  const logoFilter = scrolled ? 'none' : 'brightness(10)';

  return (
    <>
      <motion.nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled ? `1px solid ${colors.charcoal[100]}` : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: layout.maxWidth,
            margin: '0 auto',
            padding: `${scrolled ? spacing[3] : spacing[5]} ${layout.gutter}`,
            transition: 'padding 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          {/* Logo */}
          <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/Premrest_Main_Charcoal.svg"
              alt="Premrest"
              style={{
                height: scrolled ? '28px' : '34px',
                width: 'auto',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                filter: logoFilter,
              }}
            />
          </a>

          {/* Desktop menu items */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: spacing[1],
            }}
            className="nav-desktop"
          >
            {Object.entries(menuData).map(([key, section]) => (
              <div
                key={key}
                onMouseEnter={() => setActiveMenu(key)}
                onMouseLeave={() => setActiveMenu(null)}
                style={{ position: 'relative' }}
              >
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: `${spacing[2]} ${spacing[4]}`,
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize['body-sm'],
                    fontWeight: typography.fontWeight.medium,
                    color: activeMenu === key ? colors.orange.DEFAULT : textColor,
                    letterSpacing: typography.letterSpacing.wide,
                    textTransform: 'uppercase',
                    transition: 'color 0.3s',
                  }}
                >
                  {section.title}
                </button>
              </div>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3] }}>
            <a
              href="tel:1300207915"
              className="nav-phone"
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-sm'],
                fontWeight: typography.fontWeight.semibold,
                color: textColor,
                textDecoration: 'none',
                letterSpacing: typography.letterSpacing.wide,
                transition: 'color 0.3s',
              }}
            >
              1300 207 915
            </a>
            <motion.a
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: `${spacing[2]} ${spacing[5]}`,
                background: colors.orange.DEFAULT,
                color: colors.white,
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-xs'],
                fontWeight: typography.fontWeight.semibold,
                letterSpacing: typography.letterSpacing.wide,
                textTransform: 'uppercase',
                borderRadius: '9999px',
                textDecoration: 'none',
                lineHeight: 1,
              }}
              whileHover={{ scale: 1.03, backgroundColor: colors.orange.dark }}
              whileTap={{ scale: 0.97 }}
              className="nav-cta"
            >
              Get in Touch
            </motion.a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="nav-hamburger"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: spacing[2],
                flexDirection: 'column',
                gap: '5px',
              }}
              aria-label="Toggle menu"
            >
              <motion.span
                style={{ display: 'block', width: '24px', height: '2px', background: textColor, transition: 'background 0.3s' }}
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                style={{ display: 'block', width: '24px', height: '2px', background: textColor, transition: 'background 0.3s' }}
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                style={{ display: 'block', width: '24px', height: '2px', background: textColor, transition: 'background 0.3s' }}
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              />
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <AnimatePresence>
          {activeMenu && menuData[activeMenu] && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: colors.white,
                borderBottom: `1px solid ${colors.charcoal[100]}`,
                boxShadow: shadows.lg,
              }}
            >
              <div
                style={{
                  maxWidth: layout.contentWidth,
                  margin: '0 auto',
                  padding: `${spacing[8]} ${layout.gutter}`,
                  display: 'grid',
                  gridTemplateColumns: menuData[activeMenu].featured
                    ? '1fr 1fr 300px'
                    : menuData[activeMenu].illustration
                      ? '1fr 200px'
                      : '1fr',
                  gap: spacing[8],
                  alignItems: 'start',
                }}
              >
                {/* Menu items */}
                <div>
                  <p
                    style={{
                      fontFamily: typography.fontFamily.body,
                      fontSize: typography.fontSize.label,
                      fontWeight: typography.fontWeight.semibold,
                      letterSpacing: typography.letterSpacing.widest,
                      textTransform: 'uppercase',
                      color: colors.orange.DEFAULT,
                      marginBottom: spacing[4],
                      marginTop: 0,
                    }}
                  >
                    {menuData[activeMenu].title}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[1] }}>
                    {menuData[activeMenu].items.map((item) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        style={{
                          display: 'block',
                          padding: `${spacing[3]} ${spacing[4]}`,
                          borderRadius: '8px',
                          textDecoration: 'none',
                          transition: transitions.fast,
                        }}
                        whileHover={{ backgroundColor: colors.offWhite, x: 4 }}
                      >
                        <span
                          style={{
                            display: 'block',
                            fontFamily: typography.fontFamily.headline,
                            fontSize: typography.fontSize['body-md'],
                            fontWeight: typography.fontWeight.bold,
                            color: colors.charcoal.DEFAULT,
                          }}
                        >
                          {item.label}
                        </span>
                        {item.description && (
                          <span
                            style={{
                              display: 'block',
                              fontFamily: typography.fontFamily.body,
                              fontSize: typography.fontSize['body-xs'],
                              color: colors.charcoal[400],
                              marginTop: '2px',
                            }}
                          >
                            {item.description}
                          </span>
                        )}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Featured content */}
                {menuData[activeMenu].featured && (
                  <motion.a
                    href={menuData[activeMenu].featured!.href}
                    style={{
                      display: 'block',
                      textDecoration: 'none',
                      borderRadius: borderRadius.lg,
                      overflow: 'hidden',
                      background: colors.offWhite,
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={menuData[activeMenu].featured!.image}
                      alt={menuData[activeMenu].featured!.title}
                      style={{
                        width: '100%',
                        height: '160px',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                    <div style={{ padding: spacing[4] }}>
                      <span
                        style={{
                          fontFamily: typography.fontFamily.body,
                          fontSize: typography.fontSize.label,
                          fontWeight: typography.fontWeight.semibold,
                          letterSpacing: typography.letterSpacing.wider,
                          textTransform: 'uppercase',
                          color: colors.orange.DEFAULT,
                        }}
                      >
                        Featured
                      </span>
                      <p
                        style={{
                          fontFamily: typography.fontFamily.headline,
                          fontSize: typography.fontSize['body-md'],
                          fontWeight: typography.fontWeight.bold,
                          color: colors.charcoal.DEFAULT,
                          margin: `${spacing[1]} 0 0`,
                        }}
                      >
                        {menuData[activeMenu].featured!.title}
                      </p>
                    </div>
                  </motion.a>
                )}

                {/* Illustration */}
                {menuData[activeMenu].illustration && !menuData[activeMenu].featured && (
                  <motion.img
                    src={menuData[activeMenu].illustration!}
                    alt=""
                    role="presentation"
                    style={{ width: '100%', height: 'auto', opacity: 0.7 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.7, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: colors.charcoal.dark,
              paddingTop: '80px',
              overflowY: 'auto',
            }}
          >
            <div style={{ padding: `${spacing[8]} ${layout.gutter}` }}>
              {Object.entries(menuData).map(([key, section], sectionIdx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: sectionIdx * 0.1, duration: 0.5 }}
                  style={{ marginBottom: spacing[8] }}
                >
                  <p
                    style={{
                      fontFamily: typography.fontFamily.body,
                      fontSize: typography.fontSize.label,
                      fontWeight: typography.fontWeight.semibold,
                      letterSpacing: typography.letterSpacing.widest,
                      textTransform: 'uppercase',
                      color: colors.orange.DEFAULT,
                      marginBottom: spacing[3],
                      marginTop: 0,
                    }}
                  >
                    {section.title}
                  </p>
                  {section.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: 'block',
                        padding: `${spacing[3]} 0`,
                        fontFamily: typography.fontFamily.headline,
                        fontSize: typography.fontSize['heading-sm'],
                        fontWeight: typography.fontWeight.bold,
                        color: colors.white,
                        textDecoration: 'none',
                        borderBottom: `1px solid ${colors.charcoal[700]}`,
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </motion.div>
              ))}
              <div style={{ marginTop: spacing[8] }}>
                <a
                  href="tel:1300207915"
                  style={{
                    display: 'block',
                    fontFamily: typography.fontFamily.headline,
                    fontSize: typography.fontSize['heading-md'],
                    fontWeight: typography.fontWeight.heavy,
                    color: colors.orange.DEFAULT,
                    textDecoration: 'none',
                    marginBottom: spacing[4],
                  }}
                >
                  1300 207 915
                </a>
                <a
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: `${spacing[3]} ${spacing[6]}`,
                    background: colors.orange.DEFAULT,
                    color: colors.white,
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize['body-md'],
                    fontWeight: typography.fontWeight.semibold,
                    letterSpacing: typography.letterSpacing.wide,
                    textTransform: 'uppercase',
                    borderRadius: '9999px',
                    textDecoration: 'none',
                  }}
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .nav-phone { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .nav-hamburger { display: none !important; }
        }
      ` }} />

      {/* Scroll progress bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: `linear-gradient(90deg, ${colors.orange.DEFAULT}, ${colors.cream.DEFAULT})`,
          transformOrigin: '0%',
          zIndex: 1001,
          scaleX: progressScaleX,
        }}
      />
    </>
  );
}

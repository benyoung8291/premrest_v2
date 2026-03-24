'use client';

import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import { colors, typography, spacing, borderRadius, shadows } from '@/app/lib/tokens';

const quickLinks = [
  { label: 'Cleaning', href: '/cleaning' },
  { label: 'Installs', href: '/installs' },
  { label: 'Special Projects', href: '/special-projects' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Industries', href: '/industries' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
  { label: 'About', href: '/about' },
];

export default function LinksContent() {
  return (
    <RedesignLayout>
      <PageHero title="Links" backgroundColor={colors.orange.DEFAULT} compact />

      <ContentSection>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <Heading as="h2" size="heading-lg" align="center">
            Latest Resources
          </Heading>
          <p
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-lg'],
              color: colors.charcoal.light,
              marginTop: spacing[4],
              marginBottom: spacing[8],
            }}
          >
            Explore our services and resources below.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  padding: `${spacing[4]} ${spacing[6]}`,
                  background: colors.white,
                  borderRadius: borderRadius.md,
                  boxShadow: shadows.sm,
                  textDecoration: 'none',
                  fontFamily: typography.fontFamily.headline,
                  fontWeight: typography.fontWeight.bold,
                  fontSize: typography.fontSize['body-lg'],
                  color: colors.charcoal.DEFAULT,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  border: `1px solid ${colors.charcoal[100]}`,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div style={{ marginTop: spacing[8] }}>
            <Button href="/resources" variant="primary" size="lg">
              View more resources
            </Button>
          </div>
        </div>
      </ContentSection>
    </RedesignLayout>
  );
}

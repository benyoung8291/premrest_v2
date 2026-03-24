'use client';

import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import { colors, typography, spacing, borderRadius, shadows } from '@/app/lib/tokens';

const cleaningTeam = [
  { name: 'Aaron Kelly', role: 'General Manager, Cleaning', phone: '0447 888 824', email: 'aaron.kelly@premrest.com.au' },
  { name: 'Sammy Gilham', role: 'Sales Manager VIC, SA, WA, TAS', phone: '0488 734 260', email: 'sammy.gilham@premrest.com.au' },
  { name: 'Nick Grace', role: 'Sales Manager NSW, QLD, NT', phone: '0433 328 497', email: 'nick.grace@premrest.com.au' },
  { name: 'Jack Collins', role: 'Client Services Manager', phone: '0419 530 336', email: 'jack.collins@premrest.com.au' },
  { name: 'Perry Sandoval', role: 'Client Services Assistant', phone: '03 7020 9154', email: 'perry.sandoval@premrest.com.au' },
];

const installTeam = [
  { name: 'Jason Donnini', role: 'Project Manager', phone: '0433 434 265', email: 'jason.donnini@premrest.com.au' },
  { name: 'Tim Bradbury', role: 'Project Manager', phone: '0422 142 021', email: 'tim.bradbury@premrest.com.au' },
];

const groupTeam = [
  { name: 'Ben Young', role: 'Managing Director', phone: '0404 317 342', email: 'ben.young@premrest.com.au' },
  { name: 'Colin Saddington', role: 'Director', phone: '0430 270 163', email: 'colin@premrest.com.au' },
  { name: 'Jade Parker', role: 'Accounts Manager', phone: '03 8595 3050', email: 'accounts@premrest.com.au' },
];

function TeamSection({ title, members }: { title: string; members: typeof cleaningTeam }) {
  return (
    <div style={{ marginBottom: spacing[8] }}>
      <h3
        style={{
          fontFamily: typography.fontFamily.headline,
          fontWeight: typography.fontWeight.bold,
          fontSize: typography.fontSize['heading-md'],
          color: colors.charcoal.DEFAULT,
          marginBottom: spacing[4],
        }}
      >
        {title}
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
        {members.map((member) => (
          <div
            key={member.email}
            style={{
              background: colors.white,
              borderRadius: borderRadius.md,
              padding: `${spacing[4]} ${spacing[5]}`,
              boxShadow: shadows.sm,
            }}
          >
            <strong
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-md'],
                color: colors.charcoal.DEFAULT,
              }}
            >
              {member.name}
            </strong>
            <span
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-sm'],
                color: colors.charcoal.light,
                marginLeft: spacing[2],
              }}
            >
              — {member.role}
            </span>
            <div style={{ marginTop: spacing[1], display: 'flex', gap: spacing[4], flexWrap: 'wrap' }}>
              <a
                href={`tel:${member.phone.replace(/\s/g, '')}`}
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-sm'],
                  color: colors.orange.DEFAULT,
                  textDecoration: 'none',
                }}
              >
                {member.phone}
              </a>
              <a
                href={`mailto:${member.email}`}
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-sm'],
                  color: colors.orange.DEFAULT,
                  textDecoration: 'none',
                }}
              >
                {member.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LinktreeContent() {
  return (
    <RedesignLayout>
      <PageHero title="Links" backgroundColor={colors.orange.DEFAULT} compact />

      <ContentSection>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[16] }}>
          <div>
            <Heading as="h2" size="heading-lg">
              Let&apos;s build better floors, together.
            </Heading>
            <p
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-lg'],
                lineHeight: typography.lineHeight.relaxed,
                color: colors.charcoal.light,
                marginTop: spacing[4],
              }}
            >
              <strong>Australia&apos;s go-to for commercial floor care</strong>, cleaning and installing floors from
              small spaces to multi-level projects, with quality that flaws even the harshest critics.
            </p>
            <div style={{ marginTop: spacing[6], display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
              <a
                href="tel:1300207915"
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-lg'],
                  color: colors.orange.DEFAULT,
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                1300 207 915
              </a>
              <a
                href="mailto:office@premrest.com.au"
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-lg'],
                  color: colors.orange.DEFAULT,
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                office@premrest.com.au
              </a>
              <a
                href="https://maps.app.goo.gl/BotU9K1ahvLwXa1z7"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-md'],
                  color: colors.orange.DEFAULT,
                  textDecoration: 'none',
                }}
              >
                1/99 Heyington Ave, Thomastown VIC 3074
              </a>
            </div>
          </div>
          <div>
            <TeamSection title="Cleaning Team" members={cleaningTeam} />
            <TeamSection title="Floor Install Team" members={installTeam} />
            <TeamSection title="Group" members={groupTeam} />
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            section > div > div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}} />
      </ContentSection>
    </RedesignLayout>
  );
}

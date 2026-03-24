import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection } from '@/app/components/sections/ContentSection';
import { colors, typography, spacing } from '@/app/lib/tokens';
import { getPersonBySlug } from '@/app/lib/data';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = await getPersonBySlug(slug);
  if (!person) return { title: 'Not Found' };
  return { title: `${person.name} - ${person.title || 'Team'}`, description: `${person.name}, ${person.title} at Premrest` };
}

export default async function PersonPage({ params }: Props) {
  const { slug } = await params;
  const person = await getPersonBySlug(slug);

  if (!person) notFound();

  const resources = person.authoredResources
    ?.map(ar => ar.resource)
    .filter(r => !r.isDraft && !r.isArchived) || [];

  return (
    <RedesignLayout>
      <PageHero title={person.name} compact />
      <ContentSection>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: `${spacing[8]} 0 ${spacing[16]}` }}>
          <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: spacing[10] }}>
            {person.photoUrl && (
              <img
                src={person.photoUrl}
                alt={person.name}
                style={{ width: 180, height: 180, borderRadius: 12, objectFit: 'cover' }}
              />
            )}
            <div style={{ flex: 1, minWidth: 200 }}>
              <h2 style={{
                fontFamily: typography.fontFamily.headline,
                fontSize: typography.fontSize['heading-lg'],
                color: colors.charcoal.DEFAULT,
                margin: '0 0 8px',
              }}>
                {person.name}
              </h2>
              {person.title && (
                <p style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize['body-lg'],
                  color: colors.orange.DEFAULT,
                  fontWeight: 600,
                  margin: '0 0 16px',
                }}>
                  {person.title}
                </p>
              )}
              {person.displayContactInfo && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {person.email && (
                    <a href={`mailto:${person.email}`} style={{
                      color: colors.charcoal[600],
                      textDecoration: 'none',
                      fontSize: 14,
                      fontFamily: typography.fontFamily.body,
                    }}>
                      {person.email}
                    </a>
                  )}
                  {person.phone && (
                    <a href={`tel:${person.phone}`} style={{
                      color: colors.charcoal[600],
                      textDecoration: 'none',
                      fontSize: 14,
                      fontFamily: typography.fontFamily.body,
                    }}>
                      {person.phone}
                    </a>
                  )}
                  {person.linkedin && (
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer" style={{
                      color: colors.orange.DEFAULT,
                      textDecoration: 'none',
                      fontSize: 14,
                      fontFamily: typography.fontFamily.body,
                      fontWeight: 500,
                    }}>
                      LinkedIn Profile
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Resources by this person */}
          {resources.length > 0 && (
            <div>
              <h3 style={{
                fontFamily: typography.fontFamily.headline,
                fontSize: typography.fontSize['heading-md'],
                color: colors.charcoal.DEFAULT,
                marginBottom: spacing[4],
              }}>
                Resources
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {resources.map(r => (
                  <a
                    key={r.id}
                    href={`/resources/${r.slug}`}
                    style={{
                      padding: '16px 20px',
                      background: colors.offWhite,
                      borderRadius: 8,
                      textDecoration: 'none',
                      display: 'block',
                    }}
                  >
                    <div style={{
                      fontFamily: typography.fontFamily.body,
                      fontSize: typography.fontSize['body-md'],
                      color: colors.charcoal.DEFAULT,
                      fontWeight: 600,
                    }}>
                      {r.name}
                    </div>
                    {r.contentType && (
                      <span style={{
                        fontSize: 12,
                        color: colors.orange.DEFAULT,
                        fontFamily: typography.fontFamily.body,
                      }}>
                        {r.contentType.name}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </ContentSection>
    </RedesignLayout>
  );
}

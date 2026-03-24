import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection } from '@/app/components/sections/ContentSection';
import { colors, typography, spacing } from '@/app/lib/tokens';
import { getProjectBySlug } from '@/app/lib/data';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: 'Not Found' };
  return { title: project.name, description: project.summary || undefined };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  const managers = project.managers?.map(m => m.person) || [];
  const photos = project.photos || [];

  return (
    <RedesignLayout>
      <PageHero title={project.name} compact />
      <ContentSection>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: `${spacing[8]} 0 ${spacing[16]}` }}>
          {/* Featured image */}
          {project.featuredImageUrl && (
            <div style={{ marginBottom: spacing[8], borderRadius: 12, overflow: 'hidden' }}>
              <img
                src={project.featuredImageUrl}
                alt={project.name}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          )}

          {/* Summary */}
          {project.summary && (
            <p style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-lg'],
              color: colors.charcoal[600],
              lineHeight: typography.lineHeight.relaxed,
              fontWeight: 500,
              marginBottom: spacing[8],
            }}>
              {project.summary}
            </p>
          )}

          {/* Project managers */}
          {managers.length > 0 && (
            <div style={{
              display: 'flex',
              gap: 16,
              marginBottom: spacing[8],
              padding: '16px 20px',
              background: colors.offWhite,
              borderRadius: 8,
            }}>
              <span style={{
                fontSize: 13,
                color: colors.charcoal[400],
                fontFamily: typography.fontFamily.body,
                fontWeight: 600,
              }}>
                Project Manager{managers.length > 1 ? 's' : ''}:
              </span>
              {managers.map(m => (
                <a
                  key={m.id}
                  href={`/people/${m.slug}`}
                  style={{
                    fontSize: 14,
                    color: colors.orange.DEFAULT,
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontFamily: typography.fontFamily.body,
                  }}
                >
                  {m.name}
                </a>
              ))}
            </div>
          )}

          {/* Description */}
          {project.description && (
            <div
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-md'],
                color: colors.charcoal[700],
                lineHeight: typography.lineHeight.relaxed,
                marginBottom: spacing[10],
              }}
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          )}

          {/* Photo gallery */}
          {photos.length > 0 && (
            <div>
              <h3 style={{
                fontFamily: typography.fontFamily.headline,
                fontSize: typography.fontSize['heading-md'],
                color: colors.charcoal.DEFAULT,
                marginBottom: spacing[4],
              }}>
                Gallery
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 12,
              }}>
                {photos.map((photo) => (
                  <div key={photo.id} style={{ borderRadius: 8, overflow: 'hidden' }}>
                    <img
                      src={photo.url}
                      alt={photo.alt || project.name}
                      style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </ContentSection>
    </RedesignLayout>
  );
}

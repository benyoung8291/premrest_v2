import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection } from '@/app/components/sections/ContentSection';
import { colors, typography, spacing } from '@/app/lib/tokens';
import { getResourceBySlug } from '@/app/lib/data';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = await getResourceBySlug(slug);
  if (!resource) return { title: 'Not Found' };
  return {
    title: resource.name,
    description: resource.summary || undefined,
  };
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = await getResourceBySlug(slug);

  if (!resource) notFound();

  const authors = resource.authors?.map(a => a.person) || [];
  const tags = resource.tags?.map(t => t.tag) || [];

  return (
    <RedesignLayout>
      <PageHero title={resource.name} compact />
      <ContentSection>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: `${spacing[8]} 0 ${spacing[16]}` }}>
          {/* Meta info */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            alignItems: 'center',
            marginBottom: spacing[8],
            paddingBottom: spacing[6],
            borderBottom: `1px solid ${colors.charcoal[100]}`,
          }}>
            {resource.contentType && (
              <span style={{
                padding: '4px 12px',
                background: colors.orange[50],
                color: colors.orange.DEFAULT,
                borderRadius: 4,
                fontSize: 13,
                fontWeight: 600,
                fontFamily: typography.fontFamily.body,
              }}>
                {resource.contentType.name}
              </span>
            )}
            {resource.category && (
              <span style={{
                fontSize: 14,
                color: colors.charcoal[500],
                fontFamily: typography.fontFamily.body,
              }}>
                {resource.category.name}
              </span>
            )}
            {authors.length > 0 && (
              <span style={{
                fontSize: 14,
                color: colors.charcoal[400],
                fontFamily: typography.fontFamily.body,
              }}>
                By {authors.map(a => a.name).join(', ')}
              </span>
            )}
          </div>

          {/* Featured image */}
          {resource.featuredImageUrl && (
            <div style={{ marginBottom: spacing[8], borderRadius: 8, overflow: 'hidden' }}>
              <img
                src={resource.featuredImageUrl}
                alt={resource.name}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          )}

          {/* Video embed */}
          {resource.videoUrl && (
            <div style={{
              marginBottom: spacing[8],
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: 8,
            }}>
              <iframe
                src={resource.videoUrl.replace('watch?v=', 'embed/')}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {/* Summary */}
          {resource.summary && (
            <p style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-lg'],
              color: colors.charcoal[600],
              lineHeight: typography.lineHeight.relaxed,
              fontWeight: 500,
              marginBottom: spacing[8],
            }}>
              {resource.summary}
            </p>
          )}

          {/* Content */}
          {resource.content && (
            <div
              style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-md'],
                color: colors.charcoal[700],
                lineHeight: typography.lineHeight.relaxed,
              }}
              dangerouslySetInnerHTML={{ __html: resource.content }}
            />
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div style={{
              marginTop: spacing[10],
              paddingTop: spacing[6],
              borderTop: `1px solid ${colors.charcoal[100]}`,
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap',
            }}>
              {tags.map(tag => (
                <span key={tag.id} style={{
                  padding: '4px 10px',
                  background: colors.charcoal[50],
                  color: colors.charcoal[600],
                  borderRadius: 4,
                  fontSize: 12,
                  fontFamily: typography.fontFamily.body,
                }}>
                  {tag.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </ContentSection>
    </RedesignLayout>
  );
}

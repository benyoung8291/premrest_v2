'use client';

import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import { colors, typography, spacing, borderRadius, shadows } from '@/app/lib/tokens';

export default function SearchContent() {
  return (
    <RedesignLayout>
      <PageHero
        title="Search Results"
        backgroundColor={colors.charcoal.dark}
        compact
      />

      <ContentSection>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <form
            action="/search"
            style={{
              display: 'flex',
              gap: spacing[3],
              marginBottom: spacing[10],
            }}
          >
            <label htmlFor="search" className="sr-only" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
              Search
            </label>
            <input
              type="search"
              id="search"
              name="query"
              placeholder="Search..."
              required
              maxLength={256}
              style={{
                flex: 1,
                padding: `${spacing[3]} ${spacing[5]}`,
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-md'],
                border: `2px solid ${colors.charcoal[200]}`,
                borderRadius: borderRadius.md,
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
            />
            <Button type="submit" variant="primary">
              Search
            </Button>
          </form>
          <div
            style={{
              padding: spacing[10],
              textAlign: 'center',
              color: colors.charcoal.light,
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-lg'],
            }}
          >
            Enter a search term above to find results.
          </div>
        </div>
      </ContentSection>
    </RedesignLayout>
  );
}

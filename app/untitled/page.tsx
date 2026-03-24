import type { Metadata } from 'next';
import RedesignLayout from '@/app/redesign-layout';
import { colors, typography, spacing, layout } from '@/app/lib/tokens';

export const metadata: Metadata = {
  title: 'Premrest',
};

export default function Page() {
  return (
    <RedesignLayout>
      <section style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: colors.offWhite,
        padding: `${spacing[32]} ${layout.gutter}`,
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontFamily: typography.fontFamily.headline,
            fontSize: typography.fontSize['heading-xl'],
            fontWeight: typography.fontWeight.heavy,
            color: colors.charcoal.DEFAULT,
            marginBottom: spacing[6],
          }}>
            Page coming soon
          </h1>
          <a href="/" style={{
            display: 'inline-flex',
            padding: '0.75rem 2rem',
            fontSize: typography.fontSize['body-md'],
            fontFamily: typography.fontFamily.body,
            fontWeight: typography.fontWeight.semibold,
            letterSpacing: '0.05em',
            textTransform: 'uppercase' as const,
            background: colors.orange.DEFAULT,
            color: colors.white,
            border: 'none',
            borderRadius: '9999px',
            textDecoration: 'none',
          }}>
            Go back home
          </a>
        </div>
      </section>
    </RedesignLayout>
  );
}

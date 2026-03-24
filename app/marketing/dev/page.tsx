import type { Metadata } from 'next';
import RedesignLayout from '@/app/redesign-layout';
import { colors, typography, spacing, layout } from '@/app/lib/tokens';

export const metadata: Metadata = {
  title: 'Dev | Premrest Marketing',
  description: '',
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
        <div style={{ textAlign: 'center', maxWidth: layout.narrowWidth }}>
          <h1 style={{
            fontFamily: typography.fontFamily.headline,
            fontSize: typography.fontSize['heading-xl'],
            fontWeight: typography.fontWeight.heavy,
            color: colors.charcoal.DEFAULT,
            marginBottom: spacing[6],
          }}>
            Development
          </h1>
          <p style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize['body-lg'],
            color: colors.charcoal[500],
            lineHeight: typography.lineHeight.relaxed,
          }}>
            Internal marketing development tools.
          </p>
        </div>
      </section>
    </RedesignLayout>
  );
}

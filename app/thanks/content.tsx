'use client';

import { motion } from 'framer-motion';
import RedesignLayout from '@/app/redesign-layout';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import { colors, typography, spacing, layout } from '@/app/lib/tokens';

export default function ThanksContent() {
  return (
    <RedesignLayout>
      <section
        style={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: colors.offWhite,
          padding: `${spacing[20]} ${layout.gutter}`,
        }}
      >
        <motion.div
          style={{ textAlign: 'center', maxWidth: '600px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Heading as="h1" size="display-md" align="center">
            Thank you!
          </Heading>
          <p
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-lg'],
              color: colors.charcoal[500],
              lineHeight: typography.lineHeight.relaxed,
              marginTop: spacing[4],
              marginBottom: spacing[10],
            }}
          >
            We have received your submission. Our team will be in touch with you shortly.
          </p>
          <Button href="/" variant="primary" size="lg">
            Go back home
          </Button>
        </motion.div>
      </section>
    </RedesignLayout>
  );
}

import type { Metadata } from 'next';
import UnauthorizedContent from './content';

export const metadata: Metadata = {
  title: 'Unauthorized',
  description: 'You do not have permission to access this page.',
};

export default function Page() {
  return <UnauthorizedContent />;
}

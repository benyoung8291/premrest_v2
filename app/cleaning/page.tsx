import type { Metadata } from 'next';
import CleaningContent from './cleaning-content';

export const metadata: Metadata = {
  title: 'Premrest | Commercial Floor Cleaning',
  description: 'Give your commercial floors a new lease on life, with no problems swept under the carpet.',
};

export default function Page() {
  return <CleaningContent />;
}

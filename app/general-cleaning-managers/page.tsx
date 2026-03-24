import type { Metadata } from 'next';
import GeneralCleaningManagersContent from './general-cleaning-managers-content';

export const metadata: Metadata = {
  title: 'Premrest | General Cleaning Managers | Commercial Floor Cleaning & Installs',
  description: 'Specialist floor care that supports your cleaning team.',
};

export default function Page() {
  return <GeneralCleaningManagersContent />;
}

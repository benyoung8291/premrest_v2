import type { Metadata } from 'next';
import CleaningThanksContent from './content';

export const metadata: Metadata = {
  title: 'Cleaning | Thank You',
  description: 'Thank you for your cleaning enquiry with Premrest.',
};

export default function Page() {
  return <CleaningThanksContent />;
}

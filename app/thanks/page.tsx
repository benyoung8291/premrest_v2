import type { Metadata } from 'next';
import ThanksContent from './content';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you for getting in touch with Premrest.',
};

export default function Page() {
  return <ThanksContent />;
}

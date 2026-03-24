import type { Metadata } from 'next';
import InstallsThanksContent from './content';

export const metadata: Metadata = {
  title: 'Installs | Thank You',
  description: 'Thank you for your installation enquiry with Premrest.',
};

export default function Page() {
  return <InstallsThanksContent />;
}

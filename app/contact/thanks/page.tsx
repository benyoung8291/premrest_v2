import type { Metadata } from 'next';
import ContactThanksContent from './content';

export const metadata: Metadata = {
  title: 'Contact | Thank You',
  description: 'Thank you for contacting Premrest.',
};

export default function Page() {
  return <ContactThanksContent />;
}

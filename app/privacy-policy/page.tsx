import type { Metadata } from 'next';
import PrivacyPolicyContent from './content';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Premrest privacy policy — how we collect, use, and protect your personal information.',
};

export default function Page() {
  return <PrivacyPolicyContent />;
}

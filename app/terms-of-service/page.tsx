import type { Metadata } from 'next';
import TermsOfServiceContent from './content';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Premrest terms of service — the terms and conditions governing use of our services.',
};

export default function Page() {
  return <TermsOfServiceContent />;
}

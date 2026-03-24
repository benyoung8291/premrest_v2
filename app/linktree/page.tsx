import type { Metadata } from 'next';
import LinktreeContent from './linktree-content';

export const metadata: Metadata = {
  title: 'QR Links | Premrest',
  description: 'Quick links and contact information for the Premrest team.',
};

export default function Page() {
  return <LinktreeContent />;
}

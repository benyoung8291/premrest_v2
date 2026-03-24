import type { Metadata } from 'next';
import LinksContent from './links-content';

export const metadata: Metadata = {
  title: 'Links | Premrest',
  description: 'Quick links and resources from Premrest.',
};

export default function Page() {
  return <LinksContent />;
}

import type { Metadata } from 'next';
import AboutContent from './about-content';

export const metadata: Metadata = {
  title: 'About',
  description: 'Talk to the experts who are floors ahead.',
};

export default function Page() {
  return <AboutContent />;
}

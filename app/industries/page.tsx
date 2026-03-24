import type { Metadata } from 'next';
import IndustriesContent from './industries-content';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Specialist flooring across every sector.',
};

export default function Page() {
  return <IndustriesContent />;
}

import type { Metadata } from 'next';
import CaseStudiesContent from './case-studies-content';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Success stories, one square metre at a time.',
};

export default function Page() {
  return <CaseStudiesContent />;
}

import type { Metadata } from 'next';
import SpecialProjectsContent from './special-projects-content';

export const metadata: Metadata = {
  title: 'Premrest | Special Projects',
  description: 'From complex restorations, graffiti removal to areas of high compliance, we\'ve got your back.',
};

export default function Page() {
  return <SpecialProjectsContent />;
}

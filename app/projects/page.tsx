import type { Metadata } from 'next';
import ProjectsContent from './projects-content';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore our portfolio of commercial flooring projects across Australia.',
};

export default function Page() {
  return <ProjectsContent />;
}

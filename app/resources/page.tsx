import type { Metadata } from 'next';
import ResourcesContent from './resources-content';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'A content powerhouse of resources and tips from our experts to elevate your commercial floors.',
};

export default function Page() {
  return <ResourcesContent />;
}

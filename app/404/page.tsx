import type { Metadata } from 'next';
import NotFoundContent from './content';

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'The page you are looking for could not be found.',
};

export default function Page() {
  return <NotFoundContent />;
}

import type { Metadata } from 'next';
import CareersContent from './careers-content';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the Premrest team — explore career opportunities in commercial flooring and facilities management.',
};

export default function Page() {
  return <CareersContent />;
}

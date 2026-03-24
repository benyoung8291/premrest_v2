import type { Metadata } from 'next';
import DentalPracticesContent from './dental-practices-content';

export const metadata: Metadata = {
  title: 'Dental Practices | Floor Cleaning | Premrest',
  description:
    'Proactive periodic floor cleaning for dental practices. Create a healthy environment and build a practice patients keep coming back to.',
};

export default function Page() {
  return <DentalPracticesContent />;
}

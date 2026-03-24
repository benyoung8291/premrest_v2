import type { Metadata } from 'next';
import FacilityManagersContent from './facility-managers-content';

export const metadata: Metadata = {
  title: 'Premrest | Facility Managers | Commercial Floor Cleaning & Installs',
  description: 'Fuss-free floors that run in the background \u2014 not your to-do list.',
};

export default function Page() {
  return <FacilityManagersContent />;
}

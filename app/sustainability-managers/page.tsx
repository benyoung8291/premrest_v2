import type { Metadata } from 'next';
import SustainabilityManagersContent from './sustainability-managers-content';

export const metadata: Metadata = {
  title: 'Premrest | Sustainability Managers | Commercial Floor Cleaning & Installs',
  description: 'Strengthen your ESG position with sustainable floor care.',
};

export default function Page() {
  return <SustainabilityManagersContent />;
}

import type { Metadata } from 'next';
import BuildingManagersContent from './building-managers-content';

export const metadata: Metadata = {
  title: 'Premrest | Building Managers | Commercial Floor Cleaning & Installs',
  description: 'Keep your common areas and clients\u2019 floors sharp \u2014 without the complaints.',
};

export default function Page() {
  return <BuildingManagersContent />;
}

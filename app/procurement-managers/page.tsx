import type { Metadata } from 'next';
import ProcurementManagersContent from './procurement-managers-content';

export const metadata: Metadata = {
  title: 'Premrest | Procurement Managers | Commercial Floor Cleaning & Installs',
  description: 'Scale consistent floor care and streamline your contracts nationally.',
};

export default function Page() {
  return <ProcurementManagersContent />;
}

import type { Metadata } from 'next';
import InstallsContent from './installs-content';

export const metadata: Metadata = {
  title: 'Premrest | Commercial Floor Installs',
  description: 'Level up your commercial space with floors that stun with every step.',
};

export default function Page() {
  return <InstallsContent />;
}

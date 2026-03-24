import type { Metadata } from 'next';
import ShawContractContent from './content';

export const metadata: Metadata = {
  title: 'ShawContract | Premrest',
  description:
    'ShawContract have partnered with Premrest to deliver a maintenance plan that ensures the longevity, care and warranty of your ShawContract carpets.',
};

export default function Page() {
  return <ShawContractContent />;
}

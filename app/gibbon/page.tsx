import type { Metadata } from 'next';
import GibbonContent from './content';

export const metadata: Metadata = {
  title: 'Gibbon Architectural | Premrest',
  description:
    'Gibbon Architectural have partnered with Premrest to deliver a maintenance plan that ensures the longevity, care and warranty of your Modulyss, SynSisal & Tretford carpets.',
};

export default function Page() {
  return <GibbonContent />;
}

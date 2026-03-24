import type { Metadata } from 'next';
import ImpactCalculatorContent from './content';

export const metadata: Metadata = {
  title: 'Impact Calculator | Premrest',
  description:
    'Calculate the sustainability impact of switching to low moisture encapsulation cleaning. See water, energy, and waste savings.',
};

export default function Page() {
  return <ImpactCalculatorContent />;
}

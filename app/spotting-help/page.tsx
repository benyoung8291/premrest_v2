import type { Metadata } from 'next';
import SpottingHelpContent from './spotting-help-content';

export const metadata: Metadata = {
  title: 'Spotting Help | Premrest',
  description: 'Guide to using Premrest spot cleaning products for carpet stain removal.',
};

export default function Page() {
  return <SpottingHelpContent />;
}

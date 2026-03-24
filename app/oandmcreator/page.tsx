import type { Metadata } from 'next';
import OandMCreatorContent from './content';

export const metadata: Metadata = {
  title: 'O&M Creator | Premrest',
  description:
    'Create Operations & Maintenance documents for floor care projects. Compile PDFs with cover pages, group headers, and table of contents.',
};

export default function Page() {
  return <OandMCreatorContent />;
}

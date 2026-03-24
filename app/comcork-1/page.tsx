import type { Metadata } from 'next';
import ComCork1Content from './comcork-1-content';

export const metadata: Metadata = {
  title: 'ComCork | Natural Cork Flooring | Premrest',
  description:
    'Fuss-free floors that run in the background — not your to-do list.',
};

export default function Page() {
  return <ComCork1Content />;
}

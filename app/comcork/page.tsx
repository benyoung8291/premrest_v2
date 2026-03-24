import type { Metadata } from 'next';
import ComCorkContent from './comcork-content';

export const metadata: Metadata = {
  title: 'ComCork Supply & Installation | Natural Cork Wall Tiles Australia | Premrest',
  description:
    'ComCork decorative cork wall & ceiling tiles in 29 designer colours. Supplied and installed nationwide by Premrest. Natural, acoustic, sustainable. Call 1300 207 915.',
};

export default function Page() {
  return <ComCorkContent />;
}

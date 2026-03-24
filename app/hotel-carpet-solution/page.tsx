import type { Metadata } from 'next';
import HotelCarpetContent from './hotel-carpet-content';

export const metadata: Metadata = {
  title: 'Hotel Carpet Solution | Premrest',
  description:
    'Give your commercial floors a new lease on life, with no problems swept under the carpet.',
};

export default function Page() {
  return <HotelCarpetContent />;
}

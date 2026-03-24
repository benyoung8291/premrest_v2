import type { Metadata } from 'next';
import SustainabilityContent from './sustainability-content';

export const metadata: Metadata = {
  title: 'Premrest | Commercial Floor Sustainability',
  description: "Because flooring shouldn't just look good, it should do good too.",
};

export default function Page() {
  return <SustainabilityContent />;
}

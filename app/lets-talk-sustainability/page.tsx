import type { Metadata } from 'next';
import LetsTalkSustainabilityContent from './content';

export const metadata: Metadata = {
  title: "Let's Talk Sustainability",
  description: "Let's Talk Sustainability — a podcast by Premrest exploring sustainable practices in facilities management.",
};

export default function Page() {
  return <LetsTalkSustainabilityContent />;
}

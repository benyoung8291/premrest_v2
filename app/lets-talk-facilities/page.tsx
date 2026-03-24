import type { Metadata } from 'next';
import LetsTalkFacilitiesContent from './content';

export const metadata: Metadata = {
  title: "Let's Talk Facilities",
  description: "Let's Talk Facilities — a podcast by Premrest exploring all things facilities management.",
};

export default function Page() {
  return <LetsTalkFacilitiesContent />;
}

import type { Metadata } from 'next';
import HomePage from './homepage';

export const metadata: Metadata = {
  title: 'Premrest — Beautiful Flooring | Commercial Floor Experts',
  description: "Australia's go-to for commercial floor care, cleaning and installing floors from small spaces to multi-level projects, with quality that flaws even the harshest critics.",
};

export default function Page() {
  return <HomePage />;
}

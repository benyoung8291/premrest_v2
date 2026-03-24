import type { Metadata } from 'next';
import BuildersDevelopersContent from './builders-developers-content';

export const metadata: Metadata = {
  title: 'Premrest | Builders & Developers Managers | Commercial Floor Cleaning & Installs',
  description: 'Floors on time, budget, and made to last - with sustainability built in.',
};

export default function Page() {
  return <BuildersDevelopersContent />;
}

import type { Metadata } from 'next';
import JLLContent from './content';

export const metadata: Metadata = {
  title: 'JLL | Commercial Floor Cleaning | Premrest',
  description:
    'Premrest is the go-to for commercial floor cleaning. National service provider with Corrigo Pro and Jaggaer/Bravo integration.',
};

export default function Page() {
  return <JLLContent />;
}

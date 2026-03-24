import type { Metadata } from 'next';
import ContactContent from './contact-content';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Let's build better floors, together.",
};

export default function ContactPage() {
  return <ContactContent />;
}

import type { Metadata } from 'next';
import FeedbackContent from './feedback-content';

export const metadata: Metadata = {
  title: 'Feedback | Premrest',
  description: 'Share your feedback with Premrest. We value your input to help us improve our services.',
};

export default function Page() {
  return <FeedbackContent />;
}

import type { Metadata } from 'next';
import SearchContent from './search-content';

export const metadata: Metadata = {
  title: 'Search Results | Premrest',
  description: 'Search the Premrest website for information about our floor cleaning and installation services.',
};

export default function Page() {
  return <SearchContent />;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Results',
  description: '',
};

export default function Page() {
  return (
    <>
      {/* Page-specific styles */}
      
      {/* Webflow page content - exact export */}
      <div dangerouslySetInnerHTML={{ __html: `
  <div class="w-container">
    <h1>Search results</h1>
    <form action="/search" class="w-form"><label for="search">Search</label><input class="w-input" maxlength="256" name="query" placeholder="Search…" type="search" id="search" required=""><input type="submit" class="w-button" value="Search"></form>
  </div>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=675661387278edf4cf92de17" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="/js/webflow.js" type="text/javascript"></script>
` }} />
    </>
  );
}

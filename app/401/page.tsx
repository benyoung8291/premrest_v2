import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Protected page',
  description: '',
};

export default function Page() {
  return (
    <>
      {/* Page-specific styles */}
      
      {/* Webflow page content - exact export */}
      <div dangerouslySetInnerHTML={{ __html: `
  <div class="utility-page_component">
    <div class="utility-page_wrapper w-password-page w-form">
      <form action="/.wf_auth" method="post" id="email-form" name="email-form" data-name="Email Form" class="utility-page_form w-password-page" data-wf-page-id="675661387278edf4cf92de7d" data-wf-element-id="60d3fa3a5a19c1169cd58c4100000000000c"><img width="106" src="https://d3e54v103j8qbb.cloudfront.net/static/utility-lock.ae54711958.svg" alt="" class="utility-page_image">
        <h3>Protected Page</h3><input class="form_input w-password-page w-input" autofocus="true" maxlength="256" name="pass" data-name="field" placeholder="Enter your password" type="password" id="pass"><input type="submit" data-wait="Please wait..." class="button w-password-page w-button" value="Submit">
        <div class="form_message-error w-password-page w-form-fail">
          <div>Incorrect password. Please try again.</div>
        </div>
        <div style="display:none" class="w-password-page w-embed w-script"><input type="hidden" name="path" value="<%WF_FORM_VALUE_PATH%>"><input type="hidden" name="page" value="<%WF_FORM_VALUE_PAGE%>"></div>
        <div style="display:none" class="w-password-page w-embed w-script">
          <script type="application/javascript">(function _handlePasswordPageOnload() {
	  if (/[?&]e=1(&|$)/.test(document.location.search)) {
	    document.querySelector('.w-password-page.w-form-fail').style.display = 'block';
	  }
	})()</script>
        </div>
      </form>
    </div>
  </div>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=675661387278edf4cf92de17" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="/js/webflow.js" type="text/javascript"></script>
` }} />
    </>
  );
}

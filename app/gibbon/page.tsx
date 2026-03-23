import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Gibbon Architectural',
  description: '',
};

export default function Page() {
  return (
    <>
      {/* Page-specific styles */}
      <style dangerouslySetInnerHTML={{ __html: `
/* Make text look crisper and more legible in all browsers */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
/* Focus state style for keyboard navigation for the focusable elements */
*[tabindex]:focus-visible,
  input[type="file"]:focus-visible {
   outline: 0.125rem solid #4d65ff;
   outline-offset: 0.125rem;
}
/* Set color style to inherit */
.inherit-color * {
    color: inherit;
}
/* Get rid of top margin on first element in any rich text element */
.w-richtext > :not(div):first-child, .w-richtext > div:first-child > :first-child {
  margin-top: 0 !important;
}
/* Get rid of bottom margin on last element in any rich text element */
.w-richtext>:last-child, .w-richtext ol li:last-child, .w-richtext ul li:last-child {
	margin-bottom: 0 !important;
}
/* Make sure containers never lose their center alignment */
.container-medium,.container-small, .container-large {
	margin-right: auto !important;
  margin-left: auto !important;
}
/* 
Make the following elements inherit typography styles from the parent and not have hardcoded values. 
Important: You will not be able to style for example "All Links" in Designer with this CSS applied.
Uncomment this CSS to use it in the project. Leave this message for future hand-off.
*/
/*
a,
.w-input,
.w-select,
.w-tab-link,
.w-nav-link,
.w-dropdown-btn,
.w-dropdown-toggle,
.w-dropdown-link {
  color: inherit;
  text-decoration: inherit;
  font-size: inherit;
}
*/
/* Apply "..." after 3 lines of text */
.text-style-3lines {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}
/* Apply "..." after 2 lines of text */
.text-style-2lines {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
/* These classes are never overwritten */
.hide {
  display: none !important;
}
@media screen and (max-width: 991px) {
    .hide, .hide-tablet {
        display: none !important;
    }
}
  @media screen and (max-width: 767px) {
    .hide-mobile-landscape{
      display: none !important;
    }
}
  @media screen and (max-width: 479px) {
    .hide-mobile{
      display: none !important;
    }
}
.margin-0 {
  margin: 0rem !important;
}
.padding-0 {
  padding: 0rem !important;
}
.spacing-clean {
padding: 0rem !important;
margin: 0rem !important;
}
.margin-top {
  margin-right: 0rem !important;
  margin-bottom: 0rem !important;
  margin-left: 0rem !important;
}
.padding-top {
  padding-right: 0rem !important;
  padding-bottom: 0rem !important;
  padding-left: 0rem !important;
}
.margin-right {
  margin-top: 0rem !important;
  margin-bottom: 0rem !important;
  margin-left: 0rem !important;
}
.padding-right {
  padding-top: 0rem !important;
  padding-bottom: 0rem !important;
  padding-left: 0rem !important;
}
.margin-bottom {
  margin-top: 0rem !important;
  margin-right: 0rem !important;
  margin-left: 0rem !important;
}
.padding-bottom {
  padding-top: 0rem !important;
  padding-right: 0rem !important;
  padding-left: 0rem !important;
}
.margin-left {
  margin-top: 0rem !important;
  margin-right: 0rem !important;
  margin-bottom: 0rem !important;
}
.padding-left {
  padding-top: 0rem !important;
  padding-right: 0rem !important;
  padding-bottom: 0rem !important;
}
.margin-horizontal {
  margin-top: 0rem !important;
  margin-bottom: 0rem !important;
}
.padding-horizontal {
  padding-top: 0rem !important;
  padding-bottom: 0rem !important;
}
.margin-vertical {
  margin-right: 0rem !important;
  margin-left: 0rem !important;
}
.padding-vertical {
  padding-right: 0rem !important;
  padding-left: 0rem !important;
}
` }} />
      {/* Webflow page content - exact export */}
      <div dangerouslySetInnerHTML={{ __html: `
  <div class="page-wrapper">
    <div class="global-styles w-embed">
      <style>
/* Make text look crisper and more legible in all browsers */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
/* Focus state style for keyboard navigation for the focusable elements */
*[tabindex]:focus-visible,
  input[type="file"]:focus-visible {
   outline: 0.125rem solid #4d65ff;
   outline-offset: 0.125rem;
}
/* Set color style to inherit */
.inherit-color * {
    color: inherit;
}
/* Get rid of top margin on first element in any rich text element */
.w-richtext > :not(div):first-child, .w-richtext > div:first-child > :first-child {
  margin-top: 0 !important;
}
/* Get rid of bottom margin on last element in any rich text element */
.w-richtext>:last-child, .w-richtext ol li:last-child, .w-richtext ul li:last-child {
	margin-bottom: 0 !important;
}
/* Make sure containers never lose their center alignment */
.container-medium,.container-small, .container-large {
	margin-right: auto !important;
  margin-left: auto !important;
}
/* 
Make the following elements inherit typography styles from the parent and not have hardcoded values. 
Important: You will not be able to style for example "All Links" in Designer with this CSS applied.
Uncomment this CSS to use it in the project. Leave this message for future hand-off.
*/
/*
a,
.w-input,
.w-select,
.w-tab-link,
.w-nav-link,
.w-dropdown-btn,
.w-dropdown-toggle,
.w-dropdown-link {
  color: inherit;
  text-decoration: inherit;
  font-size: inherit;
}
*/
/* Apply "..." after 3 lines of text */
.text-style-3lines {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}
/* Apply "..." after 2 lines of text */
.text-style-2lines {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
/* These classes are never overwritten */
.hide {
  display: none !important;
}
@media screen and (max-width: 991px) {
    .hide, .hide-tablet {
        display: none !important;
    }
}
  @media screen and (max-width: 767px) {
    .hide-mobile-landscape{
      display: none !important;
    }
}
  @media screen and (max-width: 479px) {
    .hide-mobile{
      display: none !important;
    }
}
.margin-0 {
  margin: 0rem !important;
}
.padding-0 {
  padding: 0rem !important;
}
.spacing-clean {
padding: 0rem !important;
margin: 0rem !important;
}
.margin-top {
  margin-right: 0rem !important;
  margin-bottom: 0rem !important;
  margin-left: 0rem !important;
}
.padding-top {
  padding-right: 0rem !important;
  padding-bottom: 0rem !important;
  padding-left: 0rem !important;
}
.margin-right {
  margin-top: 0rem !important;
  margin-bottom: 0rem !important;
  margin-left: 0rem !important;
}
.padding-right {
  padding-top: 0rem !important;
  padding-bottom: 0rem !important;
  padding-left: 0rem !important;
}
.margin-bottom {
  margin-top: 0rem !important;
  margin-right: 0rem !important;
  margin-left: 0rem !important;
}
.padding-bottom {
  padding-top: 0rem !important;
  padding-right: 0rem !important;
  padding-left: 0rem !important;
}
.margin-left {
  margin-top: 0rem !important;
  margin-right: 0rem !important;
  margin-bottom: 0rem !important;
}
.padding-left {
  padding-top: 0rem !important;
  padding-right: 0rem !important;
  padding-bottom: 0rem !important;
}
.margin-horizontal {
  margin-top: 0rem !important;
  margin-bottom: 0rem !important;
}
.padding-horizontal {
  padding-top: 0rem !important;
  padding-bottom: 0rem !important;
}
.margin-vertical {
  margin-right: 0rem !important;
  margin-left: 0rem !important;
}
.padding-vertical {
  padding-right: 0rem !important;
  padding-left: 0rem !important;
}
</style>
    </div>
    <div class="nav_fixed">
      <div class="residential_commercial_bar"></div>
      <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="nav_component w-nav">
        <div class="nav_header">
          <div class="nav_container">
            <div class="nav_offcanvas_menu">
              <div class="nav_menu_block">
                <div class="nav_menu_links_wrapper">
                  <a href="cleaning.html" class="nav_menu_links w-inline-block">
                    <div class="hamburger-links">Cleaning</div>
                  </a>
                  <a href="installs.html" class="nav_menu_links w-inline-block">
                    <div class="hamburger-links">Installs</div>
                  </a>
                  <a href="special-projects.html" class="nav_menu_links w-inline-block">
                    <div class="hamburger-links">Special projects</div>
                  </a>
                  <a href="sustainability.html" class="nav_menu_links w-inline-block">
                    <div class="hamburger-links">Sustainability</div>
                  </a>
                  <a href="resources.html" class="nav_menu_links w-inline-block">
                    <div class="hamburger-links">Resources</div>
                  </a>
                  <a href="contact.html" class="nav_menu_links w-inline-block">
                    <div class="hamburger-links">Contact</div>
                  </a>
                  <a href="about.html" class="nav_menu_links w-inline-block">
                    <div class="hamburger-links">About</div>
                  </a>
                  <div class="nav_contact_wrapper">
                    <a href="tel:1300207915" class="nav_contact_text">1300 207 915</a>
                    <a href="mailto:office@premrest.com.au" class="nav_contact_text">office@premrest.com.au</a>
                    <a href="https://maps.app.goo.gl/BotU9K1ahvLwXa1z7" target="_blank" class="nav_contact_text">1/99 Heyington Ave, Thomastown VIC 3074</a>
                  </div>
                </div>
                <div class="menu_block_overlay"></div>
              </div>
            </div>
            <div class="nav_block_logo">
              <a href="index.html" class="nav_brand w-nav-brand">
                <div class="logo logo-charcoal w-embed">
                  <?xml version="1.0" encoding="UTF-8"?>
                  <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewbox="0 0 223.7671322 34.5399933">
                    <path class="st0" d="M30.9800005,12.4699993c0,7.6499996-5.8600006,12.4699993-15.0699997,12.4699993h-4.7700005v7.2700005c0,.4700012-.3799992.8499985-.8500004.8499985H.8500004c-.4700003,0-.8500004-.3800011-.8500004-.8499985V4.5299997C0,2.0299997,2.0299997,0,4.5299997,0h11.3899994c9.2099991,0,15.0699997,4.8199997,15.0699997,12.4700012l-.0099983-.0000019ZM19.7399988,12.4699993c0-2.4099998-1.4599991-3.8700008-4.5300007-3.8700008h-4.0599995v7.75h4.0599995c3.0699997,0,4.5300007-1.4599991,4.5300007-3.8699989v-.0100002Z"></path>
                    <path class="st0" d="M51.3900003,7.6199989v7.6100006c0,.5100002-.4399986.8999996-.9399986.8500004s-.9399986-.0699997-1.4199982-.0699997c-3.2099991,0-5.4799995,1.460001-5.4799995,5.5699997v10.6299992c0,.4700012-.3800011.8499985-.8499985.8499985h-8.9700012c-.4700012,0-.8499985-.3800011-.8499985-.8499985V8.0799999c0-.4699993.3800011-.8500004.8499985-.8500004h8.0999985c.6599998,0,1.2000008.5400009,1.2000008,1.2000008v1.5900002c1.7299995-1.9899998,4.2999992-3.0699997,7.4799995-3.2399998.4800034-.0300007.8799973.3700008.8799973.8500004v-.0100021Z"></path>
                    <path class="st0" d="M127.0200052,18.3199997v13.8899994c0,.4700012-.3800049.8499985-.8500061.8499985h-8.9700012c-.4700012,0-.8500061-.3800011-.8500061-.8499985v-12.0400009c0-3.2099991-1.1799927-4.4400005-2.8799973-4.4400005-1.8899994,0-3.3499985,1.2800007-3.3499985,4.7299995v11.7600002c0,.4700012-.3799973.8499985-.8499985.8499985h-8.9700012c-.4700012,0-.8499985-.3800011-.8499985-.8499985v-12.0400009c0-3.2099991-1.0899963-4.4400005-2.8799973-4.4400005-1.8899994,0-3.3499985,1.2800007-3.3499985,4.7299995v11.7600002c0,.4700012-.3799973.8499985-.8499985.8499985h-8.9700012c-.4700012,0-.8499985-.3800011-.8499985-.8499985V8.0999966c0-.4699993.3799973-.8500004.8499985-.8500004h8.4499969c.4700012,0,.8499985.3799992.8499985.8500004v1.5599995c1.9400024-1.9400005,4.4899979-2.8800011,7.3199997-2.8800011,3.0199966,0,5.6900024.9899998,7.5,3.1499996.3099976.3700008.8799973.3899994,1.2200012.0499992,2.0400009-2.0499992,4.8000031-3.2000008,7.9899979-3.2000008,5.8600006,0,10.3000031,3.4500008,10.3000031,11.5699997l-.0099945-.0299931Z"></path>
                    <path class="st0" d="M148.2799997,7.6199989v7.6100006c0,.5100002-.4400024.8999996-.9400024.8500004s-.9400024-.0699997-1.4199982-.0699997c-3.2100067,0-5.4799957,1.460001-5.4799957,5.5699997v10.6299992c0,.4700012-.3800049.8499985-.8500061.8499985h-8.9700012c-.4700012,0-.8500061-.3800011-.8500061-.8499985V8.0799999c0-.4699993.3800049-.8500004.8500061-.8500004h8.4499969c.4700012,0,.8500061.3799992.8500061.8500004v1.9300003c1.7299957-1.9899998,4.3000031-3.0699997,7.4799957-3.2399998.4799957-.0300007.8800049.3700008.8800049.8499985Z"></path>
                    <path class="st0" d="M177.0099955,22.6199989h-17.1600037c.7599945,1.9799995,2.5500031,3.0200005,5.1999969,3.0200005,2.0899963,0,3.3600006-.4799995,4.8000031-1.4700012.3399963-.2400017.8000031-.2000008,1.1000061.0999985l4.4700012,4.5c.3300018.3400002.3300018.8899994-.0099945,1.2200012-2.4700012,2.3400002-5.9400024,3.5400009-10.6799927,3.5400009-9.4900055,0-15.6399994-5.7200012-15.6399994-13.4200001s6.2799988-13.3700008,14.6399994-13.3700008c7.6499939,0,14.2200012,4.6300011,14.2200012,13.3699989,0,.5100002-.0399933,1.1299992-.0899963,1.7099991-.0299988.4399986-.3999939.7900009-.8500061.7900009l-.0000153.0100021ZM160.8399973,17.4699993h7.1399994c-.4299927-2.1700001-1.9799957-3.4500008-4.1600037-3.4500008-1.7700043,0-3.0899963.8099995-3.7700043,2.2399998-.2700043.5599995.1600037,1.2099991.7799988,1.2099991l.0100098.0000019Z"></path>
                    <path class="st0" d="M189.1499949,15.25c0-.6100006.7599945-1.2299995,3.5-1.2299995,1.8399963,0,4.0200043.3099995,6.25,1.2900009.5599976.25,1.1900024-.1599998,1.1900024-.7800007v-6.1200008c0-.3899994-.2599945-.7399998-.6399994-.8299999-2.1699982-.5499992-4.6000061-.8299999-6.9499969-.8299999-8.6900024,0-13.2299957,3.9699993-13.2299957,8.8299999,0,10.3500004,14.8800049,6.8000011,14.8800049,9.4499989,0,.75-.7100067,1.2299995-3.3099976,1.2299995-2.7599945,0-5.8600006-.6800003-8.2400055-1.8800011-.4299927-.2200012-.9600067,0-1.1499939.4500008l-2.2599945,5.4399986c-.1799927.4199982.0099945.9099998.4299927,1.0999985,2.7200012,1.2999992,6.9299927,2.1699982,10.9900055,2.1699982,8.9700012,0,13.3699951-4.0600014,13.3699951-8.7399979,0-10.3400002-14.8300018-6.8500004-14.8300018-9.5400009l-.0000153-.0099945Z"></path>
                    <path class="st0" d="M223.7200022,31.4599991c.1499939.4300003-.0700073.8899994-.4900055,1.0699997-1.5899963.6899986-3.6799927,1-5.8300018,1-7.1300049,0-11.2899933-3.3499985-11.2899933-10.4899979v-7.1399994h-2.2299957c-.4700012,0-.8500061-.3799992-.8500061-.8500004v-6.4499989c0-.4699993.3800049-.8500004.8500061-.8500004h2.2299957V.8500023C206.1100016.380002,206.4900064.0000019,206.9600077.0000019h8.9700012c.4700012,0,.8500061.3800001.8500061.8500004v6.8999996h4.4400024c.4700012,0,.8500061.3799992.8500061.8500004v6.4500008c0,.4699993-.3800049.8500004-.8500061.8500004h-4.4400024v7.0500011c0,1.6100006.9499969,2.5,2.2200012,2.5.5399933,0,1.0800018-.0999985,1.5899963-.2900009.4600067-.1800003.9799957.0400009,1.1399994.5l1.9900055,5.7799988-.0000153.0199966Z"></path>
                    <path class="st0" d="M80.000001,22.6199989h-17.1600037c.7600021,1.9799995,2.5500031,3.0200005,5.1999969,3.0200005,2.0899963,0,3.3600006-.4799995,4.8000031-1.4700012.3399963-.2400017.8000031-.2000008,1.0999985.0999985l4.4700012,4.5c.3300018.3400002.3300018.8899994-.0100021,1.2200012-2.4700012,2.3400002-5.9400024,3.5400009-10.6800003,3.5400009-9.4899979,0-15.6399994-5.7200012-15.6399994-13.4200001s6.2799988-13.3700008,14.6399994-13.3700008c7.6500015,0,14.2200012,4.6300011,14.2200012,13.3699989,0,.5100002-.0400009,1.1299992-.0899963,1.7099991-.0299988.4399986-.4000015.7900009-.8499985.7900009v.0100021ZM63.8300028,17.4699993h7.1399994c-.4300003-2.1700001-1.9800034-3.4500008-4.1600037-3.4500008-1.7699966,0-3.0899963.8099995-3.7699966,2.2399998-.2699966.5599995.1600037,1.2099991.7799988,1.2099991l.0100021.0000019Z"></path>
                  </svg>
                </div>
              </a>
            </div>
            <div class="nav_block flex-right">
              <nav role="navigation" class="nav_menu_desktop w-nav-menu">
                <a href="cleaning.html" class="nav_menu_link w-nav-link">Cleaning</a>
                <a href="installs.html" class="nav_menu_link w-nav-link">Installs</a>
                <a href="sustainability.html" class="nav_menu_link w-nav-link">Sustainability</a>
                <a href="resources.html" class="nav_menu_link w-nav-link">Resources</a>
                <a href="tel:1300207915" class="button button-nav w-button">1300 207 915</a>
              </nav>
              <a href="tel:1300207915" class="call-icon-link w-inline-block">
                <div class="call-icon-container">
                  <div class="call-button-responsive-header w-embed">
                    <?xml version="1.0" encoding="iso-8859-1"?>
                    
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewbox="0 0 473.806 473.806" xml:space="preserve">
                      <g>
                        <g>
                          <path d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4
			c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8
			c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6
			c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5
			c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26
			c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9
			c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806
			C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20
			c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6
			c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1
			c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3
			c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5
			c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8
			c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9
			l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1
			C420.456,377.706,420.456,388.206,410.256,398.806z"></path>
                          <path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2
			c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11
			S248.656,111.506,256.056,112.706z"></path>
                          <path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11
			c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2
			c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </a>
              <div data-w-id="79a309b0-d64c-c9a8-fed3-3758edb6fc88" class="hamburger_menu">
                <div data-w-id="79a309b0-d64c-c9a8-fed3-3758edb6fc89" class="hamburger_bar"></div>
                <div data-w-id="79a309b0-d64c-c9a8-fed3-3758edb6fc8a" class="hamburger_bar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main class="main-wrapper">
      <section class="gibbon_hero_section">
        <div class="padding-global padding-section-large">
          <div class="container-xlarge">
            <div class="grid_wrapper">
              <div class="grid-2-columns">
                <div id="w-node-d595f060-1b2a-ac13-ce51-fafafd6e1594-ad6146c2" class="grid-column"><img src="/images/GibbonxPremrest.png" loading="lazy" sizes="(max-width: 479px) 100vw, 352.9375px" srcset="/images/GibbonxPremrest-p-500.png 500w, /images/GibbonxPremrest-p-800.png 800w, /images/GibbonxPremrest-p-1080.png 1080w, /images/GibbonxPremrest.png 1500w" alt="" class="shawcontract_premrest_logo">
                  <h1>Maintain your carpet investment</h1>
                  <p id="w-node-d595f060-1b2a-ac13-ce51-fafafd6e1598-ad6146c2" class="text-size-large home-hero-subheadline">Gibbon Architectural have partnered with Premrest, a national service provider, specialising in floor cleaning, to deliver a maintenance plan that ensures the longevity, care and warranty of your Modulyss, SynSisal &amp; Tretford carpets.<br></p>
                  <p>Premrest specialises in Encapsulation Cleaning Technology, ideal for Modulyss, SynSisal &amp; Tretford carpets. Using an eco-friendly cleaning agent, this system encapsulates and crystallises soils, spills, oils and bacteria in the carpet fibres, allowing for easy removal with routine vacuuming.<br><br>Premrest Encapsulation features AFT (Active Film Technology) to help block oily binders that cause rapid resoiling, protecting your carpet. This process is both effective and sustainable, using up to 76% less water and leaving carpets dry within minutes, ready for immediate use.<br><br>To book in an encapsulation carpet clean, please fill out our contact form.</p>
                  <a href="#gibbon-architectural-form" class="button w-button">Get in touch</a>
                </div>
                <div id="w-node-d595f060-1b2a-ac13-ce51-fafafd6e15a7-ad6146c2" class="grid-column">
                  <div class="column-image-block"><img src="/images/Untitleddesign.webp" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, 45vw" srcset="/images/Untitleddesign-p-500.webp 500w, /images/Untitleddesign-p-800.webp 800w, /images/Untitleddesign-p-1080.webp 1080w, /images/Untitleddesign.webp 1500w" alt="people inside a common workspace" class="section-image section-image-right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="gibbon_streetsahead_section">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid_wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <div id="w-node-d595f060-1b2a-ac13-ce51-fafafd6e15b0-ad6146c2" class="column-image-block"><img src="/images/Premrest_ShawContract_Blob.webp" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, 43vw" srcset="/images/Premrest_ShawContract_Blob-p-500.webp 500w, /images/Premrest_ShawContract_Blob-p-800.webp 800w, /images/Premrest_ShawContract_Blob-p-1080.webp 1080w, /images/Premrest_ShawContract_Blob-p-1600.webp 1600w, /images/Premrest_ShawContract_Blob.webp 2000w" alt="" class="section-image"><img src="/images/Tagline_Spinning.gif" loading="lazy" alt="" class="shawcontract_spotthedifference"></div>
                </div>
                <div class="grid-column">
                  <h2>Streets ahead in cleaning office floors.</h2>
                  <p>Don’t put up with carpets that aren’t clean. Deal direct with the company general cleaners and manufacturers turn to when issues arise with commercial floor cleaning. <br><br>When it comes to cleaning floors, we work in the art of the possible.</p>
                  <h4>Our core services</h4>
                  <ul role="list">
                    <li>
                      <p>Carpet Cleaning</p>
                    </li>
                    <li>
                      <p>Hard Floor Cleaning</p>
                    </li>
                    <li>
                      <p>Furniture Cleaning</p>
                    </li>
                  </ul>
                  <p>Additional services:</p>
                  <ul role="list">
                    <li>
                      <p>Floor covering supply &amp; install (VIC)</p>
                    </li>
                    <li>
                      <p>Special Projects (Consulting, Slip test rectifications, Fit-for-purpose flooring selection)</p>
                    </li>
                  </ul>
                  <a id="w-node-d595f060-1b2a-ac13-ce51-fafafd6e15d0-ad6146c2" href="#gibbon-architectural-form" class="button w-button">Get in touch</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gibbon_benefits_section">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid_wrapper">
              <div class="grid-3-columns">
                <div id="w-node-d595f060-1b2a-ac13-ce51-fafafd6e15d7-ad6146c2" class="grid-column grid-column-top">
                  <div id="w-node-d595f060-1b2a-ac13-ce51-fafafd6e15d8-ad6146c2" class="benefits-images"><img src="/images/image-asset.webp" loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, 26vw" srcset="/images/image-asset-p-500.webp 500w, /images/image-asset-p-800.webp 800w, /images/image-asset.webp 1000w" alt="" class="shawcontract_benefits_images"></div>
                  <h4>Sustainability + Net Zero<br></h4>
                  <div class="accordion-container">
                    <div data-delay="0" data-hover="false" data-w-id="d595f060-1b2a-ac13-ce51-fafafd6e15de" style="height:40px" class="accordion-item w-dropdown">
                      <div class="accordion-toggle w-dropdown-toggle">
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                        <div class="accordion-title">Our net zero commitment</div>
                      </div>
                      <nav class="dropdown-list w-dropdown-list">
                        <p>Our business operations are third party measured and certified as carbon neutral.<br><br>‍<strong>We have partnered with Trace to measure and offset our carbon footprint.</strong> <br><br>While this may be a small step, it is our first and one of many as we make the changes necessary to reduce and where possible eliminate our carbon footprint.</p>
                      </nav>
                    </div>
                    <div data-delay="0" data-hover="false" data-w-id="d595f060-1b2a-ac13-ce51-fafafd6e15ef" style="height:40px" class="accordion-item w-dropdown">
                      <div class="accordion-toggle w-dropdown-toggle">
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                        <div class="accordion-title">100% waste water eradication</div>
                      </div>
                      <nav class="dropdown-list w-dropdown-list">
                        <p>Our carpet cleaning method eliminates all contaminated waste water.</p>
                      </nav>
                    </div>
                    <div data-delay="0" data-hover="false" data-w-id="d595f060-1b2a-ac13-ce51-fafafd6e15f7" style="height:40px" class="accordion-item w-dropdown">
                      <div class="accordion-toggle w-dropdown-toggle">
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                        <div class="accordion-title">67% reduction in energy usage</div>
                      </div>
                      <nav class="dropdown-list w-dropdown-list">
                        <p>When compared to hot water extraction (aka steam cleaning) our method uses 67% less electricity. This is due to our machines being more efficient and the elimination of hot water.</p>
                      </nav>
                    </div>
                    <div data-delay="0" data-hover="false" data-w-id="d595f060-1b2a-ac13-ce51-fafafd6e15ff" style="height:40px" class="accordion-item w-dropdown">
                      <div class="accordion-toggle w-dropdown-toggle">
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                        <div class="accordion-title">76% reduction in water usage</div>
                      </div>
                      <nav class="dropdown-list w-dropdown-list">
                        <p>We use low moisture cleaning methods that significantly reduce water usage while still ensuring carpets are kept beautiful.</p>
                      </nav>
                    </div>
                  </div>
                </div>
                <div id="w-node-d595f060-1b2a-ac13-ce51-fafafd6e1607-ad6146c2" class="grid-column grid-column-top">
                  <div class="benefits-images"><img src="/images/ColinInspecting-2.webp" loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, 26vw" srcset="/images/ColinInspecting-2-p-500.webp 500w, /images/ColinInspecting-2-p-800.webp 800w, /images/ColinInspecting-2.webp 1000w" alt="" class="shawcontract_benefits_images"></div>
                  <h4>Floor Consulting<br></h4>
                  <div class="accordion-container">
                    <div data-delay="0" data-hover="false" data-w-id="d595f060-1b2a-ac13-ce51-fafafd6e160e" style="height:40px" class="accordion-item w-dropdown">
                      <div class="accordion-toggle w-dropdown-toggle">
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                        <div class="accordion-title">Special projects</div>
                      </div>
                      <nav class="dropdown-list w-dropdown-list">
                        <p>Your quirky problems are our exciting projects. We dive into the unknown with a zest for creative solutions, tackling the tasks that don’t quite fit the mould of regular trades.</p>
                      </nav>
                    </div>
                    <div data-delay="0" data-hover="false" data-w-id="d595f060-1b2a-ac13-ce51-fafafd6e1616" style="height:40px" class="accordion-item w-dropdown">
                      <div class="accordion-toggle w-dropdown-toggle">
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                        <div class="accordion-title">Slip test retifications</div>
                      </div>
                      <nav class="dropdown-list w-dropdown-list">
                        <p>Safety with a twinkle – that’s our mantra. We swoop in to identify and fix slip hazards, ensuring your floors are as safe as they are snazzy.</p>
                      </nav>
                    </div>
                    <div data-delay="0" data-hover="false" data-w-id="d595f060-1b2a-ac13-ce51-fafafd6e161e" style="height:40px" class="accordion-item w-dropdown">
                      <div class="accordion-toggle w-dropdown-toggle">
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                        <div class="accordion-title">Material selections</div>
                      </div>
                      <nav class="dropdown-list w-dropdown-list">
                        <p>Colin and team are here to whisk you through a world of material choices, ensuring your finishes selection are beautiful and fit-for-purpose.</p>
                      </nav>
                    </div>
                    <div data-delay="0" data-hover="false" data-w-id="d595f060-1b2a-ac13-ce51-fafafd6e1626" style="height:40px" class="accordion-item w-dropdown">
                      <div class="accordion-toggle w-dropdown-toggle">
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                        <div class="accordion-title">+ more</div>
                      </div>
                      <nav class="dropdown-list w-dropdown-list">
                        <p>Heritage cleaning, mould cleaning, graffiti removal, specialist stone repairs, anti-slip treatments.</p>
                      </nav>
                    </div>
                  </div>
                </div>
                <div id="w-node-d595f060-1b2a-ac13-ce51-fafafd6e162e-ad6146c2" class="grid-column grid-column-top">
                  <div class="benefits-images"><img src="/images/image-asset-1.webp" loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, 26vw" srcset="/images/image-asset-1-p-500.webp 500w, /images/image-asset-1-p-800.webp 800w, /images/image-asset-1.webp 1000w" alt="" class="shawcontract_benefits_images"></div>
                  <h4>National Portfolios<br></h4>
                  <div class="accordion-container">
                    <div data-delay="0" data-hover="false" data-w-id="d595f060-1b2a-ac13-ce51-fafafd6e1635" style="height:40px" class="accordion-item w-dropdown">
                      <div class="accordion-toggle w-dropdown-toggle">
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                        <div class="accordion-title">Capability</div>
                      </div>
                      <nav class="dropdown-list w-dropdown-list">
                        <p>We currently service clients with locations across Australia. Including regional and remote locations. We’re talking locations as remote as Alice Springs NT, Kalgoorlie WA, and Mount Isa QLD, to name a few. All this to say that no matter what properties are in your portfolio, we are able to service them.</p>
                      </nav>
                    </div>
                    <div data-delay="0" data-hover="false" data-w-id="d595f060-1b2a-ac13-ce51-fafafd6e163d" style="height:40px" class="accordion-item w-dropdown">
                      <div class="accordion-toggle w-dropdown-toggle">
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                        <div class="accordion-title">Property types</div>
                      </div>
                      <nav class="dropdown-list w-dropdown-list">
                        <p>We service everything from 80,000m2 office buildings through to 100m2 retail locations. We have the capability and capacity to take on any portfolio across Australia.</p>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="form" class="gibbon_final_section w-node-d595f060-1b2a-ac13-ce51-fafafd6e1645-ad6146c2">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper grid-column-2">
              <div class="grid-2-columns">
                <div id="w-node-d595f060-1b2a-ac13-ce51-fafafd6e164a-ad6146c2" class="grid-column">
                  <h2 class="text-light">We fix your pain.</h2>
                  <p class="text-size-large text-light">No smell. No noise. No complaints.</p>
                  <div class="contact-details-container">
                    <div class="grid-column"><img src="/images/1694389967234.jpg" loading="lazy" sizes="100px" srcset="/images/1694389967234-p-500.jpg 500w, /images/1694389967234.jpg 800w" alt="" class="contact-detail-image"></div>
                    <div class="grid-column contact-details-grid">
                      <h5 class="contact-detail-name text-light">Aaron Kelly</h5>
                      <p class="text-light">General Manager - Cleaning<br>☎️ 0447 888 824<br>📧 aaron.kelly@premrest.com.au</p>
                    </div>
                  </div>
                </div>
                <div id="w-node-d595f060-1b2a-ac13-ce51-fafafd6e165b-ad6146c2" class="grid-column-form">
                  <div class="form-container">
                    <div class="w-form">
                      <form id="gibbon-architectural-form" name="wf-form-Gibbon-Architectural-Form" data-name="Gibbon Architectural Form" redirect="/thanks" data-redirect="/thanks" method="get" data-wf-page-id="676e22483d5450a8ad6146c2" data-wf-element-id="d595f060-1b2a-ac13-ce51-fafafd6e165e">
                        <div class="form-block-2-columns">
                          <div class="form-block-grid-column"><label for="First-Name-GibbonArchitectural" class="form-label">First name</label><input class="form-field w-input" maxlength="256" name="First-Name" data-name="First Name" placeholder="" type="text" id="First-Name-GibbonArchitectural" required=""></div>
                          <div class="form-block-grid-column"><label for="Last-Name-GibbonArchitectural" class="form-label">Last name</label><input class="form-field w-input" maxlength="256" name="Last-Name" data-name="Last Name" placeholder="" type="text" id="Last-Name-GibbonArchitectural" required=""></div>
                        </div>
                        <div class="form-block-2-columns">
                          <div class="form-block-grid-column"><label for="Email-Address-GibbonArchitectural" class="form-label">Email address</label><input class="form-field w-input" maxlength="256" name="Email-Address" data-name="Email Address" placeholder="" type="email" id="Email-Address-GibbonArchitectural" required=""></div>
                          <div class="form-block-grid-column"><label for="Phone-Number-GibbonArchitectural" class="form-label">Phone number</label><input class="form-field w-input" maxlength="256" name="Phone-Number" data-name="Phone Number" placeholder="" type="tel" id="Phone-Number-GibbonArchitectural"></div>
                        </div><input type="submit" data-wait="Please wait..." class="button contact-button w-button" value="Submit">
                      </form>
                      <div class="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div class="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="global_section_footer">
        <div class="padding-global padding-section-small">
          <div class="container-large">
            <div class="grid_wrapper">
              <div class="grid-4-columns">
                <div id="w-node-_22174fed-6f0e-2c64-aeba-cd40839aef1e-839aef19" class="grid-column grid-column-footer grid-column-top">
                  <a href="index.html" class="footer_logo_link w-inline-block"><img src="/images/Premrest_Tagline_Charcoal-Orange.svg" loading="lazy" alt="" class="footer_logo"></a>
                  <div class="footer-social-container">
                    <a href="https://au.linkedin.com/company/premrest" target="_blank" class="footer-social-linkedin-link w-inline-block"><img src="/images/linkedin.png" loading="lazy" alt="" class="footer-social-linkedin"></a>
                    <a href="https://www.instagram.com/premrestau/" target="_blank" class="footer-social-instagram-link w-inline-block"><img src="/images/instagram-1.png" loading="lazy" alt="" class="footer-social-instagram"></a>
                    <a href="https://www.youtube.com/@premrest" target="_blank" class="footer-social-youtube-link w-inline-block"><img src="/images/YouTube.webp" loading="lazy" sizes="100vw" srcset="/images/YouTube-p-500.webp 500w, /images/YouTube-p-800.webp 800w, /images/YouTube-p-1080.webp 1080w, /images/YouTube-p-1600.webp 1600w, /images/YouTube.webp 2000w" alt="" class="footer-social-youtube"></a>
                  </div>
                </div>
                <div class="grid-column grid-column-footer grid-column-top">
                  <h5 class="footer-heading"><strong>Pages</strong></h5>
                  <ul role="list" class="footer-list w-list-unstyled">
                    <li>
                      <a href="cleaning.html" class="footer-list-link w-inline-block">
                        <p class="footer-list-text">Cleaning</p>
                      </a>
                    </li>
                    <li>
                      <a href="installs.html" class="footer-list-link w-inline-block">
                        <p class="footer-list-text">Installs</p>
                      </a>
                    </li>
                    <li>
                      <a href="special-projects.html" class="footer-list-link w-inline-block">
                        <p class="footer-list-text">Special Projects</p>
                      </a>
                    </li>
                    <li>
                      <a href="sustainability.html" class="footer-list-link w-inline-block">
                        <p class="footer-list-text">Sustainability</p>
                      </a>
                    </li>
                    <li>
                      <a href="industries.html" class="footer-list-link w-inline-block">
                        <p class="footer-list-text">Industries</p>
                      </a>
                    </li>
                    <li>
                      <a href="case-studies.html" class="footer-list-link w-inline-block">
                        <p class="footer-list-text">Case Studies</p>
                      </a>
                    </li>
                    <li>
                      <a href="resources.html" class="footer-list-link w-inline-block">
                        <p class="footer-list-text">Resources</p>
                      </a>
                    </li>
                    <li>
                      <a href="lets-talk-facilities.html" class="footer-list-link w-inline-block">
                        <p class="footer-list-text">Let&#x27;s Talk Facilities</p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="grid-column grid-column-footer grid-column-top">
                  <h5 class="footer-heading"><strong>Help! I&#x27;m a...</strong></h5>
                  <ul role="list" class="footer-list w-list-unstyled">
                    <li>
                      <a href="facility-managers.html" class="footer-list-link w-inline-block">
                        <p class="footer-list-text">Facility Manager</p>
                      </a>
                    </li>
                    <li>
                      <a href="building-managers.html" class="footer-list-link w-inline-block">
                        <p class="footer-list-text">Building Manager</p>
                      </a>
                    </li>
                    <li>
                      <a href="procurement-managers.html" class="footer-list-link w-inline-block">
                        <p class="footer-list-text">Procurement Manager</p>
                      </a>
                    </li>
                    <li>
                      <a href="sustainability-managers.html" class="footer-list-link w-inline-block">
                        <p class="footer-list-text">Sustainability Manager</p>
                      </a>
                    </li>
                    <li>
                      <a href="general-cleaning-managers.html" class="footer-list-link w-inline-block">
                        <p class="footer-list-text">General Cleaning Manager</p>
                      </a>
                    </li>
                    <li>
                      <a href="builders-developers.html" class="footer-list-link w-inline-block">
                        <p class="footer-list-text">Builder or Developer</p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="grid-column grid-column-footer grid-column-top">
                  <h5 class="footer-heading"><strong>Reference</strong></h5>
                  <ul role="list" class="footer-list w-list-unstyled">
                    <li>
                      <a href="about.html" class="footer-list-link w-inline-block">
                        <p class="footer-list-text">About</p>
                      </a>
                    </li>
                    <li>
                      <a href="contact.html" class="footer-list-link w-inline-block">
                        <p class="footer-list-text">Contact</p>
                      </a>
                    </li>
                    <li>
                      <a href="https://buy.stripe.com/dR601qcEx90B4us002" target="_blank" class="footer-list-link w-inline-block">
                        <p class="footer-list-text">Pay an Invoice</p>
                      </a>
                    </li>
                    <li>
                      <a href="privacy-policy.html" class="footer-list-link w-inline-block">
                        <p class="footer-list-text">Privacy Policy</p>
                      </a>
                    </li>
                    <li>
                      <a href="terms-of-service.html" class="footer-list-link w-inline-block">
                        <p class="footer-list-text">Terms of Service</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=675661387278edf4cf92de17" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="/js/webflow.js" type="text/javascript"></script>
` }} />
    </>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premrest | Commercial Floor Cleaning',
  description: 'Give your commercial floors a new lease on life, with no problems swept under the carpet.',
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


    /* ====== Basic Input Styles ====== */
    #carpet-area {
      width: 100%;
      max-width: 300px!important;
      font-size: 1rem;
      font-family: krub, sans-serif;
      padding: 0.5rem 1rem;
      border: 2px solid #aeba6c;
      border-radius: 100px;
      outline: none;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }
    #carpet-area:focus {
      border-color: #d2d489;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .input-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 2rem;
      width: 300px;
      margin: 0 auto;
    }
.columns-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: center;
  width: 100%; /* Make the container fill its parent’s entire width */
  margin: 0;   /* Remove auto margins if you want it fully left-aligned */
}
    .column {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      box-sizing: border-box;
      padding: 10px;
    }
    @media (max-width: 960px) {
      .columns-container {
        grid-template-columns: 1fr;
      }
    }
    .circle-container {
      position: relative;
      width: 100%;
      aspect-ratio: 1; /* Maintain a square container for the SVG */
      max-width: 300px; /* Adjust as needed */
      vertical-align: top;
    }
    .circle-container svg {
      width: 100%;
      height: 100%;
    }
    /* ====== Circle Appearance ====== */
    .progress-circle-outer,
    .progress-circle-inner {
      stroke-linecap: round;
      stroke-width: 25; /* Thicker stroke */
      fill: none;
      transition: stroke-dashoffset 1.5s ease;
      /* Rotate so 0% starts at top */
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
    }
    /* Outer circle: background color */
    .progress-circle-outer {
      stroke: #f1eade; 
    }
    /* Inner circle: foreground color (animated fill) */
    .progress-circle-inner {
      stroke: #aeba6c; 
    }
    .circle-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      font-family: futura-pt, sans-serif;
      letter-spacing: -0.02rem;
      font-weight: 800;
      color: #2F3133;
    }
    .heading-style-h3 {
      font-weight: 800;
      font-size: 2rem;
    }
    .results-box {
      max-width: 250px;
    }
    .others-text {
      font-family: futura-pt, sans-serif;
      letter-spacing: -0.02rem;
      font-weight: 400;
      color: #2F3133;
    }
    .premrest-text {
      font-family: futura-pt, sans-serif;
      letter-spacing: -0.02rem;
      font-weight: 800;
      font-size: 1.2rem;
      color: #2F3133;
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
      <div class="residential_commercial_bar">
        <div class="padding-global padding-header-bar">
          <div class="header-bar-container"></div>
        </div>
      </div>
      <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="nav_component w-nav">
        <div class="nav_header">
          <div class="nav_container">
            <div class="nav_offcanvas_menu">
              <div class="nav_menu_block is-cream">
                <div class="nav_menu_links_wrapper">
                  <a href="cleaning.html" aria-current="page" class="nav_menu_links w-inline-block w--current">
                    <div class="hamburger-links dark">Cleaning</div>
                  </a>
                  <a href="installs.html" class="nav_menu_links w-inline-block">
                    <div class="hamburger-links dark">Installs</div>
                  </a>
                  <a href="special-projects.html" class="nav_menu_links w-inline-block">
                    <div class="hamburger-links dark">Special projects</div>
                  </a>
                  <a href="sustainability.html" class="nav_menu_links w-inline-block">
                    <div class="hamburger-links dark">Sustainability</div>
                  </a>
                  <a href="resources.html" class="nav_menu_links w-inline-block">
                    <div class="hamburger-links dark">Resources</div>
                  </a>
                  <a href="contact.html" class="nav_menu_links w-inline-block">
                    <div class="hamburger-links dark">Contact</div>
                  </a>
                  <a href="about.html" class="nav_menu_links w-inline-block">
                    <div class="hamburger-links dark">About</div>
                  </a>
                  <div class="nav_contact_wrapper">
                    <a href="tel:1300207915" class="nav_contact_text dark">1300 207 915</a>
                    <a href="mailto:office@premrest.com.au" class="nav_contact_text dark">office@premrest.com.au</a>
                    <a href="https://maps.app.goo.gl/BotU9K1ahvLwXa1z7" target="_blank" class="nav_contact_text dark">1/99 Heyington Ave, Thomastown VIC 3074</a>
                  </div>
                </div>
                <div class="menu_block_overlay"></div>
              </div>
            </div>
            <div class="nav_block_logo">
              <a href="index.html" class="nav_brand w-nav-brand">
                <div class="logo logo-cream w-embed">
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
                <a href="cleaning.html" aria-current="page" class="nav_menu_link light w-nav-link w--current">Cleaning</a>
                <a href="installs.html" class="nav_menu_link light w-nav-link">Installs</a>
                <a href="sustainability.html" class="nav_menu_link light w-nav-link">Sustainability</a>
                <a href="resources.html" class="nav_menu_link light w-nav-link">Resources</a>
                <a href="tel:1300207915" class="button button-nav is-tertiary w-button">1300 207 915</a>
              </nav>
              <a href="tel:1300207915" class="call-icon-link w-inline-block">
                <div class="call-icon-container">
                  <div class="call-button-responsive-header-2 w-embed">
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
              <div data-w-id="fad5caba-263d-f4ad-a904-7f968bcab843" class="hamburger_menu">
                <div data-w-id="fad5caba-263d-f4ad-a904-7f968bcab844" class="hamburger_bar hamburger-cream"></div>
                <div data-w-id="fad5caba-263d-f4ad-a904-7f968bcab845" class="hamburger_bar hamburger-cream"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-wrapper">
      <div class="cleaning-section-hero background-color-primary hero-padding-top">
        <div class="padding-global padding-section-medium">
          <div class="container-xlarge">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <div class="hero-heading-block">
                    <h1 data-w-id="8a5b2e3c-c577-5343-879f-9d3f5576a813" style="opacity:0" class="hero-headline cleaning-hero-headline">Revived floors, flawless facilities.</h1><img src="/images/Premrest_Lines_Cream.svg" loading="lazy" style="opacity:0" data-w-id="ae9a098d-979e-7278-b63b-e63f82eff2e4" alt="" class="cleaning-hero-patches">
                  </div>
                  <p data-w-id="be180c40-798e-c982-98b0-f0b61a6a24c3" style="opacity:0" class="text-size-large cleaning-hero-subheadline">Give your commercial floors a new lease on life,<strong> with no problems swept under the carpet.</strong></p>
                  <a data-w-id="32881dfd-b184-4904-6d82-ca84f3165491" style="opacity:0" href="#cleaning-form" class="button is-tertiary cleaning-hero-button w-button">Let&#x27;s chat</a>
                </div>
                <div id="w-node-_5ab817d8-e59e-8435-7456-975a1331faea-00249bd3" class="grid-column grid-column-inverse">
                  <div id="w-node-_5601d830-bb0c-32df-ce66-920f9dc42bca-00249bd3" class="column-image-block"><img src="/images/Premrest_Cleaning_Hero_Blob.webp" loading="lazy" sizes="(max-width: 479px) 100vw, 480px" srcset="/images/Premrest_Cleaning_Hero_Blob-p-500.webp 500w, /images/Premrest_Cleaning_Hero_Blob-p-800.webp 800w, /images/Premrest_Cleaning_Hero_Blob-p-1080.webp 1080w, /images/Premrest_Cleaning_Hero_Blob-p-1600.webp 1600w, /images/Premrest_Cleaning_Hero_Blob.webp 2000w" alt="" class="hero-image hero-image-cleaning"><img src="/images/Premrest_Home_Facilities_Illustration.svg" loading="lazy" alt="" class="cleaning-hero-image-facility"><img src="/images/Premrest_Scribble_Green.svg" loading="lazy" alt="" class="cleaning-hero-image-scribble"><img src="/images/Premrest_Patch_Blue.svg" loading="lazy" alt="" class="cleaning-hero-image-patch"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cleaning-section-weworkwith">
        <div class="padding-global padding-section-small">
          <div class="container-xlarge">
            <div class="grid-wrapper">
              <div class="grid-1-column">
                <div class="grid-column">
                  <div class="helpima-block">
                    <h3 class="helpima-heading">Help! I&#x27;m a...</h3>
                  </div>
                </div>
              </div>
              <div class="grid-5-columns">
                <div class="grid-column weworkwith-columns">
                  <a href="facility-managers.html" class="weworkwith-links w-inline-block"><img src="/images/building.png" loading="lazy" alt="" class="weworkwith-icons">
                    <h4 class="heading-style-h4 weworkwith-clients">Facility Manager</h4>
                    <div class="weworkwith-link-group">
                      <h4 class="heading-style-h4 weworkwith-link">Learn more</h4><img src="/images/68004b084ec3177b50af46e4_right-arrow.png" loading="lazy" width="32" alt="" class="weworkwith-arrow">
                    </div>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="building-managers.html" class="weworkwith-links w-inline-block"><img src="/images/apartment.png" loading="lazy" alt="" class="weworkwith-icons">
                    <h4 class="heading-style-h4 weworkwith-clients">Building Manager</h4>
                    <div class="weworkwith-link-group">
                      <h4 class="heading-style-h4 weworkwith-link">Learn more</h4><img src="/images/68004b084ec3177b50af46e4_right-arrow.png" loading="lazy" width="32" alt="" class="weworkwith-arrow">
                    </div>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="procurement-managers.html" class="weworkwith-links w-inline-block"><img src="/images/flowchart.png" loading="lazy" alt="" class="weworkwith-icons">
                    <h4 class="heading-style-h4 weworkwith-clients">Procurement Manager</h4>
                    <div class="weworkwith-link-group">
                      <h4 class="heading-style-h4 weworkwith-link">Learn more</h4><img src="/images/68004b084ec3177b50af46e4_right-arrow.png" loading="lazy" width="32" alt="" class="weworkwith-arrow">
                    </div>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="sustainability-managers.html" class="weworkwith-links w-inline-block"><img src="/images/globe.png" loading="lazy" alt="" class="weworkwith-icons">
                    <h4 class="heading-style-h4 weworkwith-clients">Sustainability Manager</h4>
                    <div class="weworkwith-link-group">
                      <h4 class="heading-style-h4 weworkwith-link">Learn more</h4><img src="/images/right-arrow.png" loading="lazy" width="32" alt="" class="weworkwith-arrow">
                    </div>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="general-cleaning-managers.html" class="weworkwith-links w-inline-block"><img src="/images/data-cleaning.png" loading="lazy" alt="" class="weworkwith-icons">
                    <h4 class="heading-style-h4 weworkwith-clients">General Cleaning Manager</h4>
                    <div class="weworkwith-link-group">
                      <h4 class="heading-style-h4 weworkwith-link">Learn more</h4><img src="/images/68004b084ec3177b50af46e4_right-arrow.png" loading="lazy" width="32" alt="" class="weworkwith-arrow">
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cleaning-section-problem">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <div id="w-node-d46871d1-599c-2295-8068-a9a5f68c2562-00249bd3" class="column-image-block"><img src="/images/Premrest_Spotters_Blob.webp" loading="lazy" sizes="(max-width: 991px) 100vw, 960px" srcset="/images/Premrest_Spotters_Blob-p-500.webp 500w, /images/Premrest_Spotters_Blob-p-800.webp 800w, /images/Premrest_Spotters_Blob-p-1080.webp 1080w, /images/Premrest_Spotters_Blob-p-1600.webp 1600w, /images/Premrest_Spotters_Blob.webp 2000w" alt="" class="section-image"></div>
                </div>
                <div class="grid-column"><img src="/images/Premrest_Cleaning_Growth.svg" loading="lazy" alt="" class="cleaning-problem-graph">
                  <h2>There is nothing &#x27;general&#x27; about floor cleaning.</h2>
                  <p>Floors aren&#x27;t just something you walk on, they reflect the care and pride you take in creating a healthy environment. Yet, all too often, they&#x27;re left in the hands of &#x27;generalists&#x27; that simply lack the know-how your floors need and deserve.<br><br>That&#x27;s where we come in.<br><br>We&#x27;re the specialist floor care experts in your back pocket; your swifty sidekick that understands the nuances of floor care across all floor types, root causes of dirt and stains, and the standards expected by manufacturers to maintain them.<br><br>We work with facility managers, corporate clients, procurement teams and everything in between to resurrect floors to their former glory. That means those stubborn stains you were told were impossible to remove, or the ones that mysteriously reappear in the same spot are finally taken care of - for good.<br><br>You&#x27;re already juggling a thousand other overwhelming priorities, flooring shouldn&#x27;t be one of them. Our fuss-free program takes away the stress and the guesswork.<br><br>We roll out the red carpet for your floors, giving them the TLC they need to stay cleaner, for longer.</p>
                  <a href="#cleaning-form" class="button w-button">Let&#x27;s chat</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cleaning-section-solution">
        <div class="padding-global padding-section-large padding-section-large-bottom">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <h2>Not all floors need steam or powder.</h2>
                  <p>As Australia&#x27;s go-to for commercial floor care, we work with all floor types under different challenges.<br><br>That’s why our cleaning programs take every variable into account: traffic patterns and zones, specific carpet types, colours, and material finishes, environmental conditions, even your sustainability goals.<br><br>We don&#x27;t lock ourselves on one method - it&#x27;s about choosing the right one. One that breathes life and &#x27;wow&#x27; to your carpets for the long-haul.<br><br>From steam cleaning to dry powder and everything in between, we’ve got the entire toolkit in our arsenal. But more often than not, low moisture encapsulation is the perfect porridge that fed Goldilocks<em> -</em> not too wet, not too harsh, but just right.<br><br>It removes up to 96% of dirt and debris, stops rapid resoiling in its tracks, and leaves behind a shield that extends its lifespan - all with no chemical odours, barely any noise, and little to no downtime.<br><br>Now that’s an approach that’s bold, cutting-edge, solves all your flooring conundrums, and means your facility never skips a beat.<br><br>The dirt is on us.</p>
                  <a href="#cleaning-form" class="button w-button">Let&#x27;s chat</a>
                </div>
                <div id="w-node-_994dd22b-9209-4e90-5ec7-9da0ddc370d0-00249bd3" class="grid-column pitfalls-column grid-column-inverse">
                  <div id="w-node-_77121fee-6c65-34d0-53d6-c2230f0c7a7b-00249bd3" class="pitfalls-container">
                    <div data-w-id="1f8ee7b7-524b-409a-cb82-c089a67e9b3f" class="pitfalls-list-heading">
                      <h3 class="pitfalls-heading">Don&#x27;t fall for these common pitfalls</h3>
                    </div>
                    <div id="w-node-_04d65961-db52-8436-9b95-1c6f301e51e4-00249bd3" class="pitfalls-list-container">
                      <div class="pitfalls-list">
                        <div class="list-block">
                          <div id="w-node-_465d8a1e-b06e-58b1-b1ef-a4f76a885917-00249bd3" class="list-image"><img src="/images/cross.png" loading="lazy" alt="" class="image-5"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left">Floors look worse after they’ve been cleaned</p>
                          </div>
                        </div>
                        <div class="list-block">
                          <div id="w-node-f8a06efa-0efa-3b54-e502-3b400b4d7916-00249bd3" class="list-image"><img src="/images/cross.png" loading="lazy" alt="" class="image-5"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left">Stains seem to ‘reappear’ in the same spot</p>
                          </div>
                        </div>
                        <div class="list-block">
                          <div id="w-node-_324ed16e-d319-422c-0b5a-85a47c2e34e8-00249bd3" class="list-image"><img src="/images/cross.png" loading="lazy" alt="" class="image-5"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left">Hidden stains have been pushed to the top</p>
                          </div>
                        </div>
                        <div class="list-block">
                          <div id="w-node-_7eaccf3a-b19e-844e-8d38-707457460495-00249bd3" class="list-image"><img src="/images/cross.png" loading="lazy" alt="" class="image-5"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left">Cleaning methods compromising warranties</p>
                          </div>
                        </div>
                        <div class="list-block">
                          <div id="w-node-_96b25923-bd9b-72a3-330a-a64c5912561a-00249bd3" class="list-image"><img src="/images/cross.png" loading="lazy" alt="" class="image-5"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left">Over-wetting and long drying times</p>
                          </div>
                        </div>
                        <div class="list-block">
                          <div id="w-node-d0a91b51-0934-e8f4-e00f-4e497e3ea4ba-00249bd3" class="list-image"><img src="/images/cross.png" loading="lazy" alt="" class="image-5"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left">No long-term strategy for your flooring</p>
                          </div>
                        </div>
                        <div class="list-block">
                          <div id="w-node-_9260fdeb-a342-5512-cbbd-2297cfc4c54d-00249bd3" class="list-image"><img src="/images/cross.png" loading="lazy" alt="" class="image-5"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left">Huge replacement and restorations costs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cleaning-section-team">
        <div class="padding-global padding-section-large padding-section-large-bottom">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="the-floor-experts">
                <div class="grid-column">
                  <h2 id="w-node-_13a9e2ab-7c72-b5f5-24c4-ae5b17c0da07-00249bd3" class="meet-the-team-heading">Talk to the<br>flooring experts</h2>
                </div>
                <div class="grid-column">
                  <div class="w-dyn-list">
                    <div role="list" class="grid-3-columns grid-team w-dyn-items">
                      <div role="listitem" class="w-dyn-item">
                        <div class="grid-column grid-column-team"><img src="/images/stringio.jpg-5.webp" loading="lazy" alt="" class="team-profile-image w-dyn-bind-empty">
                          <h4 id="w-node-_2b5f1159-399f-a716-2ae3-41220ff6ad98-00249bd3" class="team-profile-headline w-dyn-bind-empty"></h4>
                          <p id="w-node-_2b5f1159-399f-a716-2ae3-41220ff6ad99-00249bd3" class="team-profile-title w-dyn-bind-empty"></p>
                          <div id="w-node-_3e6232a0-bea5-6321-9006-d93916e2bd41-00249bd3" class="experts-contact-container">
                            <div class="contact-icon-block">
                              <a href="#" class="w-inline-block"><img src="/images/phone.png" loading="lazy" alt="" class="contact-experts-icon"></a>
                            </div>
                            <div class="contact-icon-block">
                              <a href="#" class="w-inline-block"><img src="/images/mail-advertising.png" loading="lazy" alt="" class="contact-experts-icon"></a>
                            </div>
                            <div class="contact-icon-block">
                              <a href="#" class="w-inline-block"><img src="/images/linkedin_1.png" loading="lazy" alt="" class="contact-experts-icon-li"></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-dyn-empty">
                      <div>No items found.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="global-section-industries">
        <div class="padding-global padding-section-large">
          <div class="container-xlarge">
            <div class="grid-wrapper">
              <div class="grid-1-column">
                <div class="grid-column">
                  <h2 id="w-node-_8bd42618-a93c-bdef-def6-781da269f2e6-a269f2e0" class="industries-title">A national service provider, from small spaces to landmark buildings.</h2>
                </div>
              </div>
              <div class="grid-10-columns">
                <div class="grid-column weworkwith-columns">
                  <a href="/industries/#commercial-offices" class="weworkwith-links w-inline-block"><img src="/images/commercial-offices.png" loading="lazy" alt="" class="industries-icons">
                    <h4 class="heading-style-h4 industries-category-title">Commercial offices</h4>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/industries/#professional-services" class="weworkwith-links w-inline-block"><img src="/images/professional-services.png" loading="lazy" alt="" class="industries-icons">
                    <h4 class="heading-style-h4 industries-category-title">Professional services</h4>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/industries/#banking-insurance" class="weworkwith-links w-inline-block"><img src="/images/banking.png" loading="lazy" alt="" class="industries-icons">
                    <h4 class="heading-style-h4 industries-category-title">Banking &amp; insurance</h4>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/industries/#education" class="weworkwith-links w-inline-block"><img src="/images/education.png" loading="lazy" alt="" class="industries-icons">
                    <h4 class="heading-style-h4 industries-category-title">Education</h4>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/industries/#government" class="weworkwith-links w-inline-block"><img src="/images/government.png" loading="lazy" alt="" class="industries-icons">
                    <h4 class="heading-style-h4 industries-category-title">Government</h4>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/industries/#retail" class="weworkwith-links w-inline-block"><img src="/images/retail.png" loading="lazy" alt="" class="industries-icons">
                    <h4 class="heading-style-h4 industries-category-title">Retail</h4>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/industries/#health" class="weworkwith-links w-inline-block"><img src="/images/health.png" loading="lazy" alt="" class="industries-icons">
                    <h4 class="heading-style-h4 industries-category-title">Health</h4>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/industries/#fitness" class="weworkwith-links w-inline-block"><img src="/images/fitness.png" loading="lazy" alt="" class="industries-icons">
                    <h4 class="heading-style-h4 industries-category-title">Fitness</h4>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/industries/#call-centres" class="weworkwith-links w-inline-block"><img src="/images/call-centre.png" loading="lazy" alt="" class="industries-icons">
                    <h4 class="heading-style-h4 industries-category-title">24/7 call centres</h4>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/industries/#transport" class="weworkwith-links w-inline-block"><img src="/images/airplane-1.png" loading="lazy" alt="" class="industries-icons">
                    <h4 class="heading-style-h4 industries-category-title">Transport</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cleaning-section-steps">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column"><img src="/images/Premrest_Cleaning_Steps_Blob.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Cleaning_Steps_Blob-p-500.webp 500w, /images/Premrest_Cleaning_Steps_Blob-p-800.webp 800w, /images/Premrest_Cleaning_Steps_Blob-p-1080.webp 1080w, /images/Premrest_Cleaning_Steps_Blob-p-1600.webp 1600w, /images/Premrest_Cleaning_Steps_Blob.webp 2000w" alt="" class="section-image"></div>
                <div class="grid-column">
                  <h2 data-w-id="d62d1c69-4a8b-59ea-e99d-e4368920205e" style="opacity:0" class="text-light cleaning-steps-headline">Flawless floors, step by step:</h2>
                  <div class="steps-container">
                    <div data-w-id="69f886bc-059d-d5d0-0bca-528b5a8505d8" style="opacity:0" class="steps-block">
                      <div class="steps-number-block rotate-right">
                        <h4 class="steps-number-text heading-style-h2 rotate-left">1</h4>
                      </div>
                      <div class="steps-block-headline">
                        <h4 class="steps-headline text-light">Get a quote</h4>
                      </div>
                    </div>
                    <div data-w-id="02838a48-58db-7075-53db-59cca66815d4" style="opacity:0" class="steps-block">
                      <div class="steps-number-block rotate-left">
                        <h4 class="steps-number-text heading-style-h2 rotate-right">2</h4>
                      </div>
                      <div class="steps-block-headline">
                        <h4 class="steps-headline text-light">Craft a bespoke maintenance program</h4>
                      </div>
                    </div>
                    <div data-w-id="b2dc3296-fcb9-c6aa-27cb-3d0e7082f347" style="opacity:0" class="steps-block">
                      <div class="steps-number-block rotate-right">
                        <h4 class="steps-number-text heading-style-h2 rotate-left">3</h4>
                      </div>
                      <div class="steps-block-headline">
                        <h4 class="steps-headline text-light">Never deal with dirty floors again</h4>
                      </div>
                    </div>
                  </div>
                  <a data-w-id="374c8d48-a34b-966a-78c6-8d230b1205ea" style="opacity:0" href="#cleaning-form" class="button is-secondary is-inverse w-button">Let&#x27;s chat</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="global_section-testimonials">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-1-column">
              <h2 id="w-node-_88e6613d-c201-6043-92a4-6b403c387b72-3c387b6e" class="heading-style-h2 home-testimonial-headline">Take the word of global consultancy firms, banks, tech, and other renowned clients</h2>
              <div data-delay="4000" data-animation="slide" class="testimonial-slider w-slider" data-autoplay="true" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
                <div class="testimonial-mask w-slider-mask">
                  <div class="testimonial-slides w-slide">
                    <div class="testimonial-row">
                      <div class="testimonial-container">
                        <div id="w-node-_36dc6565-92f0-4fb9-9a26-d59be2cff2f8-3c387b6e" class="testimonial-image"><img loading="lazy" src="/images/GuyCartwright.webp" alt="" class="testimonial-profile-image"><img loading="lazy" src="/images/Premrest_Rays_Blue.svg" alt="" class="testimonial-rays"><img loading="lazy" src="/images/Premrest_Patch_Orange.svg" alt="" class="testimonial-patch"></div>
                        <div class="testimonial-content">
                          <p class="testimonial-paragraph">Having worked with Premrest for over 10 years, they are not just a contractor, they are true partner for all flooring, upholstery and restoration requirements your clients have. The expertise that Colin and Premrest team provide is second to none when providing guidance to JLL teams and clients. Attention to detail, communication and overall delivery sets them apart.</p>
                          <h4 class="testimonial-name">Guy Cartwright</h4>
                          <p class="testimonial-name-title">Account Director - JLL</p>
                          <div class="testimonial-logos-container"><img loading="lazy" src="/images/JLL.png" alt="" class="testimonial-jll-logo"><img loading="lazy" src="/images/Medibank_logo.svg" alt="" class="testimonial-medibank-logo"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="testimonial-slides w-slide">
                    <div class="testimonial-row">
                      <div class="testimonial-container">
                        <div id="w-node-_88e6613d-c201-6043-92a4-6b403c387b79-3c387b6e" class="testimonial-image"><img loading="lazy" src="/images/AP_AU_VIC_CHERY_STEVENS_JUNE_2019_007_BW_Crop.jpg" alt="" class="testimonial-profile-image"><img loading="lazy" src="/images/Premrest_Rays_Blue.svg" alt="" class="testimonial-rays"><img loading="lazy" src="/images/Premrest_Patch_Orange.svg" alt="" class="testimonial-patch"></div>
                        <div class="testimonial-content">
                          <p class="testimonial-paragraph"><em>I have worked with Premrest for over 10 years, throughout this time they have always been an integrated component of our service delivery to our clients and more importantly were part of the JLL team. A true partnership built upon credible reliable service and a relationship built on trust. When our clients looked for productivity or cost efficiency Premrest would work with us to delivery cost effective service without cutting back on quality.</em><br></p>
                          <h4 class="testimonial-name">Cheryl Stevens</h4>
                          <p class="testimonial-name-title">Head of Corporate Business, Executive Director at JLL<br></p>
                          <div class="testimonial-logos-container"><img loading="lazy" src="/images/JLL.png" alt="" class="testimonial-jll-logo"><img loading="lazy" src="/images/Medibank_logo.svg" alt="" class="testimonial-medibank-logo"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="testimonial-slides w-slide">
                    <div class="testimonial-row">
                      <div class="testimonial-container">
                        <div id="w-node-_88e6613d-c201-6043-92a4-6b403c387b8b-3c387b6e" class="testimonial-image"><img loading="lazy" src="/images/1678265518476.jpeg" alt="" class="testimonial-profile-image"><img loading="lazy" src="/images/Premrest_Rays_Blue.svg" alt="" class="testimonial-rays"><img loading="lazy" src="/images/Premrest_Patch_Orange.svg" alt="" class="testimonial-patch"></div>
                        <div class="testimonial-content">
                          <p class="testimonial-paragraph"><em>I highly recommend Premrest for all your flooring needs. With their expertise and commitment to quality, they consistently deliver outstanding results. One of the key strengths of Premrest is their ability to quickly assess the situation and provide prompt and effective solutions. They understand the urgency and work diligently to minimise the disruption caused to your property.</em></p>
                          <h4 class="testimonial-name">Maria Nicholas</h4>
                          <p class="testimonial-name-title">WoAG - National Facilities Manager at JLL</p>
                          <div class="testimonial-logos-container"><img loading="lazy" src="/images/JLL.png" alt="" class="testimonial-jll-logo"><img loading="lazy" src="/images/Medibank_logo.svg" alt="" class="testimonial-medibank-logo"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="left-arrow w-slider-arrow-left">
                  <div class="icon w-icon-slider-left"></div>
                </div>
                <div class="right-arrow w-slider-arrow-right">
                  <div class="icon-2 w-icon-slider-right"></div>
                </div>
                <div class="slide-nav w-slider-nav w-slider-nav-invert w-round"></div>
              </div>
              <div class="logo-rotator-container padding-logo-top">
                <div data-w-id="88e6613d-c201-6043-92a4-6b403c387b9f" class="logo_component-slider"><img width="300" loading="lazy" alt="" src="/images/ANZ.png" class="logo-slider-img logo-width-medium"><img width="300" loading="lazy" alt="" src="/images/JLL.png" class="logo-slider-img logo-width-medium"><img width="250" loading="lazy" alt="" src="/images/KPMG.svg" class="logo-slider-img logo-width-medium"><img width="300" loading="lazy" alt="" src="/images/101Collins.png" class="logo-slider-img logo-width-small"><img width="300" loading="lazy" alt="" src="/images/Concentrix.png" class="logo-slider-img logo-width-large"><img width="300" loading="lazy" alt="" src="/images/Vanguard.svg.png" class="logo-slider-img"><img width="300" loading="lazy" alt="" src="/images/NetApp.png" class="logo-slider-img"><img width="300" loading="lazy" alt="" src="/images/BendigoBank.png" class="logo-slider-img"><img width="300" loading="lazy" alt="" src="/images/Medibank_logo.svg" class="logo-slider-img"><img width="300" loading="lazy" alt="" src="/images/PinsentMasons.svg" class="logo-slider-img"><img width="300" loading="lazy" alt="" src="/images/Telstra.svg" class="logo-slider-img"><img width="300" loading="lazy" alt="" src="/images/MorganStanley.png" class="logo-slider-img"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cleaning-section-sustainability">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <h2 class="text-light">Beautiful flooring doesn&#x27;t need to cost the earth.</h2>
                  <p class="text-light">We’re committed to reducing our environmental footprint while helping facilities meet their ambitious sustainability goals.<br><br>We lead the way in low moisture encapsulation, a sustainable floor cleaning method that uses significantly less water, energy, chemicals and waste. This innovative method breaks dirt and stains into microscopic nano-sized particles, and encapsulates them into a polymer casing to be vacuumed out of the carpet.<br><br>9 times out of 10, commercial carpets can be maintained using low moisture encapsulation, removing the need for ever using environmentally and financially costly steam cleaning methods that are designed for restoration and reactive purposes, rather than proactive ongoing maintenance.<br><br>Less downtime, faster drying, and far more environmentally friendly - all while delivering a floor that speaks ‘wow!’ as you walk in.<br><br>We partner with facilities, buildings and national portfolios to help them meet ESG goals at scale to see great reductions in waste. Good for your floors, better for the planet.</p>
                  <a href="sustainability.html" class="button is-secondary is-inverse w-button">Learn more</a>
                </div>
                <div id="w-node-d9908d3e-fd8b-068d-c975-b08a3beecc88-00249bd3" class="grid-column grid-column-2-inverse"><img src="/images/Premrest_Cleaning_Steps_Blob_1.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Cleaning_Steps_Blob_1-p-500.webp 500w, /images/Premrest_Cleaning_Steps_Blob_1-p-800.webp 800w, /images/Premrest_Cleaning_Steps_Blob_1-p-1080.webp 1080w, /images/Premrest_Cleaning_Steps_Blob_1-p-1600.webp 1600w, /images/Premrest_Cleaning_Steps_Blob_1.webp 2000w" alt="" class="section-image"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sustainability-section-graphs">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-1-column">
                <div class="grid-column">
                  <h2 id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d931-00249bd3" class="sustainability-calculator-heading">Here&#x27;s what facility managers love about low moisture encapsulation<br></h2>
                  <p id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d934-00249bd3" class="text-size-large sustainability-section-cleaning-subheadline">Sustainable floor cleaning that keeps buildings ticking along - without the compromise.</p>
                  <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d936-00249bd3" class="calculator-input w-embed w-script">
                    <!DOCTYPE html>
                    <html>
                    <head>
                      <title>Carpet Cleaning Comparison</title>
                      <style>
    /* ====== Basic Input Styles ====== */
    #carpet-area {
      width: 100%;
      max-width: 300px!important;
      font-size: 1rem;
      font-family: krub, sans-serif;
      padding: 0.5rem 1rem;
      border: 2px solid #aeba6c;
      border-radius: 100px;
      outline: none;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }
    #carpet-area:focus {
      border-color: #d2d489;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .input-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 2rem;
      width: 300px;
      margin: 0 auto;
    }
.columns-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: center;
  width: 100%; /* Make the container fill its parent’s entire width */
  margin: 0;   /* Remove auto margins if you want it fully left-aligned */
}
    .column {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      box-sizing: border-box;
      padding: 10px;
    }
    @media (max-width: 960px) {
      .columns-container {
        grid-template-columns: 1fr;
      }
    }
    .circle-container {
      position: relative;
      width: 100%;
      aspect-ratio: 1; /* Maintain a square container for the SVG */
      max-width: 300px; /* Adjust as needed */
      vertical-align: top;
    }
    .circle-container svg {
      width: 100%;
      height: 100%;
    }
    /* ====== Circle Appearance ====== */
    .progress-circle-outer,
    .progress-circle-inner {
      stroke-linecap: round;
      stroke-width: 25; /* Thicker stroke */
      fill: none;
      transition: stroke-dashoffset 1.5s ease;
      /* Rotate so 0% starts at top */
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
    }
    /* Outer circle: background color */
    .progress-circle-outer {
      stroke: #f1eade; 
    }
    /* Inner circle: foreground color (animated fill) */
    .progress-circle-inner {
      stroke: #aeba6c; 
    }
    .circle-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      font-family: futura-pt, sans-serif;
      letter-spacing: -0.02rem;
      font-weight: 800;
      color: #2F3133;
    }
    .heading-style-h3 {
      font-weight: 800;
      font-size: 2rem;
    }
    .results-box {
      max-width: 250px;
    }
    .others-text {
      font-family: futura-pt, sans-serif;
      letter-spacing: -0.02rem;
      font-weight: 400;
      color: #2F3133;
    }
    .premrest-text {
      font-family: futura-pt, sans-serif;
      letter-spacing: -0.02rem;
      font-weight: 800;
      font-size: 1.2rem;
      color: #2F3133;
    }
  </style>
                    </head>
                    <body>
                      <div class="input-container">
                        <label for="carpet-area">Enter Carpet Area (m²):</label>
                        <input type="number" id="carpet-area" value="1000" min="1" max="9999999">
                      </div>
                      <div class="columns-container">
                        <div class="column">
                          <div class="circle-container">
                            <svg id="water-graph" viewbox="0 0 220 220">
                              <circle class="progress-circle-outer" cx="110" cy="110" r="90" stroke-dasharray="565" stroke-dashoffset="0"></circle>
                              <circle class="progress-circle-inner" cx="110" cy="110" r="90" stroke-dasharray="565" stroke-dashoffset="565"></circle>
                            </svg>
                            <div class="circle-text">
                              <span class="heading-style-h3">0%</span><br>
                              less water usage
                            </div>
                          </div>
                          <div id="water-output"></div>
                        </div>
                        <div class="column">
                          <div class="circle-container">
                            <svg id="waste-graph" viewbox="0 0 220 220">
                              <circle class="progress-circle-outer" cx="110" cy="110" r="90" stroke-dasharray="565" stroke-dashoffset="0"></circle>
                              <circle class="progress-circle-inner" cx="110" cy="110" r="90" stroke-dasharray="565" stroke-dashoffset="565"></circle>
                            </svg>
                            <div class="circle-text">
                              <span class="heading-style-h3">0%</span><br>
                              less waste water
                            </div>
                          </div>
                          <div id="waste-output"></div>
                        </div>
                        <div class="column">
                          <div class="circle-container">
                            <svg id="energy-graph" viewbox="0 0 220 220">
                              <circle class="progress-circle-outer" cx="110" cy="110" r="90" stroke-dasharray="565" stroke-dashoffset="0"></circle>
                              <circle class="progress-circle-inner" cx="110" cy="110" r="90" stroke-dasharray="565" stroke-dashoffset="565"></circle>
                            </svg>
                            <div class="circle-text">
                              <span class="heading-style-h3">0%</span><br>
                              less energy usage
                            </div>
                          </div>
                          <div id="energy-output"></div>
                        </div>
                      </div>
                      <script>
    /***********************************************
     * Helpers & Resets
     ***********************************************/
    window.formatNumber = function(num, precision = 0) { // Changed precision to 0
      return num.toLocaleString('en-US', {
        minimumFractionDigits: precision,
        maximumFractionDigits: precision
      });
    };
    window.resetGraphic = function(svgId, centerSelector, outputId) {
      const svgEl = document.getElementById(svgId);
      if (!svgEl) return;
      const bgCircle = svgEl.querySelector('.progress-circle-outer');
      const fgCircle = svgEl.querySelector('.progress-circle-inner');
      const container = svgEl.closest('.circle-container');
      const centerEl = container ? container.querySelector(centerSelector) : null;
      const outputEl = document.getElementById(outputId);
      if (bgCircle) {
        // fully drawn background
        bgCircle.style.strokeDashoffset = '0';
      }
      if (fgCircle) {
        // hidden foreground
        fgCircle.style.strokeDashoffset = fgCircle.getAttribute('stroke-dasharray');
      }
      if (centerEl) {
        const heading = centerEl.querySelector('.heading-style-h3');
        if (heading) heading.textContent = '0%';
      }
      if (outputEl) {
        outputEl.innerHTML = '';
      }
    };
    /***********************************************
     * Main Update Function for a Circle
     ***********************************************/
    window.updateCircleData = function(svgId, centerSelector, outputId, hweUsage, encUsage, units) {
      if (hweUsage <= 0) {
        window.resetGraphic(svgId, centerSelector, outputId);
        return;
      }
      // Calculate percentage saved
      const saved = hweUsage - encUsage;
      const pctSaved = (saved / hweUsage) * 100;
      const savedRatio = saved / hweUsage; // e.g. 0.76 => 76%
      const svgEl = document.getElementById(svgId);
      if (!svgEl) return;
      const bgCircle = svgEl.querySelector('.progress-circle-outer');
      const fgCircle = svgEl.querySelector('.progress-circle-inner');
      const container = svgEl.closest('.circle-container');
      const centerEl = container ? container.querySelector(centerSelector) : null;
      const outputEl = document.getElementById(outputId);
      if (!bgCircle || !fgCircle || !centerEl || !outputEl) return;
      // Both circles have the same circumference (~565 for r=90)
      const circleCircum = parseFloat(bgCircle.getAttribute('stroke-dasharray')) || 565;
      // Force reflow to restart the animation
      bgCircle.style.strokeDashoffset = bgCircle.style.strokeDashoffset;
      fgCircle.style.strokeDashoffset = fgCircle.style.strokeDashoffset;
      // Background circle remains fully drawn
      bgCircle.style.strokeDashoffset = '0';
      // Foreground circle offset so that the "saved" portion is visible
      fgCircle.style.strokeDashoffset = (circleCircum * (1 - savedRatio)).toString();
      // Update center text
      const heading = centerEl.querySelector('.heading-style-h3');
      if (heading) {
        heading.textContent = Math.round(pctSaved) + '%';
      }
      // Show HWE vs Enc data below the circle
      let hweText = '', encText = '';
      if (units === 'hrs') {
        hweText = (hweUsage < 1) ? '30 min' : Math.round(hweUsage) + ' hr';
        encText = (encUsage < 1) ? '30 min' : Math.round(encUsage) + ' hr';
      } else {
        hweText = window.formatNumber(hweUsage, 0) + ' ' + units; //precision 0
        encText = window.formatNumber(encUsage, 0) + ' ' + units; //precision 0
      }
      outputEl.innerHTML = \`
        <div class="results-box">
          <div style="margin-bottom:4px;">
            <span style="color:#d2d489; font-size:1.2rem;">●</span>
            <span class="others-text">Others: \${hweText}</span>
          </div>
          <div>
            <span style="color:#858e46; font-size:1.2rem;">●</span>
            <span class="premrest-text">Premrest: \${encText}</span>
          </div>
        </div>
      \`;
    };
    /***********************************************
     * Per-Graph Updates
     ***********************************************/
    function updateWaterUsed() {
      const areaVal = parseFloat(document.getElementById('carpet-area').value) || 0;
      if (areaVal <= 0) {
        window.resetGraphic('water-graph', '.circle-text', 'water-output');
        return;
      }
      // Example formula for water usage
      const hwe = 0.502 * areaVal;
      const enc = 0.12 * areaVal;
      window.updateCircleData('water-graph', '.circle-text', 'water-output', hwe, enc, 'L');
    }
    function updateWasteWater() {
      const areaVal = parseFloat(document.getElementById('carpet-area').value) || 0;
      if (areaVal <= 0) {
        window.resetGraphic('waste-graph', '.circle-text', 'waste-output');
        return;
      }
      // Example formula for waste water
      const hwe = 0.301 * areaVal;
      const enc = 0.001 * areaVal;
      window.updateCircleData('waste-graph', '.circle-text', 'waste-output', hwe, enc, 'L');
    }
    function updateEnergy() {
      const areaVal = parseFloat(document.getElementById('carpet-area').value) || 0;
      if (areaVal <= 0) {
        window.resetGraphic('energy-graph', '.circle-text', 'energy-output');
        return;
      }
      // Example formula for energy usage
      const hwe = 0.0832 * areaVal;
      const enc = 0.016 * areaVal;
      window.updateCircleData('energy-graph', '.circle-text', 'energy-output', hwe, enc, 'kWh');
    }
    /***********************************************
     * Trigger Animations on Scroll into View
     ***********************************************/
    function animateCircles() {
      updateWaterUsed();
      updateWasteWater();
      updateEnergy();
    }
    const graphsSection = document.querySelector('.columns-container');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCircles();
          observer.unobserve(graphsSection);
        }
      });
    });
    observer.observe(graphsSection);
    // Update immediately if user changes input
    document.getElementById('carpet-area').addEventListener('input', updateWaterUsed);
    document.getElementById('carpet-area').addEventListener('input', updateWasteWater);
    document.getElementById('carpet-area').addEventListener('input', updateEnergy);
  </script>
                    </body>
                    </html>
                  </div>
                </div>
                <div class="grid-1-column">
                  <div class="grid-column">
                    <div class="cleaning-comparison-table-3">
                      <div class="cleaning-comparision-table-head-5">
                        <h6 class="cleaning-comparison-heading-4">Feature</h6>
                      </div>
                      <div class="cleaning-comparision-table-head-4">
                        <div class="cleaning-comparison-div-wrap">
                          <h6 class="cleaning-comparison-heading-2 vertical-text">Low moisture encapsulation</h6>
                        </div>
                      </div>
                      <div class="cleaning-comparision-table-head-4">
                        <div class="cleaning-comparison-div-wrap">
                          <h6 class="cleaning-comparison-heading-2 vertical-text">Dry powder system</h6>
                        </div>
                      </div>
                      <div class="cleaning-comparision-table-head-4 border-radius-top-right">
                        <div class="cleaning-comparison-div-wrap">
                          <h6 class="cleaning-comparison-heading-2 vertical-text">Steam cleaning</h6>
                        </div>
                      </div>
                      <div class="cleaning-comparision-table-feature row-grey">
                        <div class="cleaning-comparison-feature-2"><strong>Dries quickly with minimal downtime</strong></div>
                        <div class="cleaning-comparison-description-2"><em>Dries in 45-90 minutes, can be walked on almost immediately</em></div>
                      </div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d950-00249bd3" class="cleaning-comparision-table-row-2 row-grey"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d952-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d954-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div class="cleaning-comparision-table-feature row-white">
                        <div class="cleaning-comparison-feature-2"><strong>Shields carpets from rapid resoiling</strong></div>
                        <div class="cleaning-comparison-description-2"><em>Protective Polymer Formula creates a lasting protective layer</em></div>
                      </div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d95d-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d95f-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d961-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div class="cleaning-comparision-table-feature row-grey">
                        <div class="cleaning-comparison-feature-2"><strong>Cleaning in &#x27;live&#x27; environments</strong></div>
                        <div class="cleaning-comparison-description-2"><em>Can be done overnight or &#x27;live&#x27; environments with no facility downtime</em></div>
                      </div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d96a-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d96c-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d96e-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div class="cleaning-comparision-table-feature row-white">
                        <div class="cleaning-comparison-feature-2"><strong>Reduces overall carbon footprint</strong></div>
                        <div class="cleaning-comparison-description-2"><em>Aligns with corporate ESG goals for sustainability</em></div>
                      </div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d977-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d979-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d97b-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div class="cleaning-comparision-table-feature row-grey">
                        <div class="cleaning-comparison-feature-2"><strong>Uses significantly less water</strong></div>
                        <div class="cleaning-comparison-description-2"><em>Compared to steam cleaning and other methods, uses as much as 76% less water</em></div>
                      </div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d984-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d986-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d988-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div class="cleaning-comparision-table-feature row-white">
                        <div class="cleaning-comparison-feature-2"><strong>Uses eco-friendly cleaning agents</strong></div>
                        <div class="cleaning-comparison-description-2"><em>Uses no harsh chemicals, gentle on the environment</em></div>
                      </div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d991-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d993-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d995-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div class="cleaning-comparision-table-feature row-grey">
                        <div class="cleaning-comparison-feature-2"><strong>Consumes far less energy</strong></div>
                        <div class="cleaning-comparison-description-2"><em>Compared to steam cleaning and other methods, as much as 81% less energy</em></div>
                      </div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d99e-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9a0-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9a2-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div class="cleaning-comparision-table-feature row-white">
                        <div class="cleaning-comparison-feature-2"><strong>Extends carpet lifespan effectively</strong></div>
                        <div class="cleaning-comparison-description-2"><em>Low moisture prevents damage and preserves fibres</em></div>
                      </div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9ab-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9ad-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9af-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div class="cleaning-comparision-table-feature row-grey">
                        <div class="cleaning-comparison-feature-2"><strong>Adapts safely to all carpet types</strong></div>
                        <div class="cleaning-comparison-description-2"><em>Customised methods ensure safety for any carpet</em></div>
                      </div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9b8-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9ba-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9bc-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div class="cleaning-comparision-table-feature row-white">
                        <div class="cleaning-comparison-feature-2"><strong>Follows warranty-safe cleaning practices</strong></div>
                        <div class="cleaning-comparison-description-2"><em>Meets manufacturer guidelines to maintain warranties</em></div>
                      </div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9c5-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9c7-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9c9-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div class="cleaning-comparision-table-feature row-grey">
                        <div class="cleaning-comparison-feature-2"><strong>Minimises mould and bacteria growth</strong></div>
                        <div class="cleaning-comparison-description-2"><em>Fast drying eliminates conditions that harbour mould growth</em></div>
                      </div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9d2-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9d4-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9d6-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div class="cleaning-comparision-table-feature row-white">
                        <div class="cleaning-comparison-feature-2"><strong>Science-based protective coating</strong></div>
                        <div class="cleaning-comparison-description-2"><em>Chemical polymer breaks the bond between dirt and carpet, crystallising it into microscopic particles for easy vacuuming</em></div>
                      </div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9df-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9e1-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9e3-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div class="cleaning-comparision-table-feature row-grey">
                        <div class="cleaning-comparison-feature-2"><strong>Low noise machinery &amp; operations</strong></div>
                        <div class="cleaning-comparison-description-2"><em>Operates quieter than a vacuum, barely noticeable</em></div>
                      </div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9ec-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9ee-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9f0-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div class="cleaning-comparision-table-feature row-white">
                        <div class="cleaning-comparison-feature-2"><strong>Delivers higher long-term value</strong></div>
                        <div class="cleaning-comparison-description-2"><em>Prevents premature wear, extending carpet usability</em></div>
                      </div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9f9-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9fb-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609d9fd-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div class="cleaning-comparision-table-feature row-grey">
                        <div class="cleaning-comparison-feature-2"><strong>Cost-effective cleaning method</strong></div>
                        <div class="cleaning-comparison-description-2"><em>Straightforward operations and less expensive products required</em></div>
                      </div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609da06-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609da08-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609da0a-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div class="cleaning-comparision-table-feature row-white">
                        <div class="cleaning-comparison-feature-2"><strong>Less labour-intensive</strong></div>
                        <div class="cleaning-comparison-description-2"><em>Lightweight machinery, as simple as operating a vacuum</em></div>
                      </div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609da13-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609da15-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609da17-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div class="cleaning-comparision-table-feature row-grey">
                        <div class="cleaning-comparison-feature-2"><strong>Produces almost no waste</strong></div>
                        <div class="cleaning-comparison-description-2"><em>Compared to steam cleaning and other methods, produces as much as 100% less waste</em></div>
                      </div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609da20-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609da22-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609da24-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div class="cleaning-comparision-table-feature row-white">
                        <div class="cleaning-comparison-feature-2"><strong>Lowers total cleaning costs over time</strong></div>
                        <div class="cleaning-comparison-description-2"><em>Reduces need for frequent deep cleans, saving money</em></div>
                      </div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609da2d-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609da2f-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609da31-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div class="cleaning-comparision-table-feature row-grey">
                        <div class="cleaning-comparison-feature-2"><strong>Leaves no chemical odours behind</strong></div>
                        <div class="cleaning-comparison-description-2"><em>Leaves a fresh, natural, odourless finish</em></div>
                      </div>
                      <div id="w-node-_887a434c-9ab8-f5cf-4c25-64b0de8597f7-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_6e201bf2-eef4-e5e2-2c20-8fe539eedb2f-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609da3e-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div class="cleaning-comparision-table-feature row-white">
                        <div class="cleaning-comparison-feature-2"><strong>Designed for heavily soiled carpets</strong></div>
                        <div class="cleaning-comparison-description-2"><em>Proactive over reactive-based cleaning, no harsh extractions</em></div>
                      </div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609da47-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609da49-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609da4b-00249bd3" class="cleaning-comparision-table-row row-white"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div class="cleaning-comparision-table-feature row-grey border-radius-bottom-left">
                        <div class="cleaning-comparison-feature-2"><strong>Requires thorough vacuuming</strong></div>
                        <div class="cleaning-comparison-description-2"><em>Powder builds up overtime, leading to damage of carpet fibre</em></div>
                      </div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609da3c-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                      <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609da3a-00249bd3" class="cleaning-comparision-table-row row-grey"><img src="/images/check.png" loading="lazy" alt="" class="cleaning-comparison-tick-2"></div>
                      <div id="w-node-_7d65108b-a8c4-c34b-abd2-522dd975a7fb-00249bd3" class="cleaning-comparision-table-row row-grey border-radius-bottom-right"><img src="/images/cross.png" loading="lazy" alt="" class="cleaning-comparison-cross-2"></div>
                    </div>
                  </div>
                  <div id="w-node-_7219da9f-b81b-e19f-6e7a-de91d609da4d-00249bd3" class="grid-column">
                    <a href="#cleaning-form" class="button w-button">Let&#x27;s chat</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="padding-global padding-section-large backgroung-color-green">
        <div class="container-large">
          <div class="grid-wrapper">
            <div class="grid-2-columns">
              <div class="grid-column"><img src="/images/Premrest_Sustainability_Calculator_Blob.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Sustainability_Calculator_Blob-p-500.webp 500w, /images/Premrest_Sustainability_Calculator_Blob-p-800.webp 800w, /images/Premrest_Sustainability_Calculator_Blob-p-1080.webp 1080w, /images/Premrest_Sustainability_Calculator_Blob-p-1600.webp 1600w, /images/Premrest_Sustainability_Calculator_Blob.webp 2000w" alt="" class="section-image"></div>
              <div class="grid-column">
                <h2 class="text-light">Sustainability impact report</h2>
                <p class="text-light">Low moisture encapsulation provides facility managers with spotless floors, but without the environmental cost. Calculate your impact and generate a report of how significantly less water, energy, chemicals and waste you&#x27;d be saving.</p>
                <a href="impact-calculator.html" class="button is-secondary is-inverse w-button">Calculate your impact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cleaning-section-webinar">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper resources-grid-wrapper">
              <div class="grid-2-columns-webinar">
                <div id="w-node-bf04a29b-9a03-35e0-af81-d2b19a62b72a-9a62b725" class="webinar-grid-column w-dyn-list">
                  <div role="list" class="w-dyn-items">
                    <div role="listitem" class="w-dyn-item">
                      <div class="grid-column grid-webinar">
                        <h2 class="w-dyn-bind-empty"></h2>
                        <p class="w-dyn-bind-empty"></p>
                        <a href="#" class="button w-button">View webinar</a>
                      </div>
                    </div>
                  </div>
                  <div class="w-dyn-empty">
                    <div>No items found.</div>
                  </div>
                </div>
                <div class="grid-column ltf-spacer">
                  <div class="resources-wrapper w-dyn-list">
                    <div role="list" class="w-dyn-items">
                      <div role="listitem" class="w-dyn-item">
                        <div class="webinar-section-video">
                          <div class="webinar-badges-container-section">
                            <div class="content-badge-service is-inverse">
                              <h6 fs-cmsfilter-field="*" class="content-service-heading is-inverse">Latest Webinar</h6>
                            </div>
                          </div>
                          <a href="#" class="w-inline-block">
                            <div class="letstalkfacilities-section-image"><img loading="lazy" src="/images/Premrest_Scribble_Green.svg" alt="" class="ltf-resources-scribbles"><img loading="lazy" src="/images/Premrest_Patch_Orange.svg" alt="" class="ltf-resources-patch"><img loading="lazy" src="/images/play-button.png" alt="" class="video-play-button">
                              <div class="letstalkfacilities-section-overlay"></div><img loading="lazy" height="Auto" alt="" src="/images/DSC03156.webp" class="letstalkfacilities-section-videoimage w-dyn-bind-empty">
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="w-dyn-empty">
                      <div>No items found.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cleaning-section-final">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div id="w-node-_5393c0cf-5421-f38d-8e5e-67f3871b0c0a-00249bd3" class="grid-column grid-column-1">
                  <h2 id="w-node-_5393c0cf-5421-f38d-8e5e-67f3871b0c0b-00249bd3" class="text-light cleaning-final-headline-cleaning">Let’s take your floors from grime to prime.</h2>
                </div>
                <div id="w-node-b3cf76f3-9e09-fc31-ce87-0dbbd00ec4cd-00249bd3" class="grid-column-form">
                  <div class="form-container">
                    <div class="w-form">
                      <form id="cleaning-form" name="wf-form-Cleaning-Form-2" data-name="Cleaning Form" redirect="/cleaning/thanks" data-redirect="/cleaning/thanks" method="get" data-wf-page-id="675b61109df2a2d800249bd3" data-wf-element-id="b3cf76f3-9e09-fc31-ce87-0dbbd00ec4d0">
                        <div class="form-block-2-columns">
                          <div class="form-block-grid-column"><label for="First-Name-Contact" class="form-label">First name</label><input class="form-field w-input" maxlength="256" name="First-name" data-name="First name" placeholder="" type="text" id="First-Name-Contact" required=""></div>
                          <div class="form-block-grid-column"><label for="Last-Name-Contact-2" class="form-label">Last name</label><input class="form-field w-input" maxlength="256" name="Last-name" data-name="Last name" placeholder="" type="text" id="Last-Name-Contact" required=""></div>
                        </div>
                        <div class="form-block-2-columns">
                          <div class="form-block-grid-column"><label for="Email-Address-Contact-2" class="form-label">Email address</label><input class="form-field w-input" maxlength="256" name="Email-address" data-name="Email address" placeholder="" type="email" id="Email-Address-Contact" required=""></div>
                          <div class="form-block-grid-column"><label for="Phone-Number-Contact-2" class="form-label">Phone number</label><input class="form-field w-input" maxlength="256" name="Phone-number" data-name="Phone number" placeholder="" type="tel" id="Phone-Number-Contact"></div>
                        </div><label for="Company-Name-Contact" class="form-label">Company</label><input class="form-field w-input" maxlength="256" name="Company-name" data-name="Company name" placeholder="" type="text" id="Company-Name-Contact" required=""><label for="Where-can-we-help-Contact-2" class="form-label">Where can we help?</label><textarea id="Where-can-we-help-Contact" name="Where-can-we-help" maxlength="5000" data-name="Where can we help?" placeholder="" required="" class="form-field w-input"></textarea>
                        <div data-sitekey="6LcsYNQqAAAAAASW7a203khVeE_7gtdLBWVoSWT1" class="w-form-formrecaptcha g-recaptcha g-recaptcha-error g-recaptcha-disabled"></div><input type="submit" data-wait="Please wait..." class="button contact-button w-button" value="Submit">
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
                      <a href="cleaning.html" aria-current="page" class="footer-list-link w-inline-block w--current">
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
    </div>
  </div>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=675661387278edf4cf92de17" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="/js/webflow.js" type="text/javascript"></script>
` }} />
    </>
  );
}

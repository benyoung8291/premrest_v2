import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ComCork Supply & Installation | Natural Cork Wall Tiles Australia | Premrest',
  description: 'ComCork decorative cork wall & ceiling tiles in 29 designer colours. Supplied and installed nationwide by Premrest. Natural, acoustic, sustainable. Call 1300 207 915.',
};

export default function Page() {
  return (
    <>
      {/* Page-specific styles */}
      <style dangerouslySetInnerHTML={{ __html: `
@import url('https://use.typekit.net/xxxxxxxx.css');:root{--orange:#D1703C;--orange-light:#E08550;--gold:#F9CB8F;--gold-light:#FBDDB3;--cream:#FBF7F3;--cream-dark:#F5F0EA;--olive:#AEBA6C;--olive-dark:#8A9A4E;--dark:#2E3133;--dark-deep:#222222;--white:#FFFDF9;--text:#2E3133;--text-light:#5A5E62;--text-on-orange:#FBF7F3;}
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{font-family:'Krub', -apple-system, sans-serif;color:var(--text);background:var(--white);line-height:1.7;-webkit-font-smoothing:antialiased;}
h1, h2, h3, .heading-font, .btn, .profile-tab{font-family:futura-pt, 'Krub', sans-serif;font-weight:800;}
.slab{font-family:'Josefin Slab', serif;}
.container{max-width:1200px;margin:0 auto;padding:0 32px;}
.btn{display:inline-flex;align-items:center;gap:10px;padding:16px 36px;border-radius:100px;font-size:16px;font-weight:700;text-decoration:none;transition:all 0.3s ease;border:none;cursor:pointer;letter-spacing:0.3px;}
.btn-gold{background:var(--gold);color:var(--orange);}
.btn-gold:hover{background:var(--gold-light);transform:translateY(-2px);}
.btn-orange{background:var(--orange);color:var(--white);}
.btn-orange:hover{background:var(--orange-light);transform:translateY(-2px);}
.btn-outline{background:transparent;color:var(--orange);border:2px solid var(--orange);}
.btn-outline:hover{background:var(--orange);color:var(--white);}
.btn-white{background:var(--white);color:var(--orange);}
.btn-white:hover{background:var(--cream);transform:translateY(-2px);}
.btn-outline-white{background:transparent;color:var(--white);border:2px solid rgba(255,255,255,0.5);}
.btn-outline-white:hover{border-color:white;background:rgba(255,255,255,0.1);}
.btn svg{width:18px;height:18px;}
.doodle{position:absolute;pointer-events:none;opacity:0.15;}
.doodle-crosshatch{width:60px;height:60px;background:repeating-linear-gradient(45deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 8px),
repeating-linear-gradient(-45deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 8px);}
.doodle-dots{width:80px;height:80px;background:radial-gradient(circle 3px, currentColor 100%, transparent 100%);background-size:12px 12px;}
.hero{background:var(--orange);color:var(--text-on-orange);padding:80px 0 0;position:relative;overflow:hidden;min-height:90vh;}
.hero::after{content:'';position:absolute;bottom:-2px;left:0;right:0;height:80px;background:var(--cream);clip-path:ellipse(55% 100% at 50% 100%);}
.hero-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:48px;align-items:center;padding-bottom:100px;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:var(--gold);color:var(--orange);border-radius:100px;padding:8px 20px;font-size:13px;font-weight:700;margin-bottom:28px;letter-spacing:1px;text-transform:uppercase;}
.hero h1{font-size:clamp(42px, 5.5vw, 72px);line-height:1.05;color:var(--white);margin-bottom:24px;}
.hero h1 em{font-style:italic;color:var(--gold);}
.hero-sub{font-family:'Josefin Slab', serif;font-size:20px;line-height:1.7;color:rgba(255,255,255,0.85);margin-bottom:36px;max-width:500px;}
.hero-cta-group{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:40px;}
.hero-trust{display:flex;gap:28px;flex-wrap:wrap;}
.hero-trust-item{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:500;color:rgba(255,255,255,0.8);}
.hero-trust-item svg{width:18px;height:18px;color:var(--gold);flex-shrink:0;}
.hero-images{position:relative;}
.hero-img-main{width:100%;height:480px;object-fit:cover;border-radius:40% 60% 50% 50% / 50% 40% 60% 50%;box-shadow:0 20px 60px rgba(0,0,0,0.2);}
.hero-img-float{position:absolute;width:200px;height:200px;object-fit:cover;border-radius:50%;border:6px solid var(--orange);box-shadow:0 12px 40px rgba(0,0,0,0.15);}
.hero-img-float-1{bottom:-30px;left:-40px;}
.hero-img-float-2{top:-20px;right:-20px;width:160px;height:160px;}
.hero-doodle-1{position:absolute;bottom:40px;right:60px;color:var(--gold);opacity:0.4;font-size:48px;font-weight:800;transform:rotate(-12deg);font-family:futura-pt, 'Krub', sans-serif;}
.section{padding:100px 0;}
.section-cream{background:var(--cream);}
.section-orange{background:var(--orange);color:var(--text-on-orange);}
.section-olive{background:var(--olive);color:var(--white);}
.section-dark{background:var(--dark-deep);color:var(--white);}
.section-header{text-align:center;max-width:720px;margin:0 auto 64px;}
.section-header .label{display:inline-block;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--orange);margin-bottom:16px;background:var(--gold);padding:6px 18px;border-radius:100px;}
.section-orange .section-header .label{background:var(--gold);color:var(--orange);}
.section-olive .section-header .label{background:rgba(255,255,255,0.2);color:var(--white);}
.section-dark .section-header .label{background:rgba(255,255,255,0.1);color:var(--gold);}
.section-header h2{font-size:clamp(32px, 4vw, 52px);line-height:1.1;margin-bottom:20px;color:var(--dark);}
.section-orange .section-header h2, .section-olive .section-header h2, .section-dark .section-header h2{color:var(--white);}
.section-header p{font-family:'Josefin Slab', serif;font-size:19px;line-height:1.7;color:var(--text-light);}
.section-orange .section-header p{color:rgba(255,255,255,0.8);}
.section-olive .section-header p{color:rgba(255,255,255,0.85);}
.section-dark .section-header p{color:rgba(255,255,255,0.7);}
.wave-top{position:relative;margin-top:-1px;}
.wave-top::before{content:'';position:absolute;top:-60px;left:0;right:0;height:60px;background:inherit;clip-path:ellipse(55% 100% at 50% 100%);}
.intro-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:80px;align-items:center;}
.intro-image{position:relative;}
.intro-image img{width:100%;height:520px;object-fit:cover;border-radius:30% 70% 60% 40% / 50% 30% 70% 50%;}
.intro-image .float-badge{position:absolute;bottom:20px;right:-20px;background:var(--gold);color:var(--orange);border-radius:50%;width:120px;height:120px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:800;font-size:32px;line-height:1;box-shadow:0 8px 30px rgba(0,0,0,0.1);transform:rotate(8deg);}
.intro-image .float-badge span{font-size:12px;font-weight:600;letter-spacing:1px;margin-top:4px;}
.intro-content h2{font-size:clamp(32px, 3.5vw, 48px);line-height:1.1;margin-bottom:24px;color:var(--dark);}
.intro-content p{font-family:'Josefin Slab', serif;font-size:18px;line-height:1.8;color:var(--text-light);margin-bottom:20px;}
.intro-stat-row{display:flex;gap:40px;margin-top:40px;padding-top:32px;border-top:2px solid var(--gold);}
.intro-stat{text-align:center;}
.intro-stat .number{font-family:futura-pt, 'Krub', sans-serif;font-weight:800;font-size:44px;color:var(--orange);display:block;line-height:1.1;}
.intro-stat .label{font-size:14px;color:var(--text-light);font-weight:500;}
.benefits-grid{display:grid;grid-template-columns:repeat(3, 1fr);gap:28px;}
.benefit-card{background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:24px;padding:40px 28px;transition:transform 0.3s;position:relative;overflow:hidden;}
.benefit-card::before{content:'';position:absolute;top:-30px;right:-30px;width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,0.05);}
.benefit-card:hover{transform:translateY(-6px);}
.benefit-icon{width:56px;height:56px;background:var(--gold);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:20px;}
.benefit-icon svg{width:24px;height:24px;color:var(--orange);}
.benefit-card h3{font-size:22px;margin-bottom:12px;}
.benefit-card p{font-family:'Josefin Slab', serif;font-size:16px;line-height:1.7;color:rgba(255,255,255,0.75);}
.premrest-card{background:var(--white);border-radius:24px;padding:36px 28px;transition:transform 0.3s, box-shadow 0.3s;position:relative;overflow:hidden;border:none;}
.premrest-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:var(--gold);border-radius:24px 24px 0 0;}
.premrest-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,0.08);}
.premrest-card .benefit-icon{background:var(--orange);}
.premrest-card .benefit-icon svg{color:var(--white);}
.premrest-card h3{color:var(--dark);font-size:20px;margin-bottom:10px;}
.premrest-card p{color:var(--text-light);}
.colour-grid{display:grid;grid-template-columns:repeat(auto-fill, minmax(110px, 1fr));gap:14px;margin-bottom:48px;}
.colour-swatch{aspect-ratio:1;border-radius:20px;overflow:hidden;cursor:pointer;transition:transform 0.3s, box-shadow 0.3s;position:relative;}
.colour-swatch:hover{transform:scale(1.1) rotate(2deg);box-shadow:0 12px 36px rgba(0,0,0,0.15);}
.colour-swatch img{width:100%;height:100%;object-fit:cover;}
.colour-swatch .colour-name{position:absolute;bottom:0;left:0;right:0;padding:6px 8px;background:linear-gradient(to top, rgba(0,0,0,0.75), transparent);color:white;font-size:11px;font-weight:600;text-transform:capitalize;text-align:center;opacity:0;transition:opacity 0.3s;}
.colour-swatch:hover .colour-name{opacity:1;}
.profile-tabs{display:flex;justify-content:center;gap:10px;margin-bottom:48px;flex-wrap:wrap;}
.profile-tab{padding:12px 28px;border:2px solid var(--gold);border-radius:100px;background:transparent;font-size:15px;font-weight:700;color:var(--text);cursor:pointer;transition:all 0.3s;}
.profile-tab:hover, .profile-tab.active{background:var(--orange);color:var(--white);border-color:var(--orange);}
.profile-detail{display:none;animation:fadeIn 0.4s ease;}
.profile-detail.active{display:block;}
@keyframes fadeIn{from{opacity:0;transform:translateY(10px);}
to{opacity:1;}
}
.profile-content{display:grid;grid-template-columns:1.2fr 1fr;gap:60px;align-items:center;}
.profile-content h3{font-size:36px;margin-bottom:16px;color:var(--dark);}
.profile-content p{font-family:'Josefin Slab', serif;font-size:17px;line-height:1.8;color:var(--text-light);margin-bottom:12px;}
.profile-content .specs{margin-top:24px;}
.profile-content .spec-item{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid rgba(0,0,0,0.06);font-size:15px;color:var(--text);}
.profile-content .spec-item svg{width:18px;height:18px;color:var(--orange);flex-shrink:0;}
.profile-image{position:relative;}
.profile-image img{width:100%;height:400px;object-fit:cover;border-radius:50% 50% 50% 50% / 40% 40% 60% 60%;}
.app-grid{display:grid;grid-template-columns:repeat(4, 1fr);gap:20px;}
.app-card{position:relative;border-radius:24px;overflow:hidden;aspect-ratio:3/4;cursor:pointer;}
.app-card img{width:100%;height:100%;object-fit:cover;transition:transform 0.5s;}
.app-card:hover img{transform:scale(1.08);}
.app-card .app-label{position:absolute;bottom:0;left:0;right:0;padding:28px 20px 20px;background:linear-gradient(to top, rgba(0,0,0,0.8), transparent);color:white;font-weight:800;font-size:17px;}
.specs-grid{display:grid;grid-template-columns:repeat(3, 1fr);gap:24px;}
.spec-card{background:var(--white);border-radius:24px;padding:40px 28px;text-align:center;transition:transform 0.3s, box-shadow 0.3s;}
.spec-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,0.08);}
.spec-card svg{width:44px;height:44px;color:var(--orange);margin-bottom:20px;}
.spec-card h3{font-size:20px;margin-bottom:10px;color:var(--dark);}
.spec-card p{font-family:'Josefin Slab', serif;font-size:15px;line-height:1.7;color:var(--text-light);margin-bottom:20px;}
.spec-card a{display:inline-flex;align-items:center;gap:8px;color:var(--orange);text-decoration:none;font-weight:700;font-size:14px;}
.spec-card a:hover{text-decoration:underline;}
.cta-section{background:var(--dark-deep);padding:120px 0;text-align:center;color:white;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;top:-2px;left:0;right:0;height:60px;background:var(--cream);clip-path:ellipse(55% 100% at 50% 0%);}
.cta-section h2{font-size:clamp(36px, 4.5vw, 60px);margin-bottom:24px;line-height:1.1;position:relative;}
.cta-section p{font-family:'Josefin Slab', serif;font-size:20px;color:rgba(255,255,255,0.7);margin-bottom:40px;max-width:560px;margin-left:auto;margin-right:auto;position:relative;}
.cta-buttons{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;position:relative;}
.colour-modal-overlay{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);z-index:9999;align-items:center;justify-content:center;padding:32px;cursor:pointer;animation:modalFadeIn 0.25s ease;}
.colour-modal-overlay.active{display:flex;}
@keyframes modalFadeIn{from{opacity:0;}
to{opacity:1;}
}
.colour-modal-content{position:relative;max-width:800px;width:100%;text-align:center;cursor:default;animation:modalSlideUp 0.3s ease;}
@keyframes modalSlideUp{from{opacity:0;transform:translateY(30px);}
to{opacity:1;transform:translateY(0);}
}
.colour-modal-content img{width:100%;max-height:70vh;object-fit:contain;border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,0.4);}
.colour-modal-name{font-family:futura-pt, 'Krub', sans-serif;font-weight:800;font-size:clamp(24px, 3vw, 36px);color:var(--gold);margin-top:20px;letter-spacing:1px;}
.colour-modal-close{position:absolute;top:-16px;right:-16px;width:48px;height:48px;background:var(--orange);border:none;border-radius:50%;color:white;font-size:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform 0.2s, background 0.2s;box-shadow:0 4px 16px rgba(0,0,0,0.3);z-index:10;}
.colour-modal-close:hover{transform:scale(1.1) rotate(90deg);background:var(--orange-light);}
.samples-showcase{padding:80px 0;background:var(--white);text-align:center;position:relative;}
.samples-showcase::before{content:'';position:absolute;top:-1px;left:0;right:0;height:50px;background:var(--cream);clip-path:ellipse(55% 100% at 50% 0%);}
.samples-image-wrap{max-width:720px;margin:0 auto;position:relative;}
.samples-image-wrap img{width:100%;height:auto;border-radius:30% 70% 60% 40% / 50% 30% 70% 50%;box-shadow:0 20px 60px rgba(0,0,0,0.1);}
.samples-caption{font-family:'Josefin Slab', serif;font-size:18px;color:var(--text-light);margin-top:28px;font-style:italic;}
.samples-caption strong{color:var(--orange);font-style:normal;}
@media (max-width:968px){.hero-grid, .intro-grid, .profile-content{grid-template-columns:1fr;gap:40px;}
.benefits-grid{grid-template-columns:1fr 1fr;}
.app-grid{grid-template-columns:1fr 1fr;}
.specs-grid{grid-template-columns:1fr;}
.hero-images{order:-1;}
.hero-img-float{display:none;}
.hero{min-height:auto;}
.intro-image .float-badge{right:10px;bottom:10px;width:90px;height:90px;font-size:24px;}
.intro-image .float-badge span{font-size:10px;}
}
@media (max-width:640px){.benefits-grid{grid-template-columns:1fr;}
.colour-grid{grid-template-columns:repeat(auto-fill, minmax(80px, 1fr));gap:10px;}
.hero-trust{flex-direction:column;gap:12px;}
.app-grid{grid-template-columns:1fr;}
.hero h1{font-size:38px;}
}


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


@import url('https://use.typekit.net/xxxxxxxx.css');:root{--orange:#D1703C;--orange-light:#E08550;--gold:#F9CB8F;--gold-light:#FBDDB3;--cream:#FBF7F3;--cream-dark:#F5F0EA;--olive:#AEBA6C;--olive-dark:#8A9A4E;--dark:#2E3133;--dark-deep:#222222;--white:#FFFDF9;--text:#2E3133;--text-light:#5A5E62;--text-on-orange:#FBF7F3;}
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{font-family:'Krub', -apple-system, sans-serif;color:var(--text);background:var(--white);line-height:1.7;-webkit-font-smoothing:antialiased;}
h1, h2, h3, .heading-font, .btn, .profile-tab{font-family:futura-pt, 'Krub', sans-serif;font-weight:800;}
.slab{font-family:'Josefin Slab', serif;}
.container{max-width:1200px;margin:0 auto;padding:0 32px;}
.btn{display:inline-flex;align-items:center;gap:10px;padding:16px 36px;border-radius:100px;font-size:16px;font-weight:700;text-decoration:none;transition:all 0.3s ease;border:none;cursor:pointer;letter-spacing:0.3px;}
.btn-gold{background:var(--gold);color:var(--orange);}
.btn-gold:hover{background:var(--gold-light);transform:translateY(-2px);}
.btn-orange{background:var(--orange);color:var(--white);}
.btn-orange:hover{background:var(--orange-light);transform:translateY(-2px);}
.btn-outline{background:transparent;color:var(--orange);border:2px solid var(--orange);}
.btn-outline:hover{background:var(--orange);color:var(--white);}
.btn-white{background:var(--white);color:var(--orange);}
.btn-white:hover{background:var(--cream);transform:translateY(-2px);}
.btn-outline-white{background:transparent;color:var(--white);border:2px solid rgba(255,255,255,0.5);}
.btn-outline-white:hover{border-color:white;background:rgba(255,255,255,0.1);}
.btn svg{width:18px;height:18px;}
.doodle{position:absolute;pointer-events:none;opacity:0.15;}
.doodle-crosshatch{width:60px;height:60px;background:repeating-linear-gradient(45deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 8px),
repeating-linear-gradient(-45deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 8px);}
.doodle-dots{width:80px;height:80px;background:radial-gradient(circle 3px, currentColor 100%, transparent 100%);background-size:12px 12px;}
.hero{background:var(--orange);color:var(--text-on-orange);padding:80px 0 0;position:relative;overflow:hidden;min-height:90vh;}
.hero::after{content:'';position:absolute;bottom:-2px;left:0;right:0;height:80px;background:var(--cream);clip-path:ellipse(55% 100% at 50% 100%);}
.hero-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:48px;align-items:center;padding-bottom:100px;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:var(--gold);color:var(--orange);border-radius:100px;padding:8px 20px;font-size:13px;font-weight:700;margin-bottom:28px;letter-spacing:1px;text-transform:uppercase;}
.hero h1{font-size:clamp(42px, 5.5vw, 72px);line-height:1.05;color:var(--white);margin-bottom:24px;}
.hero h1 em{font-style:italic;color:var(--gold);}
.hero-sub{font-family:'Josefin Slab', serif;font-size:20px;line-height:1.7;color:rgba(255,255,255,0.85);margin-bottom:36px;max-width:500px;}
.hero-cta-group{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:40px;}
.hero-trust{display:flex;gap:28px;flex-wrap:wrap;}
.hero-trust-item{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:500;color:rgba(255,255,255,0.8);}
.hero-trust-item svg{width:18px;height:18px;color:var(--gold);flex-shrink:0;}
.hero-images{position:relative;}
.hero-img-main{width:100%;height:480px;object-fit:cover;border-radius:40% 60% 50% 50% / 50% 40% 60% 50%;box-shadow:0 20px 60px rgba(0,0,0,0.2);}
.hero-img-float{position:absolute;width:200px;height:200px;object-fit:cover;border-radius:50%;border:6px solid var(--orange);box-shadow:0 12px 40px rgba(0,0,0,0.15);}
.hero-img-float-1{bottom:-30px;left:-40px;}
.hero-img-float-2{top:-20px;right:-20px;width:160px;height:160px;}
.hero-doodle-1{position:absolute;bottom:40px;right:60px;color:var(--gold);opacity:0.4;font-size:48px;font-weight:800;transform:rotate(-12deg);font-family:futura-pt, 'Krub', sans-serif;}
.section{padding:100px 0;}
.section-cream{background:var(--cream);}
.section-orange{background:var(--orange);color:var(--text-on-orange);}
.section-olive{background:var(--olive);color:var(--white);}
.section-dark{background:var(--dark-deep);color:var(--white);}
.section-header{text-align:center;max-width:720px;margin:0 auto 64px;}
.section-header .label{display:inline-block;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--orange);margin-bottom:16px;background:var(--gold);padding:6px 18px;border-radius:100px;}
.section-orange .section-header .label{background:var(--gold);color:var(--orange);}
.section-olive .section-header .label{background:rgba(255,255,255,0.2);color:var(--white);}
.section-dark .section-header .label{background:rgba(255,255,255,0.1);color:var(--gold);}
.section-header h2{font-size:clamp(32px, 4vw, 52px);line-height:1.1;margin-bottom:20px;color:var(--dark);}
.section-orange .section-header h2, .section-olive .section-header h2, .section-dark .section-header h2{color:var(--white);}
.section-header p{font-family:'Josefin Slab', serif;font-size:19px;line-height:1.7;color:var(--text-light);}
.section-orange .section-header p{color:rgba(255,255,255,0.8);}
.section-olive .section-header p{color:rgba(255,255,255,0.85);}
.section-dark .section-header p{color:rgba(255,255,255,0.7);}
.wave-top{position:relative;margin-top:-1px;}
.wave-top::before{content:'';position:absolute;top:-60px;left:0;right:0;height:60px;background:inherit;clip-path:ellipse(55% 100% at 50% 100%);}
.intro-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:80px;align-items:center;}
.intro-image{position:relative;}
.intro-image img{width:100%;height:520px;object-fit:cover;border-radius:30% 70% 60% 40% / 50% 30% 70% 50%;}
.intro-image .float-badge{position:absolute;bottom:20px;right:-20px;background:var(--gold);color:var(--orange);border-radius:50%;width:120px;height:120px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:800;font-size:32px;line-height:1;box-shadow:0 8px 30px rgba(0,0,0,0.1);transform:rotate(8deg);}
.intro-image .float-badge span{font-size:12px;font-weight:600;letter-spacing:1px;margin-top:4px;}
.intro-content h2{font-size:clamp(32px, 3.5vw, 48px);line-height:1.1;margin-bottom:24px;color:var(--dark);}
.intro-content p{font-family:'Josefin Slab', serif;font-size:18px;line-height:1.8;color:var(--text-light);margin-bottom:20px;}
.intro-stat-row{display:flex;gap:40px;margin-top:40px;padding-top:32px;border-top:2px solid var(--gold);}
.intro-stat{text-align:center;}
.intro-stat .number{font-family:futura-pt, 'Krub', sans-serif;font-weight:800;font-size:44px;color:var(--orange);display:block;line-height:1.1;}
.intro-stat .label{font-size:14px;color:var(--text-light);font-weight:500;}
.benefits-grid{display:grid;grid-template-columns:repeat(3, 1fr);gap:28px;}
.benefit-card{background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:24px;padding:40px 28px;transition:transform 0.3s;position:relative;overflow:hidden;}
.benefit-card::before{content:'';position:absolute;top:-30px;right:-30px;width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,0.05);}
.benefit-card:hover{transform:translateY(-6px);}
.benefit-icon{width:56px;height:56px;background:var(--gold);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:20px;}
.benefit-icon svg{width:24px;height:24px;color:var(--orange);}
.benefit-card h3{font-size:22px;margin-bottom:12px;}
.benefit-card p{font-family:'Josefin Slab', serif;font-size:16px;line-height:1.7;color:rgba(255,255,255,0.75);}
.premrest-card{background:var(--white);border-radius:24px;padding:36px 28px;transition:transform 0.3s, box-shadow 0.3s;position:relative;overflow:hidden;border:none;}
.premrest-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:var(--gold);border-radius:24px 24px 0 0;}
.premrest-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,0.08);}
.premrest-card .benefit-icon{background:var(--orange);}
.premrest-card .benefit-icon svg{color:var(--white);}
.premrest-card h3{color:var(--dark);font-size:20px;margin-bottom:10px;}
.premrest-card p{color:var(--text-light);}
.colour-grid{display:grid;grid-template-columns:repeat(auto-fill, minmax(110px, 1fr));gap:14px;margin-bottom:48px;}
.colour-swatch{aspect-ratio:1;border-radius:20px;overflow:hidden;cursor:pointer;transition:transform 0.3s, box-shadow 0.3s;position:relative;}
.colour-swatch:hover{transform:scale(1.1) rotate(2deg);box-shadow:0 12px 36px rgba(0,0,0,0.15);}
.colour-swatch img{width:100%;height:100%;object-fit:cover;}
.colour-swatch .colour-name{position:absolute;bottom:0;left:0;right:0;padding:6px 8px;background:linear-gradient(to top, rgba(0,0,0,0.75), transparent);color:white;font-size:11px;font-weight:600;text-transform:capitalize;text-align:center;opacity:0;transition:opacity 0.3s;}
.colour-swatch:hover .colour-name{opacity:1;}
.profile-tabs{display:flex;justify-content:center;gap:10px;margin-bottom:48px;flex-wrap:wrap;}
.profile-tab{padding:12px 28px;border:2px solid var(--gold);border-radius:100px;background:transparent;font-size:15px;font-weight:700;color:var(--text);cursor:pointer;transition:all 0.3s;}
.profile-tab:hover, .profile-tab.active{background:var(--orange);color:var(--white);border-color:var(--orange);}
.profile-detail{display:none;animation:fadeIn 0.4s ease;}
.profile-detail.active{display:block;}
@keyframes fadeIn{from{opacity:0;transform:translateY(10px);}
to{opacity:1;}
}
.profile-content{display:grid;grid-template-columns:1.2fr 1fr;gap:60px;align-items:center;}
.profile-content h3{font-size:36px;margin-bottom:16px;color:var(--dark);}
.profile-content p{font-family:'Josefin Slab', serif;font-size:17px;line-height:1.8;color:var(--text-light);margin-bottom:12px;}
.profile-content .specs{margin-top:24px;}
.profile-content .spec-item{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid rgba(0,0,0,0.06);font-size:15px;color:var(--text);}
.profile-content .spec-item svg{width:18px;height:18px;color:var(--orange);flex-shrink:0;}
.profile-image{position:relative;}
.profile-image img{width:100%;height:400px;object-fit:cover;border-radius:50% 50% 50% 50% / 40% 40% 60% 60%;}
.app-grid{display:grid;grid-template-columns:repeat(4, 1fr);gap:20px;}
.app-card{position:relative;border-radius:24px;overflow:hidden;aspect-ratio:3/4;cursor:pointer;}
.app-card img{width:100%;height:100%;object-fit:cover;transition:transform 0.5s;}
.app-card:hover img{transform:scale(1.08);}
.app-card .app-label{position:absolute;bottom:0;left:0;right:0;padding:28px 20px 20px;background:linear-gradient(to top, rgba(0,0,0,0.8), transparent);color:white;font-weight:800;font-size:17px;}
.specs-grid{display:grid;grid-template-columns:repeat(3, 1fr);gap:24px;}
.spec-card{background:var(--white);border-radius:24px;padding:40px 28px;text-align:center;transition:transform 0.3s, box-shadow 0.3s;}
.spec-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,0.08);}
.spec-card svg{width:44px;height:44px;color:var(--orange);margin-bottom:20px;}
.spec-card h3{font-size:20px;margin-bottom:10px;color:var(--dark);}
.spec-card p{font-family:'Josefin Slab', serif;font-size:15px;line-height:1.7;color:var(--text-light);margin-bottom:20px;}
.spec-card a{display:inline-flex;align-items:center;gap:8px;color:var(--orange);text-decoration:none;font-weight:700;font-size:14px;}
.spec-card a:hover{text-decoration:underline;}
.cta-section{background:var(--dark-deep);padding:120px 0;text-align:center;color:white;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;top:-2px;left:0;right:0;height:60px;background:var(--cream);clip-path:ellipse(55% 100% at 50% 0%);}
.cta-section h2{font-size:clamp(36px, 4.5vw, 60px);margin-bottom:24px;line-height:1.1;position:relative;}
.cta-section p{font-family:'Josefin Slab', serif;font-size:20px;color:rgba(255,255,255,0.7);margin-bottom:40px;max-width:560px;margin-left:auto;margin-right:auto;position:relative;}
.cta-buttons{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;position:relative;}
.colour-modal-overlay{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);z-index:9999;align-items:center;justify-content:center;padding:32px;cursor:pointer;animation:modalFadeIn 0.25s ease;}
.colour-modal-overlay.active{display:flex;}
@keyframes modalFadeIn{from{opacity:0;}
to{opacity:1;}
}
.colour-modal-content{position:relative;max-width:800px;width:100%;text-align:center;cursor:default;animation:modalSlideUp 0.3s ease;}
@keyframes modalSlideUp{from{opacity:0;transform:translateY(30px);}
to{opacity:1;transform:translateY(0);}
}
.colour-modal-content img{width:100%;max-height:70vh;object-fit:contain;border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,0.4);}
.colour-modal-name{font-family:futura-pt, 'Krub', sans-serif;font-weight:800;font-size:clamp(24px, 3vw, 36px);color:var(--gold);margin-top:20px;letter-spacing:1px;}
.colour-modal-close{position:absolute;top:-16px;right:-16px;width:48px;height:48px;background:var(--orange);border:none;border-radius:50%;color:white;font-size:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform 0.2s, background 0.2s;box-shadow:0 4px 16px rgba(0,0,0,0.3);z-index:10;}
.colour-modal-close:hover{transform:scale(1.1) rotate(90deg);background:var(--orange-light);}
.samples-showcase{padding:80px 0;background:var(--white);text-align:center;position:relative;}
.samples-showcase::before{content:'';position:absolute;top:-1px;left:0;right:0;height:50px;background:var(--cream);clip-path:ellipse(55% 100% at 50% 0%);}
.samples-image-wrap{max-width:720px;margin:0 auto;position:relative;}
.samples-image-wrap img{width:100%;height:auto;border-radius:30% 70% 60% 40% / 50% 30% 70% 50%;box-shadow:0 20px 60px rgba(0,0,0,0.1);}
.samples-caption{font-family:'Josefin Slab', serif;font-size:18px;color:var(--text-light);margin-top:28px;font-style:italic;}
.samples-caption strong{color:var(--orange);font-style:normal;}
@media (max-width:968px){.hero-grid, .intro-grid, .profile-content{grid-template-columns:1fr;gap:40px;}
.benefits-grid{grid-template-columns:1fr 1fr;}
.app-grid{grid-template-columns:1fr 1fr;}
.specs-grid{grid-template-columns:1fr;}
.hero-images{order:-1;}
.hero-img-float{display:none;}
.hero{min-height:auto;}
.intro-image .float-badge{right:10px;bottom:10px;width:90px;height:90px;font-size:24px;}
.intro-image .float-badge span{font-size:10px;}
}
@media (max-width:640px){.benefits-grid{grid-template-columns:1fr;}
.colour-grid{grid-template-columns:repeat(auto-fill, minmax(80px, 1fr));gap:10px;}
.hero-trust{flex-direction:column;gap:12px;}
.app-grid{grid-template-columns:1fr;}
.hero h1{font-size:38px;}
}

@import url(&#x27;https://use.typekit.net/xxxxxxxx.css&#x27;);:root{--orange:#D1703C;--orange-light:#E08550;--gold:#F9CB8F;--gold-light:#FBDDB3;--cream:#FBF7F3;--cream-dark:#F5F0EA;--olive:#AEBA6C;--olive-dark:#8A9A4E;--dark:#2E3133;--dark-deep:#222222;--white:#FFFDF9;--text:#2E3133;--text-light:#5A5E62;--text-on-orange:#FBF7F3;}#comcork-root,#comcork-root *{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;}#comcork-root{font-family:&#x27;Krub&#x27;,-apple-system,sans-serif;color:var(--text);background:var(--white);line-height:1.7;-webkit-font-smoothing:antialiased;}h1,h2,h3,.heading-font,.btn,.profile-tab{font-family:futura-pt,&#x27;Krub&#x27;,sans-serif;font-weight:800;}.slab{font-family:&#x27;Josefin Slab&#x27;,serif;}.container{max-width:1200px;margin:0 auto;padding:0 32px;}.btn{display:inline-flex;align-items:center;gap:10px;padding:16px 36px;border-radius:100px;font-size:16px;font-weight:700;text-decoration:none;transition:all 0.3s ease;border:none;cursor:pointer;letter-spacing:0.3px;}.btn-gold{background:var(--gold);color:var(--orange);}.btn-gold:hover{background:var(--gold-light);transform:translateY(-2px);}.btn-orange{background:var(--orange);color:var(--white);}.btn-orange:hover{background:var(--orange-light);transform:translateY(-2px);}.btn-outline{background:transparent;color:var(--orange);border:2px solid var(--orange);}.btn-outline:hover{background:var(--orange);color:var(--white);}.btn-white{background:var(--white);color:var(--orange);}.btn-white:hover{background:var(--cream);transform:translateY(-2px);}.btn-outline-white{background:transparent;color:var(--white);border:2px solid rgba(255,255,255,0.5);}.btn-outline-white:hover{border-color:white;background:rgba(255,255,255,0.1);}.btn svg{width:18px;height:18px;}.doodle{position:absolute;pointer-events:none;opacity:0.15;}.doodle-crosshatch{width:60px;height:60px;background:repeating-linear-gradient(45deg,currentColor 0px,currentColor 2px,transparent 2px,transparent 8px),repeating-linear-gradient(-45deg,currentColor 0px,currentColor 2px,transparent 2px,transparent 8px);}.doodle-dots{width:80px;height:80px;background:radial-gradient(circle 3px,currentColor 100%,transparent 100%);background-size:12px 12px;}.hero{background:var(--orange);color:var(--text-on-orange);padding:80px 0 0;position:relative;overflow:hidden;min-height:90vh;}.hero::after{content:&#x27;&#x27;;position:absolute;bottom:-2px;left:0;right:0;height:80px;background:var(--cream);clip-path:ellipse(55% 100% at 50% 100%);}.hero-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:48px;align-items:center;padding-bottom:100px;}.hero-badge{display:inline-flex;align-items:center;gap:8px;background:var(--gold);color:var(--orange);border-radius:100px;padding:8px 20px;font-size:13px;font-weight:700;margin-bottom:28px;letter-spacing:1px;text-transform:uppercase;}.hero h1{font-size:clamp(42px,5.5vw,72px);line-height:1.05;color:var(--white);margin-bottom:24px;}.hero h1 em{font-style:italic;color:var(--gold);}.hero-sub{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:20px;line-height:1.7;color:rgba(255,255,255,0.85);margin-bottom:36px;max-width:500px;}.hero-cta-group{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:40px;}.hero-trust{display:flex;gap:28px;flex-wrap:wrap;}.hero-trust-item{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:500;color:rgba(255,255,255,0.8);}.hero-trust-item svg{width:18px;height:18px;color:var(--gold);flex-shrink:0;}.hero-images{position:relative;}.hero-img-main{width:100%;height:480px;object-fit:cover;border-radius:40% 60% 50% 50% / 50% 40% 60% 50%;box-shadow:0 20px 60px rgba(0,0,0,0.2);}.hero-img-float{position:absolute;width:200px;height:200px;object-fit:cover;border-radius:50%;border:6px solid var(--orange);box-shadow:0 12px 40px rgba(0,0,0,0.15);}.hero-img-float-1{bottom:-30px;left:-40px;}.hero-img-float-2{top:-20px;right:-20px;width:160px;height:160px;}.hero-doodle-1{position:absolute;bottom:40px;right:60px;color:var(--gold);opacity:0.4;font-size:48px;font-weight:800;transform:rotate(-12deg);font-family:futura-pt,&#x27;Krub&#x27;,sans-serif;}.section{padding:100px 0;}.section-cream{background:var(--cream);}.section-orange{background:var(--orange);color:var(--text-on-orange);}.section-olive{background:var(--olive);color:var(--white);}.section-dark{background:var(--dark-deep);color:var(--white);}.section-header{text-align:center;max-width:720px;margin:0 auto 64px;}.section-header .label{display:inline-block;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--orange);margin-bottom:16px;background:var(--gold);padding:6px 18px;border-radius:100px;}.section-orange .section-header .label{background:var(--gold);color:var(--orange);}.section-olive .section-header .label{background:rgba(255,255,255,0.2);color:var(--white);}.section-dark .section-header .label{background:rgba(255,255,255,0.1);color:var(--gold);}.section-header h2{font-size:clamp(32px,4vw,52px);line-height:1.1;margin-bottom:20px;color:var(--dark);}.section-orange .section-header h2,.section-olive .section-header h2,.section-dark .section-header h2{color:var(--white);}.section-header p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:19px;line-height:1.7;color:var(--text-light);}.section-orange .section-header p{color:rgba(255,255,255,0.8);}.section-olive .section-header p{color:rgba(255,255,255,0.85);}.section-dark .section-header p{color:rgba(255,255,255,0.7);}.wave-top{position:relative;margin-top:-1px;}.wave-top::before{content:&#x27;&#x27;;position:absolute;top:-60px;left:0;right:0;height:60px;background:inherit;clip-path:ellipse(55% 100% at 50% 100%);}.intro-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:80px;align-items:center;}.intro-image{position:relative;}.intro-image img{width:100%;height:520px;object-fit:cover;border-radius:30% 70% 60% 40% / 50% 30% 70% 50%;}.intro-image .float-badge{position:absolute;bottom:20px;right:-20px;background:var(--gold);color:var(--orange);border-radius:50%;width:120px;height:120px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:800;font-size:32px;line-height:1;box-shadow:0 8px 30px rgba(0,0,0,0.1);transform:rotate(8deg);}.intro-image .float-badge span{font-size:12px;font-weight:600;letter-spacing:1px;margin-top:4px;}.intro-content h2{font-size:clamp(32px,3.5vw,48px);line-height:1.1;margin-bottom:24px;color:var(--dark);}.intro-content p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:18px;line-height:1.8;color:var(--text-light);margin-bottom:20px;}.intro-stat-row{display:flex;gap:40px;margin-top:40px;padding-top:32px;border-top:2px solid var(--gold);}.intro-stat{text-align:center;}.intro-stat .number{font-family:futura-pt,&#x27;Krub&#x27;,sans-serif;font-weight:800;font-size:44px;color:var(--orange);display:block;line-height:1.1;}.intro-stat .label{font-size:14px;color:var(--text-light);font-weight:500;}.benefits-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;}.benefit-card{background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:24px;padding:40px 28px;transition:transform 0.3s;position:relative;overflow:hidden;}.benefit-card::before{content:&#x27;&#x27;;position:absolute;top:-30px;right:-30px;width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,0.05);}.benefit-card:hover{transform:translateY(-6px);}.benefit-icon{width:56px;height:56px;background:var(--gold);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:20px;}.benefit-icon svg{width:24px;height:24px;color:var(--orange);}.benefit-card h3{font-size:22px;margin-bottom:12px;}.benefit-card p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:16px;line-height:1.7;color:rgba(255,255,255,0.75);}.premrest-card{background:var(--white);border-radius:24px;padding:36px 28px;transition:transform 0.3s,box-shadow 0.3s;position:relative;overflow:hidden;border:none;}.premrest-card::before{content:&#x27;&#x27;;position:absolute;top:0;left:0;right:0;height:4px;background:var(--gold);border-radius:24px 24px 0 0;}.premrest-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,0.08);}.premrest-card .benefit-icon{background:var(--orange);}.premrest-card .benefit-icon svg{color:var(--white);}.premrest-card h3{color:var(--dark);font-size:20px;margin-bottom:10px;}.premrest-card p{color:var(--text-light);}.colour-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:14px;margin-bottom:48px;}.colour-swatch{aspect-ratio:1;border-radius:20px;overflow:hidden;cursor:pointer;transition:transform 0.3s,box-shadow 0.3s;position:relative;}.colour-swatch:hover{transform:scale(1.1) rotate(2deg);box-shadow:0 12px 36px rgba(0,0,0,0.15);}.colour-swatch img{width:100%;height:100%;object-fit:cover;}.colour-swatch .colour-name{position:absolute;bottom:0;left:0;right:0;padding:6px 8px;background:linear-gradient(to top,rgba(0,0,0,0.75),transparent);color:white;font-size:11px;font-weight:600;text-transform:capitalize;text-align:center;opacity:0;transition:opacity 0.3s;}.colour-swatch:hover .colour-name{opacity:1;}.profile-tabs{display:flex;justify-content:center;gap:10px;margin-bottom:48px;flex-wrap:wrap;}.profile-tab{padding:12px 28px;border:2px solid var(--gold);border-radius:100px;background:transparent;font-size:15px;font-weight:700;color:var(--text);cursor:pointer;transition:all 0.3s;}.profile-tab:hover,.profile-tab.active{background:var(--orange);color:var(--white);border-color:var(--orange);}.profile-detail{display:none;animation:fadeIn 0.4s ease;}.profile-detail.active{display:block;}@keyframes fadeIn{from{opacity:0;transform:translateY(10px);}to{opacity:1;}}.profile-content{display:grid;grid-template-columns:1.2fr 1fr;gap:60px;align-items:center;}.profile-content h3{font-size:36px;margin-bottom:16px;color:var(--dark);}.profile-content p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:17px;line-height:1.8;color:var(--text-light);margin-bottom:12px;}.profile-content .specs{margin-top:24px;}.profile-content .spec-item{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid rgba(0,0,0,0.06);font-size:15px;color:var(--text);}.profile-content .spec-item svg{width:18px;height:18px;color:var(--orange);flex-shrink:0;}.profile-image{position:relative;}.profile-image img{width:100%;height:400px;object-fit:cover;border-radius:50% 50% 50% 50% / 40% 40% 60% 60%;}.app-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}.app-card{position:relative;border-radius:24px;overflow:hidden;aspect-ratio:3/4;cursor:pointer;}.app-card img{width:100%;height:100%;object-fit:cover;transition:transform 0.5s;}.app-card:hover img{transform:scale(1.08);}.app-card .app-label{position:absolute;bottom:0;left:0;right:0;padding:28px 20px 20px;background:linear-gradient(to top,rgba(0,0,0,0.8),transparent);color:white;font-weight:800;font-size:17px;}.specs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}.spec-card{background:var(--white);border-radius:24px;padding:40px 28px;text-align:center;transition:transform 0.3s,box-shadow 0.3s;}.spec-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,0.08);}.spec-card svg{width:44px;height:44px;color:var(--orange);margin-bottom:20px;}.spec-card h3{font-size:20px;margin-bottom:10px;color:var(--dark);}.spec-card p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:15px;line-height:1.7;color:var(--text-light);margin-bottom:20px;}.spec-card a{display:inline-flex;align-items:center;gap:8px;color:var(--orange);text-decoration:none;font-weight:700;font-size:14px;}.spec-card a:hover{text-decoration:underline;}.cta-section{background:var(--dark-deep);padding:120px 0;text-align:center;color:white;position:relative;overflow:hidden;}.cta-section::before{content:&#x27;&#x27;;position:absolute;top:-2px;left:0;right:0;height:60px;background:var(--cream);clip-path:ellipse(55% 100% at 50% 0%);}.cta-section h2{font-size:clamp(36px,4.5vw,60px);margin-bottom:24px;line-height:1.1;position:relative;}.cta-section p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:20px;color:rgba(255,255,255,0.7);margin-bottom:40px;max-width:560px;margin-left:auto;margin-right:auto;position:relative;}.cta-buttons{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;position:relative;}.colour-modal-overlay{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);z-index:9999;align-items:center;justify-content:center;padding:32px;cursor:pointer;animation:modalFadeIn 0.25s ease;}.colour-modal-overlay.active{display:flex;}@keyframes modalFadeIn{from{opacity:0;}to{opacity:1;}}.colour-modal-content{position:relative;max-width:800px;width:100%;text-align:center;cursor:default;animation:modalSlideUp 0.3s ease;}@keyframes modalSlideUp{from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}.colour-modal-content img{width:100%;max-height:70vh;object-fit:contain;border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,0.4);}.colour-modal-name{font-family:futura-pt,&#x27;Krub&#x27;,sans-serif;font-weight:800;font-size:clamp(24px,3vw,36px);color:var(--gold);margin-top:20px;letter-spacing:1px;}.colour-modal-close{position:absolute;top:-16px;right:-16px;width:48px;height:48px;background:var(--orange);border:none;border-radius:50%;color:white;font-size:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform 0.2s,background 0.2s;box-shadow:0 4px 16px rgba(0,0,0,0.3);z-index:10;}.colour-modal-close:hover{transform:scale(1.1) rotate(90deg);background:var(--orange-light);}.samples-showcase{padding:80px 0;background:var(--white);text-align:center;position:relative;}.samples-showcase::before{content:&#x27;&#x27;;position:absolute;top:-1px;left:0;right:0;height:50px;background:var(--cream);clip-path:ellipse(55% 100% at 50% 0%);}.samples-image-wrap{max-width:720px;margin:0 auto;position:relative;}.samples-image-wrap img{width:100%;height:auto;border-radius:30% 70% 60% 40% / 50% 30% 70% 50%;box-shadow:0 20px 60px rgba(0,0,0,0.1);}.samples-caption{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:18px;color:var(--text-light);margin-top:28px;font-style:italic;}.samples-caption strong{color:var(--orange);font-style:normal;}@media (max-width:968px){.hero-grid,.intro-grid,.profile-content{grid-template-columns:1fr;gap:40px;}.benefits-grid{grid-template-columns:1fr 1fr;}.app-grid{grid-template-columns:1fr 1fr;}.specs-grid{grid-template-columns:1fr;}.hero-images{order:-1;}.hero-img-float{display:none;}.hero{min-height:auto;}.intro-image .float-badge{right:10px;bottom:10px;width:90px;height:90px;font-size:24px;}.intro-image .float-badge span{font-size:10px;}}@media (max-width:640px){.benefits-grid{grid-template-columns:1fr;}.colour-grid{grid-template-columns:repeat(auto-fill,minmax(80px,1fr));gap:10px;}.hero-trust{flex-direction:column;gap:12px;}.app-grid{grid-template-columns:1fr;}.hero h1{font-size:38px;}}` }} />
      {/* Webflow page content - exact export */}
      <div dangerouslySetInnerHTML={{ __html: `
  
  <body>
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
                    <a href="cleaning.html" class="nav_menu_links w-inline-block">
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
                  <a href="cleaning.html" class="nav_menu_link light w-nav-link">Cleaning</a>
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
      <div class="main-wrapper">
        <div class="cc-section">
          <div class="cc-container">
            <div class="cc-text-center cc-mb-40">
              <div class="cc-section-subheading">NATURE MEETS DESIGN</div>
              <h2 class="cc-section-heading">What is ComCork?</h2>
              <p class="cc-body-text">ComCork is a premium decorative cork wall and ceiling tile made from natural cork oak bark. Each tile showcases cork’s organic beauty — rich textures, warm tones, and a tactile finish that transforms any commercial space into something people actually want to spend time in. Available in 29 designer colours and multiple profile textures, ComCork brings nature indoors while delivering serious acoustic and thermal performance.</p>
            </div>
            <div class="cc-hero-content">
              <h1 class="cc-display-heading">Cork That Rocks.</h1>
              <p class="cc-hero-sub">Australia’s most beautiful wall and ceiling finish. Natural cork tiles in 29 stunning colours — supplied and installed nationwide by Premrest.</p>
              <div class="cc-btn-group">
                <a href="tel:1300207915" class="cc-btn-primary w-button">Call 1300 207 915</a>
                <a href="mailto:projects@premrest.com.au" class="cc-btn-secondary w-button">Email Us</a>
              </div>
            </div>
            <div class="cc-hero-content">
              <h1 class="cc-display-heading">Cork That Rocks.</h1>
              <p class="cc-hero-sub">Australia’s most beautiful wall and ceiling finish. Natural cork tiles in 29 stunning colours — supplied and installed nationwide by Premrest.</p>
              <div class="cc-btn-group">
                <a href="tel:1300207915" class="cc-btn-primary w-button">Call 1300 207 915</a>
                <a href="mailto:projects@premrest.com.au" class="cc-btn-secondary w-button">Email Us</a>
              </div>
            </div>
          </div>
        </div>
        <div class="cc-section-cream">
          <div class="cc-container">
            <div class="cc-text-center cc-mb-40">
              <div class="cc-section-subheading">BEAUTY WITH BRAINS</div>
              <h2 class="cc-section-heading">Why ComCork?</h2>
            </div>
            <div class="cc-grid-3col">
              <div class="cc-benefit-card">
                <div class="cc-card-icon">🎨</div>
                <div class="cc-card-title">29 Stunning Colours</div>
                <p class="cc-card-text">From warm naturals to bold statement hues. Every colour designed to make your space unforgettable.</p>
              </div>
              <div class="cc-benefit-card">
                <div class="cc-card-icon">🌿</div>
                <div class="cc-card-title">100% Natural Cork</div>
                <p class="cc-card-text">Harvested from cork oak bark without harming the tree. A genuinely sustainable, renewable material.</p>
              </div>
              <div class="cc-benefit-card">
                <div class="cc-card-icon">🔇</div>
                <div class="cc-card-title">Acoustic Perfection</div>
                <p class="cc-card-text">NRC up to 0.7. Naturally absorbs sound, reducing echo and creating calmer, more productive spaces.</p>
              </div>
              <div class="cc-benefit-card">
                <div class="cc-card-icon">🏢</div>
                <div class="cc-card-title">Fire Rated</div>
                <p class="cc-card-text">Group 1 fire rating. Meets the strictest Australian building codes for commercial interiors.</p>
              </div>
              <div class="cc-benefit-card">
                <div class="cc-card-icon">⚗️</div>
                <div class="cc-card-title">Low VOC &amp; Hypoallergenic</div>
                <p class="cc-card-text">No nasty off-gassing. Perfect for healthcare, education, and any space where air quality matters.</p>
              </div>
              <div class="cc-benefit-card">
                <div class="cc-card-icon">🛠️</div>
                <div class="cc-card-title">Easy Installation</div>
                <p class="cc-card-text">Lightweight tiles install fast with adhesive. Premrest handles everything from measurement to completion.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="cc-hidden">
          <div class="padding-global padding-section-large">
            <div class="container-large"></div>
            <div class="w-embed">
              <link rel="preconnect" href="https://fonts.googleapis.com">
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
              <link href="https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&family=Josefin+Slab:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap" rel="stylesheet">
              <style>
@import url('https://use.typekit.net/xxxxxxxx.css');:root{--orange:#D1703C;--orange-light:#E08550;--gold:#F9CB8F;--gold-light:#FBDDB3;--cream:#FBF7F3;--cream-dark:#F5F0EA;--olive:#AEBA6C;--olive-dark:#8A9A4E;--dark:#2E3133;--dark-deep:#222222;--white:#FFFDF9;--text:#2E3133;--text-light:#5A5E62;--text-on-orange:#FBF7F3;}
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{font-family:'Krub', -apple-system, sans-serif;color:var(--text);background:var(--white);line-height:1.7;-webkit-font-smoothing:antialiased;}
h1, h2, h3, .heading-font, .btn, .profile-tab{font-family:futura-pt, 'Krub', sans-serif;font-weight:800;}
.slab{font-family:'Josefin Slab', serif;}
.container{max-width:1200px;margin:0 auto;padding:0 32px;}
.btn{display:inline-flex;align-items:center;gap:10px;padding:16px 36px;border-radius:100px;font-size:16px;font-weight:700;text-decoration:none;transition:all 0.3s ease;border:none;cursor:pointer;letter-spacing:0.3px;}
.btn-gold{background:var(--gold);color:var(--orange);}
.btn-gold:hover{background:var(--gold-light);transform:translateY(-2px);}
.btn-orange{background:var(--orange);color:var(--white);}
.btn-orange:hover{background:var(--orange-light);transform:translateY(-2px);}
.btn-outline{background:transparent;color:var(--orange);border:2px solid var(--orange);}
.btn-outline:hover{background:var(--orange);color:var(--white);}
.btn-white{background:var(--white);color:var(--orange);}
.btn-white:hover{background:var(--cream);transform:translateY(-2px);}
.btn-outline-white{background:transparent;color:var(--white);border:2px solid rgba(255,255,255,0.5);}
.btn-outline-white:hover{border-color:white;background:rgba(255,255,255,0.1);}
.btn svg{width:18px;height:18px;}
.doodle{position:absolute;pointer-events:none;opacity:0.15;}
.doodle-crosshatch{width:60px;height:60px;background:repeating-linear-gradient(45deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 8px),
repeating-linear-gradient(-45deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 8px);}
.doodle-dots{width:80px;height:80px;background:radial-gradient(circle 3px, currentColor 100%, transparent 100%);background-size:12px 12px;}
.hero{background:var(--orange);color:var(--text-on-orange);padding:80px 0 0;position:relative;overflow:hidden;min-height:90vh;}
.hero::after{content:'';position:absolute;bottom:-2px;left:0;right:0;height:80px;background:var(--cream);clip-path:ellipse(55% 100% at 50% 100%);}
.hero-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:48px;align-items:center;padding-bottom:100px;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:var(--gold);color:var(--orange);border-radius:100px;padding:8px 20px;font-size:13px;font-weight:700;margin-bottom:28px;letter-spacing:1px;text-transform:uppercase;}
.hero h1{font-size:clamp(42px, 5.5vw, 72px);line-height:1.05;color:var(--white);margin-bottom:24px;}
.hero h1 em{font-style:italic;color:var(--gold);}
.hero-sub{font-family:'Josefin Slab', serif;font-size:20px;line-height:1.7;color:rgba(255,255,255,0.85);margin-bottom:36px;max-width:500px;}
.hero-cta-group{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:40px;}
.hero-trust{display:flex;gap:28px;flex-wrap:wrap;}
.hero-trust-item{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:500;color:rgba(255,255,255,0.8);}
.hero-trust-item svg{width:18px;height:18px;color:var(--gold);flex-shrink:0;}
.hero-images{position:relative;}
.hero-img-main{width:100%;height:480px;object-fit:cover;border-radius:40% 60% 50% 50% / 50% 40% 60% 50%;box-shadow:0 20px 60px rgba(0,0,0,0.2);}
.hero-img-float{position:absolute;width:200px;height:200px;object-fit:cover;border-radius:50%;border:6px solid var(--orange);box-shadow:0 12px 40px rgba(0,0,0,0.15);}
.hero-img-float-1{bottom:-30px;left:-40px;}
.hero-img-float-2{top:-20px;right:-20px;width:160px;height:160px;}
.hero-doodle-1{position:absolute;bottom:40px;right:60px;color:var(--gold);opacity:0.4;font-size:48px;font-weight:800;transform:rotate(-12deg);font-family:futura-pt, 'Krub', sans-serif;}
.section{padding:100px 0;}
.section-cream{background:var(--cream);}
.section-orange{background:var(--orange);color:var(--text-on-orange);}
.section-olive{background:var(--olive);color:var(--white);}
.section-dark{background:var(--dark-deep);color:var(--white);}
.section-header{text-align:center;max-width:720px;margin:0 auto 64px;}
.section-header .label{display:inline-block;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--orange);margin-bottom:16px;background:var(--gold);padding:6px 18px;border-radius:100px;}
.section-orange .section-header .label{background:var(--gold);color:var(--orange);}
.section-olive .section-header .label{background:rgba(255,255,255,0.2);color:var(--white);}
.section-dark .section-header .label{background:rgba(255,255,255,0.1);color:var(--gold);}
.section-header h2{font-size:clamp(32px, 4vw, 52px);line-height:1.1;margin-bottom:20px;color:var(--dark);}
.section-orange .section-header h2, .section-olive .section-header h2, .section-dark .section-header h2{color:var(--white);}
.section-header p{font-family:'Josefin Slab', serif;font-size:19px;line-height:1.7;color:var(--text-light);}
.section-orange .section-header p{color:rgba(255,255,255,0.8);}
.section-olive .section-header p{color:rgba(255,255,255,0.85);}
.section-dark .section-header p{color:rgba(255,255,255,0.7);}
.wave-top{position:relative;margin-top:-1px;}
.wave-top::before{content:'';position:absolute;top:-60px;left:0;right:0;height:60px;background:inherit;clip-path:ellipse(55% 100% at 50% 100%);}
.intro-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:80px;align-items:center;}
.intro-image{position:relative;}
.intro-image img{width:100%;height:520px;object-fit:cover;border-radius:30% 70% 60% 40% / 50% 30% 70% 50%;}
.intro-image .float-badge{position:absolute;bottom:20px;right:-20px;background:var(--gold);color:var(--orange);border-radius:50%;width:120px;height:120px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:800;font-size:32px;line-height:1;box-shadow:0 8px 30px rgba(0,0,0,0.1);transform:rotate(8deg);}
.intro-image .float-badge span{font-size:12px;font-weight:600;letter-spacing:1px;margin-top:4px;}
.intro-content h2{font-size:clamp(32px, 3.5vw, 48px);line-height:1.1;margin-bottom:24px;color:var(--dark);}
.intro-content p{font-family:'Josefin Slab', serif;font-size:18px;line-height:1.8;color:var(--text-light);margin-bottom:20px;}
.intro-stat-row{display:flex;gap:40px;margin-top:40px;padding-top:32px;border-top:2px solid var(--gold);}
.intro-stat{text-align:center;}
.intro-stat .number{font-family:futura-pt, 'Krub', sans-serif;font-weight:800;font-size:44px;color:var(--orange);display:block;line-height:1.1;}
.intro-stat .label{font-size:14px;color:var(--text-light);font-weight:500;}
.benefits-grid{display:grid;grid-template-columns:repeat(3, 1fr);gap:28px;}
.benefit-card{background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:24px;padding:40px 28px;transition:transform 0.3s;position:relative;overflow:hidden;}
.benefit-card::before{content:'';position:absolute;top:-30px;right:-30px;width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,0.05);}
.benefit-card:hover{transform:translateY(-6px);}
.benefit-icon{width:56px;height:56px;background:var(--gold);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:20px;}
.benefit-icon svg{width:24px;height:24px;color:var(--orange);}
.benefit-card h3{font-size:22px;margin-bottom:12px;}
.benefit-card p{font-family:'Josefin Slab', serif;font-size:16px;line-height:1.7;color:rgba(255,255,255,0.75);}
.premrest-card{background:var(--white);border-radius:24px;padding:36px 28px;transition:transform 0.3s, box-shadow 0.3s;position:relative;overflow:hidden;border:none;}
.premrest-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:var(--gold);border-radius:24px 24px 0 0;}
.premrest-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,0.08);}
.premrest-card .benefit-icon{background:var(--orange);}
.premrest-card .benefit-icon svg{color:var(--white);}
.premrest-card h3{color:var(--dark);font-size:20px;margin-bottom:10px;}
.premrest-card p{color:var(--text-light);}
.colour-grid{display:grid;grid-template-columns:repeat(auto-fill, minmax(110px, 1fr));gap:14px;margin-bottom:48px;}
.colour-swatch{aspect-ratio:1;border-radius:20px;overflow:hidden;cursor:pointer;transition:transform 0.3s, box-shadow 0.3s;position:relative;}
.colour-swatch:hover{transform:scale(1.1) rotate(2deg);box-shadow:0 12px 36px rgba(0,0,0,0.15);}
.colour-swatch img{width:100%;height:100%;object-fit:cover;}
.colour-swatch .colour-name{position:absolute;bottom:0;left:0;right:0;padding:6px 8px;background:linear-gradient(to top, rgba(0,0,0,0.75), transparent);color:white;font-size:11px;font-weight:600;text-transform:capitalize;text-align:center;opacity:0;transition:opacity 0.3s;}
.colour-swatch:hover .colour-name{opacity:1;}
.profile-tabs{display:flex;justify-content:center;gap:10px;margin-bottom:48px;flex-wrap:wrap;}
.profile-tab{padding:12px 28px;border:2px solid var(--gold);border-radius:100px;background:transparent;font-size:15px;font-weight:700;color:var(--text);cursor:pointer;transition:all 0.3s;}
.profile-tab:hover, .profile-tab.active{background:var(--orange);color:var(--white);border-color:var(--orange);}
.profile-detail{display:none;animation:fadeIn 0.4s ease;}
.profile-detail.active{display:block;}
@keyframes fadeIn{from{opacity:0;transform:translateY(10px);}
to{opacity:1;}
}
.profile-content{display:grid;grid-template-columns:1.2fr 1fr;gap:60px;align-items:center;}
.profile-content h3{font-size:36px;margin-bottom:16px;color:var(--dark);}
.profile-content p{font-family:'Josefin Slab', serif;font-size:17px;line-height:1.8;color:var(--text-light);margin-bottom:12px;}
.profile-content .specs{margin-top:24px;}
.profile-content .spec-item{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid rgba(0,0,0,0.06);font-size:15px;color:var(--text);}
.profile-content .spec-item svg{width:18px;height:18px;color:var(--orange);flex-shrink:0;}
.profile-image{position:relative;}
.profile-image img{width:100%;height:400px;object-fit:cover;border-radius:50% 50% 50% 50% / 40% 40% 60% 60%;}
.app-grid{display:grid;grid-template-columns:repeat(4, 1fr);gap:20px;}
.app-card{position:relative;border-radius:24px;overflow:hidden;aspect-ratio:3/4;cursor:pointer;}
.app-card img{width:100%;height:100%;object-fit:cover;transition:transform 0.5s;}
.app-card:hover img{transform:scale(1.08);}
.app-card .app-label{position:absolute;bottom:0;left:0;right:0;padding:28px 20px 20px;background:linear-gradient(to top, rgba(0,0,0,0.8), transparent);color:white;font-weight:800;font-size:17px;}
.specs-grid{display:grid;grid-template-columns:repeat(3, 1fr);gap:24px;}
.spec-card{background:var(--white);border-radius:24px;padding:40px 28px;text-align:center;transition:transform 0.3s, box-shadow 0.3s;}
.spec-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,0.08);}
.spec-card svg{width:44px;height:44px;color:var(--orange);margin-bottom:20px;}
.spec-card h3{font-size:20px;margin-bottom:10px;color:var(--dark);}
.spec-card p{font-family:'Josefin Slab', serif;font-size:15px;line-height:1.7;color:var(--text-light);margin-bottom:20px;}
.spec-card a{display:inline-flex;align-items:center;gap:8px;color:var(--orange);text-decoration:none;font-weight:700;font-size:14px;}
.spec-card a:hover{text-decoration:underline;}
.cta-section{background:var(--dark-deep);padding:120px 0;text-align:center;color:white;position:relative;overflow:hidden;}
.cta-section::before{content:'';position:absolute;top:-2px;left:0;right:0;height:60px;background:var(--cream);clip-path:ellipse(55% 100% at 50% 0%);}
.cta-section h2{font-size:clamp(36px, 4.5vw, 60px);margin-bottom:24px;line-height:1.1;position:relative;}
.cta-section p{font-family:'Josefin Slab', serif;font-size:20px;color:rgba(255,255,255,0.7);margin-bottom:40px;max-width:560px;margin-left:auto;margin-right:auto;position:relative;}
.cta-buttons{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;position:relative;}
.colour-modal-overlay{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);z-index:9999;align-items:center;justify-content:center;padding:32px;cursor:pointer;animation:modalFadeIn 0.25s ease;}
.colour-modal-overlay.active{display:flex;}
@keyframes modalFadeIn{from{opacity:0;}
to{opacity:1;}
}
.colour-modal-content{position:relative;max-width:800px;width:100%;text-align:center;cursor:default;animation:modalSlideUp 0.3s ease;}
@keyframes modalSlideUp{from{opacity:0;transform:translateY(30px);}
to{opacity:1;transform:translateY(0);}
}
.colour-modal-content img{width:100%;max-height:70vh;object-fit:contain;border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,0.4);}
.colour-modal-name{font-family:futura-pt, 'Krub', sans-serif;font-weight:800;font-size:clamp(24px, 3vw, 36px);color:var(--gold);margin-top:20px;letter-spacing:1px;}
.colour-modal-close{position:absolute;top:-16px;right:-16px;width:48px;height:48px;background:var(--orange);border:none;border-radius:50%;color:white;font-size:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform 0.2s, background 0.2s;box-shadow:0 4px 16px rgba(0,0,0,0.3);z-index:10;}
.colour-modal-close:hover{transform:scale(1.1) rotate(90deg);background:var(--orange-light);}
.samples-showcase{padding:80px 0;background:var(--white);text-align:center;position:relative;}
.samples-showcase::before{content:'';position:absolute;top:-1px;left:0;right:0;height:50px;background:var(--cream);clip-path:ellipse(55% 100% at 50% 0%);}
.samples-image-wrap{max-width:720px;margin:0 auto;position:relative;}
.samples-image-wrap img{width:100%;height:auto;border-radius:30% 70% 60% 40% / 50% 30% 70% 50%;box-shadow:0 20px 60px rgba(0,0,0,0.1);}
.samples-caption{font-family:'Josefin Slab', serif;font-size:18px;color:var(--text-light);margin-top:28px;font-style:italic;}
.samples-caption strong{color:var(--orange);font-style:normal;}
@media (max-width:968px){.hero-grid, .intro-grid, .profile-content{grid-template-columns:1fr;gap:40px;}
.benefits-grid{grid-template-columns:1fr 1fr;}
.app-grid{grid-template-columns:1fr 1fr;}
.specs-grid{grid-template-columns:1fr;}
.hero-images{order:-1;}
.hero-img-float{display:none;}
.hero{min-height:auto;}
.intro-image .float-badge{right:10px;bottom:10px;width:90px;height:90px;font-size:24px;}
.intro-image .float-badge span{font-size:10px;}
}
@media (max-width:640px){.benefits-grid{grid-template-columns:1fr;}
.colour-grid{grid-template-columns:repeat(auto-fill, minmax(80px, 1fr));gap:10px;}
.hero-trust{flex-direction:column;gap:12px;}
.app-grid{grid-template-columns:1fr;}
.hero h1{font-size:38px;}
}
</style>
              <body>
                
            </body></div>
          </div>
        </div>
        <div class="cc-section-orange">
          <div class="cc-container cc-text-center">
            <h2 class="cc-section-heading-white">Why Premrest?</h2>
            <p class="cc-body-text-white">Australia&#x27;s go-to supply and installation partner for national rollouts. We don&#x27;t just sell cork — we measure, supply, install, and guarantee it. From single boardrooms to 200-site retail rollouts, Premrest delivers ComCork on time, on budget, and looking absolutely stunning.</p>
            <div class="cc-grid-3col">
              <div class="cc-benefit-card">
                <div class="cc-card-icon">📍</div>
                <div class="cc-card-title">Nationwide Coverage</div>
                <p class="cc-card-text">Every capital city and regional centre. One partner, one standard, coast to coast.</p>
              </div>
              <div class="cc-benefit-card">
                <div class="cc-card-icon">🤝</div>
                <div class="cc-card-title">End-to-End Service</div>
                <p class="cc-card-text">Measure, supply, install, and maintain. You get one point of contact from start to finish.</p>
              </div>
              <div class="cc-benefit-card">
                <div class="cc-card-icon">⭐</div>
                <div class="cc-card-title">Trusted by the Best</div>
                <p class="cc-card-text">JLL, CBRE, Stockland, Vicinity Centres — Australia&#x27;s biggest names trust Premrest for their rollouts.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="cc-section-cream">
          <div class="cc-container">
            <div class="cc-text-center cc-mb-40">
              <div class="cc-section-subheading">FIND YOUR PERFECT SHADE</div>
              <h2 class="cc-section-heading">29 Designer Colours</h2>
              <p class="cc-body-text">From earthy naturals to vibrant feature wall colours. Every shade crafted to complement modern commercial interiors.</p>
            </div>
            <div id="cc-colour-grid" class="cc-grid-swatches"></div>
          </div>
        </div>
        <div class="cc-section">
          <div class="cc-container">
            <div class="cc-text-center cc-mb-40">
              <div class="cc-section-subheading">WHERE CORK SHINES</div>
              <h2 class="cc-section-heading">Perfect For</h2>
            </div>
            <div class="cc-grid-4col">
              <div class="cc-benefit-card">
                <div class="cc-card-icon">🏨</div>
                <div class="cc-card-title">Hotels &amp; Hospitality</div>
              </div>
              <div class="cc-benefit-card">
                <div class="cc-card-icon">🏬</div>
                <div class="cc-card-title">Retail &amp; Shopping</div>
              </div>
              <div class="cc-benefit-card">
                <div class="cc-card-icon">🏥</div>
                <div class="cc-card-title">Healthcare</div>
              </div>
              <div class="cc-benefit-card">
                <div class="cc-card-icon">🏛️</div>
                <div class="cc-card-title">Corporate Offices</div>
              </div>
            </div>
          </div>
        </div>
        <div class="cc-section-orange">
          <div class="cc-container cc-text-center">
            <h2 class="cc-section-heading-white">Ready to Cork It Up?</h2>
            <p class="cc-body-text-white">Whether you need 50 tiles or 50,000 — Premrest supplies and installs ComCork nationwide. Let’s talk about your next project.</p>
            <div class="cc-btn-group">
              <a href="tel:1300207915" class="cc-btn-white w-button">Call 1300 207 915</a>
              <a href="mailto:projects@premrest.com.au" class="cc-btn-white-outline w-button">Email projects@premrest.com.au</a>
            </div>
          </div>
        </div>
        <div class="cc-hidden">
          <div class="cc-hero-content">
            <h1 class="cc-display-heading">Cork That Rocks.</h1>
            <p class="cc-hero-sub">Australia’s most beautiful wall and ceiling finish. Natural cork tiles in 29 stunning colours — supplied and installed nationwide by Premrest.</p>
            <div class="cc-btn-group">
              <a href="tel:1300207915" class="cc-btn-primary w-button">Call 1300 207 915</a>
              <a href="mailto:projects@premrest.com.au" class="cc-btn-secondary w-button">Email Us</a>
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
      </div>
      <div id="comcork-root"></div>
    </div>
    <style>@import url(&#x27;https://use.typekit.net/xxxxxxxx.css&#x27;);:root{--orange:#D1703C;--orange-light:#E08550;--gold:#F9CB8F;--gold-light:#FBDDB3;--cream:#FBF7F3;--cream-dark:#F5F0EA;--olive:#AEBA6C;--olive-dark:#8A9A4E;--dark:#2E3133;--dark-deep:#222222;--white:#FFFDF9;--text:#2E3133;--text-light:#5A5E62;--text-on-orange:#FBF7F3;}#comcork-root,#comcork-root *{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;}#comcork-root{font-family:&#x27;Krub&#x27;,-apple-system,sans-serif;color:var(--text);background:var(--white);line-height:1.7;-webkit-font-smoothing:antialiased;}h1,h2,h3,.heading-font,.btn,.profile-tab{font-family:futura-pt,&#x27;Krub&#x27;,sans-serif;font-weight:800;}.slab{font-family:&#x27;Josefin Slab&#x27;,serif;}.container{max-width:1200px;margin:0 auto;padding:0 32px;}.btn{display:inline-flex;align-items:center;gap:10px;padding:16px 36px;border-radius:100px;font-size:16px;font-weight:700;text-decoration:none;transition:all 0.3s ease;border:none;cursor:pointer;letter-spacing:0.3px;}.btn-gold{background:var(--gold);color:var(--orange);}.btn-gold:hover{background:var(--gold-light);transform:translateY(-2px);}.btn-orange{background:var(--orange);color:var(--white);}.btn-orange:hover{background:var(--orange-light);transform:translateY(-2px);}.btn-outline{background:transparent;color:var(--orange);border:2px solid var(--orange);}.btn-outline:hover{background:var(--orange);color:var(--white);}.btn-white{background:var(--white);color:var(--orange);}.btn-white:hover{background:var(--cream);transform:translateY(-2px);}.btn-outline-white{background:transparent;color:var(--white);border:2px solid rgba(255,255,255,0.5);}.btn-outline-white:hover{border-color:white;background:rgba(255,255,255,0.1);}.btn svg{width:18px;height:18px;}.doodle{position:absolute;pointer-events:none;opacity:0.15;}.doodle-crosshatch{width:60px;height:60px;background:repeating-linear-gradient(45deg,currentColor 0px,currentColor 2px,transparent 2px,transparent 8px),repeating-linear-gradient(-45deg,currentColor 0px,currentColor 2px,transparent 2px,transparent 8px);}.doodle-dots{width:80px;height:80px;background:radial-gradient(circle 3px,currentColor 100%,transparent 100%);background-size:12px 12px;}.hero{background:var(--orange);color:var(--text-on-orange);padding:80px 0 0;position:relative;overflow:hidden;min-height:90vh;}.hero::after{content:&#x27;&#x27;;position:absolute;bottom:-2px;left:0;right:0;height:80px;background:var(--cream);clip-path:ellipse(55% 100% at 50% 100%);}.hero-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:48px;align-items:center;padding-bottom:100px;}.hero-badge{display:inline-flex;align-items:center;gap:8px;background:var(--gold);color:var(--orange);border-radius:100px;padding:8px 20px;font-size:13px;font-weight:700;margin-bottom:28px;letter-spacing:1px;text-transform:uppercase;}.hero h1{font-size:clamp(42px,5.5vw,72px);line-height:1.05;color:var(--white);margin-bottom:24px;}.hero h1 em{font-style:italic;color:var(--gold);}.hero-sub{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:20px;line-height:1.7;color:rgba(255,255,255,0.85);margin-bottom:36px;max-width:500px;}.hero-cta-group{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:40px;}.hero-trust{display:flex;gap:28px;flex-wrap:wrap;}.hero-trust-item{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:500;color:rgba(255,255,255,0.8);}.hero-trust-item svg{width:18px;height:18px;color:var(--gold);flex-shrink:0;}.hero-images{position:relative;}.hero-img-main{width:100%;height:480px;object-fit:cover;border-radius:40% 60% 50% 50% / 50% 40% 60% 50%;box-shadow:0 20px 60px rgba(0,0,0,0.2);}.hero-img-float{position:absolute;width:200px;height:200px;object-fit:cover;border-radius:50%;border:6px solid var(--orange);box-shadow:0 12px 40px rgba(0,0,0,0.15);}.hero-img-float-1{bottom:-30px;left:-40px;}.hero-img-float-2{top:-20px;right:-20px;width:160px;height:160px;}.hero-doodle-1{position:absolute;bottom:40px;right:60px;color:var(--gold);opacity:0.4;font-size:48px;font-weight:800;transform:rotate(-12deg);font-family:futura-pt,&#x27;Krub&#x27;,sans-serif;}.section{padding:100px 0;}.section-cream{background:var(--cream);}.section-orange{background:var(--orange);color:var(--text-on-orange);}.section-olive{background:var(--olive);color:var(--white);}.section-dark{background:var(--dark-deep);color:var(--white);}.section-header{text-align:center;max-width:720px;margin:0 auto 64px;}.section-header .label{display:inline-block;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--orange);margin-bottom:16px;background:var(--gold);padding:6px 18px;border-radius:100px;}.section-orange .section-header .label{background:var(--gold);color:var(--orange);}.section-olive .section-header .label{background:rgba(255,255,255,0.2);color:var(--white);}.section-dark .section-header .label{background:rgba(255,255,255,0.1);color:var(--gold);}.section-header h2{font-size:clamp(32px,4vw,52px);line-height:1.1;margin-bottom:20px;color:var(--dark);}.section-orange .section-header h2,.section-olive .section-header h2,.section-dark .section-header h2{color:var(--white);}.section-header p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:19px;line-height:1.7;color:var(--text-light);}.section-orange .section-header p{color:rgba(255,255,255,0.8);}.section-olive .section-header p{color:rgba(255,255,255,0.85);}.section-dark .section-header p{color:rgba(255,255,255,0.7);}.wave-top{position:relative;margin-top:-1px;}.wave-top::before{content:&#x27;&#x27;;position:absolute;top:-60px;left:0;right:0;height:60px;background:inherit;clip-path:ellipse(55% 100% at 50% 100%);}.intro-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:80px;align-items:center;}.intro-image{position:relative;}.intro-image img{width:100%;height:520px;object-fit:cover;border-radius:30% 70% 60% 40% / 50% 30% 70% 50%;}.intro-image .float-badge{position:absolute;bottom:20px;right:-20px;background:var(--gold);color:var(--orange);border-radius:50%;width:120px;height:120px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:800;font-size:32px;line-height:1;box-shadow:0 8px 30px rgba(0,0,0,0.1);transform:rotate(8deg);}.intro-image .float-badge span{font-size:12px;font-weight:600;letter-spacing:1px;margin-top:4px;}.intro-content h2{font-size:clamp(32px,3.5vw,48px);line-height:1.1;margin-bottom:24px;color:var(--dark);}.intro-content p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:18px;line-height:1.8;color:var(--text-light);margin-bottom:20px;}.intro-stat-row{display:flex;gap:40px;margin-top:40px;padding-top:32px;border-top:2px solid var(--gold);}.intro-stat{text-align:center;}.intro-stat .number{font-family:futura-pt,&#x27;Krub&#x27;,sans-serif;font-weight:800;font-size:44px;color:var(--orange);display:block;line-height:1.1;}.intro-stat .label{font-size:14px;color:var(--text-light);font-weight:500;}.benefits-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;}.benefit-card{background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:24px;padding:40px 28px;transition:transform 0.3s;position:relative;overflow:hidden;}.benefit-card::before{content:&#x27;&#x27;;position:absolute;top:-30px;right:-30px;width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,0.05);}.benefit-card:hover{transform:translateY(-6px);}.benefit-icon{width:56px;height:56px;background:var(--gold);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:20px;}.benefit-icon svg{width:24px;height:24px;color:var(--orange);}.benefit-card h3{font-size:22px;margin-bottom:12px;}.benefit-card p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:16px;line-height:1.7;color:rgba(255,255,255,0.75);}.premrest-card{background:var(--white);border-radius:24px;padding:36px 28px;transition:transform 0.3s,box-shadow 0.3s;position:relative;overflow:hidden;border:none;}.premrest-card::before{content:&#x27;&#x27;;position:absolute;top:0;left:0;right:0;height:4px;background:var(--gold);border-radius:24px 24px 0 0;}.premrest-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,0.08);}.premrest-card .benefit-icon{background:var(--orange);}.premrest-card .benefit-icon svg{color:var(--white);}.premrest-card h3{color:var(--dark);font-size:20px;margin-bottom:10px;}.premrest-card p{color:var(--text-light);}.colour-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:14px;margin-bottom:48px;}.colour-swatch{aspect-ratio:1;border-radius:20px;overflow:hidden;cursor:pointer;transition:transform 0.3s,box-shadow 0.3s;position:relative;}.colour-swatch:hover{transform:scale(1.1) rotate(2deg);box-shadow:0 12px 36px rgba(0,0,0,0.15);}.colour-swatch img{width:100%;height:100%;object-fit:cover;}.colour-swatch .colour-name{position:absolute;bottom:0;left:0;right:0;padding:6px 8px;background:linear-gradient(to top,rgba(0,0,0,0.75),transparent);color:white;font-size:11px;font-weight:600;text-transform:capitalize;text-align:center;opacity:0;transition:opacity 0.3s;}.colour-swatch:hover .colour-name{opacity:1;}.profile-tabs{display:flex;justify-content:center;gap:10px;margin-bottom:48px;flex-wrap:wrap;}.profile-tab{padding:12px 28px;border:2px solid var(--gold);border-radius:100px;background:transparent;font-size:15px;font-weight:700;color:var(--text);cursor:pointer;transition:all 0.3s;}.profile-tab:hover,.profile-tab.active{background:var(--orange);color:var(--white);border-color:var(--orange);}.profile-detail{display:none;animation:fadeIn 0.4s ease;}.profile-detail.active{display:block;}@keyframes fadeIn{from{opacity:0;transform:translateY(10px);}to{opacity:1;}}.profile-content{display:grid;grid-template-columns:1.2fr 1fr;gap:60px;align-items:center;}.profile-content h3{font-size:36px;margin-bottom:16px;color:var(--dark);}.profile-content p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:17px;line-height:1.8;color:var(--text-light);margin-bottom:12px;}.profile-content .specs{margin-top:24px;}.profile-content .spec-item{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid rgba(0,0,0,0.06);font-size:15px;color:var(--text);}.profile-content .spec-item svg{width:18px;height:18px;color:var(--orange);flex-shrink:0;}.profile-image{position:relative;}.profile-image img{width:100%;height:400px;object-fit:cover;border-radius:50% 50% 50% 50% / 40% 40% 60% 60%;}.app-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}.app-card{position:relative;border-radius:24px;overflow:hidden;aspect-ratio:3/4;cursor:pointer;}.app-card img{width:100%;height:100%;object-fit:cover;transition:transform 0.5s;}.app-card:hover img{transform:scale(1.08);}.app-card .app-label{position:absolute;bottom:0;left:0;right:0;padding:28px 20px 20px;background:linear-gradient(to top,rgba(0,0,0,0.8),transparent);color:white;font-weight:800;font-size:17px;}.specs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}.spec-card{background:var(--white);border-radius:24px;padding:40px 28px;text-align:center;transition:transform 0.3s,box-shadow 0.3s;}.spec-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,0.08);}.spec-card svg{width:44px;height:44px;color:var(--orange);margin-bottom:20px;}.spec-card h3{font-size:20px;margin-bottom:10px;color:var(--dark);}.spec-card p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:15px;line-height:1.7;color:var(--text-light);margin-bottom:20px;}.spec-card a{display:inline-flex;align-items:center;gap:8px;color:var(--orange);text-decoration:none;font-weight:700;font-size:14px;}.spec-card a:hover{text-decoration:underline;}.cta-section{background:var(--dark-deep);padding:120px 0;text-align:center;color:white;position:relative;overflow:hidden;}.cta-section::before{content:&#x27;&#x27;;position:absolute;top:-2px;left:0;right:0;height:60px;background:var(--cream);clip-path:ellipse(55% 100% at 50% 0%);}.cta-section h2{font-size:clamp(36px,4.5vw,60px);margin-bottom:24px;line-height:1.1;position:relative;}.cta-section p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:20px;color:rgba(255,255,255,0.7);margin-bottom:40px;max-width:560px;margin-left:auto;margin-right:auto;position:relative;}.cta-buttons{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;position:relative;}.colour-modal-overlay{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);z-index:9999;align-items:center;justify-content:center;padding:32px;cursor:pointer;animation:modalFadeIn 0.25s ease;}.colour-modal-overlay.active{display:flex;}@keyframes modalFadeIn{from{opacity:0;}to{opacity:1;}}.colour-modal-content{position:relative;max-width:800px;width:100%;text-align:center;cursor:default;animation:modalSlideUp 0.3s ease;}@keyframes modalSlideUp{from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}.colour-modal-content img{width:100%;max-height:70vh;object-fit:contain;border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,0.4);}.colour-modal-name{font-family:futura-pt,&#x27;Krub&#x27;,sans-serif;font-weight:800;font-size:clamp(24px,3vw,36px);color:var(--gold);margin-top:20px;letter-spacing:1px;}.colour-modal-close{position:absolute;top:-16px;right:-16px;width:48px;height:48px;background:var(--orange);border:none;border-radius:50%;color:white;font-size:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform 0.2s,background 0.2s;box-shadow:0 4px 16px rgba(0,0,0,0.3);z-index:10;}.colour-modal-close:hover{transform:scale(1.1) rotate(90deg);background:var(--orange-light);}.samples-showcase{padding:80px 0;background:var(--white);text-align:center;position:relative;}.samples-showcase::before{content:&#x27;&#x27;;position:absolute;top:-1px;left:0;right:0;height:50px;background:var(--cream);clip-path:ellipse(55% 100% at 50% 0%);}.samples-image-wrap{max-width:720px;margin:0 auto;position:relative;}.samples-image-wrap img{width:100%;height:auto;border-radius:30% 70% 60% 40% / 50% 30% 70% 50%;box-shadow:0 20px 60px rgba(0,0,0,0.1);}.samples-caption{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:18px;color:var(--text-light);margin-top:28px;font-style:italic;}.samples-caption strong{color:var(--orange);font-style:normal;}@media (max-width:968px){.hero-grid,.intro-grid,.profile-content{grid-template-columns:1fr;gap:40px;}.benefits-grid{grid-template-columns:1fr 1fr;}.app-grid{grid-template-columns:1fr 1fr;}.specs-grid{grid-template-columns:1fr;}.hero-images{order:-1;}.hero-img-float{display:none;}.hero{min-height:auto;}.intro-image .float-badge{right:10px;bottom:10px;width:90px;height:90px;font-size:24px;}.intro-image .float-badge span{font-size:10px;}}@media (max-width:640px){.benefits-grid{grid-template-columns:1fr;}.colour-grid{grid-template-columns:repeat(auto-fill,minmax(80px,1fr));gap:10px;}.hero-trust{flex-direction:column;gap:12px;}.app-grid{grid-template-columns:1fr;}.hero h1{font-size:38px;}}</style>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&amp;family=Josefin+Slab:ital,wght@0,300;0,400;0,600;1,300;1,400&amp;display=swap">
    <script>(function(){
if(document.readyState===&#x27;loading&#x27;){document.addEventListener(&#x27;DOMContentLoaded&#x27;,init);}else{init();}
function init(){
var c=document.createElement(&#x27;div&#x27;);c.id=&#x27;comcork-root&#x27;;
var t=document.querySelector(&#x27;.page-wrapper&#x27;)||document.body;
Array.from(t.children).forEach(function(ch){var tag=ch.tagName?ch.tagName.toLowerCase():&#x27;&#x27;;if(tag===&#x27;header&#x27;||tag===&#x27;footer&#x27;||tag===&#x27;nav&#x27;||tag===&#x27;script&#x27;||tag===&#x27;style&#x27;||tag===&#x27;link&#x27;)return;ch.style.display=&#x27;none&#x27;;});
t.insertBefore(c,t.firstChild);
c.innerHTML=atob(&#x27;PHNlY3Rpb24gY2xhc3M9Imhlcm8iPgo8ZGl2IGNsYXNzPSJjb250YWluZXIiPgo8ZGl2IGNsYXNzPSJoZXJvLWdyaWQiPgo8ZGl2IGNsYXNzPSJoZXJvLWNvbnRlbnQiPgo8ZGl2IGNsYXNzPSJoZXJvLWJhZGdlIj5OYXR1cmFsIENvcmsgRmxvb3JpbmcgwrcgQXVzdHJhbGlhLVdpZGU8L2Rpdj4KPGgxPlRoZSB3b3cgYXMgPGVtPnlvdSB3YWxrIGluLjwvZW0+IFRoYXQncyBDb21Db3JrLjwvaDE+CjxwIGNsYXNzPSJoZXJvLXN1YiI+U3R1bm5pbmcgbmF0dXJhbCBjb3JrIGZsb29yaW5nIHRoYXQgdHVybnMgaGVhZHMgYW5kIHN0b3BzIGZlZXQuIDI5IGNvbG91cnMsIGZpdmUgcHJvZmlsZXMsIGFuZCB0aGUga2luZCBvZiBiZWF1dHkgdGhhdCBkb2Vzbid0IG5lZWQgdG8gY29zdCB0aGUgZWFydGguIFdlIHN1cHBseSBpdCwgd2UgaW5zdGFsbCBpdCwgYW55d2hlcmUgaW4gQXVzdHJhbGlhLjwvcD4KPGRpdiBjbGFzcz0iaGVyby1jdGEtZ3JvdXAiPgo8YSBjbGFzcz0iYnRuIGJ0bi1nb2xkIiBocmVmPSJ0ZWw6MTMwMDIwNzkxNSI+CvCfk54KTGV0J3MgY2hhdCDigJQgMTMwMCAyMDcgOTE1CjwvYT4KPGEgY2xhc3M9ImJ0biBidG4tb3V0bGluZS13aGl0ZSIgaHJlZj0ibWFpbHRvOnByb2plY3RzQHByZW1yZXN0LmNvbS5hdSI+CuKXjwpwcm9qZWN0c0BwcmVtcmVzdC5jb20uYXUKPC9hPgo8L2Rpdj4KPGRpdiBjbGFzcz0iaGVyby10cnVzdCI+CjxkaXYgY2xhc3M9Imhlcm8tdHJ1c3QtaXRlbSI+CvCfjI8KTmF0aW9uYWwg4oCUIHNpbmdsZSBzaXRlcyB0byBmdWxsIHBvcnRmb2xpb3MKPC9kaXY+CjxkaXYgY2xhc3M9Imhlcm8tdHJ1c3QtaXRlbSI+CuKckwpBdXN0cmFsaWFuIE1hZGUgwrcgR3JlZW5UYWcgQ2VydGlmaWVkCjwvZGl2Pgo8ZGl2IGNsYXNzPSJoZXJvLXRydXN0LWl0ZW0iPgrwn5uh77iPCjcwJSBOYXR1cmFsIENvcmsKPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0iaGVyby1pbWFnZXMiPgo8aW1nIGFsdD0iQ29tQ29yayBuYXR1cmFsIGNvcmsgZmxvb3JpbmcgaW5zdGFsbGVkIGluIGEgc3R1bm5pbmcgY29tbWVyY2lhbCBzcGFjZSIgY2xhc3M9Imhlcm8taW1nLW1haW4iIGxvYWRpbmc9ImVhZ2VyIiBzcmM9Imh0dHBzOi8vc2FmZXR5Zmxvb3JpbmcuY29tLmF1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDI1LzAxL1NhZmV0eS1GbG9vcmluZy1Db21jb3JrXzk0QTMwODctRWRpdC0yLndlYnAiLz4KPGltZyBhbHQ9IkNvbUNvcmsgV2Fsa0Vhc3kgU2lsdmVyIEZlcm4gdGV4dHVyZSIgY2xhc3M9Imhlcm8taW1nLWZsb2F0IGhlcm8taW1nLWZsb2F0LTEiIGxvYWRpbmc9ImVhZ2VyIiBzcmM9Imh0dHBzOi8vc2FmZXR5Zmxvb3JpbmcuY29tLmF1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDI1LzAxL1dhbGstRWFzeS1TSUxWRVItRkVSTi0xLTEwMjR4NjgzLndlYnAiLz4KPGltZyBhbHQ9IkNvbUNvcmsgV2Fsa0Vhc3kgVGFuIHRleHR1cmUiIGNsYXNzPSJoZXJvLWltZy1mbG9hdCBoZXJvLWltZy1mbG9hdC0yIiBsb2FkaW5nPSJlYWdlciIgc3JjPSJodHRwczovL3NhZmV0eWZsb29yaW5nLmNvbS5hdS93cC1jb250ZW50L3VwbG9hZHMvMjAyNS8wMS9XYWxrLUVhc3ktVEFOLTEtMTAyNHg2ODMud2VicCIvPgo8ZGl2IGNsYXNzPSJoZXJvLWRvb2RsZS0xIj4jIzwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8L3NlY3Rpb24+CjxzZWN0aW9uIGNsYXNzPSJzZWN0aW9uIHNlY3Rpb24tY3JlYW0iIGlkPSJhYm91dCI+CjxkaXYgY2xhc3M9ImNvbnRhaW5lciI+CjxkaXYgY2xhc3M9ImludHJvLWdyaWQiPgo8ZGl2IGNsYXNzPSJpbnRyby1pbWFnZSI+CjxpbWcgYWx0PSJDb21Db3JrIGZsb29yaW5nIGluIGEgYmVhdXRpZnVsIGNvbW1lcmNpYWwgc3BhY2UiIGxvYWRpbmc9ImxhenkiIHNyYz0iaHR0cHM6Ly9zYWZldHlmbG9vcmluZy5jb20uYXUvd3AtY29udGVudC91cGxvYWRzLzIwMjUvMDEvU2FmZXR5LUZsb29yaW5nLUNvbWNvcmtfOTRBMzA4Ny1FZGl0LTItNjgzeDEwMjQud2VicCIvPgo8ZGl2IGNsYXNzPSJmbG9hdC1iYWRnZSI+NzAlPHNwYW4+TkFUVVJBTCBDT1JLPC9zcGFuPjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0iaW50cm8tY29udGVudCI+CjxoMj5OYXR1cmUncyBtb3N0IG1hZ25pZmljZW50IGZsb29yaW5nIG1hdGVyaWFsLjwvaDI+CjxwPkNvbUNvcmsgaXMgQXVzdHJhbGlhbi1tYWRlIGZyb20gPHN0cm9uZz43MCUgbmF0dXJhbCBjb3JrPC9zdHJvbmc+IGFuZCBhZHZhbmNlZCBwb2x5bWVycy4gRXZlcnkgc3F1YXJlIGNlbnRpbWV0cmUgcGFja3MgYXJvdW5kIDQwIG1pbGxpb24gbWljcm9zY29waWMgYWlyIHBvY2tldHMg4oCUIG5hdHVyZSdzIG93biBzaG9jayBhYnNvcmJlcnMg4oCUIGNyZWF0aW5nIGEgZmxvb3IgdGhhdCBmZWVscyBhcyBpbmNyZWRpYmxlIGFzIGl0IGxvb2tzLjwvcD4KPHA+V2FybSwgb3JnYW5pYywgYW5kIGVuZGxlc3NseSB2ZXJzYXRpbGUuIDI5IGNvbG91cnMgYWNyb3NzIGZpdmUgZGlzdGluY3Qgc3VyZmFjZSBwcm9maWxlcyBtZWFucyB0aGVyZSdzIGEgQ29tQ29yayBmb3IgZXZlcnkgY2FudmFzIOKAlCBhbmQgd2UndmUgYmVlbiBsYXlpbmcgaXQgYWNyb3NzIEF1c3RyYWxpYSBmb3IgY2xpZW50cyB3aG8gcmVmdXNlIHRvIHNldHRsZSBmb3Igb3JkaW5hcnkuPC9wPgo8ZGl2IGNsYXNzPSJpbnRyby1zdGF0LXJvdyI+CjxkaXYgY2xhc3M9ImludHJvLXN0YXQiPgo8c3BhbiBjbGFzcz0ibnVtYmVyIj4yOTwvc3Bhbj4KPHNwYW4gY2xhc3M9ImxhYmVsIj5Db2xvdXJzPC9zcGFuPgo8L2Rpdj4KPGRpdiBjbGFzcz0iaW50cm8tc3RhdCI+CjxzcGFuIGNsYXNzPSJudW1iZXIiPjU8L3NwYW4+CjxzcGFuIGNsYXNzPSJsYWJlbCI+UHJvZmlsZXM8L3NwYW4+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJpbnRyby1zdGF0Ij4KPHNwYW4gY2xhc3M9Im51bWJlciI+MTB5cjwvc3Bhbj4KPHNwYW4gY2xhc3M9ImxhYmVsIj5XYXJyYW50eTwvc3Bhbj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8L3NlY3Rpb24+CjxzZWN0aW9uIGNsYXNzPSJzYW1wbGVzLXNob3djYXNlIj4KPGRpdiBjbGFzcz0iY29udGFpbmVyIj4KPGRpdiBjbGFzcz0ic2FtcGxlcy1pbWFnZS13cmFwIj4KPGltZyBhbHQ9IkZhbm5lZCBDb21Db3JrIHNhbXBsZSBzaGVldHMgc2hvd2luZyB0aGUgcmFuZ2Ugb2Ygc3R1bm5pbmcgbmF0dXJhbCBjb3JrIGNvbG91cnMiIGlkPSJmYW5uZWRTYW1wbGVzSW1nIiBsb2FkaW5nPSJsYXp5IiBzcmM9Imh0dHBzOi8vc2FmZXR5Zmxvb3JpbmcuY29tLmF1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDI0LzEwL1NhZmV0eS1GbG9vcmluZ3MtQ29tY29yay1GbG9vcmluZy0xMy02ODN4MTAyNC53ZWJwIi8+CjwvZGl2Pgo8cCBjbGFzcz0ic2FtcGxlcy1jYXB0aW9uIj5HZXQgeW91ciBoYW5kcyBvbiB0aGUgcmVhbCB0aGluZyDigJQgPHN0cm9uZz5vcmRlciBmcmVlIHNhbXBsZXM8L3N0cm9uZz4gYW5kIGZlZWwgdGhlIGRpZmZlcmVuY2UgY29yayBtYWtlcy48L3A+CjxkaXYgc3R5bGU9Im1hcmdpbi10b3A6IDI0cHg7Ij4KPGEgY2xhc3M9ImJ0biBidG4tb3JhbmdlIiBocmVmPSJ0ZWw6MTMwMDIwNzkxNSI+UmVxdWVzdCBGcmVlIFNhbXBsZXMg4oCUIDEzMDAgMjA3IDkxNTwvYT4KPC9kaXY+CjwvZGl2Pgo8L3NlY3Rpb24+CjxzZWN0aW9uIGNsYXNzPSJzZWN0aW9uIHNlY3Rpb24tZGFyayIgaWQ9ImJlbmVmaXRzIiBzdHlsZT0icG9zaXRpb246cmVsYXRpdmU7Ij4KPGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7dG9wOi0xcHg7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjYwcHg7YmFja2dyb3VuZDp2YXIoLS13aGl0ZSk7Y2xpcC1wYXRoOmVsbGlwc2UoNTUlIDEwMCUgYXQgNTAlIDAlKTsiPjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb250YWluZXIiPgo8ZGl2IGNsYXNzPSJzZWN0aW9uLWhlYWRlciI+CjxzcGFuIGNsYXNzPSJsYWJlbCI+V2h5IENvbUNvcms8L3NwYW4+CjxoMj5CZWF1dGlmdWwsIHN1c3RhaW5hYmxlLCBhbmQgdG91Z2hlciB0aGFuIGl0IGxvb2tzPC9oMj4KPHA+Q29yayBkb2VzIHRoaW5ncyBvdGhlciBmbG9vcmluZyBtYXRlcmlhbHMgY2FuIG9ubHkgZHJlYW0gYWJvdXQuIEhlcmUncyB3aHkgaXQga2VlcHMgZ2V0dGluZyBzcGVjaWZpZWQgZm9yIHRoZSBzcGFjZXMgdGhhdCBtYXR0ZXIgbW9zdC48L3A+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJiZW5lZml0cy1ncmlkIj4KPGRpdiBjbGFzcz0iYmVuZWZpdC1jYXJkIj4KPGRpdiBjbGFzcz0iYmVuZWZpdC1pY29uIj7wn5OaPC9kaXY+CjxoMz5CZWF1dGlmdWwgJmFtcDsgTmF0dXJhbDwvaDM+CjxwPkNvcmsgaGFzIGEgd2FybXRoIGFuZCB0ZXh0dXJlIHlvdSBqdXN0IGNhbid0IGZha2UuIDI5IGNvbG91cnMg4oCUIGZyb20gZWFydGh5IG5ldXRyYWxzIHRvIGJvbGQgc3RhdGVtZW50cyDigJQgZ2l2ZSBkZXNpZ25lcnMgdGhlIHBhbGV0dGUgdG8gY3JlYXRlIHNvbWV0aGluZyB0cnVseSBjb25zaWRlcmVkLjwvcD4KPC9kaXY+CjxkaXYgY2xhc3M9ImJlbmVmaXQtY2FyZCI+CjxkaXYgY2xhc3M9ImJlbmVmaXQtaWNvbiI+8J+MvzwvZGl2Pgo8aDM+U3VzdGFpbmFibGUgJmFtcDsgUmVuZXdhYmxlPC9oMz4KPHA+Q29yayBiYXJrIGlzIGhhcnZlc3RlZCBmcm9tIGxpdmluZyB0cmVlcyBvbiBhIDkteWVhciBjeWNsZSDigJQgbm8gdHJlZXMgaGFybWVkLCBldmVyLiBHcmVlblRhZyBjZXJ0aWZpZWQgZnJvbSBtYW51ZmFjdHVyaW5nIHRvIGVuZC1vZi1saWZlLiBCZWF1dGlmdWwgZmxvb3JpbmcgdGhhdCBkb2Vzbid0IGNvc3QgdGhlIGVhcnRoLjwvcD4KPC9kaXY+CjxkaXYgY2xhc3M9ImJlbmVmaXQtY2FyZCI+CjxkaXYgY2xhc3M9ImJlbmVmaXQtaWNvbiI+8J+boe+4jzwvZGl2Pgo8aDM+U2xpcCBSZXNpc3RhbnQ8L2gzPgo8cD5FeGNlbGxlbnQgZ3JpcCwgZXZlbiB3aGVuIHdldC4gQ29tQ29yaydzIG5hdHVyYWwgZnJpY3Rpb25hbCBwcm9wZXJ0aWVzIG1ha2UgaXQgYSBnby10byBmb3IgYWdlZCBjYXJlLCBoZWFsdGhjYXJlLCBwb29scywgYW5kIGFueXdoZXJlIHBlb3BsZSBuZWVkIHRvIHN0YXkgZmlybWx5IG9uIHRoZWlyIGZlZXQuPC9wPgo8L2Rpdj4KPGRpdiBjbGFzcz0iYmVuZWZpdC1jYXJkIj4KPGRpdiBjbGFzcz0iYmVuZWZpdC1pY29uIj7wn461PC9kaXY+CjxoMz5BY291c3RpYyBQZXJmb3JtYW5jZTwvaDM+CjxwPlRob3NlIDQwIG1pbGxpb24gYWlyIHBvY2tldHMgcGVyIGNtwrI/IFRoZXkncmUgdGlueSBzb3VuZCBhYnNvcmJlcnMuIE5vaXNlIHRyYW5zbWlzc2lvbiBkcm9wcyBkcmFtYXRpY2FsbHkg4oCUIGEgZ2FtZS1jaGFuZ2VyIGZvciBvZmZpY2VzLCBzY2hvb2xzLCBhbmQgbXVsdGktbGV2ZWwgYnVpbGRpbmdzLjwvcD4KPC9kaXY+CjxkaXYgY2xhc3M9ImJlbmVmaXQtY2FyZCI+CjxkaXYgY2xhc3M9ImJlbmVmaXQtaWNvbiI+8J+SqjwvZGl2Pgo8aDM+VG91Z2hlciBUaGFuIEl0IExvb2tzPC9oMz4KPHA+RW5naW5lZXJlZCBmb3IgaGVhdnktZHV0eSBjb21tZXJjaWFsIHRyYWZmaWMuIFNocnVncyBvZmYgY2hlbWljYWxzLCBvaWxzLCBncmVhc2UsIGFuZCBVVi4gSW1wZXJ2aW91cyB0byB3YXRlciDigJQgaW5zaWRlLCBvdXRzaWRlLCBpdCBqdXN0IGtlZXBzIGdvaW5nLjwvcD4KPC9kaXY+CjxkaXYgY2xhc3M9ImJlbmVmaXQtY2FyZCI+CjxkaXYgY2xhc3M9ImJlbmVmaXQtaWNvbiI+8J+RjTwvZGl2Pgo8aDM+Q29tZm9ydCBVbmRlcmZvb3Q8L2gzPgo8cD5Db3JrJ3MgbmF0dXJhbCBzcHJpbmdpbmVzcyBjcmVhdGVzIGEgc29mdGVyLCB3YXJtZXIgc3VyZmFjZSB0aGF0IG1ha2VzIGEgZ2VudWluZSBkaWZmZXJlbmNlIGZvciBwZW9wbGUgb24gdGhlaXIgZmVldCBhbGwgZGF5LiBZb3VyIHRlYW0gd2lsbCB0aGFuayB5b3Ug4oCUIGFuZCBzbyB3aWxsIHRoZSAxMC15ZWFyIHdhcnJhbnR5LjwvcD4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPC9zZWN0aW9uPgo8c2VjdGlvbiBjbGFzcz0ic2VjdGlvbiBzZWN0aW9uLWNyZWFtIiBpZD0id2h5LXByZW1yZXN0IiBzdHlsZT0icG9zaXRpb246cmVsYXRpdmU7Ij4KPGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7dG9wOi0xcHg7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjYwcHg7YmFja2dyb3VuZDp2YXIoLS1kYXJrLWRlZXApO2NsaXAtcGF0aDplbGxpcHNlKDU1JSAxMDAlIGF0IDUwJSAwJSk7Ij48L2Rpdj4KPGRpdiBjbGFzcz0iY29udGFpbmVyIj4KPGRpdiBjbGFzcz0ic2VjdGlvbi1oZWFkZXIiPgo8c3BhbiBjbGFzcz0ibGFiZWwiPllvdXIgTmF0aW9uYWwgUGFydG5lcjwvc3Bhbj4KPGgyPldlIGxheSB0aGUgZ3JvdW5kd29yay4gWW91IHRha2UgdGhlIGNyZWRpdC48L2gyPgo8cD5PbmUgY2FsbCwgb25lIHBhcnRuZXIsIGV2ZXJ5IHNpdGUuIEZyb20gYSBzaW5nbGUgZml0b3V0IHRvIGEgMjAwLWxvY2F0aW9uIHBvcnRmb2xpbyDigJQgd2UndmUgZ290IHlvdXIgZmxvb3JzIGNvdmVyZWQuIExpdGVyYWxseS48L3A+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJiZW5lZml0cy1ncmlkIj4KPGRpdiBjbGFzcz0iYmVuZWZpdC1jYXJkIHByZW1yZXN0LWNhcmQiPgo8ZGl2IGNsYXNzPSJiZW5lZml0LWljb24iPvCfjI88L2Rpdj4KPGgzPk5hdGlvbmFsIENvdmVyYWdlPC9oMz4KPHA+Q3Jld3MgaW4gTWVsYm91cm5lLCBTeWRuZXksIGFuZCBCcmlzYmFuZSDigJQgYW5kIHRoZSBhYmlsaXR5IHRvIGRlcGxveSBhbnl3aGVyZSBpbiBBdXN0cmFsaWEuIE9uZSBwb2ludCBvZiBjb250YWN0LCBubyBtYXR0ZXIgaG93IG1hbnkgcGlucyBvbiB5b3VyIG1hcC48L3A+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJiZW5lZml0LWNhcmQgcHJlbXJlc3QtY2FyZCI+CjxkaXYgY2xhc3M9ImJlbmVmaXQtaWNvbiI+4pyTPC9kaXY+CjxoMz5NdWx0aS1TaXRlIFJvbGxvdXRzPC9oMz4KPHA+U2NoZWR1bGluZywgbG9naXN0aWNzLCBpbnN0YWxsYXRpb24g4oCUIGFjcm9zcyBkb3plbnMgb3IgaHVuZHJlZHMgb2YgbG9jYXRpb25zLiBTYW1lIHF1YWxpdHksIGV2ZXJ5IHNpdGUuIE5vIGRyb3BwZWQgYmFsbHMsIG5vIHN1cnByaXNlcy48L3A+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJiZW5lZml0LWNhcmQgcHJlbXJlc3QtY2FyZCI+CjxkaXYgY2xhc3M9ImJlbmVmaXQtaWNvbiI+8J+boe+4jzwvZGl2Pgo8aDM+QnVpbHQgZm9yIHRoZSBCaWcgTGVhZ3VlczwvaDM+CjxwPiQyME0gcHVibGljIGxpYWJpbGl0eSwgZXZlcnkgdHJhZGUgbGljZW5jZSB5b3UgY2FuIHRoaW5rIG9mLCBhbmQgdGhlIGNvbXBsaWFuY2UgcGFwZXJ3b3JrIHRvIHNhdGlzZnkgZXZlbiB0aGUgbW9zdCB0aG9yb3VnaCBGTSBjb21wYW55LjwvcD4KPC9kaXY+CjxkaXYgY2xhc3M9ImJlbmVmaXQtY2FyZCBwcmVtcmVzdC1jYXJkIj4KPGRpdiBjbGFzcz0iYmVuZWZpdC1pY29uIj7il488L2Rpdj4KPGgzPkZyb20gUXVvdGUgdG8gSGFuZG92ZXI8L2gzPgo8cD5NZWFzdXJlLCBwcmVwLCBpbnN0YWxsLCBkb25lLiBXZSBoYW5kbGUgdGhlIGxvdCBzbyB5b3UncmUgbm90IGp1Z2dsaW5nIGZpdmUgZGlmZmVyZW50IHRyYWRlcyBmb3Igb25lIGZsb29yLiBMZXNzIHN0cmVzcywgbW9yZSB3b3cuPC9wPgo8L2Rpdj4KPGRpdiBjbGFzcz0iYmVuZWZpdC1jYXJkIHByZW1yZXN0LWNhcmQiPgo8ZGl2IGNsYXNzPSJiZW5lZml0LWljb24iPvCfk5o8L2Rpdj4KPGgzPkZsb29yaW5nIElzIEFsbCBXZSBEbzwvaDM+CjxwPldlIGxpdmUgYW5kIGJyZWF0aGUgY29tbWVyY2lhbCBmbG9vcmluZy4gU3Vic3RyYXRlcywgYWRoZXNpdmVzLCBmaW5pc2hpbmcg4oCUIHdlIG5lcmQgb3V0IG9uIHRoZSBkZXRhaWxzIHNvIHRoZSBlbmQgcmVzdWx0IGxvb2tzIGVmZm9ydGxlc3MuPC9wPgo8L2Rpdj4KPGRpdiBjbGFzcz0iYmVuZWZpdC1jYXJkIHByZW1yZXN0LWNhcmQiPgo8ZGl2IGNsYXNzPSJiZW5lZml0LWljb24iPvCfkY08L2Rpdj4KPGgzPlRydXN0ZWQgYnkgdGhlIEJlc3Q8L2gzPgo8cD5HbG9iYWwgY29uc3VsdGFuY3kgZmlybXMsIGJhbmtzLCB0ZWNoIGNvbXBhbmllcywgYW5kIG5hdGlvbmFsIEZNIHByb3ZpZGVycy4gV2hlbiB5b3VyIGZsb29ycyBuZWVkIHRvIG1ha2UgYSBzdGF0ZW1lbnQsIHdlJ3JlIHRoZSBvbmVzIHRoZXkgY2FsbC48L3A+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+Cjwvc2VjdGlvbj4KPHNlY3Rpb24gY2xhc3M9InNlY3Rpb24iIGlkPSJjb2xvdXJzIiBzdHlsZT0iYmFja2dyb3VuZDogdmFyKC0td2hpdGUpOyI+CjxkaXYgY2xhc3M9ImNvbnRhaW5lciI+CjxkaXYgY2xhc3M9InNlY3Rpb24taGVhZGVyIj4KPHNwYW4gY2xhc3M9ImxhYmVsIj5Db2xvdXIgUGFsZXR0ZTwvc3Bhbj4KPGgyPjI5IHdheXMgdG8gbWFrZSBhIHN0YXRlbWVudC48L2gyPgo8cD5FYXJ0aHkgbmV1dHJhbHMsIHJpY2ggdG9uZXMsIGFuZCBhIGZldyB0aGF0IHJlYWxseSBwb3AuIEV2ZXJ5IGNvbG91ciBpcyBhdmFpbGFibGUgYWNyb3NzIGV2ZXJ5IHByb2ZpbGUg4oCUIHNvIHlvdXIgZmxvb3IgY2FuIGJlIGFzIGJvbGQgb3IgYXMgdW5kZXJzdGF0ZWQgYXMgdGhlIHNwYWNlIGRlbWFuZHMuPC9wPgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sb3VyLWdyaWQiIGlkPSJjb2xvdXJHcmlkIj48L2Rpdj4KPGRpdiBzdHlsZT0idGV4dC1hbGlnbjogY2VudGVyOyI+CjxhIGNsYXNzPSJidG4gYnRuLW9yYW5nZSIgaHJlZj0idGVsOjEzMDAyMDc5MTUiPgrwn5OeCkxvdmUgd2hhdCB5b3Ugc2VlPyBMZXQncyBjaGF0IOKAlCAxMzAwIDIwNyA5MTUKPC9hPgo8L2Rpdj4KPC9kaXY+Cjwvc2VjdGlvbj4KPHNlY3Rpb24gY2xhc3M9InNlY3Rpb24gc2VjdGlvbi1jcmVhbSIgaWQ9InByb2ZpbGVzIiBzdHlsZT0icG9zaXRpb246cmVsYXRpdmU7Ij4KPGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7dG9wOi0xcHg7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjUwcHg7YmFja2dyb3VuZDp2YXIoLS13aGl0ZSk7Y2xpcC1wYXRoOmVsbGlwc2UoNTUlIDEwMCUgYXQgNTAlIDAlKTsiPjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb250YWluZXIiPgo8ZGl2IGNsYXNzPSJzZWN0aW9uLWhlYWRlciI+CjxzcGFuIGNsYXNzPSJsYWJlbCI+VGhlIFJhbmdlPC9zcGFuPgo8aDI+Rml2ZSBwcm9maWxlcy4gT25lIGZvciBldmVyeSBjYW52YXMuPC9oMj4KPHA+RWFjaCBwcm9maWxlIGJyaW5ncyBhIGRpZmZlcmVudCBzdXJmYWNlIHRleHR1cmUgdG8gdGhlIHBhcnR5IOKAlCBmcm9tIHNtb290aCBhbmQgZGVzaWduLWZvcndhcmQgdG8gaGVhdnktZHV0eSBtYXJpbmUtZ3JhZGUuIFdlIHN1cHBseSBhbmQgaW5zdGFsbCBldmVyeSBzaW5nbGUgb25lLjwvcD4KPC9kaXY+CjxkaXYgY2xhc3M9InByb2ZpbGUtdGFicyI+CjxidXR0b24gY2xhc3M9InByb2ZpbGUtdGFiIGFjdGl2ZSIgb25jbGljaz0ic2hvd1Byb2ZpbGUoJ3dhbGtlYXN5JykiPldhbGtFYXN5PC9idXR0b24+CjxidXR0b24gY2xhc3M9InByb2ZpbGUtdGFiIiBvbmNsaWNrPSJzaG93UHJvZmlsZSgnbG93cHJvZmlsZScpIj5Mb3cgUHJvZmlsZTwvYnV0dG9uPgo8YnV0dG9uIGNsYXNzPSJwcm9maWxlLXRhYiIgb25jbGljaz0ic2hvd1Byb2ZpbGUoJ3RleHR1cmVkJykiPlRleHR1cmVkPC9idXR0b24+CjxidXR0b24gY2xhc3M9InByb2ZpbGUtdGFiIiBvbmNsaWNrPSJzaG93UHJvZmlsZSgnYXF1YWRlY2snKSI+QXF1YURlY2s8L2J1dHRvbj4KPGJ1dHRvbiBjbGFzcz0icHJvZmlsZS10YWIiIG9uY2xpY2s9InNob3dQcm9maWxlKCd0YWN0aWxlcycpIj5UYWN0aWxlczwvYnV0dG9uPgo8L2Rpdj4KPGRpdiBjbGFzcz0icHJvZmlsZS1kZXRhaWwgYWN0aXZlIiBpZD0id2Fsa2Vhc3kiPgo8ZGl2IGNsYXNzPSJwcm9maWxlLWNvbnRlbnQiPgo8ZGl2Pgo8aDM+V2Fsa0Vhc3k8L2gzPgo8cD5NYWRlIGZyb20gYSBibGVuZCBvZiBjb3JrIOKAlCB5ZXMsIGluY2x1ZGluZyByZWN5Y2xlZCB3aW5lIGNvcmtzIOKAlCBhbmQgYWR2YW5jZWQgcG9seW1lcnMsIFdhbGtFYXN5IGlzIHNvZnQsIHNwcmluZ3ksIGFuZCB0aGUgbW9zdCBkZXNpZ24tZm9yd2FyZCBwcm9maWxlIGluIHRoZSByYW5nZS4gVGhlIHNtb290aCBzdXJmYWNlIGlzIGFsbCBhYm91dCBhZXN0aGV0aWNzLjwvcD4KPHA+VGhlIG9uZSB3ZSBpbnN0YWxsIG1vc3QgaW4gb2ZmaWNlcywgYWdlZCBjYXJlLCBlZHVjYXRpb24sIGFuZCBob3NwaXRhbGl0eSDigJQgYW55d2hlcmUgdGhlIGZsb29yIG5lZWRzIHRvIGxvb2sgYXMgZ29vZCBhcyBpdCBmZWVscy48L3A+CjxkaXYgY2xhc3M9InNwZWNzIj4KPGRpdiBjbGFzcz0ic3BlYy1pdGVtIj7inJMgQXZhaWxhYmxlIGluIDIuNW1tLCAzLjJtbSwgYW5kIDQuNW1tIHRoaWNrbmVzczwvZGl2Pgo8ZGl2IGNsYXNzPSJzcGVjLWl0ZW0iPuKckyBTaGVldHM6IDE4MDAgw5cgOTAwbW0gfCBUaWxlczogNDQwIMOXIDQ0MG1tIG9yIDI5NSDDlyAyOTVtbTwvZGl2Pgo8ZGl2IGNsYXNzPSJzcGVjLWl0ZW0iPuKckyBJbmRvb3IgdXNlIHwgMjkgY29sb3VycyB8IEdyZWVuVGFnIGNlcnRpZmllZDwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9InByb2ZpbGUtaW1hZ2UiPgo8aW1nIGFsdD0iQ29tQ29yayBXYWxrRWFzeSBpbiBhIG1vZGVybiBpbnRlcmlvciIgbG9hZGluZz0ibGF6eSIgc3JjPSJodHRwczovL3NhZmV0eWZsb29yaW5nLmNvbS5hdS93cC1jb250ZW50L3VwbG9hZHMvMjAyNS8wMS9XYWxrRWFzeV85NEEzMTEwLUVkaXQtMTAyNHg4MTkud2VicCIvPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJwcm9maWxlLWRldGFpbCIgaWQ9Imxvd3Byb2ZpbGUiPgo8ZGl2IGNsYXNzPSJwcm9maWxlLWNvbnRlbnQiPgo8ZGl2Pgo8aDM+TG93IFByb2ZpbGU8L2gzPgo8cD5TbWFsbCBjb252ZXggc3R1ZHMgZ2l2ZSB0aGlzIG9uZSBleHRyYSBncmlwIHdpdGhvdXQgc2FjcmlmaWNpbmcgdGhlIGNsZWFuIGxvb2suIEVhc3kgdG8gbWFpbnRhaW4gYW5kIGluY3JlZGlibHkgdmVyc2F0aWxlIOKAlCBpdCdzIHRoZSBTd2lzcyBhcm15IGtuaWZlIG9mIHRoZSBDb21Db3JrIHJhbmdlLjwvcD4KPHA+V2UgbGF5IGl0IGluIGNvcnJpZG9ycywgbWVldGluZyByb29tcywgYmFyIGFyZWFzLCByYW1wcywgYW5kIHdhbGt3YXlzIOKAlCBhbnl3aGVyZSB0aGF0IG5lZWRzIHRvIGJhbGFuY2UgZ29vZCBsb29rcyB3aXRoIHN1cmUgZm9vdGluZy48L3A+CjxkaXYgY2xhc3M9InNwZWNzIj4KPGRpdiBjbGFzcz0ic3BlYy1pdGVtIj7inJMgQXZhaWxhYmxlIGluIDIuNW1tLCAzLjJtbSwgYW5kIDQuNW1tIHRoaWNrbmVzczwvZGl2Pgo8ZGl2IGNsYXNzPSJzcGVjLWl0ZW0iPuKckyBFbmhhbmNlZCBzbGlwIHJlc2lzdGFuY2Ugd2l0aCBjb252ZXggc3R1ZCBwYXR0ZXJuPC9kaXY+CjxkaXYgY2xhc3M9InNwZWMtaXRlbSI+4pyTIEluZG9vciB1c2UgfCAyOSBjb2xvdXJzIHwgRWFzeS1jbGVhbiBzdXJmYWNlPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0icHJvZmlsZS1pbWFnZSI+CjxpbWcgYWx0PSJDb21Db3JrIExvdyBQcm9maWxlIGluIGEgY29tbWVyY2lhbCBjb3JyaWRvciIgbG9hZGluZz0ibGF6eSIgc3JjPSJodHRwczovL3NhZmV0eWZsb29yaW5nLmNvbS5hdS93cC1jb250ZW50L3VwbG9hZHMvMjAyNC8xMC9TYWZldHktRmxvb3JpbmdzLUNvbWNvcmstTG93LVByb2ZpbGUtMS0xMDI0eDgxOS53ZWJwIi8+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9InByb2ZpbGUtZGV0YWlsIiBpZD0idGV4dHVyZWQiPgo8ZGl2IGNsYXNzPSJwcm9maWxlLWNvbnRlbnQiPgo8ZGl2Pgo8aDM+VGV4dHVyZWQ8L2gzPgo8cD5BIGRpc3RpbmN0aXZlIGhhbW1lcmVkIGZpbmlzaCB0aGF0IGNyYW5rcyB1cCB0aGUgZ3JpcCBmb3IgZW52aXJvbm1lbnRzIHdoZXJlIHRoaW5ncyBnZXQgd2V0LiBCb2xkLCB0YWN0aWxlLCBhbmQgbG9va3MgYW1hemluZyBvdXRkb29ycyB3aGVyZSBuYXR1cmFsIG1hdGVyaWFscyByZWFsbHkgc2luZy48L3A+CjxwPlRoaW5rIGNvdXJ0eWFyZHMsIGJhbGNvbmllcywgcG9vbCBzdXJyb3VuZHMsIHBsYXlncm91bmRzLCBhbmQgZXh0ZXJuYWwgd2Fsa3dheXMg4oCUIGFueXdoZXJlIHRoZSB3ZWF0aGVyIGdldHMgaW52b2x2ZWQgYnV0IHRoZSBhZXN0aGV0aWMgc3RpbGwgbWF0dGVycy48L3A+CjxkaXYgY2xhc3M9InNwZWNzIj4KPGRpdiBjbGFzcz0ic3BlYy1pdGVtIj7inJMgQXZhaWxhYmxlIGluIDMuMm1tIGFuZCA0LjVtbSB0aGlja25lc3M8L2Rpdj4KPGRpdiBjbGFzcz0ic3BlYy1pdGVtIj7inJMgSGFtbWVyZWQgZmluaXNoIGZvciBlbmhhbmNlZCBncmlwIGluIHdldCBjb25kaXRpb25zPC9kaXY+CjxkaXYgY2xhc3M9InNwZWMtaXRlbSI+4pyTIEluZG9vciAmYW1wOyBvdXRkb29yIHwgVVYgcmVzaXN0YW50IHwgMjkgY29sb3VyczwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9InByb2ZpbGUtaW1hZ2UiPgo8aW1nIGFsdD0iQ29tQ29yayBUZXh0dXJlZCBvbiBhbiBleHRlcmlvciBkZWNrIiBsb2FkaW5nPSJsYXp5IiBzcmM9Imh0dHBzOi8vc2FmZXR5Zmxvb3JpbmcuY29tLmF1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDI0LzEwL1NhZmV0eS1GbG9vcmluZ3MtRXh0ZXJpb3ItQ29yay1SdWJiZXItRmxvb3JpbmctMy0xMDI0eDgxOS53ZWJwIi8+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9InByb2ZpbGUtZGV0YWlsIiBpZD0iYXF1YWRlY2siPgo8ZGl2IGNsYXNzPSJwcm9maWxlLWNvbnRlbnQiPgo8ZGl2Pgo8aDM+QXF1YURlY2s8L2gzPgo8cD5UaGUgdG91Z2ggb25lLiBBcXVhRGVjayBsYXVnaHMgYXQgc2FsdCB3YXRlciwgc2hydWdzIG9mZiBncmVhc2UgYW5kIGZ1ZWwsIGFuZCBzdGlsbCBsb29rcyBnb3JnZW91cy4gSXQncyBjb3JrIGVuZ2luZWVyZWQgZm9yIGVudmlyb25tZW50cyB0aGF0IHdvdWxkIGRlc3Ryb3kgbGVzc2VyIG1hdGVyaWFscy48L3A+CjxwPk1hcmluYSBkZWNraW5nLCBib2F0IGludGVyaW9ycywgY29tbWVyY2lhbCBraXRjaGVucywgb3V0ZG9vciBlbnRlcnRhaW5pbmcg4oCUIGlmIGl0J3Mgd2V0LCB3aWxkLCBvciBib3RoLCBBcXVhRGVjayBpcyB5b3VyIGFuc3dlci48L3A+CjxkaXYgY2xhc3M9InNwZWNzIj4KPGRpdiBjbGFzcz0ic3BlYy1pdGVtIj7inJMgQXZhaWxhYmxlIGluIHJvdW5kIHN0dWQgYW5kIGRpYW1vbmQgcGF0dGVybnM8L2Rpdj4KPGRpdiBjbGFzcz0ic3BlYy1pdGVtIj7inJMgSW1wZXJ2aW91cyB0byBzYWx0IHdhdGVyLCBncmVhc2UsIGZ1ZWwsIGFuZCBvaWxzPC9kaXY+CjxkaXYgY2xhc3M9InNwZWMtaXRlbSI+4pyTIE1hcmluZS1ncmFkZSB8IFVWIHJlc2lzdGFudCB8IDI5IGNvbG91cnM8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJwcm9maWxlLWltYWdlIj4KPGltZyBhbHQ9IkNvbUNvcmsgQXF1YURlY2sgb24gYSBtYXJpbmUgdmVzc2VsIiBsb2FkaW5nPSJsYXp5IiBzcmM9Imh0dHBzOi8vc2FmZXR5Zmxvb3JpbmcuY29tLmF1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDI0LzEwL1NhZmV0eS1Db3JrLVJ1YmJlci1GbG9vcmluZ3MtMDgwLTEwMjR4ODE5LndlYnAiLz4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0icHJvZmlsZS1kZXRhaWwiIGlkPSJ0YWN0aWxlcyI+CjxkaXYgY2xhc3M9InByb2ZpbGUtY29udGVudCI+CjxkaXY+CjxoMz5UYWN0aWxlczwvaDM+CjxwPlRhY3RpbGUgZ3JvdW5kIHN1cmZhY2UgaW5kaWNhdG9ycyAoVEdTSXMpIG1hZGUgZnJvbSBDb21Db3JrJ3MgcHJvdmVuIGNvcmsgY29tcG9zaXRlLiBTYW1lIHN1c3RhaW5hYmlsaXR5LCBzYW1lIGR1cmFiaWxpdHkg4oCUIG5vdyBlbmdpbmVlcmVkIGZvciBhY2Nlc3NpYmxlIHdheWZpbmRpbmcgdG8gQXVzdHJhbGlhbiBzdGFuZGFyZHMuPC9wPgo8cD5XYXJuaW5nIGFuZCBkaXJlY3Rpb25hbCBwYXR0ZXJucyBmb3IgcmFpbHdheSBwbGF0Zm9ybXMsIGNyb3NzaW5ncywgYnVpbGRpbmcgZW50cmllcywgYW5kIHB1YmxpYyBzcGFjZXMuIEFjY2Vzc2liaWxpdHkgZG9uZSByaWdodCwgd2l0aCBtYXRlcmlhbHMgdGhhdCBhY3R1YWxseSBsYXN0LjwvcD4KPGRpdiBjbGFzcz0ic3BlY3MiPgo8ZGl2IGNsYXNzPSJzcGVjLWl0ZW0iPuKckyBTaGVldCBzaXplOiA2MDAgw5cgMzAwbW0gfCAzLjBtbSBiYXNlLCA1LjBtbSBzdHVkPC9kaXY+CjxkaXYgY2xhc3M9InNwZWMtaXRlbSI+4pyTIFdhcm5pbmcgYW5kIGRpcmVjdGlvbmFsIHBhdHRlcm5zIGF2YWlsYWJsZTwvZGl2Pgo8ZGl2IGNsYXNzPSJzcGVjLWl0ZW0iPuKckyA2IGNvbG91cnM6IEJsYWNrLCBTdGVlbCBHcmV5LCBQYWNpZmljIEJsdWUsIFRlcnJhY290dGEsIEl2b3J5LCBTYWZldHkgWWVsbG93PC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0icHJvZmlsZS1pbWFnZSI+CjxpbWcgYWx0PSJDb21Db3JrIFRhY3RpbGUgaW5kaWNhdG9ycyBhdCBhIHB1YmxpYyBmYWNpbGl0eSIgbG9hZGluZz0ibGF6eSIgc3JjPSJodHRwczovL3NhZmV0eWZsb29yaW5nLmNvbS5hdS93cC1jb250ZW50L3VwbG9hZHMvMjAyNC8xMC9TYWZldHktQ29yay1SdWJiZXItRmxvb3JpbmdzLTAyNi0xMDI0eDgxOS53ZWJwIi8+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8L3NlY3Rpb24+CjxzZWN0aW9uIGNsYXNzPSJzZWN0aW9uIHNlY3Rpb24tb3JhbmdlIiBpZD0iYXBwbGljYXRpb25zIiBzdHlsZT0icG9zaXRpb246cmVsYXRpdmU7Ij4KPGRpdiBzdHlsZT0icG9zaXRpb246YWJzb2x1dGU7dG9wOi0xcHg7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjYwcHg7YmFja2dyb3VuZDp2YXIoLS1jcmVhbSk7Y2xpcC1wYXRoOmVsbGlwc2UoNTUlIDEwMCUgYXQgNTAlIDAlKTsiPjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb250YWluZXIiIHN0eWxlPSJwYWRkaW5nLXRvcDogMjBweDsiPgo8ZGl2IGNsYXNzPSJzZWN0aW9uLWhlYWRlciI+CjxzcGFuIGNsYXNzPSJsYWJlbCI+V2hlcmUgSXQgU2hpbmVzPC9zcGFuPgo8aDI+RnJvbSBib2FyZHJvb21zIHRvIGJvYXQgZGVja3M8L2gyPgo8cD5Db21Db3JrIHR1cm5zIHVwIGluIHRoZSBtb3N0IGludGVyZXN0aW5nIHBsYWNlcy4gV2UndmUgaW5zdGFsbGVkIGl0IGFjcm9zcyBldmVyeSBpbmR1c3RyeSB0aGF0IGNhcmVzIGFib3V0IGhvdyB0aGVpciBzcGFjZSBsb29rcyBhbmQgZmVlbHMuPC9wPgo8L2Rpdj4KPGRpdiBjbGFzcz0iYXBwLWdyaWQiPgo8ZGl2IGNsYXNzPSJhcHAtY2FyZCI+CjxpbWcgYWx0PSJDb21Db3JrIGluIGEgY29tbWVyY2lhbCBvZmZpY2UiIGxvYWRpbmc9ImxhenkiIHNyYz0iaHR0cHM6Ly9zYWZldHlmbG9vcmluZy5jb20uYXUvd3AtY29udGVudC91cGxvYWRzLzIwMjQvMTAvU2FmZXR5LUZsb29yaW5ncy1Db21jb3JrLUZsb29yaW5nLTEzLTY4M3gxMDI0LndlYnAiLz4KPGRpdiBjbGFzcz0iYXBwLWxhYmVsIj5Db21tZXJjaWFsICZhbXA7IE9mZmljZTwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0iYXBwLWNhcmQiPgo8aW1nIGFsdD0iQ29tQ29yayBpbiBhZ2VkIGNhcmUiIGxvYWRpbmc9ImxhenkiIHNyYz0iaHR0cHM6Ly9zYWZldHlmbG9vcmluZy5jb20uYXUvd3AtY29udGVudC91cGxvYWRzLzIwMjQvMTAvU2FmZXR5LUZsb29yaW5ncy1SZXNpZGVudGlhbC1Db3JrLVJ1YmJlci1GbG9vcmluZy0yMy02ODN4MTAyNC53ZWJwIi8+CjxkaXYgY2xhc3M9ImFwcC1sYWJlbCI+QWdlZCBDYXJlICZhbXA7IEhlYWx0aGNhcmU8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImFwcC1jYXJkIj4KPGltZyBhbHQ9IkNvbUNvcmsgaW4gZWR1Y2F0aW9uIiBsb2FkaW5nPSJsYXp5IiBzcmM9Imh0dHBzOi8vc2FmZXR5Zmxvb3JpbmcuY29tLmF1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDI1LzAxL1NhZmV0eS1GbG9vcmluZy1Db21jb3JrXzk0QTMxMjAtRWRpdC0yLTY4M3gxMDI0LndlYnAiLz4KPGRpdiBjbGFzcz0iYXBwLWxhYmVsIj5FZHVjYXRpb24gJmFtcDsgQ2hpbGRjYXJlPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJhcHAtY2FyZCI+CjxpbWcgYWx0PSJDb21Db3JrIEFxdWFEZWNrIGV4dGVyaW9yIiBsb2FkaW5nPSJsYXp5IiBzcmM9Imh0dHBzOi8vc2FmZXR5Zmxvb3JpbmcuY29tLmF1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDI0LzEwL1NhZmV0eS1GbG9vcmluZ3MtRXh0ZXJuYWwtRmxvb3JpbmctU29sdXRpb25zLTUtNjgzeDEwMjQud2VicCIvPgo8ZGl2IGNsYXNzPSJhcHAtbGFiZWwiPk1hcmluZSAmYW1wOyBFeHRlcmlvcjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8L3NlY3Rpb24+CjxzZWN0aW9uIGNsYXNzPSJzZWN0aW9uIHNlY3Rpb24tY3JlYW0iIGlkPSJzcGVjcyIgc3R5bGU9InBvc2l0aW9uOnJlbGF0aXZlOyI+CjxkaXYgc3R5bGU9InBvc2l0aW9uOmFic29sdXRlO3RvcDotMXB4O2xlZnQ6MDtyaWdodDowO2hlaWdodDo2MHB4O2JhY2tncm91bmQ6dmFyKC0tb3JhbmdlKTtjbGlwLXBhdGg6ZWxsaXBzZSg1NSUgMTAwJSBhdCA1MCUgMCUpOyI+PC9kaXY+CjxkaXYgY2xhc3M9ImNvbnRhaW5lciIgc3R5bGU9InBhZGRpbmctdG9wOiAyMHB4OyI+CjxkaXYgY2xhc3M9InNlY3Rpb24taGVhZGVyIj4KPHNwYW4gY2xhc3M9ImxhYmVsIj5UaGUgTml0dHkgR3JpdHR5PC9zcGFuPgo8aDI+U3BlY3MgJmFtcDsgZG93bmxvYWRzIGZvciB0aGUgZGV0YWlsLW9yaWVudGVkPC9oMj4KPHA+V2UgZ2V0IGl0IOKAlCBzb21ldGltZXMgeW91IG5lZWQgdGhlIG51bWJlcnMuIEdyYWIgdGhlIHRlY2ggc3BlY3MgYmVsb3csIG9yIGp1c3QgZ2l2ZSB1cyBhIGNhbGwgYW5kIHdlJ2xsIHRhbGsgeW91IHRocm91Z2ggaXQuPC9wPgo8L2Rpdj4KPGRpdiBjbGFzcz0ic3BlY3MtZ3JpZCI+CjxkaXYgY2xhc3M9InNwZWMtY2FyZCI+CvCfk4QKPGgzPlRlY2huaWNhbCBEYXRhIFNoZWV0PC9oMz4KPHA+QWxsIGZpdmUgcHJvZmlsZXMg4oCUIHNsaXAgcmF0aW5ncywgZmlyZSByYXRpbmdzLCB0aGlja25lc3Mgb3B0aW9ucywgZGltZW5zaW9ucywgYW5kIHRoZSBwZXJmb3JtYW5jZSBkYXRhIHlvdXIgc3BlYyB3cml0ZXIgbmVlZHMuPC9wPgo8YSBocmVmPSJodHRwczovL3NhZmV0eWZsb29yaW5nLmNvbS5hdS93cC1jb250ZW50L3VwbG9hZHMvMjAyNC8wOS9Db21jb3JrX0Zsb29yaW5nX1RlY2huaWNhbF9EYXRhX3NoZWV0LnBkZiIgdGFyZ2V0PSJfYmxhbmsiPkRvd25sb2FkIFBERiDirIfvuI88L2E+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJzcGVjLWNhcmQiPgrwn5SnCjxoMz5JbnN0YWxsYXRpb24gSW5zdHJ1Y3Rpb25zPC9oMz4KPHA+U3ViZmxvb3IgcHJlcCwgYWRoZXNpdmUgc2VsZWN0aW9uLCBjdXR0aW5nLCBmaXR0aW5nLCBhbmQgYWZ0ZXJjYXJlLiBPZiBjb3Vyc2UsIGlmIHdlJ3JlIGRvaW5nIHRoZSBpbnN0YWxsLCB0aGlzIG9uZSdzIG9uIHVzLjwvcD4KPGEgaHJlZj0iaHR0cHM6Ly9zYWZldHlmbG9vcmluZy5jb20uYXUvd3AtY29udGVudC91cGxvYWRzLzIwMjQvMDkvQ29tY29ya19GbG9vcmluZ19JbnN0YWxsYXRpb25fSW5zdHJ1Y3Rpb25zLnBkZiIgdGFyZ2V0PSJfYmxhbmsiPkRvd25sb2FkIFBERiDirIfvuI88L2E+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJzcGVjLWNhcmQiPgrwn5uh77iPCjxoMz5HcmVlblRhZyBDZXJ0aWZpY2F0aW9uPC9oMz4KPHA+SW5kZXBlbmRlbnQgdmVyaWZpY2F0aW9uIHRoYXQgQ29tQ29yayB3YWxrcyB0aGUgd2FsayBvbiBzdXN0YWluYWJpbGl0eSDigJQgZnJvbSByYXcgbWF0ZXJpYWxzIHRvIGVuZC1vZi1saWZlLiBUaGUgcmVjZWlwdHMgZm9yIHRoZSBlY28gY2xhaW1zLjwvcD4KPGEgaHJlZj0iaHR0cHM6Ly93d3cuZ2xvYmFsZ3JlZW50YWcuY29tL3Byb2R1Y3RzL2NvbWNvcmstZXZlcmNvcmUvIiB0YXJnZXQ9Il9ibGFuayI+VmlldyBDZXJ0aWZpY2F0aW9uIOKsh++4jzwvYT4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPC9zZWN0aW9uPgo8c2VjdGlvbiBjbGFzcz0iY3RhLXNlY3Rpb24iIGlkPSJjb250YWN0Ij4KPGRpdiBjbGFzcz0iY29udGFpbmVyIj4KPGgyPkxldCdzIGNyZWF0ZSBmbG9vcnMgdGhhdDxici8+c3dlZXAgeW91IG9mZiB5b3VyIGZlZXQuPC9oMj4KPHA+R290IGEgcHJvamVjdD8gR290IGEgcG9ydGZvbGlvPyBHb3QgYSB3aWxkIGlkZWEgaW52b2x2aW5nIGNvcmsgb24gYSBib2F0PyBXZSdyZSBhbGwgZWFycy48L3A+CjxkaXYgY2xhc3M9ImN0YS1idXR0b25zIj4KPGEgY2xhc3M9ImJ0biBidG4tZ29sZCIgaHJlZj0idGVsOjEzMDAyMDc5MTUiIHN0eWxlPSJmb250LXNpemU6IDE4cHg7IHBhZGRpbmc6IDIwcHggNDBweDsiPgrwn5OeCkNhbGwgMTMwMCAyMDcgOTE1CjwvYT4KPGEgY2xhc3M9ImJ0biBidG4tb3V0bGluZS13aGl0ZSIgaHJlZj0ibWFpbHRvOnByb2plY3RzQHByZW1yZXN0LmNvbS5hdSIgc3R5bGU9ImZvbnQtc2l6ZTogMThweDsgcGFkZGluZzogMjBweCA0MHB4OyI+CuKXjwpwcm9qZWN0c0BwcmVtcmVzdC5jb20uYXUKPC9hPgo8L2Rpdj4KPC9kaXY+Cjwvc2VjdGlvbj4KPGRpdiBjbGFzcz0iY29sb3VyLW1vZGFsLW92ZXJsYXkiIGlkPSJjb2xvdXJNb2RhbCI+CjxkaXYgY2xhc3M9ImNvbG91ci1tb2RhbC1jb250ZW50Ij4KPGJ1dHRvbiBhcmlhLWxhYmVsPSJDbG9zZSIgY2xhc3M9ImNvbG91ci1tb2RhbC1jbG9zZSIgaWQ9Im1vZGFsQ2xvc2UiPsOXPC9idXR0b24+CjxpbWcgYWx0PSIiIGlkPSJtb2RhbEltZyIgc3JjPSIiLz4KPGRpdiBjbGFzcz0iY29sb3VyLW1vZGFsLW5hbWUiIGlkPSJtb2RhbE5hbWUiPjwvZGl2Pgo8L2Rpdj4KPC9kaXY+&#x27;);
initBehavior();}
function initBehavior(){
var C=[{n:&#x27;Yellow&#x27;,f:&#x27;01_yellow&#x27;},{n:&#x27;Cinnamon&#x27;,f:&#x27;02_cinnamon&#x27;},{n:&#x27;Fuchsia&#x27;,f:&#x27;03_fuchia&#x27;},{n:&#x27;Lime&#x27;,f:&#x27;04_lime&#x27;},{n:&#x27;Coral&#x27;,f:&#x27;05_coral&#x27;},{n:&#x27;Tangerine&#x27;,f:&#x27;06_tangerine&#x27;},{n:&#x27;Red&#x27;,f:&#x27;07_red&#x27;},{n:&#x27;Red Oxide&#x27;,f:&#x27;08_redoxide&#x27;},{n:&#x27;Mocha&#x27;,f:&#x27;09_mocha&#x27;},{n:&#x27;Black&#x27;,f:&#x27;10_black&#x27;},{n:&#x27;Brunswick Green&#x27;,f:&#x27;11_brunswickgreen&#x27;},{n:&#x27;Denim&#x27;,f:&#x27;12_denim&#x27;},{n:&#x27;Pacific Blue&#x27;,f:&#x27;13_pacificblue&#x27;},{n:&#x27;Taupe&#x27;,f:&#x27;14_taupe&#x27;},{n:&#x27;Sand&#x27;,f:&#x27;15_sand&#x27;},{n:&#x27;Terracotta&#x27;,f:&#x27;16_terracotta&#x27;},{n:&#x27;Ivory&#x27;,f:&#x27;17_ivory&#x27;},{n:&#x27;Chocolate&#x27;,f:&#x27;18_chocolate&#x27;},{n:&#x27;Charcoal&#x27;,f:&#x27;19_charcoal&#x27;},{n:&#x27;Navy Blue&#x27;,f:&#x27;20_navyblue&#x27;},{n:&#x27;Steel Grey&#x27;,f:&#x27;21_steelgrey&#x27;},{n:&#x27;Turquoise&#x27;,f:&#x27;22_turquoise&#x27;},{n:&#x27;Midnight Blue&#x27;,f:&#x27;23_midnightblue&#x27;},{n:&#x27;Watermelon&#x27;,f:&#x27;24_watermelon&#x27;},{n:&#x27;Storm Grey&#x27;,f:&#x27;25_stormgrey&#x27;},{n:&#x27;White&#x27;,f:&#x27;26_white&#x27;},{n:&#x27;Evergreen&#x27;,f:&#x27;27_evergreen&#x27;},{n:&#x27;Jacaranda&#x27;,f:&#x27;28_jackaranda&#x27;},{n:&#x27;Sky Blue&#x27;,f:&#x27;29_skyblue&#x27;}];
var mo=document.getElementById(&#x27;colourModal&#x27;),mi=document.getElementById(&#x27;modalImg&#x27;),mn=document.getElementById(&#x27;modalName&#x27;),mc=document.getElementById(&#x27;modalClose&#x27;),g=document.getElementById(&#x27;colourGrid&#x27;);
if(g){C.forEach(function(c){var u=&#x27;https://safetyflooring.com.au/wp-content/uploads/2024/09/&#x27;+c.f+&#x27;-1024x683.webp&#x27;;var d=document.createElement(&#x27;div&#x27;);d.className=&#x27;colour-swatch&#x27;;var i=document.createElement(&#x27;img&#x27;);i.src=u;i.alt=&#x27;ComCork &#x27;+c.n;i.loading=&#x27;lazy&#x27;;var nd=document.createElement(&#x27;div&#x27;);nd.className=&#x27;colour-name&#x27;;nd.textContent=c.n;d.appendChild(i);d.appendChild(nd);d.addEventListener(&#x27;click&#x27;,function(){mi.src=u;mi.alt=&#x27;ComCork &#x27;+c.n;mn.textContent=c.n;mo.classList.add(&#x27;active&#x27;);document.body.style.overflow=&#x27;hidden&#x27;;});g.appendChild(d);});}
function cl(){mo.classList.remove(&#x27;active&#x27;);document.body.style.overflow=&#x27;&#x27;;}
if(mc)mc.addEventListener(&#x27;click&#x27;,function(e){e.stopPropagation();cl();});
if(mo)mo.addEventListener(&#x27;click&#x27;,function(e){if(e.target===mo)cl();});
document.addEventListener(&#x27;keydown&#x27;,function(e){if(e.key===&#x27;Escape&#x27;)cl();});
window.showProfile=function(id){document.querySelectorAll(&#x27;.profile-detail&#x27;).forEach(function(el){el.classList.remove(&#x27;active&#x27;);});document.querySelectorAll(&#x27;.profile-tab&#x27;).forEach(function(el){el.classList.remove(&#x27;active&#x27;);});var tgt=document.getElementById(id);if(tgt)tgt.classList.add(&#x27;active&#x27;);if(event)event.target.classList.add(&#x27;active&#x27;);};
}
})();</script>
    <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=675661387278edf4cf92de17" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="/js/webflow.js" type="text/javascript"></script>
  </body>
` }} />
    </>
  );
}

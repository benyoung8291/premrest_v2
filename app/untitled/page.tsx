import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'ComCork | Beautiful Natural Cork Flooring | Supply & Install Australia-Wide | Premrest',
  description: 'ComCork natural cork flooring — 29 colours, 5 profiles, supplied and installed Australia-wide by Premrest. Beautiful, sustainable, slip-resistant cork for commercial spaces. Call 1300 207 915.',
};

export default function Page() {
  return (
    <>
      {/* Page-specific styles */}
      <style dangerouslySetInnerHTML={{ __html: `@import url(&#x27;https://use.typekit.net/xxxxxxxx.css&#x27;);:root{--orange:#D1703C;--orange-light:#E08550;--gold:#F9CB8F;--gold-light:#FBDDB3;--cream:#FBF7F3;--cream-dark:#F5F0EA;--olive:#AEBA6C;--olive-dark:#8A9A4E;--dark:#2E3133;--dark-deep:#222222;--white:#FFFDF9;--text:#2E3133;--text-light:#5A5E62;--text-on-orange:#FBF7F3;}*{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;}body{font-family:&#x27;Krub&#x27;,-apple-system,sans-serif;color:var(--text);background:var(--white);line-height:1.7;-webkit-font-smoothing:antialiased;}h1,h2,h3,.heading-font,.btn,.profile-tab{font-family:futura-pt,&#x27;Krub&#x27;,sans-serif;font-weight:800;}.slab{font-family:&#x27;Josefin Slab&#x27;,serif;}.container{max-width:1200px;margin:0 auto;padding:0 32px;}.btn{display:inline-flex;align-items:center;gap:10px;padding:16px 36px;border-radius:100px;font-size:16px;font-weight:700;text-decoration:none;transition:all .3s ease;border:none;cursor:pointer;letter-spacing:.3px;}.btn-gold{background:var(--gold);color:var(--orange);}.btn-gold:hover{background:var(--gold-light);transform:translateY(-2px);}.btn-orange{background:var(--orange);color:var(--white);}.btn-orange:hover{background:var(--orange-light);transform:translateY(-2px);}.btn-outline{background:transparent;color:var(--orange);border:2px solid var(--orange);}.btn-outline:hover{background:var(--orange);color:var(--white);}.btn-white{background:var(--white);color:var(--orange);}.btn-white:hover{background:var(--cream);transform:translateY(-2px);}.btn-outline-white{background:transparent;color:var(--white);border:2px solid rgba(255,255,255,.5);}.btn-outline-white:hover{border-color:white;background:rgba(255,255,255,.1);}.btn svg{width:18px;height:18px;}.hero-section{background:var(--orange);color:var(--text-on-orange);padding:80px 0 100px;overflow:hidden;position:relative;}.hero-section .container{display:flex;align-items:center;gap:48px;}.hero-section .hero-content{max-width:55%;}.hero-section .hero-images{flex:1;}.hero-badge{display:inline-flex;align-items:center;gap:8px;background:var(--gold);color:var(--orange);border-radius:100px;padding:8px 20px;font-size:13px;font-weight:700;margin-bottom:28px;letter-spacing:1px;text-transform:uppercase;}.hero-section h1{font-size:clamp(42px,5.5vw,72px);line-height:1.05;color:var(--white);margin-bottom:24px;}.hero-section h1 em{font-style:italic;color:var(--gold);}.hero-sub{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:20px;line-height:1.7;color:rgba(255,255,255,.85);margin-bottom:36px;max-width:500px;}.hero-cta-group{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:40px;}.hero-trust{display:flex;gap:28px;flex-wrap:wrap;}.hero-trust-item{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:500;color:rgba(255,255,255,.8);}.hero-trust-item svg{width:18px;height:18px;color:var(--gold);flex-shrink:0;}.hero-images{position:relative;}.hero-img-main{width:100%;height:480px;object-fit:cover;border-radius:40% 60% 50% 50%/50% 40% 60% 50%;box-shadow:0 20px 60px rgba(0,0,0,.2);}.hero-img-float{position:absolute;width:200px;height:200px;object-fit:cover;border-radius:50%;border:6px solid var(--orange);box-shadow:0 12px 40px rgba(0,0,0,.15);}.hero-img-float-1{bottom:-30px;left:-40px;}.hero-img-float-2{top:-20px;right:-20px;width:160px;height:160px;}.hero-doodle-1{position:absolute;bottom:40px;right:60px;color:var(--gold);opacity:.4;font-size:48px;font-weight:800;transform:rotate(-12deg);font-family:futura-pt,&#x27;Krub&#x27;,sans-serif;}.section{padding:100px 0;}.section-cream{background:var(--cream);}.section-orange{background:var(--orange);color:var(--text-on-orange);}.section-dark{background:var(--dark-deep);color:var(--white);}.section-header{text-align:center;max-width:720px;margin:0 auto 64px;}.section-header .label{display:inline-block;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--orange);margin-bottom:16px;background:var(--gold);padding:6px 18px;border-radius:100px;}.section-orange .section-header .label{background:var(--gold);color:var(--orange);}.section-dark .section-header .label{background:rgba(255,255,255,.1);color:var(--gold);}.section-header h2{font-size:clamp(32px,4vw,52px);line-height:1.1;margin-bottom:20px;color:var(--dark);}.section-orange .section-header h2,.section-dark .section-header h2{color:var(--white);}.section-header p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:19px;line-height:1.7;color:var(--text-light);}.section-orange .section-header p{color:rgba(255,255,255,.8);}.section-dark .section-header p{color:rgba(255,255,255,.7);}.intro-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:80px;align-items:center;}.intro-image{position:relative;}.intro-image img{width:100%;height:520px;object-fit:cover;border-radius:30% 70% 60% 40%/50% 30% 70% 50%;}.intro-image .float-badge{position:absolute;bottom:20px;right:-20px;background:var(--gold);color:var(--orange);border-radius:50%;width:120px;height:120px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:800;font-size:32px;line-height:1;box-shadow:0 8px 30px rgba(0,0,0,.1);transform:rotate(8deg);}.intro-image .float-badge span{font-size:12px;font-weight:600;letter-spacing:1px;margin-top:4px;}.intro-content h2{font-size:clamp(32px,3.5vw,48px);line-height:1.1;margin-bottom:24px;color:var(--dark);}.intro-content p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:18px;line-height:1.8;color:var(--text-light);margin-bottom:20px;}.intro-stat-row{display:flex;gap:40px;margin-top:40px;padding-top:32px;border-top:2px solid var(--gold);}.intro-stat{text-align:center;}.intro-stat .number{font-family:futura-pt,&#x27;Krub&#x27;,sans-serif;font-weight:800;font-size:44px;color:var(--orange);display:block;line-height:1.1;}.intro-stat .label{font-size:14px;color:var(--text-light);font-weight:500;}.benefits-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;}.benefit-card{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:24px;padding:40px 28px;transition:transform .3s;position:relative;overflow:hidden;}.benefit-card::before{content:&#x27;&#x27;;position:absolute;top:-30px;right:-30px;width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,.05);}.benefit-card:hover{transform:translateY(-6px);}.benefit-icon{width:56px;height:56px;background:var(--gold);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:20px;}.benefit-icon svg{width:24px;height:24px;color:var(--orange);}.benefit-card h3{font-size:22px;margin-bottom:12px;}.benefit-card p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:16px;line-height:1.7;color:rgba(255,255,255,.75);}.premrest-card{background:var(--white);border-radius:24px;padding:36px 28px;transition:transform .3s,box-shadow .3s;position:relative;overflow:hidden;border:none;}.premrest-card::before{content:&#x27;&#x27;;position:absolute;top:0;left:0;right:0;height:4px;background:var(--gold);border-radius:24px 24px 0 0;}.premrest-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,.08);}.premrest-card .benefit-icon{background:var(--orange);}.premrest-card .benefit-icon svg{color:var(--white);}.premrest-card h3{color:var(--dark);font-size:20px;margin-bottom:10px;}.premrest-card p{color:var(--text-light);}.colour-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:14px;margin-bottom:48px;}.colour-swatch{aspect-ratio:1;border-radius:20px;overflow:hidden;cursor:pointer;transition:transform .3s,box-shadow .3s;position:relative;}.colour-swatch:hover{transform:scale(1.1) rotate(2deg);box-shadow:0 12px 36px rgba(0,0,0,.15);}.colour-swatch img{width:100%;height:100%;object-fit:cover;}.colour-swatch .colour-name{position:absolute;bottom:0;left:0;right:0;padding:6px 8px;background:linear-gradient(to top,rgba(0,0,0,.75),transparent);color:white;font-size:11px;font-weight:600;text-transform:capitalize;text-align:center;opacity:0;transition:opacity .3s;}.colour-swatch:hover .colour-name{opacity:1;}.profile-tabs{display:flex;justify-content:center;gap:10px;margin-bottom:48px;flex-wrap:wrap;}.profile-tab{padding:12px 28px;border:2px solid var(--gold);border-radius:100px;background:transparent;font-size:15px;font-weight:700;color:var(--text);cursor:pointer;transition:all .3s;}.profile-tab:hover,.profile-tab.active{background:var(--orange);color:var(--white);border-color:var(--orange);}.profile-detail{display:none;animation:fadeIn .4s ease;}.profile-detail.active{display:block;}@keyframes fadeIn{from{opacity:0;transform:translateY(10px);}to{opacity:1;}}.profile-content{display:grid;grid-template-columns:1.2fr 1fr;gap:60px;align-items:center;}.profile-content h3{font-size:36px;margin-bottom:16px;color:var(--dark);}.profile-content p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:17px;line-height:1.8;color:var(--text-light);margin-bottom:12px;}.profile-content .specs{margin-top:24px;}.profile-content .spec-item{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid rgba(0,0,0,.06);font-size:15px;color:var(--text);}.profile-content .spec-item svg{width:18px;height:18px;color:var(--orange);flex-shrink:0;}.profile-image{position:relative;}.profile-image img{width:100%;height:400px;object-fit:cover;border-radius:50% 50% 50% 50%/40% 40% 60% 60%;}.app-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}.app-card{position:relative;border-radius:24px;overflow:hidden;aspect-ratio:3/4;cursor:pointer;}.app-card img{width:100%;height:100%;object-fit:cover;transition:transform .5s;}.app-card:hover img{transform:scale(1.08);}.app-card .app-label{position:absolute;bottom:0;left:0;right:0;padding:28px 20px 20px;background:linear-gradient(to top,rgba(0,0,0,.8),transparent);color:white;font-weight:800;font-size:17px;}.specs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}.spec-card{background:var(--white);border-radius:24px;padding:40px 28px;text-align:center;transition:transform .3s,box-shadow .3s;}.spec-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,.08);}.spec-card svg{width:44px;height:44px;color:var(--orange);margin-bottom:20px;}.spec-card h3{font-size:20px;margin-bottom:10px;color:var(--dark);}.spec-card p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:15px;line-height:1.7;color:var(--text-light);margin-bottom:20px;}.spec-card a{display:inline-flex;align-items:center;gap:8px;color:var(--orange);text-decoration:none;font-weight:700;font-size:14px;}.spec-card a:hover{text-decoration:underline;}.cta-section{background:var(--dark-deep);padding:120px 0;text-align:center;color:white;position:relative;overflow:hidden;}.cta-section::before{content:&#x27;&#x27;;position:absolute;top:-2px;left:0;right:0;height:60px;background:var(--cream);clip-path:ellipse(55% 100% at 50% 0%);}.cta-section h2{font-size:clamp(36px,4.5vw,60px);margin-bottom:24px;line-height:1.1;position:relative;}.cta-section p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:20px;color:rgba(255,255,255,.7);margin-bottom:40px;max-width:560px;margin-left:auto;margin-right:auto;position:relative;}.cta-buttons{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;position:relative;}.colour-modal-overlay{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.85);z-index:9999;align-items:center;justify-content:center;padding:32px;cursor:pointer;animation:modalFadeIn .25s ease;}.colour-modal-overlay.active{display:flex;}@keyframes modalFadeIn{from{opacity:0;}to{opacity:1;}}.colour-modal-content{position:relative;max-width:800px;width:100%;text-align:center;cursor:default;animation:modalSlideUp .3s ease;}@keyframes modalSlideUp{from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}.colour-modal-content img{width:100%;max-height:70vh;object-fit:contain;border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,.4);}.colour-modal-name{font-family:futura-pt,&#x27;Krub&#x27;,sans-serif;font-weight:800;font-size:clamp(24px,3vw,36px);color:var(--gold);margin-top:20px;letter-spacing:1px;}.colour-modal-close{position:absolute;top:-16px;right:-16px;width:48px;height:48px;background:var(--orange);border:none;border-radius:50%;color:white;font-size:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform .2s,background .2s;box-shadow:0 4px 16px rgba(0,0,0,.3);z-index:10;}.colour-modal-close:hover{transform:scale(1.1) rotate(90deg);background:var(--orange-light);}.samples-showcase{padding:80px 0;background:var(--white);text-align:center;position:relative;}.samples-showcase::before{content:&#x27;&#x27;;position:absolute;top:-1px;left:0;right:0;height:50px;background:var(--cream);clip-path:ellipse(55% 100% at 50% 0%);}.samples-image-wrap{max-width:720px;margin:0 auto;position:relative;}.samples-image-wrap img{width:100%;height:auto;border-radius:30% 70% 60% 40%/50% 30% 70% 50%;box-shadow:0 20px 60px rgba(0,0,0,.1);}.samples-caption{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:18px;color:var(--text-light);margin-top:28px;font-style:italic;}.samples-caption strong{color:var(--orange);font-style:normal;}@media(max-width:968px){.hero-section .container{flex-direction:column;}.hero-section .hero-content{max-width:100%;}.intro-grid,.profile-content{grid-template-columns:1fr;gap:40px;}.benefits-grid{grid-template-columns:1fr 1fr;}.app-grid{grid-template-columns:1fr 1fr;}.specs-grid{grid-template-columns:1fr;}.hero-images{order:-1;}.hero-img-float{display:none;}.intro-image .float-badge{right:10px;bottom:10px;width:90px;height:90px;font-size:24px;}.intro-image .float-badge span{font-size:10px;}}@media(max-width:640px){.benefits-grid{grid-template-columns:1fr;}.colour-grid{grid-template-columns:repeat(auto-fill,minmax(80px,1fr));gap:10px;}.hero-trust{flex-direction:column;gap:12px;}.app-grid{grid-template-columns:1fr;}.hero-section h1{font-size:38px;}}` }} />
      {/* Webflow page content - exact export */}
      <div dangerouslySetInnerHTML={{ __html: `
  <style>@import url(&#x27;https://use.typekit.net/xxxxxxxx.css&#x27;);:root{--orange:#D1703C;--orange-light:#E08550;--gold:#F9CB8F;--gold-light:#FBDDB3;--cream:#FBF7F3;--cream-dark:#F5F0EA;--olive:#AEBA6C;--olive-dark:#8A9A4E;--dark:#2E3133;--dark-deep:#222222;--white:#FFFDF9;--text:#2E3133;--text-light:#5A5E62;--text-on-orange:#FBF7F3;}*{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;}body{font-family:&#x27;Krub&#x27;,-apple-system,sans-serif;color:var(--text);background:var(--white);line-height:1.7;-webkit-font-smoothing:antialiased;}h1,h2,h3,.heading-font,.btn,.profile-tab{font-family:futura-pt,&#x27;Krub&#x27;,sans-serif;font-weight:800;}.slab{font-family:&#x27;Josefin Slab&#x27;,serif;}.container{max-width:1200px;margin:0 auto;padding:0 32px;}.btn{display:inline-flex;align-items:center;gap:10px;padding:16px 36px;border-radius:100px;font-size:16px;font-weight:700;text-decoration:none;transition:all .3s ease;border:none;cursor:pointer;letter-spacing:.3px;}.btn-gold{background:var(--gold);color:var(--orange);}.btn-gold:hover{background:var(--gold-light);transform:translateY(-2px);}.btn-orange{background:var(--orange);color:var(--white);}.btn-orange:hover{background:var(--orange-light);transform:translateY(-2px);}.btn-outline{background:transparent;color:var(--orange);border:2px solid var(--orange);}.btn-outline:hover{background:var(--orange);color:var(--white);}.btn-white{background:var(--white);color:var(--orange);}.btn-white:hover{background:var(--cream);transform:translateY(-2px);}.btn-outline-white{background:transparent;color:var(--white);border:2px solid rgba(255,255,255,.5);}.btn-outline-white:hover{border-color:white;background:rgba(255,255,255,.1);}.btn svg{width:18px;height:18px;}.hero-section{background:var(--orange);color:var(--text-on-orange);padding:80px 0 100px;overflow:hidden;position:relative;}.hero-section .container{display:flex;align-items:center;gap:48px;}.hero-section .hero-content{max-width:55%;}.hero-section .hero-images{flex:1;}.hero-badge{display:inline-flex;align-items:center;gap:8px;background:var(--gold);color:var(--orange);border-radius:100px;padding:8px 20px;font-size:13px;font-weight:700;margin-bottom:28px;letter-spacing:1px;text-transform:uppercase;}.hero-section h1{font-size:clamp(42px,5.5vw,72px);line-height:1.05;color:var(--white);margin-bottom:24px;}.hero-section h1 em{font-style:italic;color:var(--gold);}.hero-sub{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:20px;line-height:1.7;color:rgba(255,255,255,.85);margin-bottom:36px;max-width:500px;}.hero-cta-group{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:40px;}.hero-trust{display:flex;gap:28px;flex-wrap:wrap;}.hero-trust-item{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:500;color:rgba(255,255,255,.8);}.hero-trust-item svg{width:18px;height:18px;color:var(--gold);flex-shrink:0;}.hero-images{position:relative;}.hero-img-main{width:100%;height:480px;object-fit:cover;border-radius:40% 60% 50% 50%/50% 40% 60% 50%;box-shadow:0 20px 60px rgba(0,0,0,.2);}.hero-img-float{position:absolute;width:200px;height:200px;object-fit:cover;border-radius:50%;border:6px solid var(--orange);box-shadow:0 12px 40px rgba(0,0,0,.15);}.hero-img-float-1{bottom:-30px;left:-40px;}.hero-img-float-2{top:-20px;right:-20px;width:160px;height:160px;}.hero-doodle-1{position:absolute;bottom:40px;right:60px;color:var(--gold);opacity:.4;font-size:48px;font-weight:800;transform:rotate(-12deg);font-family:futura-pt,&#x27;Krub&#x27;,sans-serif;}.section{padding:100px 0;}.section-cream{background:var(--cream);}.section-orange{background:var(--orange);color:var(--text-on-orange);}.section-dark{background:var(--dark-deep);color:var(--white);}.section-header{text-align:center;max-width:720px;margin:0 auto 64px;}.section-header .label{display:inline-block;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--orange);margin-bottom:16px;background:var(--gold);padding:6px 18px;border-radius:100px;}.section-orange .section-header .label{background:var(--gold);color:var(--orange);}.section-dark .section-header .label{background:rgba(255,255,255,.1);color:var(--gold);}.section-header h2{font-size:clamp(32px,4vw,52px);line-height:1.1;margin-bottom:20px;color:var(--dark);}.section-orange .section-header h2,.section-dark .section-header h2{color:var(--white);}.section-header p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:19px;line-height:1.7;color:var(--text-light);}.section-orange .section-header p{color:rgba(255,255,255,.8);}.section-dark .section-header p{color:rgba(255,255,255,.7);}.intro-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:80px;align-items:center;}.intro-image{position:relative;}.intro-image img{width:100%;height:520px;object-fit:cover;border-radius:30% 70% 60% 40%/50% 30% 70% 50%;}.intro-image .float-badge{position:absolute;bottom:20px;right:-20px;background:var(--gold);color:var(--orange);border-radius:50%;width:120px;height:120px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:800;font-size:32px;line-height:1;box-shadow:0 8px 30px rgba(0,0,0,.1);transform:rotate(8deg);}.intro-image .float-badge span{font-size:12px;font-weight:600;letter-spacing:1px;margin-top:4px;}.intro-content h2{font-size:clamp(32px,3.5vw,48px);line-height:1.1;margin-bottom:24px;color:var(--dark);}.intro-content p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:18px;line-height:1.8;color:var(--text-light);margin-bottom:20px;}.intro-stat-row{display:flex;gap:40px;margin-top:40px;padding-top:32px;border-top:2px solid var(--gold);}.intro-stat{text-align:center;}.intro-stat .number{font-family:futura-pt,&#x27;Krub&#x27;,sans-serif;font-weight:800;font-size:44px;color:var(--orange);display:block;line-height:1.1;}.intro-stat .label{font-size:14px;color:var(--text-light);font-weight:500;}.benefits-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;}.benefit-card{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:24px;padding:40px 28px;transition:transform .3s;position:relative;overflow:hidden;}.benefit-card::before{content:&#x27;&#x27;;position:absolute;top:-30px;right:-30px;width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,.05);}.benefit-card:hover{transform:translateY(-6px);}.benefit-icon{width:56px;height:56px;background:var(--gold);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:20px;}.benefit-icon svg{width:24px;height:24px;color:var(--orange);}.benefit-card h3{font-size:22px;margin-bottom:12px;}.benefit-card p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:16px;line-height:1.7;color:rgba(255,255,255,.75);}.premrest-card{background:var(--white);border-radius:24px;padding:36px 28px;transition:transform .3s,box-shadow .3s;position:relative;overflow:hidden;border:none;}.premrest-card::before{content:&#x27;&#x27;;position:absolute;top:0;left:0;right:0;height:4px;background:var(--gold);border-radius:24px 24px 0 0;}.premrest-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,.08);}.premrest-card .benefit-icon{background:var(--orange);}.premrest-card .benefit-icon svg{color:var(--white);}.premrest-card h3{color:var(--dark);font-size:20px;margin-bottom:10px;}.premrest-card p{color:var(--text-light);}.colour-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:14px;margin-bottom:48px;}.colour-swatch{aspect-ratio:1;border-radius:20px;overflow:hidden;cursor:pointer;transition:transform .3s,box-shadow .3s;position:relative;}.colour-swatch:hover{transform:scale(1.1) rotate(2deg);box-shadow:0 12px 36px rgba(0,0,0,.15);}.colour-swatch img{width:100%;height:100%;object-fit:cover;}.colour-swatch .colour-name{position:absolute;bottom:0;left:0;right:0;padding:6px 8px;background:linear-gradient(to top,rgba(0,0,0,.75),transparent);color:white;font-size:11px;font-weight:600;text-transform:capitalize;text-align:center;opacity:0;transition:opacity .3s;}.colour-swatch:hover .colour-name{opacity:1;}.profile-tabs{display:flex;justify-content:center;gap:10px;margin-bottom:48px;flex-wrap:wrap;}.profile-tab{padding:12px 28px;border:2px solid var(--gold);border-radius:100px;background:transparent;font-size:15px;font-weight:700;color:var(--text);cursor:pointer;transition:all .3s;}.profile-tab:hover,.profile-tab.active{background:var(--orange);color:var(--white);border-color:var(--orange);}.profile-detail{display:none;animation:fadeIn .4s ease;}.profile-detail.active{display:block;}@keyframes fadeIn{from{opacity:0;transform:translateY(10px);}to{opacity:1;}}.profile-content{display:grid;grid-template-columns:1.2fr 1fr;gap:60px;align-items:center;}.profile-content h3{font-size:36px;margin-bottom:16px;color:var(--dark);}.profile-content p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:17px;line-height:1.8;color:var(--text-light);margin-bottom:12px;}.profile-content .specs{margin-top:24px;}.profile-content .spec-item{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid rgba(0,0,0,.06);font-size:15px;color:var(--text);}.profile-content .spec-item svg{width:18px;height:18px;color:var(--orange);flex-shrink:0;}.profile-image{position:relative;}.profile-image img{width:100%;height:400px;object-fit:cover;border-radius:50% 50% 50% 50%/40% 40% 60% 60%;}.app-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}.app-card{position:relative;border-radius:24px;overflow:hidden;aspect-ratio:3/4;cursor:pointer;}.app-card img{width:100%;height:100%;object-fit:cover;transition:transform .5s;}.app-card:hover img{transform:scale(1.08);}.app-card .app-label{position:absolute;bottom:0;left:0;right:0;padding:28px 20px 20px;background:linear-gradient(to top,rgba(0,0,0,.8),transparent);color:white;font-weight:800;font-size:17px;}.specs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}.spec-card{background:var(--white);border-radius:24px;padding:40px 28px;text-align:center;transition:transform .3s,box-shadow .3s;}.spec-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,.08);}.spec-card svg{width:44px;height:44px;color:var(--orange);margin-bottom:20px;}.spec-card h3{font-size:20px;margin-bottom:10px;color:var(--dark);}.spec-card p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:15px;line-height:1.7;color:var(--text-light);margin-bottom:20px;}.spec-card a{display:inline-flex;align-items:center;gap:8px;color:var(--orange);text-decoration:none;font-weight:700;font-size:14px;}.spec-card a:hover{text-decoration:underline;}.cta-section{background:var(--dark-deep);padding:120px 0;text-align:center;color:white;position:relative;overflow:hidden;}.cta-section::before{content:&#x27;&#x27;;position:absolute;top:-2px;left:0;right:0;height:60px;background:var(--cream);clip-path:ellipse(55% 100% at 50% 0%);}.cta-section h2{font-size:clamp(36px,4.5vw,60px);margin-bottom:24px;line-height:1.1;position:relative;}.cta-section p{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:20px;color:rgba(255,255,255,.7);margin-bottom:40px;max-width:560px;margin-left:auto;margin-right:auto;position:relative;}.cta-buttons{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;position:relative;}.colour-modal-overlay{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.85);z-index:9999;align-items:center;justify-content:center;padding:32px;cursor:pointer;animation:modalFadeIn .25s ease;}.colour-modal-overlay.active{display:flex;}@keyframes modalFadeIn{from{opacity:0;}to{opacity:1;}}.colour-modal-content{position:relative;max-width:800px;width:100%;text-align:center;cursor:default;animation:modalSlideUp .3s ease;}@keyframes modalSlideUp{from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}.colour-modal-content img{width:100%;max-height:70vh;object-fit:contain;border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,.4);}.colour-modal-name{font-family:futura-pt,&#x27;Krub&#x27;,sans-serif;font-weight:800;font-size:clamp(24px,3vw,36px);color:var(--gold);margin-top:20px;letter-spacing:1px;}.colour-modal-close{position:absolute;top:-16px;right:-16px;width:48px;height:48px;background:var(--orange);border:none;border-radius:50%;color:white;font-size:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform .2s,background .2s;box-shadow:0 4px 16px rgba(0,0,0,.3);z-index:10;}.colour-modal-close:hover{transform:scale(1.1) rotate(90deg);background:var(--orange-light);}.samples-showcase{padding:80px 0;background:var(--white);text-align:center;position:relative;}.samples-showcase::before{content:&#x27;&#x27;;position:absolute;top:-1px;left:0;right:0;height:50px;background:var(--cream);clip-path:ellipse(55% 100% at 50% 0%);}.samples-image-wrap{max-width:720px;margin:0 auto;position:relative;}.samples-image-wrap img{width:100%;height:auto;border-radius:30% 70% 60% 40%/50% 30% 70% 50%;box-shadow:0 20px 60px rgba(0,0,0,.1);}.samples-caption{font-family:&#x27;Josefin Slab&#x27;,serif;font-size:18px;color:var(--text-light);margin-top:28px;font-style:italic;}.samples-caption strong{color:var(--orange);font-style:normal;}@media(max-width:968px){.hero-section .container{flex-direction:column;}.hero-section .hero-content{max-width:100%;}.intro-grid,.profile-content{grid-template-columns:1fr;gap:40px;}.benefits-grid{grid-template-columns:1fr 1fr;}.app-grid{grid-template-columns:1fr 1fr;}.specs-grid{grid-template-columns:1fr;}.hero-images{order:-1;}.hero-img-float{display:none;}.intro-image .float-badge{right:10px;bottom:10px;width:90px;height:90px;font-size:24px;}.intro-image .float-badge span{font-size:10px;}}@media(max-width:640px){.benefits-grid{grid-template-columns:1fr;}.colour-grid{grid-template-columns:repeat(auto-fill,minmax(80px,1fr));gap:10px;}.hero-trust{flex-direction:column;gap:12px;}.app-grid{grid-template-columns:1fr;}.hero-section h1{font-size:38px;}}</style>
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
  <div></div>
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
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Krub:wght@400;500;600;700&amp;family=Josefin+Slab:wght@400;600;700&amp;display=swap">
  <script></script>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=675661387278edf4cf92de17" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="/js/webflow.js" type="text/javascript"></script>
` }} />
    </>
  );
}

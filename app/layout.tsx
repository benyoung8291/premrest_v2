import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Premrest - Beautiful Flooring | Commercial Floor Experts',
  description: "Australia's go-to for commercial floor care, cleaning and installing floors from small spaces to multi-level projects.",
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/webclip.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Webflow CSS */}
        <link href="/css/normalize.css" rel="stylesheet" type="text/css" />
        <link href="/css/webflow.css" rel="stylesheet" type="text/css" />
        <link href="/css/premrest-486d48.webflow.css" rel="stylesheet" type="text/css" />
        
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        
        {/* Typekit (Futura PT, Krub) */}
        <Script src="https://use.typekit.net/ykm3xtb.js" strategy="beforeInteractive" />
        <Script id="typekit-load" strategy="beforeInteractive">
          {`try{Typekit.load();}catch(e){}`}
        </Script>
        
        {/* WebFont loader */}
        <Script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" strategy="beforeInteractive" />
        <Script id="webfont-load" strategy="beforeInteractive">
          {`WebFont.load({google:{families:["Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic","PT Sans:400,400italic,700,700italic","Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic","Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic","Inter:300,400,500,600,700","Public Sans:300,400,500,600,700"]}});`}
        </Script>
        
        {/* Webflow touch detection */}
        <Script id="wf-touch" strategy="beforeInteractive">
          {`!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`}
        </Script>
      </head>
      <body>
        {children}
        
        {/* jQuery (required by Webflow) */}
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js"
          strategy="beforeInteractive"
        />
        {/* Webflow JS */}
        <Script src="/js/webflow.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

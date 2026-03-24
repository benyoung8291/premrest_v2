import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Premrest — Beautiful Flooring | Commercial Floor Experts',
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
        {/* Google Fonts — simplified: Inter only (Futura PT + Krub via Typekit) */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Typekit (Futura PT, Krub) */}
        <Script src="https://use.typekit.net/ykm3xtb.js" strategy="beforeInteractive" />
        <Script id="typekit-load" strategy="beforeInteractive">
          {`try{Typekit.load();}catch(e){}`}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

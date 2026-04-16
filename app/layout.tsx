import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Premrest — Commercial Flooring Experts',
  description: "Australia's trusted partner for commercial floor care — cleaning, installation, and maintenance for spaces of every scale.",
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
        {/* Google Fonts — Inter for body text */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

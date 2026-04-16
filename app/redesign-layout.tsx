'use client';

import Navigation from '@/app/components/layout/Navigation';
import Footer from '@/app/components/layout/Footer';

export default function RedesignLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}

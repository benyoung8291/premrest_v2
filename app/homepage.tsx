'use client';

import RedesignLayout from '@/app/redesign-layout';
import HeroSection from '@/app/components/sections/HeroSection';
import LogoMarquee from '@/app/components/ui/LogoMarquee';
import ServicesOverview from '@/app/components/sections/ServicesOverview';
import CaseStudyFeature from '@/app/components/sections/CaseStudyFeature';
import AudienceCards from '@/app/components/sections/AudienceCards';
import SustainabilitySpotlight from '@/app/components/sections/SustainabilitySpotlight';
import PodcastFeature from '@/app/components/sections/PodcastFeature';

export default function HomePage() {
  return (
    <RedesignLayout>
      {/* 1. Hero: People-first storytelling */}
      <HeroSection />

      {/* 2. Client logo strip (animated marquee) */}
      <LogoMarquee />

      {/* 3. Services overview (3 pillars) */}
      <ServicesOverview />

      {/* 4. Featured editorial case study */}
      <CaseStudyFeature />

      {/* 5. 'Who we work with' audience cards */}
      <AudienceCards />

      {/* 6. Sustainability spotlight */}
      <SustainabilitySpotlight />

      {/* 7. Podcast/content feature */}
      <PodcastFeature />

      {/* 8. Magazine-style footer — rendered by RedesignLayout */}
    </RedesignLayout>
  );
}

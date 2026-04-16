'use client';

import RedesignLayout from '@/app/redesign-layout';
import HeroCarousel from '@/app/components/sections/HeroCarousel';
import CategoryTiles from '@/app/components/sections/CategoryTiles';
import FeaturedServices from '@/app/components/sections/FeaturedServices';
import ProjectShowcase from '@/app/components/sections/ProjectShowcase';
import PromoTiles from '@/app/components/sections/PromoTiles';
import BrandValues from '@/app/components/sections/BrandValues';

export default function HomePage() {
  return (
    <RedesignLayout>
      {/* 1. Hero carousel with rotating slides */}
      <HeroCarousel />

      {/* 2. Category tiles — 4-item grid */}
      <CategoryTiles />

      {/* 3. Featured services — horizontally scrollable cards */}
      <FeaturedServices />

      {/* 4. Featured project showcase with material swatches */}
      <ProjectShowcase />

      {/* 5. Promotional 3-column tiles */}
      <PromoTiles />

      {/* 6. Brand values — sustainability & quality messaging */}
      <BrandValues />

      {/* Footer with email signup — rendered by RedesignLayout */}
    </RedesignLayout>
  );
}

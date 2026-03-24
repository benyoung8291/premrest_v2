'use client';

import AudiencePageTemplate, { AudiencePageConfig } from '@/app/components/sections/AudiencePageTemplate';

const config: AudiencePageConfig = {
  role: 'Procurement Managers',
  subtitle: 'Scale consistent floor care and streamline your contracts nationally.',
  heroImage: '/images/Premrest_WeWorkWith_Hero_Blob_PM.webp',

  problemHeading:
    'Managing different floor cleaning agreements on a national scale is operational chaos.',
  problemBody: [
    'Multiple suppliers, inconsistent quality, varying pricing \u2014 managing floor care across a national portfolio is a headache that never ends.',
    'You need one supplier who can deliver consistent results everywhere, with transparent pricing and a single contract.',
  ],
  problemImage: '/images/Premrest_WeWorkWith_Problem_Blob_PM.webp',

  solutionHeading: 'Structured, scalable floor care - without the supplier sprawl.',
  solutionBody: [
    'One contract. One point of contact. Consistent service quality across every site in your portfolio. We simplify national floor care procurement so you can focus on strategic priorities.',
  ],

  features: [
    {
      title: 'National coverage, local delivery',
      description:
        'Consistent service standards across Australia, delivered by teams who know the local sites.',
    },
    {
      title: 'Single contract simplicity',
      description:
        'One agreement, one invoice, one partner \u2014 no more juggling dozens of suppliers.',
    },
    {
      title: 'Transparent pricing',
      description:
        'Clear, fixed-price plans with no hidden costs. Budget certainty from day one.',
    },
    {
      title: 'Centralised reporting',
      description:
        'Portfolio-wide dashboards and reports that give you visibility across every site.',
    },
    {
      title: 'SLA-backed performance',
      description:
        'Service level agreements with measurable KPIs and accountability at every level.',
    },
    {
      title: 'Streamlined onboarding',
      description:
        'We make transitioning sites fast and painless, with minimal disruption to operations.',
    },
  ],

  ctaHeading: 'Take the complexity out of managing floors across your entire organisation.',
};

export default function ProcurementManagersContent() {
  return <AudiencePageTemplate config={config} />;
}

'use client';

import AudiencePageTemplate, { AudiencePageConfig } from '@/app/components/sections/AudiencePageTemplate';

const config: AudiencePageConfig = {
  role: 'Building Managers',
  subtitle: 'Keep your common areas and clients\u2019 floors sharp \u2014 without the complaints.',
  heroImage: '/images/Premrest_WeWorkWith_Hero_Blob_BM.webp',

  problemHeading:
    "Keeping your building\u2019s best face forward shouldn\u2019t be a daily fight.",
  problemBody: [
    'Lobby floors that dull after a week. Lift carpets that trap every stain. Common areas that never quite look clean enough \u2014 no matter how often they\u2019re done.',
    'You shouldn\u2019t have to field complaints about something that should just work.',
  ],
  problemImage: '/images/Premrest_WeWorkWith_Problem_Blob_BM.webp',

  solutionHeading: 'Proactive floor care that keeps your building looking its best.',
  solutionBody: [
    'We partner with building managers to deliver scheduled, specialist floor care that keeps common areas pristine and tenant satisfaction high \u2014 without the day-to-day hassle.',
  ],

  features: [
    {
      title: 'Lobby & common area specialists',
      description:
        'High-traffic areas demand specialist attention. We keep them looking sharp week after week.',
    },
    {
      title: 'Tenant satisfaction',
      description:
        'Clean, well-maintained floors reduce complaints and keep your tenants happy.',
    },
    {
      title: 'Flexible scheduling',
      description:
        'After-hours and weekend work that fits around your building\u2019s rhythm \u2014 zero disruption.',
    },
    {
      title: 'Multi-floor expertise',
      description:
        'Carpet, vinyl, timber, stone \u2014 we know how to care for every surface in your building.',
    },
    {
      title: 'Before & after reporting',
      description:
        'Photo documentation for every job so you can see the results and share them with stakeholders.',
    },
    {
      title: 'Preventative maintenance',
      description:
        'We catch issues early so they never become costly problems or tenant grievances.',
    },
  ],

  lifecycle: {
    heading: 'We manage the full life cycle of your flooring.',
    body: [
      'From specification and installation to ongoing care and end-of-life replacement, we handle the entire flooring journey for your building \u2014 so you can focus on everything else.',
    ],
  },

  ctaHeading: 'Let\u2019s create floors that speak volumes about your building.',
};

export default function BuildingManagersContent() {
  return <AudiencePageTemplate config={config} />;
}

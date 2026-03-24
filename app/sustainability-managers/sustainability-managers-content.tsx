'use client';

import AudiencePageTemplate, { AudiencePageConfig } from '@/app/components/sections/AudiencePageTemplate';
import { colors } from '@/app/lib/tokens';

const config: AudiencePageConfig = {
  role: 'Sustainability Managers',
  subtitle: 'Strengthen your ESG position with sustainable floor care.',
  heroImage: '/images/Premrest_WeWorkWith_Hero_Blob_SM.webp',
  accentColor: colors.green.DEFAULT,

  problemHeading:
    'Finding practical, meaningful sustainability wins is harder than it should be.',
  problemBody: [
    'You\u2019re under pressure to deliver measurable ESG outcomes, but finding tangible, auditable wins in facilities management can feel like searching for a needle in a haystack.',
    'Floor care is one of those hidden opportunities \u2014 if you have the right partner.',
  ],
  problemImage: '/images/Premrest_WeWorkWith_Problem_Blob_SM.webp',

  solutionHeading: 'Better floors, better impact, better outcomes.',
  solutionBody: [
    'We help sustainability managers unlock measurable environmental wins through smarter floor care \u2014 from reduced chemical usage and water consumption to extended flooring lifecycles and lower embodied carbon.',
  ],

  features: [
    {
      title: 'Measurable impact data',
      description:
        'Quantified sustainability metrics you can feed directly into ESG and annual reports.',
    },
    {
      title: 'Reduced chemical usage',
      description:
        'Our methods dramatically cut chemical consumption without compromising floor quality.',
    },
    {
      title: 'Water conservation',
      description:
        'Advanced cleaning technology that uses a fraction of the water traditional methods require.',
    },
    {
      title: 'Extended floor life',
      description:
        'Proper maintenance extends flooring lifespan by years, reducing waste and replacement costs.',
    },
    {
      title: 'Lower embodied carbon',
      description:
        'Fewer replacements mean less manufacturing, transport and installation \u2014 a direct carbon saving.',
    },
    {
      title: 'Green product selection',
      description:
        'We specify and use environmentally certified products across our entire service offering.',
    },
  ],

  calculator: {
    heading: 'Sustainability impact report',
    body: [
      'See exactly how much water, chemicals and carbon your organisation could save with Premrest\u2019s sustainable floor care approach.',
    ],
    image: '/images/Premrest_Sustainability_Calculator_Blob.webp',
    buttonText: 'Calculate your impact',
    buttonHref: '/sustainability-impact-report',
  },

  ctaHeading: 'Let\u2019s reduce your footprint, one floor at a time.',
};

export default function SustainabilityManagersContent() {
  return <AudiencePageTemplate config={config} />;
}

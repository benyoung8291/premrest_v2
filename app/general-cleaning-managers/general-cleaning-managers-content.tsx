'use client';

import AudiencePageTemplate, { AudiencePageConfig } from '@/app/components/sections/AudiencePageTemplate';

const config: AudiencePageConfig = {
  role: 'General Cleaning Managers',
  subtitle: 'Specialist floor care that supports your cleaning team.',
  heroImage: '/images/Premrest_WeWorkWith_Hero_Blob_GCM.webp',

  problemHeading:
    'Even the best cleaning teams need specialist know-how when it comes to floors.',
  problemBody: [
    'Your team keeps the building running \u2014 but floors require specialist equipment, products and techniques that go beyond general cleaning.',
    'When floors start to look tired despite regular cleaning, it\u2019s not a reflection of your team. It\u2019s a sign you need a specialist partner.',
  ],
  problemImage: '/images/Premrest_WeWorkWith_Problem_Blob_GCM.webp',

  solutionHeading: 'Floors you\u2019ll never have to chase.',
  solutionBody: [
    'We work alongside your cleaning team as a specialist extension \u2014 handling the deep cleans, restorations and maintenance that keep floors performing at their best without adding to your team\u2019s workload.',
  ],

  features: [
    {
      title: 'Works with your team',
      description:
        'We integrate seamlessly with your existing cleaning operations \u2014 no conflicts, no overlap.',
    },
    {
      title: 'Specialist equipment',
      description:
        'Industrial-grade machines and techniques that go far beyond what standard cleaning can achieve.',
    },
    {
      title: 'Knowledge transfer',
      description:
        'We share tips and best practices with your team so day-to-day maintenance improves too.',
    },
    {
      title: 'Scheduled deep cleans',
      description:
        'Regular specialist cleans that prevent build-up and keep floors looking fresh between visits.',
    },
    {
      title: 'All floor types covered',
      description:
        'Carpet, vinyl, timber, stone, polished concrete \u2014 we handle every surface in your facility.',
    },
    {
      title: 'Reliable & on time',
      description:
        'We show up when we say we will, do what we say we\u2019ll do, and leave the site spotless.',
    },
  ],

  ctaHeading: 'Let\u2019s make spotless floors one less thing to chase.',
};

export default function GeneralCleaningManagersContent() {
  return <AudiencePageTemplate config={config} />;
}

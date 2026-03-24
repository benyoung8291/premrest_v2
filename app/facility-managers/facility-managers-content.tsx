'use client';

import AudiencePageTemplate, { AudiencePageConfig } from '@/app/components/sections/AudiencePageTemplate';

const config: AudiencePageConfig = {
  role: 'Facility Managers',
  subtitle: 'Fuss-free floors that run in the background \u2014 not your to-do list.',
  heroImage: '/images/Premrest_WeWorkWith_Hero_Blob_FM.webp',

  problemHeading:
    "You\u2019re already juggling a thousand priorities \u2014 flooring shouldn\u2019t be one of them.",
  problemBody: [
    'Between tenant complaints, contractor schedules and compliance deadlines, flooring issues always seem to land at the worst possible time.',
    'You need a partner who takes it off your plate entirely \u2014 proactively, professionally and without the back-and-forth.',
  ],
  problemImage: '/images/Premrest_WeWorkWith_Problem_Blob_FM.webp',

  solutionHeading: 'Proactive floor care that frees you up \u2014 not ties you down.',
  solutionBody: [
    'We become an extension of your team. Scheduled maintenance, rapid response and full lifecycle management mean you never have to think about floors again.',
  ],

  features: [
    {
      title: 'Proactive scheduling',
      description:
        'We manage the calendar so you don\u2019t have to. Maintenance happens on time, every time.',
    },
    {
      title: 'Single point of contact',
      description:
        'One account manager who knows your sites inside out \u2014 no chasing multiple contractors.',
    },
    {
      title: 'Compliance & reporting',
      description:
        'Digital job records, before-and-after photos and compliance documentation delivered automatically.',
    },
    {
      title: 'Emergency response',
      description:
        'Spills, damage, urgent remediation \u2014 we\u2019re on call when you need us most.',
    },
    {
      title: 'Budget certainty',
      description:
        'Fixed-price maintenance plans that keep your floor budget predictable quarter to quarter.',
    },
    {
      title: 'National coverage',
      description:
        'Consistent service quality across every site in your portfolio, wherever it is in Australia.',
    },
  ],

  lifecycle: {
    heading: 'We manage the full life cycle of your flooring.',
    body: [
      'From initial specification through installation, ongoing maintenance and eventual replacement \u2014 we handle it all. One partner, one contract, one less thing on your list.',
    ],
  },

  ctaHeading: 'Keep flooring issues where they belong \u2014 out of sight and under control.',
};

export default function FacilityManagersContent() {
  return <AudiencePageTemplate config={config} />;
}

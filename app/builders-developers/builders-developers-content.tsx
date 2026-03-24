'use client';

import AudiencePageTemplate, { AudiencePageConfig } from '@/app/components/sections/AudiencePageTemplate';

const config: AudiencePageConfig = {
  role: 'Builders & Developers',
  subtitle: 'Floors on time, budget, and made to last - with sustainability built in.',
  heroImage: '/images/Premrest_WeWorkWith_Hero_Blob_BD.webp',

  problemHeading:
    'A flooring delay doesn\u2019t stay a flooring problem - it snowballs.',
  problemBody: [
    'Late deliveries, subpar installations and defect call-backs don\u2019t just cost money \u2014 they delay handovers, damage reputations and create headaches that ripple across the entire project.',
    'You need a flooring partner who delivers on time, on spec and without the drama.',
  ],
  problemImage: '/images/Premrest_WeWorkWith_Problem_Blob_BD.webp',

  solutionHeading: 'Floors that meet today\u2019s standards - and tomorrow\u2019s expectations.',
  solutionBody: [
    'We partner with builders and developers to deliver flooring installations that are on time, on budget and built to last \u2014 with sustainability credentials that strengthen your project\u2019s value proposition.',
  ],

  features: [
    {
      title: 'On-time delivery',
      description:
        'We hit our deadlines so you hit yours. No excuses, no delays, no surprises.',
    },
    {
      title: 'Quality installations',
      description:
        'Expert installers who get it right the first time \u2014 reducing defects and call-backs.',
    },
    {
      title: 'Sustainability credentials',
      description:
        'Green Star, NABERS and WELL-aligned flooring solutions that add value to your project.',
    },
    {
      title: 'Budget transparency',
      description:
        'Detailed quoting and no hidden costs. You know exactly what you\u2019re paying for.',
    },
    {
      title: 'Project coordination',
      description:
        'We work with your site team and other trades to ensure seamless integration.',
    },
    {
      title: 'Post-handover support',
      description:
        'Maintenance plans and warranty support that protect your investment long after handover.',
    },
  ],

  ctaHeading: 'A floor is only as good as its foundation.',
};

export default function BuildersDevelopersContent() {
  return <AudiencePageTemplate config={config} />;
}

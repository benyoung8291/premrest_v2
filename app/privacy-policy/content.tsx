'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import { colors, typography, spacing, layout } from '@/app/lib/tokens';

const sectionStyle: React.CSSProperties = {
  marginBottom: spacing[10],
};

const paragraphStyle: React.CSSProperties = {
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize['body-md'],
  color: colors.charcoal[500],
  lineHeight: typography.lineHeight.relaxed,
  margin: 0,
  marginBottom: spacing[4],
};

const listStyle: React.CSSProperties = {
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize['body-md'],
  color: colors.charcoal[500],
  lineHeight: typography.lineHeight.relaxed,
  margin: 0,
  marginBottom: spacing[4],
  paddingLeft: spacing[6],
};

export default function PrivacyPolicyContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <RedesignLayout>
      <PageHero title="Privacy Policy" compact />

      <ContentSection background={colors.white} padding="lg">
        <motion.div
          ref={ref}
          style={{ maxWidth: '800px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p style={{ ...paragraphStyle, marginBottom: spacing[8] }}>
            Premrest Pty Ltd (ABN XX XXX XXX XXX) (&quot;Premrest&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or otherwise interact with us. This policy is governed by the Australian Privacy Principles contained in the Privacy Act 1988 (Cth).
          </p>

          {/* 1. Information Collection */}
          <div style={sectionStyle}>
            <Heading as="h2" size="heading-md">1. Information Collection</Heading>
            <p style={{ ...paragraphStyle, marginTop: spacing[4] }}>
              We may collect personal information from you in a variety of ways, including when you visit our website, fill in a form, request a quote, subscribe to our newsletter, or engage with us in other activities, services, features, or resources we make available. The types of personal information we may collect include:
            </p>
            <ul style={listStyle}>
              <li>Name, email address, phone number, and business or organisation name</li>
              <li>Postal address and delivery details relevant to our flooring services</li>
              <li>Information about your commercial premises, including floor area and type</li>
              <li>Payment and billing details where applicable</li>
              <li>Any other information you voluntarily provide to us</li>
            </ul>
            <p style={paragraphStyle}>
              We may also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our site.
            </p>
          </div>

          {/* 2. Use of Information */}
          <div style={sectionStyle}>
            <Heading as="h2" size="heading-md">2. Use of Information</Heading>
            <p style={{ ...paragraphStyle, marginTop: spacing[4] }}>
              We use the information we collect for the following purposes:
            </p>
            <ul style={listStyle}>
              <li>To provide and manage our flooring installation, maintenance, and cleaning services</li>
              <li>To process quotes, bookings, and service requests</li>
              <li>To communicate with you regarding your enquiries or service appointments</li>
              <li>To send periodic emails, newsletters, and marketing materials (with your consent)</li>
              <li>To improve our website, services, and customer experience</li>
              <li>To comply with legal obligations and resolve disputes</li>
            </ul>
          </div>

          {/* 3. Data Protection */}
          <div style={sectionStyle}>
            <Heading as="h2" size="heading-md">3. Data Protection</Heading>
            <p style={{ ...paragraphStyle, marginTop: spacing[4] }}>
              We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorised access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.
            </p>
            <p style={paragraphStyle}>
              Sensitive and private data exchange between our website and its users happens over a TLS/SSL secured communication channel and is encrypted and protected with digital signatures. We regularly review our information collection, storage, and processing practices, including physical security measures, to guard against unauthorised access.
            </p>
          </div>

          {/* 4. Information Sharing */}
          <div style={sectionStyle}>
            <Heading as="h2" size="heading-md">4. Information Sharing</Heading>
            <p style={{ ...paragraphStyle, marginTop: spacing[4] }}>
              We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
            </p>
            <p style={paragraphStyle}>
              We may disclose your personal information to third-party service providers who assist us in operating our business and servicing you, so long as those parties agree to keep this information confidential. We may also disclose your information where required by law, regulation, or legal process.
            </p>
          </div>

          {/* 5. Third-Party Links */}
          <div style={sectionStyle}>
            <Heading as="h2" size="heading-md">5. Third-Party Links</Heading>
            <p style={{ ...paragraphStyle, marginTop: spacing[4] }}>
              Our website may contain links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
            </p>
          </div>

          {/* 6. Consent */}
          <div style={sectionStyle}>
            <Heading as="h2" size="heading-md">6. Consent</Heading>
            <p style={{ ...paragraphStyle, marginTop: spacing[4] }}>
              By using our website and services, you consent to the collection and use of your personal information as described in this Privacy Policy. If we decide to change our privacy policy, we will post those changes on this page and update the modification date below.
            </p>
          </div>

          {/* 7. Changes to Our Privacy Policy */}
          <div style={sectionStyle}>
            <Heading as="h2" size="heading-md">7. Changes to Our Privacy Policy</Heading>
            <p style={{ ...paragraphStyle, marginTop: spacing[4] }}>
              Premrest has the discretion to update this Privacy Policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage you to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
            </p>
          </div>

          {/* 8. Contact Us */}
          <div style={sectionStyle}>
            <Heading as="h2" size="heading-md">8. Contact Us</Heading>
            <p style={{ ...paragraphStyle, marginTop: spacing[4] }}>
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
            </p>
            <p style={paragraphStyle}>
              Premrest Pty Ltd<br />
              Email: info@premrest.com.au<br />
              Phone: 1300 773 673
            </p>
          </div>

          <p
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize['body-sm'],
              color: colors.charcoal[300],
              marginTop: spacing[12],
            }}
          >
            Last updated: March 2026
          </p>
        </motion.div>
      </ContentSection>
    </RedesignLayout>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import { colors, typography, spacing } from '@/app/lib/tokens';

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

export default function TermsOfServiceContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <RedesignLayout>
      <PageHero title="Terms of Service" compact />

      <ContentSection background={colors.white} padding="lg">
        <motion.div
          ref={ref}
          style={{ maxWidth: '800px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p style={{ ...paragraphStyle, marginBottom: spacing[8] }}>
            Welcome to Premrest Pty Ltd (&quot;Premrest&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully before engaging our services.
          </p>

          {/* 1. Services */}
          <div style={sectionStyle}>
            <Heading as="h2" size="heading-md">1. Services</Heading>
            <p style={{ ...paragraphStyle, marginTop: spacing[4] }}>
              Premrest provides commercial flooring services including but not limited to carpet installation, hard floor installation, floor maintenance, carpet cleaning, spot cleaning, and related facilities management services across Australia. The scope of services for each engagement will be detailed in individual quotes, proposals, or service agreements provided to you.
            </p>
          </div>

          {/* 2. User Obligations */}
          <div style={sectionStyle}>
            <Heading as="h2" size="heading-md">2. User Obligations</Heading>
            <p style={{ ...paragraphStyle, marginTop: spacing[4] }}>
              By using our services, you agree to:
            </p>
            <ul style={listStyle}>
              <li>Provide accurate and complete information when requesting quotes or services</li>
              <li>Ensure safe and reasonable access to the premises where services are to be performed</li>
              <li>Notify us of any hazards, obstacles, or special conditions that may affect our ability to deliver services</li>
              <li>Not use our website or services for any unlawful purpose or in any way that could damage, disable, or impair the site</li>
              <li>Comply with all applicable Australian laws and regulations</li>
            </ul>
          </div>

          {/* 3. Payment and Billing */}
          <div style={sectionStyle}>
            <Heading as="h2" size="heading-md">3. Payment and Billing</Heading>
            <p style={{ ...paragraphStyle, marginTop: spacing[4] }}>
              Payment terms will be outlined in your individual service agreement or invoice. Unless otherwise agreed in writing, invoices are due within 30 days of the date of issue. Late payments may incur interest at a rate of 2% per month on the outstanding balance. We reserve the right to suspend or terminate services for accounts that are overdue.
            </p>
          </div>

          {/* 4. Intellectual Property */}
          <div style={sectionStyle}>
            <Heading as="h2" size="heading-md">4. Intellectual Property</Heading>
            <p style={{ ...paragraphStyle, marginTop: spacing[4] }}>
              All content on this website, including text, graphics, logos, images, audio clips, and software, is the property of Premrest or its content suppliers and is protected by Australian and international copyright laws. You may not reproduce, distribute, modify, or create derivative works of any material on this site without our prior written consent.
            </p>
          </div>

          {/* 5. Warranties and Disclaimers */}
          <div style={sectionStyle}>
            <Heading as="h2" size="heading-md">5. Warranties and Disclaimers</Heading>
            <p style={{ ...paragraphStyle, marginTop: spacing[4] }}>
              Premrest endeavours to provide high-quality flooring services in accordance with industry best practice. However, to the maximum extent permitted by law, we disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose. Our liability for any claim arising out of or in connection with our services shall not exceed the total amount paid by you for the specific service giving rise to the claim.
            </p>
            <p style={paragraphStyle}>
              Nothing in these Terms of Service is intended to exclude, restrict, or modify any consumer guarantees provided under the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010 (Cth)).
            </p>
          </div>

          {/* 6. Service Modification and Termination */}
          <div style={sectionStyle}>
            <Heading as="h2" size="heading-md">6. Service Modification and Termination</Heading>
            <p style={{ ...paragraphStyle, marginTop: spacing[4] }}>
              Premrest reserves the right to modify, suspend, or discontinue any part of our services at any time, with or without notice. We will make reasonable efforts to notify affected clients of any material changes. Either party may terminate a service agreement by providing written notice in accordance with the terms of the individual agreement.
            </p>
          </div>

          {/* 7. Governing Law */}
          <div style={sectionStyle}>
            <Heading as="h2" size="heading-md">7. Governing Law</Heading>
            <p style={{ ...paragraphStyle, marginTop: spacing[4] }}>
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Victoria, Australia. Any disputes arising from or related to these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of Victoria.
            </p>
          </div>

          {/* 8. Privacy and Data Usage */}
          <div style={sectionStyle}>
            <Heading as="h2" size="heading-md">8. Privacy and Data Usage</Heading>
            <p style={{ ...paragraphStyle, marginTop: spacing[4] }}>
              Your use of our website and services is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. By using our services, you consent to the practices described in our Privacy Policy.
            </p>
          </div>

          {/* 9. Carpet Spot Cleaning Service Definition */}
          <div style={sectionStyle}>
            <Heading as="h2" size="heading-md">9. Carpet &lsquo;Spot Cleaning&rsquo; (Spotting) Service Definition</Heading>
            <p style={{ ...paragraphStyle, marginTop: spacing[4] }}>
              Carpet spot cleaning (also referred to as &quot;spotting&quot;) is a targeted cleaning service designed to address specific stains, marks, or soiled areas on commercial carpet. This service involves the application of appropriate cleaning agents and techniques to treat individual spots rather than the entire carpet area.
            </p>
            <p style={paragraphStyle}>
              Please note that while our technicians are highly trained and use industry-leading products, we cannot guarantee complete removal of all stains. Some stains may be permanent due to the nature of the substance, the duration the stain has been present, or the type of carpet fibre. Our team will assess each situation and provide honest advice on expected outcomes before commencing work.
            </p>
          </div>

          {/* 10. Amendments */}
          <div style={sectionStyle}>
            <Heading as="h2" size="heading-md">10. Amendments</Heading>
            <p style={{ ...paragraphStyle, marginTop: spacing[4] }}>
              Premrest reserves the right to amend these Terms of Service at any time. Any changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes your acceptance of the revised terms. We recommend reviewing these terms periodically.
            </p>
          </div>

          {/* 11. Contact Information */}
          <div style={sectionStyle}>
            <Heading as="h2" size="heading-md">11. Contact Information</Heading>
            <p style={{ ...paragraphStyle, marginTop: spacing[4] }}>
              If you have any questions or concerns regarding these Terms of Service, please contact us:
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

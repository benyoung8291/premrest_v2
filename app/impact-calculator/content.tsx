'use client';

import { useState, useRef } from 'react';
import Script from 'next/script';
import RedesignLayout from '@/app/redesign-layout';
import PageHero from '@/app/components/sections/PageHero';
import { ContentSection } from '@/app/components/sections/ContentSection';
import Heading from '@/app/components/ui/Heading';
import Button from '@/app/components/ui/Button';
import { colors, typography, spacing, borderRadius } from '@/app/lib/tokens';

interface CalculationResults {
  squareMeters: number;
  annualCleans: number;
  hweWater: number;
  hweWasteWater: number;
  hweEnergy: number;
  lmeWater: number;
  lmeWasteWater: number;
  lmeEnergy: number;
  waterSavings: number;
  wasteWaterSavings: number;
  energySavings: number;
  households: number;
  flushes: number;
  teslaDistance: number;
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '300px',
  padding: '10px 20px',
  border: '2px solid #eeeeee',
  borderRadius: '100px',
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize['body-md'],
  boxSizing: 'border-box',
};

const tableHeaderStyle: React.CSSProperties = {
  padding: '10px',
  border: '1px solid #000',
  fontFamily: typography.fontFamily.headline,
  fontWeight: typography.fontWeight.bold,
  fontSize: typography.fontSize['body-sm'],
  textAlign: 'center',
};

const tableCellStyle: React.CSSProperties = {
  padding: '10px',
  border: '1px solid #000',
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize['body-sm'],
  textAlign: 'center',
};

const savingsCellStyle: React.CSSProperties = {
  ...tableCellStyle,
  backgroundColor: '#aeba6c',
  fontWeight: typography.fontWeight.bold,
};

export default function ImpactCalculatorContent() {
  const [results, setResults] = useState<CalculationResults | null>(null);
  const [squareMeters, setSquareMeters] = useState('');
  const [annualCleans, setAnnualCleans] = useState('');
  const [generating, setGenerating] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sqm = parseFloat(squareMeters);
    const cleans = parseFloat(annualCleans);

    const hweWater = Math.round(sqm * cleans * 0.502);
    const hweWasteWater = Math.round(sqm * cleans * 0.301);
    const hweEnergy = Math.round(sqm * cleans * 0.0832);
    const lmeWater = Math.round(sqm * cleans * 0.12);
    const lmeWasteWater = Math.round(sqm * cleans * 0.001);
    const lmeEnergy = Math.round(sqm * cleans * 0.016);

    const waterSavings = hweWater - lmeWater;
    const wasteWaterSavings = hweWasteWater - lmeWasteWater;
    const energySavings = hweEnergy - lmeEnergy;

    setResults({
      squareMeters: sqm,
      annualCleans: cleans,
      hweWater,
      hweWasteWater,
      hweEnergy,
      lmeWater,
      lmeWasteWater,
      lmeEnergy,
      waterSavings,
      wasteWaterSavings,
      energySavings,
      households: Math.round(waterSavings / 180),
      flushes: Math.round(wasteWaterSavings / 6),
      teslaDistance: Math.round(energySavings * 6),
    });

    window.scrollTo(0, 0);
  };

  const handleDownloadPDF = async () => {
    if (!reportRef.current) return;
    setGenerating(true);

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const html2pdf = (window as any).html2pdf;
      if (!html2pdf) {
        alert('PDF library is still loading. Please try again in a moment.');
        setGenerating(false);
        return;
      }

      const opt = {
        margin: 1,
        filename: 'sustainability_impact_report.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      };

      await html2pdf().set(opt).from(reportRef.current).save();
    } catch {
      alert('Error generating PDF. Please try again.');
    } finally {
      setGenerating(false);
    }
  };

  return (
    <RedesignLayout>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js" strategy="lazyOnload" />

      <PageHero
        title="Impact Calculator"
        subtitle="Calculate the sustainability impact of switching to low moisture encapsulation cleaning."
        backgroundColor={colors.green?.DEFAULT || '#aeba6c'}
        compact
      />

      <ContentSection>
        {!results ? (
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Heading as="h2" size="heading-xl">
              Calculate your sustainability impact
            </Heading>
            <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-lg'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, marginTop: spacing[4], marginBottom: spacing[8] }}>
              Low moisture encapsulation provides facility managers with spotless floors, but without the environmental cost. Calculate your impact and generate a report of how significantly less water, energy, chemicals and waste you&apos;d be saving.
            </p>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: spacing[6] }}>
                <label style={{ display: 'block', fontFamily: typography.fontFamily.body, fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize['body-md'], color: colors.charcoal.DEFAULT, marginBottom: spacing[2] }}>
                  Square Meters:
                </label>
                <input
                  type="number"
                  value={squareMeters}
                  onChange={(e) => setSquareMeters(e.target.value)}
                  required
                  style={inputStyle}
                  onKeyDown={(e) => { if (e.key === 'ArrowUp' || e.key === 'ArrowDown') e.preventDefault(); }}
                />
              </div>
              <div style={{ marginBottom: spacing[8] }}>
                <label style={{ display: 'block', fontFamily: typography.fontFamily.body, fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize['body-md'], color: colors.charcoal.DEFAULT, marginBottom: spacing[2] }}>
                  Annual Cleans:
                </label>
                <input
                  type="number"
                  value={annualCleans}
                  onChange={(e) => setAnnualCleans(e.target.value)}
                  required
                  style={inputStyle}
                  onKeyDown={(e) => { if (e.key === 'ArrowUp' || e.key === 'ArrowDown') e.preventDefault(); }}
                />
              </div>
              <Button variant="primary" type="submit">
                Generate impact report
              </Button>
            </form>
          </div>
        ) : (
          <div>
            <div ref={reportRef}>
              {/* Page 1: Overview */}
              <div style={{ marginBottom: spacing[12] }}>
                <Heading as="h2" size="heading-xl">Your impact report</Heading>
                <h4 style={{ fontFamily: typography.fontFamily.headline, fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize['heading-sm'], color: colors.charcoal.DEFAULT, marginTop: spacing[6] }}>Overview</h4>
                <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, marginTop: spacing[3] }}>
                  Keeping your facility clean while also balancing the rigour of meeting sustainability goals is a demanding responsibility for many facility managers.
                </p>
                <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, marginTop: spacing[3] }}>
                  Steam cleaning has long been the go-to method for carpets. But from a sustainability standpoint, it comes with significant drawbacks and is not the most environmentally friendly option - particularly for multi-site facility managers overseeing sustainability at scale.
                </p>
                <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, marginTop: spacing[3] }}>
                  Excessive water usage places a significant strain on resources, while the energy required to heat large volumes of it drives up operational expenses. After steam cleaning, the wastewater left behind can also contain harmful chemicals that need careful disposal to meet environmental standards. If that&apos;s not enough, bulky machinery, noisy operations, and long drying times also doesn&apos;t make it the most practical choice for facility managers who need their buildings to keep ticking without any downtime.
                </p>

                <h4 style={{ fontFamily: typography.fontFamily.headline, fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize['heading-sm'], color: colors.charcoal.DEFAULT, marginTop: spacing[6] }}>A greener alternative</h4>
                <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, marginTop: spacing[3] }}>
                  Low moisture encapsulation is a growing, sustainable alternative that uses significantly less water, energy, chemicals and wastewater - without compromising on results.
                </p>
                <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, marginTop: spacing[3] }}>
                  Think of steam cleaning like a pressure wash for your carpets. Low moisture encapsulation however, works through the agitation of a chemical solution deep into dirty carpet fibres. As the solution dries, dirt and debris are broken down into brittle, nano-sized particles that are easily removed through vacuuming.
                </p>
                <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, marginTop: spacing[3] }}>
                  Steam cleaning leaves behind a sticky residue, which is often the cause of rapid resoiling. Our encapsulation solution is complemented with Active Film Technology (ATF), where carpet fibres are coated with an invisible, durable positive film that repels dirt - keeping floors cleaner for longer.
                </p>
                <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, marginTop: spacing[3] }}>
                  Just as plants self-clean when it rains, a phenomenon known as the Lotus Effect, this innovative technology works in a similar way, preventing grime from clinging to carpet fibres and making maintenance easier. This method not only enhances sustainability but also improves efficiency, reduces downtime, and prioritises proactive maintenance over a &apos;clean-when-needed&apos; approach - keeping your floors spotless all year round.
                </p>
              </div>

              {/* Page 2: Results */}
              <div style={{ marginBottom: spacing[12], pageBreakBefore: 'always' }}>
                <h4 style={{ fontFamily: typography.fontFamily.headline, fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize['heading-sm'], color: colors.charcoal.DEFAULT }}>Waste management hierarchy</h4>
                <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, marginTop: spacing[3] }}>
                  Sustainability isn&apos;t just about cleaning methods - it&apos;s about how we handle waste too. At Premrest, we follow a simple but effective waste management hierarchy that helps facilities reduce their environmental footprint while keeping things running smoothly:
                </p>
                <ol style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, paddingLeft: spacing[6], marginTop: spacing[3] }}>
                  <li><strong>Reduce:</strong> Cutting down on water waste by using cleaning methods that need considerably less water, energy, and chemicals.</li>
                  <li><strong>Reuse:</strong> Maximising resources by maintaining and revitalising carpets for as long as 15 years, rather than replacing them too soon.</li>
                  <li><strong>Recycle:</strong> Giving materials a second life by reprocessing them into new products instead of sending them to landfill.</li>
                  <li><strong>Disposal:</strong> The absolute last resort - handling water waste responsibly when there&apos;s no other option.</li>
                </ol>
                <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, marginTop: spacing[3] }}>
                  By reducing water and energy use, extending the life of flooring, and cutting down harsh chemical use, low moisture encapsulation moves away from disposal and towards reuse and reduce.
                </p>
                <div style={{ marginTop: spacing[4] }}>
                  <img src="/images/Colorful-Pyramid-Chart-Instagram-Post.webp" alt="Waste management hierarchy" style={{ width: '250px' }} crossOrigin="anonymous" />
                </div>

                <h4 style={{ fontFamily: typography.fontFamily.headline, fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize['heading-sm'], color: colors.charcoal.DEFAULT, marginTop: spacing[8] }}>Results</h4>
                <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, marginTop: spacing[3] }}>
                  Your facility is <strong>{results.squareMeters.toLocaleString()} m&sup2;</strong> and your frequency of steam cleans is <strong>{results.annualCleans}</strong> annually. By making the switch to low moisture encapsulation, here are the reductions you can expect:
                </p>

                <div style={{ overflowX: 'auto', marginTop: spacing[6] }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
                    <thead>
                      <tr>
                        <th style={tableHeaderStyle}></th>
                        <th style={tableHeaderStyle}>Steam Cleaning</th>
                        <th style={tableHeaderStyle}>Low Moisture</th>
                        <th style={{ ...tableHeaderStyle, backgroundColor: '#aeba6c' }}>Savings</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={tableCellStyle}>Water Usage</td>
                        <td style={tableCellStyle}>{results.hweWater.toLocaleString()} L</td>
                        <td style={tableCellStyle}>{results.lmeWater.toLocaleString()} L</td>
                        <td style={savingsCellStyle}>{results.waterSavings.toLocaleString()} L</td>
                      </tr>
                      <tr>
                        <td style={tableCellStyle}>Waste water</td>
                        <td style={tableCellStyle}>{results.hweWasteWater.toLocaleString()} L</td>
                        <td style={tableCellStyle}>{results.lmeWasteWater.toLocaleString()} L</td>
                        <td style={savingsCellStyle}>{results.wasteWaterSavings.toLocaleString()} L</td>
                      </tr>
                      <tr>
                        <td style={tableCellStyle}>Energy Usage</td>
                        <td style={tableCellStyle}>{results.hweEnergy.toLocaleString()} kWh</td>
                        <td style={tableCellStyle}>{results.lmeEnergy.toLocaleString()} kWh</td>
                        <td style={savingsCellStyle}>{results.energySavings.toLocaleString()} kWh</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ul style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, marginTop: spacing[6], paddingLeft: spacing[6] }}>
                  <li>A month&apos;s drinking water supply for <strong>{results.households.toLocaleString()}</strong> households.</li>
                  <li>Enough to flush your toilets <strong>{results.flushes.toLocaleString()}</strong> times</li>
                  <li>Power a Tesla for <strong>{results.teslaDistance.toLocaleString()}</strong> kms</li>
                </ul>

                <h4 style={{ fontFamily: typography.fontFamily.headline, fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize['heading-sm'], color: colors.charcoal.DEFAULT, marginTop: spacing[8] }}>Why facility managers are making the switch</h4>
                <ul style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, paddingLeft: spacing[6], marginTop: spacing[3] }}>
                  <li><strong>Minimal downtime:</strong> Drying time of 45-90 minutes.</li>
                  <li><strong>Sustainable:</strong> Uses significantly less water, energy, chemicals and waste water.</li>
                  <li><strong>Non-intrusive:</strong> Lightweight machinery that&apos;s quieter than a vacuum.</li>
                  <li><strong>Longevity:</strong> Extends carpet lifespan with protective polymers.</li>
                  <li><strong>Deep cleaning:</strong> Breaks down 96% of dirt and grime on a molecular level.</li>
                  <li><strong>Long-lasting:</strong> Floors repel dirt and stay cleaner for longer through active film technology.</li>
                </ul>
              </div>

              {/* Page 3: Financial & Contact */}
              <div style={{ pageBreakBefore: 'always' }}>
                <h4 style={{ fontFamily: typography.fontFamily.headline, fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize['heading-sm'], color: colors.charcoal.DEFAULT }}>Financial &amp; Compliance Benefits</h4>
                <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, marginTop: spacing[3] }}>
                  Choosing low moisture encapsulation isn&apos;t just a more environmentally responsible choice - it&apos;s also a strategic, cost-effective financial decision:
                </p>
                <ul style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, paddingLeft: spacing[6], marginTop: spacing[3] }}>
                  <li><strong>Lower utility costs:</strong> Reduced water and energy expenditure.</li>
                  <li><strong>Extended flooring lifespan:</strong> Maintain the lifespan of your flooring and prevent costly replacements or repairs.</li>
                  <li><strong>Meets sustainability &amp; compliance benchmarks:</strong> Align your facility with wider corporate ESG goals.</li>
                  <li><strong>Lower flooring maintenance costs:</strong> Most cleaning contracts exclude floor maintenance or charge separately for it.</li>
                </ul>

                <h4 style={{ fontFamily: typography.fontFamily.headline, fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize['heading-sm'], color: colors.charcoal.DEFAULT, marginTop: spacing[8] }}>Contact Premrest</h4>
                <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, marginTop: spacing[3] }}>
                  We&apos;re the trusted sidekick for facility managers, corporate clients, and general cleaning companies across Australia - the Swiss Army knife of all things floor care.
                </p>
                <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, marginTop: spacing[3] }}>
                  Think of us as the flooring experts in your back pocket: one that understands the nuances of floor care across all floor types, root causes of dirt and stains, and the standards expected by manufacturers to maintain them.
                </p>
                <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, marginTop: spacing[3] }}>
                  We tailor cleaning programs that take every variable into account: traffic patterns and zones, specific carpet types, colours, and material finishes, environmental conditions, even your sustainability goals.
                </p>
                <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, marginTop: spacing[3] }}>
                  Our one-of-a-kind, encapsulation method means that those stubborn stains you were told were impossible to remove, or the ones that mysteriously reappear in the same spot are finally taken care of - for good.
                </p>
                <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize['body-md'], lineHeight: typography.lineHeight.relaxed, color: colors.charcoal.light, marginTop: spacing[4] }}>
                  <strong>Phone: </strong><a href="tel:1300207915" style={{ color: colors.orange.DEFAULT, textDecoration: 'none' }}>1300 207 915</a><br />
                  <strong>Email: </strong><a href="mailto:office@premrest.com.au" style={{ color: colors.orange.DEFAULT, textDecoration: 'none' }}>office@premrest.com.au</a><br />
                  <strong>Website: </strong><a href="https://premrest.com.au" target="_blank" rel="noreferrer" style={{ color: colors.orange.DEFAULT, textDecoration: 'none' }}>https://premrest.com.au</a>
                </p>
                <div style={{ marginTop: spacing[6] }}>
                  <img src="/images/Premrest_Tagline_Charcoal-Orange.png" alt="Premrest" style={{ width: '170px' }} crossOrigin="anonymous" />
                </div>
              </div>
            </div>

            <div style={{ marginTop: spacing[8], textAlign: 'center' }}>
              <Button variant="primary" onClick={handleDownloadPDF} disabled={generating}>
                {generating ? 'Generating...' : 'Download Report'}
              </Button>
            </div>
          </div>
        )}
      </ContentSection>
    </RedesignLayout>
  );
}

import type { Metadata } from 'next';
import RedesignLayout from '@/app/redesign-layout';
import { colors, typography, spacing, layout, borderRadius } from '@/app/lib/tokens';

export const metadata: Metadata = {
  title: 'Sustainability Impact Report | Premrest',
};

export default function Page() {
  const sectionStyle = {
    marginBottom: spacing[12],
  };

  const h2Style = {
    fontFamily: typography.fontFamily.headline,
    fontSize: typography.fontSize['display-md'],
    fontWeight: typography.fontWeight.heavy,
    color: colors.charcoal.DEFAULT,
    marginBottom: spacing[8],
  };

  const h3Style = {
    fontFamily: typography.fontFamily.headline,
    fontSize: typography.fontSize['heading-lg'],
    fontWeight: typography.fontWeight.bold,
    color: colors.charcoal.DEFAULT,
    marginBottom: spacing[4],
  };

  const pStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize['body-md'],
    color: colors.charcoal[500],
    lineHeight: typography.lineHeight.relaxed,
    marginBottom: spacing[6],
  };

  const listStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize['body-md'],
    color: colors.charcoal[500],
    lineHeight: typography.lineHeight.relaxed,
    paddingLeft: spacing[6],
    marginBottom: spacing[6],
  };

  const liStyle = {
    marginBottom: spacing[2],
  };

  return (
    <RedesignLayout>
      <section style={{
        background: colors.offWhite,
        padding: `${spacing[32]} ${layout.gutter}`,
      }}>
        <div style={{ maxWidth: layout.narrowWidth, margin: '0 auto' }}>
          {/* Logo */}
          <div style={{ textAlign: 'center', marginBottom: spacing[12] }}>
            <img
              src="/images/Premrest_Main_Charcoal.svg"
              alt="Premrest"
              style={{ maxWidth: '200px', margin: '0 auto' }}
            />
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: typography.fontFamily.headline,
            fontSize: typography.fontSize['display-lg'],
            fontWeight: typography.fontWeight.heavy,
            color: colors.charcoal.DEFAULT,
            marginBottom: spacing[12],
            textAlign: 'center',
          }}>
            Impact Report
          </h1>

          {/* Overview */}
          <div style={sectionStyle}>
            <h2 style={h3Style}>Overview</h2>
            <p style={pStyle}>
              Keeping your facility clean while also balancing the rigour of meeting sustainability goals can be challenging. Steam cleaning has long been the go-to cleaning method, but it comes with significant drawbacks. Excessive water usage, high energy consumption, and lots of waste water mean that it&apos;s not the most environmentally friendly option. Bulky machinery, noisy operations, and long drying times also doesn&apos;t make it the most practical choice for facility managers who need their buildings to keep ticking.
            </p>
            <p style={pStyle}>
              Low moisture encapsulation is the greener alternative that uses significantly less water, energy, chemicals and waste water while delivering a deeper, more thorough clean. This method not only enhances sustainability but also improves efficiency, reduces downtime, and is focused on proactive maintenance over a &apos;clean-when-needed&apos; approach - keeping your floors spotless all year round.
            </p>
          </div>

          {/* Environmental and operational impact */}
          <div style={sectionStyle}>
            <h2 style={h3Style}>Environmental and operational impact</h2>
            <p style={pStyle}>
              Steam cleaning leaves a significant mark on the environment. High water usage strains resources, and the energy required to heat large volumes of it contributes to high operational expenses. The wastewater left behind can also contain chemicals that need careful disposal to meet environmental standards.
            </p>
            <p style={pStyle}>
              Think of steam cleaning like a pressure wash for your carpets. Low moisture encapsulation is a light spray of an environmentally-friendly cleaning solution that works through agitation, crystallising dirt and grime into nano-sized &apos;caps&apos; that is easily removed through regular vacuuming.
            </p>
          </div>

          {/* Waste management hierarchy */}
          <div style={sectionStyle}>
            <h2 style={h3Style}>Waste management hierarchy</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: spacing[8],
              alignItems: 'start',
            }}>
              <div>
                <p style={pStyle}>
                  Sustainability isn&apos;t just about cleaning methods - it&apos;s about how we handle waste too. At Premrest, we follow a simple but effective waste management hierarchy that helps facilities reduce their environmental footprint while keeping things running smoothly:
                </p>
                <ol style={listStyle}>
                  <li style={liStyle}><strong>Reduce:</strong> Cutting down on water waste by using cleaning methods that need considerably less water, energy, and chemicals.</li>
                  <li style={liStyle}><strong>Reuse:</strong> Maximising resources by maintaining and revitalising carpets for as long as 15 years, rather than replacing them too soon.</li>
                  <li style={liStyle}><strong>Recycle:</strong> Giving materials a second life by reprocessing them into new products instead of sending them to landfill.</li>
                  <li style={liStyle}><strong>Disposal:</strong> The absolute last resort - handling water waste responsibly when there&apos;s no other option.</li>
                </ol>
                <p style={pStyle}>
                  By reducing water and energy use, extending the life of flooring, and cutting down harsh chemical use, low moisture encapsulation moves away from disposal and towards reuse and reduce. Instead of treating waste as an afterthought, we embed sustainability into every step of the cleaning process.
                </p>
              </div>
              <div>
                <img
                  src="/images/Colorful-Pyramid-Chart-Instagram-Post.webp"
                  alt="Waste management hierarchy pyramid"
                  style={{ width: '100%', borderRadius: borderRadius.lg }}
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div style={sectionStyle}>
            <h2 style={h3Style}>Results</h2>
            <p style={pStyle}>
              Your facility is 60,000m2 and your frequency of steam cleans is bi-annual. By making the switch to low moisture encapsulation, here&apos;s the reductions you can expect:
            </p>
            <div style={{ overflowX: 'auto' as const, marginBottom: spacing[6] }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse' as const,
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize['body-sm'],
              }}>
                <thead>
                  <tr style={{ background: colors.charcoal.DEFAULT, color: colors.white }}>
                    <th style={{ padding: spacing[3], textAlign: 'left' as const }}>&nbsp;</th>
                    <th style={{ padding: spacing[3], textAlign: 'center' as const }}>Steam Cleaning</th>
                    <th style={{ padding: spacing[3], textAlign: 'center' as const }}>Low Moisture</th>
                    <th style={{ padding: spacing[3], textAlign: 'center' as const }}>Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: `1px solid ${colors.charcoal[200]}` }}>
                    <td style={{ padding: spacing[3], fontWeight: typography.fontWeight.semibold }}>Water Usage (L/year)</td>
                    <td style={{ padding: spacing[3], textAlign: 'center' as const }}>30,914</td>
                    <td style={{ padding: spacing[3], textAlign: 'center' as const }}>7,390</td>
                    <td style={{ padding: spacing[3], textAlign: 'center' as const, color: colors.orange.DEFAULT, fontWeight: typography.fontWeight.semibold }}>-76% (23,524L)</td>
                  </tr>
                  <tr style={{ borderBottom: `1px solid ${colors.charcoal[200]}` }}>
                    <td style={{ padding: spacing[3], fontWeight: typography.fontWeight.semibold }}>Wastewater (L/year)</td>
                    <td style={{ padding: spacing[3], textAlign: 'center' as const }}>18,536</td>
                    <td style={{ padding: spacing[3], textAlign: 'center' as const }}>62</td>
                    <td style={{ padding: spacing[3], textAlign: 'center' as const, color: colors.orange.DEFAULT, fontWeight: typography.fontWeight.semibold }}>-100% (18,475L)</td>
                  </tr>
                  <tr style={{ borderBottom: `1px solid ${colors.charcoal[200]}` }}>
                    <td style={{ padding: spacing[3], fontWeight: typography.fontWeight.semibold }}>Energy Usage (kWh)</td>
                    <td style={{ padding: spacing[3], textAlign: 'center' as const }}>5,124</td>
                    <td style={{ padding: spacing[3], textAlign: 'center' as const }}>985</td>
                    <td style={{ padding: spacing[3], textAlign: 'center' as const, color: colors.orange.DEFAULT, fontWeight: typography.fontWeight.semibold }}>-81% (4,138 kWh)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p style={{ ...pStyle, fontWeight: typography.fontWeight.bold }}>Your savings in perspective:</p>
            <ul style={listStyle}>
              <li style={liStyle}>A month&apos;s drinking water supply for 130 households.</li>
              <li style={liStyle}>Enough to flush your toilets 3,079 times</li>
              <li style={liStyle}>Power a Tesla for 24,828kms</li>
            </ul>
          </div>

          {/* Why facility managers are making the switch */}
          <div style={sectionStyle}>
            <h2 style={h3Style}>Why facility managers are making the switch</h2>
            <ul style={listStyle}>
              <li style={liStyle}><strong>Minimal downtime:</strong> Drying time of 45-90 minutes.</li>
              <li style={liStyle}><strong>Sustainable:</strong> Uses significantly less water, energy, chemicals and waste water.</li>
              <li style={liStyle}><strong>Non-intrusive:</strong> Lightweight machinery that&apos;s quieter than a vacuum.</li>
              <li style={liStyle}><strong>Longevity:</strong> Extends carpet lifespan with protective polymers.</li>
              <li style={liStyle}><strong>Deep cleaning:</strong> Breaks down 96% of dirt and grime on a molecular level.</li>
              <li style={liStyle}><strong>Long-lasting:</strong> Floors repel dirt and stay cleaner for longer through active film technology.</li>
            </ul>
          </div>

          {/* Financial & compliance benefits */}
          <div style={sectionStyle}>
            <h2 style={h3Style}>Financial &amp; compliance benefits</h2>
            <p style={pStyle}>
              Choosing low moisture encapsulation isn&apos;t just a more environmentally responsible choice - it&apos;s also a strategic, cost-effective financial decision:
            </p>
            <ul style={listStyle}>
              <li style={liStyle}><strong>Lower utility costs:</strong> Reduced water and energy expenditure.</li>
              <li style={liStyle}><strong>Extended flooring lifespan:</strong> Maintain the lifespan of your flooring and prevent costly replacements or repairs.</li>
              <li style={liStyle}><strong>Meets sustainability &amp; compliance benchmarks:</strong> Align your facility with wider corporate ESG goals, and rating systems or accreditations such as Green Star.</li>
              <li style={liStyle}><strong>Lower flooring maintenance costs:</strong> Most cleaning contracts exclude floor maintenance or charge separately for it. Even when included, results are often inconsistent, leading to frequent rework and higher long-term costs.</li>
            </ul>
          </div>
        </div>
      </section>
    </RedesignLayout>
  );
}

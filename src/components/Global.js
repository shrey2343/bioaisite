import React from 'react';
import AnimateIn from './AnimateIn';

const regions = [
  { country: 'India', detail: 'Founding hub — IIT, AIIMS, CSIR, ICMR, DBT ecosystem. Largest South Asian client base.' },
  { country: 'United States', detail: 'NIH R01/R21, NSF, SBIR/STTR. Academic clients from Hopkins to UCSF.' },
  { country: 'United Kingdom', detail: 'Wellcome Trust & BBSRC proposals. Russell Group PhD clients. NHS health data projects.' },
  { country: 'Europe', detail: 'Horizon Europe / H2020 grants. BioRegion clients across Germany, Netherlands & Nordics.' },
  { country: 'Southeast Asia', detail: 'A*STAR Singapore, ASEAN biotech growth. Clients in Singapore, Malaysia & South Korea.' },
  { country: 'Australia', detail: 'NHMRC grants, Go8 university clients, Australian biotech sector partnerships.' },
];

function Global() {
  return (
    <section id="global">
      <div className="sw">
        <div className="center">
          <AnimateIn direction="up" delay={0}>
            <div className="eyebrow">{'// International Reach'}</div>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.08}>
            <h2 className="h2">Deepiotics Operates<br />Where <span className="gt">Biotech Leads</span></h2>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.16}>
            <p className="lead center">Active clients across four continents. Grant expertise across NIH, Wellcome, DBT, SERB, H2020, and NSF. A genuinely international AI-biotech operation.</p>
          </AnimateIn>
        </div>
        <div className="global-grid">
          {regions.map((r, i) => (
            <AnimateIn key={r.country} direction="up" delay={i * 0.07}>
              <div className="gc">
                <div className="gc-header">
                  <div className="gc-country">{r.country}</div>
                </div>
                <div className="gc-detail">{r.detail}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Global;

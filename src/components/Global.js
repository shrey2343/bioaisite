import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Global() {
  useScrollAnimation();

  return (
    <section id="global">
      <div className="sw">
        <div className="center fi">
          <div className="eyebrow">{'// International Reach'}</div>
          <h2 className="h2">Deepiotics Operates<br />Where <span className="gt">Biotech Leads</span></h2>
          <p className="lead center">Active clients across four continents. Grant expertise across NIH, Wellcome, DBT, SERB, H2020, and NSF. A genuinely international AI-biotech operation.</p>
        </div>
        <div className="global-grid fi">
          <div className="gc">
            <div className="gc-header">
              <div className="gc-country">India</div>
            </div>
            <div className="gc-detail">Founding hub — IIT, AIIMS, CSIR, ICMR, DBT ecosystem. Largest South Asian client base.</div>
          </div>
          <div className="gc">
            <div className="gc-header">
              <div className="gc-country">United States</div>
            </div>
            <div className="gc-detail">NIH R01/R21, NSF, SBIR/STTR. Academic clients from Hopkins to UCSF.</div>
          </div>
          <div className="gc">
            <div className="gc-header">
              <div className="gc-country">United Kingdom</div>
            </div>
            <div className="gc-detail">Wellcome Trust & BBSRC proposals. Russell Group PhD clients. NHS health data projects.</div>
          </div>
          <div className="gc">
            <div className="gc-header">
              <div className="gc-country">Europe</div>
            </div>
            <div className="gc-detail">Horizon Europe / H2020 grants. BioRegion clients across Germany, Netherlands & Nordics.</div>
          </div>
          <div className="gc">
            <div className="gc-header">
              <div className="gc-country">Southeast Asia</div>
            </div>
            <div className="gc-detail">A*STAR Singapore, ASEAN biotech growth. Clients in Singapore, Malaysia & South Korea.</div>
          </div>
          <div className="gc">
            <div className="gc-header">
              <div className="gc-country">Australia</div>
            </div>
            <div className="gc-detail">NHMRC grants, Go8 university clients, Australian biotech sector partnerships.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Global;

import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Services() {
  useScrollAnimation();

  return (
    <section id="services">
      <div className="sw">
        <div className="services-grid">
          <div className="fi">
            <div className="eyebrow">// Research & Expert Services</div>
            <h2 className="h2 services-title">Specialist Support for<br /><span className="gt">Serious Research</span></h2>
            <p className="lead services-lead" style={{marginBottom:'1.75rem'}}>No generalists. No juniors. Every BioAI Lab expert holds a PhD in their exact domain — matched to your specific field, not assigned by availability.</p>
            <div className="trusted-box">
              <div className="trusted-label">Trusted by</div>
              <div className="trusted-text">PhD candidates at IIT, Johns Hopkins & UCL · PIs with funded R01 grants · Government health ministries in Asia & Europe · Biotech startups raising SBIR funding</div>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6JxqYEUKk6Zq05XCzhhiaooeZ35dsp6v9M-vmmfySv1-qjA/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="btn btn-grad">Apply Now →</a>
          </div>
          <div className="sstrip fi">
            <div className="srow">
              <div className="srow-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#A8E6CF" strokeWidth="1.4">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <div className="srow-n">Dissertation & Thesis Writing</div>
                <div className="srow-tag">Chapter writing · Methodology · Literature review · Committee-ready delivery</div>
              </div>
              <span className="srow-chip">PhD · Master's</span>
            </div>
            <div className="srow">
              <div className="srow-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#A8E6CF" strokeWidth="1.4">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                </svg>
              </div>
              <div>
                <div className="srow-n">Research Paper & Manuscript Writing</div>
                <div className="srow-tag">Full drafting · Journal targeting · Submission · Rebuttal writing</div>
              </div>
              <span className="srow-chip">PhD · Professors · R&D</span>
            </div>
            <div className="srow">
              <div className="srow-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#A8E6CF" strokeWidth="1.4">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <div>
                <div className="srow-n">Health Data Analysis</div>
                <div className="srow-tag">Genomic pipelines · EHR analysis · Biostatistics · R/Python · Pub-grade visuals</div>
              </div>
              <span className="srow-chip">PhD · R&D · Govt</span>
            </div>
            <div className="srow">
              <div className="srow-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#A8E6CF" strokeWidth="1.4">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <div>
                <div className="srow-n">Grant Proposal Writing</div>
                <div className="srow-tag">NIH R01/R21 · NSF · SBIR/STTR · Wellcome · DBT · ICMR · DOD</div>
              </div>
              <span className="srow-chip">Professors · Startups · Govt</span>
            </div>
            <div className="srow">
              <div className="srow-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#A8E6CF" strokeWidth="1.4">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div>
                <div className="srow-n">Policy Document Writing</div>
                <div className="srow-tag">White papers · Biosafety policy · Regulatory submissions · Public health briefs</div>
              </div>
              <span className="srow-chip">Govt · NGO · Think Tanks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

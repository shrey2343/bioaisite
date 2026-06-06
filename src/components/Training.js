import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Training() {
  useScrollAnimation();

  return (
    <section id="training">
      <div className="sw">
        <div className="fi center">
          <div className="eyebrow">{'// Training Academy'}</div>
          <h2 className="h2">The AI Skills Biotech<br />Employers Are <span className="gt">Hiring For</span></h2>
          <p className="lead">Our courses don't teach theory. They build the exact tools, pipelines, and portfolios that open doors at leading research labs and biotech companies worldwide.</p>
        </div>
        <div className="training-two-cards fi">
          <div className="training-card">
            <div className="bc-head">
              <div className="bc-level">Foundation · Self-Paced · No Coding Required</div>
              <div className="bc-title">No-Code Bio-AI</div>
            </div>
            <div className="bc-body">
              <div className="bc-hook">Biology-first. Zero coding anxiety. Maximum impact.</div>
              <p className="bc-desc">Master AI-powered tools for drug discovery, protein analysis, literature mining, and genomics — entirely through visual no-code platforms. Built for UG and PG students with zero programming background who want AI on their CV before graduation.</p>
              <div className="bc-chips">
                <span className="chip">AI Drug Discovery</span>
                <span className="chip">Protein Folding Tools</span>
                <span className="chip">Literature AI Mining</span>
                <span className="chip">No Coding Needed</span>
                <span className="chip">Visual Platforms</span>
              </div>
            </div>
            <div className="bc-foot">
              <span className="bc-meta">📅 8 Weeks &nbsp;·&nbsp; 🎯 Self-Paced &nbsp;·&nbsp; 🏆 Certificate</span>
              <Link to="/biocodemastery" className="bc-link">Read More →</Link>
            </div>
          </div>

          <div className="training-card">
            <div className="bc-head">
              <div className="bc-level">Intermediate · Live + Lab · Cohort</div>
              <div className="bc-title">Bio-AI Lab Course</div>
            </div>
            <div className="bc-body">
              <div className="bc-hook">Code meets biology. Real data, real results.</div>
              <p className="bc-desc">Python and R applied to actual genomic datasets, EHR data, and imaging pipelines. Weekly live sessions, virtual simulations, and a portfolio project that impresses every interviewer.</p>
              <div className="bc-chips">
                <span className="chip">Python / R</span>
                <span className="chip">ML in Genomics</span>
                <span className="chip">Virtual Lab</span>
              </div>
            </div>
            <div className="bc-foot">
              <span className="bc-meta">📅 12 Weeks &nbsp;·&nbsp; 🎬 Live</span>
              <Link to="/bioai-lab" className="bc-link">Read More →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Training;

import React from 'react';
import AnimateIn from './AnimateIn';

function AudienceSplit() {
  return (
    <section id="audience" className="section-light">
      <div className="sw">
        <div className="center" style={{marginBottom:'3rem'}}>
          <AnimateIn direction="up" delay={0}>
            <div className="eyebrow">{'// Two Paths. One Destination.'}</div>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.08}>
            <h2 className="h2">Built for <span className="gt">Both of You</span></h2>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.16}>
            <p className="lead center">Whether you're a student building a career or a researcher needing specialist firepower — BioAI Lab has a world-class solution, built specifically for your situation.</p>
          </AnimateIn>
        </div>
        <div className="audience-wrap">
          <AnimateIn direction="left" delay={0.1}>
            <div className="ap">
              <span className="ap-num">01</span>
              <div className="ap-tag"><span>For Students</span></div>
              <h3>Train for the Roles That <em>Didn't Exist Five Years Ago</em></h3>
              <p>Biotech employers now demand computational skills alongside lab credentials. Our AI courses are built for exactly this gap — practical, internationally recognised, and laser-focused on getting you hired or into top PhD programs.</p>
              <ul className="ap-list">
                <li>No-Code Bio-AI — zero coding anxiety</li>
                <li>Bio-AI Lab — Python & R on real datasets</li>
                <li>AI Tools for Research Workflows</li>
                <li>Career support and placement pathways</li>
              </ul>
              <a href="#training" className="btn btn-grad">Explore All Courses →</a>
            </div>
          </AnimateIn>
          <AnimateIn direction="right" delay={0.18}>
            <div className="ap dark-panel">
              <span className="ap-num">02</span>
              <div className="ap-tag"><span>For Researchers & Orgs</span></div>
              <h3>Specialist Support Your Research <em>Actually Deserves</em></h3>
              <p>You don't need a generalist — you need a partner with domain depth equal to yours. Every BioAI Lab expert holds a PhD in their specialisation. An 87% grant success rate and $18M+ in secured funding speaks louder than promises.</p>
              <ul className="ap-list">
                <li>Dissertation & manuscript writing — committee-ready</li>
                <li>Genomic & EHR data pipelines — publication-grade</li>
                <li>NIH, NSF, Wellcome Trust, DBT grant proposals</li>
                <li>White papers, biosafety policy & regulatory submissions</li>
              </ul>
              <a href="#services" className="btn btn-light">Explore Research Services →</a>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

export default AudienceSplit;

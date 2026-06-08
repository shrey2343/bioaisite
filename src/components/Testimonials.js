import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Testimonials() {
  useScrollAnimation();

  return (
    <section className="testimonials-section">
      <div className="sw">
        <div className="center">
          <div className="eyebrow fi" style={{color:'var(--text-muted)',letterSpacing:'0.12em',fontSize:'0.7rem'}}>{'// WHAT OUR CLIENTS SAY'}</div>
          <h2 className="h2 fi" style={{color:'var(--forest)',marginBottom:'0.5rem'}}>Real Outcomes.</h2>
          <h2 className="h2 fi" style={{color:'var(--gold)',marginTop:'0',marginBottom:'3rem'}}>Real People.</h2>
        </div>
        <div className="tgrid fi" style={{marginTop:'3rem'}}>
          <div className="tcard">
            <div className="tc-type">PHD STUDENT</div>
            <div className="tc-q">"Three chapters rewritten in six weeks. My supervisor called the methodology section "exemplary." I submitted on time, passed my viva, and had a manuscript accepted at Nucleic Acids Research four months later. BioAI Lab didn't just save my PhD — they elevated it."</div>
            <div className="tc-auth">
              <div className="tc-av">SK</div>
              <div>
                <div className="tc-name">Sonal K.</div>
                <div className="tc-role">PhD Genomics · University of Edinburgh</div>
              </div>
            </div>
          </div>
          <div className="tcard">
            <div className="tc-type">PRINCIPAL INVESTIGATOR</div>
            <div className="tc-q">"Our NIH R21 was funded on first submission — $240,000. The BioAI Lab grant team preempted every reviewer concern. The specific aims page alone was worth the entire fee. I've referred three colleagues since."</div>
            <div className="tc-auth">
              <div className="tc-av">MR</div>
              <div>
                <div className="tc-name">Dr. Marcus R.</div>
                <div className="tc-role">Associate Professor · Johns Hopkins University</div>
              </div>
            </div>
          </div>
          <div className="tcard">
            <div className="tc-type">UG STUDENT → INDUSTRY</div>
            <div className="tc-q">"I was a final-year biotech student with zero coding skills. The No-Code Bio-AI course changed everything. Eight months later I had a job offer from a Singapore biotech firm — and a CV line every interviewer asks about."</div>
            <div className="tc-auth">
              <div className="tc-av">PL</div>
              <div>
                <div className="tc-name">Priya L.</div>
                <div className="tc-role">Computational Biologist · Genentech, Singapore</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

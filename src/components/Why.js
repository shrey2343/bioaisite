import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Why() {
  useScrollAnimation();

  return (
    <section id="about">
      <div className="sw">
        <div className="center fi">
          <div className="eyebrow">// Why BioAI Lab · Deepiotics</div>
          <h2 className="h2">What Separates Us from<br />Every Other <span className="gt">Option</span></h2>
          <p className="lead center">There are tutors. Freelancers. Generic consultancies. Then there is BioAI Lab — the only AI-powered biotech platform built end-to-end, at international standard, under a dedicated AI company.</p>
        </div>
        <div className="why-grid fi">
          <div className="why-card">
            <div className="why-head">
              <div className="why-n">01</div>
              <div className="why-title">AI Company Behind Every Service</div>
            </div>
            <p className="why-desc">BioAI Lab runs on Deepiotics infrastructure — meaning every service we deliver has AI-augmented research, analysis, and quality assurance built in. You're not getting human effort alone. You're getting human + AI at scale.</p>
          </div>
          <div className="why-card">
            <div className="why-head">
              <div className="why-n">02</div>
              <div className="why-title">Domain Depth, Not Generalism</div>
            </div>
            <p className="why-desc">Your genomics pipeline isn't handled by a data analyst who took a biology elective. It's built by a computational biologist who has published in this field. Every expert is PhD-level and domain-matched.</p>
          </div>
          <div className="why-card">
            <div className="why-head">
              <div className="why-n">03</div>
              <div className="why-title">International Standard — Everywhere</div>
            </div>
            <p className="why-desc">Our outputs meet NIH, Nature, EMA, and Wellcome Trust standards. Clients at Johns Hopkins, IIT Delhi, University of Edinburgh, and A*STAR Singapore set our bar — not local expectations.</p>
          </div>
          <div className="why-card">
            <div className="why-head">
              <div className="why-n">04</div>
              <div className="why-title">Results You Can Point To</div>
            </div>
            <p className="why-desc">Published papers, funded grants, thesis distinctions, employment rates — not hours billed. Our 87% grant success rate and $18M+ are client outcomes, not marketing numbers.</p>
          </div>
          <div className="why-card">
            <div className="why-head">
              <div className="why-n">05</div>
              <div className="why-title">Legally Protected Confidentiality</div>
            </div>
            <p className="why-desc">Every engagement begins with a strict NDA. Your research, data, and grant strategy are legally protected from day one. We do not reuse, resell, or reference your work — ever.</p>
          </div>
          <div className="why-card">
            <div className="why-head">
              <div className="why-n">06</div>
              <div className="why-title">Curriculum That Moves With the Market</div>
            </div>
            <p className="why-desc">Our courses are reviewed every quarter with industry partners. We teach what employers are actually hiring for right now — not what was relevant when someone wrote a textbook three years ago.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;

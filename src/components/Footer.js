import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="foot-grid">
        <div>
          <img src="/logo.svg" alt="BioAI Lab" className="foot-logo-img" />
          <div className="foot-url">bioai.deepiotics.com &nbsp;·&nbsp; A Deepiotics Initiative</div>
          <p className="foot-tagline">The world's only AI-powered end-to-end biotech platform — training the next generation while delivering expert services to the current generation of researchers, professors, and policymakers.</p>
          <div className="foot-badges">
            <span className="fbadge">DEEPIOTICS AI</span>
            <span className="fbadge">NDA PROTECTED</span>
            <span className="fbadge">42+ COUNTRIES</span>
            <span className="fbadge">PHD-LEVEL EXPERTS</span>
          </div>
        </div>
        <div className="foot-col">
          <h5>Training</h5>
          <ul>
            <li><a href="#">No-Code Bio-AI</a></li>
            <li><a href="#">Bio-AI Lab Course</a></li>
            <li><a href="#">AI for Lab Workflows</a></li>
            <li><a href="#">Free Workshop</a></li>
            <li><a href="#">Enterprise Cohorts</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Services</h5>
          <ul>
            <li><a href="#">Dissertation Writing</a></li>
            <li><a href="#">Manuscript Writing</a></li>
            <li><a href="#">Health Data Analysis</a></li>
            <li><a href="#">Grant Proposals</a></li>
            <li><a href="#">Policy Documents</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Deepiotics</h5>
          <ul>
            <li><a href="#">About Deepiotics</a></li>
            <li><a href="#">Our Experts</a></li>
            <li><a href="#">Global Reach</a></li>
            <li><a href="#">Client Outcomes</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2025 BioAI Lab · A Deepiotics Initiative. All rights reserved.</span>
        <div className="flegal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Confidentiality & NDA</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

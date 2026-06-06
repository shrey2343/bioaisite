import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

function CTA() {
  useScrollAnimation();

  return (
    <section id="contact" className="cta-section">
      <div className="cta-orb"></div>
      <div style={{position:'relative',zIndex:1,maxWidth:'680px',margin:'0 auto'}}>
        <div className="eyebrow fi" style={{justifyContent:'center',display:'flex'}}>{'// Take the First Step'}</div>
        <h2 className="h2 fi" style={{marginBottom:'1.25rem'}}>Whatever You Need Next in Biotech —<br /><span className="gt">We Are Ready.</span></h2>
        <p className="lead center fi cta-lead" style={{marginBottom:'3rem'}}>Book a free 30-minute consultation for research services. Or join the next free BioAI Career Launchpad Workshop. Your next breakthrough starts at <strong className="cta-website">bioai.deepiotics.com</strong></p>
        <div className="cta-btns fi">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6JxqYEUKk6Zq05XCzhhiaooeZ35dsp6v9M-vmmfySv1-qjA/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="btn btn-grad">Apply Now →</a>
        </div>
        <p className="cta-note fi">No commitment. No hard sell. Just expert guidance on your exact situation.</p>
      </div>
    </section>
  );
}

export default CTA;

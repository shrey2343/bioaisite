import React from 'react';
import AnimateIn from './AnimateIn';

function CTA() {
  return (
    <section id="contact" className="cta-section">
      <div className="cta-orb"></div>
      <div style={{position:'relative',zIndex:1,maxWidth:'720px',margin:'0 auto'}}>
        <AnimateIn direction="up" delay={0}>
          <div className="eyebrow" style={{justifyContent:'center',display:'flex',color:'#6B6B6B'}}>{'// TAKE THE FIRST STEP'}</div>
        </AnimateIn>
        <AnimateIn direction="up" delay={0.1}>
          <h2 className="h2" style={{marginBottom:'1.5rem',color:'#2C2C2C',fontSize:'clamp(2.2rem,5vw,3.5rem)',lineHeight:'1.2'}}>
            Whatever You Need Next in Biotech —<br />
            <span style={{color:'#C9974C',fontStyle:'normal'}}>We Are Ready.</span>
          </h2>
        </AnimateIn>
        <AnimateIn direction="up" delay={0.18}>
          <p className="lead center cta-lead" style={{marginBottom:'2.5rem',color:'#4A4A4A',fontSize:'1rem',lineHeight:'1.7'}}>
            Book a free 30-minute consultation for research services. Or join the next free BioAI Career Launchpad Workshop. Your next breakthrough starts at <span style={{color:'#C9974C',fontWeight:'500'}}>bioai.deepiotics.com</span>
          </p>
        </AnimateIn>
        <AnimateIn direction="up" delay={0.24}>
          <div className="cta-btns" style={{marginBottom:'1.5rem'}}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6JxqYEUKk6Zq05XCzhhiaooeZ35dsp6v9M-vmmfySv1-qjA/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="btn btn-cta-primary">Apply Now →</a>
          </div>
        </AnimateIn>
        <AnimateIn direction="fade" delay={0.3}>
          <p className="cta-note" style={{color:'#6B6B6B',fontSize:'0.88rem'}}>No commitment. No hard sell. Just expert guidance on your exact situation.</p>
        </AnimateIn>
      </div>
    </section>
  );
}

export default CTA;

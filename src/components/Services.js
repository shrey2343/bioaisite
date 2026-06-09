import React from 'react';
import { motion } from 'framer-motion';
import AnimateIn from './AnimateIn';

const serviceRows = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#A8E6CF" strokeWidth="1.4"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    name: 'Dissertation & Thesis Writing',
    tag: 'Chapter writing · Methodology · Literature review · Committee-ready delivery',
    chip: "PhD · Master's",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#A8E6CF" strokeWidth="1.4"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/></svg>,
    name: 'Research Paper & Manuscript Writing',
    tag: 'Full drafting · Journal targeting · Submission · Rebuttal writing',
    chip: 'PhD · Professors · R&D',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#A8E6CF" strokeWidth="1.4"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    name: 'Health Data Analysis',
    tag: 'Genomic pipelines · EHR analysis · Biostatistics · R/Python · Pub-grade visuals',
    chip: 'PhD · R&D · Govt',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#A8E6CF" strokeWidth="1.4"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    name: 'Grant Proposal Writing',
    tag: 'NIH R01/R21 · NSF · SBIR/STTR · Wellcome · DBT · ICMR · DOD',
    chip: 'Professors · Startups · Govt',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#A8E6CF" strokeWidth="1.4"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    name: 'Policy Document Writing',
    tag: 'White papers · Biosafety policy · Regulatory submissions · Public health briefs',
    chip: 'Govt · NGO · Think Tanks',
  },
];

function Services() {
  return (
    <section id="services">
      <div className="sw">
        <div className="services-grid">
          <div>
            <AnimateIn direction="up" delay={0}>
              <div className="eyebrow">{'// Research & Expert Services'}</div>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.08}>
              <h2 className="h2 services-title">Specialist Support for<br /><span className="gt">Serious Research</span></h2>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.16}>
              <p className="lead services-lead" style={{marginBottom:'1.75rem'}}>No generalists. No juniors. Every BioAI Lab expert holds a PhD in their exact domain — matched to your specific field, not assigned by availability.</p>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.22}>
              <div className="trusted-box">
                <div className="trusted-label">Trusted by</div>
                <div className="trusted-text">PhD candidates at IIT, Johns Hopkins & UCL · PIs with funded R01 grants · Government health ministries in Asia & Europe · Biotech startups raising SBIR funding</div>
              </div>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.28}>
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe6JxqYEUKk6Zq05XCzhhiaooeZ35dsp6v9M-vmmfySv1-qjA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-grad"
                whileHover={{ scale: 1.04, boxShadow: '0 8px 28px rgba(27,67,50,0.3)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                Apply Now →
              </motion.a>
            </AnimateIn>
          </div>

          <div className="sstrip">
            {serviceRows.map((row, i) => (
              <AnimateIn key={row.name} direction="left" delay={i * 0.07}>
                <motion.div
                  className="srow"
                  whileHover={{ x: 4, borderColor: 'var(--forest-mid)', background: 'rgba(27,67,50,0.04)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="srow-icon">{row.icon}</div>
                  <div>
                    <div className="srow-n">{row.name}</div>
                    <div className="srow-tag">{row.tag}</div>
                  </div>
                  <span className="srow-chip">{row.chip}</span>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

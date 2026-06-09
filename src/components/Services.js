import React from 'react';
import { motion } from 'framer-motion';
import AnimateIn from './AnimateIn';

const serviceRows = [
  {
    icon: '📚',
    name: 'Dissertation & Thesis Writing',
    tag: 'Chapter writing · Methodology · Literature review · Committee-ready delivery',
    chip: "PhD · Master's",
  },
  {
    icon: '📝',
    name: 'Research Paper & Manuscript Writing',
    tag: 'Full drafting · Journal targeting · Submission · Rebuttal writing',
    chip: 'PhD · Professors · R&D',
  },
  {
    icon: '🧬',
    name: 'Health Data Analysis',
    tag: 'Genomic pipelines · EHR analysis · Biostatistics · R/Python · Pub-grade visuals',
    chip: 'PhD · R&D · Govt',
  },
  {
    icon: '💰',
    name: 'Grant Proposal Writing',
    tag: 'NIH R01/R21 · NSF · SBIR/STTR · Wellcome · DBT · ICMR · DOD',
    chip: 'Professors · Startups · Govt',
  },
  {
    icon: '📋',
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

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimateIn from './AnimateIn';

function Training() {
  return (
    <section id="training">
      <div className="sw">
        <div className="center">
          <AnimateIn direction="up" delay={0}>
            <div className="eyebrow">{'// Training Academy'}</div>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.08}>
            <h2 className="h2">The AI Skills Biotech<br />Employers Are <span className="gt">Hiring For</span></h2>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.16}>
            <p className="lead">Our courses don't teach theory. They build the exact tools, pipelines, and portfolios that open doors at leading research labs and biotech companies worldwide.</p>
          </AnimateIn>
        </div>

        <div className="training-two-cards">
          <AnimateIn direction="left" delay={0.1}>
            <motion.div
              className="training-card"
              whileHover={{ y: -6, boxShadow: '0 24px 56px rgba(27,67,50,0.15)' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bc-head">
                <div className="bc-level">Foundation · Self-Paced · No Coding Required</div>
                <div className="bc-title">No-Code Bio-AI</div>
              </div>
              <div className="bc-body">
                <div className="bc-hook">Biology-first. Zero coding anxiety. Maximum impact.</div>
                <p className="bc-desc">Master AI-powered tools for drug discovery, protein analysis, literature mining, and genomics — entirely through visual no-code platforms. Built for UG and PG students with zero programming background who want AI on their CV before graduation.</p>
                <div className="bc-chips">
                  <motion.span 
                    className="chip"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    AI Drug Discovery
                  </motion.span>
                  <motion.span 
                    className="chip"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    Protein Folding Tools
                  </motion.span>
                  <motion.span 
                    className="chip"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    Literature AI Mining
                  </motion.span>
                  <motion.span 
                    className="chip"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    No Coding Needed
                  </motion.span>
                  <motion.span 
                    className="chip"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    Visual Platforms
                  </motion.span>
                </div>
              </div>
              <div className="bc-foot">
                <span className="bc-meta">📅 8 Weeks &nbsp;·&nbsp; 🎯 Self-Paced &nbsp;·&nbsp; 🏆 Certificate</span>
                <Link to="/biocodemastery" className="bc-link">Read More →</Link>
              </div>
            </motion.div>
          </AnimateIn>

          <AnimateIn direction="right" delay={0.18}>
            <motion.div
              className="training-card"
              whileHover={{ y: -6, boxShadow: '0 24px 56px rgba(27,67,50,0.15)' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bc-head">
                <div className="bc-level">Intermediate · Live + Lab · Cohort</div>
                <div className="bc-title">Bio-AI Lab Course</div>
              </div>
              <div className="bc-body">
                <div className="bc-hook">Code meets biology. Real data, real results.</div>
                <p className="bc-desc">Python and R applied to actual genomic datasets, EHR data, and imaging pipelines. Weekly live sessions, virtual simulations, and a portfolio project that impresses every interviewer.</p>
                <div className="bc-chips">
                  <motion.span 
                    className="chip"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    Python / R
                  </motion.span>
                  <motion.span 
                    className="chip"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    ML in Genomics
                  </motion.span>
                  <motion.span 
                    className="chip"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    Virtual Lab
                  </motion.span>
                </div>
              </div>
              <div className="bc-foot">
                <span className="bc-meta">📅 12 Weeks &nbsp;·&nbsp; 🎬 Live</span>
                <Link to="/bioai-lab" className="bc-link">Read More →</Link>
              </div>
            </motion.div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

export default Training;

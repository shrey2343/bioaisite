import React from 'react';
import { motion } from 'framer-motion';
import AnimateIn from './AnimateIn';

const testimonials = [
  {
    icon: '🎓',
    type: 'PHD STUDENT',
    quote: '"Three chapters rewritten in six weeks. My supervisor called the methodology section "exemplary." I submitted on time, passed my viva, and had a manuscript accepted at Nucleic Acids Research four months later. BioAI Lab didn\'t just save my PhD — they elevated it."',
    initials: 'SK',
    name: 'Sonal K.',
    role: 'PhD Genomics · University of Edinburgh',
  },
  {
    icon: '🔬',
    type: 'PRINCIPAL INVESTIGATOR',
    quote: '"Our NIH R21 was funded on first submission — $240,000. The BioAI Lab grant team preempted every reviewer concern. The specific aims page alone was worth the entire fee. I\'ve referred three colleagues since."',
    initials: 'MR',
    name: 'Dr. Marcus R.',
    role: 'Associate Professor · Johns Hopkins University',
  },
  {
    icon: '🚀',
    type: 'UG STUDENT → INDUSTRY',
    quote: '"I was a final-year biotech student with zero coding skills. The No-Code Bio-AI course changed everything. Eight months later I had a job offer from a Singapore biotech firm — and a CV line every interviewer asks about."',
    initials: 'PL',
    name: 'Priya L.',
    role: 'Computational Biologist · Genentech, Singapore',
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="sw">
        <div className="center">
          <AnimateIn direction="up" delay={0}>
            <div className="eyebrow" style={{color:'var(--text-muted)',letterSpacing:'0.12em',fontSize:'0.7rem'}}>{'// WHAT OUR CLIENTS SAY'}</div>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.08}>
            <h2 className="h2" style={{color:'var(--forest)',marginBottom:'0.5rem'}}>Real Outcomes.</h2>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.14}>
            <h2 className="h2" style={{color:'var(--gold)',marginTop:'0',marginBottom:'3rem'}}>Real People.</h2>
          </AnimateIn>
        </div>
        <div className="tgrid" style={{marginTop:'3rem'}}>
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} direction="up" delay={i * 0.12}>
              <motion.div
                className="tcard"
                whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(27,67,50,0.12)' }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="tc-header">
                  <div className="tc-icon">{t.icon}</div>
                  <div className="tc-type">{t.type}</div>
                </div>
                <div className="tc-q">{t.quote}</div>
                <div className="tc-auth">
                  <motion.div
                    className="tc-av"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t.initials}
                  </motion.div>
                  <div>
                    <div className="tc-name">{t.name}</div>
                    <div className="tc-role">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

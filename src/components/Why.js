import React from 'react';
import { motion } from 'framer-motion';
import AnimateIn from './AnimateIn';

const cards = [
  { n: '01', title: 'AI Company Behind Every Service', desc: 'BioAI Lab runs on Deepiotics infrastructure — meaning every service we deliver has AI-augmented research, analysis, and quality assurance built in. You\'re not getting human effort alone. You\'re getting human + AI at scale.' },
  { n: '02', title: 'Domain Depth, Not Generalism', desc: 'Your genomics pipeline isn\'t handled by a data analyst who took a biology elective. It\'s built by a computational biologist who has published in this field. Every expert is PhD-level and domain-matched.' },
  { n: '03', title: 'International Standard — Everywhere', desc: 'Our outputs meet NIH, Nature, EMA, and Wellcome Trust standards. Clients at Johns Hopkins, IIT Delhi, University of Edinburgh, and A*STAR Singapore set our bar — not local expectations.' },
  { n: '04', title: 'Results You Can Point To', desc: 'Published papers, funded grants, thesis distinctions, employment rates — not hours billed. Our 87% grant success rate and $18M+ are client outcomes, not marketing numbers.' },
  { n: '05', title: 'Legally Protected Confidentiality', desc: 'Every engagement begins with a strict NDA. Your research, data, and grant strategy are legally protected from day one. We do not reuse, resell, or reference your work — ever.' },
  { n: '06', title: 'Curriculum That Moves With the Market', desc: 'Our courses are reviewed every quarter with industry partners. We teach what employers are actually hiring for right now — not what was relevant when someone wrote a textbook three years ago.' },
];

function Why() {
  return (
    <section id="about" className="section-light">
      <div className="sw">
        <div className="center">
          <AnimateIn direction="up" delay={0}>
            <div className="eyebrow">{'// Why BioAI Lab · Deepiotics'}</div>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.08}>
            <h2 className="h2">What Separates Us from<br />Every Other <span className="gt">Option</span></h2>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.16}>
            <p className="lead center">There are tutors. Freelancers. Generic consultancies. Then there is BioAI Lab — the only AI-powered biotech platform built end-to-end, at international standard, under a dedicated AI company.</p>
          </AnimateIn>
        </div>
        <div className="why-grid">
          {cards.map((card, i) => (
            <AnimateIn key={card.n} direction="up" delay={i * 0.07}>
              <motion.div
                className="why-card"
                whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(27,67,50,0.13)', borderColor: 'var(--forest-mid)' }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="why-head">
                  <div className="why-n">{card.n}</div>
                  <div className="why-title">{card.title}</div>
                </div>
                <p className="why-desc">{card.desc}</p>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Why;

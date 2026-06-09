import React from 'react';
import { motion } from 'framer-motion';
import AnimateIn from './AnimateIn';
import { useCountUp } from '../hooks/useCountUp';

const stats = [
  { n: 500, suffix: '+', l: 'Students Trained' },
  { n: 18,  prefix: '$', suffix: 'M+', l: 'Grants Secured' },
  { n: 350, suffix: '+', l: 'Papers Published' },
  { n: 42,  suffix: '+', l: 'Countries Served' },
];

function StatItem({ stat, delay }) {
  const [ref, count] = useCountUp(stat.n, 1600);
  return (
    <AnimateIn direction="up" delay={delay}>
      <motion.div
        className="who-stat"
        ref={ref}
        whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(27,67,50,0.14)' }}
        transition={{ duration: 0.25 }}
      >
        <div className="who-stat-number">
          {stat.prefix || ''}{count}{stat.suffix}
        </div>
        <div className="who-stat-label">{stat.l}</div>
      </motion.div>
    </AnimateIn>
  );
}

function WhoAreYou() {
  return (
    <section className="who-section">
      <div className="sw">
        <div className="who-container">
          <div className="who-orb who-orb-1"></div>
          <div className="who-orb who-orb-2"></div>

          <div className="who-header">
            <AnimateIn direction="down" delay={0}>
              <div className="who-badge">
                <span className="badge-dot"></span>
                Choose Your Path
              </div>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.08}>
              <h2 className="who-title">Who are you?</h2>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.15}>
              <p className="who-subtitle">Select your journey and unlock tailored resources designed for your goals</p>
            </AnimateIn>
          </div>

          <div className="who-paths">
            <AnimateIn direction="left" delay={0.1}>
              <motion.a
                href="#training"
                className="who-path-card who-card-left"
                whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(27,67,50,0.16)' }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="who-card-glow"></div>
                <div className="who-card-header">
                  <div className="who-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                      <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                    </svg>
                  </div>
                  <div className="who-card-header-text">
                    <div className="who-card-tag">For Students & Early Career</div>
                    <h3 className="who-card-title">Train for a Biotech AI Career</h3>
                  </div>
                </div>
                <div className="who-card-content">
                  <p className="who-card-desc">UG, PG & early researchers. Courses, AI skills, and job-ready training built for the next generation.</p>
                  <div className="who-card-features">
                    <span className="who-feature">🎓 Structured Courses</span>
                    <span className="who-feature">💼 Career Support</span>
                    <span className="who-feature">🚀 Hands-on Projects</span>
                  </div>
                </div>
                <div className="who-card-footer">
                  <span className="who-card-link">Explore Courses</span>
                  <svg className="who-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </motion.a>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.18}>
              <motion.a
                href="#services"
                className="who-path-card who-card-right"
                whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(27,67,50,0.16)' }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="who-card-glow"></div>
                <div className="who-card-header">
                  <div className="who-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      <path d="M13 3v6a1 1 0 001 1h6"/>
                    </svg>
                  </div>
                  <div className="who-card-header-text">
                    <div className="who-card-tag">For Researchers & Orgs</div>
                    <h3 className="who-card-title">Expert Research Support</h3>
                  </div>
                </div>
                <div className="who-card-content">
                  <p className="who-card-desc">PhD students, professors, R&D firms, government bodies, and think tanks. Domain-matched specialists only.</p>
                  <div className="who-card-features">
                    <span className="who-feature">📊 Data Analysis</span>
                    <span className="who-feature">📝 Paper Writing</span>
                    <span className="who-feature">💰 Grant Support</span>
                  </div>
                </div>
                <div className="who-card-footer">
                  <span className="who-card-link">View Services</span>
                  <svg className="who-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </motion.a>
            </AnimateIn>
          </div>

          <div className="who-stats">
            {stats.map((s, i) => (
              <StatItem key={s.l} stat={s} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoAreYou;

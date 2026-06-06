import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

function WhoAreYou() {
  useScrollAnimation();

  return (
    <section className="who-section">
      <div className="sw">
        <div className="who-container">
          {/* Decorative elements */}
          <div className="who-orb who-orb-1"></div>
          <div className="who-orb who-orb-2"></div>
          
          {/* Header */}
          <div className="who-header fi">
            <div className="who-badge">
              <span className="badge-dot"></span>
              Choose Your Path
            </div>
            <h2 className="who-title">Who are you?</h2>
            <p className="who-subtitle">Select your journey and unlock tailored resources designed for your goals</p>
          </div>

          {/* Path Cards */}
          <div className="who-paths fi">
            <a href="#training" className="who-path-card who-card-left">
              <div className="who-card-glow"></div>
              
              <div className="who-card-header">
                <div className="who-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
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
            </a>

            <a href="#services" className="who-path-card who-card-right">
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
            </a>
          </div>

          {/* Stats Grid */}
          <div className="who-stats fi">
            <div className="who-stat">
              <div className="who-stat-number">500+</div>
              <div className="who-stat-label">Students Trained</div>
            </div>
            <div className="who-stat">
              <div className="who-stat-number">$18M+</div>
              <div className="who-stat-label">Grants Secured</div>
            </div>
            <div className="who-stat">
              <div className="who-stat-number">350+</div>
              <div className="who-stat-label">Papers Published</div>
            </div>
            <div className="who-stat">
              <div className="who-stat-number">42+</div>
              <div className="who-stat-label">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoAreYou;

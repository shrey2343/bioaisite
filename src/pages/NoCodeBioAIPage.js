import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ParticleCanvas from '../components/ParticleCanvas';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './NoCodeBioAIPage.css';

const heroBlobs = [
  { style: { width: 500, height: 500, top: '-60px', left: '-80px', background: '#86efac', opacity: 0.30 }, animate: { x: [0, 30, -10, 0], y: [0, -40, 20, 0] }, duration: 18 },
  { style: { width: 400, height: 400, top: '-40px', right: '-60px', background: '#4ade80', opacity: 0.20 }, animate: { x: [0, -25, 15, 0], y: [0, 30, -20, 0] }, duration: 22 },
  { style: { width: 350, height: 350, bottom: '-40px', left: '50%', transform: 'translateX(-50%)', background: '#bbf7d0', opacity: 0.40 }, animate: { x: [0, 20, -30, 0], y: [0, -20, 30, 0] }, duration: 15 },
  { style: { width: 300, height: 300, bottom: '-20px', left: '-40px', background: '#6ee7b7', opacity: 0.25 }, animate: { x: [0, -15, 25, 0], y: [0, 25, -15, 0] }, duration: 20 },
  { style: { width: 250, height: 250, top: '20px', left: '50%', transform: 'translateX(-50%)', background: '#a7f3d0', opacity: 0.35 }, animate: { x: [0, 20, -10, 0], y: [0, -30, 10, 0] }, duration: 25 },
];

function NoCodeBioAIPage() {
  useScrollAnimation();
  const prefersReduced = useReducedMotion();

  return (
    <div className="nocode-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="nocode-hero nocode-hero-light">
        {/* Light animated blob background */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', backgroundColor: '#f0faf4', overflow: 'hidden' }}>
          {heroBlobs.map((blob, i) => (
            <motion.div key={i} aria-hidden="true"
              style={{ position: 'absolute', borderRadius: '9999px', filter: 'blur(80px)', willChange: 'transform', ...blob.style }}
              animate={prefersReduced ? {} : blob.animate}
              transition={{ duration: blob.duration, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' }}
            />
          ))}
        </div>
        <ParticleCanvas />
        <div className="nocode-hero-inner">
          <div className="nocode-badge fi">
            <span className="blink-dot"></span>
            <span className="badge-text">Intensive</span>
            <span className="badge-separator">·</span>
            <span className="badge-text">8 Weeks</span>
            <span className="badge-separator">·</span>
            <span className="badge-highlight">Certificate Program</span>
          </div>
          
          <h1 className="fi">
            BioCode <span className="grad-text">Mastery</span>
          </h1>
          
          <p className="nocode-subtitle fi">From Foundations to Clinical Applications</p>

          <div className="nocode-tech-stack fi">
            <span>Python</span>
            <span>·</span>
            <span>R</span>
            <span>·</span>
            <span>Linux</span>
            <span>·</span>
            <span>NGS</span>
            <span>·</span>
            <span>AI/ML</span>
          </div>

          <div className="nocode-stats-row fi">
            <div className="nocode-stat-item">
              <div className="nocode-stat-icon">📅</div>
              <div className="nocode-stat-text">8<br/>Weeks</div>
            </div>
            <div className="nocode-stat-item">
              <div className="nocode-stat-icon">📁</div>
              <div className="nocode-stat-text">5<br/>Projects</div>
            </div>
            <div className="nocode-stat-item">
              <div className="nocode-stat-icon">&lt;/&gt;</div>
              <div className="nocode-stat-text">Python + R<br/>Full Code Stack</div>
            </div>
            <div className="nocode-stat-item">
              <div className="nocode-stat-icon">🧬</div>
              <div className="nocode-stat-text">NGS + AI<br/>Applied Skills</div>
            </div>
            <div className="nocode-stat-item">
              <div className="nocode-stat-icon">🗄️</div>
              <div className="nocode-stat-text">NCBI · PDB<br/>Real Database</div>
            </div>
            <div className="nocode-stat-item">
              <div className="nocode-stat-icon">🏆</div>
              <div className="nocode-stat-text">Certificate<br/>On Completion</div>
            </div>
          </div>

          <div className="nocode-cta-row fi">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6JxqYEUKk6Zq05XCzhhiaooeZ35dsp6v9M-vmmfySv1-qjA/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="btn btn-grad">Apply Online →</a>
            <div className="nocode-cta-note">Limited Seats. Real Skills. Real Impact.</div>
          </div>
        </div>
      </section>

      {/* 8-Week Curriculum */}
      <section className="nocode-section-dark">
        <div className="nocode-container center fi">
          <div className="eyebrow">8-Week Curriculum</div>
          <h2 className="h2">Complete Learning <span className="gt">Path</span></h2>
          
          <div className="nocode-curriculum-grid fi">
            <div className="nocode-curr-card">
              <div className="nocode-curr-head">
                <div className="nocode-curr-num">1</div>
                <h3>Linux & Bioinformatics Foundations</h3>
              </div>
              <p>Command line · File handling · NCBI & Ensembl databases · Bioinformatics intro</p>
              <div className="nocode-project-tag">
                <span className="project-icon">💻</span>
                <span>PROJECT: Bioinformatics Environment Setup</span>
              </div>
            </div>

            <div className="nocode-curr-card">
              <div className="nocode-curr-head">
                <div className="nocode-curr-num">2</div>
                <h3>Python for Bioinformatics</h3>
              </div>
              <p>FASTA/FASTQ handling · Biopython · Sequence analysis · GC content</p>
              <div className="nocode-project-tag">
                <span className="project-icon">🧬</span>
                <span>PROJECT: DNA Sequence Analysis System</span>
              </div>
            </div>

            <div className="nocode-curr-card">
              <div className="nocode-curr-head">
                <div className="nocode-curr-num">3</div>
                <h3>R Programming & Statistics</h3>
              </div>
              <p>Statistical analysis · Data visualization with ggplot2 · Gene Expression Profiling</p>
              <div className="nocode-project-tag">
                <span className="project-icon">📊</span>
                <span>PROJECT: Gene Expression Analysis</span>
              </div>
            </div>

            <div className="nocode-curr-card">
              <div className="nocode-curr-head">
                <div className="nocode-curr-num">4</div>
                <h3>NGS Fundamentals & Quality Control</h3>
              </div>
              <p>NGS workflow · FASTQ · BAM · VCF formats · Quality metrics</p>
              <div className="nocode-project-tag">
                <span className="project-icon">🔬</span>
                <span>PROJECT: NGS Quality Assessment</span>
              </div>
            </div>

            <div className="nocode-curr-card">
              <div className="nocode-curr-head">
                <div className="nocode-curr-num">5</div>
                <h3>RNA-Seq Analysis</h3>
              </div>
              <p>HiSAT2 · StringTie · DESeq2 · Differential expression analysis</p>
              <div className="nocode-project-tag">
                <span className="project-icon">📈</span>
                <span>PROJECT: Differential Gene Expression Analysis</span>
              </div>
            </div>

            <div className="nocode-curr-card">
              <div className="nocode-curr-head">
                <div className="nocode-curr-num">6-7</div>
                <h3>AI & Machine Learning in Biology</h3>
              </div>
              <p>ML basics · Disease prediction · Python ML tools · Model evaluation</p>
              <div className="nocode-project-tag">
                <span className="project-icon">🤖</span>
                <span>PROJECT: Disease Prediction Model</span>
              </div>
            </div>

            <div className="nocode-curr-card">
              <div className="nocode-curr-head">
                <div className="nocode-curr-num">8</div>
                <h3>Clinical Integration & Final Task</h3>
              </div>
              <p>Personalized medicine · EGFR mutation case study · Variant interpretation</p>
              <div className="nocode-project-tag">
                <span className="project-icon">🎯</span>
                <span>PROJECT: Cancer Data Interpretation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You Will Be Able To */}
      <section className="nocode-section-light">
        <div className="nocode-container center fi">
          <div className="eyebrow">You Will Be Able To</div>
          <h2 className="h2">Skills You'll <span className="gt">Master</span></h2>
          
          <div className="nocode-skills-grid fi">
            <div className="nocode-skill-card">
              <div className="nocode-skill-icon">💻</div>
              <h3>Work in Linux confidently</h3>
              <p>Navigate command line and handle bioinformatics file formats</p>
            </div>

            <div className="nocode-skill-card">
              <div className="nocode-skill-icon">&lt;/&gt;</div>
              <h3>Write Python & R code</h3>
              <p>Analyse biological data, plot results and use statistical methods</p>
            </div>

            <div className="nocode-skill-card">
              <div className="nocode-skill-icon">🧬</div>
              <h3>Run NGS pipelines end-to-end</h3>
              <p>From raw FASTQ files to variant calls and RNA-Seq results</p>
            </div>

            <div className="nocode-skill-card">
              <div className="nocode-skill-icon">⚖️</div>
              <h3>Apply AI/ML in biology</h3>
              <p>Build disease prediction models and interpret clinical genomic data</p>
            </div>

            <div className="nocode-skill-card">
              <div className="nocode-skill-icon">📁</div>
              <h3>Build a project portfolio</h3>
              <p>5 hands-on projects ready for research labs and industry recruiters</p>
            </div>

            <div className="nocode-skill-card">
              <div className="nocode-skill-icon">🗄️</div>
              <h3>Query real databases</h3>
              <p>NCBI, Ensembl, UniProt & PDB integrated across all 8 weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="nocode-section-dark">
        <div className="nocode-container center fi">
          <div className="eyebrow">Tools & Technologies</div>
          <h2 className="h2">Industry-Standard <span className="gt">Tech Stack</span></h2>
          
          <div className="nocode-tools-grid fi">
            <div className="nocode-tool-card">
              <div className="nocode-tool-icon">💻</div>
              <h3 className="nocode-tool-card-title">Programming & Analysis</h3>
              <div className="nocode-tool-badges-wrapper">
                <div className="nocode-tool-badge">Linux / Bash</div>
                <div className="nocode-tool-badge">Python</div>
                <div className="nocode-tool-badge">Biopython</div>
                <div className="nocode-tool-badge">R / RStudio</div>
                <div className="nocode-tool-badge">pandas / numpy</div>
              </div>
            </div>

            <div className="nocode-tool-card">
              <div className="nocode-tool-icon">🧬</div>
              <h3 className="nocode-tool-card-title">NGS & Analysis Tools</h3>
              <div className="nocode-tool-badges-wrapper">
                <div className="nocode-tool-badge">FastQC</div>
                <div className="nocode-tool-badge">HiSAT2</div>
                <div className="nocode-tool-badge">StringTie</div>
                <div className="nocode-tool-badge">DESeq2</div>
                <div className="nocode-tool-badge">scikit-learn</div>
              </div>
            </div>

            <div className="nocode-tool-card">
              <div className="nocode-tool-icon">🗄️</div>
              <h3 className="nocode-tool-card-title">Databases & Resources</h3>
              <div className="nocode-tool-badges-wrapper">
                <div className="nocode-tool-badge">NCBI</div>
                <div className="nocode-tool-badge">Ensembl</div>
                <div className="nocode-tool-badge">UniProt</div>
                <div className="nocode-tool-badge">PDB</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="nocode-section-light">
        <div className="nocode-container center fi">
          <div className="eyebrow">Program Highlights</div>
          <h2 className="h2">Why Choose <span className="gt">BioCode Mastery</span></h2>
          
          <div className="nocode-highlights-grid fi">
            <div className="nocode-highlight-card">
              <div className="nocode-highlight-icon">✓</div>
              <h3>Hands-on Projects</h3>
              <p>5 real-world projects building your portfolio</p>
            </div>

            <div className="nocode-highlight-card">
              <div className="nocode-highlight-icon">✓</div>
              <h3>Real Biological Datasets</h3>
              <p>Work with actual genomic data from NCBI and public databases</p>
            </div>

            <div className="nocode-highlight-card">
              <div className="nocode-highlight-icon">✓</div>
              <h3>Industry & Research Ready</h3>
              <p>Skills aligned with biotech industry and academic research needs</p>
            </div>

            <div className="nocode-highlight-card">
              <div className="nocode-highlight-icon">✓</div>
              <h3>Mentorship & Support</h3>
              <p>Expert guidance throughout your learning journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate */}
      <section className="nocode-section-dark">
        <div className="nocode-container center fi">
          <div className="nocode-certificate-box">
            <div className="nocode-cert-left">
              <div className="eyebrow">Certificate</div>
              <h2 className="h2">Certified Bioinformatics Analyst<br/>— <span className="gt">BioCode Mastery</span></h2>
              <ul className="nocode-cert-list">
                <li>✓ Issued by BioAI</li>
                <li>✓ Powered by Deepiotics</li>
                <li>✓ 5 Project Portfolio</li>
                <li>✓ Shareable on LinkedIn</li>
              </ul>
            </div>
            <div className="nocode-cert-right">
              <div className="nocode-cert-badge">🏆</div>
              <p>Certified Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <div className="cta-orb"></div>
        <div style={{position:'relative',zIndex:1,maxWidth:'680px',margin:'0 auto'}}>
          <div className="eyebrow fi" style={{justifyContent:'center',display:'flex'}}>{'// Learn. Build. Certify.'}</div>
          <h2 className="h2 fi" style={{marginBottom:'1.25rem'}}>Future-ready skills for careers in <em style={{fontStyle:'italic',background:'var(--grad2)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>bioinformatics, data science, and biotechnology.</em></h2>
          <div className="cta-btns fi">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6JxqYEUKk6Zq05XCzhhiaooeZ35dsp6v9M-vmmfySv1-qjA/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="btn btn-grad">Apply Online →</a>
          </div>
          <p className="cta-note fi">bioai.deepiotics.com/biocodemastery · +91 88272 72142</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default NoCodeBioAIPage;

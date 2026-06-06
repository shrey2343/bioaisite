import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ParticleCanvas from '../components/ParticleCanvas';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './NoCodeBioAIPage.css';

function NoCodeBioAIPage() {
  useScrollAnimation();

  return (
    <div className="nocode-page">
      <ParticleCanvas />
      <Navigation />
      
      {/* Hero Section */}
      <section className="nocode-hero">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
        <div className="nocode-hero-inner">
          <div className="nocode-badge fi">
            <span className="blink-dot"></span>
            Intensive · 8 Weeks · Certificate Program
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
      <section className="sw bioai-section-light">
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
      <section className="sw" style={{background:'var(--bg)'}}>
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
      <section className="sw nocode-section-light">
        <div className="nocode-container center fi">
          <div className="eyebrow">Tools & Technologies</div>
          <h2 className="h2">Industry-Standard <span className="gt">Tech Stack</span></h2>
          
          <div className="nocode-tools-grid fi">
            <div className="nocode-tool-badge">Linux / Bash</div>
            <div className="nocode-tool-badge">Python</div>
            <div className="nocode-tool-badge">Biopython</div>
            <div className="nocode-tool-badge">R / RStudio</div>
            <div className="nocode-tool-badge">FastQC</div>
            <div className="nocode-tool-badge">HiSAT2</div>
            <div className="nocode-tool-badge">StringTie</div>
            <div className="nocode-tool-badge">DESeq2</div>
            <div className="nocode-tool-badge">scikit-learn</div>
            <div className="nocode-tool-badge">pandas / numpy</div>
            <div className="nocode-tool-badge">NCBI</div>
            <div className="nocode-tool-badge">Ensembl</div>
            <div className="nocode-tool-badge">UniProt</div>
            <div className="nocode-tool-badge">PDB</div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="sw" style={{background:'var(--bg)'}}>
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
      <section className="sw nocode-section-light">
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
          <div className="eyebrow fi" style={{justifyContent:'center',display:'flex'}}>// Learn. Build. Certify.</div>
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

import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import FormModal from './FormModal';

function Workshop() {
  useScrollAnimation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState({ pdf: '', title: '' });

  const openModal = (pdfFile, title) => {
    setSelectedResource({ pdf: pdfFile, title });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedResource({ pdf: '', title: '' });
  };

  return (
    <section id="workshop">
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '100px 4vw' }}>
        <div className="center">
          <div className="eyebrow fi">Free Resources</div>
          <h2 className="h2 fi" style={{ marginBottom: '1rem' }}>
            Expert Guides to <span className="gt">Accelerate Your Success</span>
          </h2>
          <p className="lead center fi" style={{ marginBottom: '4rem' }}>
            Download our proven frameworks used by researchers worldwide
          </p>
        </div>

        {/* Wider cards grid */}
        <div
          className="fi"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
        >
          {/* Card 1: Grant Winning Formula */}
          <div
            className="resource-card"
            style={{ padding: '2.5rem 2.25rem' }}
          >
            <div className="resource-badge">FREE STRATEGY GUIDE</div>
            <h3 className="resource-title" style={{ fontSize: '1.55rem' }}>
              The Grant Winning Formula
            </h3>
            <p className="resource-desc" style={{ fontSize: '0.95rem' }}>
              The exact structure behind $18M+ in funded NIH, DBT & Wellcome Trust grants.
            </p>

            <div className="resource-box">
              <div className="resource-box-title">The Grant Winning Formula</div>
              <div className="resource-box-subtitle">$18M+ in NIH, DBT & Wellcome Trust grants</div>

              <ul className="resource-list">
                <li>The 5-Part Specific Aims Formula</li>
                <li>Innovation Argument Framework</li>
                <li>Agency-Specific Rules: NIH · DBT · Wellcome</li>
                <li>The 4-Step Resubmission Formula</li>
                <li>7 parts · Instant PDF · Print-ready</li>
              </ul>

              <div className="resource-tags">
                <span className="resource-tag">NIH R01/R21</span>
                <span className="resource-tag">DBT / ICMR</span>
                <span className="resource-tag">Wellcome Trust</span>
              </div>
            </div>

            <div className="resource-stats">
              <div className="resource-stat">
                <div className="resource-stat-n">$18M+</div>
                <div className="resource-stat-l">Grants secured</div>
              </div>
              <div className="resource-stat">
                <div className="resource-stat-n">87%</div>
                <div className="resource-stat-l">First-round success</div>
              </div>
              <div className="resource-stat">
                <div className="resource-stat-n">120+</div>
                <div className="resource-stat-l">Proposals written</div>
              </div>
              <div className="resource-stat">
                <div className="resource-stat-n">42+</div>
                <div className="resource-stat-l">Countries served</div>
              </div>
            </div>

            <button
              onClick={() =>
                openModal('/Grant_Winning_Formula_BioAI_Lab.pdf', 'The Grant Winning Formula')
              }
              className="btn btn-grad"
              style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
            >
              Download Free Guide →
            </button>
          </div>

          {/* Card 2: PhD Rescue Checklist */}
          <div
            className="resource-card"
            style={{ padding: '2.5rem 2.25rem' }}
          >
            <div className="resource-badge">FREE DOWNLOAD</div>
            <h3 className="resource-title" style={{ fontSize: '1.55rem' }}>
              The PhD Rescue Checklist
            </h3>
            <p className="resource-desc" style={{ fontSize: '0.95rem' }}>
              12 things every struggling PhD student should do before their next supervisor meeting.
            </p>

            <div className="resource-box">
              <div className="resource-box-title">The PhD Rescue Checklist</div>
              <div className="resource-box-subtitle">12 steps before your next supervisor meeting</div>

              <ul className="resource-list">
                <li>Section A — Preparation (Items 1-4)</li>
                <li>Section B — Knowledge & Writing (Items 5-8)</li>
                <li>Section C — Action & Confidence (Items 9-12)</li>
                <li>Instant PDF · 4 pages · Print-ready</li>
              </ul>

              <div className="resource-tags">
                <span className="resource-tag">4 pages</span>
                <span className="resource-tag">12 items</span>
                <span className="resource-tag">42+ countries</span>
              </div>
            </div>

            <div className="resource-stats">
              <div className="resource-stat">
                <div className="resource-stat-n">500+</div>
                <div className="resource-stat-l">Users</div>
              </div>
              <div className="resource-stat">
                <div className="resource-stat-n">12</div>
                <div className="resource-stat-l">Action items</div>
              </div>
              <div className="resource-stat">
                <div className="resource-stat-n">4</div>
                <div className="resource-stat-l">Pages</div>
              </div>
              <div className="resource-stat">
                <div className="resource-stat-n">42+</div>
                <div className="resource-stat-l">Countries</div>
              </div>
            </div>

            <button
              onClick={() =>
                openModal(
                  '/PhD_Rescue_Checklist_BioAI_Lab (1).pdf',
                  'The PhD Rescue Checklist'
                )
              }
              className="btn btn-grad"
              style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
            >
              Download Free Checklist →
            </button>
          </div>

          {/* Card 3: Bioinformatics Interview Bible */}
          <div
            className="resource-card"
            style={{ padding: '2.5rem 2.25rem' }}
          >
            <div className="resource-badge">FREE DOWNLOAD</div>
            <h3 className="resource-title" style={{ fontSize: '1.55rem' }}>
              The Bioinformatics Interview Bible
            </h3>
            <p className="resource-desc" style={{ fontSize: '0.95rem' }}>
              20 real interview questions with model answers — written in simple English every
              biology student can understand.
            </p>

            <div className="resource-box">
              <div className="resource-box-title">The Bioinformatics Interview Bible</div>
              <div className="resource-box-subtitle">20 questions · 20 answers · zero blanks</div>

              <ul className="resource-list">
                <li>Section A — NGS Basics (Items 1-5)</li>
                <li>Section B — Tools & Quality Control (Items 6-9)</li>
                <li>Section C — Alignment & Variants (Items 10-14)</li>
                <li>Section D — RNA-Seq, AI & Clinical (Items 15-20)</li>
                <li>Instant PDF · 15 pages · Print-ready</li>
              </ul>

              <div className="resource-tags">
                <span className="resource-tag">15 pages</span>
                <span className="resource-tag">20 questions</span>
                <span className="resource-tag">Simple English</span>
              </div>
            </div>

            <div className="resource-stats">
              <div className="resource-stat">
                <div className="resource-stat-n">20</div>
                <div className="resource-stat-l">Questions</div>
              </div>
              <div className="resource-stat">
                <div className="resource-stat-n">20</div>
                <div className="resource-stat-l">Answers</div>
              </div>
              <div className="resource-stat">
                <div className="resource-stat-n">15</div>
                <div className="resource-stat-l">Pages</div>
              </div>
              <div className="resource-stat">
                <div className="resource-stat-n">100%</div>
                <div className="resource-stat-l">Free</div>
              </div>
            </div>

            <button
              onClick={() =>
                openModal(
                  '/Bioinformatics_Interview_Bible_Final.pdf',
                  'The Bioinformatics Interview Bible'
                )
              }
              className="btn btn-grad"
              style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
            >
              Download Free Bible →
            </button>
          </div>
        </div>

        <FormModal
          isOpen={modalOpen}
          onClose={closeModal}
          pdfFile={selectedResource.pdf}
          resourceTitle={selectedResource.title}
        />
      </div>
    </section>
  );
}

export default Workshop;
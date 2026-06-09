import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ParticleCanvas from '../components/ParticleCanvas';
import FormModal from '../components/FormModal';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { FaDna, FaRobot, FaBriefcase } from 'react-icons/fa';
import './BioAILabPage.css';

const heroBlobs = [
  { style: { width: 500, height: 500, top: '-60px', left: '-80px', background: '#86efac', opacity: 0.30 }, animate: { x: [0, 30, -10, 0], y: [0, -40, 20, 0] }, duration: 18 },
  { style: { width: 400, height: 400, top: '-40px', right: '-60px', background: '#4ade80', opacity: 0.20 }, animate: { x: [0, -25, 15, 0], y: [0, 30, -20, 0] }, duration: 22 },
  { style: { width: 350, height: 350, bottom: '-40px', left: '50%', transform: 'translateX(-50%)', background: '#bbf7d0', opacity: 0.40 }, animate: { x: [0, 20, -30, 0], y: [0, -20, 30, 0] }, duration: 15 },
  { style: { width: 300, height: 300, bottom: '-20px', left: '-40px', background: '#6ee7b7', opacity: 0.25 }, animate: { x: [0, -15, 25, 0], y: [0, 25, -15, 0] }, duration: 20 },
  { style: { width: 250, height: 250, top: '20px', left: '50%', transform: 'translateX(-50%)', background: '#a7f3d0', opacity: 0.35 }, animate: { x: [0, 20, -10, 0], y: [0, -30, 10, 0] }, duration: 25 },
];

/* Reusable stagger container */
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

/* Scroll-triggered stagger wrapper */
function StaggerSection({ children, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

function BioAILabPage() {
  useScrollAnimation();
  const prefersReduced = useReducedMotion();
  const [modalOpen, setModalOpen] = useState(false);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const timelineRef = useRef(null);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      setTimelineProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bioai-page">
      <Navigation />

      {/* ── Hero ── */}
      <section className="bioai-hero bioai-hero-light">
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
        <div className="bioai-hero-inner">
          <motion.div className="hero-eyebrow fi"
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            <span className="blink-dot"></span>
            By Deepiotics · Program Brochure 2025
          </motion.div>
          <motion.h1 className="fi"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
            <span className="grad-text">BioAI Lab</span>
          </motion.h1>
          <motion.p className="bioai-hero-sub fi"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            India's First AI-Powered, No-Code Bioinformatics Program.<br />
            Bioinformatics ka naya tarika — bina coding ke.
          </motion.p>
          <motion.div className="bioai-hero-stats fi"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}>
            {['8-Week Structured Curriculum', 'No-Code AI-Powered Tools', 'Job-Ready In 90 Days'].map((s, i) => (
              <motion.div key={s} className="bioai-stat"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.75 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
                {s}
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="bioai-hero-actions fi"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <motion.button onClick={openModal} className="btn btn-grad"
              whileHover={{ scale: 1.04, boxShadow: '0 8px 28px rgba(27,67,50,0.3)' }}
              whileTap={{ scale: 0.97 }}>
              Get The Bioinformatics Interview Bible
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ── About / Pipeline ── */}
      <section className="bioai-section-dark">
        <div className="bioai-container fi">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <div className="eyebrow">About the Program</div>
            <h2 className="h2">About the Program</h2>
          </motion.div>
          <div className="about-layout">
            <motion.div className="about-content"
              initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
              <p className="lead">BioAI Lab is an 8-week, 100% online program for Biotechnology, Life Science, Microbiology, Genetics, and Biochemistry graduates who want to build a real bioinformatics career — without learning Python or any coding language.</p>
              <p className="bioai-desc">Students use AI tools like Galaxy, ChatGPT, and Claude to run actual NGS pipelines, analyse real Indian genomic datasets from NCBI/SRA, build a professional GitHub portfolio, and prepare confidently for interviews at Biocon, Syngene, and leading research institutions.</p>
            </motion.div>
            <div className="ngs-pipeline">
              {['FASTQ', 'QC', 'Align', 'Variant', 'Annotate'].map((step, i) => (
                <motion.div key={step} className="pipeline-step"
                  initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}>
                  <motion.div className="step-node"
                    whileHover={{ scale: 1.08, boxShadow: '0 0 20px rgba(201,151,76,0.4)' }}
                    transition={{ duration: 0.2 }}>
                    {step}
                  </motion.div>
                  <div className="step-arrow"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Glance Cards ── */}
      <section className="bioai-section-light">
        <div className="bioai-container center fi">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
            <div className="eyebrow">Program at a Glance</div>
            <h2 className="h2">What You <span className="gt">Get</span></h2>
          </motion.div>
          <StaggerSection className="bioai-glance-grid fi">
            {[
              { icon: <FaDna />, title: '8-Week Structured Curriculum', desc: 'AI tools, NGS pipelines, real Indian datasets, GitHub portfolio, and a complete interview preparation system — built week by week. Every module is designed around what bioinformatics employers actually look for.' },
              { icon: <FaRobot />, title: 'No-Code, AI-Powered Tools', desc: 'Run full NGS pipelines using Galaxy, ChatGPT, and Claude. No Python. No terminal. No coding required — ever. If you can use a browser, you can do bioinformatics.' },
              { icon: <FaBriefcase />, title: 'Job-Ready in 90 Days', desc: 'A real GitHub portfolio, a LinkedIn profile optimised for biotech recruiters, and a complete interview preparation system — all built during the program, not after it.' },
            ].map((c, i) => (
              <motion.div key={i} className="bioai-glance-card" variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(27,67,50,0.13)', borderColor: 'var(--forest-mid)' }}
                transition={{ duration: 0.25 }}>
                <div className="bioai-glance-head">
                  <div className="bioai-glance-icon">{c.icon}</div>
                  <h3>{c.title}</h3>
                </div>
                <p>{c.desc}</p>
              </motion.div>
            ))}
          </StaggerSection>
        </div>
      </section>

      {/* ── Who Is This For ── */}
      <section className="bioai-section-dark who-section">
        <div className="hexagon-pattern"></div>
        <div className="bioai-container center fi">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
            <div className="eyebrow">Target Audience</div>
            <h2 className="h2">Who Is This Program <span className="gt">For?</span></h2>
          </motion.div>
          <StaggerSection className="bioai-audience-grid fi">
            {[
              { num: '01', title: 'Life Science & Biotech Graduates', desc: 'You have the biology. You understand the science. You just need the bioinformatics skills that labs are hiring for — and a portfolio that proves you can do the work.' },
              { num: '02', title: 'MSc Students Entering the Job Market', desc: 'Your degree got you the interview. BioAI Lab gets you the job — with a GitHub portfolio, real NGS experience, and answers to the exact questions Biocon and Syngene ask.' },
              { num: '03', title: 'Researchers Without Coding Background', desc: 'You do not need Python. You do not need the terminal. Galaxy + AI tools handle the pipelines. You handle the biology. That is the job.' },
              { num: '04', title: 'Career Switchers', desc: 'Lab technicians and research assistants ready to transition into higher-paying bioinformatics analyst roles — on their own timeline.' },
            ].map((item) => (
              <motion.div key={item.num} className="bioai-audience-card" variants={fadeUp}
                whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(0,0,0,0.2)', borderColor: 'var(--gold)' }}
                transition={{ duration: 0.25 }}>
                <div className="bioai-audience-num">{item.num}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </StaggerSection>
        </div>
      </section>

      {/* ── Curriculum ── */}
      <section className="bioai-section-light curriculum-section">
        <div className="bioai-container center fi">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
            <div className="eyebrow">Complete Week-by-Week</div>
            <h2 className="h2">The 8-Week <span className="gt">Curriculum</span></h2>
            <p className="lead center">Complete week-by-week — covering every stage of the NGS bioinformatics workflow using AI tools.</p>
          </motion.div>
          <div className="bioai-curriculum-grid fi" ref={timelineRef}>
            <div className="timeline-line" style={{height: `${timelineProgress * 100}%`}}></div>
            {[
              { week: 'Week 1', title: 'Foundation: AI Tool Stack & Introduction', desc: 'What bioinformatics is and why it matters in 2025 India · Your AI tool stack: Galaxy, ChatGPT, Claude · Browser-based workspace setup — no installation required · Understanding NGS technology and sequencing concepts · Your first FASTQ file: structure, format, and how to read it' },
              { week: 'Week 2', title: 'QC & Pre-processing', desc: 'FastQC on Galaxy — AI interprets every quality metric · Phred scores, adapter contamination, and GC bias explained · Trimmomatic: AI configures, you review and understand output · Before/after QC — knowing when your data is clean to proceed · Hands-on: process a real Indian FASTQ file end-to-end' },
              { week: 'Week 3', title: 'Alignment: Reference Genome', desc: 'What a reference genome is and why we align reads to it · BWA-MEM: AI walks through every parameter — you understand the logic · SAM and BAM formats: structure, sorting, and indexing · Mapping statistics: what 98% alignment rate means · Hands-on: align Indian genomics reads to hg38 — live' },
              { week: 'Week 4', title: 'Variant Calling with GATK', desc: 'SNV vs InDel vs structural variant — explained simply · GATK HaplotypeCaller: AI configures, you follow the logic · VCF file output: every column explained in plain language · GVCF workflow for multi-sample joint calling — overview · Hands-on: call variants on your Indian dataset — output VCF' },
              { week: 'Week 5', title: 'Annotation & Interpretation', desc: 'ClinVar and dbSNP: what they contain and how to query · ANNOVAR/SnpEff: AI runs the tool, you interpret the output · Pathogenic vs benign vs VUS — clinical significance explained · p-values, allele frequency, Hardy-Weinberg demystified · Hands-on: annotate VCF and identify top 3 relevant variants' },
              { week: 'Week 6', title: 'Data Visualisation - No R Required', desc: 'Heatmaps: publication-quality using AI and drag-drop tools · Manhattan plots for GWAS — significance thresholds · PCA (Principal Component Analysis): what it shows · Volcano plots for differential expression analysis · Hands-on: generate 4 visualisation types — no R code' },
              { week: 'Week 7', title: 'GitHub Portfolio & LinkedIn', desc: 'Why GitHub is the most powerful bioinformatics job tool · Profile setup: README — AI writes your first draft · Project 1: NGS pipeline repo with full documentation · Project 2: Indian genomics variant analysis repo · LinkedIn headline and skills — AI-optimised for recruiters' },
              { week: 'Week 8', title: 'Interview Preparation & Placement', desc: '90 Biocon/Syngene questions with model answers · Technical: NGS pipeline, variant interpretation, tools · AI mock interview: 30-minute simulation with feedback · Salary negotiation: word-for-word scripts tested · Cold outreach: LinkedIn and email (34% HR response rate)' },
            ].map((item, idx) => (
              <motion.div key={idx} className="bioai-curriculum-card"
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: (idx % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(27,67,50,0.1)', borderColor: 'var(--forest-mid)' }}>
                <div className="bioai-curriculum-head">
                  <div className="bioai-week-badge">{item.week}</div>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bonus Module ── */}
      <section className="bioai-section-dark">
        <div className="bioai-container center fi">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
            <div className="eyebrow">Bonus Module</div>
            <h2 className="h2">Interview Mastery System — <span className="gt">Included</span></h2>
          </motion.div>
          <StaggerSection className="bioai-bonus-grid fi">
            {[
              '90-question Biocon/Syngene bank with full model answers',
              'AI mock interview simulator with real-time feedback',
              'Salary negotiation scripts — tested, word-for-word',
              '200+ HR contacts + cold outreach templates (34% response rate)',
            ].map((item, idx) => (
              <motion.div key={idx} className="bioai-bonus-card" variants={fadeUp}
                whileHover={{ scale: 1.03, borderColor: 'var(--gold)' }}
                transition={{ duration: 0.2 }}>
                <div className="bioai-bonus-icon shimmer">✓</div>
                <p>{item}</p>
              </motion.div>
            ))}
          </StaggerSection>
        </div>
      </section>

      {/* ── 5 Bonuses ── */}
      <section className="bioai-section-light">
        <div className="bioai-container center fi">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
            <div className="eyebrow">Additional Value</div>
            <h2 className="h2">Five Bonuses Included With the <span className="gt">Program</span></h2>
          </motion.div>
          <StaggerSection className="bioai-bonuses-grid fi">
            {[
              { num: '01', title: '60-Minute Daily Session System', desc: 'Structured 60-minute daily sessions with pre-built weekly schedules for students juggling college, lab work, and internships. No marathon sessions. Built for real student life.' },
              { num: '02', title: 'Zero-Hardware Setup Kit', desc: 'Run enterprise-level NGS analysis on any ₹15,000 laptop or smartphone via browser. Pre-configured Day 1 environments. No installation, no IT support required.' },
              { num: '03', title: 'The Comeback Protocol', desc: 'A re-entry module for students who tried bioinformatics before and stopped. Diagnoses where you got stuck and provides a personalised 2-week sprint forward.' },
              { num: '04', title: 'Cold Recruiter Playbook', desc: 'Word-for-word LinkedIn messages, email, and WhatsApp templates for HR managers at Biocon, Syngene, and 50+ biotech companies — with a verified 34% response rate.' },
              { num: '05', title: 'Real Indian Genomics Dataset Pack', desc: 'Curated NCBI/SRA datasets from Indian population genomics studies covering diabetes, cardiac, and oncology contexts — the exact disease areas top Indian biotech firms ask about in interviews.' },
            ].map((item) => (
              <motion.div key={item.num} className="bioai-bonuses-card" variants={fadeUp}
                whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(27,67,50,0.12)', borderColor: 'var(--forest-mid)' }}
                transition={{ duration: 0.25 }}>
                <div className="bioai-bonuses-head">
                  <div className="bioai-bonuses-num">{item.num}</div>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </StaggerSection>
        </div>
      </section>

      {/* ── Delivery ── */}
      <section className="bioai-section-dark">
        <div className="bioai-container center fi">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
            <div className="eyebrow">Program Delivery</div>
            <h2 className="h2">Live, Recorded & Supported — <span className="gt">All Three</span></h2>
          </motion.div>
          <StaggerSection className="bioai-delivery-grid fi">
            {[
              { icon: '🎥', title: 'Weekly Live Sessions', desc: 'Instructor-led cohort calls every week — real-time Q&A, live demos, and guided walkthroughs of each module.', image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=225&fit=crop&crop=center', fallback: 'https://picsum.photos/seed/live-session/400/225' },
              { icon: '📹', title: 'Self-Paced Recordings', desc: 'Every session is recorded. Rewatch at your own pace as many times as needed. Lifetime access included.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=225&fit=crop&crop=center', fallback: 'https://picsum.photos/seed/recordings/400/225' },
              { icon: '💬', title: 'Community & Support', desc: 'Private WhatsApp group with peers, mentors, and the Deepiotics team — for questions, help, and project feedback throughout the program.', image: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=400&h=225&fit=crop&crop=center', fallback: 'https://picsum.photos/seed/community/400/225' },
            ].map((item, idx) => (
              <motion.div key={idx} className="bioai-delivery-card" variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(0,0,0,0.2)', borderColor: 'var(--gold)' }}
                transition={{ duration: 0.25 }}>
                <div className="bioai-delivery-image">
                  <img src={item.image} alt={item.title} onError={(e) => { e.target.onerror = null; e.target.src = item.fallback; }} />
                </div>
                <div className="bioai-delivery-head">
                  <div className="bioai-delivery-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </StaggerSection>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bioai-section-light cta-section">
        <div className="pulse-orb"></div>
        <div className="bioai-container center fi">
          <div style={{position:'relative',zIndex:1,maxWidth:'680px',margin:'0 auto'}}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
              <div className="eyebrow fi" style={{justifyContent:'center',display:'flex'}}>{'// Take the First Step'}</div>
              <h2 className="h2 fi" style={{marginBottom:'1.25rem'}}>Ready to Start Your <em style={{fontStyle:'italic',background:'var(--grad)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Bioinformatics Career?</em></h2>
              <p className="lead center fi" style={{marginBottom:'3rem'}}>No coding. No prior bioinformatics experience required. Just 60 minutes a day and the drive to build something real.</p>
            </motion.div>
            <motion.div className="cta-btns fi"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <motion.button onClick={openModal} className="btn btn-grad"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 32px rgba(27,67,50,0.32)' }}
                whileTap={{ scale: 0.97 }}>
                Get The Bioinformatics Interview Bible
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <FormModal isOpen={modalOpen} onClose={closeModal} pdfFile="/Bioinformatics_Interview_Bible_Final.pdf" resourceTitle="The Bioinformatics Interview Bible" />
      <Footer />
    </div>
  );
}

export default BioAILabPage;
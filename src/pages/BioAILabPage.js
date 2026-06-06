import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ParticleCanvas from '../components/ParticleCanvas';
import FormModal from '../components/FormModal';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './BioAILabPage.css';

function BioAILabPage() {
  useScrollAnimation();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bioai-page">
      <ParticleCanvas />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bioai-hero">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
        <div className="bioai-hero-inner">
          <div className="hero-eyebrow fi">
            <span className="blink-dot"></span>
            By Deepiotics · Program Brochure 2025
          </div>
          
          <h1 className="fi">
            <span className="grad-text">BioAI Lab</span>
          </h1>

          <p className="bioai-hero-sub fi">
            India's First AI-Powered, No-Code Bioinformatics Program.<br />
            Bioinformatics ka naya tarika — bina coding ke.
          </p>

          <div className="bioai-hero-stats fi">
            <div className="bioai-stat">8-Week Structured Curriculum</div>
            <div className="bioai-stat">No-Code AI-Powered Tools</div>
            <div className="bioai-stat">Job-Ready In 90 Days</div>
          </div>

          <div className="bioai-hero-actions fi">
            <button onClick={openModal} className="btn btn-grad">Get The Bioinformatics Interview Bible</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="sw bioai-section-light">
        <div className="bioai-container center fi">
          <div className="eyebrow">About the Program</div>
          <h2 className="h2">About the Program</h2>
          <p className="lead center">
            BioAI Lab is an 8-week, 100% online program for Biotechnology, Life Science, Microbiology, Genetics, and Biochemistry graduates who want to build a real bioinformatics career — without learning Python or any coding language.
          </p>
          <p className="bioai-desc">
            Students use AI tools like Galaxy, ChatGPT, and Claude to run actual NGS pipelines, analyse real Indian genomic datasets from NCBI/SRA, build a professional GitHub portfolio, and prepare confidently for interviews at Biocon, Syngene, and leading research institutions.
          </p>
        </div>
      </section>

      {/* Program at a Glance */}
      <section className="sw" style={{background:'var(--bg)'}}>
        <div className="bioai-container center fi">
          <div className="eyebrow">Program at a Glance</div>
          <h2 className="h2">What You <span className="gt">Get</span></h2>
          
          <div className="bioai-glance-grid fi">
            <div className="bioai-glance-card">
              <div className="bioai-glance-head">
                <div className="bioai-glance-icon">📚</div>
                <h3>8-Week Structured Curriculum</h3>
              </div>
              <p>AI tools, NGS pipelines, real Indian datasets, GitHub portfolio, and a complete interview preparation system — built week by week. Every module is designed around what bioinformatics employers actually look for.</p>
            </div>

            <div className="bioai-glance-card">
              <div className="bioai-glance-head">
                <div className="bioai-glance-icon">🤖</div>
                <h3>No-Code, AI-Powered Tools</h3>
              </div>
              <p>Run full NGS pipelines using Galaxy, ChatGPT, and Claude. No Python. No terminal. No coding required — ever. If you can use a browser, you can do bioinformatics.</p>
            </div>

            <div className="bioai-glance-card">
              <div className="bioai-glance-head">
                <div className="bioai-glance-icon">💼</div>
                <h3>Job-Ready in 90 Days</h3>
              </div>
              <p>A real GitHub portfolio, a LinkedIn profile optimised for biotech recruiters, and a complete interview preparation system — all built during the program, not after it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="sw bioai-section-light">
        <div className="bioai-container center fi">
          <div className="eyebrow">Target Audience</div>
          <h2 className="h2">Who Is This Program <span className="gt">For?</span></h2>
          
          <div className="bioai-audience-grid fi">
            {[
              { num: '01', title: 'Life Science & Biotech Graduates', desc: 'You have the biology. You understand the science. You just need the bioinformatics skills that labs are hiring for — and a portfolio that proves you can do the work.' },
              { num: '02', title: 'MSc Students Entering the Job Market', desc: 'Your degree got you the interview. BioAI Lab gets you the job — with a GitHub portfolio, real NGS experience, and answers to the exact questions Biocon and Syngene ask.' },
              { num: '03', title: 'Researchers Without Coding Background', desc: 'You do not need Python. You do not need the terminal. Galaxy + AI tools handle the pipelines. You handle the biology. That is the job.' },
              { num: '04', title: 'Career Switchers', desc: 'Lab technicians and research assistants ready to transition into higher-paying bioinformatics analyst roles — on their own timeline.' }
            ].map((item) => (
              <div key={item.num} className="bioai-audience-card">
                <div className="bioai-audience-num">{item.num}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8-Week Curriculum */}
      <section className="sw" style={{background:'var(--bg)'}}>
        <div className="bioai-container center fi">
          <div className="eyebrow">Complete Week-by-Week</div>
          <h2 className="h2">The 8-Week <span className="gt">Curriculum</span></h2>
          <p className="lead center">Complete week-by-week — covering every stage of the NGS bioinformatics workflow using AI tools.</p>
          
          <div className="bioai-curriculum-grid fi">
            {[
              { week: 'Week 1', title: 'Foundation: AI Tool Stack & Introduction', desc: 'What bioinformatics is and why it matters in 2025 India · Your AI tool stack: Galaxy, ChatGPT, Claude · Browser-based workspace setup — no installation required · Understanding NGS technology and sequencing concepts · Your first FASTQ file: structure, format, and how to read it' },
              { week: 'Week 2', title: 'QC & Pre-processing', desc: 'FastQC on Galaxy — AI interprets every quality metric · Phred scores, adapter contamination, and GC bias explained · Trimmomatic: AI configures, you review and understand output · Before/after QC — knowing when your data is clean to proceed · Hands-on: process a real Indian FASTQ file end-to-end' },
              { week: 'Week 3', title: 'Alignment: Reference Genome', desc: 'What a reference genome is and why we align reads to it · BWA-MEM: AI walks through every parameter — you understand the logic · SAM and BAM formats: structure, sorting, and indexing · Mapping statistics: what 98% alignment rate means · Hands-on: align Indian genomics reads to hg38 — live' },
              { week: 'Week 4', title: 'Variant Calling with GATK', desc: 'SNV vs InDel vs structural variant — explained simply · GATK HaplotypeCaller: AI configures, you follow the logic · VCF file output: every column explained in plain language · GVCF workflow for multi-sample joint calling — overview · Hands-on: call variants on your Indian dataset — output VCF' },
              { week: 'Week 5', title: 'Annotation & Interpretation', desc: 'ClinVar and dbSNP: what they contain and how to query · ANNOVAR/SnpEff: AI runs the tool, you interpret the output · Pathogenic vs benign vs VUS — clinical significance explained · p-values, allele frequency, Hardy-Weinberg demystified · Hands-on: annotate VCF and identify top 3 relevant variants' },
              { week: 'Week 6', title: 'Data Visualisation - No R Required', desc: 'Heatmaps: publication-quality using AI and drag-drop tools · Manhattan plots for GWAS — significance thresholds · PCA (Principal Component Analysis): what it shows · Volcano plots for differential expression analysis · Hands-on: generate 4 visualisation types — no R code' },
              { week: 'Week 7', title: 'GitHub Portfolio & LinkedIn', desc: 'Why GitHub is the most powerful bioinformatics job tool · Profile setup: README — AI writes your first draft · Project 1: NGS pipeline repo with full documentation · Project 2: Indian genomics variant analysis repo · LinkedIn headline and skills — AI-optimised for recruiters' },
              { week: 'Week 8', title: 'Interview Preparation & Placement', desc: '90 Biocon/Syngene questions with model answers · Technical: NGS pipeline, variant interpretation, tools · AI mock interview: 30-minute simulation with feedback · Salary negotiation: word-for-word scripts tested · Cold outreach: LinkedIn and email (34% HR response rate)' }
            ].map((item, idx) => (
              <div key={idx} className="bioai-curriculum-card">
                <div className="bioai-curriculum-head">
                  <div className="bioai-week-badge">{item.week}</div>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Module */}
      <section className="sw bioai-section-light">
        <div className="bioai-container center fi">
          <div className="eyebrow">Bonus Module</div>
          <h2 className="h2">Interview Mastery System — <span className="gt">Included</span></h2>
          
          <div className="bioai-bonus-grid fi">
            {[
              '90-question Biocon/Syngene bank with full model answers',
              'AI mock interview simulator with real-time feedback',
              'Salary negotiation scripts — tested, word-for-word',
              '200+ HR contacts + cold outreach templates (34% response rate)'
            ].map((item, idx) => (
              <div key={idx} className="bioai-bonus-card">
                <div className="bioai-bonus-icon">✓</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Bonuses */}
      <section className="sw" style={{background:'var(--bg)'}}>
        <div className="bioai-container center fi">
          <div className="eyebrow">Additional Value</div>
          <h2 className="h2">Five Bonuses Included With the <span className="gt">Program</span></h2>
          
          <div className="bioai-bonuses-grid fi">
            {[
              { num: '01', title: '60-Minute Daily Session System', desc: 'Structured 60-minute daily sessions with pre-built weekly schedules for students juggling college, lab work, and internships. No marathon sessions. Built for real student life.' },
              { num: '02', title: 'Zero-Hardware Setup Kit', desc: 'Run enterprise-level NGS analysis on any ₹15,000 laptop or smartphone via browser. Pre-configured Day 1 environments. No installation, no IT support required.' },
              { num: '03', title: 'The Comeback Protocol', desc: 'A re-entry module for students who tried bioinformatics before and stopped. Diagnoses where you got stuck and provides a personalised 2-week sprint forward.' },
              { num: '04', title: 'Cold Recruiter Playbook', desc: 'Word-for-word LinkedIn messages, email, and WhatsApp templates for HR managers at Biocon, Syngene, and 50+ biotech companies — with a verified 34% response rate.' },
              { num: '05', title: 'Real Indian Genomics Dataset Pack', desc: 'Curated NCBI/SRA datasets from Indian population genomics studies covering diabetes, cardiac, and oncology contexts — the exact disease areas top Indian biotech firms ask about in interviews.' }
            ].map((item) => (
              <div key={item.num} className="bioai-bonuses-card">
                <div className="bioai-bonuses-head">
                  <div className="bioai-bonuses-num">{item.num}</div>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Is Delivered */}
      <section className="sw bioai-section-light">
        <div className="bioai-container center fi">
          <div className="eyebrow">Program Delivery</div>
          <h2 className="h2">Live, Recorded & Supported — <span className="gt">All Three</span></h2>
          
          <div className="bioai-delivery-grid fi">
            {[
              { icon: '🎥', title: 'Weekly Live Sessions', desc: 'Instructor-led cohort calls every week — real-time Q&A, live demos, and guided walkthroughs of each module.' },
              { icon: '📹', title: 'Self-Paced Recordings', desc: 'Every session is recorded. Rewatch at your own pace as many times as needed. Lifetime access included.' },
              { icon: '💬', title: 'Community & Support', desc: 'Private WhatsApp group with peers, mentors, and the Deepiotics team — for questions, help, and project feedback throughout the program.' }
            ].map((item, idx) => (
              <div key={idx} className="bioai-delivery-card">
                <div className="bioai-delivery-head">
                  <div className="bioai-delivery-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <div className="cta-orb"></div>
        <div style={{position:'relative',zIndex:1,maxWidth:'680px',margin:'0 auto'}}>
          <div className="eyebrow fi" style={{justifyContent:'center',display:'flex'}}>// Take the First Step</div>
          <h2 className="h2 fi" style={{marginBottom:'1.25rem'}}>Ready to Start Your <em style={{fontStyle:'italic',background:'var(--grad2)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Bioinformatics Career?</em></h2>
          <p className="lead center fi" style={{marginBottom:'3rem'}}>No coding. No prior bioinformatics experience required. Just 60 minutes a day and the drive to build something real.</p>
          <div className="cta-btns fi">
            <button onClick={openModal} className="btn btn-grad">Get The Bioinformatics Interview Bible</button>
          </div>
        </div>
      </section>

      <FormModal 
        isOpen={modalOpen} 
        onClose={closeModal} 
        pdfFile="/Bioinformatics_Interview_Bible_Final.pdf"
        resourceTitle="The Bioinformatics Interview Bible"
      />

      <Footer />
    </div>
  );
}

export default BioAILabPage;

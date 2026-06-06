import React, { useEffect, useRef } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ParticleCanvas from './ParticleCanvas';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../BioAILab.css';

function BioAILabPage() {
  useScrollAnimation();

  return (
    <div className="bioai-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bioai-hero">
        <ParticleCanvas />
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
            <a href="#register" className="btn btn-grad">Register - Free Workshop</a>
            <div className="bioai-contact-info">
              <span>www.deepiotics.com</span>
              <span>·</span>
              <span>+91 88272 72142</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="sw">
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

      <div className="sec-div"></div>

      {/* Program at a Glance */}
      <section className="sw">
        <div className="bioai-container center fi">
          <div className="eyebrow">Program at a Glance</div>
          <h2 className="h2">What You <span className="gt">Get</span></h2>
          
          <div className="bioai-glance-grid fi">
            <div className="bioai-glance-card">
              <div className="bioai-glance-icon">📚</div>
              <h3>8-Week Structured Curriculum</h3>
              <p>AI tools, NGS pipelines, real Indian datasets, GitHub portfolio, and a complete interview preparation system — built week by week. Every module is designed around what bioinformatics employers actually look for.</p>
            </div>

            <div className="bioai-glance-card">
              <div className="bioai-glance-icon">🤖</div>
              <h3>No-Code, AI-Powered Tools</h3>
              <p>Run full NGS pipelines using Galaxy, ChatGPT, and Claude. No Python. No terminal. No coding required — ever. If you can use a browser, you can do bioinformatics.</p>
            </div>

            <div className="bioai-glance-card">
              <div className="bioai-glance-icon">💼</div>
              <h3>Job-Ready in 90 Days</h3>
              <p>A real GitHub portfolio, a LinkedIn profile optimised for biotech recruiters, and a complete interview preparation system — all built during the program, not after it.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="sec-div"></div>

      {/* Who Is This For */}
      <section className="sw">
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

      <div className="sec-div"></div>

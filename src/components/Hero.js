import React, { useEffect, useRef } from 'react';
import ParticleCanvas from './ParticleCanvas';

function Hero() {
  useEffect(() => {
    const heroElements = document.querySelectorAll('.hero .fi');
    heroElements.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.13}s`;
      setTimeout(() => el.classList.add('show'), 120);
    });
  }, []);

  return (
    <section className="hero">
      <ParticleCanvas />
      <div className="orb orb1" data-parallax="0.3"></div>
      <div className="orb orb2" data-parallax="0.5"></div>
      <div className="orb orb3" data-parallax="0.4"></div>
      <div className="hero-inner">
        <div className="hero-eyebrow fi">
          <span className="blink-dot"></span>
          A Deepiotics Initiative &nbsp;·&nbsp; AI × Biotech Intelligence Platform
        </div>
        <h1 className="fi">
          One Platform.<br />
          Every Biotech<br />
          <span className="grad-text">Breakthrough.</span>
        </h1>
        <p className="hero-sub fi">
          From dissertation to discovery — BioMind Research Institute is the world's first end-to-end academic and research services ecosystem built exclusively for the global biotech community.
        </p>
      </div>
    </section>
  );
}

export default Hero;

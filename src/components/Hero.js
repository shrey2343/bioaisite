import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import ParticleCanvas from './ParticleCanvas';

/* ── light green blob configs ── */
const blobs = [
  {
    style: { width: 500, height: 500, top: '-60px', left: '-80px', background: '#86efac', opacity: 0.30 },
    animate: { x: [0, 30, -10, 0], y: [0, -40, 20, 0] },
    duration: 18,
  },
  {
    style: { width: 400, height: 400, top: '-40px', right: '-60px', background: '#4ade80', opacity: 0.20 },
    animate: { x: [0, -25, 15, 0], y: [0, 30, -20, 0] },
    duration: 22,
  },
  {
    style: { width: 350, height: 350, bottom: '-40px', left: '50%', transform: 'translateX(-50%)', background: '#bbf7d0', opacity: 0.40 },
    animate: { x: [0, 20, -30, 0], y: [0, -20, 30, 0] },
    duration: 15,
  },
  {
    style: { width: 300, height: 300, bottom: '-20px', left: '-40px', background: '#6ee7b7', opacity: 0.25 },
    animate: { x: [0, -15, 25, 0], y: [0, 25, -15, 0] },
    duration: 20,
  },
  {
    style: { width: 250, height: 250, top: '20px', left: '50%', transform: 'translateX(-50%)', background: '#a7f3d0', opacity: 0.35 },
    animate: { x: [0, 20, -10, 0], y: [0, -30, 10, 0] },
    duration: 25,
  },
];

/* ── staggered word reveal ── */
function WordReveal({ text, baseDelay = 0, className = '' }) {
  const prefersReduced = useReducedMotion();
  const words = text.split(' ');

  return (
    <span className={className} style={{ display: 'inline' }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: baseDelay + i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

function Hero() {
  const prefersReduced = useReducedMotion();
  /* CTA delay = after all words animate */
  const headlineWords = 'One Platform. Every Biotech'.split(' ').length + 1; // +1 for "Breakthrough."
  const ctaDelay = headlineWords * 0.04 + 0.3;

  return (
    <section className="hero hero-light">
      {/* ── Light animated blob background ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
          backgroundColor: '#f0faf4',
          overflow: 'hidden',
        }}
      >
        {blobs.map((blob, i) => (
          <motion.div
            key={i}
            aria-hidden="true"
            style={{
              position: 'absolute',
              borderRadius: '9999px',
              filter: 'blur(80px)',
              willChange: 'transform',
              ...blob.style,
            }}
            animate={prefersReduced ? {} : blob.animate}
            transition={{
              duration: blob.duration,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        ))}
      </div>

      <ParticleCanvas />

      {/* ── Hero content ── */}
      <div className="hero-inner" style={{ position: 'relative', zIndex: 10 }}>

        {/* Eyebrow */}
        <motion.div
          className="hero-eyebrow hero-eyebrow--light"
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.02 }}
        >
          <span className="blink-dot"></span>
          <span className="eyebrow-text">A Deepiotics Initiative</span>
          <span className="eyebrow-separator">&nbsp;·&nbsp;</span>
          <span className="eyebrow-text-alt">AI × Biotech Intelligence Platform</span>
        </motion.div>

        {/* Headline with word-by-word reveal */}
        <h1 className="hero-h1-light">
          <WordReveal text="One Platform." baseDelay={0.5} />
          <br />
          <WordReveal text="Every Biotech" baseDelay={0.5 + 2 * 0.04} />
          <br />
          <motion.span
            className="grad-text"
            style={{ display: 'inline-block', fontStyle: 'italic', fontWeight: 700 }}
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + 4 * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            Breakthrough.
          </motion.span>
        </h1>

        {/* Sub */}
        <motion.p
          className="hero-sub hero-sub--light"
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 + headlineWords * 0.04, ease: [0.22, 1, 0.36, 1] }}
        >
          From dissertation to discovery — BioMind Research Institute is the world's first end-to-end academic and research services ecosystem built exclusively for the global biotech community.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: ctaDelay, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe6JxqYEUKk6Zq05XCzhhiaooeZ35dsp6v9M-vmmfySv1-qjA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-grad"
          >
            Apply Online →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

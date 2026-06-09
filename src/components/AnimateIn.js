import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/**
 * Reusable scroll-triggered entrance animation wrapper.
 * Supports direction: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'
 */
function AnimateIn({ children, delay = 0, direction = 'up', className = '', distance = 36 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReduced = useReducedMotion();

  const getInitial = () => {
    if (prefersReduced) return { opacity: 0 };
    switch (direction) {
      case 'down':  return { opacity: 0, y: -distance };
      case 'left':  return { opacity: 0, x: -distance };
      case 'right': return { opacity: 0, x: distance };
      case 'fade':  return { opacity: 0, scale: 0.96 };
      case 'scale': return { opacity: 0, scale: 0.85 };
      case 'up':
      default:      return { opacity: 0, y: distance };
    }
  };

  const getAnimate = () => {
    if (prefersReduced) return isInView ? { opacity: 1 } : { opacity: 0 };
    const base = { opacity: isInView ? 1 : 0 };
    switch (direction) {
      case 'left':
      case 'right': return { ...base, x: isInView ? 0 : direction === 'left' ? -distance : distance };
      case 'fade':  return { ...base, scale: isInView ? 1 : 0.96 };
      case 'scale': return { ...base, scale: isInView ? 1 : 0.85 };
      case 'down':  return { ...base, y: isInView ? 0 : -distance };
      case 'up':
      default:      return { ...base, y: isInView ? 0 : distance };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitial()}
      animate={getAnimate()}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimateIn;

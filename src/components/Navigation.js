import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

function Navigation() {
  const [showTrainingDropdown, setShowTrainingDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeDropdownTimeoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const prefersReduced = useReducedMotion();

  /* Scroll listener — adds glass blur past 60px */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDropdownLinkClick = () => {
    setShowTrainingDropdown(false);
    setMobileMenuOpen(false);
  };

  const clearCloseTimeout = () => {
    if (closeDropdownTimeoutRef.current) {
      clearTimeout(closeDropdownTimeoutRef.current);
      closeDropdownTimeoutRef.current = null;
    }
  };

  const openDropdown = () => { clearCloseTimeout(); setShowTrainingDropdown(true); };
  const closeDropdownDelayed = () => {
    clearCloseTimeout();
    closeDropdownTimeoutRef.current = setTimeout(() => setShowTrainingDropdown(false), 120);
  };
  const toggleDropdown = (e) => {
    e.preventDefault();
    if (window.innerWidth > 768) return;
    clearCloseTimeout();
    setShowTrainingDropdown(!showTrainingDropdown);
  };

  useEffect(() => () => clearCloseTimeout(), []);

  return (
    <motion.nav
      className={`nav-wrapper${scrolled ? ' nav-scrolled' : ''}`}
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to="/" className="logo-wrap">
        <img src="/logo heropage.svg" alt="BioAI Lab" className="logo-img" />
      </Link>

      <button
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
          <span></span><span></span><span></span>
        </span>
      </button>

      <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <li
          className="nav-dropdown-item"
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdownDelayed}
        >
          <a href="#training" onClick={toggleDropdown}>Training ▾</a>
          {showTrainingDropdown && (
            <div
              className="nav-dropdown"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdownDelayed}
            >
              <Link to="/biocodemastery" className="nav-dropdown-link" onClick={handleDropdownLinkClick}>
                <div className="nav-dropdown-title">No-Code Bio-AI</div>
                <div className="nav-dropdown-desc">Biology-first. Zero coding anxiety.</div>
              </Link>
              <Link to="/bioai-lab" className="nav-dropdown-link" onClick={handleDropdownLinkClick}>
                <div className="nav-dropdown-title">Bio-AI Lab Course</div>
                <div className="nav-dropdown-desc">Code meets biology. Real data, real results.</div>
              </Link>
            </div>
          )}
        </li>
        <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a></li>
        <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>Why Us</a></li>
        <li><a href="#blog" onClick={(e) => handleNavClick(e, 'blog')}>Blog</a></li>
      </ul>

      <div className="nav-right">
        <a href="https://wa.me/918827272142" target="_blank" rel="noopener noreferrer" className="nav-whatsapp">
          +91 88272 72142
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe6JxqYEUKk6Zq05XCzhhiaooeZ35dsp6v9M-vmmfySv1-qjA/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Apply Online
        </a>
      </div>
    </motion.nav>
  );
}

export default Navigation;

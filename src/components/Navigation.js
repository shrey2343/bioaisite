import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navigation() {
  const [showTrainingDropdown, setShowTrainingDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeDropdownTimeoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false); // Close mobile menu when clicking a link
    
    // If not on homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleDropdownLinkClick = () => {
    setShowTrainingDropdown(false);
    setMobileMenuOpen(false);
  };

  const clearCloseDropdownTimeout = () => {
    if (closeDropdownTimeoutRef.current) {
      clearTimeout(closeDropdownTimeoutRef.current);
      closeDropdownTimeoutRef.current = null;
    }
  };

  const openTrainingDropdown = () => {
    clearCloseDropdownTimeout();
    setShowTrainingDropdown(true);
  };

  const closeTrainingDropdownWithDelay = () => {
    clearCloseDropdownTimeout();
    // Small delay prevents flicker while moving cursor to dropdown.
    closeDropdownTimeoutRef.current = setTimeout(() => {
      setShowTrainingDropdown(false);
    }, 120);
  };

  const toggleTrainingDropdown = (e) => {
    e.preventDefault();
    // Desktop uses hover; click toggle is only needed for mobile.
    if (window.innerWidth > 768) return;
    clearCloseDropdownTimeout();
    setShowTrainingDropdown(!showTrainingDropdown);
  };

  useEffect(() => {
    return () => clearCloseDropdownTimeout();
  }, []);

  return (
    <nav>
      <Link to="/" className="logo-wrap">
        <img src="/logo.svg" alt="BioAI Lab" className="logo-img" />
      </Link>

      {/* Hamburger Menu Button - Mobile Only */}
      <button 
        className="mobile-menu-btn" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <li 
          className="nav-dropdown-item"
          onMouseEnter={openTrainingDropdown}
          onMouseLeave={closeTrainingDropdownWithDelay}
        >
          <a href="#training" onClick={toggleTrainingDropdown}>Training ▾</a>
          {showTrainingDropdown && (
            <div
              className="nav-dropdown"
              onMouseEnter={openTrainingDropdown}
              onMouseLeave={closeTrainingDropdownWithDelay}
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
        <a 
          href="https://wa.me/918827272142" 
          target="_blank"
          rel="noopener noreferrer"
          className="nav-whatsapp"
        >
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
    </nav>
  );
}

export default Navigation;

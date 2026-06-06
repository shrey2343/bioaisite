import { useEffect } from 'react';

function useScrollAnimation() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('show');
            // Add stagger delay for child elements
            const children = e.target.querySelectorAll('.fi');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('show');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.09, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.fi');
    elements.forEach(el => {
      if (!el.closest('.hero')) {
        obs.observe(el);
      }
    });

    // Parallax effect for orbs and decorative elements
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const orbs = document.querySelectorAll('.orb');
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      
      orbs.forEach((orb, index) => {
        const speed = 0.3 + (index * 0.1);
        const yPos = -(scrolled * speed);
        orb.style.transform = `translateY(${yPos}px)`;
      });

      parallaxElements.forEach(el => {
        const speed = el.dataset.parallax || 0.5;
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px)`;
      });
    };

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add scroll listener with throttle
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });

    return () => {
      elements.forEach(el => obs.unobserve(el));
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);
}

export default useScrollAnimation;

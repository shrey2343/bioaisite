import React from 'react';
import AnnouncementBar from '../components/AnnouncementBar';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import WhoAreYou from '../components/WhoAreYou';
import AudienceSplit from '../components/AudienceSplit';
import Training from '../components/Training';
import Workshop from '../components/Workshop';
import Services from '../components/Services';
import Why from '../components/Why';
import Testimonials from '../components/Testimonials';
import Global from '../components/Global';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="App">
      <AnnouncementBar />
      <Navigation />
      <Hero />
      <div className="sec-div"></div>
      <div className="section-light">
        <WhoAreYou />
      </div>
      <div className="sec-div"></div>
      <div className="section-dark">
        <AudienceSplit />
      </div>
      <div className="sec-div"></div>
      <div id="training" className="section-light">
        <Training />
      </div>
      <div id="workshop" className="section-dark">
        <Workshop />
      </div>
      <div className="sec-div"></div>
      <div id="services" className="section-light">
        <Services />
      </div>
      <div className="sec-div"></div>
      <div id="about" className="section-dark">
        <Why />
      </div>
      <div className="section-light">
        <Testimonials />
      </div>
      <div className="sec-div"></div>
      <div id="blog" className="section-dark">
        <Global />
      </div>
      <div className="section-light">
        <CTA />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

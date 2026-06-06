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
      <WhoAreYou />
      <AudienceSplit />
      <div id="training">
        <Training />
      </div>
      <Workshop />
      <div id="services">
        <Services />
      </div>
      <Why />
      <Testimonials />
      <div id="blog">
        <Global />
      </div>
      <CTA />
      <Footer />
    </div>
  );
}

export default HomePage;

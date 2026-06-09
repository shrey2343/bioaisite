import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import HomePage from './pages/HomePage';
import BioAILabPage from './pages/BioAILabPage';
import NoCodeBioAIPage from './pages/NoCodeBioAIPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <PageTransition>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bioai-lab" element={<BioAILabPage />} />
          <Route path="/biocodemastery" element={<NoCodeBioAIPage />} />
        </Routes>
      </PageTransition>
    </>
  );
}

export default App;

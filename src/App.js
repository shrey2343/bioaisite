import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import BioAILabPage from './pages/BioAILabPage';
import NoCodeBioAIPage from './pages/NoCodeBioAIPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bioai-lab" element={<BioAILabPage />} />
        <Route path="/biocodemastery" element={<NoCodeBioAIPage />} />
      </Routes>
    </>
  );
}

export default App;

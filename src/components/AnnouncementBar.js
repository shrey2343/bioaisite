import React, { useState } from 'react';
import FormModal from './FormModal';

function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className="abar" id="abar">
        <div className="abar-inner">
          <span className="abar-badge">Free Download</span>
          <span className="abar-text">
            <strong>The Bioinformatics Interview Bible</strong> — 20 real interview questions with model answers
          </span>
          <button onClick={openModal} className="abar-btn">Download Free →</button>
        </div>
        <button className="abar-x" onClick={() => setVisible(false)}>×</button>
      </div>

      <FormModal 
        isOpen={modalOpen} 
        onClose={closeModal} 
        pdfFile="/Bioinformatics_Interview_Bible_Final.pdf"
        resourceTitle="The Bioinformatics Interview Bible"
      />
    </>
  );
}

export default AnnouncementBar;

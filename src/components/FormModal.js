import React, { useEffect, useRef } from 'react';

function FormModal({ isOpen, onClose, pdfFile, resourceTitle }) {
  const iframeRef = useRef(null);
  const loadCountRef = useRef(0);

  useEffect(() => {
    if (isOpen) {
      loadCountRef.current = 0;
    }
  }, [isOpen]);

  const handleIframeLoad = () => {
    loadCountRef.current += 1;
    
    // Second load means form was submitted and confirmation page is showing
    if (loadCountRef.current === 2) {
      // Trigger PDF download
      const link = document.createElement('a');
      link.href = pdfFile;
      link.download = pdfFile.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Close modal after a short delay
      setTimeout(() => {
        onClose();
      }, 1500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{resourceTitle}</h3>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className="modal-body">
          <iframe
            ref={iframeRef}
            src="https://docs.google.com/forms/d/e/1FAIpQLSfuCvYRfzn6M-1oiyjcDz29BroVRPWWlssgifQVKkvfyxBXgA/viewform?embedded=true"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            onLoad={handleIframeLoad}
            title="Download Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default FormModal;

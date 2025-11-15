import { useEffect, useRef } from 'react';

function WelcomeModal({ isOpen, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal-card">
        <h2>Welcome to Recycle Right!</h2>
        <p>Learn how to sort items correctly and reduce waste contamination.</p>
        <button 
          id="closeWelcome" 
          ref={closeButtonRef}
          onClick={onClose}
        >
          Got it
        </button>
      </div>
    </div>
  );
}

export default WelcomeModal;


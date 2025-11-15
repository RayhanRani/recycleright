import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import WelcomeModal from './components/WelcomeModal';
import Info from './pages/Info';
import AppIdea from './pages/AppIdea';
import HelpGettingStarted from './pages/HelpGettingStarted';
import HelpAccessibility from './pages/HelpAccessibility';
import NotFound from './pages/NotFound';
import './assets/style.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if modal was already dismissed in this session
    const modalDismissed = sessionStorage.getItem('welcomeModalDismissed');
    if (!modalDismissed) {
      // Show modal on every page load/route change until dismissed
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [location]);

  const handleCloseModal = () => {
    setShowModal(false);
    sessionStorage.setItem('welcomeModalDismissed', 'true');
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/info" replace />} />
        <Route path="/info" element={<Info />} />
        <Route path="/app" element={<AppIdea />} />
        <Route path="/help-getting-started" element={<HelpGettingStarted />} />
        <Route path="/help-accessibility" element={<HelpAccessibility />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <WelcomeModal isOpen={showModal} onClose={handleCloseModal} />
    </>
  );
}

export default App;


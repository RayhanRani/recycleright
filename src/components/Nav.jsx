import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="site-nav">
      <Link className="brand" to="/info">Recycle Right</Link>
      <button 
        className="nav-toggle" 
        aria-label="Toggle navigation"
        onClick={toggleNav}
      >
        ☰
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link 
            to="/info" 
            aria-current={location.pathname === '/info' ? 'page' : undefined}
          >
            Information
          </Link>
        </li>
        <li>
          <Link 
            to="/app" 
            aria-current={location.pathname === '/app' ? 'page' : undefined}
          >
            Web App Idea
          </Link>
        </li>
        <li>
          <Link 
            to="/help-getting-started" 
            aria-current={location.pathname === '/help-getting-started' ? 'page' : undefined}
          >
            Getting Started
          </Link>
        </li>
        <li>
          <Link 
            to="/help-accessibility" 
            aria-current={location.pathname === '/help-accessibility' ? 'page' : undefined}
          >
            Accessibility
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

